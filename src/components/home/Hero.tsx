import DayfeedAnimation from "./DayfeedAnimation";
import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { common } from "@content/pages/common";

// 1 · первый экран: обещание, лента «что сделано за два дня», полоса цифр.
export default function Hero() {
	const c = home.hero;
	const f = c.feed;
	return (
		<>
			<section className="hero">
				<div className="wrap hero-grid">
					<div>
						<div className="role">
							<p className="kicker">{c.kicker}</p>
							<span className="pill">{c.pill}</span>
						</div>
						<h1>{c.h1}</h1>
						<p className="lead">{c.lead}</p>
						<div className="cta-row">
							<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener">{common.buttons.start}</a>
							<a className="btn s" href="#how">{c.secondary}</a>
						</div>
						<p className="promise">{c.promise}</p>
						<p className="under">{c.under}</p>
					</div>
					<div className="dayfeed" aria-label={f.label}>
						<div className="df-bar"><i></i><i></i><i></i><span>{f.bar}</span><b className="df-live">{f.live}</b></div>
						<ul className="df-list">
							{f.rows.map((r) => <li key={r.who} className={"coord" in r ? "df-coord" : undefined}><span className="df-who">{r.who}</span><span className="df-task"><Rich t={r.task} /></span><span className="df-st"></span><i className="df-prog"></i></li>)}
						</ul>
						<div className="df-foot"><span>{f.foot}</span><a href="/keisy#system">{f.more}</a></div>
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
