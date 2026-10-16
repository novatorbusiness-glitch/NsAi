import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import MapPreview from "@/components/primer/MapPreview";

type Step = (typeof process.steps)[number];

// Один шаг работы (вид 14.10): метка, заголовок, на руках и как проходит, подойдёт / не будет, цена.
export default function ServiceStep({ s, n }: { s: Step; n: number }) {
	return (
		<section id={s.id} className={s.alt ? "alt svc v2" : "svc v2"}>
			<div className="wrap">
				<SectionHead num={s.num} label={s.label} title={s.h2} lead={s.lead} />
				<p className="svc-meta">{s.meta}</p>
				<div className="svc-two">
					<div className="svc-gets"><p className="lbl">{s.gets.label}</p><ul className="ticks">{s.gets.items.map((t) => <li key={t}>{t}</li>)}</ul>{s.gets.example && <p className="more-link"><Rich t={s.gets.example} /></p>}</div>
					<div className="svc-how">
						<p className="lbl">{s.how.label}</p>
						<ol>{s.how.steps.map((t, i) => <li key={t.b}><span>{i + 1}</span><div><b>{t.b}</b> {t.t}</div></li>)}</ol>
						{s.how.note && <p className="sub">{s.how.note}</p>}
						<p className="svc-need"><b>От вас:</b> {s.need}</p>
					</div>
				</div>
				{s.id === "chertezh" && <MapPreview at="process" />}
				{s.id === "vedenie" && (
					<div className="vweek">
						<p className="lbl">{process.week.label}</p>
						<ol>{process.week.days.map((x) => <li key={x.b}><span>{x.d}</span><b>{x.b}</b><p>{x.t}</p></li>)}</ol>
					</div>
				)}
				<div className="fitcards plain svc-fit">
					<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{s.fitTitle}</p><ul>{s.fit.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
					<div className="fc no"><p className="fc-h"><span className="ic">×</span>{s.notTitle}</p><ul>{s.not.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
				</div>
				<div className="svc-price"><p><Rich t={s.price} /></p><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{s.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a><ContactNote /></div>
			</div>
		</section>
	);
}
