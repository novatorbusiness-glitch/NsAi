import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 08 · кому подойду (вопрос собственника «мне подойдёт?»): два списка.
export default function Fit() {
	const c = home.fit;
	return (
		<section id="fit" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="fitcards">
					<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{c.yesTitle}</p><ul>{c.yes.map((t) => <li key={t.b}><b>{t.b}</b><span>{t.t}</span></li>)}</ul></div>
					<div className="fc no"><p className="fc-h"><span className="ic">×</span>{c.noTitle}</p><ul>{c.no.map((t) => <li key={t.b}><b>{t.b}</b><span>{t.t}</span></li>)}</ul></div>
				</div>
				<p className="more-link"><a href="/nastavnichestvo">{c.mentor}</a></p>
			</div>
		</section>
	);
}
