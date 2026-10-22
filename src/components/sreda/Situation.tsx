import SectionHead from "@/components/ui/SectionHead";
import { sreda } from "@content/pages/sreda";

// 01 Ситуация: две аудитории и схема «один чат → своя среда».
export default function Situation() {
	const s = sreda.situation;
	return (
		<section id="situation" className="alt">
			<div className="wrap">
				<SectionHead num={s.num} label={s.label} title={s.h2} lead={s.lead} />
				<div className="sr-paths">{s.paths.map((p) => (
					<div key={p.title} className="sr-path"><p className="sr-pt">{p.title}</p><ul>{p.items.map((x) => <li key={x.b}><b>{x.b}</b><span>{x.t}</span></li>)}</ul></div>
				))}</div>
				<div className="sr-scheme">
					<figure className="sr-now"><p className="sch-tag">{s.scheme.now.tag}</p><h3>{s.scheme.now.title}</h3><div className="sr-chat"><b>один чат</b>{s.scheme.now.chips.map((c) => <span key={c}>{c}</span>)}<em className="sr-lock">✕ {s.scheme.now.lock}</em></div><figcaption>{s.scheme.now.cap}</figcaption></figure>
					<span className="sr-arr" aria-hidden="true">→</span>
					<figure className="sr-after"><p className="sch-tag">{s.scheme.after.tag}</p><h3>{s.scheme.after.title}</h3><ol>{s.scheme.after.rows.map((r) => <li key={r.b}><b>{r.b}</b><span>{r.t}</span></li>)}</ol><figcaption>{s.scheme.after.cap}</figcaption></figure>
				</div>
			</div>
		</section>
	);
}
