"use client";

import { BLOG_POSTS_SORTED } from "@/lib/blog";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

// Каталог статей блога (стиль exnihilo.life/blog): карточки-ссылки с датой и аннотацией.
export default function BlogIndex() {
	const { lang } = useLang();

	return (
		<PageShell>
			<div className="w page-hero">
				<p className="lb">{lang === "ru" ? "Блог" : "Blog"}</p>
				<h1 className="page-h1">{lang === "ru" ? "Блог" : "Blog"}</h1>
				<p className="page-sub">
					{lang === "ru"
						? "Статьи и заметки о нейромаркетинге, инженерии воронок и AI-автоматизации. Практика, а не теория: каждый материал — это механика, которую можно применить в этот же день."
						: "Articles and notes on neuromarketing, sales-funnel engineering and AI automation. Practice over theory: every post is a mechanism you can apply the same day."}
				</p>
			</div>

			<div className="w blog-list">
				{BLOG_POSTS_SORTED.map((post, i) => (
					<a key={post.slug} href={`/blog/${post.slug}`} className="blog-card rv d1">
						<div className="blog-card-top">
							<time className="blog-card-date" dateTime={post.date}>
								{post.dateLabel}
							</time>
							<div className="blog-card-tags">
								{post.tags.map((tag) => (
									<span key={tag} className="blog-card-tag">
										{tag}
									</span>
								))}
							</div>
						</div>
						<h2 className="blog-card-title">{post.title}</h2>
						<p className="blog-card-excerpt">{post.excerpt}</p>
						<span className="blog-card-go">{lang === "ru" ? "Читать →" : "Read →"}</span>
					</a>
				))}
			</div>
		</PageShell>
	);
}
