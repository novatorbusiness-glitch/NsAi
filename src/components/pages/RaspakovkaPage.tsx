import PageShell from "@/components/layout/PageShell";
import "@/styles/raspakovka.css";

const TG = "https://t.me/Ilya_novator";

export default function RaspakovkaPage() {
	return (
		<PageShell>
			<div className="w rk-hero">
				<p className="page-badge">
					<span className="bdot" />
					Разовая сессия · 60–90 минут
				</p>
				<h1 className="page-h1">Архитектура твоего цифрового отдела за одну сессию</h1>
				<p className="page-sub">
					Не разговор «про AI вообще», а рабочая сессия: разворачиваем твой workspace, ставим
					AI-директора и до 5 AI-сотрудников под твою нишу, ставишь первую задачу до конца звонка.
					Уходишь не с идеей, а с работающим первым контуром и картой, что делать дальше.
				</p>
				<div className="rk-price-row">
					<span className="rk-price">25 000 ₽</span>
					<span className="rk-price-note">разово · онлайн · я лично провожу сессию</span>
				</div>
				<p className="rk-value-note">
					Рабочий контур остаётся твоим в любом случае — даже если решишь не продолжать.
					Платишь не за разговор, а за готовый результат на руках.
				</p>
				<div className="rk-acts">
					<a className="btn btn-p" href={TG} target="_blank" rel="noopener noreferrer">
						Записаться →
					</a>
					<a className="btn btn-s" href="/consulting">
						Сравнить с полным внедрением
					</a>
				</div>
			</div>

			<section className="w rk-section">
				<h2 className="rk-section-h2">Что происходит на сессии</h2>
				<div className="rk-grid">
					<div className="rk-card">
						<div className="rk-card-num">01</div>
						<div className="rk-card-title">Разворачиваем workspace</div>
						<div className="rk-card-text">
							Живьём, на звонке: заводим твой личный кабинет NCAi, подключаем панель, где дальше
							будут видны задачи, клиенты и финансы.
						</div>
					</div>
					<div className="rk-card">
						<div className="rk-card-num">02</div>
						<div className="rk-card-title">Собираем AI-команду под нишу</div>
						<div className="rk-card-text">
							AI-директор и до 5 AI-сотрудников с ролями под твой бизнес — не шаблон, а конкретная
							расстановка: кто за разработку, кто за маркетинг, кто за контент и финансы.
						</div>
					</div>
					<div className="rk-card">
						<div className="rk-card-num">03</div>
						<div className="rk-card-title">Ставим первую задачу</div>
						<div className="rk-card-text">
							Не в теории — реальная задача из твоего бизнеса уходит в работу до конца сессии.
							Ты видишь, как это работает, а не веришь на слово.
						</div>
					</div>
				</div>
			</section>

			<section className="w rk-section">
				<h2 className="rk-section-h2">С чем ты уходишь</h2>
				<div className="rk-grid">
					<div className="rk-card">
						<div className="rk-card-num">→</div>
						<div className="rk-card-title">Рабочий первый контур</div>
						<div className="rk-card-text">
							Не макет и не презентация — настоящий workspace с настроенной AI-командой, который
							можно продолжать использовать самостоятельно.
						</div>
					</div>
					<div className="rk-card">
						<div className="rk-card-num">→</div>
						<div className="rk-card-title">Карта приоритетов</div>
						<div className="rk-card-text">
							Какой из 4 отделов (разработка, маркетинг, контент, финансы) тебе критичен в первую
							очередь, а что можно подключить позже.
						</div>
					</div>
					<div className="rk-card">
						<div className="rk-card-num">→</div>
						<div className="rk-card-title">Дорожная карта на 30 дней</div>
						<div className="rk-card-text">
							Понятный план: что нужно сделать, чтобы дойти от сегодняшней сессии до полностью
							переданного руля — своими силами или вместе со мной.
						</div>
					</div>
				</div>

				<div className="rk-bridge">
					<div className="rk-bridge-label">Если решишь продолжить</div>
					<p className="rk-bridge-text">
						Эта сессия — точная копия первого шага полного внедрения («Распаковка 60–90 минут» из{" "}
						<a href="/consulting" style={{ color: "var(--a)" }}>
							/consulting
						</a>
						). Если после неё решишь пройти все 30 дней до передачи руля —{" "}
						<b>25 000 ₽ засчитываются в стоимость внедрения</b>: доплачиваешь 225 000 ₽ вместо
						полных 250 000 ₽. Ничего не платишь дважды за одно и то же.
					</p>
				</div>
			</section>

			<section className="w rk-section">
				<h2 className="rk-section-h2">Где эта сессия в общей цепочке</h2>
				<div className="rk-flow">
					<span className="rk-flow-step">Книга «Нейро-Воронка» · бесплатно</span>
					<span className="rk-flow-arr">→</span>
					<span className="rk-flow-step">Telegram-канал · контент</span>
					<span className="rk-flow-arr">→</span>
					<span className="rk-flow-step act">Эта сессия · 25 000 ₽</span>
					<span className="rk-flow-arr">→</span>
					<span className="rk-flow-step">Внедрение NCAi · 30 дней</span>
				</div>
			</section>

			<section className="w rk-section">
				<h2 className="rk-section-h2">«Да, но...»</h2>
				<div className="rk-obj">
					<div className="rk-obj-q">Это же просто консультация?</div>
					<div className="rk-obj-a">
						Нет — консультация заканчивается советами. Здесь к концу звонка у тебя настроенный
						workspace, AI-команда и реальная задача уже в работе. Разговор — только на постановку
						контекста в начале.
					</div>
				</div>
				<div className="rk-obj">
					<div className="rk-obj-q">А если пойму, что мне это не нужно?</div>
					<div className="rk-obj-a">
						Тогда у тебя всё равно остаётся рабочий первый контур и понимание, что именно
						автоматизировать в первую очередь — этого достаточно, чтобы двигаться дальше
						самостоятельно.
					</div>
				</div>
				<div className="rk-obj">
					<div className="rk-obj-q">Почему не сразу полное внедрение?</div>
					<div className="rk-obj-a">
						Потому что 250 000 ₽ — решение, к которому логично прийти, увидев систему своими
						глазами, а не по описанию на сайте. Эта сессия — способ увидеть до того, как решаться
						на всё.
					</div>
				</div>
			</section>

			<section className="rk-final">
				<h2>Готов увидеть свой цифровой отдел за одну сессию?</h2>
				<p>60–90 минут, дальше — рабочий контур в твоих руках.</p>
				<div className="rk-acts">
					<a className="btn btn-p" href={TG} target="_blank" rel="noopener noreferrer">
						Записаться на сессию →
					</a>
				</div>
			</section>
		</PageShell>
	);
}
