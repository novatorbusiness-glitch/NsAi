import { site } from "@/config/site";
import { primer } from "@content/pages/primer";
import SectionHead from "@/components/ui/SectionHead";

// 06 Цена и что дальше: тёмный блок с ценой и развилкой на два пути, как на примере аудита.
export default function Price() {
	const c = primer.price;
	return (
		<section id="price" className="dark">
			<div className="wrap rz-pgrid">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="rz-pcard">
					<p className="lbl">{c.name}</p>
					<p className="rz-pbig">{c.price}<small>{c.term}</small></p>
					<ul>{c.points.map((t) => <li key={t}>{t}</li>)}</ul>
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_blueprint">{c.button}</a>
				</div>
				<div className="rz-fork">
					<p className="lbl">{c.forkLabel}</p>
					<div className="kbridge">{c.fork.map((x) => <a key={x.t} href={x.href}><b>{x.t} →</b><span>{x.d}</span></a>)}</div>
					<p className="rz-dev">{c.dev}</p>
				</div>
			</div>
		</section>
	);
}
