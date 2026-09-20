"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

interface Partner {
	name: string;
	url: string;
	badge: string;
	badgeEn: string;
	logo: string;
	desc: string;
	descEn: string;
	cta: string;
	ctaEn: string;
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
		cta: "Открыть страницу",
		ctaEn: "Open page",
		internal: true,
	},
	{
		name: "ex NIHILO",
		url: "/ex-nihilo",
		badge: "Партнёр-исследователь",
		badgeEn: "Research partner",
		logo: "∅",
		desc:
			"ex NIHILO — платформа самоисследования для предпринимателей: ЭЭГ, трекеры сна и пульса, клинические шкалы и голосовой дневник сводятся в одну картину, а личный ИИ-агент показывает, что держит продуктивность, а что её съедает.",
		descEn:
			"ex NIHILO — a self-research platform for entrepreneurs: EEG, sleep and pulse trackers, clinical scales and a voice diary combine into one picture, and a personal AI agent shows what's driving your productivity and what's draining it.",
		cta: "Открыть страницу",
		ctaEn: "Open page",
		internal: true,
	},
	{
		name: "Prodamus",
		url: "https://connect.prodamus.ru/?ref=NSAI&c=T2w",
		badge: "Партнёр",
		badgeEn: "Partner",
		logo: "₽",
		desc:
			"Prodamus — приём онлайн-платежей и рассрочек: платёжные ссылки, интеграция с CRM и автоворонками, автоматизация продаж курсов и услуг.",
		descEn:
			"Prodamus — online payments and installment plans: payment links, CRM and funnel integrations, automated sales for courses and services.",
		cta: "Перейти и зарегистрировать платёжку",
		ctaEn: "Go register a payment account",
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
				<h1 className="page-h1">
					{ru ? "Сервисы, которые закрывают то, что я не строю сам" : "Services that cover what I don't build myself"}
				</h1>
				<p className="page-sub">
					{ru
						? "Клиент уходит, пока вы спите; платёжку нужно поднять без разработки; основатель выгорает раньше, чем окупается воронка. Это три дыры, которые я не закрываю кодом — их закрывают сервисы ниже. Честно: ссылка на Prodamus партнёрская, с неё идёт вознаграждение. На выбор это не влияет — ставлю то, чем пользуюсь сам."
						: "A client leaves while you sleep; payments need to go live without a developer; the founder burns out before the funnel pays off. Three gaps I don't close with code — the services below do. To be straight: the Prodamus link is a referral one and pays a commission. It doesn't drive the pick — I list what I use myself."}
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
							<span className="partner-go">{ru ? p.cta : p.ctaEn} →</span>
						</a>
					))}
				</div>

				<div style={{ marginBottom: "5rem" }}>
					<h2 className="legal-h2">{ru ? "Кому есть смысл написать" : "Who it's worth writing to me"}</h2>
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
