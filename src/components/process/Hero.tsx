import { process } from "@content/pages/kak-my-rabotaem";
import { common } from "@content/pages/common";
import Rich from "@/components/ui/Rich";

// Первый экран «Как мы работаем» (вопрос собственника «не потеряю ли контроль и деньги?»): три шага маршрутом.
// Схема (16.10): шаги на одной линии, у каждого глагол (найти причину → спроектировать → внедрить), срок, цена и что остаётся на руках.
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
				<div className="route3">
					<p className="pmap-t">{c.map.title}</p>
					<ol>
						{c.map.steps.map((s, i) => (
							<li key={s.href} className={`r${i}`}><a href={s.href}>
								<span className="r3-dot">{String(i + 1).padStart(2, "0")}</span>
								<span className="r3-b">
									<span className="r3-v">{s.verb}</span>
									<b>{s.name}</b>
									<em>{s.meta}</em>
									<span className="r3-t"><Rich t={s.gets} /></span>
									<span className="r3-out">на руках: <strong>{s.out}</strong></span>
								</span>
							</a></li>
						))}
					</ol>
					<p className="pmap-note"><Rich t={c.map.note} /></p>
				</div>
			</div>
		</section>
	);
}
