import type { Metadata } from "next";
import AiTrainingPage from "@/components/pages/AiTrainingPage";

const TITLE = "Обучение AI один на один — проект за месяц";
const DESCRIPTION =
	"За месяц собираем ваш реальный проект руками, а не изучаем инструменты. Две живые сессии и распаковка агентства в программе. 70–80к ₽.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-training" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/ai-training", type: "website", images: [{ url: "/images/og/ai-training.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Обучение AI 1 на 1",
  description: DESCRIPTION,
  provider: { "@type": "Organization", name: "NCAi", url: "https://ilya-novitsky.ru" },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "P1M",
  },
  offers: {
    "@type": "Offer",
    price: "70000",
    priceCurrency: "RUB",
    url: "https://ilya-novitsky.ru/ai-training",
    availability: "https://schema.org/InStock",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <AiTrainingPage />
    </>
  );
}
