import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

const TITLE = "Илья Новицкий — AI-агентство и продукты";
const DESCRIPTION =
	"Бизнесу — готовое AI-агентство под ключ. Специалисту — своя AI-команда. 300+ проектов, 50M ₽ в запусках, две изданные книги.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/", type: "website", images: [{ url: "/images/og/home.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
	return <HomePage />;
}
