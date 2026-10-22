"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import data from "@content/data/project-map.json";
import { primer } from "@content/pages/primer";
import { goal } from "@/lib/analytics";
import { goals } from "@/config/goals";

// Карта проекта в стиле Miro (решение 16.10). Оформление — как вкладка «Карта проекта» в Фундаменте (map_panel.html):
// цвет у каждого слоя, стикеры-листочки, статус значком ✓ ◐ ○, карточка с цветной полосой слоя, плавающая панель масштаба.
// Компьютер и телефон: холст двигается мышью или пальцем, колесо и кнопки приближают; все блоки списком — под кнопкой.
type Status = "done" | "now" | "plan";
type Node = { id: string; layer: string; title: string; publicNote: string; status: Status; links: string[] };
const map = data as unknown as { layers: { id: string; title: string }[]; nodes: Node[] };

// Цвета слоёв: [основной, фон стикера] — те же, что в Фундаменте (объект C).
const C: Record<string, [string, string]> = {
	goal: ["#6b46c1", "#f1ecfd"], market: ["#2f6fe0", "#e8f0ff"], product: ["#0f8a7e", "#e1f5f1"], cabinet: ["#4b4fd1", "#ebebfe"], tech: ["#3d4a63", "#edf0f5"],
	money: ["#1f8a4c", "#e5f5ea"], sales: ["#d9661f", "#ffeedf"], legal: ["#c2416b", "#fdeaf0"], route: ["#b7791f", "#fff3d9"],
};
const col = (id: string) => C[id] || (["#6b46c1", "#f1ecfd"] as [string, string]);
const ICON: Record<Status, string> = { done: "✓", now: "◐", plan: "○" };
const SW = 204, SH = 124, G = 18, PADX = 22, PADT = 52, PADB = 24, COLS = 3, FCOLS = 3, FG = 72, M = 48;

function layout() {
	const per = map.layers.map((l) => map.nodes.filter((n) => n.layer === l.id));
	const fw = PADX * 2 + COLS * SW + (COLS - 1) * G;
	const rowH: number[] = [];
	per.forEach((arr, i) => { const r = Math.floor(i / FCOLS), rows = Math.max(1, Math.ceil(arr.length / COLS)); rowH[r] = Math.max(rowH[r] || 0, PADT + PADB + rows * SH + (rows - 1) * G); });
	const pos: Record<string, { x: number; y: number }> = {};
	const frames = per.map((arr, i) => {
		const r = Math.floor(i / FCOLS), c = i % FCOLS;
		const y = M + rowH.slice(0, r).reduce((a, h) => a + h + FG, 0), x = M + c * (fw + FG);
		arr.forEach((n, j) => { pos[n.id] = { x: x + PADX + (j % COLS) * (SW + G), y: y + PADT + Math.floor(j / COLS) * (SH + G) }; });
		return { id: map.layers[i].id, title: map.layers[i].title, n: arr.length, x, y, w: fw, h: rowH[r] };
	});
	const W = M * 2 + FCOLS * fw + (FCOLS - 1) * FG, H = M + rowH.reduce((a, h) => a + h + FG, 0);
	return { frames, pos, W, H };
}

