import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

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
		{
			url: `${SITE_URL}/`,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/book`,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${SITE_URL}/consulting`,
			changeFrequency: "monthly",
			priority: 0.9,
		},
	];

	const bookRoutes: MetadataRoute.Sitemap = getBookSlugs().map((slug) => ({
		url: `${SITE_URL}/book/${slug}`,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...baseRoutes, ...bookRoutes];
}
