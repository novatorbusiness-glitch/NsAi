import { process } from "@content/pages/kak-my-rabotaem";
import { common } from "@content/pages/common";
import Rich from "@/components/ui/Rich";

// Первый экран «Как мы работаем» (вопрос собственника «не потеряю ли контроль и деньги?»): три шага со сроком, ценой и тем, что остаётся на руках.
export default function Hero() {
	const c = process.hero;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{c.crumb}</p>
					<h1>{c.h1}</h1>
					<p className="lead">{c.lead}</p>
					<div className="cta-row">
						<a className="btn p" href="#test-drive" data-goal="cta_start">{c.button}</a>
					</div>
				</div>
				<div className="pmap">
					<p className="pmap-t">{c.map.title}</p>
					<ol>
						{c.map.steps.map((s, i) => (
							<li key={s.href}><a href={s.href}>
								<span className="pmap-n">{String(i + 1).padStart(2, "0")}</span>
								<span className="pmap-b"><b>{s.name}</b><em>{s.meta}</em><span><Rich t={s.gets} /></span></span>
							</a></li>
						))}
					</ol>
					<p className="pmap-note"><Rich t={c.map.note} /></p>
				</div>
			</div>
		</section>
	);
}
