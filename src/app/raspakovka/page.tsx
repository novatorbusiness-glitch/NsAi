import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

const TITLE = "Распаковка NCAi-агентства за несколько шагов · Агентство в коробке";
const DESCRIPTION =
	"Купи не консультанта — купи работающую AI-команду. Распаковка в боте: бот → оплата → кабинет. Для владельцев бизнеса и для тех, кто осваивает новую профессию менеджера AI-агентства. Свои AI-агенты, доска задач, контроль расходов в панели. 19 900 ₽ разово (первый месяц подписки включён), дальше 4 900 ₽/мес.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: {
		canonical: "/raspakovka",
	},
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/raspakovka", type: "website" },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <RaspakovkaPage />;
}
