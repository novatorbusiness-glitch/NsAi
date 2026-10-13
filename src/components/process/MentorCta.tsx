import { process } from "@content/pages/kak-my-rabotaem";

// Финал страницы: кто хочет собрать сам — на наставничество.
export default function MentorCta() {
	const c = process.mentor;
	return (
		<section className="dark">
			<div className="wrap">
				<div className="card"><h2 style={{ fontSize: "clamp(22px,3vw,28px)" }}>{c.h2}</h2><p className="sub" style={{ margin: "12px 0 18px" }}>{c.text}</p><a className="btn s" href="/nastavnichestvo">{c.button}</a></div>
			</div>
		</section>
	);
}
