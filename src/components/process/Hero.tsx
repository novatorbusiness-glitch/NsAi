import { process } from "@content/pages/kak-my-rabotaem";
import { common } from "@content/pages/common";
import EnvScheme from "@/components/home/EnvScheme";

// Первый экран «Как работаю в команде» (v9): работа в команде одним предложением, цена, две кнопки; справа схема AI-среды.
export default function Hero() {
	const c = process.hero;
	return (
		<section className="hero">
			<div className="wrap hero-grid">
				<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{c.crumb}</p>
					<h1 className="ph1">{c.h1}</h1>
					<p className="lead">{c.lead}</p>
					<div className="cta-row">
						<a className="btn p" href="#contact" data-goal="cta_start_vedenie">{c.primary}</a>
						<a className="btn s" href="#extra">{c.secondary}</a>
					</div>
				</div>
				<EnvScheme />
			</div>
		</section>
	);
}
