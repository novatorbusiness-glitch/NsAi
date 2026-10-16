import type { Metadata } from "next";
import { site } from "@/config/site";
import { prices } from "@/config/prices";
import { common } from "@content/pages/common";

// Метатеги, превью и разметка schema.org для каждой страницы — из тех же данных, что и страница (Blueprint S3–S8).
// Превью: /og/<имя>.jpg, собирает scripts/og/generate_og.py по заголовку страницы; проверка — scripts/check-seo.mjs.

// убрать невидимые знаки типографики из метатегов и разметки
export const clean = (s: string) => s.replace(/\u2060/g, "");

export const plain = (s: string) => clean(s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1").replace(/\{\{(.+?)\}\}/g, "$1").replace(/\u00a0/g, " "));

type PageMeta = { title: string; description: string };


export function pageMeta(raw: PageMeta, path: string, og: string, opts: { absolute?: boolean; type?: "website" | "article"; modified?: string; noindex?: boolean } = {}): Metadata {
	const m = { title: clean(raw.title), description: clean(raw.description) };
	const ogTitle = m.title.replace(` · ${site.name}`, "");
	return {
		title: opts.absolute ? { absolute: m.title } : m.title,
		description: m.description,
		alternates: { canonical: path },
		openGraph: {
			type: opts.type || "website", locale: "ru_RU", siteName: site.name, url: path, title: ogTitle, description: m.description,
			images: [{ url: `/og/${og}.jpg?v=2026101402`, width: 1200, height: 630, alt: ogTitle }],
			...(opts.modified ? { modifiedTime: opts.modified } : {}),
		},
		twitter: { card: "summary_large_image" },
		...(opts.noindex ? { robots: { index: false } } : {}),
	};
}

const rub = (s: string) => Number(s.replace(/\D/g, ""));
const person = { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url };

export function crumbs(items: { name: string; path: string }[]) {
	return {
		"@context": "https://schema.org", "@type": "BreadcrumbList",
		itemListElement: [{ name: common.ui.home, path: "/" }, ...items].map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: `${site.url}${x.path === "/" ? "" : x.path}` })),
	};
}

export function faqLd(items: readonly { q: string; a: string }[]) {
	return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })) };
}

export function servicesLd() {
	const offer = (name: string, price: string, unit?: string) => ({
		"@type": "Offer", name, priceCurrency: "RUB", price: rub(price),
		...(unit ? { priceSpecification: { "@type": "UnitPriceSpecification", price: rub(price), priceCurrency: "RUB", unitText: unit } } : {}),
	});
	return {
		"@context": "https://schema.org", "@type": "Service", name: "Проектирование и развитие продукта и продаж",
		provider: person, areaServed: "RU", url: site.url,
		hasOfferCatalog: {
			"@type": "OfferCatalog", name: "Шаги работы",
			itemListElement: [
				offer("Аудит и план действий", prices.testDrive.price),
				offer("Чертёж системы", prices.blueprint.price),
				offer("Ведение", prices.management.price, "месяц"),
			],
		},
	};
}

export function mentorLd() {
	return {
		"@context": "https://schema.org", "@type": "Service", name: "Наставничество один на один: продукт на AI своими руками",
		provider: person, areaServed: "RU", url: `${site.url}/nastavnichestvo`,
		offers: { "@type": "Offer", priceCurrency: "RUB", price: rub(prices.mentor.price), priceSpecification: { "@type": "UnitPriceSpecification", price: rub(prices.mentor.price), priceCurrency: "RUB", unitText: "месяц" } },
	};
}

export function articleLd(a: { slug: string; h1: string; description: string; updated: string }) {
	return {
		"@context": "https://schema.org", "@type": "Article", headline: a.h1, description: a.description, dateModified: a.updated, inLanguage: "ru",
		author: person, image: `${site.url}/og/blog-${a.slug}.jpg`, mainEntityOfPage: `${site.url}/blog/${a.slug}`,
	};
}

export function bookLd(name: string, description: string, chapters: number) {
	return { "@context": "https://schema.org", "@type": "Book", name, description, author: person, inLanguage: "ru", isAccessibleForFree: true, numberOfPages: chapters, url: `${site.url}/book`, image: `${site.url}/images/site/book-cover.jpg` };
}

export function casesLd(items: { slug: string; title: string; text: string }[]) {
	return {
		"@context": "https://schema.org", "@type": "ItemList", name: "Продукты, собранные Ильёй Новицким",
		itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "CreativeWork", name: c.title, description: plain(c.text), creator: person, url: `${site.url}/keisy#products` } })),
	};
}

// Старый адрес → новый (16.10): у каждой страницы-переадресации свой заголовок и описание, иначе Вебмастер видит дубли title и description.
export function redirectMeta(from: string, to: string): Metadata {
	return {
		title: `${common.redirect.title}: ${from}`,
		description: `Страница ${from} переехала на ${site.url.replace(/^https?:\/\//, "")}${to === "/" ? "" : to}.`,
		alternates: { canonical: to },
		robots: { index: false },
	};
}
