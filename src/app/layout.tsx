import type { Metadata } from "next";
import Script from "next/script";
import { Unbounded, PT_Serif, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/consulting.css";

const syne = Unbounded({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "600", "700", "800"],
	variable: "--font-syne",
	display: "swap",
});

const instrumentSerif = PT_Serif({
	subsets: ["latin", "cyrillic"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-instrument-serif",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin", "cyrillic"],
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
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
		],
		shortcut: "/favicon.ico",
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
		other: [
			{ rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
			{ rel: "manifest", url: "/site.webmanifest" },
		],
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
				<Script id="yandex-metrika" strategy="afterInteractive">
					{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=112582890','ym');ym(112582890,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a'):null;if(!a)return;var g=a.getAttribute('data-goal');if(g){ym(112582890,'reachGoal',g);return;}var h=a.getAttribute('href')||'';if(h.indexOf('t.me')!==-1){ym(112582890,'reachGoal','telegram');return;}if(a.classList&&(a.classList.contains('nc')||a.classList.contains('mnav-cta')||a.classList.contains('bp'))){ym(112582890,'reachGoal','cta');}});`}
				</Script>
				<noscript>
					<div>
						<img src="https://mc.yandex.ru/watch/112582890" style={{ position: "absolute", left: "-9999px" }} alt="" />
					</div>
				</noscript>
			</body>
		</html>
	);
}
