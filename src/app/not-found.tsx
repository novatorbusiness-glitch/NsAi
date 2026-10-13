import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { common } from "@content/pages/common";

const c = common.notFound;
export const metadata: Metadata = { title: c.title };

// 404: GitHub Pages отдаёт out/404.html на любой несуществующий адрес.
export default function NotFound() {
	return (
		<section className="hero">
			<div className="wrap">
				<p className="kicker">{c.kicker}</p>
				<h1>{c.h1}</h1>
				<p className="lead">{c.lead}</p>
				<div className="cta-row">
					<Link className="btn p" href="/">{c.home}</Link>
					<a className="btn s" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.telegram}</a>
				</div>
				<p className="lead" style={{ marginTop: 28 }}>
					{site.menu.map((m, i) => <span key={m.href}>{i ? " · " : ""}<Link href={m.href}>{m.label}</Link></span>)}
				</p>
			</div>
		</section>
	);
}
