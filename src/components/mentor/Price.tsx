// Перенесено из прототипа 13.10.2026.
export default function Price() {
	return (
		<>
			<section id="price" className="band">
			<div className="wrap split">
			<div className="head">
			<h2>Сколько стоит</h2>
			<p className="price-big">80 000 ₽<small>в месяц</small></p>
			</div>
			<div>
			<p className="lead" style={{ marginTop: "0" }}>Платите за месяц вперёд, и идём дальше. Фиксированного срока нет. Обычно путь занимает около двух месяцев, а если не успели, оплачиваете следующий месяц и продолжаете с того же места.</p>
			<p className="sub">В цену входят встречи, связь в Telegram, инструкции и проверка каждого этапа, а подписки и сервисы для проекта оплачиваются отдельно.</p>
			<p className="sub">Одновременно я веду не больше двух учеников и беру одного нового в месяц. Поэтому старт идёт по очереди.</p>
			<a className="btn p" href="https://t.me/Ilya_novator" target="_blank" rel="noopener">Записаться на разговор</a>
			</div>
			</div>
			</section>
		</>
	);
}
