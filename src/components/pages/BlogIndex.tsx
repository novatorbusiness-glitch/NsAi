"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
	BLOG_CATEGORIES,
	BLOG_POSTS_SORTED,
	BLOG_STATS,
	NEW_DAYS,
	isWithinDays,
} from "@/lib/blog";
import type { BlogCategory } from "@/lib/blog";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

type FilterKey = BlogCategory | "all";

// Каталог статей блога (структура exnihilo.life/blog, гамма NCAi):
// шапка + описание → поиск → статы-цифры → фильтры-чипы → сетка карточек.
export default function BlogIndex() {
	const { lang } = useLang();
	const ru = lang === "ru";

	const [query, setQuery] = useState("");
	const [cat, setCat] = useState<FilterKey>("all");
	const inputRef = useRef<HTMLInputElement>(null);

	// Esc — сброс поиска.
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") {
				setQuery("");
				inputRef.current?.blur();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return BLOG_POSTS_SORTED.filter((post) => {
			if (cat !== "all" && post.category !== cat) return false;
			if (!q) return true;
			const hay = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
			return hay.includes(q);
		});
	}, [query, cat]);

	const charsK = (BLOG_STATS.chars / 1000).toFixed(1).replace(".", ",");

	const stats = [
		{ value: String(BLOG_STATS.materials), label: ru ? "материалов" : "materials" },
		{ value: charsK, label: ru ? "тыс. знаков" : "k characters" },
		{ value: `≈${BLOG_STATS.readingMinutes}`, label: ru ? "мин чтения" : "min read" },
		{ value: String(BLOG_STATS.pages), label: ru ? "страниц на сайте" : "site pages" },
		{ value: String(BLOG_STATS.newIn30), label: ru ? `новых за ${NEW_DAYS} дней` : `new in ${NEW_DAYS} days` },
	];

	return (
		<PageShell>
			<div className="w page-hero nb-hero">
				<p className="lb">{ru ? "Блог" : "Blog"}</p>
				<h1 className="page-h1">{ru ? "Блог" : "Blog"}</h1>
				<p className="page-sub">
					{ru
						? "Статьи и заметки о нейромаркетинге, инженерии воронок и AI-автоматизации. Практика, а не теория: каждый материал — это механика, которую можно применить в этот же день."
						: "Articles and notes on neuromarketing, sales-funnel engineering and AI automation. Practice over theory: every post is a mechanism you can apply the same day."}
				</p>
			</div>

			{/* Поиск */}
			<div className="w nb-search">
				<div className="nb-search-box">
					<span className="nb-search-icon" aria-hidden="true">
						⌕
					</span>
					<input
						ref={inputRef}
						type="text"
						className="nb-search-input"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={ru ? "Поиск по статьям…" : "Search articles…"}
						aria-label={ru ? "Поиск по статьям" : "Search articles"}
					/>
					{query ? (
						<button
							type="button"
							className="nb-search-clear"
							onClick={() => setQuery("")}
							aria-label={ru ? "Сбросить" : "Clear"}
						>
							✕
						</button>
					) : (
						<span className="nb-search-hint">Esc</span>
					)}
				</div>
			</div>

			{/* Большие статы-цифры */}
			<div className="w nb-stats">
				{stats.map((s) => (
					<div key={s.label} className="nb-stat">
						<div className="nb-stat-val num">{s.value}</div>
						<div className="nb-stat-label">{s.label}</div>
					</div>
				))}
			</div>

			{/* Фильтры-категории (чипы) */}
			<div className="w nb-filters" role="tablist" aria-label={ru ? "Категории" : "Categories"}>
				{BLOG_CATEGORIES.map((c) => (
					<button
						key={c.key}
						type="button"
						role="tab"
						aria-selected={cat === c.key}
						className={`nb-chip${cat === c.key ? " act" : ""}`}
						onClick={() => setCat(c.key)}
					>
						{c.label}
					</button>
				))}
			</div>

			{/* Сетка карточек */}
			<div className="w nb-grid">
				{filtered.length > 0 ? (
					filtered.map((post) => {
						const isNew = isWithinDays(post.date, NEW_DAYS);
						return (
							<a key={post.slug} href={`/blog/${post.slug}`} className="nb-card">
								<div className="nb-card-top">
									<time className="nb-card-date" dateTime={post.date}>
										{post.date}
									</time>
									{isNew && <span className="nb-badge">NEW</span>}
								</div>
								<h2 className="nb-card-title">{post.title}</h2>
								<p className="nb-card-excerpt">{post.excerpt}</p>
								<span className="nb-card-go">{ru ? "Читать →" : "Read →"}</span>
							</a>
						);
					})
				) : (
					<div className="nb-empty">
						<p className="nb-empty-title">{ru ? "Ничего не нашлось" : "Nothing found"}</p>
						<p className="nb-empty-sub">
							{ru
								? "Попробуйте другой запрос или сбросьте фильтры."
								: "Try another query or reset the filters."}
						</p>
					</div>
				)}
			</div>
		</PageShell>
	);
}
