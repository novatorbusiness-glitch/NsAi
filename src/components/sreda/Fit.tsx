import SectionHead from "@/components/ui/SectionHead";
import { sreda } from "@content/pages/sreda";

// 05 Кому подойдёт: подойдёт, не подойдёт, чего не делаем.
export default function Fit() {
	const f = sreda.fit;
	return (
		<section id="fit" className="alt">
			<div className="wrap">
				<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
				<div className="fitcards plain sr-fit">
					<div className="fc yes"><p className="fc-h"><span className="ic">✓</span>{f.yesTitle}</p><ul>{f.yes.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
					<div className="fc no"><p className="fc-h"><span className="ic">×</span>{f.noTitle}</p><ul>{f.no.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
					<div className="fc not"><p className="fc-h"><span className="ic">–</span>{f.notTitle}</p><ul>{f.not.map((t) => <li key={t}><span>{t}</span></li>)}</ul></div>
				</div>
			</div>
		</section>
	);
}