export default function MapCanvas() {
	const t = primer.map;
	const L = useMemo(layout, []);
	const byId = useMemo(() => Object.fromEntries(map.nodes.map((n) => [n.id, n])), []);
	const usedBy = useMemo(() => {
		const r: Record<string, string[]> = {};
		map.nodes.forEach((n) => n.links.forEach((d) => (r[d] = [...(r[d] || []), n.id])));
		return r;
	}, []);
	const count = useMemo(() => {
		const c: Record<Status, number> = { done: 0, now: 0, plan: 0 };
		map.nodes.forEach((n) => c[n.status]++);
		return c;
	}, []);
	const [sel, setSel] = useState<string | null>(null);
	const [v, setV] = useState({ x: 0, y: 0, k: 0.5 });
	const [moving, setMoving] = useState(false);
	const box = useRef<HTMLDivElement>(null);
	const drag = useRef<{ x: number; y: number; vx: number; vy: number } | null>(null);

	// «Вся схема» — целиком; при открытии — по ширине и сверху (на телефоне крупнее, чтобы читалось).
	const fit = useCallback((whole: boolean) => {
		const el = box.current; if (!el || !el.clientWidth) return;
		const w = el.clientWidth, h = el.clientHeight;
		if (!whole) { const k = w < 700 ? 0.55 : Math.max(0.66, Math.min(1, (w - 40) / L.W)); return setV({ k, x: w < 700 ? 8 : 20, y: 56 }); }
		const k = Math.min((w - 40) / L.W, (h - 90) / L.H);
		setV({ k, x: (w - L.W * k) / 2, y: Math.max(56, (h - L.H * k) / 2) });
	}, [L]);
	useEffect(() => { fit(false); const on = () => fit(false); window.addEventListener("resize", on); return () => window.removeEventListener("resize", on); }, [fit]);

	const zoom = useCallback((f: number, cx?: number, cy?: number) => {
		const el = box.current; if (!el) return;
		const x0 = cx ?? el.clientWidth / 2, y0 = cy ?? el.clientHeight / 2;
		setV((p) => { const k = Math.max(0.2, Math.min(2.4, p.k * f)); return { k, x: x0 - ((x0 - p.x) * k) / p.k, y: y0 - ((y0 - p.y) * k) / p.k }; });
	}, []);
	// Колесо приближает только внутри холста; страница при этом не прокручивается.
	useEffect(() => {
		const el = box.current; if (!el) return;
		const wheel = (e: WheelEvent) => { e.preventDefault(); const r = el.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.12 : 0.89, e.clientX - r.left, e.clientY - r.top); };
		el.addEventListener("wheel", wheel, { passive: false });
		return () => el.removeEventListener("wheel", wheel);
	}, [zoom]);
	useEffect(() => { const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setSel(null); }; document.addEventListener("keydown", esc); return () => document.removeEventListener("keydown", esc); }, []);

	const ui = (e: React.SyntheticEvent) => (e.target as HTMLElement).closest(".pm-note,.pm-card,.pm-tools,.pm-leg");
	const down = (e: React.PointerEvent) => {
		if (ui(e)) return;
		drag.current = { x: e.clientX, y: e.clientY, vx: v.x, vy: v.y };
		setMoving(true); (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
	};
	const move = (e: React.PointerEvent) => { const d = drag.current; if (d) setV((p) => ({ ...p, x: d.vx + e.clientX - d.x, y: d.vy + e.clientY - d.y })); };
	const up = (e: React.PointerEvent) => {
		const d = drag.current; drag.current = null; setMoving(false);
		if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 4) setSel(null);
	};

	const s = sel ? byId[sel] : null;
	const near = new Set(s ? [s.id, ...s.links, ...(usedBy[s.id] || [])] : []);
	const ctr = (id: string) => ({ x: L.pos[id].x + SW / 2, y: L.pos[id].y + SH / 2 });
	const layerTitle = (id: string) => map.layers.find((l) => l.id === id)?.title || "";
	const badge = (st: Status) => <span className={`pm-b ${st}`}>{ICON[st]} {t.status[st].toLowerCase()}</span>;

	return (
		<div className="pmap2">
			<div className={`pm-board${moving ? " drag" : ""}${s ? " dim" : ""}`} ref={box} onPointerDown={down} onPointerMove={move} onPointerUp={up}>
				<div className="pm-world" style={{ width: L.W, height: L.H, transform: `translate(${v.x}px,${v.y}px) scale(${v.k})` }}>
					{L.frames.map((f) => (
						<div key={f.id} className="pm-frame" style={{ left: f.x, top: f.y, width: f.w, height: f.h }}>
							<div className="pm-fh"><i style={{ background: col(f.id)[0] }}></i>{f.title}<em>{f.n}</em></div>
						</div>
					))}
					<svg className="pm-lines" width={L.W} height={L.H} aria-hidden="true">
						{map.nodes.flatMap((n) => n.links.filter((d) => L.pos[d]).map((d) => {
							const a = ctr(d), b = ctr(n.id), dx = (b.x - a.x) * 0.5, dy = (b.y - a.y) * 0.12;
							const on = s && (d === s.id || n.id === s.id);
							return <path key={d + n.id} className={on ? "hl" : ""} d={`M${a.x},${a.y} C${a.x + dx},${a.y + dy} ${b.x - dx},${b.y - dy} ${b.x},${b.y}`} />;
						}))}
					</svg>
					{map.nodes.map((n, i) => {
						const p = L.pos[n.id], c = col(n.layer);
						return (
							<button key={n.id} type="button" className={`pm-note s-${n.status}${i % 2 ? " r2" : ""}${sel === n.id ? " on" : ""}${near.has(n.id) ? " hl" : ""}`}
								style={{ left: p.x, top: p.y, width: SW, height: SH, backgroundColor: c[1], ["--pm-c" as string]: c[0] }}
								onClick={() => { if (sel !== n.id) goal(goals.mapBlock); setSel((x) => (x === n.id ? null : n.id)); }} aria-pressed={sel === n.id}>
								<b>{n.title}</b>
								<span className="pm-n">{n.publicNote}</span>
								{badge(n.status)}
							</button>
						);
					})}
				</div>
				<div className="pm-leg">
					{(["done", "now", "plan"] as Status[]).map((k) => <span key={k}><b className={`pm-b ${k}`}>{ICON[k]}</b>{t.status[k].toLowerCase()} · {count[k]}</span>)}
				</div>
				<div className="pm-tools">
					<button type="button" onClick={() => zoom(0.8)} aria-label={t.zoomOut}>−</button>
					<span className="pm-z">{Math.round(v.k * 100)}%</span>
					<button type="button" onClick={() => zoom(1.25)} aria-label={t.zoomIn}>+</button>
					<button type="button" className="pm-fit" onClick={() => fit(true)}>{t.fit}</button>
				</div>
				{s && (
					<aside className="pm-card" aria-live="polite">
						<div className="pm-cs" style={{ background: col(s.layer)[0] }}></div>
						<div className="pm-ci">
							<button type="button" className="pm-x" onClick={() => setSel(null)} aria-label={t.close}>×</button>
							<p className="pm-cl">{layerTitle(s.layer)}</p>
							<h3>{s.title}</h3>
							{badge(s.status)}
							<p>{s.publicNote}</p>
							{s.links.length > 0 && <div className="pm-dep"><b>{t.dependsOn}:</b> {s.links.map((d, i) => <span key={d}>{i > 0 && ", "}<button type="button" onClick={() => setSel(d)}>{byId[d]?.title}</button></span>)}</div>}
							{(usedBy[s.id] || []).length > 0 && <div className="pm-dep"><b>{t.neededFor}:</b> {usedBy[s.id].map((d, i) => <span key={d}>{i > 0 && ", "}<button type="button" onClick={() => setSel(d)}>{byId[d]?.title}</button></span>)}</div>}
						</div>
					</aside>
				)}
			</div>
			<p className="pm-hint">{t.hint}</p>

			<details className="pm-more">
				<summary>{t.asList}</summary>
				<div className="pm-list">
					{map.layers.map((l) => (
						<div key={l.id}>
							<h3><i style={{ background: col(l.id)[0] }}></i>{l.title}</h3>
							{map.nodes.filter((n) => n.layer === l.id).map((n) => (
								<div key={n.id} className={`pm-li s-${n.status}`} style={{ backgroundColor: col(l.id)[1] }}>
									<b>{n.title}</b><span>{n.publicNote}</span>{badge(n.status)}
								</div>
							))}
						</div>
					))}
				</div>
			</details>
		</div>
	);
}
