import type { Metadata } from "next";
import BookCatalog from "@/components/pages/BookCatalog";
import "@/styles/book-catalog.css";

export const metadata: Metadata = {
	title: "Воронка, которая продаёт — книга бесплатно",
	description:
		"Как собрать воронку, которая приносит заявки без надрыва: нейробиология внимания, доверие, AI-автоматизация. 6 глав, 30 подглав. Читается на сайте.",
	alternates: { canonical: "/book" },
	openGraph: {
		type: "website",
		title: "Книга «Нейро-Воронка» — бесплатный подарок",
		description: "Практическое руководство по нейромаркетингу и AI-автоматизации. Читается бесплатно на сайте.",
		url: "https://ilya-novitsky.ru/book",
		images: [{ url: "/images/og/book.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return <BookCatalog />;
}
