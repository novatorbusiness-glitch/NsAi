import type { Metadata } from "next";
import { LangProvider } from "@/lib/i18n";
import "../styles/globals.css";

const SITE_URL = "https://ilya-novitsky.ru";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "Илья Новицкий · NCAi — архитектор систем: нейромаркетинг, AI-автоматизация, книги",
		template: "%s | NCAi · Илья Новицкий",
	},
	description:
		"Илья Новицкий (NCAi) — архитектор систем продаж. Консалтинг по внедрению AI, обучение AI 1 на 1, книга «Нейро-Воронка» и «Агентство в коробке». Нейромаркетинг, поведенческая психология, AI-автоматизация.",
	keywords: [
		"Илья Новицкий",
		"NCAi",
		"нейромаркетинг",
		"Нейро-Воронка",
		"AI-автоматизация",
		"обучение AI",
		"агентство в коробке",
		"воронка продаж",
		"консалтинг AI",
	],
	openGraph: {
		type: "website",
		locale: "ru_RU",
		alternateLocale: "en_US",
		url: SITE_URL,
		siteName: "NCAi · Илья Новицкий",
		title: "Илья Новицкий · NCAi — архитектор систем",
		description:
			"Нейромаркетинг, AI-автоматизация, системное мышление. Книги «Нейро-Воронка» и «Агентство в коробке», консалтинг и обучение AI 1 на 1.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<LangProvider>{children}</LangProvider>
			</body>
		</html>
	);
}
