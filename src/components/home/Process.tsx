import StepPicker from "./StepPicker";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import Fable from "@/components/ui/Fable";

// 04 · как работаем (вопрос собственника «как это будет, не потеряю ли контроль?»): три шага по строке, подробности — на /kak-my-rabotaem; подбор шага.
export default function Process() {
	const c = home.process;
	return (
		<section id="how" className="alt how">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="psteps">
					{c.steps.map((s, i) => (
						<div className="pstep" key={s.title}>
							<span className="pn">{i + 1}</span>
							<div><h3>{s.title}</h3><p className="pm">{s.meta}</p><p>{s.text}</p></div>
						</div>
					))}
				</div>
				<p className="more-link"><a href="/kak-my-rabotaem">{c.more}</a></p>
				<p className="after">{c.after}</p>
				<Fable q={c.fable.q} src={c.fable.src} />
				<StepPicker />
			</div>
		</section>
	);
}
