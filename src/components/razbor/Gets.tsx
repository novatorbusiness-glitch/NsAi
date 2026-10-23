import Rich from "@/components/ui/Rich";
import { razbor } from "@content/pages/razbor";
import SectionHead from "@/components/ui/SectionHead";

// 03 Что остаётся у вас: шесть частей отчёта и выход на бесплатный разбор.
export default function Gets() {
	const c = razbor.gets;
	return (
		<section id="gets">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ul className="rz-gets">{c.items.map((x, i) => <li key={x.b}><span>{String(i + 1).padStart(2, "0")}</span><b>{x.b}</b><p>{x.t}</p></li>)}</ul>
				<p className="rz-hint"><Rich t={c.note} /></p>
			</div>
		</section>
	);
}
