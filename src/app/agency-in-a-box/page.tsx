import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: "Агентство в коробке — доступ через бота",
	description: "Методология «Агентство в коробке» — закрытый материал, выдаётся через бота NCAi.",
	alternates: { canonical: "/agency-in-a-box" },
	robots: { index: false, follow: false },
	openGraph: {
		title: "Агентство в коробке — доступ через бота",
		description: "Методология «Агентство в коробке» — закрытый материал, выдаётся через бота NCAi.",
		url: "/agency-in-a-box",
		type: "website",
		images: [{ url: "/images/og/agency-in-a-box.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return (
		<ProtectedStub
			title="Агентство в коробке"
			description={
				<>
					Методология «Агентство в коробке» — закрытый материал.
					Выдаётся персонально через бота NCAi по одноразовой ссылке.
				</>
			}
		/>
	);
}
