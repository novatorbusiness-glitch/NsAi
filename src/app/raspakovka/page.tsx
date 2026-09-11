import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

export const metadata: Metadata = {
	title: "Распаковка NCAi-агентства за одну сессию · Агентство в коробке",
	description:
		"Купи не консультанта — купи работающую AI-команду. Распаковка за 60–90 минут: свои AI-агенты, доска задач, контроль расходов на AI в панели. Руль сразу у вас. 25 000 ₽ разово (первый месяц подписки включён), дальше 4 900 ₽/мес.",
	alternates: {
		canonical: "/raspakovka",
	},
};

export default function Page() {
	return <RaspakovkaPage />;
}
