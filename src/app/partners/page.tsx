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
			"b24u.com — автоматизация бизнеса на базе Битрикс24: внедрение, интеграции, скрипты, связки с AI и Telegram. Вместе с NCAi закрываем полный контур: воронка, продажи, учёт и цифровые сотрудники в одной системе.",
	},
];

export default function PartnersPage() {
	return (
		<PageShell>
			<div className="w page-hero">
				<p className="lb">Партнёры</p>
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
