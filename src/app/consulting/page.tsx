import type { Metadata } from "next";
import ConsultingRedirect from "@/components/pages/ConsultingRedirect";

export const metadata: Metadata = {
	title: "Распаковка NCAi · Архитектура твоего цифрового отдела",
	description: "Страница переехала — актуальный оффер теперь на /raspakovka.",
	robots: { index: false, follow: true },
	alternates: { canonical: "/raspakovka" },
};

export default function Page() {
	return <ConsultingRedirect />;
}
