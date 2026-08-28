import type { Metadata } from "next";
import PromptsCatalog from "@/components/pages/PromptsCatalog";

export const metadata: Metadata = {
	title: "Каталог промптов NCAi — книга «Нейро-Воронка»",
	description:
		"Каталог промптов NCAi: 30 готовых промптов по книге «Нейро-Воронка» — продажи, маркетинг, контент, разработка. Каждый промпт связан с главой книги и читается бесплатно.",
	alternates: { canonical: "/prompts" },
	openGraph: {
		type: "website",
		title: "Каталог промптов NCAi",
		description: "30 готовых промптов из книги «Нейро-Воронка»: воронки, креативы, доверие, AI-агенты.",
		url: "https://ilya-novitsky.ru/prompts",
	},
};

export default function Page() {
	return <PromptsCatalog />;
}
