import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getBlogSlugs } from "@/lib/blog";

const SITE_URL = "https://ilya-novitsky.ru";

function getBookSlugs(): string[] {
	const dir = path.join(process.cwd(), "content/book");
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => file.replace(/\.mdx$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
	const baseRoutes: MetadataRoute.Sitemap = [
		{ url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
		{ url: `${SITE_URL}/book`, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${SITE_URL}/consulting`, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${SITE_URL}/ai-training`, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${SITE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${SITE_URL}/prompts`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/o-proekte`, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${SITE_URL}/partners`, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
		{ url: `${SITE_URL}/offer`, changeFrequency: "yearly", priority: 0.3 },
	];

	const bookRoutes: MetadataRoute.Sitemap = getBookSlugs().map((slug) => ({
		url: `${SITE_URL}/book/${slug}`,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	const blogRoutes: MetadataRoute.Sitemap = getBlogSlugs().map((slug) => ({
		url: `${SITE_URL}/blog/${slug}`,
		changeFrequency: "monthly",
		priority: 0.6,
	}));

	return [...baseRoutes, ...blogRoutes, ...bookRoutes];
}
