import { razbor } from "@content/pages/razbor";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import Funnel from "@/components/razbor/Funnel";

// Первый экран: аудит на одной странице, цена и срок, мини-воронка.
export default function Hero() {
	const h = razbor.hero;
	const d = razbor.doc;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{h.crumb}</p>
					<p className="snum">{h.kicker}</p>
					<h1>{h.h1}</h1>
					<p className="lead">{h.lead}</p>
					<p className="lead">{h.sub}</p>
					<div className="past-n three pm-facts">{h.facts.map((x) => <div key={x.text}><b>{x.num}</b><span>{x.text}</span></div>)}</div>
					<p className="pm-price pm-order">{h.price} <a href="#start">{h.order}</a></p>
					<div className="cta-row">
						<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{h.button}</a>
						<a className="more-link" href="/kak-my-rabotaem#test-drive">{h.more}</a>
					</div>
				</div>
				<a className="rz-hero" href="#doc" aria-label={d.funnel.h}><p className="lbl">{d.funnel.h}</p><Funnel mini /></a>
			</div>
		</section>
	);
}
