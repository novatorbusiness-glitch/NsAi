import type { Metadata } from "next";
import Hero from "@/components/cases/Hero";
import Products from "@/components/cases/Products";
import System from "@/components/cases/System";
import Sales from "@/components/cases/Sales";
import Contact from "@/components/cases/Contact";

export const metadata: Metadata = {
	title: "Кейсы: четыре продукта за полгода",
	description: "Четыре продукта с апреля 2026 года, собранные в одиночку с командой AI-агентов, и системы продаж: 17 млн ₽ за 8 месяцев, рост сети с 3 до 30 филиалов.",
	alternates: { canonical: "/keisy" },
};

export default function Page() {
	return (
		<>
			<Hero />
			<Products />
			<System />
			<Sales />
			<Contact />
		</>
	);
}
