"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/layout/PageShell";

interface Partner {
	name: string;
	url: string;
	gap: string;
	gapEn: string;
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
	// B24U временно скрыт (партнёрство обсуждается — вернуть после подтверждения сделки)
	{
		name: "ex NIHILO",
		url: "/ex-nihilo",
		gap: "Вы выгораете раньше, чем окупается воронка",
		gapEn: "You burn out before the funnel pays off",
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
		gap: "Платёжку нужно поднять без разработки",
		gapEn: "Payments need to go live without a developer",
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
						? "Платёжку нужно поднять без разработки; основатель выгорает раньше, чем окупается воронка. Это две дыры, которые я не закрываю кодом — их закрывают сервисы ниже. Честно: ссылка на Prodamus партнёрская, с неё идёт вознаграждение. На выбор это не влияет — ставлю то, чем пользуюсь сам."
						: "Payments need to go live without a developer; the founder burns out before the funnel pays off. Two gaps I don't close with code — the services below do. To be straight: the Prodamus link is a referral one and pays a commission. It doesn't drive the pick — I list what I use myself."}
				</p>
			</div>

			<div className="w">
				{/* Три дыры из подзаголовка напрямую связаны с тремя партнёрами —
				    не выдуманная статистика, а честная схема «кто что закрывает». */}
				<div
					className="vz"
					role="img"
					aria-label={
						ru
							? "Две дыры и кто их закрывает: выгорание → ex NIHILO, платежи → Prodamus"
							: "Two gaps and who closes them: burnout → ex NIHILO, payments → Prodamus"
					}
				>
					<div className="vz-head">
						<span className="vz-badge">
							<span className="vz-pulse" />
							{ru ? "Кто что закрывает" : "Who closes what"}
						</span>
					</div>
					<ul className="vz-gaps-list">
						{PARTNERS.map((p) => (
							<li key={p.name} className="vz-gaps-row">
								<span className="vz-gaps-problem">{ru ? p.gap : p.gapEn}</span>
								<span className="vz-gaps-arrow">→</span>
								<span className="vz-gaps-partner">
									<span className="vz-gaps-partner-logo">{p.logo}</span>
									<span className="vz-gaps-partner-name">{p.name}</span>
								</span>
							</li>
						))}
					</ul>
				</div>

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
