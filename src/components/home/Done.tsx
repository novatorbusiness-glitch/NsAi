import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 06 · что уже сделано (вопрос собственника «кто уже так сделал?»): три направления с лучшей подтверждённой цифрой + опыт агентства и отзывы.
export default function Done() {
	const c = home.done;
	return (
		<section id="done" className="alt done">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="prow2s">
					{c.pillars.map((k, i) => (
						<div className="prow2" key={k.label}>
							<div className="pr-l"><span className="pr-n">{String(i + 1).padStart(2, "0")} · {k.label}</span><h3>{k.title}</h3></div>
							<div className="pr-r"><p className="pr-big"><b>{k.big}</b> {k.bl}</p><p>{k.text}</p></div>
						</div>
					))}
				</div>
				<p className="cap">{c.note}</p>
				<div className="agency">
					<h3 className="ag-t">{c.agency.title}</h3>
					<div className="xp" role="img" aria-label={`${c.agency.mine.label}: ${c.agency.mine.marks.map((m) => m.t).join(", ")}. ${c.agency.yours.label}: ${c.agency.yours.from} → ${c.agency.yours.to}`}>
						<div className="xp-row">
							<p className="xp-l">{c.agency.mine.label}</p>
							<svg className="xp-wave" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2,20 C40,2 60,38 100,20 S160,2 200,22 S250,40 290,14 S350,0 390,26 S450,40 490,16 S560,4 598,20" /></svg>
							<div className="xp-marks">{c.agency.mine.marks.map((m) => <span key={m.t} className={"err" in m ? "err" : undefined}>{m.t}</span>)}</div>
						</div>
						<div className="xp-row you">
							<p className="xp-l">{c.agency.yours.label}</p>
							<svg className="xp-line" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true"><path d="M2,20 H586" /><path d="M576,12 L590,20 L576,28" /></svg>
							<div className="xp-marks"><span>{c.agency.yours.from}</span><span className="goal">{c.agency.yours.to}</span></div>
						</div>
					</div>
				</div>
				<div className="quotes2">
					<p className="lbl">{c.agency.quotesLabel}</p>
					<div>{c.agency.quotes.map((q) => <figure key={q.who}><blockquote>«{q.text}»</blockquote><figcaption>{q.who}</figcaption></figure>)}</div>
				</div>
				<p className="done-all"><a className="btn s" href="/keisy">{c.all}</a></p>
			</div>
		</section>
	);
}
