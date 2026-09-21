import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: { absolute: "Под капотом NCAi — доступ через бота" },
	description: "Обзор базы знаний NCAi — закрытый материал, выдаётся через бота NCAi.",
	alternates: { canonical: "/inside" },
	robots: { index: false, follow: false },
	openGraph: {
		title: "Под капотом NCAi — доступ через бота",
		description: "Обзор базы знаний NCAi — закрытый материал, выдаётся через бота NCAi.",
		url: "/inside",
		type: "website",
		images: [{ url: "/images/og/inside.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return (
		<ProtectedStub
			title="Под капотом NCAi"
			description={
				<>
					Обзор базы знаний агентства — закрытый материал.
					Выдаётся персонально через бота NCAi по одноразовой ссылке.
				</>
			}
		/>
	);
}
