import { services } from "@content/pages/kak-my-rabotaem";

// Цена, срок и «что входит» внизу примера: человек из бота или поиска видит, сколько стоит и как заказать.
// Состав берётся с «Как работаю в команде» (step — id шага там), цены — из config/prices.
type O = { name: string; price: string; term: string; label: string; more: string };
export default function Offer({ o, step }: { o: O; step: string }) {
	const s = services.find((x) => x.id === step)!;
	return (
		<div className="offer">
			<p className="offer-h"><b>{o.name}</b><span>{o.price} · {o.term}</span></p>
			<p className="lbl">{o.label}</p>
			<ul>{s.inc.map((t) => <li key={t}>{t.replace(/;$|\.$/, "")}</li>)}</ul>
			<a href={`/kak-my-rabotaem#${step}`}>{o.more}</a>
		</div>
	);
}
