"use client";

import { useEffect } from "react";

export default function BlockHowI() {
	useEffect(() => {
		const root = document.getElementById("how");
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
		<section id="how">
			<div className="w">
				<div className="hlay">
					<div>
						<span className="lb rv">Принципы</span>
						<h2 className="sh2 rv d1">
							Как я работаю
							<br />
							и как нужно
						</h2>
						<p className="sl rv d2" style={{ marginBottom: "2rem" }}>
							Это не слова для сайта. Правила, которые я не нарушаю ни с одним клиентом.
						</p>
						<div className="hplist">
							<div className="hpr rv">
								<div className="hptit">Система выше задач</div>
								<p className="hptx">
									Каждое действие - элемент механизма. Не набор работ, а связанная
									архитектура с логикой роста.
								</p>
							</div>
							<div className="hpr rv d1">
								<div className="hptit">Объяснение - часть работы</div>
								<p className="hptx">
									Если клиент не понимает почему принято решение - я не выполнил работу.
									Лайф-кодинг - стандарт, не опция.
								</p>
							</div>
							<div className="hpr rv d2">
								<div className="hptit">Цель - уйти</div>
								<p className="hptx">
									Успех работы - когда я больше не нужен. Зависимость клиента от меня -
									это провал, а не бизнес-модель.
								</p>
							</div>
							<div className="hpr rv d3">
								<div className="hptit">Данные, не интуиция</div>
								<p className="hptx">
									Каждое решение обосновано нейромаркетингом или реальными цифрами. «Мне
									кажется» - не аргумент.
								</p>
							</div>
						</div>
					</div>

					<div className="hfor rv d2">
						<div className="hfortit no">Кому это не подойдет</div>
						<div className="hflist">
							<div className="hfno">Хотите красивые слайды без реализации</div>
							<div className="hfno">Команды нет - только вы один</div>
							<div className="hfno">Ждете результат за неделю без участия</div>
							<div className="hfno">Продукт еще не проверен рынком</div>
						</div>
						<div className="hfortit yes">Кому подойдет идеально</div>
						<div className="hflist hflast">
							<div className="hfyes">
								<span>✓</span>Есть работающий продукт, нет системного маркетинга
							</div>
							<div className="hfyes">
								<span>✓</span>Команда 2-10 человек, готовая учиться
							</div>
							<div className="hfyes">
								<span>✓</span>Хотите понимать систему, а не зависеть от нее
							</div>
							<div className="hfyes">
								<span>✓</span>Готовы работать вместе, а не ждать результата
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
