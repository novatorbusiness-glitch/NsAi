import DayfeedAnimation from "./DayfeedAnimation";
import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { common } from "@content/pages/common";

// Первый экран: позиция, обещание, две кнопки, плашка тест-драйва; справа — лента «от задачи до продаж» (пример пути).
export default function Hero() {
	const c = home.hero;
	const f = c.feed;
	return (
		<>
			<section className="hero">
				<div className="wrap hero-grid">
					<div>
						<div className="role">
							<span className="pill">{c.pill}</span>
						</div>
						<h1>{c.h1}</h1>
						<p className="lead">{c.lead}</p>
						<p className="hsub">{c.sub}</p>
						<div className="cta-row">
							<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">{common.buttons.start}</a>
							<a className="btn s" href="/kak-my-rabotaem#test-drive">{c.secondary}</a>
						</div>
						<div className="past hero-plate">
							<p className="past-t">{c.promise}</p>
							<div className="past-n three">{c.facts.map((f) => <div key={f.text}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
						</div>
					</div>
					<div className="dayfeed" aria-label={f.label}>
						<div className="df-bar"><i></i><i></i><i></i><span>{f.bar}</span><b className="df-live">{f.live}</b></div>
						<ul className="df-list">
							{f.rows.map((r) => <li key={r.who} className={"result" in r ? "df-result" : undefined}><span className="df-who">{r.who}</span><span className="df-task"><Rich t={r.task} /></span><span className="df-st"></span><i className="df-prog"></i></li>)}
						</ul>
						<div className="df-foot"><span>{f.foot}</span><a href="/kak-my-rabotaem">{f.more}</a></div>
					</div>
				</div>
				<div className="wrap">
					<div className="strip s3">
						{c.strip.map((s) => <div key={s.num}><span className="num">{s.num}</span><small>{s.text}</small></div>)}
					</div>
				</div>
			</section>
			<DayfeedAnimation />
		</>
	);
}
