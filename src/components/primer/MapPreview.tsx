import data from "@content/data/project-map.json";
import { primer } from "@content/pages/primer";

// Превью карты для главной, «Как мы работаем» и кейсов (решение 16.10): без интерактива, ведёт на /primer-chertezha.
const C: Record<string, [string, string]> = {
	goal: ["#6b46c1", "#f1ecfd"], market: ["#2f6fe0", "#e8f0ff"], product: ["#0f8a7e", "#e1f5f1"], cabinet: ["#4b4fd1", "#ebebfe"], tech: ["#3d4a63", "#edf0f5"],
	money: ["#1f8a4c", "#e5f5ea"], sales: ["#d9661f", "#ffeedf"], legal: ["#c2416b", "#fdeaf0"], route: ["#b7791f", "#fff3d9"],
};
const ICON: Record<string, string> = { done: "✓", now: "◐", plan: "○" };

export default function MapPreview({ at }: { at?: "process" | "cases" }) {
	const t = primer.preview;
	const links = data.nodes.reduce((a, n) => a + n.links.length, 0);
	return (
		<a className="mpv" href="/primer-chertezha">
			<div className="mpv-t">
				<p className="lbl">{t.label}</p>
				<h3>{at ? t.titles[at] : t.title}</h3>
				<p>{t.text}</p>
				<p className="mpv-n">{data.nodes.length} {t.nodes} · {data.layers.length} {t.layers} · {links} {t.links}</p>
				<span className="btn s">{t.button}</span>
			</div>
			<MapMini />
		</a>
	);
}

// Сама мини-карта: слои цветом, стикеры со статусом. Используется в превью и в первом экране /primer-chertezha.
export function MapMini() {
	return (
		<div className="mpv-map" aria-hidden="true">
			{data.layers.map((l) => (
				<div key={l.id} className="mpv-f">
					<p><i style={{ background: (C[l.id] || C.goal)[0] }}></i>{l.title.replace(/^\d+\s·\s/, "")}</p>
					<div>{data.nodes.filter((n) => n.layer === l.id).map((n) => <span key={n.id} className={n.status} style={{ background: (C[l.id] || C.goal)[1] }}><em>{ICON[n.status]}</em>{n.title}</span>)}</div>
				</div>
			))}
		</div>
	);
}
