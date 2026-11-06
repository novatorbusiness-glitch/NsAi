import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · моя метаморфоза (06.11): «было → стало» без обесценивания людей. Вёрстка по паспорту: всё по центру,
// светлая панель с парами «было / стрелка / стало», вывод в панели, рамка роли строкой под блоком.
export default function Metamorph() {
	const s = home.story;
	return (
		<section id="story" className="metamorph">
			<div className="wrap">
				<SectionHead num={s.num} label={s.label} title={s.h2} lead={s.lead} />
				<div className="lcard story">
					<span className="lbadge">моя метаморфоза</span>
					{s.rows.map((r) => (
						<div key={r.was} className="srow">
							<div className="scol">
								<span className="chip dim">было</span>
								<p className="swas">{r.was}</p>
							</div>
							<span className="sarr" aria-hidden="true">→</span>
							<div className="scol">
								<span className="chip">стало</span>
								<p className="snow">{r.now}</p>
							</div>
						</div>
					))}
					<p className="loutro">{s.outro}</p>
				</div>
				<p className="sframe">{s.frame}</p>
			</div>
		</section>
	);
}
