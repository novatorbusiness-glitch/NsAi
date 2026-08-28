import type { Metadata } from "next";
import BookCatalog from "@/components/pages/BookCatalog";

export const metadata: Metadata = {
	title: "Книги — Нейро-Воронка и Агентство в коробке",
	description:
		"Книги Ильи Новицкого: «Нейро-Воронка» — инженерия систем продаж на стыке нейробиологии и AI (6 глав, 30 подглав), «Агентство в коробке» — методология SaaS-платформы NCAi. Читаются бесплатно на сайте.",
	alternates: { canonical: "/book" },
	openGraph: {
		type: "website",
		title: "Книги — Нейро-Воронка и Агентство в коробке",
		description: "Две книги Ильи Новицкого по нейромаркетингу и AI-автоматизации. Читаются бесплатно на сайте.",
		url: "https://ilya-novitsky.ru/book",
	},
};

export default function Page() {
	return <BookCatalog />;
}
