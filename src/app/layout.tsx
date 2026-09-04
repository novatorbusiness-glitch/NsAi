import type { Metadata } from "next";
import { Oswald, Jost, Courier_Prime } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import MobileTabs from "@/components/layout/MobileTabs";
import "../styles/globals.css";

const oswald = Oswald({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-oswald",
	display: "swap",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600"],
	variable: "--font-jost",
	display: "swap",
});

const courierPrime = Courier_Prime({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-courier-prime",
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
		"Илья Новицкий (NCAi) — архитектор систем продаж. Консалтинг по внедрению AI, обучение AI 1 на 1, бесплатная книга «Нейро-Воронка». Нейромаркетинг, поведенческая психология, AI-автоматизация.",
	keywords: [
		"Илья Новицкий",
		"NCAi",
		"нейромаркетинг",
		"Нейро-Воронка",
		"AI-автоматизация",
		"обучение AI",
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
			"Нейромаркетинг, AI-автоматизация, системное мышление. Бесплатная книга «Нейро-Воронка», консалтинг и обучение AI 1 на 1.",
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
		<html lang="ru" className={`${oswald.variable} ${jost.variable} ${courierPrime.variable}`}>
			<body>
				<LangProvider>{children}</LangProvider>
				<MobileTabs />
			</body>
		</html>
	);
}
