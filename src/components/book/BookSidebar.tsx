"use client";

import { useState } from "react";
import { BOOK_CHAPTER_SUBS, BOOK_INTRO_LINKS } from "@/lib/book-data";
import { useBookSidebarCollapsed } from "@/components/book/useBookSidebarState";

// Светлый сайдбар-оглавление книги «Нейро-Воронка» (эталон exnihilo.life/metriki-mozga).
// Десктоп: фиксированная колонка слева, сворачивается кнопкой «◀» (состояние хранится
// в localStorage и переживает навигацию между подглавами). Мобильный (≤768px): шторка.
// Все 30 подглав: 3 вводные + 27 по 6 главам. Активная подсвечена жёлтым NCAi.
export default function BookSidebar({ current }: { current?: string }) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [collapsed, setCollapsed] = useBookSidebarCollapsed();
	const closeMobile = () => setMobileOpen(false);

	return (
		<>
			<button
				type="button"
				className={`bkr-toggle${collapsed ? " show" : ""}`}
				aria-label="Открыть оглавление"
				aria-expanded={!collapsed}
				onClick={() => {
					setCollapsed(false);
					setMobileOpen(true);
				}}
			>
				<span>☰</span> Оглавление
			</button>

			<div className={`bkr-backdrop${mobileOpen ? " show" : ""}`} onClick={closeMobile} aria-hidden="true" />

			<aside
				className={`bkr-side${mobileOpen ? " open" : ""}${collapsed ? " collapsed" : ""}`}
				aria-label="Оглавление книги"
			>
				<div className="bkr-side-head">
					<span className="bkr-side-title">Оглавление</span>
					<div className="bkr-side-actions">
						<button
							type="button"
							className="bkr-side-collapse"
							aria-label="Свернуть оглавление"
							onClick={() => setCollapsed(true)}
						>
							◀
						</button>
						<button type="button" className="bkr-side-close" aria-label="Закрыть оглавление" onClick={closeMobile}>
							✕
						</button>
					</div>
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
							onClick={closeMobile}
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
									onClick={closeMobile}
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
