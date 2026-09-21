import type { Metadata } from "next";
import OfferPage from "@/components/pages/OfferPage";

const TITLE = "Публичная оферта — NCAi";
const DESCRIPTION =
	"Публичный договор-оферта (Пользовательское соглашение) об условиях использования сайта ilya-novitsky.ru и его материалов.";

export const metadata: Metadata = {
	title: { absolute: TITLE },
	description: DESCRIPTION,
	alternates: { canonical: "/offer" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/offer", type: "website", images: [{ url: "/images/og/offer.png", width: 1200, height: 630 }] },
};

export default function Page() {
	return <OfferPage />;
}
