// Перенесено из прототипа 13.10.2026.
export default function Compare() {
	return (
		<>
			<section id="compare" className="alt compare">
			<div className="wrap">
			<div className="section-head">
			<h2>Сколько времени и денег до результата</h2>
			<p className="lead">Сравнение с привычными вариантами. Цены студий и разработчиков взяты из открытых прайсов осенью 2026 года.</p>
			</div>
			<div className="bars" role="img" aria-label="Срок до первой рабочей версии: студия 3–5 месяцев, опыт и AI-инструменты 3 недели">
			<p className="lbl">Срок до первой рабочей версии · меньше значит лучше</p>
			<div className="bar-row"><span className="bn">Студия</span><span className="bt"><i style={{ width: "100%" }}></i></span><b>3–5 месяцев</b></div>
			<div className="bar-row me"><span className="bn">Опыт + AI-инструменты</span><span className="bt"><i style={{ width: "18%" }}></i></span><b>3 недели</b></div>
			<p className="cap">3 недели ушло на основу моего продукта GAZE. Срок для вашей задачи будет понятен после чертежа.</p>
			</div>
			<div className="grid g3 cmp">
			<div className="card"><p className="lbl">Студия</p><h3>от 0,26 до 4,4 млн ₽</h3><p>Первая версия за 3–5 месяцев. Отдельная проработка до разработки стоит от 120 000 ₽ до миллиона и обычно продаётся вместе с их же разработкой.</p></div>
			<div className="card"><p className="lbl">Разработчик на почасовке</p><h3>от 160 000 ₽ в месяц</h3><p>Соберёт ровно то, что написано в задании. Без дизайна и без человека, который думает, кому продукт нужен и на чём он заработает.</p></div>
			<div className="card me"><p className="lbl">Со мной</p><h3>от 40 000 ₽ за первый шаг</h3><p>Тест-драйв за 3–4 дня покажет, что делать. Чертёж с прототипом за 2–3 недели, от 120 000 ₽, и стоимость тест-драйва входит в него. Дальше строим уже проверенное.</p></div>
			</div>
			<p className="cap">Источники цен и подробный расчёт в статье <a href="/blog/skolko-stoit-mvp">«Сколько стоит MVP в 2026 году»</a>.</p>
			</div>
			</section>
		</>
	);
}
