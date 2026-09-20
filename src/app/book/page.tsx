import type { Metadata } from "next";
import BookCatalog from "@/components/pages/BookCatalog";
import "@/styles/book-catalog.css";

export const metadata: Metadata = {
	title: "Книга «Нейро-Воронка» — бесплатно",
	description:
		"Практическое руководство по инженерии систем продаж: нейробиология, психология и AI. 6 глав, 30 подглав. Бесплатно, читается прямо на сайте.",
	alternates: { canonical: "/book" },
	openGraph: {
		type: "website",
		title: "Книга «Нейро-Воронка» — бесплатный подарок",
		description: "Практическое руководство по нейромаркетингу и AI-автоматизации. Читается бесплатно на сайте.",
		url: "https://ilya-novitsky.ru/book",
		images: [{ url: "/images/og/default.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return <BookCatalog />;
}
