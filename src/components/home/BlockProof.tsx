"use client";

import { useEffect } from "react";

export default function BlockProof() {
	useEffect(() => {
		const root = document.getElementById("proof");
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
		<section id="proof">
			<div className="w">
				<span className="lb rv">Доказательства</span>
				<h2 className="sh2 rv d1">
					Почему это инвестиция,
					<br />
					а не расход
				</h2>
				<p className="sl rv d2">
					Не теория. Кейсы, книга и технологический контур, который уже работает в живых
					проектах.
				</p>

				<div className="fvis rv d2">
					<div className="fvlbl">Три слоя доказательства</div>

					<div className="proof-grid">
						<div className="proof-card">
							<div className="proof-card-title">Кейсы и цифры</div>
							<p className="proof-card-text">
								300+ кейсов до AI и внедрения в новой эре: сайт-воронка, Marketing OS,
								Funnel Builder.
							</p>
						</div>
						<div className="proof-card">
							<div className="proof-card-title">Книга как метод</div>
							<p className="proof-card-text">
								30 подглав с логикой решений: как проектируется система, почему решения
								принимаются именно так, и как это повторить.
							</p>
						</div>
						<div className="proof-card">
							<div className="proof-card-title">Технология под задачу</div>
							<p className="proof-card-text">
								Next.js, React Native, AI-агенты, аналитика и документация: не набор
								инструментов, а рабочая архитектура под рост.
							</p>
						</div>
					</div>

					<hr className="fline" />

					<div className="proof-invest">
						<div className="proof-col">
							<div className="proof-col-title">За что идет инвестиция</div>
							<ul className="proof-list">
								<li>Рост выручки и конверсии, а не просто «новый сайт»</li>
								<li>Скорость запуска: MVP за 2-3 недели</li>
								<li>Передача системы команде, без зависимости</li>
							</ul>
						</div>
						<div className="proof-col">
							<div className="proof-col-title">Что остается после проекта</div>
							<ul className="proof-list">
								<li>Документированная логика воронки и решений</li>
								<li>Понятный технологический контур для масштабирования</li>
								<li>Команда, которая понимает, как поддерживать систему</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="srow rv d3">
					<div className="scard"><div className="snum">×2.1</div><div className="slbl">Рост выручки без роста бюджета</div></div>
					<div className="scard"><div className="snum">-80%</div><div className="slbl">Потерянных лидов после внедрения</div></div>
					<div className="scard"><div className="snum">3 нед</div><div className="slbl">От идеи до рабочего MVP</div></div>
					<div className="scard"><div className="snum">100%</div><div className="slbl">Прозрачность через лайф-кодинг</div></div>
				</div>
			</div>
		</section>
	);
}
