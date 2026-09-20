import type { Metadata } from "next";
import BlogIndex from "@/components/pages/BlogIndex";
import "@/styles/blog.css";

export const metadata: Metadata = {
	title: "Блог — нейромаркетинг, воронки и AI",
	description:
		"Статьи о нейромаркетинге, инженерии воронок, крючках и офферах, AI-копирайтинге. Практические механики, которые можно применить сразу.",
	alternates: { canonical: "/blog" },
	openGraph: {
		type: "website",
		title: "Блог — нейромаркетинг, воронки и AI",
		description: "Практические статьи о том, как заставить воронку продаж работать: крючок, боль, оффер, AI.",
		url: "https://ilya-novitsky.ru/blog",
		images: [{ url: "/images/og/default.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return <BlogIndex />;
}
