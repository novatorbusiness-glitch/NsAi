import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { common } from "@content/pages/common";
import SectionHead from "@/components/ui/SectionHead";

// 10 · начать (вопрос собственника «что сделать сейчас?»): три шага до старта, Telegram и MAX + пример начала переписки.
export default function Contact() {
	const c = home.contact;
	return (
		<section id="contact" className="final dark">
			<div className="wrap">
				<div className="card final-card">
					<div>
						<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
						<ol className="fsteps">{c.steps.map((x, i) => <li key={x.b}><span>{i + 1}</span><div><b>{x.b}</b> {x.t}</div></li>)}</ol>
						<div className="cta-row"><a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.telegram}</a><a className="btn s" href={site.contacts.max} target="_blank" rel="noopener">{common.buttons.max}</a></div>
						<p className="under"><Rich t={c.under} /></p>
					</div>
					<div className="tg" aria-hidden="true">
						<div className="tg-top"><span className="av">{c.chat.avatar}</span><div><b>{c.chat.name}</b><small>{c.chat.status}</small></div></div>
						<div className="tg-body">
							{c.chat.messages.map((m) => <div className={m.me ? "msg me" : "msg"} key={m.time}>{m.text}<i>{m.time}</i></div>)}
						</div>
						<div className="tg-cap">{c.chat.cap}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
