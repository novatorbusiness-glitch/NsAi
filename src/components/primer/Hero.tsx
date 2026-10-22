import { site } from "@/config/site";
import { primer } from "@content/pages/primer";
import data from "@content/data/project-map.json";
import { common } from "@content/pages/common";
import { MapMini } from "@/components/primer/MapPreview";

// Первый экран: карта на одной странице, цифры карты, цена и срок.
export default function Hero() {
	const h = primer.hero;
	const m = primer.map;
	const links = data.nodes.reduce((a, n) => a + n.links.length, 0);
	const facts = [
		{ num: String(data.nodes.length), text: h.facts.nodes },
		{ num: String(data.layers.length), text: h.facts.layers },
		{ num: String(links), text: h.facts.links },
	];
	return (
		<section className="hero">
			<div className="wrap hero-grid pm-hero">
				<div>
				<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{h.crumb}</p>
				<p className="snum">{h.kicker}</p>
				<h1>{h.h1}</h1>
				<p className="lead">{h.lead}</p>
				<p className="lead">{h.sub}</p>
				<div className="past-n three pm-facts">{facts.map((x) => <div key={x.text}><b>{x.num}</b><span>{x.text}</span></div>)}</div>
				<p className="pm-price pm-order">{h.price} <a href="#start">{h.order}</a></p>
				<div className="cta-row">
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{h.button}</a>
					<a className="more-link" href="/kak-my-rabotaem#chertezh">{h.more}</a>
				</div>
				</div>
				<a className="pm-hero-map" href="#map" aria-label={m.h2}><MapMini /></a>
			</div>
		</section>
	);
}
