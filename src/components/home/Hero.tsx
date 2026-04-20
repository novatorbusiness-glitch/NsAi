"use client";

import { useEffect } from "react";

export default function Hero() {
	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		document.querySelectorAll<HTMLElement>(".cnt").forEach((el) => {
			const io = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (!entry.isIntersecting) {
							return;
						}

						const target = Number(el.dataset.to ?? "0");
						let start: number | null = null;

						const animate = (time: number) => {
							if (start === null) {
								start = time;
							}

							const progress = Math.min((time - start) / 1500, 1);
							const eased = (1 - Math.pow(1 - progress, 3)) * target;
							el.textContent = String(Math.round(eased));

							if (progress < 1) {
								window.requestAnimationFrame(animate);
							}
						};

						window.requestAnimationFrame(animate);
						io.unobserve(el);
					});
				},
				{ threshold: 0.6 },
			);

			io.observe(el);
			observers.push(io);
		});

		const canvas = document.getElementById("pcanvas") as HTMLCanvasElement | null;
		let frameId = 0;
		let resizeHandler: (() => void) | null = null;
		let visibilityHandler: (() => void) | null = null;
		let heroObserver: IntersectionObserver | null = null;
		let isCanvasActive = false;
		let isHeroVisible = true;

		if (canvas) {
			const ctx = canvas.getContext("2d");

			if (ctx) {
				let w = 0;
				let h = 0;
				const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
				const isMobile = window.matchMedia("(max-width: 900px)").matches;
				const pointCount = isReducedMotion ? 0 : isMobile ? 22 : 32;
				const linkDistance = isMobile ? 90 : 110;
				const linkDistanceSq = linkDistance * linkDistance;
				const linkAlpha = isMobile ? 0.045 : 0.06;

				const points = Array.from({ length: pointCount }, () => ({
					x: Math.random() * 1400,
					y: Math.random() * 900,
					vx: (Math.random() - 0.5) * 0.2,
					vy: (Math.random() - 0.5) * 0.2,
					r: Math.random() * 1.5 + 0.4,
					a: Math.random() * 0.4 + 0.07,
				}));

				const resize = () => {
					w = canvas.width = window.innerWidth;
					h = canvas.height = window.innerHeight;
				};

				resize();
				resizeHandler = resize;
				window.addEventListener("resize", resize, { passive: true });

				const draw = () => {
					if (!isCanvasActive) {
						return;
					}

					ctx.clearRect(0, 0, w, h);

					points.forEach((point) => {
						point.x += point.vx;
						point.y += point.vy;

						if (point.x < 0 || point.x > w) {
							point.vx *= -1;
						}

						if (point.y < 0 || point.y > h) {
							point.vy *= -1;
						}

						ctx.beginPath();
						ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
						ctx.fillStyle = `rgba(255,208,0,${point.a})`;
						ctx.fill();
					});

					for (let i = 0; i < points.length; i += 1) {
						for (let j = i + 1; j < points.length; j += 1) {
							const dx = points[i].x - points[j].x;
							const dy = points[i].y - points[j].y;
							const distanceSq = dx * dx + dy * dy;

							if (distanceSq < linkDistanceSq) {
								const distanceRatio = 1 - distanceSq / linkDistanceSq;
								ctx.beginPath();
								ctx.strokeStyle = `rgba(255,208,0,${linkAlpha * distanceRatio})`;
								ctx.lineWidth = 0.4;
								ctx.moveTo(points[i].x, points[i].y);
								ctx.lineTo(points[j].x, points[j].y);
								ctx.stroke();
							}
						}
					}

					frameId = window.requestAnimationFrame(draw);
				};

				const startCanvas = () => {
					if (isCanvasActive || points.length === 0 || document.hidden || !isHeroVisible) {
						return;
					}

					isCanvasActive = true;
					frameId = window.requestAnimationFrame(draw);
				};

				const stopCanvas = () => {
					if (!isCanvasActive) {
						return;
					}

					isCanvasActive = false;
					window.cancelAnimationFrame(frameId);
				};

				visibilityHandler = () => {
					if (document.hidden) {
						stopCanvas();
						return;
					}

					startCanvas();
				};

				document.addEventListener("visibilitychange", visibilityHandler);

				const heroSection = document.getElementById("hero");
				if (heroSection) {
					heroObserver = new IntersectionObserver(
						(entries) => {
							isHeroVisible = entries.some((entry) => entry.isIntersecting);
							if (isHeroVisible) {
								startCanvas();
							} else {
								stopCanvas();
							}
						},
						{ threshold: 0.08 },
					);
					heroObserver.observe(heroSection);
				}

				startCanvas();
			}
		}

		const boxes = [
			document.getElementById("hb0"),
			document.getElementById("hb1"),
			document.getElementById("hb2"),
			document.getElementById("hb3"),
			document.getElementById("hb4"),
			document.getElementById("hb5"),
		].filter(Boolean) as HTMLElement[];

		let index = 0;
		const highlightInterval = window.setInterval(() => {
			boxes.forEach((box) => box.classList.remove("lit"));

			if (boxes.length > 0) {
				boxes[index % boxes.length].classList.add("lit");
			}

			index += 1;
		}, 1100);

		return () => {
			observers.forEach((observer) => observer.disconnect());
			window.clearInterval(highlightInterval);

			if (frameId) {
				window.cancelAnimationFrame(frameId);
			}

			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
			}

			if (visibilityHandler) {
				document.removeEventListener("visibilitychange", visibilityHandler);
			}

			if (heroObserver) {
				heroObserver.disconnect();
			}
		};
	}, []);

	return (
		<section id="hero">
			<canvas id="pcanvas" />
			<div className="hgrid" />
			<div className="hgl" />

			<div className="hleft">
				<div className="hew">
					<span className="hdot" />Архитектор систем · AI-консалтинг
				</div>

				<h1 className="hh1">
					Я захожу
					<br />
					в проект <em>мозгами.</em>
					<span className="acc">Система остается.</span>
				</h1>

				<p className="hsub">
					Вхожу в команду заказчика - вместе строим маркетинговую систему, AI-автоматизацию и
					продукт. Лайф-кодинг: видите каждое решение. Ухожу - зависимости нет.
				</p>

				<div className="hacts">
					<a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" className="bp">
						Обсудить проект
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
							<path
								d="M2 7h10M8 3.5L11.5 7 8 10.5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
					<a href="#mechanism" className="bs">
						Как это работает
					</a>
				</div>

				<div className="hstats">
					<div className="hstat">
						<div className="hstatn">
							<span className="cnt" data-to="300">
								0
							</span>
							<span className="sfx">+</span>
						</div>
						<div className="hstatl">Кейсов всего</div>
					</div>

					<div className="hstat">
						<div className="hstatn">
							<span className="cnt" data-to="7">
								0
							</span>
							<span className="sfx">лет</span>
						</div>
						<div className="hstatl">В маркетинге и автоматизации</div>
					</div>

					<div className="hstat">
						<div className="hstatn">
							2-3<span className="sfx">мес</span>
						</div>
						<div className="hstatl">Длительность работы</div>
					</div>

					<div className="hstat">
						<div className="hstatn">
							<span className="cnt" data-to="100">
								0
							</span>
							<span className="sfx">%</span>
						</div>
						<div className="hstatl">Прозрачность процесса</div>
					</div>
				</div>
			</div>

			<div className="hright">
				<div className="hcard">
					<div className="hctop">
						<div className="hcdot" />
						<div className="hctitle">
							NcAi · <span>архитектура системы</span>
						</div>
					</div>

					<div className="hsys">
						<div className="hsys-row">
							<div className="hbox lit" id="hb0">
								Нейромаркетинг
								<br />+ смыслы
							</div>
							<div className="harr">→</div>
							<div className="hbox" id="hb1">
								Сайт / Лендинг
								<br />liveCode
							</div>
						</div>

						<div className="hsys-conn">
							<div className="hsys-line" />
						</div>

						<div className="hsys-row">
							<div className="hbox" id="hb2">
								AI-агенты
								<br />автоматизация
							</div>
							<div className="harr">→</div>
							<div className="hbox" id="hb3">
								Воронка
								<br />+ аналитика
							</div>
						</div>

						<div className="hsys-conn">
							<div className="hsys-line" />
						</div>

						<div className="hsys-row">
							<div className="hbox" id="hb4">
								Трафик
								<br />и контент
							</div>
							<div className="harr">→</div>
							<div className="hbox" id="hb5">
								Документация
								<br />→ передача
							</div>
						</div>
					</div>

					<div className="hccap">
						building system.architecture<span className="cur">▌</span>
					</div>
				</div>
			</div>
		</section>
	);
}
