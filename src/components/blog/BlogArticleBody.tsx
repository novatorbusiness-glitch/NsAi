"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

interface BlogArticleBodyProps {
	post: BlogPost;
	bodyRu: ReactNode;
	bodyEn: ReactNode | null;
}

// Концепт №20: прогресс-бар чтения статьи — тонкая линия под шапкой,
// заполняется по мере прохождения именно текста статьи (не всей
// страницы с футером — иначе бар «допрыгивает» до 100% раньше, чем
// дочитано). Живой индикатор, не декорация: честно показывает,
// сколько текста осталось, ничего не выдумывает.
function useReadingProgress(ref: React.RefObject<HTMLElement | null>) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let raf = 0;
		function update() {
			raf = 0;
			const node = el;
			if (!node) return;
			const rect = node.getBoundingClientRect();
			const articleTop = rect.top + window.scrollY;
			const articleHeight = node.scrollHeight;
			const navH = 68;
			const start = articleTop - navH;
			const end = articleTop + articleHeight - window.innerHeight;
			const span = Math.max(1, end - start);
			const pct = ((window.scrollY - start) / span) * 100;
			setProgress(Math.max(0, Math.min(100, pct)));
		}

		function onScroll() {
			if (raf) return;
			raf = requestAnimationFrame(update);
		}

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, [ref]);

	return progress;
}

export default function BlogArticleBody({ post, bodyRu, bodyEn }: BlogArticleBodyProps) {
	const { lang } = useLang();
	const showEn = lang === "en" && bodyEn !== null;
	const ru = !showEn;
	const bodyRef = useRef<HTMLDivElement>(null);
	const progress = useReadingProgress(bodyRef);

	return (
		<>
			<div className="blog-read-bar" aria-hidden="true">
				<div className="blog-read-bar-fill" style={{ width: `${progress}%` }} />
			</div>
			<header className="blog-article-head">
				<p className="lb">{ru ? "Блог" : "Blog"} · {post.dateLabel}</p>
				<h1 className="blog-article-title">{ru ? post.title : post.titleEn}</h1>
				<div className="blog-article-meta">
					<span>{ru ? "Илья Новицкий" : "Ilya Novitsky"}</span>
					<span className="blog-article-meta-sep">·</span>
					<time dateTime={post.date}>{post.dateLabel}</time>
					<span className="blog-article-meta-sep">·</span>
					<span>NCAi</span>
				</div>
				<div className="blog-article-tags">
					{post.tags.map((tag) => (
						<span key={tag} className="blog-card-tag">
							{tag}
						</span>
					))}
				</div>
			</header>

			<div className="blog-article-body" ref={bodyRef}>
				{showEn ? bodyEn : bodyRu}
			</div>

			<footer className="blog-article-foot">
				<a href="/blog" className="bp">
					{ru ? "← Все статьи" : "← All articles"}
				</a>
				<a href="/book" className="bs">
					{ru ? "Книга «Нейро-Воронка» — бесплатно" : '"Neuro-Funnel" book — free'}
				</a>
			</footer>
		</>
	);
}
