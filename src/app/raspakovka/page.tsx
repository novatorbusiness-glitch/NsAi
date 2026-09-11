import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

export const metadata: Metadata = {
	title: "Распаковка NCAi-агентства за одну сессию · Агентство в коробке",
	description:
		"Купи не консультанта — купи работающее агентство. Распаковка за 60–90 минут: AI-команда, отделы, задачи, база клиентов, аналитика и финансы в панели. Руль сразу у вас. 25 000 ₽ разово + подписка от 2 900 ₽/мес.",
	alternates: {
		canonical: "/raspakovka",
	},
};

export default function Page() {
	return <RaspakovkaPage />;
}
