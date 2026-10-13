import StepPicker from "./StepPicker";
import { home } from "@content/pages/home";

// 4 · как мы работаем: три шага с ценами и подбор шага.
export default function Process() {
	const c = home.process;
	return (
		<section id="how" className="alt how">
			<div className="wrap split">
				<div className="head">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
				</div>
				<div>
					<div className="steps tl">
						{c.steps.map((s, i) => <div className="step" key={s.title}><div className="n">{i + 1}</div><div><h3>{s.title}</h3><div className="meta">{s.meta}</div><p>{s.text}</p></div></div>)}
					</div>
					<p className="more-link"><a className="more" href="/kak-my-rabotaem">{c.more}</a></p>
					<p className="after">{c.after}</p>

					<StepPicker />
				</div>
			</div>
		</section>
	);
}
