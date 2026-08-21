import type { Metadata } from "next";
import ConsultingPage from "@/components/pages/ConsultingPage";

export const metadata: Metadata = {
	title: "NCAi — Архитектор систем · AI-консалтинг",
	description:
		"Купите мои мозги на 2–3 месяца: вхожу в команду заказчика, строю маркетинговую систему и AI-автоматизацию через лайф-кодинг. Ухожу — зависимости нет.",
};

export default function Page() {
	return <ConsultingPage />;
}
