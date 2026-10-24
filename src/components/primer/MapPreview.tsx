import data from "@content/data/project-map.json";

// Мини-карта проекта без интерактива (первый экран /primer-chertezha).
const C: Record<string, [string, string]> = {
	goal: ["#6b46c1", "#f1ecfd"], market: ["#2f6fe0", "#e8f0ff"], product: ["#0f8a7e", "#e1f5f1"], cabinet: ["#4b4fd1", "#ebebfe"], tech: ["#3d4a63", "#edf0f5"],
	money: ["#1f8a4c", "#e5f5ea"], sales: ["#d9661f", "#ffeedf"], legal: ["#c2416b", "#fdeaf0"], route: ["#b7791f", "#fff3d9"],
};
const ICON: Record<string, string> = { done: "✓", now: "◐", plan: "○" };

// Слои цветом, стикеры со статусом.
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
