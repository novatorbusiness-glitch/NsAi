import SectionHead from "@/components/ui/SectionHead";
import { sreda } from "@content/pages/sreda";

// 02 Что получите: час разговора и инструкция PDF, страницы веером.
export default function Gets() {
	const g = sreda.gets;
	return (
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
	);
}
