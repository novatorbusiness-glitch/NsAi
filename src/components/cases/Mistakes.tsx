import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 02 · где ломается: типичные причины, почему системы не приносят денег, без виноватых; корень — нет одного человека, который ведёт до конца.
export default function Mistakes() {
	const c = keisy.mistakes;
	return (
		<section id="mistakes">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="mlist">
					{c.items.map((m, i) => <li key={m.b}><span className="mn">{String(i + 1).padStart(2, "0")}</span><div><h3>{m.b}</h3><p>{m.t}</p></div></li>)}
					<li className="mroot">{c.root}</li>
				</ol>
			</div>
		</section>
	);
}
