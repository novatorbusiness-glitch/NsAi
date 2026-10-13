import { Fragment } from "react";
import { mentor } from "@content/pages/nastavnichestvo";

// «На выходе»: четыре рисунка результата, навык, пример готового продукта.
export default function Result() {
	const c = mentor.result;
	const o = c.outs;
	const sc = c.showcase;
	return (
		<section id="result" className="alt">
			<div className="wrap">
				<div className="section-head"><h2>{c.h2}</h2><p className="lead">{c.lead}</p></div>
				<div className="outs">
					<div className="out">
						<div className="ov ov-ws"><div className="ws-h">{o.ws.head}</div><div className="chips">{o.ws.chips.map((t) => <span key={t}>{t}</span>)}</div><div className="ws-b"><i></i><i></i><i></i></div></div>
						<h3>{o.ws.title}</h3><p>{o.ws.text}</p>
					</div>
					<div className="out">
						<div className="ov ov-doc"><div className="doc-t">{o.doc.tabs.map((t, i) => (i === 0 ? <b key={t}>{t}</b> : <span key={t}>{t}</span>))}</div><i style={{ width: "86%" }}></i><i style={{ width: "64%" }}></i><i style={{ width: "78%" }}></i><i style={{ width: "52%" }}></i></div>
						<h3>{o.doc.title}</h3><p>{o.doc.text}</p>
					</div>
					<div className="out">
						<div className="ov ov-proto"><div className="mini-phone"><b></b><i></i><i></i><i className="s"></i><u></u></div></div>
						<h3>{o.proto.title}</h3><p>{o.proto.text}</p>
					</div>
					<div className="out">
						<div className="ov ov-live"><div className="br"><i></i><i></i><i></i><span>{o.live.url}</span></div><div className="live"><em>●</em>{" " + o.live.status}</div><div className="lv-r">{o.live.chips.map((t) => <span key={t}>{t}</span>)}</div></div>
						<h3>{o.live.title}</h3><p>{o.live.text}</p>
					</div>
				</div>
				<div className="skill"><div><em>{c.skill.tag}</em><b>{c.skill.title}</b><p>{c.skill.text}</p></div><p className="skill-n">{c.skill.note}</p></div>
				<div className="showcase">
					<div className="sc-head"><span className="sc-k">{sc.tag}</span><h3>{sc.title}</h3><p>{sc.text}</p></div>
					<div className="sc-grid">
						<div className="sc-phone" aria-hidden="true">
							<div className="sp-in">
								<div className="sp-top"><b>{sc.phone.studio}</b><span>{sc.phone.tab}</span></div>
								<div className="sp-days">{sc.phone.days.map((d) => <span key={d} className={d === sc.phone.today ? "on" : undefined}>{d}</span>)}</div>
								{sc.phone.slots.map((s) => <div key={s.time} className={"dim" in s ? "sp-slot dim" : "sp-slot"}><div><b>{s.time}</b><span>{s.name}</span></div><em>{s.places}</em></div>)}
								<div className="sp-btn">{sc.phone.button}</div>
								<div className="sp-note">{sc.phone.note}</div>
							</div>
						</div>
						<div className="sc-dash" aria-hidden="true">
							<div className="br"><i></i><i></i><i></i><span>{sc.dash.url}</span></div>
							<div className="sd-in">
								<div className="sd-kpi">{sc.dash.kpi.map((k) => <div key={k.label}><small>{k.label}</small><b>{k.value}</b></div>)}</div>
								<div className="sd-chart">{sc.dash.chart.map((h, i) => <i key={i} style={{ height: h }}></i>)}</div>
								<div className="sd-flow">{sc.dash.flow.map((f, i) => <Fragment key={f}>{i > 0 && <b>→</b>}<span>{f}</span></Fragment>)}</div>
							</div>
						</div>
					</div>
					<p className="sc-cap">{sc.cap}</p>
				</div>
			</div>
		</section>
	);
}
