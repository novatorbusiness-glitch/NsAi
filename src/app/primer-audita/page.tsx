import type { Metadata } from "next";
import { site } from "@/config/site";
import { razbor } from "@content/pages/razbor";
import { common } from "@content/pages/common";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import JsonLd from "@/components/ui/JsonLd";
import Funnel from "@/components/razbor/Funnel";
import { pageMeta, crumbs } from "@/lib/seo";

export const metadata: Metadata = pageMeta(razbor.meta, "/primer-audita", "primer-audita");

// Пример аудита (16.10, переименован 22.10): первый экран с воронкой → аудит целиком документом → чем отличается от разбора по анкете → ваш бизнес → начать.
export default function Page() {
	const { hero: h, doc: d, vs: v, you: y, final: f } = razbor;
	return (
		<>
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
							<a className="more-link" href="/kak-my-rabotaem#test-drive">{h.more}</a>
						</div>
					</div>
					<a className="rz-hero" href="#doc" aria-label={d.funnel.h}><p className="lbl">{d.funnel.h}</p><Funnel mini /></a>
				</div>
			</section>

			<section id="doc" className="alt">
				<div className="wrap">
					<SectionHead num={d.num} label={d.label} title={d.h2} lead={d.lead} />
					<article className="rz-doc">
						<header className="rz-head">
							<p className="rz-q">{d.quote}</p>
							<dl>{d.meta.map((m) => <div key={m.b}><dt>{m.b}</dt><dd>{m.t}</dd></div>)}</dl>
						</header>

						<div className="rz-part"><h3><span>01</span>{d.short.h}</h3><div className="rz-short"><p>{d.short.t}</p><p>{d.short.t2}</p></div></div>

						<div className="rz-part"><h3><span>02</span>{d.funnel.h}</h3><Funnel /><p className="rz-note">{d.funnel.note}</p></div>

						<div className="rz-part"><h3><span>03</span>{d.money.h}</h3>
							<ol className="rz-money">{d.money.items.map((m, i) => (
								<li key={m.b}><div className="rz-mh"><b><em>{i + 1}</em>{m.b}</b><strong>{m.sum}<small> в месяц</small></strong></div><p>{m.t}</p><p className="rz-calc">{m.calc}</p></li>
							))}</ol>
							<div className="rz-total"><b>{d.money.total.b}</b><strong>{d.money.total.sum}</strong></div>
							<p className="rz-note">{d.money.honest}</p>
						</div>

						<div className="rz-part"><h3><span>04</span>{d.plan.h}</h3>
							<ol className="rz-plan">{d.plan.items.map((p, i) => <li key={p.b}><span>{i + 1}</span><div><b>{p.b}</b><em>{p.when}</em><p>{p.t}</p></div></li>)}</ol>
							<div className="fc no rz-not"><p className="fc-h"><span className="ic">×</span>{d.plan.notTitle}</p><ul>{d.plan.not.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
						</div>

						<div className="rz-part"><h3><span>05</span>{d.ai.h}</h3>
							<div className="fitcards plain">
								<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{d.ai.yesTitle}</p><ul>{d.ai.yes.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
								<div className="fc no"><p className="fc-h"><span className="ic">×</span>{d.ai.noTitle}</p><ul>{d.ai.no.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
							</div>
						</div>

						<div className="rz-part"><h3><span>06</span>{d.next.h}</h3>
							<div className="rz-next"><div><b>{d.next.self.b}</b><p>{d.next.self.t}</p></div><div className="me"><b>{d.next.withMe.b}</b><p>{d.next.withMe.t}</p></div></div>
							<p className="rz-keep">{d.next.keep}</p>
						</div>
						<p className="rz-sign">{d.sign}</p>
					</article>
				</div>
			</section>

			<section id="vs" className="alt">
				<div className="wrap">
					<SectionHead num={v.num} label={v.label} title={v.h2} lead={v.lead} />
					<div className="rz-vs">
						{[v.cheap, v.audit].map((c, i) => (
							<div key={c.title} className={i ? "au" : "ch"}><p className="rz-vs-t">{c.title}</p><dl>{c.rows.map((r) => <div key={r.k}><dt>{r.k}</dt><dd>{r.v}</dd></div>)}</dl></div>
						))}
					</div>
					<p className="rz-note">{v.note}</p>
				</div>
			</section>

			<section id="you">
				<div className="wrap">
					<SectionHead num={y.num} label={y.label} title={y.h2} lead={y.lead} />
					<ul className="pm-points">{y.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				</div>
			</section>

			<section className="final">
				<div className="wrap">
					<div className="card">
						<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{f.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
						<ContactNote />
					</div>
				</div>
			</section>
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/primer-audita" }])]} />
		</>
	);
}
