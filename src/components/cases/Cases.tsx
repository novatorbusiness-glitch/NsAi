import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 02 · кейсы агентства по направлениям: маркетинг, продажи, автоматизация. Карточка — цифра и итог, подробности раскрываются.
export default function Cases() {
	const c = keisy.cases;
	const l = c.labels;
	return (
		<section id="cases" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="kgroups">
					{c.groups.map((g) => (
						<div className="kgroup" key={g.b}>
							<p className="kg-h">{g.b}</p>
							<div className="kcards">
								{g.cards.map((k) => (
									<article className="kc" key={k.area}>
										<p className="kc-a">{k.area}</p>
										<h3>{k.title}</h3>
										<p className="kc-n"><b>{k.num}</b><span>{k.outcome}</span></p>
										<details>
											<summary>{c.more}</summary>
											<dl>
												<dt>{l.task}</dt><dd>{k.task}</dd>
												<dt>{l.decision}</dt><dd>{k.decision}</dd>
												<dt>{l.role}</dt><dd>{k.role}</dd>
											</dl>
										</details>
									</article>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
