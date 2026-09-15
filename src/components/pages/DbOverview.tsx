"use client";

import React from "react";
import dbOverview from "@/lib/db-overview.json";
import "@/styles/db-overview.css";

/**
 * DbOverview — контент закрытой страницы /inside («что под капотом»).
 * Клиентский компонент, подключается ТОЛЬКО после ввода пароля (dynamic ssr:false),
 * поэтому данные БД не попадают в статический HTML страницы.
 *
 * Данные — снапшот Postgres (src/lib/db-overview.json), генерируется локально
 * скриптом scripts/gen_db_overview.py (read-only доступ к ncai-postgres).
 */

/* ── Типы снапшота ── */

interface CountRow {
  status?: string;
  project?: string;
  priority?: string;
  size?: string;
  category?: string;
  agent_id?: string;
  count: number;
}

interface TaskRow {
  id: string;
  title: string;
  status: string;
  assigned_to: string;
  priority: string;
  size: string;
  revision_count: number;
  sort_key: string;
}

interface AgentRow {
  id: string;
  name: string;
  role: string;
  department: string;
  lead_of: string;
  emoji: string;
  avatar_color: string;
  status: string;
  model: string;
  model_tier: string;
  can_run: boolean;
  petrov_level: string;
}

interface LessonRow {
  id: string;
  title: string;
  agent_id: string;
  updated_at: string;
}

interface BizBlock {
  id: string;
  title: string;
  content: string;
}

interface DbSnapshot {
  generated_at: string;
  source: string;
  tasks: {
    by_status: CountRow[];
    by_project: CountRow[];
    by_priority: CountRow[];
    by_size: CountRow[];
    recent: TaskRow[];
  };
  agents: AgentRow[];
  knowledge: { total: number; by_category: CountRow[] };
  goals: { id: string; title: string; content: string };
  lessons: LessonRow[];
  business: BizBlock[];
  runs: {
    by_status: CountRow[];
    by_agent: CountRow[];
    total: number;
    error_count: number;
    cost_usd: number;
    duration_sec: number;
  };
  summary: {
    tasks_total: number;
    tasks_done: number;
    agents_total: number;
    knowledge_total: number;
    runs_total: number;
    runs_cost_usd: number;
  };
}

const data = dbOverview as DbSnapshot;

/* ── Вспомогательные ── */

function fmtDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function fmtSec(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  if (h > 0) return `${h} ч ${m} мин`;
  if (m > 0) return `${m} мин`;
  return `${Math.round(sec)} сек`;
}

const STATUS_LABEL: Record<string, string> = {
  done: "Готово",
  todo: "В очереди",
  review: "На проверке",
  in_progress: "В работе",
  needs_revision: "Правка",
  blocked: "Заблокировано",
  error: "Ошибка",
  failed: "Провал",
  timeout: "Таймаут",
  running: "Выполняется",
  blocked_balance: "Нет баланса",
  unknown: "Неизвестно",
};

const STATUS_TONE: Record<string, string> = {
  done: "ok",
  todo: "mut",
  review: "warn",
  in_progress: "live",
  needs_revision: "bad",
  blocked: "bad",
  error: "bad",
  failed: "bad",
  timeout: "warn",
  running: "live",
  blocked_balance: "warn",
  unknown: "mut",
};

function statusLabel(s: string): string {
  return STATUS_LABEL[s] ?? s;
}

function shortModel(m: string): string {
  return m.replace("deepseek/", "").replace("local-ollama/", "");
}

/* ── Мини-рендер markdown (заголовки, таблицы, списки, абзацы, жирный/код) ── */

function inline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**") && p.length > 4) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith("`") && p.endsWith("`") && p.length > 2) {
      return (
        <code key={i} className="docs-code">
          {p.slice(1, -1)}
        </code>
      );
    }
    return p;
  });
}

