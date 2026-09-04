import type { Metadata } from "next";
import BookReader from "@/components/book/BookReader";
import { buildReaderChapters } from "@/lib/book-reader";
import "@/styles/book-reader.css";

export const metadata: Metadata = {
	title: "Читать «Нейро-Воронку» онлайн",
	description:
		"Полный текст книги «Нейро-Воронка» Ильи Новицкого — 6 глав, 30 подглав. Читайте онлайн на одной длинной странице: клик по оглавлению плавно скроллит к нужной подглаве.",
	alternates: { canonical: "/book/read" },
	openGraph: {
		type: "website",
		title: "Читать «Нейро-Воронку» онлайн",
		description: "Нейромаркетинг, поведенческая психология и AI-автоматизация продаж. 6 глав, 30 подглав.",
		url: "https://ilya-novitsky.ru/book/read",
	},
};

export default function ReadPage() {
	const chapters = buildReaderChapters();
	return <BookReader chapters={chapters} />;
}
