"use client";
import { useState } from "react";

// Темы над списком статей: нажали — остаются статьи этой темы (карточки с data-tag внутри #posts).
export default function TagFilter({ tags, all }: { tags: string[]; all: string }) {
	const [cur, setCur] = useState("");
	const pick = (t: string) => {
		setCur(t);
		document.querySelectorAll<HTMLElement>("#posts [data-tag]").forEach((e) => { e.hidden = !!t && e.dataset.tag !== t; });
	};
	return (
		<div className="btags" role="group">
			{["", ...tags].map((t) => (
				<button key={t || "all"} className={t === cur ? "tagb on" : "tagb"} aria-pressed={t === cur} onClick={() => pick(t)}>{t || all}</button>
			))}
		</div>
	);
}
