import type { Metadata } from "next";
import Hero from "@/components/book/Hero";
import Toc from "@/components/book/Toc";

export const metadata: Metadata = {
	title: "Книга «Нейро-воронка»",
	description: "Книга Ильи Новицкого о системах продаж на стыке нейробиологии, поведенческой психологии и AI. Читается бесплатно, онлайн.",
	alternates: { canonical: "/book" },
};

export default function Page() {
	return (
		<>
			<Hero />
			<Toc />
		</>
	);
}
