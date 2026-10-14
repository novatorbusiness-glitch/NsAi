import { site } from "@/config/site";
import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 05 · начать: что даст аудит, одна кнопка.
export default function Contact() {
	const c = keisy.contact;
	return (
		<section className="final">
			<div className="wrap">
				<div className="card">
					<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
					<ul className="fsteps">{c.points.map((x) => <li key={x.b}><span>✓</span><div><b>{x.b}</b> {x.t}</div></li>)}</ul>
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{c.button}</a>
					<p className="under">{c.under}</p>
				</div>
			</div>
		</section>
	);
}