function renderMd(src: string): React.ReactNode {
  const lines = src.split("\n");
  const out: React.ReactNode[] = [];
  let key = 0;
  let list: { type: "ul" | "ol"; items: React.ReactNode[] } | null = null;
  let table: string[][] = [];
  let inTable = false;

  const flushList = () => {
    if (!list) return;
    const items = list.items;
    if (list.type === "ol") {
      out.push(
        <ol key={`ol-${key++}`} className="docs-list">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>,
      );
    } else {
      out.push(
        <ul key={`ul-${key++}`} className="docs-list">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>,
      );
    }
    list = null;
  };

  const flushTable = () => {
    if (!inTable || !table.length) return;
    out.push(
      <div key={`tbl-${key++}`} className="docs-table-wrap">
        <table className="docs-table">
          <thead>
            <tr>
              {table[0].map((c, i) => (
                <th key={i}>{inline(c)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.slice(1).map((row, ri) => (
              <tr key={ri}>
                {row.map((c, i) => (
                  <td key={i}>{inline(c)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    table = [];
    inTable = false;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("|")) {
      flushList();
      const cells = line.split("|").slice(1, -1).map((c) => c.trim());
      if (cells.length && cells.every((c) => /^:?-+:?$/.test(c))) {
        // строка-разделитель таблицы — пропускаем
        continue;
      }
      if (!inTable) {
        table = [];
        inTable = true;
      }
      table.push(cells);
      continue;
    }
    if (inTable) flushTable();

    const trimmed = line.trim();

    if (/^#\s+/.test(trimmed)) {
      // первый H1 документа пропускаем (заголовок уже в шапке карточки)
      flushList();
      continue;
    } else if (/^##\s+/.test(trimmed)) {
      flushList();
      out.push(
        <h3 key={`h3-${key++}`} className="db-md-h3">
          {trimmed.slice(3).trim()}
        </h3>,
      );
    } else if (/^###\s+/.test(trimmed)) {
      flushList();
      out.push(
        <h4 key={`h4-${key++}`} className="db-md-h4">
          {trimmed.slice(4).trim()}
        </h4>,
      );
    } else if (/^[-*]\s+/.test(trimmed)) {
      if (!list || list.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list.items.push(inline(trimmed.slice(2).trim()));
    } else if (/^\d+\.\s+/.test(trimmed)) {
      if (!list || list.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list.items.push(inline(trimmed.replace(/^\d+\.\s+/, "")));
    } else if (trimmed.startsWith("> ")) {
      flushList();
      out.push(
        <blockquote key={`q-${key++}`} className="docs-quote">
          {inline(trimmed.slice(2))}
        </blockquote>,
      );
    } else if (trimmed === "---") {
      flushList();
      out.push(<hr key={`hr-${key++}`} className="docs-hr" />);
    } else if (trimmed === "") {
      flushList();
    } else {
      flushList();
      out.push(
        <p key={`p-${key++}`} className="db-md-p">
          {inline(trimmed)}
        </p>,
      );
    }
  }
  flushList();
  flushTable();
  return out;
}

/* ── Мини-компоненты ── */

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? Math.max(2, Math.round((value / max) * 100)) : 0;
  return (
    <div className="db-bar-row">
      <span className="db-bar-label">{label}</span>
      <div className="db-bar-track">
        <div className="db-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="db-bar-val">{value}</span>
    </div>
  );
}

function StatCard({ num, label, accent }: { num: string; label: string; accent?: boolean }) {
  return (
    <div className={`db-stat${accent ? " db-stat-accent" : ""}`}>
      <div className="db-stat-num">{num}</div>
      <div className="db-stat-lab">{label}</div>
    </div>
  );
}

function Section({ id, title, note, children }: { id: string; title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="db-section" id={id}>
      <h2 className="db-h2">
        {title}
        {note ? <span className="db-h2-note">{note}</span> : null}
      </h2>
      {children}
    </section>
  );
}

function ToneBadge({ tone, children }: { tone: string; children: React.ReactNode }) {
  return <span className={`db-badge db-badge-${tone}`}>{children}</span>;
}

/* ── Основной компонент ── */

export default function DbOverview() {
  const s = data.summary;
  const maxStatus = Math.max(...data.tasks.by_status.map((r) => r.count), 1);
  const maxCat = Math.max(...data.knowledge.by_category.map((r) => r.count), 1);
  const maxAgentRuns = Math.max(...data.runs.by_agent.map((r) => r.count), 1);

  // Канонические категории знаний (по ТЗ): lessons/services/methodology/prompts/spec/goals
  const CANONICAL = ["lessons", "services", "methodology", "prompts", "spec", "goals"];
  const canonMap = new Map(data.knowledge.by_category.map((c) => [c.category, c.count]));
  const canonicalRows = CANONICAL.map((cat) => ({ category: cat, count: canonMap.get(cat) ?? 0 }));
  const otherRows = data.knowledge.by_category.filter((c) => !CANONICAL.includes(c.category!));

  // Группировка команды по отделам
  const depts = new Map<string, AgentRow[]>();
  for (const a of data.agents) {
    const arr = depts.get(a.department) ?? [];
    arr.push(a);
    depts.set(a.department, arr);
  }

  return (
    <main className="docs-page db-page">
      <div className="db-shell">
        <p className="docs-back">
          <a href="/">← NcAi · на главную</a>
          <span className="docs-back-sep">·</span>
          <span>внутренняя страница</span>
        </p>

        <header className="db-head">
          <h1 className="db-title">Под капотом NCAi</h1>
          <p className="db-sub">
            Закрытый обзор базы знаний агентства — задачи, команда, знания, прогоны, цели,
            уроки и бизнес-документы. Всё из Postgres в человекочитаемом виде.
          </p>
          <p className="db-meta">
            <span>Снапшот: {fmtDate(data.generated_at)}</span>
            <span className="db-meta-sep">·</span>
            <span>{data.source}</span>
          </p>
        </header>

        <div className="db-stats">
          <StatCard num={String(s.tasks_total)} label="Задачи всего" />
          <StatCard num={String(s.tasks_done)} label="Задач готово" accent />
          <StatCard num={String(s.agents_total)} label="Агентов в команде" />
          <StatCard num={String(s.knowledge_total)} label="Источников знаний" />
          <StatCard num={String(s.runs_total)} label="Прогонов агентов" />
          <StatCard num={`$${s.runs_cost_usd}`} label="Расход на модели" />
        </div>

        {/* ── Задачи ── */}
        <Section id="tasks" title="Задачи" note={`всего ${s.tasks_total} · готово ${s.tasks_done} (${Math.round((s.tasks_done / s.tasks_total) * 100)}%)`}>
          <div className="db-grid-2">
            <div className="db-card">
              <h3 className="db-h3">По статусам</h3>
              <div className="db-bars">
                {data.tasks.by_status.map((r) => (
                  <Bar key={r.status} label={statusLabel(r.status!)} value={r.count} max={maxStatus} />
                ))}
              </div>
            </div>
            <div className="db-card">
              <h3 className="db-h3">По проектам</h3>
              <div className="db-bars">
                {data.tasks.by_project.map((r) => (
                  <Bar key={r.project} label={r.project!} value={r.count} max={maxStatus} />
                ))}
              </div>
              <div className="db-chips">
                <h3 className="db-h3">Приоритет / размер</h3>
                <div className="db-chips-row">
                  {data.tasks.by_priority.map((r) => (
                    <span key={r.priority} className="db-chip">{r.priority}: {r.count}</span>
                  ))}
                  {data.tasks.by_size.map((r) => (
                    <span key={r.size} className="db-chip">size {r.size}: {r.count}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="db-card">
            <h3 className="db-h3">Последние задачи</h3>
            <div className="docs-table-wrap">
              <table className="docs-table db-table">
                <thead>
                  <tr>
                    <th>Задача</th>
                    <th>Статус</th>
                    <th>Кому</th>
                    <th>Правок</th>
                  </tr>
                </thead>
                <tbody>
                  {data.tasks.recent.map((t) => (
                    <tr key={t.id}>
                      <td className="db-task-title">{t.title}</td>
                      <td>
                        <ToneBadge tone={STATUS_TONE[t.status] ?? "mut"}>{statusLabel(t.status)}</ToneBadge>
                      </td>
                      <td>{t.assigned_to || "—"}</td>
                      <td>{t.revision_count || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* ── Команда ── */}
        <Section id="team" title="Команда агентов" note={`${s.agents_total} агентов`}>
          {Array.from(depts.entries()).map(([dept, agents]) => (
            <div key={dept} className="db-card db-dept">
              <h3 className="db-h3">{dept} <span className="db-h2-note">· {agents.length}</span></h3>
              <div className="db-agents">
                {agents.map((a) => (
                  <div key={`${a.id}-${a.name}`} className="db-agent">
                    <div className="db-agent-emoji" style={{ background: a.avatar_color ? `${a.avatar_color}22` : undefined }}>
                      {a.emoji || a.name.slice(0, 1)}
                    </div>
                    <div className="db-agent-body">
                      <div className="db-agent-name">
                        {a.name}
                        {a.can_run && <span className="db-agent-run">может исполнять</span>}
                      </div>
                      <div className="db-agent-role">{a.role}</div>
                      {a.lead_of && <div className="db-agent-lead">ведёт: {a.lead_of}</div>}
                      <div className="db-agent-meta">
                        <ToneBadge tone={a.status === "online" ? "live" : a.status === "busy" ? "warn" : "mut"}>{a.status}</ToneBadge>
                        <span className="db-agent-model">{shortModel(a.model)}</span>
                        <span className="db-agent-tier">{a.model_tier}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* ── Знания ── */}
        <Section id="knowledge" title="Знания" note={`${s.knowledge_total} источников · 24 категории`}>
          <div className="db-grid-2">
            <div className="db-card">
              <h3 className="db-h3">Канонические категории</h3>
              <div className="db-bars">
                {canonicalRows.map((r) => (
                  <Bar key={r.category} label={r.category} value={r.count} max={maxCat} />
                ))}
              </div>
            </div>
            <div className="db-card">
              <h3 className="db-h3">Остальные категории</h3>
              <div className="db-chips-row">
                {otherRows.map((r) => (
                  <span key={r.category} className="db-chip">{r.category}: {r.count}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── Прогоны ── */}
        <Section id="runs" title="Прогоны агентов" note={`${data.runs.total} запусков · ошибок ${data.runs.error_count}`}>
          <div className="db-stats db-stats-3">
            <StatCard num={String(data.runs.total)} label="Всего прогонов" />
            <StatCard num={String(data.runs.error_count)} label="Ошибки / таймауты" />
            <StatCard num={`$${data.runs.cost_usd}`} label={`Расход · ${fmtSec(data.runs.duration_sec)}`} />
          </div>
          <div className="db-grid-2">
            <div className="db-card">
              <h3 className="db-h3">По статусам</h3>
              <div className="db-bars">
                {data.runs.by_status.map((r) => (
                  <Bar key={r.status} label={statusLabel(r.status!)} value={r.count} max={maxAgentRuns} />
                ))}
              </div>
            </div>
            <div className="db-card">
              <h3 className="db-h3">По агентам</h3>
              <div className="db-bars">
                {data.runs.by_agent.map((r) => (
                  <Bar key={r.agent_id} label={r.agent_id!} value={r.count} max={maxAgentRuns} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── Цели ── */}
        <Section id="goals" title="Цели" note={data.goals.id}>
          <div className="db-card db-md">{renderMd(data.goals.content)}</div>
        </Section>

        {/* ── Уроки ── */}
        <Section id="lessons" title="Уроки" note={`${data.lessons.length} записей`}>
          <div className="db-card">
            <ul className="db-lessons">
              {data.lessons.map((l) => (
                <li key={l.id} className="db-lesson">
                  <span className="db-lesson-title">{l.title}</span>
                  <span className="db-lesson-meta">{l.id}{l.updated_at ? ` · ${l.updated_at}` : ""}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ── Бизнес-блоки ── */}
        <Section id="business" title="Бизнес-документы" note="тарифы · воронка · голос · соцдоказательство">
          <div className="db-biz">
            {data.business.map((b) => (
              <div key={b.id} className="db-card db-biz-card">
                <h3 className="db-h3">{b.title}</h3>
                <div className="db-md">{renderMd(b.content)}</div>
              </div>
            ))}
          </div>
        </Section>

        <p className="db-foot">Страница защищена паролем · данные — read-only снапшот Postgres (ncai-postgres)</p>
      </div>
    </main>
  );
}
