import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: "Промпты NCAi — доступ через бота",
	description: "Готовые промпты NCAi выдаются персонально через бота. Открытого каталога на сайте нет.",
	alternates: { canonical: "/prompts" },
	robots: { index: false, follow: false },
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
