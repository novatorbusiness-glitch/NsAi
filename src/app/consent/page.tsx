import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
	title: "Согласие на обработку персональных данных",
	description: "Согласие посетителя сайта ilya-novitsky.ru на обработку данных для статистики посещений: какие данные, цель, срок и как отозвать.",
	alternates: { canonical: "/consent" },
	robots: { index: false },
};

export default function Page() {
	return <LegalPage slug="consent" />;
}
