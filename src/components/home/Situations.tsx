import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import Fable from "@/components/ui/Fable";
import Scheme from "./Scheme";

// 01 · ситуация (вопрос собственника «это про меня?»): четыре истории, в каждой — во что это обходится.
export default function Situations() {
	const c = home.situations;
	return (
		<section id="situations" className="alt situations">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="sgrid">
					{c.cards.map((k) => (
						<div className="scard" key={k.title}>
							<h3>{k.title}</h3>
							<p>{k.text}</p>
							{"stat" in k && k.stat && <p className="sstat"><b>{k.stat.num}</b><span>{k.stat.t}</span></p>}
							<p className="punch">{k.punch}</p>
						</div>
					))}
				</div>
				<p className="ssrc">{c.sources}</p>
				<Fable q={c.fable.q} src={c.fable.src} />
				<p className="closing">{c.closing}</p>
				<Scheme />
			</div>
		</section>
	);
}
