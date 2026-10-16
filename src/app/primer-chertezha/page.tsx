import type { Metadata } from "next";
import { site } from "@/config/site";
import { primer } from "@content/pages/primer";
import { common } from "@content/pages/common";
import data from "@content/data/okidelo-map.json";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import JsonLd from "@/components/ui/JsonLd";
import MapCanvas from "@/components/primer/MapCanvas";
import { pageMeta, crumbs } from "@/lib/seo";

export const metadata: Metadata = pageMeta(primer.meta, "/primer-chertezha", "primer-chertezha");

// Пример чертежа (решение 16.10): карта проекта OkiDelo → как читать → что получите вы → начать.
export default function Page() {
	const { hero: h, map: m, read: r, you: y, final: f } = primer;
	const links = data.nodes.reduce((a, n) => a + n.links.length, 0);
	const facts = [
		{ num: String(data.nodes.length), text: h.facts.nodes },
		{ num: String(data.layers.length), text: h.facts.layers },
		{ num: String(links), text: h.facts.links },
	];
	return (
		<>
			<section className="hero">
				<div className="wrap">
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{h.crumb}</p>
					<p className="snum">{h.kicker}</p>
					<h1>{h.h1}</h1>
					<p className="lead">{h.lead}</p>
					<div className="past-n three pm-facts">{facts.map((x) => <div key={x.text}><b>{x.num}</b><span>{x.text}</span></div>)}</div>
					<div className="cta-row">
						<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{h.button}</a>
						<a className="more-link" href="/kak-my-rabotaem#chertezh">{h.more}</a>
					</div>
				</div>
			</section>

			<section id="map" className="alt">
				<div className="wrap">
					<SectionHead num={m.num} label={m.label} title={m.h2} lead={m.lead} />
					<MapCanvas />
					<p className="under">{m.honest}</p>
				</div>
			</section>

			<section id="read">
				<div className="wrap">
					<SectionHead num={r.num} label={r.label} title={r.h2} />
					<ul className="pm-points">{r.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				</div>
			</section>

			<section id="you" className="alt">
				<div className="wrap">
					<SectionHead num={y.num} label={y.label} title={y.h2} />
					<ul className="pm-points">{y.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				</div>
			</section>

			<section className="final">
				<div className="wrap">
					<div className="card">
						<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{f.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
						<ContactNote />
					</div>
				</div>
			</section>
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-chertezha" }])]} />
		</>
	);
}
