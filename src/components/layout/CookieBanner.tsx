"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

const KEY = "cookie-choice"; // "1" — принять все, "0" — только необходимые

// Метрика (с вебвизором) загружается только после «Принять все». Выбор запоминается.
function loadMetrika() {
	const w = window as unknown as Record<string, unknown>;
	if (w.__ymLoaded) return;
	w.__ymLoaded = true;
	const id = site.metrikaId;
	// стандартный загрузчик Метрики
	(function (m: any, e: Document, t: string, r: string, i: string) {
		m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
		m[i].l = Date.now();
		const k = e.createElement(t) as HTMLScriptElement;
		const a = e.getElementsByTagName(t)[0];
		k.async = true;
		k.src = r;
		a.parentNode!.insertBefore(k, a);
	})(window, document, "script", `https://mc.yandex.ru/metrika/tag.js?id=${id}`, "ym");
	(window as any).ym(id, "init", { ssr: true, webvisor: true, clickmap: true, referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });
}

export default function CookieBanner() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		let v: string | null = null;
		try { v = localStorage.getItem(KEY); } catch {}
		if (v === "1") loadMetrika();
		else if (v === null) setShow(true);
	}, []);
	const choose = (v: "1" | "0") => {
		try { localStorage.setItem(KEY, v); } catch {}
		if (v === "1") loadMetrika();
		setShow(false);
	};
	if (!show) return null;
	return (
		<div className="cookie" id="cookie">
			<p>
				Я использую необходимые cookie, чтобы сайт работал, а с вашего согласия ещё и cookie Яндекс Метрики, чтобы видеть, как люди пользуются сайтом. <Link href="/consent">Согласие</Link> · <Link href="/privacy">Политика</Link>
			</p>
			<button className="btn p" onClick={() => choose("1")}>Принять все</button>
			<button className="btn s" onClick={() => choose("0")}>Только необходимые</button>
		</div>
	);
}
