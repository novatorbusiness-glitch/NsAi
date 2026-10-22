import SectionHead from "@/components/ui/SectionHead";
import { primer } from "@content/pages/primer";
import data from "@content/data/project-map.json";

// 05 Ведение по карте.
export default function Vedenie() {
	const m = primer.map;
	const v = primer.vedenie;
	const route = data.nodes.filter((n) => n.layer === "route");
	const ICON: Record<string, string> = { done: "✓", now: "◐", plan: "○" };
	return (
		<section id="vedenie" className="alt">
			<div className="wrap">
				<SectionHead num={v.num} label={v.label} title={v.h2} lead={v.lead} />
				<p className="lbl">{v.routeLabel}</p>
				<ol className="pm-route">{route.map((n) => <li key={n.id} className={n.status}><span>{ICON[n.status]}</span><b>{n.title}</b><small>{m.status[n.status as "done" | "now" | "plan"].toLowerCase()}</small></li>)}</ol>
				<ul className="pm-points">{v.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				<p className="pm-price">{v.price} <a href="/kak-my-rabotaem#vedenie">{v.more}</a></p>
			</div>
		</section>
	);
}
