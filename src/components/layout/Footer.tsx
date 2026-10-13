import Link from "next/link";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import Partners from "@/components/ui/Partners";

// Подвал: знак и роль · страницы · связаться · документы; ниже партнёры; внизу копирайт и реквизиты.
export default function Footer() {
	const c = site.contacts;
	const u = common.ui;
	return (
		<footer>
			<div className="wrap">
				<div className="fgrid">
					<div className="fbrand">
						<img className="fmark" src="/brand/ncai.svg" alt="NCAi" width={77} height={27} />
						<p><b>{site.name}</b><br />{site.roleFooter}</p>
					</div>
					<nav className="fcol" aria-label={u.footPages}>
						<p className="fh">{u.footPages}</p>
						{site.footerNav.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}
					</nav>
					<div className="fcol">
						<p className="fh">{u.footContacts}</p>
						<a href={c.telegram} target="_blank" rel="noopener">Telegram {c.telegramHandle}</a>
						<a href={c.max} target="_blank" rel="noopener">MAX</a>
						<a href={c.channel} target="_blank" rel="noopener">{u.channel} {c.channelHandle}</a>
						<a href={`mailto:${c.email}`}>{c.email}</a>
					</div>
					<div className="fcol">
						<p className="fh">{u.footDocs}</p>
						{site.legal.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}
					</div>
				</div>
				<Partners compact />
				<div className="fbottom">
					<span>© {new Date().getFullYear()} {site.name}</span>
					<span>{u.requisites} {site.requisites}</span>
				</div>
			</div>
		</footer>
	);
}
