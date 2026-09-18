import type { Metadata } from "next";
import OfferPage from "@/components/pages/OfferPage";

export const metadata: Metadata = {
	title: "Публичная оферта — NCAi",
	description:
		"Публичный договор-оферта (Пользовательское соглашение) об условиях использования сайта ilya-novitsky.ru и его материалов.",
	alternates: { canonical: "/offer" },
};

export default function Page() {
	return <OfferPage />;
}
