import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";

const TITLE = "NCAi — Tech Product Partner · Найм и партнёрство";
const DESCRIPTION =
	"Технический партнёр для продукта: Web3, HealthTech, AI. Проектирую, пишу код, вывожу на рынок. Фикс от 200 000 ₽ или доля/опцион. 300+ проектов, 50M ₽ в запусках.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/portfolio" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/portfolio", type: "website" },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <PortfolioPage />;
}
