import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import PageShell from "@/components/layout/PageShell";
import "@/styles/blog.css";

export function generateStaticParams() {
	return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const post = getBlogPost(params.slug);
	if (!post) {
		return { title: "Статья не найдена" };
	}
	return {
		title: post.title,
		description: post.excerpt,
		alternates: { canonical: `/blog/${post.slug}` },
		openGraph: {
			type: "article",
			title: post.title,
			description: post.excerpt,
			publishedTime: post.date,
			authors: ["Илья Новицкий"],
		},
	};
}

function getPostSource(slug: string): string {
	const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return "";
	return fs.readFileSync(filePath, "utf8").trim();
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
	const post = getBlogPost(params.slug);
	if (!post) notFound();

	const source = getPostSource(params.slug);

	return (
		<PageShell>
			<div className="nb-article-wrap">
				<article className="nb-article">
					<header className="blog-article-head">
					<p className="lb">Blog · {post.dateLabel}</p>
					<h1 className="blog-article-title">{post.title}</h1>
					<div className="blog-article-meta">
						<span>Илья Новицкий</span>
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

				{source ? (
					<div className="blog-article-body">
						<MDXRemote source={source} />
					</div>
				) : (
					<p style={{ color: "var(--t2)" }}>Статья пока пустая. Добавьте текст в файл {`content/blog/${params.slug}.mdx`}.</p>
				)}

				<footer className="blog-article-foot">
					<a href="/blog" className="bp">
						← Все статьи
					</a>
					<a href="/book" className="bs">
						Книга «Нейро-Воронка» — бесплатно
					</a>
					</footer>
					</article>
				</div>
				</PageShell>
				);
				}
