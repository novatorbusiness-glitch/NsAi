import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { allPosts } from "@/lib/blog";

// Карта сайта: страницы, статьи блога, главы книги (public/book/*.html). Документы и переадресации не включаем — они noindex.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const u = (p: string) => `${site.url}${p}`;
	const pages = ["/", "/kak-my-rabotaem", "/keisy", "/primer-chertezha", "/primer-audita", "/svoya-ai-sreda", "/blog", "/book"].map((p) => ({ url: u(p), changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8 }));
	const posts = allPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.updated, changeFrequency: "monthly" as const, priority: 0.7 }));
	const chapters = fs.readdirSync(path.join(process.cwd(), "public/book")).filter((f) => f.endsWith(".html")).sort().map((f) => ({ url: u(`/book/${f.slice(0, -5)}`), changeFrequency: "yearly" as const, priority: 0.5 }));
	return [...pages, ...posts, ...chapters];
}
