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
					<div className="past">
						<p className="past-t">{c.past.title}</p>
						<div className="past-n">{c.past.nums.map((n) => <div key={n.num}><b>{n.num}</b><span>{n.text}</span></div>)}</div>
						<p className="past-note">{c.past.note}</p>
					</div>
					<a className="btn p" href="/#how" data-goal="cta_start">{c.button}</a>
				</div>
				<div className="result-viz" aria-label={c.viz.label}>
					{c.viz.flows.map((f) => (
						<div className="flow" key={f.title}><p className="lbl">{f.title}</p><div className="fl">{f.steps.map((s, i) => <Fragment key={s}>{i > 0 && <span className="ar">→</span>}<span>{s}</span></Fragment>)}</div></div>
					))}
					<div className="rv-join" aria-hidden="true"><i></i></div>
					<div className="rv-money"><p className="lbl">{c.viz.moneyLabel}</p><b>{c.viz.money}</b></div>
					<p className="cap">{c.viz.cap}</p>
				</div>
			</div>
		</section>
	);
}
