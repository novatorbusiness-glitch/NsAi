import type { Metadata } from "next";
import PromptsCatalog from "@/components/pages/PromptsCatalog";

export const metadata: Metadata = {
	title: "111 готовых промптов из базы агентства",
	description:
		"111 готовых промптов NCAi: продажи, маркетинг, контент, разработка, финансы. Каталог по категориям, быстрый поиск и копирование в один клик.",
	alternates: { canonical: "/prompts" },
	openGraph: {
		type: "website",
		title: "NCAi · книга промптов",
		description: "111 готовых промптов из базы NCAi: воронки, креативы, доверие, AI-агенты, разработка. Каталог по категориям, поиск и копирование.",
		url: "https://ilya-novitsky.ru/prompts",
		images: [{ url: "/images/og/default.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return <PromptsCatalog />;
}
