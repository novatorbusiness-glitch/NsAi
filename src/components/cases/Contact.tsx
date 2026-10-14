import { site } from "@/config/site";
import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import { common } from "@content/pages/common";

// 05 · начать: что даст аудит, одна кнопка.
export default function Contact() {
	const c = keisy.contact;
	return (
		<section className="final">
			<div className="wrap">
				<div className="card">
					<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
					<ul className="fsteps">{c.points.map((x) => <li key={x.b}><span>✓</span><div><b>{x.b}</b> {x.t}</div></li>)}</ul>
					<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{c.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
					<p className="under">{c.under}</p>
					<ContactNote />
				</div>
			</div>
		</section>
	);
}
