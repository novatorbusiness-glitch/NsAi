import { site } from "@/config/site";
import SectionHead from "@/components/ui/SectionHead";
import Offer from "@/components/ui/Offer";
import ContactNote from "@/components/ui/ContactNote";
import { primer } from "@content/pages/primer";

// 07 Начать: цена, что входит, кнопки.
export default function Start() {
	const f = primer.final;
	return (
		<section className="final" id="start">
			<div className="wrap">
				<div className="card">
					<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
					<Offer o={f.offer} step="chertezh" />
					<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_blueprint">{f.button}</a><a className="btn s" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_vedenie">{f.button2}</a></div>
					<ContactNote />
				</div>
			</div>
		</section>
	);
}
