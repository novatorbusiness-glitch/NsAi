import type { MetadataRoute } from "next";

const SITE_URL = "https://ncai-consulting-20260420.surge.sh";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
