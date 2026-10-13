"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";
import { common } from "@content/pages/common";
import BrandMark from "@/components/ui/BrandMark";

// Шапка: значок и имя, три пункта меню, кнопка «Начать с одной задачи»; на телефоне — «Написать» и меню.
export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="top">
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
