import type { Metadata } from "next";
import AiTrainingPage from "@/components/pages/AiTrainingPage";

export const metadata: Metadata = {
  title: "Обучение AI 1 на 1 · Твой проект за месяц — NCAi",
  description:
    "Собери свой продукт с помощью AI за месяц: 2 сессии 1 на 1 + распаковка агентства NCAi + месяц на связи + 111 промптов в подарок. Уходишь с работающим сайтом, книгой или автоматизацией, навыком и своим AI-агентством. 70–80к ₽.",
};

export default function Page() {
  return <AiTrainingPage />;
}
