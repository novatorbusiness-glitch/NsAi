"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import BrandMark from "@/components/ui/BrandMark";

// Шапка: значок и имя, три пункта меню, кнопка «Начать с одной задачи»; на телефоне — «Написать» и меню.
// На телефоне и планшете при прокрутке вниз уезжает, при прокрутке вверх возвращается (решение Ильи 13.10: мешала читать).
export default function Header() {
	const [open, setOpen] = useState(false);
	const [hide, setHide] = useState(false);
	const last = useRef(0);
	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY, d = y - last.current;
			if (y < 80) setHide(false);
			else if (d > 6) setHide(true);
			else if (d < -6) setHide(false);
			if (Math.abs(d) > 6 || y < 80) last.current = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<header className={hide && !open ? "top hide" : "top"}>
			<div className="wrap">
				<Link className="brand" href="/">
					<BrandMark />
					{site.name}
				</Link>
				<nav className="nav">
					{site.nav.map((i) => (
						<Link key={i.href} href={i.href}>
							{i.label}
						</Link>
					))}
				</nav>
				<div className="cta-row">
					<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start">
						<span className="full">{common.ui.headerStart}</span>
						<span className="short">{common.ui.headerShort}</span>
					</a>
					<button className="burger" aria-label={common.ui.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
						<span></span>
					</button>
				</div>
			</div>
			<div className={open ? "menu open" : "menu"} id="m">
				{site.menu.map((i) => (
					<Link key={i.href} href={i.href} onClick={() => setOpen(false)}>
						{i.label}
					</Link>
				))}
			</div>
		</header>
	);
}
