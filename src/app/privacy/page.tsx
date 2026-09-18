import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
	title: "Политика конфиденциальности — NCAi",
	description:
		"Политика обработки персональных данных сайта ilya-novitsky.ru в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».",
	alternates: { canonical: "/privacy" },
};

export default function Page() {
	return <PrivacyPage />;
}
