import { common } from "@content/pages/common";

// Полоса партнёров: «Кто я» на главной и подвал. Логотип из public/images/partners/, если есть, иначе название.
export default function Partners({ compact = false }: { compact?: boolean }) {
	const c = common.partners;
	return (
		<div className={compact ? "partners compact" : "partners"}>
			<span className="pl">{c.label}</span>
			<ul>{c.items.map((p) => <li key={p.name}>{p.logo ? <img src={p.logo} alt={p.name} height={22} /> : p.name}</li>)}</ul>
			{!compact && <p className="pn">{c.note}</p>}
		</div>
	);
}
