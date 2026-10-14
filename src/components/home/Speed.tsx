import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import Fable from "@/components/ui/Fable";

// 05 · почему быстро (вопрос собственника «не халтура?»): опыт + AI = результат; где AI, а где голова — в схеме.
export default function Speed() {
	const c = home.speed;
	return (
		<section id="system" className="system">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<p className="sstat sbig"><b>{c.stat.num}</b><span>{c.stat.t}</span></p>
				<div className="sflow">
					{c.flow.map((f, i) => (
						<div className={"me" in f ? "sbox me" : "sbox"} key={f.label}>
							{i > 0 && <span className="sop" aria-hidden="true">{i === 1 ? "+" : "="}</span>}
							<p className="sl">{f.label}</p>
							<h3>{f.title}</h3>
							<ul>{f.items.map((t) => <li key={t}>{t}</li>)}</ul>
						</div>
					))}
				</div>
				<Fable q={c.fable.q} src={c.fable.src} />
				<p className="closing">{c.closing}</p>
				<p className="more-link"><a href="/keisy#system">{c.more}</a></p>
				<p className="ssrc">{c.source}</p>
			</div>
		</section>
	);
}
