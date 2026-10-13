import { Fragment } from "react";
import ProgramToggle from "./ProgramToggle";
import { mentor } from "@content/pages/nastavnichestvo";

const plural = (n: number, [one, few, many]: string[]) => {
	const a = n % 100, b = n % 10;
	return `${n} ${a > 10 && a < 20 ? many : b === 1 ? one : b >= 2 && b <= 4 ? few : many}`;
};

// Н.3 · как проходит: 8 шагов по группам, у каждого раскрывающийся список подшагов. Счётчики считаются сами.
export default function Program() {
	const c = mentor.program;
	const steps = c.groups.flatMap((g) => g.steps);
	const subs = steps.reduce((s, x) => s + x.subs.length, 0);
	return (
		<section id="path">
			<div className="wrap split">
				<div className="head">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
					<ProgramToggle open={c.openAll} close={c.closeAll} />
					<p className="under">{`${plural(steps.length, c.stepWords)} · ${plural(subs, c.subWords)} · ${c.underTail}`}</p>
				</div>
				<div>
					{c.groups.map((g) => (
						<Fragment key={g.title}>
							<p className="group">{g.title}</p>
							<div className="steps tl plain">
								{g.steps.map((s) => (
									<div className="step" key={s.n}><div className="n">{s.n}</div><div><h3>{s.title}</h3><div className="meta">{s.meta}</div><p>{s.text}</p>
										<details className="sub"><summary>{`${c.inside} · ${plural(s.subs.length, c.subWords)}`}</summary><ol>
											{s.subs.map((d) => <li key={d.n}><span className="sn">{d.n}</span><div><b>{d.title}</b><span className="sg">{d.goal}</span><span className="sr"><em>{c.outLabel}</em>{d.out}</span></div>{"when" in d && <i className="sp">{d.when}</i>}</li>)}
										</ol></details>
									</div></div>
								))}
							</div>
						</Fragment>
					))}
					<p className="sub" style={{ marginTop: "24px" }}>{c.why}</p>
				</div>
			</div>
		</section>
	);
}
