import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { site } from "@/config/site";
import { allPosts } from "@/lib/blog";
import { chapters as bookChapters } from "@/lib/book";

// Карта сайта: страницы, статьи блога, главы книги (content/book/book.json). Документы и переадресации не включаем — они noindex.
// Дата изменения страницы — последний коммит её файла с текстами (30.10, чтобы поиск видел свежие правки); у статей — поле updated.
export const dynamic = "force-static";

const changed = (...files: string[]) => {
	try {
		return execSync(`git log -1 --format=%cs -- ${files.map((f) => `"${f}"`).join(" ")}`, { encoding: "utf8" }).trim() || undefined;
	} catch {
		return undefined;
	}
};

const pageFiles: Record<string, string[]> = {
	"/": ["content/pages/home.ts", "content/pages/faq.ts"],
	"/kak-my-rabotaem": ["content/pages/kak-my-rabotaem.ts"],
	"/keisy": ["content/pages/keisy.ts", "content/cases"],
	"/primer-chertezha": ["content/pages/primer.ts"],
	"/primer-audita": ["content/pages/razbor.ts"],
	"/svoya-ai-sreda": ["content/pages/sreda.ts"],
	"/blog": ["content/pages/blog.ts", "content/blog"],
	"/book": ["content/pages/book.ts"],
};

export default function sitemap(): MetadataRoute.Sitemap {
	const u = (p: string) => `${site.url}${p}`;
	const pages = Object.entries(pageFiles).map(([p, files]) => ({ url: u(p), lastModified: changed(...files), changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8 }));
	const posts = allPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.updated, changeFrequency: "monthly" as const, priority: 0.7 }));
	const chapters = bookChapters().map((c) => ({ url: u(`/book/${c.slug}`), lastModified: changed(`content/book/${c.slug}.md`), changeFrequency: "yearly" as const, priority: 0.5 }));
	return [...pages, ...posts, ...chapters];
}
