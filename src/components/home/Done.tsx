import { allCases } from "@/lib/cases";
import { home } from "@content/pages/home";

// 6 · что я уже сделал: кейсы с полем home в content/cases/*.md + системы продаж агентства.
export default function Done() {
	const c = home.done;
	return (
		<section id="done" className="done">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2></div>
				<div className="grid g3 wins">
					{allCases().filter((k) => k.home).map((k) => (
						<div className="card win" key={k.slug}><div className="big">{k.home!.big}</div><div className="bl">{k.home!.label}</div>{k.logo && <img className="wlogo" src={k.logo} alt={k.title.split(":")[0]} width={380} height={100} />}<h3>{k.title}</h3><p>{k.home!.text}</p></div>
					))}
				</div>
				<div className="agency">
					<div className="ag-text"><h3>{c.agency.title}</h3><p>{c.agency.text}</p></div>
					<div className="ag-num">{c.agency.nums.map((n) => <div key={n.num}><b>{n.num}</b><span>{n.text}</span></div>)}</div>
				</div>
				<p style={{ marginTop: "22px" }}><a className="btn s" href="/keisy">{c.all}</a></p>
			</div>
		</section>
	);
}
