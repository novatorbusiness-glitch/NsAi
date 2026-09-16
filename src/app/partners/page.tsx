import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

export const metadata: Metadata = {
	title: "Партнёры",
	description:
		"Партнёры NCAi — компании и сервисы, с которыми Илья Новицкий строит системы продаж и AI-автоматизации. Первый партнёр — b24u.com: автоматизация бизнеса на базе Битрикс24.",
	alternates: { canonical: "/partners" },
};

interface Partner {
	name: string;
	url: string;
	badge: string;
	logo: string;
	desc: string;
}

const PARTNERS: Partner[] = [
	{
		name: "b24u.com",
		url: "https://b24u.com",
		badge: "Официальный партнёр",
		logo: "b24",
		desc:
			"b24u.com — чат-бот с ИИ для сайта с конверсией более 60%. Отвечает клиентам круглосуточно и помогает вернуть лиды, которые вы теряете, пока никого нет онлайн.",
	},
	{
		name: "AmoCRM",
		url: "https://www.amocrm.ru",
		badge: "Партнёр",
		logo: "CRM",
		desc:
			"AmoCRM — CRM-система для отдела продаж: сделки, воронки, автоматизация коммуникаций с клиентом от первого касания до оплаты.",
	},
	{
		name: "Prodamus",
		url: "https://prodamus.ru",
		badge: "Партнёр",
		logo: "₽",
		desc:
			"Prodamus — приём онлайн-платежей и рассрочек: платёжные ссылки, интеграция с CRM и автоворонками, автоматизация продаж курсов и услуг.",
	},
	{
		name: "Wazzup",
		url: "https://wazzup24.ru",
		badge: "Партнёр",
		logo: "WA",
		desc:
			"Wazzup — интеграция WhatsApp и Telegram с CRM: вся переписка с клиентом в одном окне, без переключений между мессенджерами.",
	},
];

export default function PartnersPage() {
	return (
		<PageShell>
			<div className="w page-hero">
				<p className="page-badge">
					<span className="bdot" />
					Экосистема NCAi
				</p>
				<h1 className="page-h1">Партнёры</h1>
				<p className="page-sub">
					Компании и сервисы, с которыми NCAi строит системы продаж и AI-автоматизации. Партнёрство — это не
					реклама, а совместная работа над продуктами клиентов.
				</p>
			</div>

			<div className="w">
				<div className="partners-grid">
					{PARTNERS.map((p) => (
						<a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-card">
							<div className="partner-card-top">
								<div className="partner-logo">{p.logo}</div>
								<div>
									<h2 className="partner-name">{p.name}</h2>
									<span className="partner-badge">{p.badge}</span>
								</div>
							</div>
							<p className="partner-desc">{p.desc}</p>
							<span className="partner-go">{p.url.replace("https://", "")} →</span>
						</a>
					))}
				</div>

				<div style={{ marginBottom: "5rem" }}>
					<h2 className="legal-h2">Стать партнёром</h2>
					<p className="legal-p">
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
					</p>
				</div>
			</div>
		</PageShell>
	);
}
