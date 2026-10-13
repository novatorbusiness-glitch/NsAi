import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import Goals from "@/components/layout/Goals";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { clean } from "@/lib/seo";
import "../styles/tokens.css";
import "../styles/base.css";

// Шрифты скачиваются при сборке и отдаются с нашего сайта: без запросов к Google у посетителя.
const manrope = Manrope({ subsets: ["latin", "latin-ext", "cyrillic"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext", "cyrillic"], weight: ["400", "500", "600", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: common.site.title, template: `%s · ${site.name}` },
	description: clean(common.site.description),
	openGraph: { type: "website", locale: "ru_RU", siteName: site.name, images: [{ url: site.og, width: 1200, height: 630, alt: site.name }] },
	twitter: { card: "summary_large_image" },
	manifest: "/site.webmanifest",
	verification: { yandex: "0a04b9c11bffe08d" },
	robots: { index: true, follow: true },
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
	},
};

const JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": `${site.url}/#person`,
	name: site.name,
	url: site.url,
	jobTitle: common.site.jobTitle,
	sameAs: [site.contacts.telegram, site.contacts.channel],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru" className={`${manrope.variable} ${mono.variable}`}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
				<CookieBanner />
				<Goals />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
			</body>
		</html>
	);
}
