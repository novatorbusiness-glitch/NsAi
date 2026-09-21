import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import PageShell from "@/components/layout/PageShell";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
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
		// заголовки статей не должны получать суффикс «· NCAi» из шаблона
		// layout.tsx, если сами уже содержат «NCAi» (см. chto-takoe-ncai) —
		// иначе на проде получается «...NCAi... · NCAi».
		title: post.title.includes("NCAi") ? { absolute: post.title } : post.title,
		description: post.excerpt,
		alternates: { canonical: `/blog/${post.slug}` },
		openGraph: {
			type: "article",
			title: post.title,
			description: post.excerpt,
			publishedTime: post.date,
			authors: ["Илья Новицкий"],
			images: [{ url: "/images/og/default.png", width: 1200, height: 630 }],
		},
		twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
	};
}

function getPostSource(slug: string, variant: "" | ".en" = ""): string {
	const filePath = path.join(process.cwd(), "content/blog", `${slug}${variant}.mdx`);
	if (!fs.existsSync(filePath)) return "";
	return fs.readFileSync(filePath, "utf8").trim();
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
	const post = getBlogPost(params.slug);
	if (!post) notFound();

	const sourceRu = getPostSource(params.slug);
	const sourceEn = getPostSource(params.slug, ".en");

	return (
		<PageShell>
			<div className="nb-article-wrap">
				<article className="nb-article">
					<BlogArticleBody
						post={post}
						bodyRu={
							sourceRu ? (
								<MDXRemote source={sourceRu} />
							) : (
								<p style={{ color: "var(--t2)" }}>Статья пока пустая. Добавьте текст в файл {`content/blog/${params.slug}.mdx`}.</p>
							)
						}
						bodyEn={sourceEn ? <MDXRemote source={sourceEn} /> : null}
					/>
				</article>
			</div>
		</PageShell>
	);
}
