import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

export const metadata: Metadata = {
	title: "Распаковка NCAi-агентства за несколько шагов · Агентство в коробке",
	description:
		"Купи не консультанта — купи работающую AI-команду. Распаковка в боте: бот → оплата → кабинет. Для владельцев бизнеса и для тех, кто осваивает новую профессию менеджера AI-агентства. Свои AI-агенты, доска задач, контроль расходов в панели. 19 900 ₽ разово (первый месяц подписки включён), дальше 4 900 ₽/мес.",
	alternates: {
		canonical: "/raspakovka",
	},
};

export default function Page() {
	return <RaspakovkaPage />;
}
