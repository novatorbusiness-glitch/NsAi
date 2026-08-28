import type { Metadata } from "next";
import PromptsCatalog from "@/components/pages/PromptsCatalog";

export const metadata: Metadata = {
	title: "NCAi · книга промптов — 30 готовых промптов по «Нейро-Воронке»",
	description:
		"Книга промптов NCAi: 30 готовых промптов из базы агентства по книге «Нейро-Воронка» — продажи, маркетинг, контент, разработка, книги. Каталог по категориям со счётчиками, поиск ⌘K, копирование в один клик.",
	alternates: { canonical: "/prompts" },
	openGraph: {
		type: "website",
		title: "NCAi · книга промптов",
		description: "30 готовых промптов из книги «Нейро-Воронка»: воронки, креативы, доверие, AI-агенты. Каталог по категориям, поиск и копирование.",
		url: "https://ilya-novitsky.ru/prompts",
	},
};

export default function Page() {
	return <PromptsCatalog />;
}
