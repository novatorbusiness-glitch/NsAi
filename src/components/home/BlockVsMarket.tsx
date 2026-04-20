"use client";

import { useEffect } from "react";

export default function BlockVsMarket() {
	useEffect(() => {
		const root = document.getElementById("vsmarket");
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
		<section id="vsmarket">
			<div className="w">
				<span className="lb rv">Сравнение</span>
				<h2 className="sh2 rv d1">
					Как делают все.
					<br />
					Как делаю я.
				</h2>

				<div className="vstable-wrap rv d2">
					<div className="vstable">
						<div className="vshead">
							<div className="vsh cr">Критерий</div>
							<div className="vsh th">Агентства / фрилансеры</div>
							<div className="vsh me2">→ NcAi</div>
						</div>

						<div className="vsrow">
							<div className="vsc cr">Прозрачность</div>
							<div className="vsc th">Черный ящик. Результат через N недель</div>
							<div className="vsc me">Лайф-кодинг: каждое решение у вас на глазах</div>
						</div>

						<div className="vsrow">
							<div className="vsc cr">AI в работе</div>
							<div className="vsc th">ChatGPT для текстов. Зовут «AI-автоматизацией»</div>
							<div className="vsc me">AI - несущая архитектура с первой строки, не надстройка</div>
						</div>

						<div className="vsrow">
							<div className="vsc cr">Результат</div>
							<div className="vsc th">Набор задач без системной логики</div>
							<div className="vsc me">Механизм с логикой, метриками и документацией</div>
						</div>

						<div className="vsrow">
							<div className="vsc cr">После ухода</div>
							<div className="vsc th">Без нас не поддержать - ретейнер навсегда</div>
							<div className="vsc me">Команда понимает. Развивайте сами или с кем угодно</div>
						</div>

						<div className="vsrow">
							<div className="vsc cr">Обоснование</div>
							<div className="vsc th">«Нам кажется», «у конкурентов так»</div>
							<div className="vsc me">Нейромаркетинг + данные. Каждое решение объяснено</div>
						</div>

						<div className="vsrow">
							<div className="vsc cr">Скорость</div>
							<div className="vsc th">3-6 мес на сайт. Год на «маркетинг»</div>
							<div className="vsc me">MVP за 2-3 недели. Система за 2-3 месяца</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
