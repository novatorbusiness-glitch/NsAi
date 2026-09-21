import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

const TITLE = "Политика конфиденциальности — NCAi";
const DESCRIPTION =
	"Политика обработки персональных данных сайта ilya-novitsky.ru в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».";

export const metadata: Metadata = {
	title: { absolute: TITLE },
	description: DESCRIPTION,
	alternates: { canonical: "/privacy" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/privacy", type: "website", images: [{ url: "/images/og/privacy.png", width: 1200, height: 630 }] },
};

export default function Page() {
	return <PrivacyPage />;
}
