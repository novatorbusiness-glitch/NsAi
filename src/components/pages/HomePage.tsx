"use client";

import { useEffect } from "react";
import PageShell from "@/components/layout/PageShell";
import HeroSection from "@/components/home/sections/HeroSection";
import ProductsSection from "@/components/home/sections/ProductsSection";
import AboutSection from "@/components/home/sections/AboutSection";
import ClientsSection from "@/components/home/sections/ClientsSection";
import SoloSection from "@/components/home/sections/SoloSection";

/**
 * Главная — собранная из изолированных секций по ТЗ NCAI_SPEC:
 * Hero (4 карточки) → Три продукта → О себе → Работал с → Соло R&D.
 * Общая шапка и подвал — из PageShell (Navigation + Footer).
 */
export default function HomePage() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const w = window as unknown as { __ncaiHomeInited?: boolean };
		if (w.__ncaiHomeInited) return;
		w.__ncaiHomeInited = true;

		// Reveal — прогрессивно: без JS контент виден, с JS плавно появляется
		document.documentElement.classList.add("js");
		if (!("IntersectionObserver" in window)) {
			document.querySelectorAll(".rv").forEach((el) => el.classList.add("on"));
		} else {
			const ro = new IntersectionObserver(
				(es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
				{ threshold: 0.07 },
			);
			document.querySelectorAll(".rv").forEach((el) => ro.observe(el));
			setTimeout(() => {
				document.querySelectorAll(".rv:not(.on)").forEach((el) => {
					const r = el.getBoundingClientRect();
					if (r.top < innerHeight && r.bottom > 0) el.classList.add("on");
				});
			}, 1500);
		}

		// Кастомный курсор (pointer:fine)
		if (window.matchMedia("(pointer:fine)").matches) {
			const cd = document.getElementById("cd");
			const cr = document.getElementById("cr");
			if (cd && cr) {
				let mx = 0, my = 0, rx = 0, ry = 0;
				document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; cd.style.left = mx + "px"; cd.style.top = my + "px"; });
				(function loop() { rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1; cr.style.left = rx + "px"; cr.style.top = ry + "px"; requestAnimationFrame(loop); })();
				document.querySelectorAll("a,button,.pj,.prod-card").forEach((el) => {
					el.addEventListener("mouseenter", () => cr.classList.add("ex"));
					el.addEventListener("mouseleave", () => cr.classList.remove("ex"));
				});
			}
		}

		// Particles canvas
		const cv = document.getElementById("cvs") as HTMLCanvasElement | null;
		if (cv) {
			const canvas = cv;
			const ctx = canvas.getContext("2d");
			if (ctx) {
				let W = 0, H = 0;
				const pts = Array.from({ length: 40 }, () => ({ x: Math.random() * 1400, y: Math.random() * 900, vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18, r: Math.random() * 1.3 + 0.3, a: Math.random() * 0.3 + 0.05 }));
				function rs() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
				rs();
				window.addEventListener("resize", rs, { passive: true });
				(function draw() {
					ctx.clearRect(0, 0, W, H);
					pts.forEach((p) => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = "rgba(255,208,0," + p.a + ")"; ctx.fill(); });
					for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) { const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < 100) { ctx.beginPath(); ctx.strokeStyle = "rgba(255,208,0," + (0.045 * (1 - d / 100)) + ")"; ctx.lineWidth = 0.4; ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); } }
					requestAnimationFrame(draw);
				})();
			}
		}
	}, []);

	return (
		<PageShell>
			<div id="cd" /><div id="cr" />
			<HeroSection />
			<ProductsSection />
			<AboutSection />
			<ClientsSection />
			<SoloSection />
		</PageShell>
	);
}
