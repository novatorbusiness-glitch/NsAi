import SectionHead from "@/components/ui/SectionHead";
import { razbor } from "@content/pages/razbor";

// 02 Чем отличается от разбора по анкете.
export default function Vs() {
	const v = razbor.vs;
	return (
		<section id="vs" className="alt">
			<div className="wrap">
				<SectionHead num={v.num} label={v.label} title={v.h2} lead={v.lead} />
				<div className="rz-vs">
					{[v.cheap, v.audit].map((c, i) => (
						<div key={c.title} className={i ? "au" : "ch"}><p className="rz-vs-t">{c.title}</p><dl>{c.rows.map((r) => <div key={r.k}><dt>{r.k}</dt><dd>{r.v}</dd></div>)}</dl></div>
					))}
				</div>
				<p className="rz-note">{v.note}</p>
			</div>
		</section>
	);
}
