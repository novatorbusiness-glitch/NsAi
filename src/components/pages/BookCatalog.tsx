"use client";

import type { CSSProperties } from "react";
import { BOOKS } from "@/lib/books";
import { BOOK_CHAPTER_LINKS, BOOK_INTRO_LINKS } from "@/lib/book-data";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Каталог книг (стиль exnihilo.life/knigi): обложки + «Читать →».
// Ниже — интерактивное оглавление «Нейро-Воронки» (раскрывающиеся разделы).
export default function BookCatalog() {
	const { t, lang } = useLang();

	return (
		<PageShell>
			<div className="w book-index-page">
				<p className="lb">{t("book.catalog")}</p>
				<h1 className="book-index-title">{t("book.catalog")}</h1>
				<p className="book-index-subtitle" style={{ maxWidth: 640 }}>
					{t("book.catalogSub")}
				</p>

				{/* Каталог с обложками */}
				<div className="book-catalog">
					{BOOKS.map((book) => (
						<a key={book.slug} href={book.href} className="book-card" style={{ "--accent": book.accent } as CSSProperties}>
							<div className="book-cover-wrap">
								<img src={book.cover} alt={t(book.titleKey)} className="book-cover" width={300} height={420} loading="lazy" />
							</div>
							<div className="book-card-body">
								<span className="book-card-badge">{t(book.badgeKey)}</span>
								<h2 className="book-card-title">{t(book.titleKey)}</h2>
								<p className="book-card-sub">{t(book.subKey)}</p>
								<span className="book-card-cta">{t("book.read")}</span>
							</div>
						</a>
					))}
				</div>

				{/* Интерактивное оглавление «Нейро-Воронки» */}
				<div className="book-toc-block">
					<h2 className="book-toc-h2">{t("book.neuroTitle")} — оглавление</h2>
					<p className="book-toc-sub">Раскрой главу, чтобы увидеть подглавы. Каждая подглава читается отдельно, как страница книги.</p>

					<div className="book-toc-start">
						<div className="book-toc-start-label">С чего начать</div>
						<div className="book-toc-intro">
							{BOOK_INTRO_LINKS.map((intro) => (
								<a key={intro.slug} href={`/book/${intro.slug}`} className="book-toc-intro-link">
									<span className="book-toc-intro-title">{intro.title}</span>
									<span className="book-toc-intro-desc">{intro.description}</span>
								</a>
							))}
						</div>
					</div>

					<div className="book-accordion">
						{BOOK_CHAPTER_LINKS.map((chapter) => (
							<details key={chapter.id} className="book-acc-item" open={chapter.id === 1}>
								<summary className="book-acc-summary">
									<span className="book-acc-num">Гл. {chapter.id}</span>
									<span className="book-acc-title">{chapter.title}</span>
									<span className="book-acc-caret">▾</span>
								</summary>
								<div className="book-acc-body">
									<a href={`/book/${chapter.entrySlug}`} className="book-acc-entry">
										<span className="book-acc-entry-name">{chapter.title}</span>
										<span className="book-acc-entry-go">{lang === "ru" ? "Читать →" : "Read →"}</span>
									</a>
								</div>
							</details>
						))}
					</div>
				</div>
			</div>
		</PageShell>
	);
}
