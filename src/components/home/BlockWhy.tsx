"use client";

import { useEffect, useMemo, useState } from "react";

const FUNNEL_CASES = [
	{ values: [1000, 250, 110, 18], labels: ["Трафик", "Лиды", "Интерес", "Продажи"] },
	{ values: [1000, 350, 150, 27], labels: ["Трафик", "Лиды", "Квал.", "Продажи"] },
	{ values: [1000, 300, 130, 22], labels: ["Трафик", "Лиды", "Квал.", "Продажи"] },
	{ values: [1000, 330, 145, 30], labels: ["Трафик", "Лиды", "Интерес", "Продажи"] },
	{ values: [1000, 280, 120, 20], labels: ["Трафик", "Лиды", "Интерес", "Продажи"] },
];

const AVG_CHECK_RUB = 120000;

export default function BlockWhy() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animatedValues, setAnimatedValues] = useState(FUNNEL_CASES[0].values);

	const activeCase = FUNNEL_CASES[activeIndex];

	const lossPercents = useMemo(() => {
		const losses = [0, 1, 2].map((index) => {
			const from = activeCase.values[index];
			const to = activeCase.values[index + 1];
			return Math.round(((from - to) / from) * 100);
		});
		return losses;
	}, [activeCase]);

	const bottleneckIndex = useMemo(() => {
		let maxIndex = 0;
		for (let i = 1; i < lossPercents.length; i += 1) {
			if (lossPercents[i] > lossPercents[maxIndex]) {
				maxIndex = i;
			}
		}
		return maxIndex;
	}, [lossPercents]);

	const closeRate = useMemo(() => {
		return Math.round((animatedValues[3] / animatedValues[0]) * 1000) / 10;
	}, [animatedValues]);

	const estimatedRevenue = useMemo(() => {
		return animatedValues[3] * AVG_CHECK_RUB;
	}, [animatedValues]);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % FUNNEL_CASES.length);
		}, 3200);

		return () => {
			window.clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		const root = document.getElementById("why");
		if (!root) {
			return;
		}

		const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("on");
					}
				});
			},
			{ threshold: 0.08 },
		);

		revealNodes.forEach((node) => revealObserver.observe(node));

		const items = Array.from(root.querySelectorAll<HTMLElement>(".wi"));
		const handlers = items.map((item) => {
			const idx = Number(item.dataset.idx ?? "0");
			const handler = () => {
				setActiveIndex(idx);
			};

			item.addEventListener("click", handler);
			return { item, handler };
		});

		return () => {
			revealObserver.disconnect();
			handlers.forEach(({ item, handler }) => item.removeEventListener("click", handler));
		};
	}, []);

	useEffect(() => {
		const from = animatedValues;
		const to = activeCase.values;
		const start = performance.now();
		const duration = 650;

		let raf = 0;
		const tick = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setAnimatedValues(from.map((value, i) => Math.round(value + (to[i] - value) * eased)));

			if (progress < 1) {
				raf = window.requestAnimationFrame(tick);
			}
		};

		raf = window.requestAnimationFrame(tick);

		return () => {
			window.cancelAnimationFrame(raf);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex]);

	return (
		<section id="why">
			<div className="w">
				<div className="wlay">
					<div>
						<span className="lb rv">Диагностика</span>
						<h2 className="sh2 rv d1">
							Почему
							<br />
							не получается
						</h2>
						<p className="sl rv d2" style={{ marginBottom: 0 }}>
							Причина редко там, где кажется. Нажмите - узнайте диагноз.
						</p>
						<div className="funnelw rv d3">
							<svg className="funnel-svg" viewBox="0 0 280 270" width="100%" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<linearGradient id="fl1" x1="0" y1="0" x2="1" y2="0">
										<stop offset="0%" stopColor="#FFD000" stopOpacity=".85" />
										<stop offset="100%" stopColor="#FFD000" stopOpacity=".3" />
									</linearGradient>
									<linearGradient id="fl2" x1="0" y1="0" x2="1" y2="0">
										<stop offset="0%" stopColor="#FFD000" stopOpacity=".55" />
										<stop offset="100%" stopColor="#FFD000" stopOpacity=".15" />
									</linearGradient>
									<linearGradient id="fl3" x1="0" y1="0" x2="1" y2="0">
										<stop offset="0%" stopColor="#FFD000" stopOpacity=".32" />
										<stop offset="100%" stopColor="#FFD000" stopOpacity=".08" />
									</linearGradient>
									<linearGradient id="fl4" x1="0" y1="0" x2="1" y2="0">
										<stop offset="0%" stopColor="#FFD000" stopOpacity=".16" />
										<stop offset="100%" stopColor="#FFD000" stopOpacity=".04" />
									</linearGradient>
								</defs>
								<path
									className={`fstage ${bottleneckIndex === 0 ? "hot" : ""}`}
									d="M8 8 L272 8 L232 60 L48 60 Z"
									fill="url(#fl1)"
									stroke="rgba(255,208,0,.3)"
									strokeWidth="1"
								/>
								<text
									x="140"
									y="38"
									textAnchor="middle"
									fontFamily="Space Mono,monospace"
									fontSize="9"
									fill="rgba(255,208,0,.7)"
								>
									{`${activeCase.labels[0]} · ${animatedValues[0]} чел`}
								</text>
								<path
									className={`fstage ${bottleneckIndex === 1 ? "hot" : ""}`}
									d="M48 66 L232 66 L202 116 L78 116 Z"
									fill="url(#fl2)"
									stroke="rgba(255,208,0,.2)"
									strokeWidth="1"
								/>
								<text
									x="140"
									y="95"
									textAnchor="middle"
									fontFamily="Space Mono,monospace"
									fontSize="9"
									fill="rgba(255,208,0,.6)"
								>
									{`${activeCase.labels[1]} · ${animatedValues[1]}`}
								</text>
								<path
									className={`fstage ${bottleneckIndex === 2 ? "hot" : ""}`}
									d="M78 122 L202 122 L178 170 L102 170 Z"
									fill="url(#fl3)"
									stroke="rgba(255,208,0,.15)"
									strokeWidth="1"
								/>
								<text
									x="140"
									y="150"
									textAnchor="middle"
									fontFamily="Space Mono,monospace"
									fontSize="9"
									fill="rgba(255,208,0,.5)"
								>
									{`${activeCase.labels[2]} · ${animatedValues[2]}`}
								</text>
								<path
									d="M102 176 L178 176 L160 222 L120 222 Z"
									fill="url(#fl4)"
									stroke="rgba(255,208,0,.1)"
									strokeWidth="1"
								/>
								<text
									x="140"
									y="198"
									textAnchor="middle"
									fontFamily="Space Mono,monospace"
									fontSize="7.4"
									fill="rgba(255,208,0,.4)"
								>
									<tspan x="140" dy="0">{activeCase.labels[3]}</tspan>
									<tspan x="140" dy="9">{`· ${animatedValues[3]}`}</tspan>
								</text>
								<g opacity=".85">
									<line
										x1="232"
										y1="34"
										x2="255"
										y2="34"
										stroke="#e84040"
										strokeWidth="1.5"
										strokeDasharray="3,2"
									/>
									<text
										x="258"
										y="38"
										fontFamily="Space Mono,monospace"
										fontSize="8"
										fill="#e84040"
									>
										{`-${lossPercents[0]}%`}
									</text>
								</g>
								<g opacity=".75">
									<line
										x1="202"
										y1="91"
										x2="225"
										y2="91"
										stroke="#e84040"
										strokeWidth="1.5"
										strokeDasharray="3,2"
									/>
									<text
										x="228"
										y="95"
										fontFamily="Space Mono,monospace"
										fontSize="8"
										fill="#e84040"
									>
										{`-${lossPercents[1]}%`}
									</text>
								</g>
								<g opacity=".65">
									<line
										x1="186"
										y1="146"
										x2="208"
										y2="146"
										stroke="#e84040"
										strokeWidth="1.5"
										strokeDasharray="3,2"
									/>
									<text
										x="212"
										y="150"
										fontFamily="Space Mono,monospace"
										fontSize="7.2"
										fill="#e84040"
									>
										{`-${lossPercents[2]}%`}
									</text>
								</g>
								<text
									x="140"
									y="250"
									textAnchor="middle"
									fontFamily="Space Mono,monospace"
									fontSize="8"
									fill="rgba(255,255,255,.15)"
								>
									где именно теряется - видно в аналитике
								</text>
							</svg>
							<div className="funnel-money">
								<div className="funnel-money-card">
									<div className="funnel-money-label">Конверсия в продажу</div>
									<div className="funnel-money-value">{closeRate.toFixed(1)}%</div>
								</div>
								<div className="funnel-money-card">
									<div className="funnel-money-label">Потенциал выручки</div>
									<div className="funnel-money-value">
										{new Intl.NumberFormat("ru-RU").format(estimatedRevenue)} ₽
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="wdiag rv d2">
						<div className={`wi ${activeIndex === 0 ? "act" : ""}`} data-idx="0">
							<div className="wico">🔍</div>
							<div>
								<div className="wtit">Нет архитектуры - есть набор действий</div>
								<div className="wtx">
									Трафик, лендинг, рассылка - все по отдельности. Между ними нет логики.
									Это не система, это дорогой хаос.
								</div>
							</div>
						</div>
						<div className={`wi ${activeIndex === 1 ? "act" : ""}`} data-idx="1">
							<div className="wico">🧱</div>
							<div>
								<div className="wtit">Копируете чужие воронки</div>
								<div className="wtx">
									Воронка - не шаблон. Это отражение вашей бизнес-логики. Чужая не подходит
									по той же причине, что чужой костюм.
								</div>
							</div>
						</div>
						<div className={`wi ${activeIndex === 2 ? "act" : ""}`} data-idx="2">
							<div className="wico">⚡</div>
							<div>
								<div className="wtit">AI прикручен, а не встроен</div>
								<div className="wtx">
									ChatGPT для текстов - это не автоматизация. Разница как между
									электромобилем и бензиновым с доп. мотором.
								</div>
							</div>
						</div>
						<div className={`wi ${activeIndex === 3 ? "act" : ""}`} data-idx="3">
							<div className="wico">🔌</div>
							<div>
								<div className="wtit">Знания в голове у подрядчика</div>
								<div className="wtx">
									Ушел один человек - все встало. Система должна жить в документации,
									а не в голове исполнителя.
								</div>
							</div>
						</div>
						<div className={`wi ${activeIndex === 4 ? "act" : ""}`} data-idx="4">
							<div className="wico">📊</div>
							<div>
								<div className="wtit">Смотрите не на те метрики</div>
								<div className="wtx">
									Охваты и лайки - витамины. CPL и LTV - лекарства. Оптимизируете
									приятное, а не то что влияет на деньги.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
