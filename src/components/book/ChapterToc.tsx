"use client";

import { useState } from "react";
import { BOOK_CHAPTER_SUBS, BOOK_INTRO_LINKS } from "@/lib/book-data";

// Интерактивное оглавление книги на странице главы (стиль kniga-memov):
// раскрывающиеся разделы-главы, внутри — ссылки на подглавы, текущая подсвечена.
export default function ChapterToc({ current }: { current?: string }) {
	const [open, setOpen] = useState(false);
	const [chapterOpen, setChapterOpen] = useState<number>(() => {
		const currentChapter = BOOK_CHAPTER_SUBS.find((c) => c.subs.some((s) => s.slug === current));
		return currentChapter ? currentChapter.id : 1;
	});

	return (
		<div className="chapter-toc">
			<button type="button" className="chapter-toc-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
				<span className="chapter-toc-toggle-label">Оглавление</span>
				<span className="chapter-toc-toggle-arrow">{open ? "▴" : "▾"}</span>
			</button>

			{open && (
				<div className="chapter-toc-panel">
					<div className="chapter-toc-intros">
						{BOOK_INTRO_LINKS.map((intro) => (
							<a
								key={intro.slug}
								href={`/book/${intro.slug}`}
								className={`chapter-toc-intro${current === intro.slug ? " is-current" : ""}`}
							>
								{intro.title}
							</a>
						))}
					</div>

					{BOOK_CHAPTER_SUBS.map((chapter) => {
						const isOpen = chapterOpen === chapter.id;
						return (
							<div key={chapter.id} className="chapter-toc-group">
								<button
									type="button"
									className="chapter-toc-chapter"
									onClick={() => setChapterOpen(isOpen ? 0 : chapter.id)}
									aria-expanded={isOpen}
								>
									<span className="chapter-toc-ch-num">Гл. {chapter.id}</span>
									<span className="chapter-toc-ch-title">{chapter.title}</span>
									<span className="chapter-toc-ch-arrow">{isOpen ? "−" : "+"}</span>
								</button>
								{isOpen && (
									<ul className="chapter-toc-subs">
										{chapter.subs.map((sub) => (
											<li key={sub.slug}>
												<a
													href={`/book/${sub.slug}`}
													className={`chapter-toc-sub${current === sub.slug ? " is-current" : ""}`}
												>
													<span className="chapter-toc-sub-name">{sub.title}</span>
													<span className="chapter-toc-sub-go">→</span>
												</a>
											</li>
										))}
									</ul>
								)}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
