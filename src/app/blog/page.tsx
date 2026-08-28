import type { Metadata } from "next";
import BlogIndex from "@/components/pages/BlogIndex";

export const metadata: Metadata = {
	title: "Блог — нейромаркетинг, воронки и AI",
	description:
		"Блог Ильи Новицкого: статьи о нейромаркетинге, инженерии воронок продаж, крючках и офферах, AI-копирайтинге и автоматизации. Практические механики, которые можно применить сразу.",
	alternates: { canonical: "/blog" },
	openGraph: {
		type: "website",
		title: "Блог — нейромаркетинг, воронки и AI",
		description: "Практические статьи о том, как заставить воронку продаж работать: крючок, боль, оффер, AI.",
		url: "https://ilya-novitsky.ru/blog",
	},
};

export default function Page() {
	return <BlogIndex />;
}
