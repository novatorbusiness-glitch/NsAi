import Rich from "@/components/ui/Rich";
import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 03 · сколько стоит (вопрос собственника «сколько это рядом со студией и наймом?»): срок и цена против студии и почасовки.
export default function Compare() {
	const c = home.compare;
	return (
		<section id="compare" className="dark compare">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="bars" role="img" aria-label={c.bars.label}>
					<p className="lbl">{c.bars.title}</p>
					{c.bars.rows.map((r) => <div className={"me" in r ? "bar-row me" : "bar-row"} key={r.name}><span className="bn">{r.name}</span><span className="bt"><i style={{ width: r.width }}></i></span><b>{r.value}</b></div>)}
					<p className="cap">{c.bars.cap}</p>
				</div>
				<div className="grid g3 cmp">
					{c.cards.map((k) => <div className={"me" in k ? "card me" : "card"} key={k.label}><p className="lbl">{k.label}</p><h3>{k.title}</h3><p>{k.text}</p><p className="punch">{k.punch}</p></div>)}
				</div>
				<p className="cap"><Rich t={c.cap} /></p>
			</div>
		</section>
	);
}
