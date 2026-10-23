import { process } from "@content/pages/kak-my-rabotaem";
import SectionHead from "@/components/ui/SectionHead";

// 02 · как проходит работа: три шага ритма (первые две недели, неделя, месяц).
export default function Rhythm() {
	const c = process.rhythm;
	return (
		<section className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<ol className="rsteps">{c.steps.map((s, i) => <li key={s.title}><span>{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>
			</div>
		</section>
	);
}
