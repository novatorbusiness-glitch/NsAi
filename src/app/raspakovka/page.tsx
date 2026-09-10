import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

export const metadata: Metadata = {
	title: "Архитектура твоего цифрового отдела за одну сессию · NCAi",
	description:
		"Разовая сессия 60–90 минут: разворачиваем workspace, AI-директора и до 5 AI-сотрудников под твою нишу, ставим первую задачу. 25 000 ₽, засчитываются в стоимость полного внедрения.",
	alternates: { canonical: "/raspakovka" },
};

export default function Page() {
	return <RaspakovkaPage />;
}
