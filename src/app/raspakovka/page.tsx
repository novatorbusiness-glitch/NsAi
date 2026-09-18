import type { Metadata } from "next";
import RaspakovkaPage from "@/components/pages/RaspakovkaPage";

const TITLE = "Распаковка NCAi-агентства за несколько шагов · Агентство в коробке";
const DESCRIPTION =
	"Купи не консультанта — купи работающую AI-команду. Распаковка в боте: бот → оплата → кабинет. Для владельцев бизнеса и для тех, кто осваивает новую профессию менеджера AI-агентства. Свои AI-агенты, доска задач, контроль расходов в панели. 19 900 ₽ разово (первый месяц подписки включён), дальше 4 900 ₽/мес.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: {
		canonical: "/raspakovka",
	},
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/raspakovka", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
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
