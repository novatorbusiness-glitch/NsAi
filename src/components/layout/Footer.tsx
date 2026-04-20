export default function Footer() {
	return (
		<footer>
			<div className="fwm">NcAi</div>
			<div className="w footer-inner">
				<div className="fgrid">
					<div>
						<div className="flogo">NcAi</div>
						<p className="ftag">
							Архитектор систем. Нейромаркетинг, AI-автоматизация и системное мышление для тех,
							кто строит бизнес серьезно.
						</p>
						<div className="fsoc">
							<a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" className="fsi" aria-label="Telegram">
								✈
							</a>
						</div>
					</div>

					<div>
						<div className="fch">Книга</div>
						<ul className="fls">
							<li>
								<a href="/book/nejromarketing">Гл. 1 - Нейромаркетинг</a>
							</li>
							<li>
								<a href="/book/inzheneriya-sistem">Гл. 2 - Инженерия систем</a>
							</li>
							<li>
								<a href="/book/sintez-doveriya">Гл. 3 - Синтез доверия</a>
							</li>
							<li>
								<a href="/book/trafik">Гл. 4 - Трафик</a>
							</li>
							<li>
								<a href="/book/avtomatizaciya">Гл. 5 - Автоматизация</a>
							</li>
							<li>
								<a href="/book/avtonomnyj-razum">Гл. 6 - Автономный разум</a>
							</li>
						</ul>
					</div>

					<div>
						<div className="fch">Работа</div>
						<ul className="fls">
							<li>
								<a href="#offer">Консалтинг</a>
							</li>
							<li>
								<a href="#cases">Кейсы</a>
							</li>
							<li>
								<a href="#mechanism">Метод</a>
							</li>
							<li>
								<a href="/book">Книга бесплатно</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="fbot">
					<span className="fcp">© 2025 NcAi. Все права защищены.</span>
					<span className="fea">
						Сделано через лайф-кодинг - <span>как обещано</span>
					</span>
				</div>
			</div>
		</footer>
	);
}
