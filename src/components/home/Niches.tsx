import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

const ICONS: Record<string, JSX.Element> = {
	app: <svg viewBox="0 0 48 48"><rect x="7" y="9" width="34" height="26" rx="4" /><path d="M7 16h34M13 12.5h.01M17 12.5h.01M18 24l-4 3 4 3M30 24l4 3-4 3M26 22l-4 10" /><path d="M18 40h12" /></svg>,
	clinic: <svg viewBox="0 0 48 48"><path d="M24 41s-14-8.2-14-19a8 8 0 0 1 14-5.3A8 8 0 0 1 38 22c0 10.8-14 19-14 19Z" /><path d="M24 20v10M19 25h10" /></svg>,
	net: <svg viewBox="0 0 48 48"><circle cx="24" cy="12" r="5" /><circle cx="10" cy="36" r="5" /><circle cx="24" cy="36" r="5" /><circle cx="38" cy="36" r="5" /><path d="M24 17v14M21 16l-8 15M27 16l8 15" /></svg>,
};

// С кем работаю: три ниши (решение Ильи 29.10): IT-продукты, частные клиники, франшизы. Карточка: шапка с иконкой, текст, теги участков.
export default function Niches() {
	const c = home.niches;
	return (
		<section id="niches" className="niches-sec">
			<div className="wrap">
				<SectionHead label={c.label} title={c.h2} lead={c.lead} />
				<ul className="niches">
					{c.items.map((x, i) => (
						<li key={x.b} className={"nc nc" + (i + 1)}>
							<div className="nc-top">
								<span className="nc-ico" aria-hidden="true">{ICONS[x.ico]}</span>
								<span className="nc-n">{String(i + 1).padStart(2, "0")}</span>
								<h3>{x.b}</h3>
								<p className="nc-sub">{x.sub}</p>
							</div>
							<div className="nc-body">
								<p>{x.t}</p>
								<ul className="nc-tags">{x.tags.map((t) => <li key={t}>{t}</li>)}</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
