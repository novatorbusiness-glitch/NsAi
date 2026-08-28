import type { Metadata } from "next";
import PromptsCatalog from "@/components/pages/PromptsCatalog";

export const metadata: Metadata = {
	title: "NCAi · книга промптов — 111 готовых промптов из базы агентства",
	description:
		"Книга промптов NCAi: 111 готовых промптов из базы агентства — продажи, маркетинг, контент, разработка, книги, финансы, базы, qa, услуги. Каталог по категориям со счётчиками, поиск ⌘K, копирование в один клик.",
	alternates: { canonical: "/prompts" },
	openGraph: {
		type: "website",
		title: "NCAi · книга промптов",
		description: "111 готовых промптов из базы NCAi: воронки, креативы, доверие, AI-агенты, разработка. Каталог по категориям, поиск и копирование.",
		url: "https://ilya-novitsky.ru/prompts",
	},
};

export default function Page() {
	return <PromptsCatalog />;
}
