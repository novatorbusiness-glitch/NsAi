import type { Metadata } from "next";
import AboutProject from "@/components/pages/AboutProject";

const TITLE = "О проекте";
const DESCRIPTION =
	"NCAi — проект Ильи Новицкого: инженерия систем продаж, AI-агентства и нейромаркетинг. Как устроены продукты и на чём они основаны.";

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
