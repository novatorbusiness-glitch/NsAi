import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import Partners from "@/components/ui/Partners";

// 07 · кто я (вопрос собственника «кто вы?»): сам строю то, что советую.
export default function About() {
	const c = home.about;
	return (
		<section id="about">
			<div className="wrap about">
				<img className="photo-img" src={c.photo.src} alt={c.photo.alt} width={800} height={1000} />
				<div className="col">
					<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
					<ul className="apoints">{c.points.map((p) => <li key={p.b}><b>{p.b}</b><span>{p.t}</span></li>)}</ul>
					<Partners />
				</div>
			</div>
			<div className="wrap">
				<p className="cpath-l">{c.pathLabel}</p>
				<ol className="cpath">{c.path.map((p) => <li key={p.t}><span className="cy">{p.y}</span><b>{p.t}</b><span className="cd">{p.d}</span></li>)}</ol>
				<p className="cpath-out">{c.pathOut}</p>
			</div>
		</section>
	);
}
