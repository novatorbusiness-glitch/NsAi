import { site } from "@/config/site";
import { keisy } from "@content/pages/keisy";

// К.5 · заявка.
export default function Contact() {
	const c = keisy.contact;
	return (
		<section className="final">
			<div className="wrap">
				<div className="card">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{c.button}</a>
					<p className="under">{c.under}</p>
				</div>
			</div>
		</section>
	);
}
