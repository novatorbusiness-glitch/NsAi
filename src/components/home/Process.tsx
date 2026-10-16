import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 04 · как работаем (вопрос собственника «как это будет, не потеряю ли контроль?»): три шага по строке, подробности — на /kak-my-rabotaem; подбор шага.
export default function Process() {
	const c = home.process;
	return (
		<section id="how" className="alt how">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="psteps line">
					{c.steps.map((s) => (
						<div className="pstep" key={s.label}>
							<p className="pl">{s.label}</p>
							<h3>{s.title}</h3>
							<p className="px"><Rich t={s.text} /></p>
							<div className="pp"><b>{s.price}{"unit" in s && <small> {s.unit}</small>}</b><span>{s.note}</span></div>
						</div>
					))}
				</div>
				<p className="more-link"><a href="/kak-my-rabotaem">{c.more}</a></p>
				<p className="after">{c.after}</p>
			</div>
		</section>
	);
}
