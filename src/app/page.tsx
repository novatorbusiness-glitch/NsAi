import type { Metadata } from "next";
import IndexPage from "@/components/pages/IndexPage";

export const metadata: Metadata = {
	title: "NCAi — Илья Новицкий · AI-Powered Product Builder",
	description:
		"Илья Новицкий — AI-Powered Product Builder. Консалтинг, обучение AI и книга «Нейро-воронка». Соединяю продуктовое мышление предпринимателя с руками разработчика.",
};

export default function Page() {
	return <IndexPage />;
}
