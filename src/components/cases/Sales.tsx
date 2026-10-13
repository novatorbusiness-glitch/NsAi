import { keisy } from "@content/pages/keisy";

// К.4 · системы продаж для клиентов: кейсы агентства (опыт до 2025 года) с цифрами.
export default function Sales() {
	const c = keisy.sales;
	return (
		<section id="sales" className="dark">
			<div className="wrap">
				<div className="section-head" style={{ maxWidth: "820px" }}>
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
					<p className="nda">{c.nda}</p>
				</div>
				<div className="grid g2">
					{c.cards.map((k) => <div className="card" key={k.num}><span className="num" style={{ fontSize: "34px" }}>{k.num}</span><h3 style={{ marginTop: "12px" }}>{k.title}</h3><p>{k.text}</p></div>)}
				</div>
				<p className="closing">{c.closing}</p>
			</div>
		</section>
	);
}
