import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { sreda } from "@content/pages/sreda";

// Первый экран: что это, 60 минут · 10 000 ₽ · PDF, среда в четыре слоя.
export default function Hero() {
	const h = sreda.hero;
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
					<div className="cta-row">
						<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{h.button}</a>
						<a className="more-link" href="#how">{h.more}</a>
					</div>
				</div>
				<figure className="sr-stack" aria-label={h.stack.label}>
					<p className="lbl">{h.stack.label}</p>
					<ol>{h.stack.layers.map((l, i) => <li key={l.b} className={`l${i}`}><b>{l.b}</b><span>{l.t}</span><div className="sr-chips">{l.chips.map((c) => <i key={c} className={c.includes("бесплатно") ? "free" : ""}>{c}</i>)}</div></li>)}</ol>
					<figcaption>{h.stack.cap}</figcaption>
				</figure>
			</div>
		</section>
	);
}
