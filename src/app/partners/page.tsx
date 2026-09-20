import type { Metadata } from "next";
import PartnersPage from "@/components/pages/PartnersPage";

const TITLE = "Сервисы, которые закрывают то, что я не строю сам";
const DESCRIPTION =
	"Три сервиса рядом с NCAi: чат-бот, который отвечает клиентам ночью, приём платежей без разработки и платформа восстановления для основателя. За каждый отвечаю лично.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/partners" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/partners", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <PartnersPage />;
}
