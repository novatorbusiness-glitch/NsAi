import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
	title: "Политика обработки персональных данных",
	description: "Какие данные собирает сайт ilya-novitsky.ru, зачем, где они хранятся, сколько и как их защищают. Права посетителя и контакты для запросов.",
	alternates: { canonical: "/privacy" },
	robots: { index: false },
};

export default function Page() {
	return <LegalPage slug="privacy" />;
}
