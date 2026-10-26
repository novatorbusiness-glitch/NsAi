import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { goals } from "@/config/goals";
import SectionHead from "@/components/ui/SectionHead";

// Лёгкий шаг: экспресс-разбор в боте за 190 ₽ (решение Ильи 26.10). Справа объёмная сцена: телефон с ботом и PDF-разбор поверх.
export default function Express() {
	const c = home.express;
	const m = c.mock;
	return (
		<section id="express" className="alt">
			<div className="wrap xp-grid">
				<div>
					<SectionHead label={c.label} title={c.h2} lead={c.lead} />
					<ul className="xp-list">{c.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul>
					<div className="cta-row"><a className="btn p" href={site.contacts.expressBot} target="_blank" rel="noopener" data-goal={goals.express}>{c.button}</a></div>
					<p className="cap xp-note">{c.note}</p>
				</div>
				<div className="xp-scene" aria-hidden="true">
					<div className="xp-phone">
						<div className="xp-bar"><i></i><b>Экспресс-разбор</b><small>бот</small></div>
						{m.chat.map((x, i) => <p key={i} className={x.me ? "xp-msg me" : "xp-msg"}>{x.t}</p>)}
					</div>
					<div className="xp-pdf">
						<span className="xp-tag">{m.tag}</span>
						<p className="xp-brand">Илья Новицкий</p>
						<p className="xp-h">{m.pdfTitle}</p>
						<p className="xp-s">{m.pdfSub}</p>
						{m.blocks.map((b) => <div key={b.h} className={"main" in b ? "xp-b main" : "xp-b"}><b>{b.h}</b><span>{b.t}</span></div>)}
					</div>
				</div>
			</div>
		</section>
	);
}
