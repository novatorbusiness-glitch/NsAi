import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: { absolute: "Промпты NCAi — доступ через бота" },
	description: "Готовые промпты NCAi выдаются персонально через бота. Открытого каталога на сайте нет.",
	alternates: { canonical: "/prompts" },
	robots: { index: false, follow: false },
	openGraph: {
		title: "Промпты NCAi — доступ через бота",
		description: "Готовые промпты NCAi выдаются персонально через бота. Открытого каталога на сайте нет.",
		url: "/prompts",
		type: "website",
		images: [{ url: "/images/og/prompts.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return (
		<ProtectedStub
			title="Промпты NCAi"
			description={
				<>
					База готовых промптов агентства — закрытый материал.
					Выдаётся персонально через бота NCAi по одноразовой ссылке.
				</>
			}
		/>
	);
}
