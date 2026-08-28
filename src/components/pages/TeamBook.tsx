"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROMPTS, PROMPT_COUNTS, PROMPTS_TOTAL } from "@/lib/prompts-data";
import { AGENTS, AGENTS_TOTAL } from "@/lib/agents-data";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// «NCAi · книга команды» (/team-book) — методологическая книга про команду под капотом,
// по эталону exnihilo/kniga-bota: шапка «17 сотрудников · 111 промптов», поиск ⌘K,
// разделы (Обзор / Сотрудники по отделам / Промпты по группам / Как править),
// карточки 17 агентов (раскрывающиеся), каталог 111 промптов в 9 категориях,
// механика работы (agency-operations.md) и приложения.

const CAT_META: Record<string, { emoji: string; desc: string; descEn: string }> = {
	разработка: { emoji: "⚙️", desc: "AI-агенты, live-coding, сборка цифровых продуктов без программистов.", descEn: "AI agents, live-coding, building digital products without programmers." },
	маркетинг: { emoji: "📣", desc: "Креативы, трафик, охваты, блог и приборная панель метрик.", descEn: "Creatives, traffic, reach, blog and a metrics dashboard." },
	контент: { emoji: "✍️", desc: "Удержание, доверие и конвейер AI-копирайтинга «контент за 6 шагов».", descEn: "Retention, trust and the 6-step AI copywriting pipeline." },
	финансы: { emoji: "💰", desc: "Юнит-экономика, цены, бюджет и денежный поток.", descEn: "Unit economics, pricing, budget and cash flow." },
	продажи: { emoji: "🎯", desc: "Воронки, офферы, скрипты, доверие и аналитика продаж.", descEn: "Funnels, offers, scripts, trust and sales analytics." },
	базы: { emoji: "🗄️", desc: "Таблицы, миграции, RLS, индексы и SQL-запросы.", descEn: "Tables, migrations, RLS, indexes and SQL queries." },
	qa: { emoji: "🧪", desc: "Тест-планы, баг-репорты, smoke- и регресс-проверки.", descEn: "Test plans, bug reports, smoke and regression checks." },
	книги: { emoji: "📖", desc: "План книги, главы, редактура и лид-магнит из рукописи.", descEn: "Book plan, chapters, editing and a lead magnet from the manuscript." },
	услуги: { emoji: "🧰", desc: "ТЗ на услугу, карточки, презентации и онбординг клиентов.", descEn: "Service specs, cards, pitches and client onboarding." },
};
const CAT_ORDER = Object.keys(CAT_META);

// Отделы: порядок + эмодзи + описание (из agents.json / agency-operations.md)
const DEPT_META: Record<string, { emoji: string; desc: string; descEn: string }> = {
	"Владелец": { emoji: "👑", desc: "Основатель NCAi. Стратегия, бюджет, направление. Не запускается — ручные решения.", descEn: "NCAi founder. Strategy, budget, direction. Human decisions." },
	"Управление": { emoji: "🎯", desc: "Директор-продюсер: режет задачи, делегирует отделам, контролирует сроки и качество.", descEn: "Director-producer: splits tasks, delegates, controls quality." },
	"Разработка": { emoji: "⚙️", desc: "Архитектура, код, боты, мини-аппы, базы данных, промпт-инжиниринг.", descEn: "Architecture, code, bots, mini apps, databases, prompt engineering." },
	"Маркетинг": { emoji: "📈", desc: "Трафик, воронки, контент, креативы, SMM, нейрокопирайтинг.", descEn: "Traffic, funnels, content, creatives, SMM, neurocopywriting." },
	"Контент и книга": { emoji: "📖", desc: "Книга «Нейро-воронка», редактура, база знаний.", descEn: "The Neuro-Funnel book, editing, knowledge base." },
	"Финансы": { emoji: "💰", desc: "Юнит-экономика, цены, бюджеты, аналитика данных.", descEn: "Unit economics, pricing, budgets, data analytics." },
};
const DEPT_ORDER = ["Владелец", "Управление", "Разработка", "Маркетинг", "Контент и книга", "Финансы"];

const BOT_LINK = "https://t.me/ilya_novator";

