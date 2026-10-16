import type { Metadata } from "next";
import { site } from "@/config/site";
import { primer } from "@content/pages/primer";
import { common } from "@content/pages/common";
import data from "@content/data/project-map.json";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import Rich from "@/components/ui/Rich";
import JsonLd from "@/components/ui/JsonLd";
import MapCanvas from "@/components/primer/MapCanvas";
import { MapMini } from "@/components/primer/MapPreview";
import DemoFrame from "@/components/primer/DemoFrame";
import { pageMeta, crumbs } from "@/lib/seo";

export const metadata: Metadata = pageMeta(primer.meta, "/primer-chertezha", "primer-chertezha");

// Пример чертежа (решение 16.10): зачем карта (боль и рынок) → карта (чертёж) → как читать → прототип → ведение по карте → ваш проект в три шага → начать.
export default function Page() {
	const { hero: h, why: w, map: m, read: r, demo: d, vedenie: v, you: y, final: f } = primer;
	const route = data.nodes.filter((n) => n.layer === "route");
	const ICON: Record<string, string> = { done: "✓", now: "◐", plan: "○" };
	const links = data.nodes.reduce((a, n) => a + n.links.length, 0);
	const facts = [
		{ num: String(data.nodes.length), text: h.facts.nodes },
		{ num: String(data.layers.length), text: h.facts.layers },
		{ num: String(links), text: h.facts.links },
	];
	return (
		<>
			<section className="hero">
				<div className="wrap hero-grid pm-hero">
					<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{h.crumb}</p>
					<p className="snum">{h.kicker}</p>
					<h1>{h.h1}</h1>
					<p className="lead">{h.lead}</p>
					<p className="lead">{h.sub}</p>
					<div className="past-n three pm-facts">{facts.map((x) => <div key={x.text}><b>{x.num}</b><span>{x.text}</span></div>)}</div>
					<div className="cta-row">
						<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{h.button}</a>
						<a className="more-link" href="/kak-my-rabotaem#chertezh">{h.more}</a>
					</div>
					</div>
					<a className="pm-hero-map" href="#map" aria-label={m.h2}><MapMini /></a>
				</div>
			</section>

			<section id="why" className="alt">
				<div className="wrap">
					<SectionHead num={w.num} label={w.label} title={w.h2} />
					<ul className="pm-why">{w.items.map((x) => <li key={x.num}><b>{x.num}</b><span>{x.t}</span></li>)}</ul>
					<p className="ssrc"><Rich t={w.sources} /></p>
				</div>
			</section>

			<section id="map">
				<div className="wrap">
					<SectionHead num={m.num} label={m.label} title={m.h2} lead={m.lead} />
					<MapCanvas />
					<p className="under">{m.honest}</p>
				</div>
			</section>

			<section id="read" className="alt">
				<div className="wrap">
					<SectionHead num={r.num} label={r.label} title={r.h2} />
					<ul className="pm-points">{r.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				</div>
			</section>

			<section id="demo">
				<div className="wrap">
					<SectionHead num={d.num} label={d.label} title={d.h2} lead={d.lead} />
					<p className="pm-note-l">{d.note}</p>
					<DemoFrame />
					<p className="under">{d.cap}</p>
				</div>
			</section>

			<section id="vedenie" className="alt">
				<div className="wrap">
					<SectionHead num={v.num} label={v.label} title={v.h2} lead={v.lead} />
					<p className="lbl">{v.routeLabel}</p>
					<ol className="pm-route">{route.map((n) => <li key={n.id} className={n.status}><span>{ICON[n.status]}</span><b>{n.title}</b><small>{m.status[n.status as "done" | "now" | "plan"].toLowerCase()}</small></li>)}</ol>
					<ul className="pm-points">{v.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
					<p className="pm-price">{v.price} <a href="/kak-my-rabotaem#vedenie">{v.more}</a></p>
				</div>
			</section>

			<section id="you">
				<div className="wrap">
					<SectionHead num={y.num} label={y.label} title={y.h2} />
					<ul className="pm-points">{y.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				</div>
			</section>

			<section className="final">
				<div className="wrap">
					<div className="card">
						<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{f.button}</a><a className="btn s" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{f.button2}</a></div>
						<ContactNote />
					</div>
				</div>
			</section>
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-chertezha" }])]} />
		</>
	);
}
