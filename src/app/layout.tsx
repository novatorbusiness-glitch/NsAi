import type { Metadata } from "next";
import Script from "next/script";
import { Unbounded, PT_Serif, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/consulting.css";
import "../styles/ai-training.css";
import "../styles/portfolio.css";
import "../styles/viz.css";

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
		default: "Илья Новицкий · NCAi — AI-агентство и продукты",
		template: "%s · NCAi",
	},
	description:
		"Илья Новицкий (NCAi): AI-агентство под ключ для бизнеса, обучение AI один на один, бесплатная книга «Нейро-Воронка» о нейромаркетинге и воронках.",
	keywords: [
		"Илья Новицкий",
		"NCAi",
		"нейромаркетинг",
		"Нейро-Воронка",
		"AI-автоматизация",
		"обучение AI",
		"воронка продаж",
		"агентство в коробке",
		"распаковка AI-агентства",
	],
	openGraph: {
		type: "website",
		locale: "ru_RU",
		alternateLocale: "en_US",
		url: SITE_URL,
		siteName: "NCAi · Илья Новицкий",
		title: "Илья Новицкий · NCAi — архитектор систем",
		description:
			"Нейромаркетинг, AI-автоматизация, системное мышление. Бесплатная книга «Нейро-Воронка», распаковка AI-агентства для бизнеса и специалистов, обучение AI 1 на 1.",
		images: [{ url: "/images/og/default.png", width: 1200, height: 630, alt: "NCAi — агентство в коробке" }],
	},
	twitter: {
		card: "summary_large_image",
		images: ["/images/og/default.png"],
	},
	// Google подтверждён HTML-файлом (public/google44dc7b2423db5368.html),
	// не мета-тегом — у меня нет реального content-токена для мета-способа,
	// а выдумывать его нельзя: не совпадёт с тем, что Google выдал Илье.
	// Одного способа подтверждения достаточно, дублировать не нужно.
	verification: {
		yandex: "0a04b9c11bffe08d",
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

const JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: "Илья Новицкий",
			alternateName: "Ilya Novitsky",
			url: SITE_URL,
			image: `${SITE_URL}/images/og/default.png`,
			jobTitle: "Архитектор систем",
			worksFor: { "@id": `${SITE_URL}/#organization` },
			sameAs: ["https://t.me/Ilya_novator"],
		},
		{
			"@type": "Organization",
			"@id": `${SITE_URL}/#organization`,
			name: "NCAi",
			url: SITE_URL,
			logo: `${SITE_URL}/images/og/default.png`,
			founder: { "@id": `${SITE_URL}/#person` },
			sameAs: ["https://t.me/Ilya_novator", "https://t.me/NCAi_Agency_bot"],
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: SITE_URL,
			name: "NCAi · Илья Новицкий",
			publisher: { "@id": `${SITE_URL}/#organization` },
			inLanguage: ["ru-RU", "en-US"],
		},
	],
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
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
				<Script id="yandex-metrika" strategy="afterInteractive">
					{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=112582890','ym');ym(112582890,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
				</Script>
				<noscript>
					<div>
						<img src="https://mc.yandex.ru/watch/112582890" style={{ position: "absolute", left: "-9999px" }} alt="" />
					</div>
				</noscript>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-JZ4HFZSL4S" strategy="afterInteractive" />
				<Script id="google-analytics" strategy="afterInteractive">
					{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JZ4HFZSL4S');`}
				</Script>
				{/* Один обработчик кликов на обе системы аналитики — цель шлётся
				    под одним и тем же именем в Метрику (reachGoal) и в GA4
				    (event), чтобы имена целей не могли разойтись между
				    системами. Источники: ссылки на t.me → "telegram",
				    основные CTA-кнопки (.nc/.mnav-cta/.bp) → "cta",
				    произвольные — через data-goal на конкретной ссылке. */}
				<Script id="analytics-goals" strategy="afterInteractive">
					{`document.addEventListener('click',function(e){
	var a=e.target&&e.target.closest?e.target.closest('a'):null;
	if(!a)return;
	var goal=a.getAttribute('data-goal');
	if(!goal){
		var h=a.getAttribute('href')||'';
		if(h.indexOf('t.me')!==-1){goal='telegram';}
		else if(a.classList&&(a.classList.contains('nc')||a.classList.contains('mnav-cta')||a.classList.contains('bp'))){goal='cta';}
	}
	if(!goal)return;
	if(window.ym)ym(112582890,'reachGoal',goal);
	if(window.gtag)gtag('event',goal);
});`}
				</Script>
			</body>
		</html>
	);
}
