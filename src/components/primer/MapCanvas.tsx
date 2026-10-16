"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import data from "@content/data/okidelo-map.json";
import { primer } from "@content/pages/primer";

// Карта проекта в стиле Miro (решение 16.10): рамки-слои по сетке 3×3, стикеры, стрелки «от чего зависит».
// На компьютере холст двигается мышью и приближается кнопками, клик по стикеру открывает карточку. На телефоне — список слоёв (CSS).
type Status = "done" | "now" | "plan";
type Node = { id: string; layer: string; title: string; publicNote: string; status: Status; links: string[] };
const map = data as unknown as { layers: { id: string; title: string }[]; nodes: Node[] };

const COLS = 3, FW = 380, GAP = 70, HEAD = 52, SW = 166, SH = 62, SG = 14, PAD = 16;
const TINT = ["#fff4c2", "#dff3ea", "#e3ecff", "#fde3e3", "#efe4fb", "#fdebd3", "#e6f4d7", "#e5f1f5", "#f1ece4"];

function layout() {
	const frames = map.layers.map((l, i) => {
		const nodes = map.nodes.filter((n) => n.layer === l.id);
		const rows = Math.ceil(nodes.length / 2);
		return { ...l, i, nodes, h: HEAD + rows * (SH + SG) - SG + PAD * 2 };
	});
	const rowH: number[] = [];
	frames.forEach((f) => { const r = Math.floor(f.i / COLS); rowH[r] = Math.max(rowH[r] || 0, f.h); });
	const pos: Record<string, { x: number; y: number }> = {};
	const placed = frames.map((f) => {
		const c = f.i % COLS, r = Math.floor(f.i / COLS);
		const x = c * (FW + GAP), y = rowH.slice(0, r).reduce((a, b) => a + b + GAP, 0);
		f.nodes.forEach((n, k) => { pos[n.id] = { x: x + PAD + (k % 2) * (SW + SG), y: y + HEAD + PAD + Math.floor(k / 2) * (SH + SG) }; });
		return { ...f, x, y, h: rowH[r] };
	});
	const W = COLS * FW + (COLS - 1) * GAP, H = rowH.reduce((a, b) => a + b + GAP, -GAP);
	return { frames: placed, pos, W, H };
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
	const [sel, setSel] = useState<string | null>(null);
	const [v, setV] = useState({ x: 0, y: 0, k: 0.6 });
	const box = useRef<HTMLDivElement>(null);
	const drag = useRef<{ x: number; y: number; vx: number; vy: number; moved: boolean } | null>(null);

	// «Вся схема» — целиком в окне; при открытии — по ширине, сверху, чтобы стикеры читались.
	const fit = useCallback((whole = true) => {
		const el = box.current; if (!el) return;
		const kw = (el.clientWidth - 48) / L.W, k = Math.min(whole ? Math.min(kw, (el.clientHeight - 48) / L.H) : kw, 1);
		setV({ k, x: (el.clientWidth - L.W * k) / 2, y: whole ? (el.clientHeight - L.H * k) / 2 : 24 });
	}, [L]);
	useEffect(() => { const start = () => { const el = box.current; if (el && el.clientWidth < 700) setV({ k: 0.62, x: 12, y: 12 }); else fit(false); }; start(); window.addEventListener("resize", start); return () => window.removeEventListener("resize", start); }, [fit]);

	const zoom = (f: number) => {
		const el = box.current; if (!el) return;
		const cx = el.clientWidth / 2, cy = el.clientHeight / 2;
		setV((p) => { const k = Math.min(1.6, Math.max(0.3, p.k * f)); return { k, x: cx - ((cx - p.x) * k) / p.k, y: cy - ((cy - p.y) * k) / p.k }; });
	};
	const down = (e: React.PointerEvent) => { drag.current = { x: e.clientX, y: e.clientY, vx: v.x, vy: v.y, moved: false }; };
	const move = (e: React.PointerEvent) => {
		const d = drag.current; if (!d) return;
		const dx = e.clientX - d.x, dy = e.clientY - d.y;
		if (!d.moved && Math.hypot(dx, dy) < 4) return;
		if (!d.moved) { d.moved = true; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); }
		setV((p) => ({ ...p, x: d.vx + dx, y: d.vy + dy }));
	};
	const up = () => { setTimeout(() => (drag.current = null), 0); };
	const pick = (id: string) => { if (!drag.current?.moved) setSel((s) => (s === id ? null : id)); };

	const near = new Set(sel ? [sel, ...byId[sel].links, ...(usedBy[sel] || [])] : []);
	const edges = map.nodes.flatMap((n) => n.links.filter((d) => L.pos[d]).map((d) => ({ from: d, to: n.id })));
	const center = (id: string) => ({ x: L.pos[id].x + SW / 2, y: L.pos[id].y + SH / 2 });
	const layerTitle = (id: string) => map.layers.find((l) => l.id === id)?.title || "";
	const s = sel ? byId[sel] : null;

	return (
		<div className="pmap2">
			<div className="pm-legend">
				{(["done", "now", "plan"] as Status[]).map((k) => <span key={k} className={`pm-st ${k}`}><i></i>{t.status[k]}</span>)}
				<span className="pm-hint">{t.hint}</span>
			</div>

			<div className="pm-board" ref={box} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}>
				<div className="pm-world" style={{ width: L.W, height: L.H, transform: `translate(${v.x}px,${v.y}px) scale(${v.k})` }}>
					{L.frames.map((f) => (
						<div key={f.id} className="pm-frame" style={{ left: f.x, top: f.y, width: FW, height: f.h }}><p>{f.title}</p></div>
					))}
					<svg className="pm-edges" width={L.W} height={L.H} aria-hidden="true">
						<defs><marker id="pm-ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" /></marker></defs>
						{edges.map((e) => {
							const a = center(e.from), b = center(e.to), on = sel && (e.from === sel || e.to === sel);
							const mx = (a.x + b.x) / 2;
							return <path key={e.from + e.to} className={on ? "on" : sel ? "off" : ""} d={`M${a.x} ${a.y}C${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`} markerEnd="url(#pm-ar)" />;
						})}
					</svg>
					{map.nodes.map((n) => {
						const p = L.pos[n.id], li = map.layers.findIndex((l) => l.id === n.layer);
						return (
							<button key={n.id} type="button" className={`pm-note ${n.status}${sel === n.id ? " sel" : ""}${sel && !near.has(n.id) ? " dim" : ""}`}
								style={{ left: p.x, top: p.y, width: SW, height: SH, background: TINT[li % TINT.length] }}
								onClick={() => pick(n.id)} aria-pressed={sel === n.id}>
								<i></i>{n.title}
							</button>
						);
					})}
				</div>
				<div className="pm-zoom">
					<button type="button" onClick={() => zoom(1.25)} aria-label={t.zoomIn}>+</button>
					<button type="button" onClick={() => zoom(0.8)} aria-label={t.zoomOut}>−</button>
					<button type="button" onClick={() => fit(true)}>{t.fit}</button>
				</div>
				{s && (
					<aside className="pm-card" aria-live="polite">
						<p className="lbl">{layerTitle(s.layer)}</p>
						<h3>{s.title}</h3>
						<span className={`pm-st ${s.status}`}><i></i>{t.status[s.status]}</span>
						<p>{s.publicNote}</p>
						{s.links.length > 0 && <><p className="lbl">{t.dependsOn}</p><ul>{s.links.map((d) => <li key={d}><button type="button" onClick={() => setSel(d)}>{byId[d]?.title}</button></li>)}</ul></>}
						{(usedBy[s.id] || []).length > 0 && <><p className="lbl">{t.neededFor}</p><ul>{usedBy[s.id].map((d) => <li key={d}><button type="button" onClick={() => setSel(d)}>{byId[d]?.title}</button></li>)}</ul></>}
						<button type="button" className="pm-close" onClick={() => setSel(null)} aria-label={t.close}>×</button>
					</aside>
				)}
			</div>

			<details className="pm-more">
				<summary>{t.asList}</summary>
			<ol className="pm-list">
				{map.layers.map((l) => (
					<li key={l.id}>
						<p className="lbl">{l.title}</p>
						<ul>{map.nodes.filter((n) => n.layer === l.id).map((n) => (
							<li key={n.id}><span className={`pm-st ${n.status}`}><i></i></span><div><b>{n.title}</b><span>{n.publicNote}</span></div></li>
						))}</ul>
					</li>
				))}
			</ol>
			</details>
		</div>
	);
}
