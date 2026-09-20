import type { Metadata } from "next";
import ExNihiloPage from "@/components/pages/ExNihiloPage";

const TITLE = "ex NIHILO — платформа самоисследования";
const DESCRIPTION =
	"ЭЭГ-сессии, трекеры сна и пульса, клинические шкалы и дневник в одной картине. Личный ИИ-агент находит, что влияет на ваше состояние.";

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
