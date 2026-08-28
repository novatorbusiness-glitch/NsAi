import type { Metadata } from "next";
import AboutProject from "@/components/pages/AboutProject";

export const metadata: Metadata = {
	title: "О проекте — NCAi",
	description:
		"NCAi — проект Ильи Новицкого: нейромаркетинг, инженерия систем продаж, AI-автоматизация. Три продукта: внедрение AI-систем, обучение AI 1 на 1, книги «Нейро-Воронка» и «Агентство в коробке».",
	alternates: { canonical: "/o-proekte" },
};

export default function Page() {
	return <AboutProject />;
}
