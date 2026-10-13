import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";

export const metadata: Metadata = {
	title: "Публичная оферта на оказание услуг",
	description: "Условия оказания услуг Ильи Новицкого: тест-драйв, чертёж системы, ведение и наставничество. Цены, порядок оплаты, возврат и ответственность.",
	alternates: { canonical: "/offer" },
	robots: { index: false },
};

export default function Page() {
	return <LegalPage slug="offer" />;
}
