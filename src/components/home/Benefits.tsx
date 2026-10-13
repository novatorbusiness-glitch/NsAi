import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · что вы получаете (вопрос собственника «что я получу?»), что можно поручить и что не входит.
export default function Benefits() {
	const c = home.benefits;
	return (
		<section id="scope" className="scope">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="rgrid">
					{c.cards.map((k, i) => <div className="rcard" key={k.title}><span className="ri">{String(i + 1).padStart(2, "0")}</span><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<div className="scope-row">
					<div className="wall"><p className="lbl">{c.canLabel}</p><div className="tags">{c.can.map((t) => <span key={t}>{t}</span>)}</div></div>
					<div className="notdo"><p className="lbl">{c.notLabel}</p><ul>{c.not.map((t) => <li key={t}>{t}</li>)}</ul></div>
				</div>
				<p className="note">{c.note}</p>
			</div>
		</section>
	);
}
