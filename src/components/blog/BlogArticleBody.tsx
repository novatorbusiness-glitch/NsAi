"use client";

import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

interface BlogArticleBodyProps {
	post: BlogPost;
	bodyRu: ReactNode;
	bodyEn: ReactNode | null;
}

export default function BlogArticleBody({ post, bodyRu, bodyEn }: BlogArticleBodyProps) {
	const { lang } = useLang();
	const showEn = lang === "en" && bodyEn !== null;
	const ru = !showEn;

	return (
		<>
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

			<div className="blog-article-body">{showEn ? bodyEn : bodyRu}</div>

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
