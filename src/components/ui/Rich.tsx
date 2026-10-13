import type { ReactNode } from "react";

// Текст из content/ с короткой разметкой: **жирный**, [текст](адрес), {{без переноса}}.
// Внешние ссылки открываются в новой вкладке.
const RE = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)|\{\{(.+?)\}\}/g;

export function rich(s: string): ReactNode[] {
	const out: ReactNode[] = [];
	let last = 0;
	let k = 0;
	for (const m of s.matchAll(RE)) {
		if (m.index! > last) out.push(s.slice(last, m.index));
		if (m[1] !== undefined) out.push(<b key={k++}>{rich(m[1])}</b>);
		else if (m[2] !== undefined) {
			const ext = /^https?:/.test(m[3]);
			out.push(ext ? <a key={k++} href={m[3]} target="_blank" rel="noopener">{rich(m[2])}</a> : <a key={k++} href={m[3]}>{rich(m[2])}</a>);
		} else out.push(<span key={k++} className="nw">{m[4]}</span>);
		last = m.index! + m[0].length;
	}
	if (last < s.length) out.push(s.slice(last));
	return out;
}

export default function Rich({ t }: { t: string }) {
	return <>{rich(t)}</>;
}
