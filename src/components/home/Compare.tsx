import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";

// 3а · сколько времени и денег до результата: сравнение со студией и почасовкой.
export default function Compare() {
	const c = home.compare;
	return (
		<section id="compare" className="dark compare">
			<div className="wrap">
				<div className="section-head">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
				</div>
				<div className="bars" role="img" aria-label={c.bars.label}>
					<p className="lbl">{c.bars.title}</p>
					{c.bars.rows.map((r) => <div className={"me" in r ? "bar-row me" : "bar-row"} key={r.name}><span className="bn">{r.name}</span><span className="bt"><i style={{ width: r.width }}></i></span><b>{r.value}</b></div>)}
					<p className="cap">{c.bars.cap}</p>
				</div>
				<div className="grid g3 cmp">
					{c.cards.map((k) => <div className={"me" in k ? "card me" : "card"} key={k.label}><p className="lbl">{k.label}</p><h3>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<p className="cap"><Rich t={c.cap} /></p>
			</div>
		</section>
	);
}
