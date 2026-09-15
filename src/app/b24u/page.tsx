import type { Metadata } from "next";
import B24uPage from "@/components/pages/B24uPage";

export const metadata: Metadata = {
	title: "AI-чатбот B24U для сайта · дистрибьютор Илья Новицкий",
	description:
		"AI-чатбот B24U для сайта: отвечает клиентам 24/7, конверсия до 72% из чата в лид, рост конверсии сайта в среднем +260%. Настройка без кода за 15 минут, 7 дней бесплатно. Дистрибьютор — Илья Новицкий (NCAi).",
	alternates: { canonical: "/b24u" },
};

export default function Page() {
	return <B24uPage />;
}
