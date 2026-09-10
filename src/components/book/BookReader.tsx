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

	// Высота iframe: главы НЕ шлют postMessage с реальной высотой (это раньше
	// ожидалось, но ни один из 30 HTML-файлов главы этого не делает), поэтому
	// высота считалась по грубой оценке "длина HTML-строки × 0.05" и почти
	// всегда была в 2-3 раза меньше реальной — при выключенном внутреннем
	// скролле (scrolling="no") это обрезало большую часть каждой главы без
	// возможности долистать. srcDoc-iframe — тот же источник, что и страница,
	// поэтому меряем высоту напрямую через contentDocument, без postMessage.
	//
	// На медленной сети/CPU (мобильный LTE) все 30 iframe грузятся и меряются
	// одновременно и конкурируют за ресурсы — у поздних глав fixed-таймауты
	// (300/1200мс) срабатывают до того, как шрифты и контент реально доехали,
	// и глава застревает на дефолтной высоте почти без видимого текста.
	// Подстраховка: IntersectionObserver форсирует свежий замер именно в
	// момент, когда секция реально попадает в зону видимости — то есть прямо
	// перед тем, как пользователь до неё долистает.
	const resizeObservers = useRef<Map<string, ResizeObserver>>(new Map());
	const visibilityObserver = useRef<IntersectionObserver | null>(null);

	const measureFrame = (slug: string, frame: HTMLIFrameElement) => {
		const doc = frame.contentDocument;
		if (!doc || !doc.documentElement) return;
		const h = Math.max(
			doc.documentElement.scrollHeight,
			doc.body ? doc.body.scrollHeight : 0,
		);
		if (h > 0) frame.style.height = `${h}px`;
	};

	const onFrameLoad = (slug: string, frame: HTMLIFrameElement | null) => {
		if (!frame) return;
		measureFrame(slug, frame);
		// Веб-шрифты и reveal-анимации дозагружаются после load — досчитываем высоту.
		setTimeout(() => measureFrame(slug, frame), 300);
		setTimeout(() => measureFrame(slug, frame), 1200);
		setTimeout(() => measureFrame(slug, frame), 3000);

		const doc = frame.contentDocument;
		if (doc?.body && typeof ResizeObserver !== "undefined") {
			resizeObservers.current.get(slug)?.disconnect();
			const ro = new ResizeObserver(() => measureFrame(slug, frame));
			ro.observe(doc.body);
			resizeObservers.current.set(slug, ro);
		}
	};

	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") return;
		visibilityObserver.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					const slug = entry.target.id;
					const frame = frameRefs.current.get(slug);
					if (frame) {
						measureFrame(slug, frame);
						setTimeout(() => measureFrame(slug, frame), 400);
					}
				});
			},
			{ rootMargin: "600px 0px" },
		);
		sectionRefs.current.forEach((el) => visibilityObserver.current?.observe(el));
		return () => visibilityObserver.current?.disconnect();
	}, []);

	useEffect(() => {
		const observers = resizeObservers.current;
		return () => {
			observers.forEach((ro) => ro.disconnect());
			observers.clear();
		};
	}, []);

	// На resize окна текст в iframe переносится иначе — досчитываем высоту всех глав.
	useEffect(() => {
		const onResize = () => {
			frameRefs.current.forEach((frame, slug) => measureFrame(slug, frame));
		};
		window.addEventListener("resize", onResize, { passive: true });
		return () => window.removeEventListener("resize", onResize);
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
								style={{ height: 2200 }}
								onLoad={(e) => onFrameLoad(c.slug, e.currentTarget)}
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
