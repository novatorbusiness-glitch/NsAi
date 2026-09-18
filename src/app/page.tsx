import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

const TITLE = "NCAi — Илья Новицкий · AI-Powered Product Builder";
const DESCRIPTION =
	"Илья Новицкий — AI-Powered Product Builder. Распаковка AI-агентства, обучение AI и книга «Нейро-воронка». Соединяю продуктовое мышление предпринимателя с руками разработчика.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/", type: "website" },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <HomePage />;
}
