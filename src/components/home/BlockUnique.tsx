"use client";

import { useEffect } from "react";

export default function BlockUnique() {
	useEffect(() => {
		const root = document.getElementById("unique");
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
		<section id="unique">
			<div className="w">
				<div className="uw">
					<div>
						<div className="ugh rv">01</div>
						<span className="lb rv d1">Уникальность</span>
						<h2 className="uh2 rv d1">
							Я не строю маркетинг.
							<br />
							Я строю системы,
							<br />
							которые его делают.
						</h2>
						<p className="up rv d2">
							Пока агентства пишут отчеты, а консультанты строят презентации - <strong>я работаю
							рядом с вашей командой</strong>. Каждое решение в реальном времени. Каждая строка
							кода - с объяснением зачем.
						</p>
						<p className="up rv d2">
							Когда ухожу - у вас <strong>не зависимость от подрядчика</strong>. Работающая система
							и команда, которая понимает как она устроена.
						</p>
					</div>

					<div className="rv d2">
						<div className="ucmp">
							<div className="urow">
								<div className="uchead bad">Обычный подрядчик</div>
								<div className="uchead good">NcAi</div>
							</div>

							<div className="urow">
								<div className="uc bad">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path d="M1 1l9 9M10 1L1 10" stroke="#e84040" strokeWidth="1.5" strokeLinecap="round" />
									</svg>
									Черный ящик. Результат без объяснений
								</div>
								<div className="uc good">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path
											d="M1 5.5l3 3L10 2"
											stroke="#FFD000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Лайф-кодинг: каждое решение на ваших глазах
								</div>
							</div>

							<div className="urow">
								<div className="uc bad">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path d="M1 1l9 9M10 1L1 10" stroke="#e84040" strokeWidth="1.5" strokeLinecap="round" />
									</svg>
									AI прикручен сверху - ChatGPT для текстов
								</div>
								<div className="uc good">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path
											d="M1 5.5l3 3L10 2"
											stroke="#FFD000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									AI - несущая архитектура с первой строки
								</div>
							</div>

							<div className="urow">
								<div className="uc bad">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path d="M1 1l9 9M10 1L1 10" stroke="#e84040" strokeWidth="1.5" strokeLinecap="round" />
									</svg>
									Ушел - все встало. Знания у подрядчика
								</div>
								<div className="uc good">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path
											d="M1 5.5l3 3L10 2"
											stroke="#FFD000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Цель - уйти и не быть нужным. Система остается
								</div>
							</div>

							<div className="urow">
								<div className="uc bad">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path d="M1 1l9 9M10 1L1 10" stroke="#e84040" strokeWidth="1.5" strokeLinecap="round" />
									</svg>
									«Так принято», «у конкурентов так»
								</div>
								<div className="uc good">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
										<path
											d="M1 5.5l3 3L10 2"
											stroke="#FFD000"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Нейромаркетинг + данные. Все объяснено
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
