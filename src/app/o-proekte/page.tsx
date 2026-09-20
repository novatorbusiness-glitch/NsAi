import type { Metadata } from "next";
import AboutProject from "@/components/pages/AboutProject";

const TITLE = "Чем мы отличаемся от чат-бота";
const DESCRIPTION =
	"Не доступ к нейросети, а команда с ролями, памятью о вашем бизнесе и проверкой результата до закрытия задачи. Как устроены продукты и на чём основаны.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/o-proekte" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/o-proekte", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <AboutProject />;
}
