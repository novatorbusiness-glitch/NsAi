import { process } from "@content/pages/kak-my-rabotaem";
import { common } from "@content/pages/common";

// Первый экран «Как мы работаем»: крошки, обещание, оглавление шагов.
export default function Hero() {
	const c = process.hero;
	return (
		<section className="hero">
			<div className="wrap">
				<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{c.crumb}</p>
				<h1>{c.h1}</h1>
				<p className="lead">{c.lead}</p>
				<div className="svc-toc">{c.toc.map((t) => <a key={t.href} href={t.href}>{t.label}</a>)}</div>
			</div>
		</section>
	);
}
