#!/usr/bin/env python3
"""Генерирует src/lib/prompts-data.ts из prompts.db (hermes-mini-app).

Запуск: python3 scripts/gen_prompts_data.py
Источник: /Users/air/hermes-mini-app/prompts.db (таблица prompts, активные).
"""
from __future__ import annotations

import json
import sqlite3
from pathlib import Path

DB = Path("/Users/air/hermes-mini-app/prompts.db")
OUT = Path(__file__).resolve().parent.parent / "src" / "lib" / "prompts-data.ts"

# Каноничный порядок категорий (из prompts_store.CATEGORIES)
CATEGORIES = [
    "разработка", "маркетинг", "контент", "финансы",
    "продажи", "базы", "qa", "книги", "услуги",
]

con = sqlite3.connect(DB)
con.row_factory = sqlite3.Row
rows = con.execute(
    "SELECT id, category, title, prompt, source, tags FROM prompts WHERE active = 1 ORDER BY category, id"
).fetchall()
con.close()

by_cat: dict[str, list[dict]] = {c: [] for c in CATEGORIES}
for r in rows:
    tags = json.loads(r["tags"]) if r["tags"] else []
    by_cat.setdefault(r["category"], []).append(
        {
            "id": r["id"],
            "category": r["category"],
            "title": r["title"],
            "prompt": r["prompt"],
            "source": r["source"],
            "tags": tags,
        }
    )

total = len(rows)
assert total == 111, f"Ожидалось 111 промптов, получено {total}"

lines = []
lines.append("// АВТОГЕНЕРИРУЕМЫЙ ФАЙЛ: данные из prompts_store.py (промптовая база NCAi).")
lines.append("// Регенерация: python3 scripts/gen_prompts_data.py (источник — /Users/air/hermes-mini-app/prompts.db).")
lines.append("")
lines.append("export interface PromptItem {")
lines.append("\tid: string;")
lines.append("\tcategory: string;")
lines.append("\ttitle: string;")
lines.append("\tprompt: string;")
lines.append("\tsource: string;")
lines.append("\ttags: string[];")
lines.append("}")
lines.append("")
lines.append("export interface PromptCount {")
lines.append("\tcategory: string;")
lines.append("\tcount: number;")
lines.append("}")
lines.append("")
lines.append("export const PROMPTS: PromptItem[] = [")

def js_str(s: str) -> str:
    # JSON escape почти совпадает с TS-строкой; заменяем только спецсимволы строки
    return json.dumps(s, ensure_ascii=False)

for cat in CATEGORIES:
    for p in by_cat.get(cat, []):
        lines.append("\t{")
        lines.append(f"\t\tid: {js_str(p['id'])},")
        lines.append(f"\t\tcategory: {js_str(p['category'])},")
        lines.append(f"\t\ttitle: {js_str(p['title'])},")
        lines.append(f"\t\tprompt: {js_str(p['prompt'])},")
        lines.append(f"\t\tsource: {js_str(p['source'])},")
        tags = ", ".join(js_str(t) for t in p["tags"])
        lines.append(f"\t\ttags: [{tags}],")
        lines.append("\t},")
lines.append("];")
lines.append("")
lines.append("export const PROMPT_COUNTS: PromptCount[] = [")
for cat in CATEGORIES:
    c = len(by_cat.get(cat, []))
    lines.append(f"\t{{ category: {js_str(cat)}, count: {c} }},")
lines.append("];")
lines.append("")
lines.append(f"export const PROMPTS_TOTAL = {total};")
lines.append("")

OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"OK: {total} промптов записано в {OUT}")

# Контрольная сводка
for cat in CATEGORIES:
    print(f"  {cat}: {len(by_cat.get(cat, []))}")
