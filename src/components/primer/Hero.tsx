import { primer } from "@content/pages/primer";
import { common } from "@content/pages/common";
import { MapMini } from "@/components/primer/MapPreview";

// Первый экран: что такое чертёж, две цифры, одна кнопка к примеру; справа кусок карты своего AI-сервиса с плашкой «Пример».
export default function Hero() {
	const h = primer.hero;
	const c = h.card;
	return (
		<section className="hero">
			<div className="wrap hero-grid pm-hero">
				<div>
					<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{h.crumb}</p>
					<div className="role"><span className="pill">{h.pill}</span></div>
					<h1 className="ph1">{h.h1}</h1>
					<p className="lead">{h.lead}</p>
					<div className="facts rz-facts">{h.facts.map((x) => <div key={x.text}><b>{x.num}</b><span>{x.text}</span></div>)}</div>
					<div className="cta-row"><a className="btn s" href="#parts">{h.button} ↓</a></div>
				</div>
				<a className="rz-card pm-hcard" href="#map" aria-label={c.label}>
					<span className="rz-tag">{c.tag}</span>
					<p className="lbl">{c.label}</p>
					<MapMini />
					<p className="rz-cnote">{c.note}</p>
				</a>
			</div>
		</section>
	);
}
