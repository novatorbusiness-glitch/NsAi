import { Fragment } from "react";
import { site } from "@/config/site";
import { keisy } from "@content/pages/keisy";

// К.1 · первый экран кейсов: текст + схема «продукт и продажи вместе дают деньги».
export default function Hero() {
	const c = keisy.hero;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="kicker">{c.kicker}</p>
					<h1>{c.h1}</h1>
					<p className="lead">{c.lead}</p>
					<p className="sub">{c.sub}</p>
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{c.button}</a>
				</div>
				<div className="result-viz" aria-label={c.viz.label}>
					{c.viz.flows.map((f) => (
						<div className="flow" key={f.title}><p className="lbl">{f.title}</p><div className="fl">{f.steps.map((s, i) => <Fragment key={s}>{i > 0 && <span className="ar">→</span>}<span>{s}</span></Fragment>)}</div></div>
					))}
					<div className="rv-join" aria-hidden="true"><i></i></div>
					<div className="rv-money"><p className="lbl">{c.viz.moneyLabel}</p><b>{c.viz.money}</b></div>
					<div className="rv-proof">{c.viz.proof.map((p) => <span key={p}>{p}</span>)}</div>
					<p className="cap">{c.viz.cap}</p>
				</div>
			</div>
		</section>
	);
}
