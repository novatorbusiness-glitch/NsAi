import type { Metadata } from "next";
import { site } from "@/config/site";
import { sreda } from "@content/pages/sreda";
import { common } from "@content/pages/common";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import JsonLd from "@/components/ui/JsonLd";
import { pageMeta, crumbs } from "@/lib/seo";

export const metadata: Metadata = pageMeta(sreda.meta, "/svoya-ai-sreda", "svoya-ai-sreda");

// Своя AI-среда (16.10): консультация как вход. Ситуация → что получите → как проходит → больше → кому → начать.
// Отдельный продукт, не смешиваем с аудитом, чертежом и ведением: в меню и на главной не стоит, ведём по ссылке.
export default function Page() {
	const { hero: h, situation: s, gets: g, how: w, more: m, fit: f, final: fin } = sreda;
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

			<section id="situation" className="alt">
				<div className="wrap">
					<SectionHead num={s.num} label={s.label} title={s.h2} lead={s.lead} />
					<div className="sr-paths">{s.paths.map((p) => (
						<div key={p.title} className="sr-path"><p className="sr-pt">{p.title}</p><ul>{p.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul></div>
					))}</div>
					<div className="sr-scheme">
						<figure className="sr-now"><p className="sch-tag">{s.scheme.now.tag}</p><h3>{s.scheme.now.title}</h3><div className="sr-chat"><b>один чат</b>{s.scheme.now.chips.map((c) => <span key={c}>{c}</span>)}<em className="sr-lock">✕ {s.scheme.now.lock}</em></div><figcaption>{s.scheme.now.cap}</figcaption></figure>
						<span className="sr-arr" aria-hidden="true">→</span>
						<figure className="sr-after"><p className="sch-tag">{s.scheme.after.tag}</p><h3>{s.scheme.after.title}</h3><ol>{s.scheme.after.rows.map((r) => <li key={r.b}><b>{r.b}</b><span>{r.t}</span></li>)}</ol><figcaption>{s.scheme.after.cap}</figcaption></figure>
					</div>
				</div>
			</section>

			<section id="gets">
				<div className="wrap">
					<SectionHead num={g.num} label={g.label} title={g.h2} lead={g.lead} />
					<div className="sr-gets">
						<ul className="sr-cards three">{g.items.map((x, i) => <li key={x.b}><em>{String(i + 1).padStart(2, "0")}</em><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
						<figure className="sr-pdf">
							<div className="sr-pages" aria-label={g.pdf.alt}>{["Обложка инструкции", "Страница «Первые 5 шагов»", "Страница «Паспорт проекта»"].map((alt, k) => <img key={alt} src={`/images/site/sreda-pdf-${k + 1}.jpg`} alt={alt} width={560} height={792} loading="lazy" />)}</div>
							<figcaption><p className="lbl">{g.pdf.label}</p><b>{g.pdf.title}</b><ol>{g.pdf.list.map((x) => <li key={x}>{x}</li>)}</ol></figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="how" className="alt svc v2">
				<div className="wrap">
					<SectionHead num={w.num} label={w.label} title={w.h2} lead={w.lead} />
					<ol className="sr-flow">{w.steps.map((t, i) => <li key={t.b} className={t.tag ? "end" : undefined}><span className="n">{i + 1}</span><b>{t.b}</b><p>{t.t}</p>{t.tag && <em>{t.tag}</em>}</li>)}</ol>
					<ul className="sr-terms">{w.terms.map((t) => <li key={t}>{t}</li>)}</ul>
				</div>
			</section>

			<section id="more">
				<div className="wrap">
					<SectionHead num={m.num} label={m.label} title={m.h2} lead={m.lead} />
					<ul className="pm-points">{m.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
				</div>
			</section>

			<section id="fit" className="alt">
				<div className="wrap">
					<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
					<div className="fitcards plain">
						<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{f.yesTitle}</p><ul>{f.yes.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
						<div className="fc no"><p className="fc-h"><span className="ic">×</span>{f.noTitle}</p><ul>{f.no.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
					</div>
				</div>
			</section>

			<section className="final">
				<div className="wrap">
					<div className="card">
						<SectionHead num={fin.num} label={fin.label} title={fin.h2} lead={fin.lead} />
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{fin.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
						<p className="sub">{fin.terms}</p>
						<ContactNote />
					</div>
				</div>
			</section>
			<JsonLd data={[crumbs([{ name: h.crumb, path: "/svoya-ai-sreda" }])]} />
		</>
	);
}