// Механика: конвейер задачи (из agency-operations.md, гл. 1)
const PIPELINE: { n: string; title: string; titleEn: string; who: string; desc: string; descEn: string }[] = [
	{ n: "1", title: "Заказ", titleEn: "Order", who: "Оператор", desc: "Кнопка «Заказать» в Telegram → анкета → услуга из каталога или свободная задача.", descEn: "“Order” button in Telegram → form → service or free task." },
	{ n: "2", title: "Планер", titleEn: "Planner", who: "Бэкенд", desc: "Задача с номером, сроком и исполнителем попадает в projects.json (статус todo).", descEn: "Task with number, deadline, assignee lands in projects.json (todo)." },
	{ n: "3", title: "Роутер", titleEn: "Router", who: "Автоконвейер", desc: "Ключевые слова задачи → агент по отделу; непонятное → директор (разбивает и делегирует).", descEn: "Keywords → agent by department; unclear → director splits and delegates." },
	{ n: "4", title: "Контекст", titleEn: "Context", who: "Агент", desc: "Заряд + база знаний + навыки + промпты + реестр задач подставляются в ТЗ.", descEn: "Charge + knowledge base + skills + prompts + task registry into the brief." },
	{ n: "5", title: "Выполнение", titleEn: "Execution", who: "Агент", desc: "hermes -z с моделью по тиру задачи: делает, проверяет, не выдумывает цифры.", descEn: "hermes -z with a model per task tier: does the work, verifies it." },
	{ n: "6", title: "Отчёт", titleEn: "Report", who: "Агент", desc: "Обязательный отчёт: что сделано, статус, файлы, как проверить.", descEn: "Mandatory report: what was done, status, files, how to verify." },
	{ n: "7", title: "Проверка", titleEn: "Review", who: "Продюсер / менеджер", desc: "Критерий готовности: файлы есть, сборка работает, нет воды. ОК → done, нет → в todo с фидбеком.", descEn: "Done-when criteria: files exist, build works. OK → done, else → back to todo." },
	{ n: "8", title: "Сдача", titleEn: "Delivery", who: "Система", desc: "Результат в панели клиента + Telegram-уведомление о завершении.", descEn: "Result in the client panel + Telegram notification." },
	{ n: "9", title: "Архив", titleEn: "Archive", who: "Автоконвейер", desc: "Выполненные уходят в архив с датой; при необходимости возвращаются.", descEn: "Done tasks go to archive with date; can be restored." },
];

// Контекст агента при запуске (из agency-operations.md, гл. 2)
const CONTEXT_SOURCES: { icon: string; title: string; what: string }[] = [
	{ icon: "🧠", title: "Заряд (charge)", what: "Инструкция-промпт: роль, зона ответственности, стандарт сдачи, отчёт." },
	{ icon: "📚", title: "База знаний", what: "knowledge/: стек, проекты, стандарты, методики — читаются заново." },
	{ icon: "🛠", title: "Навыки (skills)", what: "До 3 навыков на запуск — передаются в команду через --skills." },
	{ icon: "🗂", title: "Промпты (prompts.db)", what: "Готовые промпты категории агента через get_agent_prompts()." },
	{ icon: "📋", title: "Реестр задач", what: "Что открыто, что в работе, что сделано (TASKS_REGISTRY.md)." },
	{ icon: "📁", title: "Проект", what: "Имя, цель, контекст проекта клиента (projects.json)." },
	{ icon: "📈", title: "Журналы и статистика", what: "Что агент уже делал и сколько стоило (agent_stats.json, .run/)." },
];

// Кодекс качества — штрафы (из agency-operations.md, гл. 5)
const PENALTIES: { level: string; color: string; examples: string; effect: string }[] = [
	{ level: "L1", color: "#e0c14d", examples: "Опечатка, не тот URL, забытый файл", effect: "Запись в журнал, переделка бесплатно, 1 выговор" },
	{ level: "L2", color: "#e8853d", examples: "Не прочитал ТЗ, сломал соседний модуль, сдал непроверенное", effect: "Переделка за свой счёт, +2 выговора, обязательное ревью" },
	{ level: "L3", color: "#e84040", examples: "Выдуманные данные, слив секрета, повторный L2", effect: "Задача другому, «скамейка» 24 ч, уведомление владельца" },
	{ level: "L4", color: "#b03030", examples: "Три L2 или два L3 за месяц", effect: "Исключение из команды (из agents.json)" },
];

