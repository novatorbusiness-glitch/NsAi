import Link from "next/link";
import { site } from "@/config/site";
import { common } from "@content/pages/common";

// Подвал: знак NCAi, роль, страницы, контакты, документы, реквизиты.
export default function Footer() {
	const c = site.contacts;
	return (
		<footer>
			<div className="wrap">
				<img className="fmark" src="/brand/ncai.svg" alt="NCAi" width={77} height={27} />
				<p>
					<b style={{ color: "var(--ink)" }}>{site.name}</b> · {site.roleFooter}
				</p>
				<div className="row">
					{site.footerNav.map((i) => (
						<Link key={i.href} href={i.href}>
							{i.label}
						</Link>
					))}
				</div>
				<div className="row">
					<a href={c.telegram} target="_blank" rel="noopener">Telegram {c.telegramHandle}</a>
					<a href={c.max} target="_blank" rel="noopener">MAX</a>
					<a href={c.channel} target="_blank" rel="noopener">{common.ui.channel} {c.channelHandle}</a>
					<a href={`mailto:${c.email}`}>{c.email}</a>
				</div>
				<div className="row fine">
					{site.legal.map((i) => (
						<Link key={i.href} href={i.href}>
							{i.label}
						</Link>
					))}
					<span>{common.ui.requisites} {site.requisites}</span>
				</div>
				<p className="fine">© {new Date().getFullYear()} {site.name}</p>
			</div>
		</footer>
	);
}
