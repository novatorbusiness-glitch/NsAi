"use client";

import { useState } from "react";
import { BOOK_CHAPTER_SUBS, BOOK_INTRO_LINKS } from "@/lib/book-data";

// Светлый сайдбар-оглавление книги «Нейро-Воронка» (эталон exnihilo.life/metriki-mozga).
// Десктоп: фиксированная колонка слева. Мобильный (≤768px): шторка + кнопка.
// Все 30 подглав: 3 вводные + 27 по 6 главам. Активная подсвечена жёлтым NCAi.
export default function BookSidebar({ current }: { current?: string }) {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<>
			<button
				type="button"
				className="bkr-toggle"
				aria-label="Открыть оглавление"
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				<span>☰</span> Оглавление
			</button>

			<div className={`bkr-backdrop${open ? " show" : ""}`} onClick={close} aria-hidden="true" />

			<aside className={`bkr-side${open ? " open" : ""}`} aria-label="Оглавление книги">
				<div className="bkr-side-head">
					<span className="bkr-side-title">Оглавление</span>
					<button type="button" className="bkr-side-close" aria-label="Закрыть оглавление" onClick={close}>
						✕
					</button>
				</div>

				<a href="/book" className="bkr-side-back">
					← Все книги
				</a>

				<nav className="bkr-side-nav">
					<div className="bkr-sec">Начало</div>
					{BOOK_INTRO_LINKS.map((intro) => (
						<a
							key={intro.slug}
							href={`/book/${intro.slug}`}
							onClick={close}
							className={`bkr-link${current === intro.slug ? " active" : ""}`}
						>
							{intro.title}
						</a>
					))}

					{BOOK_CHAPTER_SUBS.map((chapter) => (
						<div key={chapter.id} className="bkr-ch">
							<div className="bkr-ch-head">
								Глава {chapter.id} · {chapter.title}
							</div>
							{chapter.subs.map((sub) => (
								<a
									key={sub.slug}
									href={`/book/${sub.slug}`}
									onClick={close}
									className={`bkr-link${current === sub.slug ? " active" : ""}`}
								>
									<span className="num">
										{chapter.id}.{sub.slug.split("-")[1]}
									</span>
									{sub.title}
								</a>
							))}
						</div>
					))}
				</nav>

				<a
					href="https://t.me/+8Qp8aSVS3nlhOTMy"
					target="_blank"
					rel="noopener noreferrer"
					className="bkr-tg"
				>
					<span>✈️</span> Telegram-канал Ильи
				</a>
			</aside>
		</>
	);
}
