"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PROMPTS, PROMPT_COUNTS, PROMPTS_TOTAL } from "@/lib/prompts-data";
import { BOOK_CHAPTER_SUBS, BOOK_INTRO_LINKS } from "@/lib/book-data";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// «NCAi · книга промптов» — переделка /prompts по эталону exnihilo/kniga-bota:
// шапка с поиском (⌘K), разделы-обзор, книга (главы), каталог промптов
// (группы по категориям с эмодзи и счётчиками), приложения.

// Эмодзи и короткие описания категорий (каноничный порядок — из prompts_store.CATEGORIES).
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

// Источник каждого промпта — уже в данных (например «Книга „Нейро-воронка“ — глава 2.1»).
const BOT_LINK = "https://t.me/ilya_novator";

function formatDate(): string {
	return "28 августа 2026";
}

export default function PromptsCatalog() {
	const { lang } = useLang();
	const ru = lang === "ru";

	const [q, setQ] = useState("");
	const [openCats, setOpenCats] = useState<Record<string, boolean>>({});
	const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
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

	// Группы: категории из канона, со счётчиками из базы.
	const groups = useMemo(() => {
		const countMap: Record<string, number> = {};
		for (const c of PROMPT_COUNTS) countMap[c.category] = c.count;
		const byCat: Record<string, typeof PROMPTS> = {};
		for (const p of PROMPTS) {
			(byCat[p.category] ||= []).push(p);
		}
		const norm = (s: string) => s.toLowerCase().trim();
		const needle = norm(q);
		const matched: Record<string, number> = {};
		for (const p of PROMPTS) {
			const hay = norm(`${p.title} ${p.prompt} ${p.id} ${p.tags.join(" ")}`);
			if (hay.includes(needle)) matched[p.category] = (matched[p.category] || 0) + 1;
		}
		return CAT_ORDER.map((cat) => {
			const list = byCat[cat] || [];
			const count = countMap[cat] ?? list.length;
			return {
				category: cat,
				count,
				list,
				has: list.length > 0,
				matched: needle ? (matched[cat] || 0) : list.length,
			};
		});
	}, [q]);

	const visibleGroups = useMemo(
		() => groups.filter((g) => !q || g.matched > 0),
		[groups, q],
	);

	const toggleCat = (cat: string) => setOpenCats((s) => ({ ...s, [cat]: !s[cat] }));
	const toggleChapter = (id: string) =>
		setOpenChapters((s) => ({ ...s, [id]: !s[id] }));

	// Раскрыть категорию при поиске
	useEffect(() => {
		if (q) {
			const next: Record<string, boolean> = {};
			for (const g of visibleGroups) next[g.category] = true;
			setOpenCats(next);
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

	return (
		<PageShell>
			{/* ── Шапка: бейдж + счётчик + поиск ── */}
			<header className="pb-hero">
				<div className="w pb-hero-in">
					<p className="pb-kicker">{t("NCAi · книга промптов", "NCAi · prompt book")}</p>
					<h1 className="pb-title">{t("Каталог промптов", "Prompt catalog")}</h1>
					<p className="pb-sub">
						{t(
							`${PROMPTS_TOTAL} готовых промптов из базы NCAi — по книге «Нейро-Воронка» и методике агентства. Каждый можно скопировать и сразу использовать.`,
							`${PROMPTS_TOTAL} ready-made prompts from the NCAi base — from “Neuro-Funnel” and the agency method. Copy and use any of them right away.`,
						)}
					</p>
					<div className="pb-search-wrap">
						<span className="pb-search-icon">⌕</span>
						<input
							ref={searchRef}
							className="pb-search"
							type="search"
							placeholder={t("Поиск: промпт, тема, id…", "Search: prompt, topic, id…")}
							value={q}
							onChange={(e) => setQ(e.target.value)}
							aria-label={t("Поиск по промптам", "Search prompts")}
						/>
						<kbd className="pb-kbd">⌘K</kbd>
						{q && (
							<button type="button" className="pb-clear" onClick={() => setQ("")} aria-label={t("Сбросить поиск", "Clear search")}>
								✕
							</button>
						)}
					</div>
					<p className="pb-meta">
						<span>{t("Всего промптов", "Total prompts")}</span>
						<strong>{PROMPTS_TOTAL}</strong>
						<span className="dot">·</span>
						<span>{t("категорий с промптами", "categories with prompts")}</span>
						<strong>{PROMPT_COUNTS.filter((c) => c.count > 0).length}</strong>
						<span className="dot">·</span>
						<span>{t("обновлено", "updated")}</span>
						<strong>{formatDate()}</strong>
					</p>
				</div>
			</header>

			{/* ── Sticky-навигация по разделам ── */}
			<nav className="pb-nav" aria-label={t("Разделы страницы", "Page sections")}>
				<div className="w pb-nav-in">
					<span className="pb-nav-l">{t("РАЗДЕЛЫ", "SECTIONS")}</span>
					<a href="#obzor" className="pb-nav-i">{t("Обзор", "Overview")}</a>
					<a href="#kniga" className="pb-nav-i">{t("Книга", "Book")}</a>
					<a href="#katalog" className="pb-nav-i">{t("Каталог промптов", "Prompt catalog")}</a>
					<a href="#prilozheniya" className="pb-nav-i">{t("Приложения", "Appendices")}</a>
				</div>
			</nav>

			<main className="w pb-main">
				{/* ── РАЗДЕЛЫ · Обзор ── */}
				<section id="obzor" className="pb-sec">
					<h2 className="pb-h2">{t("Обзор", "Overview")}</h2>
					<div className="pb-cards">
						<div className="pb-card">
							<h3 className="pb-card-h">{t("С чего начать", "Where to start")}</h3>
							<ul className="pb-card-list">
								<li>{t("Хочешь собрать воронку целиком → открой «Книгу» и пройди главы по порядку.", "Want to build a funnel end-to-end → open “Book” and go through the chapters in order.")}</li>
								<li>{t("Ищешь конкретный промпт → поиск наверху (⌘K) или группа в каталоге ниже.", "Looking for a specific prompt → search on top (⌘K) or a group in the catalog below.")}</li>
								<li>{t("Каждый промпт можно скопировать одной кнопкой.", "Every prompt can be copied with a single button.")}</li>
								<li>{t("Готовые промпты — в базе NCAi, остальные категории пополняются.", "Ready prompts live in the NCAi base; other categories are being filled in.")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Промпты по группам", "Prompts by group")}</h3>
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
								{t("Полный каталог — ниже, в разделе «Каталог промптов».", "Full catalog is below, in “Prompt catalog”.")}
							</p>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Как править промпты", "How to edit prompts")}</h3>
							<ul className="pb-card-list">
								<li>{t("Промпты хранятся в базе NCAi (prompts_store.py, таблица prompts).", "Prompts live in the NCAi base (prompts_store.py, prompts table).")}</li>
								<li>{t("На этой странице — читаемая копия: скопировал, поправил, использовал.", "This page is a readable copy: copy, tweak, use.")}</li>
								<li>{t("Обновление данных → правка в базе и перегенерация страницы.", "To update → edit the base, then regenerate the page.")}</li>
								<li>{t("Категории: разработка, маркетинг, контент, финансы, продажи, базы, qa, книги, услуги.", "Categories: dev, marketing, content, finance, sales, databases, qa, books, services.")}</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ── КНИГА ── */}
				<section id="kniga" className="pb-sec">
					<h2 className="pb-h2">{t("Книга", "Book")}</h2>
					<p className="pb-sec-sub">
						{t(
							"Механика каждого промпта разобрана в книге «Нейро-Воронка» — 6 глав и 30 подглав, читаются бесплатно.",
							"The mechanics of every prompt are explained in “Neuro-Funnel” — 6 chapters and 30 sections, free to read.",
						)}
					</p>
					<div className="pb-book">
						{BOOK_INTRO_LINKS.map((intro, i) => (
							<div key={intro.slug} className="pb-ch">
								<a href={`/book/${intro.slug}`} className="pb-ch-head pb-ch-head-link">
									<span className="pb-ch-num">{["0A", "0B", "0C"][i] ?? i}</span>
									<span className="pb-ch-title">{intro.title}</span>
									<span className="pb-ch-caret">→</span>
								</a>
							</div>
						))}
						{BOOK_CHAPTER_SUBS.map((ch) => {
							const isOpen = !!openChapters[String(ch.id)];
							return (
								<div key={ch.id} className={`pb-ch${isOpen ? " is-open" : ""}`}>
									<button type="button" className="pb-ch-head" onClick={() => toggleChapter(String(ch.id))} aria-expanded={isOpen}>
										<span className="pb-ch-num">{ch.id}</span>
										<span className="pb-ch-title">{ch.title}</span>
										<span className="pb-ch-count">{ch.subs.length}</span>
										<span className="pb-ch-caret">{isOpen ? "−" : "+"}</span>
									</button>
									{isOpen && (
										<ul className="pb-ch-subs">
											{ch.subs.map((s) => (
												<li key={s.slug}>
													<a href={`/book/${s.slug}`}>
														<span className="pb-ch-sub-title">{s.title}</span>
														<span className="pb-ch-sub-go">{t("Читать", "Read")} →</span>
													</a>
												</li>
											))}
										</ul>
									)}
								</div>
							);
						})}
					</div>
				</section>

				{/* ── КАТАЛОГ ПРОМПТОВ ── */}
				<section id="katalog" className="pb-sec">
					<h2 className="pb-h2">{t("Каталог промптов", "Prompt catalog")}</h2>
					<p className="pb-sec-sub">
						{t(
							`${PROMPTS_TOTAL} промптов в ${PROMPT_COUNTS.filter((c) => c.count > 0).length} категориях. Раскрой группу — скопируй промпт.`,
							`${PROMPTS_TOTAL} prompts in ${PROMPT_COUNTS.filter((c) => c.count > 0).length} categories. Open a group and copy a prompt.`,
						)}
					</p>

					{q && visibleGroups.length === 0 && (
						<div className="pb-empty">
							{t("Ничего не нашлось по запросу", "Nothing found for")} «{q}».
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

				{/* ── ПРИЛОЖЕНИЯ ── */}
				<section id="prilozheniya" className="pb-sec">
					<h2 className="pb-h2">{t("Приложения", "Appendices")}</h2>
					<div className="pb-cards">
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Что чинить", "What to fix")}</h3>
							<ul className="pb-card-list">
								<li>{t("Промпт не подходит / устарел → правь текст в базе NCAi (prompts_store.py), затем перегенерируй страницу.", "A prompt is stale or wrong → edit the text in the NCAi base (prompts_store.py), then regenerate the page.")}</li>
								<li>{t("Нет категории → добавь в каноничный список CATEGORIES в prompts_store.py.", "Missing category → add it to the canonical CATEGORIES list in prompts_store.py.")}</li>
								<li>{t("Счётчики обновляются автоматически при перегенерации данных (scripts/gen_prompts_data.py).", "Counters refresh automatically when data is regenerated (scripts/gen_prompts_data.py).")}</li>
							</ul>
						</div>
						<div className="pb-card">
							<h3 className="pb-card-h">{t("Связать с ботом", "Connect with the bot")}</h3>
							<p className="pb-card-p">
								{t(
									"Все промпты книги работают в Telegram-боте NCAi: вставь промпт, подставь свои данные и получи готовый результат.",
									"All book prompts work in the NCAi Telegram bot: paste a prompt, add your data and get a ready result.",
								)}
							</p>
							<a href={BOT_LINK} target="_blank" rel="noopener noreferrer" className="pb-btn pb-btn-primary">
								{t("Открыть бота в Telegram →", "Open the bot in Telegram →")}
							</a>
						</div>
					</div>
				</section>
			</main>
		</PageShell>
	);
}
