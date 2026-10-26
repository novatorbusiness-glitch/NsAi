import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import Goals from "@/components/layout/Goals";
import ContactChooser from "@/components/layout/ContactChooser";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { clean } from "@/lib/seo";
import "../styles/tokens.css";
import "../styles/base.css";

// Шрифты лежат у нас (public/fonts, тот же fonts.css, что у книги): сборка не ходит в Google и не падает из-за сети (26.10).

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
			{ url: "/icon.svg", type: "image/svg+xml" },
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
		<html lang="ru">
			<head>
				<link rel="preload" href="/fonts/manrope-cyrillic-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
				<link rel="stylesheet" href="/fonts/fonts.css" />
			</head>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
				<CookieBanner />
				<Goals />
				<ContactChooser />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
			</body>
		</html>
	);
}
