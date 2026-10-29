import Rich from "@/components/ui/Rich";
import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 01 · путь за 10 лет: четыре этапа линией — от первых продаж до ИИ-среды.
export default function Path() {
	const c = keisy.path;
	return (
		<section id="path" className="dark">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="kpath">{c.steps.map((s) => <li key={s.y}><span className="ky">{s.y}</span><h3>{s.t}</h3><p><Rich t={s.d} /></p></li>)}</ol>
			</div>
		</section>
	);
}
