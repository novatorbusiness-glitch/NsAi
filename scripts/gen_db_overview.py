#!/usr/bin/env python3
"""Генерирует src/lib/db-overview.json — снапшот базы знаний NCAi из Postgres.

Запуск (локально, на Mac с поднятым контейнером ncai-postgres):
    python3 scripts/gen_db_overview.py

Источник: контейнер ncai-postgres (postgres:16-alpine), БД `ncai`, схема public.
Доступ read-only через `docker exec ncai-postgres psql` (local socket = trust, без пароля).

Зачем снапшот, а не живой запрос: сайт — статический экспорт (Next `output:'export'`,
деплой GitHub Pages в CI на ubuntu-latest, где Postgres недоступен). Поэтому данные
извлекаются из Postgres ЗДЕСЬ и коммитятся как JSON; страница /inside рендерит снапшот.
Обновление снапшота — повторный запуск скрипта + push.
"""
from __future__ import annotations

import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "src" / "lib" / "db-overview.json"

PSQL = ["docker", "exec", "ncai-postgres", "psql", "-U", "ncai", "-d", "ncai", "-t", "-A"]


def q(query: str) -> str:
    """Выполнить read-only запрос, вернуть stdout (сырой текст)."""
    proc = subprocess.run(
        PSQL + ["-c", query],
        capture_output=True,
        text=True,
        check=False,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"psql failed ({proc.returncode}):\n{proc.stderr.strip()}")
    return proc.stdout.strip()


def q_json(query: str):
    """Выполнить запрос, который возвращает один JSON-документ (json_agg), распарсить."""
    raw = q(query)
    if not raw:
        return []
    return json.loads(raw)


def q_text(query: str) -> str:
    """Вернуть значение единственной text-колонки (например, content)."""
    return q(query)


def main() -> None:
    snapshot: dict = {
        "generated_at": datetime.now(timezone.utc).astimezone().isoformat(),
        "source": "Postgres ncai-postgres / db=ncai / schema=public (read-only)",
    }

    # ── Задачи ──
    snapshot["tasks"] = {
        "by_status": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC) FROM "
            "(SELECT status, count(*) AS count FROM tasks GROUP BY status) t"
        ),
        "by_project": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC) FROM "
            "(SELECT COALESCE(p.name, t.project_id, '(без проекта)') AS project, count(*) AS count "
            "FROM tasks t LEFT JOIN projects p ON p.id = t.project_id GROUP BY 1) t"
        ),
        "by_priority": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC) FROM "
            "(SELECT COALESCE(priority, '(нет)') AS priority, count(*) AS count FROM tasks GROUP BY priority) t"
        ),
        "by_size": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC) FROM "
            "(SELECT COALESCE(size, '(нет)') AS size, count(*) AS count FROM tasks GROUP BY size) t"
        ),
        "recent": q_json(
            "SELECT json_agg(t ORDER BY t.sort_key DESC) FROM ("
            "SELECT id, title, status, COALESCE(assigned_to,'') AS assigned_to, "
            "COALESCE(priority,'') AS priority, COALESCE(size,'') AS size, "
            "COALESCE(revision_count,0) AS revision_count, "
            "COALESCE(created_at, now()) AS sort_key "
            "FROM tasks ORDER BY sort_key DESC LIMIT 15) t"
        ),
    }

    # ── Команда ──
    snapshot["agents"] = q_json(
        "SELECT json_agg(t ORDER BY t.department, t.id) FROM ("
        "SELECT id, name, role, department, COALESCE(lead_of,'') AS lead_of, "
        "COALESCE(emoji,'') AS emoji, COALESCE(avatar_color,'') AS avatar_color, "
        "status, model, model_tier, can_run, petrov_level "
        "FROM agents) t"
    )

    # ── Знания (knowledge_sources) ──
    snapshot["knowledge"] = {
        "by_category": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC, t.category) FROM "
            "(SELECT category, count(*) AS count FROM knowledge_sources GROUP BY category) t"
        ),
    }
    snapshot["knowledge"]["total"] = sum(
        c["count"] for c in snapshot["knowledge"]["by_category"]
    )

    # Цели
    snapshot["goals"] = {
        "id": "goals-2026-q4",
        "title": "Цели NCAi: сентябрь — запуск воронки+трафик, октябрь — 2-3 распаковки MVP",
        "content": q_text("SELECT content FROM knowledge_sources WHERE id = 'goals-2026-q4'"),
    }

    # Уроки
    snapshot["lessons"] = q_json(
        "SELECT json_agg(t ORDER BY t.id) FROM ("
        "SELECT id, title, COALESCE(agent_id,'') AS agent_id, "
        "to_char(updated_at, 'YYYY-MM-DD HH24:MI') AS updated_at "
        "FROM knowledge_sources WHERE category = 'lessons' OR id LIKE 'lessons-%') t"
    )

    # Бизнес-блоки (тарифы, путь клиента, голос Ильи, соцдоказательство)
    def biz(src_id: str, title: str) -> dict:
        return {"id": src_id, "title": title, "content": q_text(
            f"SELECT content FROM knowledge_sources WHERE id = '{src_id}'"
        )}

    snapshot["business"] = [
        biz("tariff-grid", "Тарифная сетка NCAi"),
        biz("customer-journey-funnel", "Путь клиента по воронке"),
        biz("voice-ilya", "Голос Ильи (эталон текстов)"),
        biz("social-proof-ilya", "Соцдоказательство и история Ильи"),
    ]

    # ── Прогоны (agent_runs) ──
    snapshot["runs"] = {
        "by_status": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC) FROM "
            "(SELECT status, count(*) AS count FROM agent_runs GROUP BY status) t"
        ),
        "by_agent": q_json(
            "SELECT json_agg(t ORDER BY t.count DESC) FROM "
            "(SELECT agent_id, count(*) AS count FROM agent_runs GROUP BY agent_id) t"
        ),
    }
    snapshot["runs"]["total"] = sum(c["count"] for c in snapshot["runs"]["by_status"])
    snapshot["runs"]["error_count"] = sum(
        c["count"] for c in snapshot["runs"]["by_status"]
        if c["status"] in ("error", "failed", "timeout")
    )
    agg = q_json(
        "SELECT json_agg(t) FROM ("
        "SELECT round(sum(COALESCE(cost_usd,0))::numeric, 2) AS cost_usd, "
        "round(sum(COALESCE(duration_sec,0))::numeric, 0) AS duration_sec, "
        "count(DISTINCT model) AS distinct_models "
        "FROM agent_runs) t"
    )
    snapshot["runs"]["cost_usd"] = agg[0]["cost_usd"] if agg else 0
    snapshot["runs"]["duration_sec"] = agg[0]["duration_sec"] if agg else 0

    # ── Сводные счётчики для шапки ──
    status_map = {c["status"]: c["count"] for c in snapshot["tasks"]["by_status"]}
    snapshot["summary"] = {
        "tasks_total": sum(status_map.values()),
        "tasks_done": status_map.get("done", 0),
        "agents_total": len(snapshot["agents"]),
        "knowledge_total": snapshot["knowledge"]["total"],
        "runs_total": snapshot["runs"]["total"],
        "runs_cost_usd": snapshot["runs"]["cost_usd"],
    }

    OUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"OK: {snapshot['summary']}")
    print(f"  знания по категориям: {len(snapshot['knowledge']['by_category'])} категорий")
    print(f"  уроки: {len(snapshot['lessons'])} · бизнес-блоки: {len(snapshot['business'])}")
    print(f"  записано: {OUT}")


if __name__ == "__main__":
    main()
