import DayfeedAnimation from "./DayfeedAnimation";
import Rich from "@/components/ui/Rich";
import { site } from "@/config/site";
import { home } from "@content/pages/home";
import { common } from "@content/pages/common";

// Первый экран: позиция, обещание, две кнопки, плашка первого шага; справа — консоль проекта (16.10): этапы на линии с меткой шага услуги, итог двумя цифрами.
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
							<a className="btn p" href="#how" data-goal="cta_start">{common.buttons.start}</a>
							<a className="btn s" href={site.contacts.telegram} target="_blank" rel="noopener">{c.secondary}</a>
						</div>
						<div className="past hero-plate">
							<p className="past-t">{c.promise}</p>
							<div className="past-n three">{c.facts.map((f) => <div key={f.text}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
						</div>
					</div>
					<div className="dayfeed pc" aria-label={f.label}>
						<div className="df-bar"><i></i><i></i><i></i><span>{f.bar}</span><b className="pc-count"><em className="pc-n">{f.rows.length}</em>/{f.rows.length} {f.ready}</b></div>
						<div className="pc-prog" aria-hidden="true"><i></i></div>
						<ol className="df-list pc-list">
							{f.rows.map((r) => (
								<li key={r.who} className="is-done">
									<span className="pc-node" aria-hidden="true"></span>
									<div className="pc-body">
										<p className="pc-head"><span className="df-who">{r.who}</span><span className={`pc-step s-${r.step}`}>{r.step}</span><span className="df-st">{f.done}</span></p>
										<p className="df-task"><Rich t={r.task} /></p>
									</div>
								</li>
							))}
						</ol>
						<div className="pc-result">
							<p className="pc-rl">{f.resultLabel}</p>
							<div className="pc-kpis">{f.kpis.map((k) => <div key={k.t}><b>{k.num}</b><span>{k.t}</span></div>)}</div>
						</div>
						<div className="df-foot"><a href="/kak-my-rabotaem">{f.more}</a></div>
					</div>
				</div>
			</section>
			<DayfeedAnimation />
		</>
	);
}
