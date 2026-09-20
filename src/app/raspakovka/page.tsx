import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

const TITLE = "Распаковка AI-агентства за несколько шагов";
const DESCRIPTION =
	"Готовая AI-команда под ваш бизнес за 19 900 ₽: AI-директор и агенты с ролями, доска задач, контроль расходов на AI. Руль сразу у вас.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: {
		canonical: "/raspakovka",
	},
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/raspakovka", type: "website", images: [{ url: "/images/og/raspakovka.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Агентство в коробке — распаковка NCAi",
	description: DESCRIPTION,
	provider: { "@type": "Organization", name: "NCAi", url: "https://ilya-novitsky.ru" },
	areaServed: "RU",
	url: "https://ilya-novitsky.ru/raspakovka",
	offers: {
		"@type": "Offer",
		price: "19900",
		priceCurrency: "RUB",
		url: "https://ilya-novitsky.ru/raspakovka",
		availability: "https://schema.org/InStock",
	},
};

export default function Page() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
			<RaspakovkaPage />
		</>
	);
}
