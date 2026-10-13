import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = { title: "Страница не найдена", robots: { index: false } };

// 404: GitHub Pages отдаёт out/404.html на любой несуществующий адрес.
export default function NotFound() {
	return (
		<section className="hero">
			<div className="wrap">
				<p className="kicker">Ошибка 404</p>
				<h1>Такой страницы нет</h1>
				<p className="lead">Возможно, адрес изменился после обновления сайта. Начните с главной или выберите раздел.</p>
				<div className="cta-row">
					<Link className="btn p" href="/">На главную</Link>
					<a className="btn s" href={site.contacts.telegram} target="_blank" rel="noopener">Написать в Telegram</a>
				</div>
				<p className="lead" style={{ marginTop: 28 }}>
					{site.menu.map((m, i) => <span key={m.href}>{i ? " · " : ""}<Link href={m.href}>{m.label}</Link></span>)}
				</p>
			</div>
		</section>
	);
}
