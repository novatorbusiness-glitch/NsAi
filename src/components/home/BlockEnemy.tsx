"use client";

import { useEffect } from "react";

export default function BlockEnemy() {
	useEffect(() => {
		const root = document.getElementById("enemy");
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

		return () => {
			revealObserver.disconnect();
		};
	}, []);

	return (
		<section id="enemy">
			<div className="w">
				<div className="elay">
					<div>
						<span className="lb rv">Общий враг</span>
						<h2 className="ebig rv d1">
							Иллюзия
							<br />
							<span className="red">деятельности.</span>
						</h2>
						<p className="ep rv d2">
							Главный враг - не конкуренты и не маленький бюджет. Это когда все заняты,
							деньги тратятся, что-то происходит - <strong>но системы нет</strong>.
						</p>
						<p className="ep rv d2">
							Без архитектуры любые действия - дорогой хаос. Причина не в плохих подрядчиках.
							Причина в отсутствии логики связей между элементами.
						</p>
					</div>
					<div>
						<p className="enemy-label rv">Узнаете себя?</p>
						<div className="esyms">
							<div className="esym rv d1">
								<div className="epu" />
								<p className="estx">Каждый месяц новая гипотеза - и каждый месяц «не зашло»</p>
							</div>
							<div className="esym rv d1">
								<div className="epu" />
								<p className="estx">Подрядчики заняты, но результата не видно</p>
							</div>
							<div className="esym rv d2">
								<div className="epu" />
								<p className="estx">Трафик есть - продаж нет. Непонятно почему</p>
							</div>
							<div className="esym rv d2">
								<div className="epu" />
								<p className="estx">Красивые отчеты, падающая выручка</p>
							</div>
							<div className="esym rv d3">
								<div className="epu" />
								<p className="estx">Постоянное «надо бы пересмотреть стратегию»</p>
							</div>
							<div className="esym rv d3">
								<div className="epu" />
								<p className="estx">Ключевые знания в голове одного человека</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
