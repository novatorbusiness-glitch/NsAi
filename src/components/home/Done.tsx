// Перенесено из прототипа 13.10.2026.
export default function Done() {
	return (
		<>
			<section id="done" className="alt done">
			<div className="wrap">
			<div className="section-head"><h2>Что я уже сделал</h2></div>
			<div className="grid g3 wins">
			<div className="card win"><div className="big">ноябрь</div><div className="bl">старт продаж</div><img className="wlogo" src="/images/site/okidelo-logo-h.svg" alt="OkiDelo" width={380} height={100} /><h3>OkiDelo: AI-отдел по подписке для малого бизнеса</h3><p>С ним я прошёл весь путь, который предлагаю вам: исследование, чертёж, экономика, прототип. Старт продаж в ноябре–декабре.</p></div>
			<div className="card win"><div className="big">3 недели</div><div className="bl">основа, один</div><h3>GAZE: платформа для мастеров красоты, которая возвращает клиентов</h3><p>Сервис в Telegram. Основу я собрал один, за три недели. Работает у практикующего мастера, моей жены, и уже вернул ей десять клиенток.</p></div>
			<div className="card win"><div className="big">дни</div><div className="bl">а не месяцы</div><h3>Vlinx: трекер прогресса</h3><p>Дневник, графики и учёт питания. Собрал за несколько дней, чтобы отточить скорость и метод.</p></div>
			</div>
			<div className="agency">
			<div className="ag-text"><h3>А до этого пять лет я строил системы продаж для клиентов</h3><p>Моя команда делала то, через что шли деньги. Результат общий: мы отвечали за систему, а клиенты за продукт, контент и рекламу.</p></div>
			<div className="ag-num"><div><b>17 млн ₽</b><span>за 8 месяцев в одном проекте</span></div><div><b>3 → 30</b><span>филиалов сети в другом</span></div></div>
			</div>
			<p style={{ marginTop: "22px" }}><a className="btn s" href="/keisy">Все кейсы →</a></p>
			</div>
			</section>
		</>
	);
}
