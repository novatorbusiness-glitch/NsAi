"use client";

import { useEffect } from "react";

export default function Offer() {
	useEffect(() => {
		const root = document.getElementById("offer");
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
		<section id="offer">
			<div className="w">
				<div className="ofin">
					<span className="lb rv offer-label">Оффер</span>
					<h2 className="ofh2 rv d1">
						Купите мои мозги
						<br />
						на 2-3 месяца
					</h2>
					<p className="ofsub rv d2">
						Я вхожу в ваш проект - работаю вместе с командой, строю систему, передаю знания.
					</p>

					<div className="ofcard rv d2">
						<p className="offer-meta-label">Что входит в работу</p>
						<div className="ofgrid">
							<div className="ofit">
								<span className="ofck">✓</span>
								<div className="ofitx">
									Упаковка проекта
									<span>Стратегия, смыслы, позиционирование - с нуля или аудит существующего</span>
								</div>
							</div>
							<div className="ofit">
								<span className="ofck">✓</span>
								<div className="ofitx">
									Сайт через лайф-кодинг
									<span>Каждое решение у вас на глазах. Команда понимает как это работает</span>
								</div>
							</div>
							<div className="ofit">
								<span className="ofck">✓</span>
								<div className="ofitx">
									Маркетинговое приложение
									<span>AI-инструмент под вашу специфику</span>
								</div>
							</div>
							<div className="ofit">
								<span className="ofck">✓</span>
								<div className="ofitx">
									Технический стек под ключ
									<span>Деплой, интеграции, аналитика</span>
								</div>
							</div>
							<div className="ofit">
								<span className="ofck">✓</span>
								<div className="ofitx">
									AI-агенты в процессы
									<span>Не чат-боты - реальные системы решений</span>
								</div>
							</div>
							<div className="ofit">
								<span className="ofck">✓</span>
								<div className="ofitx">
									Передача и документация
									<span>Полная автономия команды</span>
								</div>
							</div>
						</div>

						<div className="ofmeta">
							<div>
								<div className="ofml">Формат</div>
								<div className="ofmv">Сессии + асинхрон</div>
							</div>
							<div>
								<div className="ofml">Длительность</div>
								<div className="ofmv">2-3 месяца</div>
							</div>
							<div>
								<div className="ofml">Мест сейчас</div>
								<div className="ofmv">1-2 проекта</div>
							</div>
						</div>
					</div>

					<div className="ofcta rv d3">
						<a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" className="bp offer-primary-link">
							Написать в Telegram
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
						<a href="/book" className="bs">
							Читать книгу бесплатно
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
