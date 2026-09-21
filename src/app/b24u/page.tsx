import type { Metadata } from "next";
import B24uPage, { FAQ } from "@/components/pages/B24uPage";

const TITLE = "AI-чатбот B24U для сайта";
const DESCRIPTION =
	"AI-чатбот B24U: отвечает клиентам круглосуточно, до 72% конверсии из чата в лид. Настройка без кода. Илья Новицкий — дистрибьютор.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/b24u" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/b24u", type: "website", images: [{ url: "/images/og/b24u.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

// FAQPage — вопросы и ответы те же, что реально показаны на странице
// (FAQ из B24uPage.tsx), только сюда добавлена structured data для
// расширенного сниппета в поиске.
const FAQ_JSON_LD = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: { "@type": "Answer", text: f.a },
	})),
};

export default function Page() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
			<B24uPage />
		</>
	);
}
