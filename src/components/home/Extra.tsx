"use client";
import { useEffect, useRef, useState } from "react";
import { home } from "@content/pages/home";
import { site } from "@/config/site";
import SectionHead from "@/components/ui/SectionHead";

// 05 · отдельные задачи: витрина доп-услуг (решение Ильи 23.10) — карточка с ценой, подробности во всплывающем окне.
export default function Extra() {
	const c = home.extra;
	const [open, setOpen] = useState<string | null>(null);
	const closeBtn = useRef<HTMLButtonElement>(null);
	const item = c.items.find((x) => x.id === open);
	useEffect(() => {
		if (!open) return;
		closeBtn.current?.focus();
		const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);
	return (
		<section id="extra">
			<div className="wrap">
				<SectionHead num={c.num} label={c.label} title={c.h2} lead={c.lead} />
				<div className="extra">
					{c.items.map((x) => (
						<button type="button" className="card xcard" key={x.id} onClick={() => setOpen(x.id)}>
							<h3>{x.title}</h3>
							<p>{x.line}</p>
							<p className="x-price"><b>{x.price}</b><span>{x.term}</span></p>
							<span className="x-more">{c.more} +</span>
						</button>
					))}
				</div>
			</div>
			{item && (
				<div className="cmodal" role="dialog" aria-modal="true" aria-labelledby="xmodal-t" onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}>
					<div className="cmodal-box xmodal">
						<button ref={closeBtn} className="cmodal-x" type="button" aria-label={c.close} onClick={() => setOpen(null)}>×</button>
						<p className="cmodal-t" id="xmodal-t">{item.title}</p>
						<p className="x-price"><b>{item.price}</b><span>{item.term}</span></p>
						<p className="lbl">{c.more}</p>
						<ul className="x-inc">{item.inc.map((t) => <li key={t}>{t}</li>)}</ul>
						{item.note && <p className="x-note">{item.note}</p>}
						<div className="cmodal-btns">
							<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start" data-variant={`extra-${item.id}`}>{c.cta}</a>
							{item.link.href && <a className="btn s" href={item.link.href}>{item.link.t}</a>}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
