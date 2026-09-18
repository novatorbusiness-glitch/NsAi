import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";

const TITLE = "Партнёры — NCAi";
const DESCRIPTION =
	"Партнёры NCAi — компании и сервисы, с которыми Илья Новицкий строит системы продаж и AI-автоматизации: b24u.com (автоматизация на Битрикс24) и Prodamus (приём платежей и рассрочек).";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	alternates: { canonical: "/partners" },
	openGraph: { title: TITLE, description: DESCRIPTION, url: "/partners", type: "website", images: [{ url: "/images/og/default.png", width: 1200, height: 630 }] },
	twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

interface Partner {
	name: string;
	url: string;
	badge: string;
	logo: string;
	desc: string;
	internal?: boolean;
}

const PARTNERS: Partner[] = [
	{
		name: "b24u.com",
		url: "/b24u",
		badge: "Официальный партнёр",
		logo: "b24",
		desc:
			"b24u.com — чат-бот с ИИ для сайта с конверсией более 60%. Отвечает клиентам круглосуточно и помогает вернуть лиды, которые вы теряете, пока никого нет онлайн.",
		internal: true,
	},
	{
		name: "Prodamus",
		url: "https://prodamus.ru",
		badge: "Партнёр",
		logo: "₽",
		desc:
			"Prodamus — приём онлайн-платежей и рассрочек: платёжные ссылки, интеграция с CRM и автоворонками, автоматизация продаж курсов и услуг.",
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
									<span className="partner-badge">{p.badge}</span>
								</div>
							</div>
							<p className="partner-desc">{p.desc}</p>
							<span className="partner-go">{p.internal ? "Страница партнёра" : p.url.replace("https://", "")} →</span>
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
