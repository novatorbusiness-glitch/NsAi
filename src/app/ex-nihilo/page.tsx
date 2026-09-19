import type { Metadata } from "next";
import ExNihiloPage from "@/components/pages/ExNihiloPage";

const TITLE = "ex NIHILO — платформа самоисследования · партнёр Илья Новицкий";
const DESCRIPTION =
	"ex NIHILO: ЭЭГ-сессии Neiry, трекеры сна и пульса, клинические шкалы и голосовой дневник сводятся в одну картину — личный ИИ-агент находит, что держит вашу продуктивность и что её съедает. 7 дней бесплатно. Партнёр — Илья Новицкий (NCAi).";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/ex-nihilo" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/ex-nihilo", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <ExNihiloPage />;
}
