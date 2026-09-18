import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

const TITLE = "Политика конфиденциальности — NCAi";
const DESCRIPTION =
	"Политика обработки персональных данных сайта ilya-novitsky.ru в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/privacy" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/privacy", type: "website" },
};

export default function Page() {
	return <PrivacyPage />;
}
