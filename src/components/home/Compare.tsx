import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 03 · сколько стоит (вопрос собственника «сколько это рядом с наймом и подрядчиками?»): директор в штат, студия и подрядчики, со мной.
export default function Compare() {
	const c = home.compare;
	return (
		<section id="compare" className="dark compare">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="ctable" role="table" aria-label={c.tableLabel}>
					<div className="ct-row ct-head" role="row"><span role="columnheader"></span>{c.cards.map((k) => <span role="columnheader" key={k.label} className={"me" in k ? "me" : undefined}>{k.label}</span>)}</div>
					<div className="ct-row" role="row"><span role="rowheader">{c.rows.money}</span>{c.cards.map((k) => <span role="cell" key={k.label} className={"me" in k ? "me" : undefined}><b>{k.title}</b>{"note" in k && <small>{k.note}</small>}</span>)}</div>
					<div className="ct-row" role="row"><span role="rowheader">{c.nervesLabel}</span>{c.cards.map((k) => <span role="cell" key={k.label} className={"me" in k ? "me" : undefined}>{k.nerves}</span>)}</div>
					<div className="ct-row ct-out" role="row"><span role="rowheader">{c.rows.out}</span>{c.cards.map((k) => <span role="cell" key={k.label} className={"me" in k ? "me" : undefined}>{k.punch}</span>)}</div>
				</div>
				<div className="grid g3 cmp">
					{c.cards.map((k) => <div className={"me" in k ? "card me" : "card"} key={k.label}><p className="lbl">{k.label}</p><h3>{k.title}</h3>{"note" in k && <p className="cnote">{k.note}</p>}<p className="nl">{c.nervesLabel}</p><p>{k.nerves}</p><p className="punch">{k.punch}</p></div>)}
				</div>
				<p className="cap"><Rich t={c.cap} /></p>
			</div>
		</section>
	);
}
