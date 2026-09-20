import type { Metadata } from "next";
import PartnersPage from "@/components/pages/PartnersPage";

const TITLE = "Партнёры и сервисы";
const DESCRIPTION =
	"Сервисы и компании, с которыми работает NCAi: интеграции, white-label и партнёрские программы.";

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
