// Перенесено из прототипа 13.10.2026.
export default function Hero() {
	return (
		<>
			<section className="hero">
			<div className="wrap hero-grid">
			<div>
			<p className="kicker">Кейсы · Илья Новицкий</p>
			<h1>Четыре продукта за полгода и пять лет систем продаж до них</h1>
			<p className="lead">С апреля 2026 года я собрал четыре продукта: от платформы для мастеров красоты до AI-отдела для малого бизнеса. Быстро выходит за счёт опыта и AI-инструментов: опыт подсказывает, что строить, инструменты ускоряют сборку.</p>
			<p className="sub">А до этого пять лет моя команда строила системы продаж для клиентов. В одном проекте это дало 17 млн ₽ за 8 месяцев, в другом помогло сети вырасти с 3 до 30 филиалов. Результат там общий. Мы отвечали за систему, а клиенты за продукт, контент и рекламу.</p>
			<a className="btn p" href="https://t.me/Ilya_novator" target="_blank" rel="noopener">Начать с одной задачи</a>
			</div>
			<div className="result-viz" aria-label="Схема: продукт и продажи вместе дают деньги бизнесу">
			<div className="flow"><p className="lbl">Продукт</p><div className="fl"><span>Идея</span><span className="ar">→</span><span>Чертёж</span><span className="ar">→</span><span>Прототип</span><span className="ar">→</span><span>Запуск</span></div></div>
			<div className="flow"><p className="lbl">Продажи</p><div className="fl"><span>Трафик</span><span className="ar">→</span><span>Заявка</span><span className="ar">→</span><span>Оплата</span><span className="ar">→</span><span>Повторная покупка</span></div></div>
			<div className="rv-join" aria-hidden="true"><i></i></div>
			<div className="rv-money"><p className="lbl">Вместе дают</p><b>Деньги бизнеса</b></div>
			<div className="rv-proof"><span>3 → 30 филиалов сети</span><span>300 заявок в месяц</span><span>+10 вернувшихся клиенток</span></div>
			<p className="cap">Результаты из кейсов ниже. Продукт без продаж не окупается, продажи без продукта нечего продавать.</p>
			</div>
			</div>
			</section>
		</>
	);
}
