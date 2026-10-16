import { home } from "@content/pages/home";

// Схема «сейчас → со мной» под историями «Ситуации» (решение 16.10): главная мысль сайта одной картинкой.
// Слева связи с подрядчиками сходятся на собственнике и рвутся между собой, справа части соединены в систему, собственник видит один отчёт.
// Реклама справа за рамкой системы: её ведёт клиент или его специалист, в систему приходят заявки.
const R = 92, CX = 180, CY = 150, AX = 220;
const pos = (i: number, n: number, r = R, cy = CY) => {
	const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
	return { x: CX + r * Math.cos(a) * 1.35, y: cy + r * Math.sin(a) };
};

export default function Scheme() {
	const c = home.situations.scheme;
	const n = c.parts.length, m = c.partsAfter.length;
	// справа система смещена вправо, слева от неё — реклама клиента
	const pos2 = (i: number) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / m; return { x: AX + 54 * 1.55 * Math.cos(a), y: 205 + 54 * Math.sin(a) }; };
	return (
		<div className="scheme" role="img" aria-label={c.label}>
			<figure className="sch-card before">
				<p className="sch-tag">{c.before.tag}</p>
				<h3>{c.before.title}</h3>
				<svg viewBox="0 30 360 250" aria-hidden="true">
					{c.parts.map((p, i) => { const q = pos(i, n); return <line key={p} x1={CX} y1={CY} x2={q.x} y2={q.y} className="sch-l dash" />; })}
					{c.parts.map((p, i) => { const a = pos(i, n), b = pos((i + 1) % n, n); return <text key={p + "x"} x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 + 4} className="sch-x">×</text>; })}
					<circle cx={CX} cy={CY} r={30} className="sch-you" />
					<text x={CX} y={CY + 5} className="sch-t you">{c.you}</text>
					{c.parts.map((p, i) => { const q = pos(i, n); return <g key={p + "n"}><rect x={q.x - 36} y={q.y - 15} width={72} height={30} rx={8} className="sch-node" /><text x={q.x} y={q.y + 5} className="sch-t">{p}</text></g>; })}
				</svg>
				<figcaption>{c.before.cap}</figcaption>
			</figure>
			<span className="sch-arrow" aria-hidden="true">→</span>
			<figure className="sch-card after">
				<p className="sch-tag">{c.after.tag}</p>
				<h3>{c.after.title}</h3>
				<svg viewBox="0 0 360 300" aria-hidden="true">
					<rect x={92} y={118} width={256} height={164} rx={16} className="sch-sys" />
					<text x={106} y={140} className="sch-cap">{c.system}</text>
					{c.partsAfter.map((p, i) => { const q = pos2(i); const nx = pos2((i + 1) % m); return <line key={p + "r"} x1={q.x} y1={q.y} x2={nx.x} y2={nx.y} className="sch-l ok" />; })}
					{c.partsAfter.map((p, i) => { const q = pos2(i); return <line key={p + "c"} x1={AX} y1={70} x2={q.x} y2={q.y} className="sch-l soft" />; })}
					{c.partsAfter.map((p, i) => { const q = pos2(i); return <g key={p + "n"}><rect x={q.x - 32} y={q.y - 14} width={64} height={28} rx={8} className="sch-node on" /><text x={q.x} y={q.y + 5} className="sch-t">{p}</text></g>; })}
					<line x1={AX} y1={20} x2={AX} y2={52} className="sch-l ok" />
					<rect x={AX - 42} y={52} width={84} height={34} rx={17} className="sch-me" />
					<text x={AX} y={74} className="sch-t me">{c.me}</text>
					<circle cx={AX} cy={16} r={14} className="sch-you small" />
					<text x={AX} y={20} className="sch-t you sm">{c.you}</text>
					<rect x={4} y={182} width={70} height={42} rx={8} className="sch-node ext" />
					<text x={39} y={200} className="sch-t">{c.ads.b}</text>
					<text x={39} y={215} className="sch-t ext">{c.ads.t}</text>
					<line x1={74} y1={203} x2={118} y2={203} className="sch-l ok" markerEnd="url(#sch-ar)" />
					<text x={96} y={196} className="sch-cap flow">{c.ads.flow}</text>
					<defs><marker id="sch-ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#2fb58a" /></marker></defs>
				</svg>
				<figcaption>{c.after.cap}</figcaption>
			</figure>
		</div>
	);
}
