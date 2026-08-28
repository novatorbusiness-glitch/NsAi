import type { Metadata } from "next";
import AiTrainingPage from "@/components/pages/AiTrainingPage";

export const metadata: Metadata = {
  title: "Обучение AI 1 на 1 · Твой проект за месяц — NCAi",
  description:
    "Собери свой продукт с помощью AI за месяц: 5–6 сессий 1 на 1, твой реальный проект, лайф-кодинг. Уходишь с работающим сайтом, книгой или автоматизацией и навыком. 70–80к ₽.",
};

export default function Page() {
  return <AiTrainingPage />;
}
