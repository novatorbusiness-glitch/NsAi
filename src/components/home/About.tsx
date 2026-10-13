import { home } from "@content/pages/home";

// 7 · кто я.
export default function About() {
	const c = home.about;
	return (
		<section id="about" className="alt">
			<div className="wrap about">
				<img className="photo-img" src={c.photo.src} alt={c.photo.alt} width={800} height={1000} />
				<div className="col">
					<h2>{c.h2}</h2>
					<p className="lead">{c.lead}</p>
					{c.subs.map((s) => <p className="sub" key={s}>{s}</p>)}
					<div className="facts">{c.facts.map((f) => <div key={f.num}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
				</div>
			</div>
		</section>
	);
}
