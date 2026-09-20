import type { Metadata } from "next";
import PromptsCatalog from "@/components/pages/PromptsCatalog";

export const metadata: Metadata = {
	title: "111 промптов, готовых к работе",
	description:
		"Берите и применяйте: 111 промптов из рабочей базы агентства — продажи, маркетинг, контент, разработка, финансы. Поиск и копирование в один клик.",
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
