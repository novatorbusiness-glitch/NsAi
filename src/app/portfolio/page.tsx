import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata: Metadata = {
	title: "NCAi — Tech Product Partner · Найм и партнёрство",
	description:
		"Технический партнёр для продукта: Web3, HealthTech, AI. Проектирую, пишу код, вывожу на рынок. Фикс от 200 000 ₽ или доля/опцион. 300+ проектов, 50M ₽ в запусках.",
};

export default function Page() {
	return <PortfolioPage />;
}
