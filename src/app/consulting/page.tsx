import type { Metadata } from "next";
import ConsultingPage from "@/components/pages/ConsultingPage";

export const metadata: Metadata = {
	title: "NCAi — Внедрение агентства за 30 дней · Агентство в коробке",
	description:
		"Внедряю NCAi-агентство в коробке за 30 дней: распаковка 60–90 минут, AI-команда, отделы, задачи, база клиентов, аналитика и финансы в панели. Подписка от 2 900 ₽/мес. Передаю руль — зависимости нет.",
	alternates: {
		canonical: "/consulting",
	},
};

export default function Page() {
	return <ConsultingPage />;
}
