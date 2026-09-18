import type { Metadata } from "next";
import AboutProject from "@/components/pages/AboutProject";

const TITLE = "О проекте — NCAi";
const DESCRIPTION =
	"NCAi — проект Ильи Новицкого: нейромаркетинг, инженерия систем продаж, AI-автоматизация. Продукты: распаковка AI-агентства, обучение AI 1 на 1 и бесплатная книга «Нейро-Воронка».";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/o-proekte" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/o-proekte", type: "website" },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <AboutProject />;
}
