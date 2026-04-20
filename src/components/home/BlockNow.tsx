"use client";

import { useEffect } from "react";

export default function BlockNow() {
	useEffect(() => {
		const root = document.getElementById("now");
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
		<section id="now">
			<div className="w">
				<span className="lb rv">Почему сейчас</span>
				<h2 className="sh2 rv d1">
					Окно не закроется
					<br />
					завтра. Но закроется.
				</h2>
				<div className="ngrid">
					<div className="ncard rv">
						<div className="nnum">01</div>
						<div className="ntit">AI меняет стоимость входа</div>
						<p className="ntx">
							Инфраструктура, которая раньше стоила 3М и полгода, сегодня строится за 3
							недели. Через год это станет стандартом. Сейчас - преимущество.
						</p>
					</div>
					<div className="ncard rv d1">
						<div className="nnum">02</div>
						<div className="ntit">Каждый день без системы считается</div>
						<p className="ntx">
							Пока воронка не работает - блог не растет, заявки не поступают, база не
							прогревается. Это не страшно. Но это считается.
						</p>
					</div>
					<div className="ncard rv d2">
						<div className="nnum">03</div>
						<div className="ntit">Первые получают больше</div>
						<p className="ntx">
							В любой нише первые 20% компаний с AI-системами занимают позиции, которые
							потом очень дорого отвоевывать у конкурентов.
						</p>
					</div>
				</div>

				<div className="ntl rv d3">
					<div className="ntli">
						<div className="ntldot soon">
							<span className="ntly">2022</span>
						</div>
						<div className="ntll ntll-muted">Прошлое</div>
						<div className="ntls">Агентства, подрядчики, ручной труд</div>
					</div>
					<div className="ntli">
						<div className="ntldot now">
							<span className="ntly">сейчас</span>
						</div>
						<div className="ntll ntll-accent">Сейчас</div>
						<div className="ntls">AI + человек. Скорость x 10</div>
					</div>
					<div className="ntli">
						<div className="ntldot soon" />
						<div className="ntll ntll-soft">Скоро</div>
						<div className="ntls">AI-системы - новый минимум рынка</div>
					</div>
					<div className="ntli">
						<div className="ntldot late" />
						<div className="ntll ntll-muted">2026+</div>
						<div className="ntls">Без AI - не конкурент</div>
					</div>
				</div>
			</div>
		</section>
	);
}
