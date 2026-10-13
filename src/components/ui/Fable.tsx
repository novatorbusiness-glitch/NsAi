// Цитата-басня (решение Ильи 13.10): Крылов под нишу, не больше трёх на страницу.
export default function Fable({ q, src }: { q: string; src: string }) {
	return (
		<figure className="fable">
			<blockquote>«{q}»</blockquote>
			<figcaption>{src}</figcaption>
		</figure>
	);
}
