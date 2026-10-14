import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";

type Step = (typeof process.steps)[number];

// Один шаг работы: кому подойдёт, что получите, как проходит, что нужно, что даёт, чего не будет, цена.
export default function ServiceStep({ s, n }: { s: Step; n: number }) {
	if (s.gets && s.how) return (
		<section id={s.id} className={s.alt ? "alt svc v2" : "svc v2"}>
			<div className="wrap">
				<SectionHead num={s.num} label={s.label} title={s.h2!} lead={s.lead} />
				<p className="svc-meta">{s.meta}</p>
				<div className="svc-two">
					<div className="svc-gets"><p className="lbl">{s.gets.label}</p><ul className="ticks">{s.gets.items.map((t) => <li key={t}>{t}</li>)}</ul></div>
					<div className="svc-how">
						<p className="lbl">{s.how.label}</p>
						<ol>{s.how.steps.map((t, i) => <li key={t.b}><span>{i + 1}</span><div><b>{t.b}</b> {t.t}</div></li>)}</ol>
						{s.how.note && <p className="sub">{s.how.note}</p>}
						<p className="svc-need"><b>От вас:</b> {s.need}</p>
					</div>
				</div>
				<div className="fitcards plain svc-fit">
					<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{s.fitTitle}</p><ul>{s.fit!.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
					<div className="fc no"><p className="fc-h"><span className="ic">×</span>{s.notTitle}</p><ul>{s.not!.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
				</div>
				<div className="svc-price"><p><Rich t={s.price} /></p><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{s.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
			</div>
		</section>
	);
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
