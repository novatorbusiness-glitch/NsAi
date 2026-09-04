import type { Metadata } from "next";
import BookCatalog from "@/components/pages/BookCatalog";
import "@/styles/book-catalog.css";

export const metadata: Metadata = {
	title: "Книга «Нейро-Воронка» — бесплатно",
	description:
		"«Нейро-Воронка» Ильи Новицкого — практическое руководство по инженерии систем продаж на стыке нейробиологии, поведенческой психологии и AI (6 глав, 30 подглав). Бесплатный подарок, читается прямо на сайте.",
	alternates: { canonical: "/book" },
	openGraph: {
		type: "website",
		title: "Книга «Нейро-Воронка» — бесплатный подарок",
		description: "Практическое руководство по нейромаркетингу и AI-автоматизации. Читается бесплатно на сайте.",
		url: "https://ilya-novitsky.ru/book",
	},
};

export default function Page() {
	return <BookCatalog />;
}
