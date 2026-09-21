import type { Metadata } from "next";
import RoadmapPage from "@/components/pages/RoadmapPage";

const TITLE = "Откуда пришли и куда идём";
const DESCRIPTION =
	"Карта развития NCAi: семь лет практики, старт разработки 20 августа 2026, что уже работает и куда идём до конца 2027. Даты взяты из записей системы.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/roadmap" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/roadmap", type: "website", images: [{ url: "/images/og/roadmap.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <RoadmapPage />;
}
