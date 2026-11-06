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
							<span className="hb br" aria-hidden="true">управленец агентов</span>
						</div>
						<p className="lead">{c.lead}</p>
						<p className="sub">{c.sub}</p>
						<div className="cta-row">
							<a className="btn p" href="#contact" data-goal="cta_start">{c.primary}</a>
						</div>
					</div>
					<div className="envrow">
						<div className="envstrip">
							<span className="ev"><span className="ev-g">Z</span><b>ZCode</b></span>
							<span className="ev"><img src="/images/ai/claude.svg" alt="Claude Code" width="20" height="20" loading="lazy" /><b>Claude Code</b></span>
							<span className="ev"><span className="ev-g">G</span><b>GLM</b></span>
							<span className="ev"><img src="/images/ai/obsidian.svg" alt="Obsidian" width="20" height="20" loading="lazy" /><b>Obsidian</b></span>
							<span className="ev"><img src="/images/ai/github.svg" alt="GitHub" width="20" height="20" loading="lazy" /><b>GitHub</b></span>
							<span className="ev"><img src="/images/ai/telegram.svg" alt="Telegram" width="20" height="20" loading="lazy" /><b>Telegram</b></span>
							<span className="ev txt"><b>субагенты</b></span>
							<span className="ev txt"><b>проекты</b></span>
							<span className="ev txt"><b>автозадачи</b></span>
							<span className="ev txt"><b>скиллы</b></span>
							<span className="ev txt"><b>промпты</b></span>
							<span className="ev txt"><b>память</b></span>
						</div>
						<p className="envrow-cap">Такую же среду я собираю для вашего бизнеса</p>
					</div>
			</div>
		</section>
	);
}
