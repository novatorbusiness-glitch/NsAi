import Rich from "@/components/ui/Rich";
import { allCases } from "@/lib/cases";
import { keisy } from "@content/pages/keisy";
import SectionHead from "@/components/ui/SectionHead";

// 02 · свои продукты: веер экранов и строки «экран + главное решение + что это значит для вас». Кейсы — content/cases/*.md (headline — решение).
export default function Products() {
	const c = keisy.products;
	return (
		<section id="products" className="alt">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="fan fan-sm" aria-label={c.fanLabel}>
					{c.fan.map((f) => <img key={f.cls} className={f.cls} src={f.src} alt={f.alt} width={800} height={1159} />)}
				</div>
				<div className="prows">
					{allCases().map((k) => {
						const img = <img src={k.image} alt={k.imageAlt} width={k.w} height={k.h} loading="lazy" />;
						return (
							<article className="prow" key={k.slug}>
								<div className={`pv v-${k.view}`}>
									{k.window ? <figure className="window" style={{ margin: "0" }}><div className="bar"><i></i><i></i><i></i><span>{k.window}</span></div>{img}</figure> : img}
									{k.caption && <span className="pvcap">{k.caption}</span>}
								</div>
								<div className="pt">
									{k.logo && <img className="plogo" src={k.logo} alt={k.title.split(":")[0]} width={380} height={100} />}
									<span className="tag">{k.title.split(":")[0]} · {k.tag}</span><h3>{k.headline}</h3>
									<p><Rich t={k.text} /></p>
									{k.forYou && <p className="for-you"><b>{c.forYou}</b>{" " + k.forYou}</p>}
									{k.metrics.length > 0 && <ul className="pf">{k.metrics.map((m) => <li key={m.value}><b>{m.value}</b>{m.label}</li>)}</ul>}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
