import type { Metadata } from "next";
import PartnersPage from "@/components/pages/PartnersPage";

const TITLE = "Партнёры — NCAi";
const DESCRIPTION =
	"Партнёры NCAi — компании и сервисы, с которыми Илья Новицкий строит системы продаж и AI-автоматизации: b24u.com (автоматизация на Битрикс24) и Prodamus (приём платежей и рассрочек).";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/partners" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/partners", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <PartnersPage />;
}
