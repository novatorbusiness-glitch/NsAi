"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

interface Partner {
	name: string;
	url: string;
	displayUrl?: string;
	badge: string;
	badgeEn: string;
	logo: string;
	desc: string;
	descEn: string;
	internal?: boolean;
}

const PARTNERS: Partner[] = [
	{
		name: "b24u.com",
		url: "/b24u",
		badge: "Официальный партнёр",
		badgeEn: "Official partner",
		logo: "b24",
		desc:
			"b24u.com — чат-бот с ИИ для сайта с конверсией более 60%. Отвечает клиентам круглосуточно и помогает вернуть лиды, которые вы теряете, пока никого нет онлайн.",
		descEn:
			"b24u.com — an AI chatbot for your website with over 60% conversion. Answers clients around the clock and helps recover leads you lose while no one's online.",
		internal: true,
	},
	{
		name: "Prodamus",
		url: "https://connect.prodamus.ru/?ref=NSAI&c=T2w",
		displayUrl: "prodamus.ru",
		badge: "Партнёр",
		badgeEn: "Partner",
		logo: "₽",
		desc:
			"Prodamus — приём онлайн-платежей и рассрочек: платёжные ссылки, интеграция с CRM и автоворонками, автоматизация продаж курсов и услуг.",
		descEn:
			"Prodamus — online payments and installment plans: payment links, CRM and funnel integrations, automated sales for courses and services.",
	},
];

export default function PartnersPage() {
	const { lang } = useLang();
	const ru = lang === "ru";

	return (
		<PageShell>
			<div className="w page-hero">
				<p className="page-badge">
					<span className="bdot" />
					{ru ? "Экосистема NCAi" : "The NCAi ecosystem"}
				</p>
				<h1 className="page-h1">{ru ? "Партнёры" : "Partners"}</h1>
				<p className="page-sub">
					{ru
						? "Компании и сервисы, с которыми NCAi строит системы продаж и AI-автоматизации. Партнёрство — это не рекламa, а совместная работа над продуктами клиентов."
						: "Companies and services NCAi partners with to build sales systems and AI automation. Partnership here isn't advertising — it's joint work on clients' products."}
				</p>
			</div>

			<div className="w">
				<div className="partners-grid">
					{PARTNERS.map((p) => (
						<a
							key={p.name}
							href={p.url}
							target={p.internal ? undefined : "_blank"}
							rel={p.internal ? undefined : "noopener noreferrer"}
							className="partner-card"
						>
							<div className="partner-card-top">
								<div className="partner-logo">{p.logo}</div>
								<div>
									<h2 className="partner-name">{p.name}</h2>
									<span className="partner-badge">{ru ? p.badge : p.badgeEn}</span>
								</div>
							</div>
							<p className="partner-desc">{ru ? p.desc : p.descEn}</p>
							<span className="partner-go">
								{p.internal ? (ru ? "Страница партнёра" : "Partner page") : p.displayUrl ?? p.url.replace("https://", "")} →
							</span>
						</a>
					))}
				</div>

				<div style={{ marginBottom: "5rem" }}>
					<h2 className="legal-h2">{ru ? "Стать партнёром" : "Become a partner"}</h2>
					<p className="legal-p">
						{ru ? (
							<>
								Если вы строите инструменты для бизнеса — автоматизацию, CRM, AI-агентов, аналитику — и видите
								синергию с нейромаркетингом и инженерией воронок NCAi, напишите:{" "}
								<a href="mailto:ilya.novitskii@yandex.ru" style={{ color: "var(--a)" }}>
									ilya.novitskii@yandex.ru
								</a>{" "}
								или в{" "}
								<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" style={{ color: "var(--a)" }}>
									Telegram
								</a>
								.
							</>
						) : (
							<>
								If you're building tools for business — automation, CRM, AI agents, analytics — and see synergy
								with NCAi's neuromarketing and funnel engineering, get in touch:{" "}
								<a href="mailto:ilya.novitskii@yandex.ru" style={{ color: "var(--a)" }}>
									ilya.novitskii@yandex.ru
								</a>{" "}
								or on{" "}
								<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" style={{ color: "var(--a)" }}>
									Telegram
								</a>
								.
							</>
						)}
					</p>
				</div>
			</div>
		</PageShell>
	);
}
