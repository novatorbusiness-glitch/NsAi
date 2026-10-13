import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Карта сайта. Страницы добавляются по мере переноса (docs/RELAUNCH.md); статьи и главы — шаги 7–8.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = ["/"];
	return pages.map((p) => ({ url: `${site.url}${p === "/" ? "/" : p}`, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.8 }));
}
