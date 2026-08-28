import type { Metadata } from "next";
import ConsultingPage from "@/components/pages/ConsultingPage";

export const metadata: Metadata = {
	title: "Внедрение NCAi-агентства за 30 дней · Агентство в коробке",
	description:
		"Купи не консультанта — купи работающее агентство. Распаковка за 60–90 минут: AI-команда, отделы, задачи, база клиентов, аналитика и финансы в панели. 30 дней до передачи руля. Подписка от 2 900 ₽/мес.",
	alternates: {
		canonical: "/consulting",
	},
};

export default function Page() {
	return <ConsultingPage />;
}
