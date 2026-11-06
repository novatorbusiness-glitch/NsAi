import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 02 · сотрудник нового типа (06.11): моя метаморфоза «было → стало» как доказательство трансформации клиента.
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
								<p>{r.was}</p>
							</div>
							<span className="sarr" aria-hidden="true">→</span>
							<div className="scol">
								<span className="chip">стало</span>
								<p>{r.now}</p>
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
