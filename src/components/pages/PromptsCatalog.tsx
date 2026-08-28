"use client";

import { useState } from "react";
import { PROMPT_CATEGORIES, PROMPTS_TOTAL } from "@/lib/prompts";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// «Книга NCAi — каталог промптов» (стиль exnihilo kniga-bota):
// интерактивное оглавление по категориям, каждый промпт связан с главой книги.
export default function PromptsCatalog() {
	const { lang } = useLang();
	const ru = lang === "ru";
	const [openCategories, setOpenCategories] = useState<string[]>(PROMPT_CATEGORIES.map((c) => c.category));

	const toggle = (cat: string) =>
		setOpenCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));

	return (
		<PageShell>
			<div className="w page-hero">
				<p className="lb">{ru ? "Книга NCAi · Промпты" : "NCAi Book · Prompts"}</p>
				<h1 className="page-h1">{ru ? "Каталог промптов" : "Prompt Catalog"}</h1>
				<p className="page-sub">
					{ru
						? `Все промпты книги «Нейро-Воронка» — ${PROMPTS_TOTAL} готовых штук, разложенных по категориям. Каждый промпт связан с главой, где разобрана его механика. Раскрой категорию — и забирай готовое задание для AI.`
						: `All prompts from the book “Neuro-Funnel” — ${PROMPTS_TOTAL} ready-made pieces grouped by category. Each prompt is linked to the chapter explaining its mechanics. Open a category and take a ready-made AI task.`}
				</p>
			</div>

			<div className="w prompts-page">
				{/* Сводка */}
				<div className="prompts-summary">
					<div className="prompt-sum">
						<span className="prompt-sum-n">{PROMPTS_TOTAL}</span>
						<span className="prompt-sum-l">{ru ? "промптов в каталоге" : "prompts in the catalog"}</span>
					</div>
					<div className="prompt-sum">
						<span className="prompt-sum-n">{PROMPT_CATEGORIES.length}</span>
						<span className="prompt-sum-l">{ru ? "категории" : "categories"}</span>
					</div>
					<div className="prompt-sum">
						<span className="prompt-sum-n">{PROMPT_CATEGORIES.reduce((s, c) => s + c.prompts.length, 0)}</span>
						<span className="prompt-sum-l">{ru ? "ссылок на главы" : "chapter links"}</span>
					</div>
				</div>

				{/* Категории-аккордеон */}
				<div className="prompts-accordion">
					{PROMPT_CATEGORIES.map((cat) => {
						const isOpen = openCategories.includes(cat.category);
						return (
							<div key={cat.category} className={`prompt-cat${isOpen ? " is-open" : ""}`}>
								<button type="button" className="prompt-cat-head" onClick={() => toggle(cat.category)} aria-expanded={isOpen}>
									<span className="prompt-cat-emoji">{cat.emoji}</span>
									<span className="prompt-cat-title">{cat.category}</span>
									<span className="prompt-cat-count">{cat.prompts.length}</span>
									<span className="prompt-cat-caret">{isOpen ? "−" : "+"}</span>
								</button>
								{isOpen && (
									<div className="prompt-cat-body">
										<p className="prompt-cat-desc">{cat.description}</p>
										<ul className="prompt-list">
											{cat.prompts.map((prompt) => (
												<li key={prompt.id} className="prompt-row">
													<span className="prompt-id">{prompt.id}</span>
													<span className="prompt-title">{prompt.title}</span>
													<span className="prompt-source">{prompt.source}</span>
													{prompt.chapterSlug ? (
														<a href={`/book/${prompt.chapterSlug}`} className="prompt-go">
															{ru ? "Читать главу →" : "Read chapter →"}
														</a>
													) : (
														<a href="/book" className="prompt-go">
															{ru ? "К книге →" : "To the book →"}
														</a>
													)}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* CTA */}
				<div className="prompts-cta">
					<p className="prompts-cta-text">
						{ru
							? "Это каталог промптов из книги «Нейро-Воронка». Механика каждого промпта разобрана в соответствующей главе — читается бесплатно."
							: "This is the prompt catalog from “Neuro-Funnel”. The mechanics behind every prompt are covered in its chapter — free to read."}
					</p>
					<div className="prompts-cta-actions">
						<a href="/book" className="bp">
							{ru ? "Открыть книгу" : "Open the book"}
						</a>
						<a href="/blog" className="bs">
							{ru ? "Блог о нейро-воронке" : "Neuro-funnel blog"}
						</a>
					</div>
				</div>
			</div>
		</PageShell>
	);
}
