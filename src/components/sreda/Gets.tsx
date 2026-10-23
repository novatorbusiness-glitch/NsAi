import SectionHead from "@/components/ui/SectionHead";
import { sreda } from "@content/pages/sreda";

// 03 · что получите: план 90 минут, PDF (страницы веером и что внутри) и что нужно от вас.
export default function Gets() {
	const c = sreda.gets;
	return (
		<section id="gets">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="gets">
					<div className="g-call">
						<p className="lbl">{c.callLabel}</p>
						<ol>{c.call.map((x) => <li key={x.t}><span>{x.m}</span>{x.t}</li>)}</ol>
						<div className="g-need">
							<p className="lbl">{c.needLabel}</p>
							<ul>{c.need.map((t) => <li key={t}>{t}</li>)}</ul>
						</div>
					</div>
					<div className="g-pdf">
						<div className="pdfan-p">{sreda.hero.pdf.alt.map((alt, k) => <img key={alt} src={`/images/site/sreda-pdf-${k + 1}.jpg`} alt={alt} width={560} height={792} loading="lazy" />)}</div>
						<p className="lbl">{c.pdfLabel}</p>
						<ol>{c.pdf.map((t, i) => <li key={t}><span>{i}</span>{t}</li>)}</ol>
						<p className="cap">{c.pdfNote}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
