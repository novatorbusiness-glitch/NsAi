import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

const TITLE = "Рутина уходит с вас, а не копится";
const DESCRIPTION =
	"Забираю операционку в AI-агентство: команда с ролями, проверкой результата и контролем расходов. Сначала показываю результат на вашей задаче — бесплатно.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/", type: "website", images: [{ url: "/images/og/home.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <HomePage />;
}
