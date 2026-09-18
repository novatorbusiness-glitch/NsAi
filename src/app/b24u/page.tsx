import type { Metadata } from "next";
import B24uPage from "@/components/pages/B24uPage";

const TITLE = "AI-чатбот B24U для сайта · дистрибьютор Илья Новицкий";
const DESCRIPTION =
	"AI-чатбот B24U для сайта: отвечает клиентам 24/7, конверсия до 72% из чата в лид, рост конверсии сайта в среднем +260%. Настройка без кода за 15 минут, 7 дней бесплатно. Дистрибьютор — Илья Новицкий (NCAi).";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/b24u" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/b24u", type: "website" },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <B24uPage />;
}
