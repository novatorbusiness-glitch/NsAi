import { site } from "@/config/site";
import { common } from "@content/pages/common";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import { sreda } from "@content/pages/sreda";

// 07 · записаться: кнопки Telegram и MAX, оплата до встречи.
export default function Start() {
	const c = sreda.final;
	return (
		<section id="contact" className="final">
			<div className="wrap">
				<div className="card final-card">
					<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
					<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_sreda">{c.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
					<p className="cap">{c.terms}</p>
					<ContactNote />
				</div>
			</div>
		</section>
	);
}
