"use client";

import { useEffect } from "react";

export default function BlockTrust() {
	useEffect(() => {
		const root = document.getElementById("trust");
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
		<section id="trust">
			<div className="w">
				<span className="lb rv">Доверие</span>
				<div className="tlay">
					<div>
						<div className="tquote rv">
							<p className="tqtx">
								Я прошел обе эры. Строил маркетинговые системы до ChatGPT - и строю сейчас.
								Понимаю что изменилось, а что осталось неизменным. Нейробиология принятия
								решений не поменялась. Поменялась скорость и стоимость реализации.
							</p>
							<div className="tqau">- Основатель NcAi</div>
						</div>

						<div className="eras rv d2">
							<div className="erastit">Две эры - одна система мышления</div>
							<div className="erasrow">
								<div className="erl">
									<div className="erlbl">Классическая эра</div>
									300+ кейсов: воронки, лендинги, Email, запуски, SEO
								</div>
								<div className="erarr">→</div>
								<div className="err">
									<div className="erlbl">AI-эра</div>
									AI-системы, автоматизация, live-кодинг, агенты
								</div>
							</div>
						</div>
					</div>

					<div className="tpts rv d2">
						<div className="tpt">
							<div className="tpico">📖</div>
							<div>
								<div className="tptit">Книга как доказательство</div>
								<p className="tptx">
									30 подглав - задокументированная методология. Читая книгу, видите как я думаю
									- до принятия решения о работе.
								</p>
							</div>
						</div>

						<div className="tpt">
							<div className="tpico">⚡</div>
							<div>
								<div className="tptit">Лайф-кодинг - никаких черных ящиков</div>
								<p className="tptx">
									Весь процесс у вас на глазах: экран, код, решения в реальном времени. Понимаете
									как работает - не только что получили.
								</p>
							</div>
						</div>

						<div className="tpt">
							<div className="tpico">🎯</div>
							<div>
								<div className="tptit">300 кейсов до AI + 3 после</div>
								<p className="tptx">
									Две эры - два набора инструментов. Понимание обеих изнутри. Разница - не в
									технологии, а в скорости.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
