import { sreda } from "@content/pages/sreda";
import SectionHead from "@/components/ui/SectionHead";

// 02 · среда ZCode и модели внутри неё (вторая карточка снимает страх блокировок: смена модели не ломает работу).
export default function Stacks() {
	const c = sreda.stacks;
	return (
		<section className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="stacks">
					{c.items.map((x) => (
						<div className={"calm" in x ? "stk calm" : "stk"} key={x.b}>
							<h3>{x.b}</h3>
							<p>{x.how}</p>
							<p className="stk-plus">{x.plus}</p>
							<p className="stk-set">{x.setup}</p>
							<p className="stk-fit">{x.fit}</p>
						</div>
					))}
				</div>
				<p className="team-own">{c.note}</p>
			</div>
		</section>
	);
}
