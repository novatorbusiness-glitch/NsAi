import { site } from "@/config/site";
import { common } from "@content/pages/common";
import SectionHead from "@/components/ui/SectionHead";
import ContactNote from "@/components/ui/ContactNote";
import { sreda } from "@content/pages/sreda";

// 06 Начать: пример переписки и кнопки.
export default function Start() {
	const s = sreda.situation;
	const fin = sreda.final;
	return (
		<section className="final">
			<div className="wrap">
				<div className="card sr-final">
					<div className="sr-fh"><SectionHead num={fin.num} label={fin.label} title={fin.h2} lead={fin.lead} /></div>
					<figure className="sr-tg" aria-label="Пример переписки"><p className="lbl">{fin.chat.label}</p>{fin.chat.msgs.map((x) => <p key={x.t} className={x.me ? "me" : "you"}>{x.t}</p>)}</figure>
					<div className="sr-fa"><div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_sreda">{fin.button}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
					<p className="sub">{fin.terms}</p>
					<ContactNote /></div>
				</div>
			</div>
		</section>
	);
}
