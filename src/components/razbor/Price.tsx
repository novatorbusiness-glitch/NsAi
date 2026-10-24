import { site } from "@/config/site";
import { razbor } from "@content/pages/razbor";
import SectionHead from "@/components/ui/SectionHead";

// 04 Цена и что дальше: тёмный блок, сумма, срок, что нужно от вас, кнопка; ниже развилка на два пути, как в кейсах.
export default function Price() {
	const c = razbor.price;
	return (
		<section id="price" className="dark">
			<div className="wrap rz-pgrid">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="rz-pcard">
					<p className="lbl">{c.name}</p>
					<p className="rz-pbig">{c.price}<small>{c.term}</small></p>
					<ul>{c.points.map((t) => <li key={t}>{t}</li>)}</ul>
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_audit">{c.button}</a>
				</div>
				<div className="rz-fork">
					<p className="lbl">{c.forkLabel}</p>
					<div className="kbridge">{c.fork.map((x) => <a key={x.t} href={x.href}><b>{x.t} →</b><span>{x.d}</span></a>)}</div>
				</div>
			</div>
		</section>
	);
}