export default function TeamBook() {
	const { lang } = useLang();
	const ru = lang === "ru";

	const [q, setQ] = useState("");
	const [openAgents, setOpenAgents] = useState<Record<string, boolean>>({});
	const [openDepts, setOpenDepts] = useState<Record<string, boolean>>({});
	const [openCats, setOpenCats] = useState<Record<string, boolean>>({});
	const [copied, setCopied] = useState<string | null>(null);
	const [copiedAll, setCopiedAll] = useState<string | null>(null);
	const searchRef = useRef<HTMLInputElement>(null);

	// ⌘K / Ctrl+K → фокус в поиск
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				searchRef.current?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	// ── Данные ──
	const deptCounts = useMemo(() => {
		const m: Record<string, number> = {};
		for (const a of AGENTS) m[a.department] = (m[a.department] || 0) + 1;
		return m;
	}, []);

	const modelStats = useMemo(() => {
		const m: Record<string, number> = {};
		for (const a of AGENTS) m[a.model] = (m[a.model] || 0) + 1;
		return m;
	}, []);

	const managers = useMemo(() => AGENTS.filter((a) => a.petrov_level === "менеджер" || a.petrov_level === "директор"), []);

	// ── Поиск: фильтруем и агентов, и промпты ──
	const norm = (s: string) => s.toLowerCase().trim();

	const matchedAgents = useMemo(() => {
		const needle = norm(q);
		if (!needle) return AGENTS;
		return AGENTS.filter((a) =>
			norm(`${a.name} ${a.role} ${a.department} ${a.description} ${a.skills.join(" ")} ${a.knowledge_base.join(" ")}`).includes(needle),
		);
	}, [q]);

	const groups = useMemo(() => {
		const countMap: Record<string, number> = {};
		for (const c of PROMPT_COUNTS) countMap[c.category] = c.count;
		const byCat: Record<string, typeof PROMPTS> = {};
		for (const p of PROMPTS) (byCat[p.category] ||= []).push(p);
		const needle = norm(q);
		const matched: Record<string, number> = {};
		for (const p of PROMPTS) {
			const hay = norm(`${p.title} ${p.prompt} ${p.id} ${p.tags.join(" ")}`);
			if (hay.includes(needle)) matched[p.category] = (matched[p.category] || 0) + 1;
		}
		return CAT_ORDER.map((cat) => {
			const list = byCat[cat] || [];
			return {
				category: cat,
				count: countMap[cat] ?? list.length,
				list,
				has: list.length > 0,
				matched: needle ? matched[cat] || 0 : list.length,
			};
		});
	}, [q]);

	const visibleGroups = useMemo(() => groups.filter((g) => !q || g.matched > 0), [groups, q]);
	const anyPromptMatch = q ? PROMPTS.some((p) => norm(`${p.title} ${p.prompt} ${p.id}`).includes(norm(q))) : true;
	const anyAgentMatch = q ? matchedAgents.length > 0 : true;

	const toggleAgent = (id: string) => setOpenAgents((s) => ({ ...s, [id]: !s[id] }));
	const toggleDept = (d: string) => setOpenDepts((s) => ({ ...s, [d]: !s[d] }));
	const toggleCat = (cat: string) => setOpenCats((s) => ({ ...s, [cat]: !s[cat] }));

	// Раскрывать всё при поиске
	useEffect(() => {
		if (q) {
			const nextAgents: Record<string, boolean> = {};
			for (const a of matchedAgents) nextAgents[a.id] = true;
			setOpenAgents(nextAgents);
			const nextDepts: Record<string, boolean> = {};
			for (const d of DEPT_ORDER) if (matchedAgents.some((a) => a.department === d)) nextDepts[d] = true;
			setOpenDepts(nextDepts);
			const nextCats: Record<string, boolean> = {};
			for (const g of visibleGroups) if (g.matched > 0) nextCats[g.category] = true;
			setOpenCats(nextCats);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [q]);

	const copyText = async (text: string, id: string) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const ta = document.createElement("textarea");
			ta.value = text;
			ta.style.position = "fixed";
			ta.style.opacity = "0";
			document.body.appendChild(ta);
			ta.select();
			try {
				document.execCommand("copy");
			} catch {
				/* noop */
			}
			document.body.removeChild(ta);
		}
		setCopied(id);
		window.setTimeout(() => setCopied((c) => (c === id ? null : c)), 1600);
	};

	const copyAll = async (cat: string) => {
		const g = groups.find((x) => x.category === cat);
		if (!g) return;
		const text = g.list.map((p) => `## ${p.title}\n${p.prompt}`).join("\n\n---\n\n");
		await copyText(text, `all-${cat}`);
		setCopiedAll(cat);
		window.setTimeout(() => setCopiedAll((c) => (c === cat ? null : c)), 1600);
	};

	const t = (r: string, en: string) => (ru ? r : en);

	// Статы «Платформа сейчас»
	const stats = [
		{ value: `${AGENTS_TOTAL}`, label: t("сотрудников", "employees"), sub: t("17 AI-агентов в 6 ролях", "17 AI agents in 6 roles") },
		{ value: `${DEPT_ORDER.length}`, label: t("отделов", "departments"), sub: t("по Системе Петрова", "by Petrov's system") },
		{ value: `${PROMPTS_TOTAL}`, label: t("промптов", "prompts"), sub: t("в 9 категориях", "in 9 categories") },
		{ value: "5 мин", label: t("цикл конвейера", "pipeline cycle"), sub: t("автоконвейер 24/7", "autopipeline 24/7") },
	];

	return (
		<PageShell>
			{/* ── Шапка: бейдж + «17 сотрудников · 111 промптов» + поиск ── */}
			<header className="pb-hero">
				<div className="w pb-hero-in">
					<p className="pb-kicker">{t("NCAi · команда под капотом", "NCAi · the team under the hood")}</p>
					<h1 className="pb-title">{t("Книга команды", "The Team Book")}</h1>
					<p className="pb-sub">
						{t(
							`${AGENTS_TOTAL} сотрудников · ${PROMPTS_TOTAL} промптов. Как AI-команда NCAi работает сама: кто есть кто, чем занят каждый отдел, из чего собирается задача и где живут готовые промпты.`,
							`${AGENTS_TOTAL} employees · ${PROMPTS_TOTAL} prompts. How the NCAi AI team runs itself: who is who, what each department does, how a task is assembled and where ready prompts live.`,
						)}
					</p>
					<div className="pb-search-wrap">
						<span className="pb-search-icon">⌕</span>
						<input
							ref={searchRef}
							className="pb-search"
							type="search"
							placeholder={t("Поиск: сотрудник, промпт, тема, id…", "Search: employee, prompt, topic, id…")}
							value={q}
							onChange={(e) => setQ(e.target.value)}
							aria-label={t("Поиск по команде и промптам", "Search team and prompts")}
						/>
						<kbd className="pb-kbd">⌘K</kbd>
						{q && (
							<button type="button" className="pb-clear" onClick={() => setQ("")} aria-label={t("Сбросить поиск", "Clear search")}>
								✕
							</button>
						)}
					</div>
					<p className="pb-meta">
						<span>{t("Сотрудников", "Employees")}</span>
						<strong>{AGENTS_TOTAL}</strong>
						<span className="dot">·</span>
						<span>{t("Промптов", "Prompts")}</span>
						<strong>{PROMPTS_TOTAL}</strong>
						<span className="dot">·</span>
						<span>{t("Категорий", "Categories")}</span>
						<strong>{PROMPT_COUNTS.filter((c) => c.count > 0).length}</strong>
						<span className="dot">·</span>
						<span>{t("Обновлено", "Updated")}</span>
						<strong>28 августа 2026</strong>
					</p>
				</div>
			</header>

			{/* ── Sticky-навигация по разделам ── */}
			<nav className="pb-nav" aria-label={t("Разделы страницы", "Page sections")}>
				<div className="w pb-nav-in">
					<span className="pb-nav-l">{t("РАЗДЕЛЫ", "SECTIONS")}</span>
					<a href="#obzor" className="pb-nav-i">{t("Обзор", "Overview")}</a>
					<a href="#sotrudniki" className="pb-nav-i">{t("Сотрудники", "Employees")}</a>
					<a href="#katalog" className="pb-nav-i">{t("Каталог промптов", "Prompt catalog")}</a>
					<a href="#mehanika" className="pb-nav-i">{t("Механика", "Mechanics")}</a>
					<a href="#prilozheniya" className="pb-nav-i">{t("Приложения", "Appendices")}</a>
				</div>
			</nav>

			<main className="w pb-main">
				{/* ══ РАЗДЕЛ 1 · ОБЗОР ══ */}
				<section id="obzor" className="pb-sec">
					<h2 className="pb-h2">{t("Обзор", "Overview")}</h2>
					<p className="pb-sec-sub">
						{t(
							"NCAi — не «чат с ИИ», а агентная система: 17 цифровых сотрудников с ролями, отделами, базами знаний и зарядом. Система делает рутину сама, 24/7, по регламенту — и не увольняется.",
							"NCAi is not a “chat with AI” but an agent system: 17 digital employees with roles, departments, knowledge bases and charge. The system does routine work itself, 24/7, by the rules — and never quits.",
						)}
					</p>

					{/* Платформа сейчас */}
					<div className="tb-stats-head">
						<h3 className="tb-block-title">{t("Команда сейчас", "The team now")}</h3>
						<span className="tb-stats-note">{t("Собрано по живому коду — agents.json + prompts.db", "Assembled from live code — agents.json + prompts.db")}</span>
					</div>
					<div className="tb-stats">
						{stats.map((s) => (
							<div key={s.label} className="tb-stat">
								<div className="tb-stat-value">{s.value}</div>
								<div className="tb-stat-label">{s.label}</div>
								<div className="tb-stat-sub">{s.sub}</div>
							</div>
						))}
					</div>

					<div className="tb-model-bar">
						{Object.entries(modelStats).map(([model, c]) => (
							<span key={model} className="tb-model-chip">
								<em>{c}</em> {model}
							</span>
						))}
						<span className="tb-model-note">
							{t("complex — reasoning-модель · routine — локальная Ollama", "complex — reasoning model · routine — local Ollama")}
						</span>
					</div>

					<div className="pb-cards">
						<div className="pb-card">
							<h3 className="pb-card-h">{t("С чего начать", "Where to start")}</h3>
							<ul className="pb-card-list">
								<li>{t("Хочешь понять, кто за что отвечает → раздел «Сотрудники»: 17 карточек по отделам.", "Want to know who does what → “Employees”: 17 cards by department.")}</li>
								<li>{t("Ищешь готовый промпт → поиск наверху (⌘K) или каталог ниже.", "Looking for a ready prompt → search on top (⌘K) or the catalog below.")}</li>
								<li>{t("Хочешь увидеть, как задача проходит команду → раздел «Механика».", "Want to see how a task flows through the team → “Mechanics”.")}</li>
								<li>{t("Каждый промпт копируется одной кнопкой.", "Every prompt copies with a single button.")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Как это устроено", "How it works")}</h3>
							<ul className="pb-card-list">
								<li>{t("Система Петрова: 1 директор → менеджеры отделов → специалисты.", "Petrov's system: 1 director → department managers → specialists.")}</li>
								<li>{t("4 продукта-отдела: Разработка, Маркетинг, Контент и книга, Финансы.", "4 product departments: Dev, Marketing, Content & Book, Finance.")}</li>
								<li>{t("Автоконвейер сканирует планер каждые 5 минут и закрывает задачи.", "An auto-pipeline scans the planner every 5 minutes and closes tasks.")}</li>
								<li>{t("Каждый запуск агента — самодостаточное ТЗ: заряд + знания + навыки + промпты.", "Every agent run is a self-contained brief: charge + knowledge + skills + prompts.")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Как править", "How to edit")}</h3>
							<ul className="pb-card-list">
								<li>{t("Агенты живут в agents.json; промпты — в prompts.db (prompts_store.py).", "Agents live in agents.json; prompts in prompts.db (prompts_store.py).")}</li>
								<li>{t("Страница перегенерируется скриптами scripts/gen_agents_data.py и gen_prompts_data.py.", "The page is regenerated by scripts/gen_agents_data.py and gen_prompts_data.py.")}</li>
								<li>{t("Категории: разработка, маркетинг, контент, финансы, продажи, базы, qa, книги, услуги.", "Categories: dev, marketing, content, finance, sales, databases, qa, books, services.")}</li>
							</ul>
						</div>
					</div>

					{/* Промпты по группам — сводная таблица */}
					<h3 className="tb-block-title tb-block-title-2">{t("Промпты по группам", "Prompts by group")}</h3>
					<table className="pb-table">
						<thead>
							<tr>
								<th>{t("Группа", "Group")}</th>
								<th className="num">{t("Всего", "Total")}</th>
							</tr>
						</thead>
						<tbody>
							{groups
								.filter((g) => g.count > 0)
								.map((g) => (
									<tr key={g.category}>
										<td>
											<a href="#katalog" onClick={() => toggleCat(g.category)} className="pb-table-cat">
												<span className="pb-table-e">{CAT_META[g.category]?.emoji}</span>
												{g.category}
											</a>
										</td>
										<td className="num">{g.count}</td>
									</tr>
								))}
						</tbody>
					</table>
					<p className="pb-table-note">
						{t("Полный каталог с копированием — ниже, в разделе «Каталог промптов».", "Full catalog with copy buttons is below, in “Prompt catalog”.")}
					</p>
				</section>

				{/* ══ РАЗДЕЛ 2 · СОТРУДНИКИ ПО ОТДЕЛАМ ══ */}
				<section id="sotrudniki" className="pb-sec">
					<h2 className="pb-h2">{t("Сотрудники по отделам", "Employees by department")}</h2>
					<p className="pb-sec-sub">
						{t(
							`${AGENTS_TOTAL} цифровых сотрудников в ${DEPT_ORDER.length} отделах. Раскрой карточку — увидишь навыки, базу знаний, модель и «заряд» (рабочую инструкцию).`,
							`${AGENTS_TOTAL} digital employees in ${DEPT_ORDER.length} departments. Open a card to see skills, knowledge base, model and the “charge” (working instruction).`,
						)}
					</p>
					<p className="tb-orgline">
						<span className="tb-orgline-k">{t("Пирамида", "Pyramid")}</span>
						<span className="tb-orgline-v">
							{t("👑 Владелец → 🎯 Директор → менеджеры отделов (⚙️ 📈 📖 💰) → специалисты. «Сначала сделал — потом получил».", "👑 Owner → 🎯 Director → department managers (⚙️ 📈 📖 💰) → specialists. “First you do, then you get paid.”")}
						</span>
					</p>

					<div className="tb-depts">
						{DEPT_ORDER.map((dept) => {
							const list = AGENTS.filter((a) => a.department === dept);
							if (list.length === 0) return null;
							const meta = DEPT_META[dept];
							const isOpen = !!openDepts[dept];
							return (
								<div key={dept} className={`tb-dept${isOpen ? " is-open" : ""}`}>
									<button type="button" className="tb-dept-head" onClick={() => toggleDept(dept)} aria-expanded={isOpen}>
										<span className="tb-dept-emoji">{meta?.emoji}</span>
										<span className="tb-dept-title">{dept}</span>
										<span className="tb-dept-count">{list.length}</span>
										<span className="pb-cat-caret">{isOpen ? "−" : "+"}</span>
									</button>
									{isOpen && (
										<div className="tb-dept-body">
											<p className="tb-dept-desc">{ru ? meta?.desc : meta?.descEn}</p>
											<div className="tb-agents">
												{list.map((a) => {
													const open = !!openAgents[a.id];
													return (
														<article key={a.id} className={`tb-agent${open ? " is-open" : ""}`} id={`agent-${a.id}`}>
															<button type="button" className="tb-agent-head" onClick={() => toggleAgent(a.id)} aria-expanded={open}>
																<span className="tb-agent-avatar" style={{ background: a.avatar_bg }}>{a.emoji}</span>
																<span className="tb-agent-main">
																	<span className="tb-agent-name">{a.name}</span>
																	<span className="tb-agent-role">{a.role}</span>
																</span>
																<span className={`tb-agent-tag tb-agent-tag-${a.petrov_level}`}>{a.petrov_level}</span>
																{a.can_run ? (
																	<span className="tb-agent-tag tb-agent-run">▶ запуск</span>
																) : (
																	<span className="tb-agent-tag tb-agent-human">человек</span>
																)}
																<span className="tb-agent-caret">{open ? "−" : "+"}</span>
															</button>
															{open && (
																<div className="tb-agent-body">
																	<p className="tb-agent-desc">{a.description}</p>
																	{a.lead_of && <p className="tb-agent-lead">⤷ {t("Руководит", "Leads")}: {a.lead_of}</p>}

																	<div className="tb-agent-col">
																		<h4>{t("Навыки", "Skills")}</h4>
																		<div className="tb-chips">
																			{a.skills.map((s) => (
																				<span key={s} className="tb-chip">{s}</span>
																			))}
																		</div>
																	</div>

																	<div className="tb-agent-col">
																		<h4>{t("База знаний", "Knowledge base")}</h4>
																		<ul className="tb-kb">
																			{a.knowledge_base.map((k) => (
																				<li key={k}>{k}</li>
																			))}
																		</ul>
																	</div>

																	<div className="tb-agent-foot">
																		<span className="tb-agent-model"><em>model</em> {a.model}</span>
																		<span className="tb-agent-tier"><em>tier</em> {a.model_tier}</span>
																		<span className="tb-agent-hint">{a.run_hint}</span>
																	</div>

																	{a.charge && (
																		<div className="tb-agent-charge">
																			<h4>{t("Заряд (рабочая инструкция)", "Charge (working instruction)")}</h4>
																			<p>{a.charge}</p>
																		</div>
																	)}
																</div>
															)}
														</article>
													);
												})}
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>

					{q && !anyAgentMatch && (
						<div className="pb-empty">
							{t("Сотрудники по запросу не найдены", "No employees found for")} «{q}».
						</div>
					)}
				</section>

				{/* ══ РАЗДЕЛ 3 · КАТАЛОГ ПРОМПТОВ ══ */}
				<section id="katalog" className="pb-sec">
					<h2 className="pb-h2">{t("Каталог промптов", "Prompt catalog")}</h2>
					<p className="pb-sec-sub">
						{t(
							`${PROMPTS_TOTAL} готовых промптов из базы NCAi в ${PROMPT_COUNTS.filter((c) => c.count > 0).length} категориях. Раскрой группу — скопируй промпт или всю группу.`,
							`${PROMPTS_TOTAL} ready prompts from the NCAi base in ${PROMPT_COUNTS.filter((c) => c.count > 0).length} categories. Open a group and copy a prompt or the whole group.`,
						)}
					</p>

					{q && !anyPromptMatch && (
						<div className="pb-empty">
							{t("Промпты по запросу не найдены", "No prompts found for")} «{q}».
						</div>
					)}

					<div className="pb-cats">
						{visibleGroups.map((g) => {
							const isOpen = !!openCats[g.category];
							const meta = CAT_META[g.category];
							return (
								<div key={g.category} className={`pb-cat${isOpen ? " is-open" : ""}${!g.has ? " is-empty" : ""}`}>
									<button
										type="button"
										className="pb-cat-head"
										onClick={() => toggleCat(g.category)}
										aria-expanded={isOpen}
										disabled={!g.has}
									>
										<span className="pb-cat-emoji">{meta?.emoji}</span>
										<span className="pb-cat-title">{g.category}</span>
										<span className="pb-cat-count">{q ? g.matched : g.count}</span>
										<span className="pb-cat-caret">{isOpen ? "−" : "+"}</span>
									</button>
									{isOpen && g.has && (
										<div className="pb-cat-body">
											<div className="pb-cat-top">
												<p className="pb-cat-desc">{ru ? meta?.desc : meta?.descEn}</p>
												<button type="button" className="pb-btn pb-btn-ghost" onClick={() => copyAll(g.category)}>
													{copiedAll === g.category ? t("Скопировано ✓", "Copied ✓") : t("Скопировать группу", "Copy group")}
												</button>
											</div>
											<div className="pb-prompts">
												{g.list.map((p) => (
													<article key={p.id} className="pb-prompt" id={`prompt-${p.id}`}>
														<header className="pb-prompt-h">
															<div className="pb-prompt-id">{p.id}</div>
															<h3 className="pb-prompt-title">{p.title}</h3>
															<button
																type="button"
																className="pb-btn pb-copy"
																onClick={() => copyText(p.prompt, p.id)}
																aria-label={t(`Скопировать промпт ${p.id}`, `Copy prompt ${p.id}`)}
															>
																{copied === p.id ? t("Скопировано ✓", "Copied ✓") : t("Скопировать", "Copy")}
															</button>
														</header>
														<p className="pb-prompt-src">{p.source}</p>
														<pre className="pb-prompt-text">{p.prompt}</pre>
													</article>
												))}
											</div>
										</div>
									)}
									{!g.has && (
										<div className="pb-cat-empty">
											{t("Промпты этой категории — в работе. Загляни позже.", "Prompts in this category are in progress. Check back later.")}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</section>

				{/* ══ РАЗДЕЛ 4 · МЕХАНИКА ══ */}
				<section id="mehanika" className="pb-sec">
					<h2 className="pb-h2">{t("Механика: как команда выполняет задачи", "Mechanics: how the team does the work")}</h2>
					<p className="pb-sec-sub">
						{t(
							"Жизненный цикл задачи — конвейер без человека в петле. Оператор даёт доступы и материалы, команда делает остальное.",
							"The task lifecycle — a pipeline without a human in the loop. The operator gives access and materials, the team does the rest.",
						)}
					</p>

					{/* Конвейер */}
					<div className="tb-pipe">
						{PIPELINE.map((step, i) => (
							<div key={step.n} className="tb-pipe-step">
								<div className="tb-pipe-num">
									{step.n}
									{i < PIPELINE.length - 1 && <span className="tb-pipe-arrow">→</span>}
								</div>
								<div className="tb-pipe-body">
									<h4>{ru ? step.title : step.titleEn}</h4>
									<p className="tb-pipe-who">{ru ? step.who : step.who}</p>
									<p className="tb-pipe-desc">{ru ? step.desc : step.descEn}</p>
								</div>
							</div>
						))}
					</div>

					<h3 className="tb-block-title tb-block-title-2">{t("Что получает агент в каждом запуске", "What an agent gets on every run")}</h3>
					<p className="tb-sec-note">
						{t(
							"Каждый запуск — самодостаточное ТЗ: субагент не видит «прошлый разговор», весь контекст подставляется в текст задачи.",
							"Every run is a self-contained brief: the subagent sees no “previous chat”, all context is injected into the task text.",
						)}
					</p>
					<div className="tb-ctx-grid">
						{CONTEXT_SOURCES.map((c) => (
							<div key={c.title} className="tb-ctx">
								<span className="tb-ctx-icon">{c.icon}</span>
								<h4>{c.title}</h4>
								<p>{c.what}</p>
							</div>
						))}
					</div>

					<h3 className="tb-block-title tb-block-title-2">{t("Кодекс качества: штрафы L1–L4", "Quality code: L1–L4 penalties")}</h3>
					<div className="tb-pen">
						{PENALTIES.map((p) => (
							<div key={p.level} className="tb-pen-row">
								<span className="tb-pen-level" style={{ borderColor: p.color, color: p.color }}>{p.level}</span>
								<span className="tb-pen-ex">{p.examples}</span>
								<span className="tb-pen-eff">{p.effect}</span>
							</div>
						))}
					</div>

					<h3 className="tb-block-title tb-block-title-2">{t("Гарантии системы", "System guarantees")}</h3>
					<div className="pb-cards">
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Без потерь", "No losses")}</h3>
							<ul className="pb-card-list">
								<li>{t("Любая задача имеет след: планер + реестр + журнал запуска + архив.", "Every task leaves a trace: planner + registry + run log + archive.")}</li>
								<li>{t("Упавшее выполнение возвращается в todo и перезапускается в следующем цикле.", "A failed run returns to todo and restarts in the next cycle.")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Без копирования", "No copying")}</h3>
							<ul className="pb-card-list">
								<li>{t("Одна задача = один агент (правило продюсера), дедупликация запусков.", "One task = one agent (producer rule), run dedup.")}</li>
								<li>{t("Workspace клиента изолирован; AI-бюджет ограничен kill-switch.", "Client workspaces are isolated; AI budget is capped by kill-switch.")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Контекст живёт в файлах", "Context lives in files")}</h3>
							<ul className="pb-card-list">
								<li>{t("Заряд в каждой задаче, знания в knowledge/, промпты в prompts.db — не в «голове» модели.", "Charge in every task, knowledge in knowledge/, prompts in prompts.db — not in the model's “head”.")}</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ══ РАЗДЕЛ 5 · ПРИЛОЖЕНИЯ ══ */}
				<section id="prilozheniya" className="pb-sec">
					<h2 className="pb-h2">{t("Приложения", "Appendices")}</h2>
					<div className="pb-cards">
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Что чинить", "What to fix")}</h3>
							<ul className="pb-card-list">
								<li>{t("Агент изменился в agents.json → запусти scripts/gen_agents_data.py и пересобери сайт.", "Agent changed in agents.json → run scripts/gen_agents_data.py and rebuild.")}</li>
								<li>{t("Промпт добавлен/поправлен в prompts.db → запусти scripts/gen_prompts_data.py.", "Prompt added/edited in prompts.db → run scripts/gen_prompts_data.py.")}</li>
								<li>{t("Нет категории → добавь в каноничный список CATEGORIES в prompts_store.py.", "Missing category → add to the canonical CATEGORIES list in prompts_store.py.")}</li>
								<li>{t("Скрипты читают базу напрямую и пишут src/lib/*-data.ts — правки не теряются при сборке.", "Scripts read the DB directly and write src/lib/*-data.ts — edits survive rebuilds.")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Связать с ботом", "Connect with the bot")}</h3>
							<p className="pb-card-p">
								{t(
									"Вся команда и промпты работают в Telegram: закажи задачу, и агент возьмёт её с зарядом, знаниями и промптами из этой книги.",
									"The whole team and prompts work in Telegram: order a task, and an agent picks it up with charge, knowledge and prompts from this book.",
								)}
							</p>
							<a href={BOT_LINK} target="_blank" rel="noopener noreferrer" className="pb-btn pb-btn-primary">
								{t("Открыть в Telegram →", "Open in Telegram →")}
							</a>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Управленцы команды", "Team managers")}</h3>
							<ul className="tb-mgr-list">
								{managers.map((m) => (
									<li key={m.id}>
										<span className="tb-mgr-e">{m.emoji}</span>
										<a href={`#agent-${m.id}`} className="tb-mgr-name">{m.name}</a>
										<span className="tb-mgr-role">{m.role}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</PageShell>
	);
}
