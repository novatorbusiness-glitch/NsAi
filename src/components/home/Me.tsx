import { home } from "@content/pages/home";
import SectionHead from "@/components/ui/SectionHead";

// Какой я в работе: шесть черт по трём тестам (VIA, Big Five, Голланд), 29.10; источник — «01 Стратегия/Ниши и сегменты — разбор 29.10.md».
export default function Me() {
	const c = home.me;
	return (
		<section id="me" className="me-sec">
			<div className="wrap">
				<SectionHead label={c.label} title={c.h2} lead={c.lead} />
				<div>
					<ol className="me-list">
						{c.items.map((x, i) => (
							<li key={x.b}>
								<span className="me-n">{String(i + 1).padStart(2, "0")}</span>
								<div><h3>{x.b}</h3><p>{x.t}</p><small>{x.src.split(" · ").map((s) => { const [k, ...v] = s.split(": "); return <span key={k}><b>{k}</b>{v.join(": ")}</span>; })}</small></div>
							</li>
						))}
					</ol>
					<p className="me-note">{c.note}</p>
				</div>
			</div>
		</section>
	);
}
