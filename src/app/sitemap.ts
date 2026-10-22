import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { allPosts } from "@/lib/blog";
import { chapters as bookChapters } from "@/lib/book";

// Карта сайта: страницы, статьи блога, главы книги (content/book/book.json). Документы и переадресации не включаем — они noindex.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const u = (p: string) => `${site.url}${p}`;
	const pages = ["/", "/kak-my-rabotaem", "/keisy", "/primer-chertezha", "/primer-audita", "/svoya-ai-sreda", "/blog", "/book"].map((p) => ({ url: u(p), changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8 }));
	const posts = allPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.updated, changeFrequency: "monthly" as const, priority: 0.7 }));
	const chapters = bookChapters().map((c) => ({ url: u(`/book/${c.slug}`), changeFrequency: "yearly" as const, priority: 0.5 }));
	return [...pages, ...posts, ...chapters];
}
