import Rich from "@/components/ui/Rich";
import { allCases } from "@/lib/cases";
import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 03 · разработка и свои продукты: две главные карточки (мой ИИ-сервис, GAZE), остальные — строкой. Кейсы — content/cases/*.md.
export default function Products() {
	const c = keisy.products;
	const main = allCases().filter((k) => k.order <= 2);
	return (
		<section id="products">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="kprods">
					{main.map((k) => (
						<article className="kp" key={k.slug}>
							<div className={`pv v-${k.view}`}><img src={k.image} alt={k.imageAlt} width={k.w} height={k.h} loading="lazy" /></div>
							<div className="kp-t">
								<span className="tag">{k.title.split(":")[0]} · {k.tag}</span>
								<h3>{k.headline}</h3>
								<p><Rich t={k.text} /></p>
								{k.metrics.length > 0 && <ul className="pf">{k.metrics.map((m) => <li key={m.value}><b>{m.value}</b>{m.label}</li>)}</ul>}
								{k.forYou && <p className="for-you"><b>{c.forYou}</b> <Rich t={k.forYou} /></p>}
							</div>
						</article>
					))}
				</div>
				<p className="team-own">{c.more}</p>
			</div>
		</section>
	);
}
