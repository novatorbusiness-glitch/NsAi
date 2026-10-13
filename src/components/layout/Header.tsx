"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/config/site";

// Шапка: имя, три пункта меню, кнопка «Начать с одной задачи»; на телефоне — «Написать» и меню.
export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="top">
			<div className="wrap">
				<Link className="brand" href="/">
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
						<span className="full">Начать с одной задачи</span>
						<span className="short">Написать</span>
					</a>
					<button className="burger" aria-label="Меню" aria-expanded={open} onClick={() => setOpen(!open)}>
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
