"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { goal } from "@/lib/analytics";
import Rich from "@/components/ui/Rich";

// Окно выбора мессенджера (решение 14.10). Любая ссылка на личный Telegram или MAX сначала открывает окно:
// выбор Telegram / MAX и строка про данные (политика, оферта, где хранятся данные). Цели Telegram и MAX
// считаются по кнопкам в окне (их ловит Goals), цель самой кнопки (data-goal) — при открытии окна.
const isContact = (href: string) => href.includes("t.me/Ilya_novator") || href.includes("max.ru/u/");

export default function ContactChooser() {
	const [open, setOpen] = useState(false);
	const first = useRef<HTMLAnchorElement>(null);
	const c = common.contactModal;
	useEffect(() => {
		const onClick = (e: MouseEvent) => {
			const a = (e.target as HTMLElement | null)?.closest?.("a");
			if (!a || a.dataset.direct === "1") return;
			if (!isContact(a.getAttribute("href") || "")) return;
			e.preventDefault();
			e.stopImmediatePropagation();
			const own = a.getAttribute("data-goal");
			if (own) goal(own);
			setOpen(true);
		};
		window.addEventListener("click", onClick, true);
		return () => window.removeEventListener("click", onClick, true);
	}, []);
	useEffect(() => {
		if (!open) return;
		first.current?.focus();
		const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);
	if (!open) return null;
	return (
		<div className="cmodal" role="dialog" aria-modal="true" aria-labelledby="cmodal-t" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
			<div className="cmodal-box">
				<button className="cmodal-x" type="button" aria-label={c.close} onClick={() => setOpen(false)}>×</button>
				<p className="cmodal-t" id="cmodal-t">{c.title}</p>
				<p className="cmodal-lead">{c.lead}</p>
				<div className="cmodal-btns">
					<a ref={first} className="btn p" data-direct="1" href={site.contacts.telegram} target="_blank" rel="noopener" onClick={() => setOpen(false)}>{c.telegram}<small>{c.telegramNote}</small></a>
					<a className="btn s" data-direct="1" href={site.contacts.max} target="_blank" rel="noopener" onClick={() => setOpen(false)}>{c.max}<small>{c.maxNote}</small></a>
				</div>
				<p className="cmodal-legal"><Rich t={c.legal} /></p>
			</div>
		</div>
	);
}
