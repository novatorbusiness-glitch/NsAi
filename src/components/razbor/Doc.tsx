import { razbor } from "@content/pages/razbor";
import SectionHead from "@/components/ui/SectionHead";
import Funnel from "@/components/razbor/Funnel";

// 02 Пример аудита целиком: документ отчёта на придуманной сети студий.
export default function Doc() {
	const d = razbor.doc;
	return (
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
	
					<p className="rz-sign">{d.sign}</p>
				</article>
			</div>
		</section>
	);
}
