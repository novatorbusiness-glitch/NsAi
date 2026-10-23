import { process, services } from "@content/pages/kak-my-rabotaem";
import { site } from "@/config/site";
import SectionHead from "@/components/ui/SectionHead";

// 04 · отдельные задачи подробно: полная версия всплывающих окон с главной. Якоря — id услуг.
export default function Services() {
	const c = process.extra;
	return (
		<section id="extra" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="svcs">
					{services.map((s) => (
						<article id={s.id} key={s.id} className="svc2">
							<div className="svc2-h">
								<h3>{s.title}</h3>
								<p className="x-price"><b>{s.price}</b><span>{s.term}</span></p>
							</div>
							<p className="svc2-for">{s.forWho}</p>
							<p className="lbl">{c.inc}</p>
							<ul>{s.inc.map((t) => <li key={t}>{t}</li>)}</ul>
							{s.note && <p className="x-note">{s.note}</p>}
							<div className="cta-row">
								<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start" data-variant={`svc-${s.id}`}>{c.cta}</a>
								{s.link.href && <a className="btn s" href={s.link.href}>{s.link.t}</a>}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
