import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { process } from "@content/pages/kak-my-rabotaem";

type Step = (typeof process.steps)[number];

// Один шаг работы: кому подойдёт, что получите, как проходит, что нужно, что даёт, чего не будет, цена.
export default function ServiceStep({ s, n }: { s: Step; n: number }) {
	return (
		<section id={s.id} className={s.alt ? "alt svc" : "svc"}>
			<div className="wrap">
				<div className="svc-head"><span className="svc-n">{n}</span><div><h2>{s.title}</h2><p className="meta">{s.meta}</p></div></div>
				<p className="lead">{s.lead}</p>
				<div className="svc-grid">
					{s.cards.map((c) => (
						<div className={c.gives ? "card gives" : "card"} key={c.label}>
							<p className="lbl">{c.label}</p>
							{c.text && <p>{c.text}</p>}
							{c.ticks && <ul className="ticks">{c.ticks.map((t) => <li key={t}>{t}</li>)}</ul>}
							{c.steps && <ul className="steps-l">{c.steps.map((t) => <li key={t.b}><b>{t.b}</b>{" " + t.t}</li>)}</ul>}
							{c.note && <p className="sub">{c.note}</p>}
							{c.crosses && <ul className="crosses">{c.crosses.map((t) => <li key={t}>{t}</li>)}</ul>}
						</div>
					))}
				</div>
				<div className="svc-price"><p><Rich t={s.price} /></p><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.telegram}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
			</div>
		</section>
	);
}
