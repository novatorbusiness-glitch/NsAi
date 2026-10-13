import { home } from "@content/pages/home";

// 5 · почему быстро и без потери качества: прототип OkiDelo.
export default function Speed() {
	const c = home.speed;
	return (
		<section id="system" className="system">
			<div className="wrap">
				<div className="section-head">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
					<p className="sub" style={{ marginTop: "14px" }}>{c.sub}</p>
				</div>
				<div className="duo" aria-label={c.label}>
					<div className="shot-clean"><img src={c.shot.src} alt={c.shot.alt} width={1400} height={839} loading="lazy" /></div>
					<div className="phone"><img src={c.phone.src} alt={c.phone.alt} width={800} height={1159} loading="lazy" /></div>
				</div>
				<p className="cap">{c.cap}</p>
				<a className="more" href="/keisy#system">{c.more}</a>
			</div>
		</section>
	);
}
