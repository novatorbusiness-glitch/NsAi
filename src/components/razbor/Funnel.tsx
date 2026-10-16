import { razbor } from "@content/pages/razbor";

// Путь клиента полосами (пример разбора, 16.10): ширина полосы = доля от обращений, между полосами — где уходят люди.
export default function Funnel({ mini }: { mini?: boolean }) {
	const f = razbor.doc.funnel;
	const top = f.rows[0].n;
	return (
		<ol className={`rz-fun${mini ? " mini" : ""}`} aria-label={f.h}>
			{f.rows.map((r) => (
				<li key={r.b}>
					<div className="rz-row">
						<span className="rz-bar" style={{ width: `${Math.max(10, (r.n / top) * 100)}%` }}><b>{r.n}</b></span>
						<span className="rz-lbl"><b>{r.b}</b>{!mini && <small>{r.t}</small>}</span>
					</div>
					{"loss" in r && r.loss && <p className="rz-loss">{r.loss}</p>}
				</li>
			))}
		</ol>
	);
}
