import { home } from "@content/pages/home";

// Первый экран v10 (пилот 06.11): центрированная композиция — pill, заголовок с бейджами по бокам, лид, одна кнопка.
// Схема ИИ-среды перенесена в блок 01 «Моя ИИ-среда», полоса фактов убрана: цифры — в бейджах и блоке доказательств.
export default function Hero() {
	const c = home.hero;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
					<div>
						<div className="role"><span className="pill">{c.pill}</span></div>
						<p className="hpre">{c.pre}</p>
						<div className="hh">
							<span className="hb bl" aria-hidden="true">Отдел агентов</span>
							<h1>{c.h1} <span className="thin">{c.h1Thin}</span></h1>
							<span className="hb br" aria-hidden="true">под моим управлением</span>
						</div>
						<p className="lead">{c.lead}</p>
						<p className="sub">{c.sub}</p>
						<div className="cta-row">
							<a className="btn p" href="#contact" data-goal="cta_start">{c.primary}</a>
						</div>
					</div>
			</div>
		</section>
	);
}
