"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Схема на телефоне не перестраивается в колонку: остаётся такой же, как на компьютере,
// и целиком уменьшается под ширину экрана, как обычная картинка. Шире width не растягивается.
export default function FitScheme({ width, children }: { width: number; children: ReactNode }) {
	const box = useRef<HTMLDivElement>(null);
	const inner = useRef<HTMLDivElement>(null);
	const [k, setK] = useState(1);
	const [h, setH] = useState(0);
	useEffect(() => {
		const b = box.current;
		const i = inner.current;
		if (!b || !i) return;
		const fit = () => {
			const s = Math.min(1, b.clientWidth / width);
			setK(s);
			setH(i.offsetHeight * s);
		};
		fit();
		const ro = new ResizeObserver(fit);
		ro.observe(b);
		ro.observe(i);
		return () => ro.disconnect();
	}, [width]);
	const small = k < 1;
	return (
		<div ref={box} className="fit" style={small ? { height: h } : undefined}>
			<div ref={inner} className="fit-in" style={{ width: `max(100%, ${width}px)`, transform: small ? `scale(${k})` : undefined }}>
				{children}
			</div>
		</div>
	);
}
