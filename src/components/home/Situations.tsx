import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";
import Fable from "@/components/ui/Fable";

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
							<p className="punch">{k.punch}</p>
							{"src" in k && <p className="src">{k.src}</p>}
						</div>
					))}
				</div>
				<Fable q={c.fable.q} src={c.fable.src} />
				<p className="closing">{c.closing}</p>
			</div>
		</section>
	);
}
