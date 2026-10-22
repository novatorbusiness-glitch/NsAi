import { site } from "@/config/site";
import { common } from "@content/pages/common";
import SectionHead from "@/components/ui/SectionHead";
import Offer from "@/components/ui/Offer";
import ContactNote from "@/components/ui/ContactNote";
import { razbor } from "@content/pages/razbor";

// 04 Начать: цена, что входит, кнопки.
export default function Start() {
	const f = razbor.final;
	return (
		<section className="final" id="start">
			<div className="wrap">
				<div className="card">
					<SectionHead num={f.num} label={f.label} title={f.h2} lead={f.lead} />
					<Offer o={f.offer} step="test-drive" />
					<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{f.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
					<ContactNote />
				</div>
			</div>
		</section>
	);
}
