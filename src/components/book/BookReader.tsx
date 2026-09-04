"use client";

import { useEffect, useRef, useState } from "react";
import { BOOK_CHAPTER_SUBS, BOOK_INTRO_LINKS } from "@/lib/book-data";
import { useBookSidebarCollapsed } from "@/components/book/useBookSidebarState";
import type { ReaderChapter } from "@/lib/book-reader";

// Единая длинная страница чтения книги «Нейро-Воронка».
// Все 30 подглав идут подряд (каждая — свой iframe srcDoc с полным HTML),
// сайдбар-оглавление слева, клик → плавный скролл к секции, scroll-spy подсвечивает активную.
export default function BookReader({ chapters }: { chapters: ReaderChapter[] }) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
	const frameRefs = useRef<Map<string, HTMLIFrameElement>>(new Map());
	const [active, setActive] = useState<string>("");
	const [mobileOpen, setMobileOpen] = useState(false);
	const [collapsed, setCollapsed] = useBookSidebarCollapsed();

	// Высоты iframe: каждая подглава сообщает свою реальную высоту через postMessage.
	useEffect(() => {
		function onMessage(event: MessageEvent) {
			const d = event.data;
			if (
				d &&
				typeof d === "object" &&
				typeof d.__ncaiBookH === "number" &&
				typeof d.slug === "string"
			) {
				const frame = frameRefs.current.get(d.slug);
				if (frame) frame.style.height = `${d.__ncaiBookH}px`;
			}
		}
		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	}, []);

	// Плавный скролл к секции + scroll-spy по активной подглаве.
	const scrollTo = (slug: string) => {
		setMobileOpen(false);
		setActive(slug);
		const el = sectionRefs.current.get(slug);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	useEffect(() => {
		const sc = scrollRef.current;
		if (!sc) return;

		let raf = 0;
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const line = sc.scrollTop + 140;
				let current = "";
				sectionRefs.current.forEach((el, slug) => {
					if (el.offsetTop <= line) current = slug;
				});
				setActive(current);
			});
		};

		sc.addEventListener("scroll", onScroll, { passive: true });
		onScroll();

		// Переход по якорю из URL (/book/read#4-2-shest-stimulov).
		const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
		if (hash && sectionRefs.current.has(hash)) {
			const el = sectionRefs.current.get(hash)!;
			let tries = 0;
			const attempt = () => {
				el.scrollIntoView({ block: "start" });
				setActive(hash);
				if (++tries < 4) setTimeout(attempt, 250);
			};
			setTimeout(attempt, 150);
		}

		return () => {
			sc.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(raf);
		};
	}, []);

	const openSidebar = () => {
		setCollapsed(false);
		setMobileOpen(true);
	};

	return (
		<div className={`bkr${collapsed ? " bkr-collapsed" : ""}`}>
			<button
				type="button"
				className={`bkr-toggle${collapsed ? " show" : ""}`}
				aria-label="Открыть оглавление"
				onClick={openSidebar}
			>
				<span>☰</span> Оглавление
			</button>

			<div
				className={`bkr-backdrop${mobileOpen ? " show" : ""}`}
				onClick={() => setMobileOpen(false)}
				aria-hidden="true"
			/>

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
						<button
							type="button"
							className="bkr-side-close"
							aria-label="Закрыть оглавление"
							onClick={() => setMobileOpen(false)}
						>
							✕
						</button>
					</div>
				</div>

				<a href="/book" className="bkr-side-back">
					← О книге
				</a>

				<nav className="bkr-side-nav">
					<div className="bkr-sec">Начало</div>
					{BOOK_INTRO_LINKS.map((intro) => (
						<a
							key={intro.slug}
							href={`#${intro.slug}`}
							onClick={(e) => {
								e.preventDefault();
								scrollTo(intro.slug);
							}}
							className={`bkr-link${active === intro.slug ? " active" : ""}`}
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
									href={`#${sub.slug}`}
									onClick={(e) => {
										e.preventDefault();
										scrollTo(sub.slug);
									}}
									className={`bkr-link${active === sub.slug ? " active" : ""}`}
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

			<main className="bkr-main">
				<div className="bkr-scroll" ref={scrollRef}>
					{chapters.map((c) => (
						<section
							key={c.slug}
							id={c.slug}
							className="bkr-sec"
							ref={(el) => {
								if (el) sectionRefs.current.set(c.slug, el);
								else sectionRefs.current.delete(c.slug);
							}}
						>
							<iframe
								title={c.title}
								className="bkr-frame"
								srcDoc={c.html}
								scrolling="no"
								style={{ height: Math.max(800, Math.round(c.html.length * 0.05)) }}
								ref={(el) => {
									if (el) frameRefs.current.set(c.slug, el);
									else frameRefs.current.delete(c.slug);
								}}
							/>
						</section>
					))}
				</div>
			</main>
		</div>
	);
}
