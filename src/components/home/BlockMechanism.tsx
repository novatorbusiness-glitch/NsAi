"use client";

import { useEffect } from "react";

export default function BlockMechanism() {
	useEffect(() => {
		const root = document.getElementById("mechanism");
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

		const steps = Array.from(root.querySelectorAll<HTMLElement>(".tlst"));
		const panels = Array.from(root.querySelectorAll<HTMLElement>(".tlp"));

		const clickHandlers = steps.map((step, i) => {
			const handler = () => {
				steps.forEach((item) => item.classList.remove("act"));
				panels.forEach((panel) => panel.classList.remove("act"));
				step.classList.add("act");
				panels[i]?.classList.add("act");
			};

			step.addEventListener("click", handler);
			return { step, handler };
		});

		return () => {
			revealObserver.disconnect();
			clickHandlers.forEach(({ step, handler }) => step.removeEventListener("click", handler));
		};
	}, []);

	return (
		<section id="mechanism">
			<div className="w">
				<div className="mhead">
					<div>
						<span className="lb rv">Механизм</span>
						<h2 className="sh2 rv d1">
							Как выглядят
							<br />
							2-3 месяца вместе
						</h2>
					</div>
					<div>
						<p className="rv d1 mechanism-intro">
							Не «мы над этим работаем». Конкретные этапы, артефакты, сроки. Каждый шаг - с
							понятным результатом.
						</p>
					</div>
				</div>

				<div className="tltrack rv d2">
					<div className="tlst act" data-s="0">
						<div className="tldt">01</div>
						<div className="tlstit">Аудит</div>
						<div className="tldur">1-2 нед</div>
					</div>
					<div className="tlst" data-s="1">
						<div className="tldt">02</div>
						<div className="tlstit">Фундамент</div>
						<div className="tldur">2-4 нед</div>
					</div>
					<div className="tlst" data-s="2">
						<div className="tldt">03</div>
						<div className="tlstit">Запуск</div>
						<div className="tldur">2-3 нед</div>
					</div>
					<div className="tlst" data-s="3">
						<div className="tldt">04</div>
						<div className="tlstit">Оптимизация</div>
						<div className="tldur">3-4 нед</div>
					</div>
					<div className="tlst" data-s="4">
						<div className="tldt">05</div>
						<div className="tlstit">Передача</div>
						<div className="tldur">1 нед</div>
					</div>
				</div>

				<div className="tlcon rv d3">
					<div className="tlp act">
						<div className="tlpdur">1-2 недели</div>
						<div className="tlptit">Аудит и архитектура системы</div>
						<p className="tlptx">
							Разбираем текущую ситуацию: что есть, что работает, что нет. Проектируем архитектуру
							- воронка, контент, автоматизация. Вы видите карту системы до старта работ.
						</p>
						<div className="tlpdel">
							<span>→</span> Документ архитектуры + карта системы
						</div>
					</div>

					<div className="tlp">
						<div className="tlpdur">2-4 недели</div>
						<div className="tlptit">Строим фундамент вместе</div>
						<p className="tlptx">
							Создаем несущие элементы: сайт, воронка, базовая автоматизация. Все - в прямом эфире
							с командой. Можно остановить, спросить, изменить решение прямо сейчас.
						</p>
						<div className="tlpdel">
							<span>→</span> Работающий MVP системы
						</div>
					</div>

					<div className="tlp">
						<div className="tlpdur">2-3 недели</div>
						<div className="tlptit">Запускаем и смотрим на данные</div>
						<p className="tlptx">
							Первые тесты, первые данные. Настраиваем аналитику, наблюдаем за цифрами, делаем
							первую итерацию. Не слепой запуск - управляемый эксперимент.
						</p>
						<div className="tlpdel">
							<span>→</span> Данные первых 500-1000 пользователей
						</div>
					</div>

					<div className="tlp">
						<div className="tlpdur">3-4 недели</div>
						<div className="tlptit">Оптимизируем по данным</div>
						<p className="tlptx">
							На основе реальных цифр улучшаем конверсию, дорабатываем слабые места, добавляем
							автоматизацию там, где она экономит максимум времени.
						</p>
						<div className="tlpdel">
							<span>→</span> Оптимизированная воронка + отчет по метрикам
						</div>
					</div>

					<div className="tlp">
						<div className="tlpdur">1 неделя</div>
						<div className="tlptit">Передача - вы самостоятельны</div>
						<p className="tlptx">
							Документируем все. Команда понимает каждый элемент. Можете развивать сами или с
							любым разработчиком. Я ухожу - система остается.
						</p>
						<div className="tlpdel">
							<span>→</span> Документация + обучение команды + чеклист поддержки
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
