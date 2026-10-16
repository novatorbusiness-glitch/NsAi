import { keisy } from "@content/pages/keisy";

// Первый экран кейсов (вопрос собственника «докажи»): что уже работает и сколько принесло + схема «две линии бизнеса».
// Схема (16.10): продукт и продажи — две дорожки с этапами, сходятся в итог с линией роста. HTML, а не SVG: подписи читаются на телефоне.
export default function Hero() {
	const c = keisy.hero;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="snum">{c.kicker}</p>
					<h1>{c.h1}</h1>
					<p className="lead">{c.lead}</p>
					<div className="past">
						<p className="past-t">{c.past.title}</p>
						<div className="past-n three">{c.past.nums.map((n) => <div key={n.num}><b>{n.num}</b><span>{n.text}</span></div>)}</div>
						<p className="past-note">{c.past.note}</p>
					</div>
					<a className="btn p" href="/kak-my-rabotaem#test-drive" data-goal="cta_start">{c.button}</a>
				</div>
				<figure className="lanes" aria-label={c.viz.label}>
					<p className="lanes-t">{c.viz.title}</p>
					{c.viz.flows.map((f, k) => (
						<div className={`lane l${k}`} key={f.title}>
							<p className="lane-n">{f.title}</p>
							<ol>{f.steps.map((s) => <li key={s}><i></i><span>{s}</span></li>)}</ol>
							{k === 0 && <p className="lane-plus" aria-hidden="true"><b>+</b></p>}
						</div>
					))}
					<div className="lane-res">
						<div><p>{c.viz.moneyLabel}</p><b>{c.viz.money}</b></div>
						<svg viewBox="0 0 120 48" aria-hidden="true"><path d="M2 44 L26 38 L46 40 L66 28 L86 22 L104 10 L118 4" /><circle cx="118" cy="4" r="3.5" /></svg>
					</div>
					<figcaption>{c.viz.cap}</figcaption>
				</figure>
			</div>
		</section>
	);
}
