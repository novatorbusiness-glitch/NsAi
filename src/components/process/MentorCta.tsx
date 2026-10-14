import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";

// 05 · финал страницы: не знаете, с чего начать, — написать. Наставничество скрыто 14.10.
export default function MentorCta() {
	const c = process.final;
	return (
		<section className="final">
			<div className="wrap">
				<div className="card">
					<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
					<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{common.buttons.telegram}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
					<ContactNote />
				</div>
			</div>
		</section>
	);
}
