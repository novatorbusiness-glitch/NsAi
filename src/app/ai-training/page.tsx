import type { Metadata } from "next";
import AiTrainingPage from "@/components/pages/AiTrainingPage";

export const metadata: Metadata = {
  title: "NCAi — Обучение AI · 1 на 1, 1 месяц",
  description:
    "Обучение работе с AI руками за месяц: 5–6 индивидуальных сессий 1 на 1, берём твой реальный проект и собираем его вместе. Сайт, книга или автоматизация. Цена 70–80к ₽.",
};

export default function Page() {
  return <AiTrainingPage />;
}
