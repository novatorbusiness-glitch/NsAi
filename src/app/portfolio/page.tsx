import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";

const TITLE = "NCAi — Tech Product Partner · Найм и партнёрство";
const DESCRIPTION =
	"Технический партнёр для продукта: Web3, HealthTech, AI. Проектирую, пишу код, вывожу на рынок. Фикс от 200 000 ₽ или доля/опцион. 300+ проектов, 50M ₽ в запусках.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/portfolio" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/portfolio", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Tech Product Partner — найм и партнёрство",
	description: DESCRIPTION,
	provider: { "@type": "Person", name: "Илья Новицкий", url: "https://ilya-novitsky.ru" },
	areaServed: "Worldwide",
	url: "https://ilya-novitsky.ru/portfolio",
	offers: {
		"@type": "Offer",
		price: "200000",
		priceCurrency: "RUB",
		url: "https://ilya-novitsky.ru/portfolio",
		availability: "https://schema.org/InStock",
	},
};

export default function Page() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
			<PortfolioPage />
		</>
	);
}
