import type { Metadata } from "next";
import ConsultingRedirect from "@/components/pages/ConsultingRedirect";

export const metadata: Metadata = {
	title: { absolute: "Распаковка NCAi · Архитектура твоего цифрового отдела" },
	description: "Страница переехала — актуальный оффер теперь на /raspakovka.",
	robots: { index: false, follow: true },
	alternates: { canonical: "/raspakovka" },
	openGraph: {
		title: "Операционка уходит с вас",
		description: "Страница переехала — актуальный оффер теперь на /raspakovka.",
		url: "/raspakovka",
		type: "website",
		images: [{ url: "/images/og/raspakovka.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return <ConsultingRedirect />;
}
