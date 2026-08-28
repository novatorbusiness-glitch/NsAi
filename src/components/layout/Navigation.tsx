"use client";

import { useEffect } from "react";

export default function Navigation() {
	useEffect(() => {
		const nav = document.getElementById("nav");
		const prog = document.getElementById("prog");

		const onScroll = () => {
			if (!nav || !prog) {
				return;
			}

			nav.classList.toggle("sc", window.scrollY > 40);
			const height = document.body.scrollHeight - window.innerHeight;
			const value = height > 0 ? Math.min((window.scrollY / height) * 100, 100) : 0;
			prog.style.width = `${value}%`;
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<>
			<div id="prog" />
			<nav id="nav">
				<div className="ni">
					<a href="/" className="logo">
						NcAi
					</a>
					<ul className="nl">
						<li>
							<a href="#mechanism">Метод</a>
						</li>
						<li>
							<a href="#cases">Кейсы</a>
						</li>
						<li>
							<a href="/book">Книга</a>
						</li>
						<li>
							<a href="/agency-in-a-box">Агентство в коробке</a>
						</li>
					</ul>
					<a href="#offer" className="nc">
						Обсудить проект
					</a>
				</div>
			</nav>
		</>
	);
}
