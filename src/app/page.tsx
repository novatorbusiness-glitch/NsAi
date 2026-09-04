import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
	title: "NCAi — Илья Новицкий · AI-Powered Product Builder",
	description:
		"Илья Новицкий — AI-Powered Product Builder. Консалтинг, обучение AI и книга «Нейро-воронка». Соединяю продуктовое мышление предпринимателя с руками разработчика.",
};

export default function Page() {
	return <HomePage />;
}
