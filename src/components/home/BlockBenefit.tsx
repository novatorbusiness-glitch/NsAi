"use client";

import { useEffect } from "react";

export default function BlockBenefit() {
	useEffect(() => {
		const root = document.getElementById("benefit");
		if (!root) {
			return;
		}

		const nodes = Array.from(root.querySelectorAll<HTMLElement>(".rv"));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("on");
					}
				});
			},
			{ threshold: 0.08 },
		);

		nodes.forEach((node) => observer.observe(node));

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section id="benefit">
			<div className="w">
				<span className="lb rv">Выгода</span>
				<h2 className="sh2 rv d1">
					Что меняется
					<br />
					после работы
				</h2>
				<p className="sl rv d2">Не «улучшение показателей». Конкретные трансформации - было / стало.</p>

				<div className="bgrid rv d2">
					<div className="bcard">
						<div className="btag">Маркетинговая система</div>
						<p className="bbf">
							Запускаете рекламу - трафик идет, заявок нет. Непонятно где теряется каждый рубль
						</p>
						<div className="barr">
							<svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
								<path d="M1 4.5h11M8 1l4 3.5L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
							После
						</div>
						<p className="baf">Воронка с аналитикой: видите где теряется каждый рубль и знаете как это починить</p>
					</div>

					<div className="bcard">
						<div className="btag">Операционка</div>
						<p className="bbf">Держите все в голове. Операционка съедает день - на стратегию времени не остается</p>
						<div className="barr">
							<svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
								<path d="M1 4.5h11M8 1l4 3.5L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
							После
						</div>
						<p className="baf">AI-агенты обрабатывают рутину 24/7. Вы занимаетесь только решениями, которые нельзя автоматизировать</p>
					</div>

					<div className="bcard">
						<div className="btag">Зависимость от подрядчиков</div>
						<p className="bbf">Объясняете задачу - получаете не то. Платите снова. Ушел человек - все встало</p>
						<div className="barr">
							<svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
								<path d="M1 4.5h11M8 1l4 3.5L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
							После
						</div>
						<p className="baf">Команда понимает систему изнутри. Развиваете сами или с кем угодно - без зависимости</p>
					</div>
				</div>
			</div>
		</section>
	);
}
