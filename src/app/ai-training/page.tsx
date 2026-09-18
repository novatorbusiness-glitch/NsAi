import type { Metadata } from "next";
import AiTrainingPage from "@/components/pages/AiTrainingPage";

const TITLE = "Обучение AI 1 на 1 · Твой проект за месяц — NCAi";
const DESCRIPTION =
  "Собери свой продукт с помощью AI за месяц: 2 сессии 1 на 1 + распаковка агентства NCAi + месяц на связи + 111 промптов в подарок. Уходишь с работающим сайтом, книгой или автоматизацией, навыком и своим AI-агентством. 70–80к ₽.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-training" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/ai-training", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <AiTrainingPage />;
}
