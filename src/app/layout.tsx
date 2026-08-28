import type { Metadata } from "next";
import { Syne, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import MobileTabs from "@/components/layout/MobileTabs";
import "../styles/globals.css";

const syne = Syne({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
	variable: "--font-syne",
	display: "swap",
});

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-instrument-serif",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

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
		<html lang="ru" className={`${syne.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
			<body>
				<LangProvider>{children}</LangProvider>
				<MobileTabs />
			</body>
		</html>
	);
}
