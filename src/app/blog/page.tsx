import type { Metadata } from "next";
import BlogIndex from "@/components/pages/BlogIndex";
import "@/styles/blog.css";

export const metadata: Metadata = {
	title: "Как заставить воронку приносить заявки",
	description:
		"Разбираю, почему воронка не приносит заявки и что чинить первым: крючки, офферы, касания, AI-копирайтинг. Механики, которые применяются сразу.",
	alternates: { canonical: "/blog" },
	openGraph: {
		type: "website",
		title: "Блог — нейромаркетинг, воронки и AI",
		description: "Практические статьи о том, как заставить воронку продаж работать: крючок, боль, оффер, AI.",
		url: "https://ilya-novitsky.ru/blog",
		images: [{ url: "/images/og/blog.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return <BlogIndex />;
}
