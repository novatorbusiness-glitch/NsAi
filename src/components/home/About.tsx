import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// 07 · кто я (вопрос собственника «кто вы?»): сам строю то, что советую.
export default function About() {
	const c = home.about;
	return (
		<section id="about">
			<div className="wrap about">
				<img className="photo-img" src={c.photo.src} alt={c.photo.alt} width={800} height={1000} />
				<div className="col">
					<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
					{c.subs.map((s) => <p className="sub" key={s}>{s}</p>)}
					<div className="facts">{c.facts.map((f) => <div key={f.num}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
				</div>
			</div>
		</section>
	);
}
