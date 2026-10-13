// Перенесено из прототипа 13.10.2026.
export default function Contact() {
	return (
		<>
			<section id="contact" className="final dark">
			<div className="wrap">
			<div className="card final-card">
			<div>
			<h2>С какой задачи начнём?</h2>
			<p className="lead">Возьмите ту, что сейчас мешает больше всего, и напишите пару строк в Telegram или MAX: что хотите сделать и какой бюджет на это закладываете. Я отвечу в течение рабочего дня, и если задача подходит, договоримся о коротком созвоне на 20 минут. На нём разберёмся, подходим ли мы друг другу, а решать задачу начнём уже на тест-драйве.</p>
			<div className="cta-row"><a className="btn p" href="https://t.me/Ilya_novator" target="_blank" rel="noopener">Написать в Telegram</a><a className="btn s" href="https://max.ru/u/f9LHodD0cOJ7sFFvli4XlmkEOONE_hl47mUJ5CDNggHpSU7D9dpD65nPB3w" target="_blank" rel="noopener">Написать в MAX</a></div>
			<p className="under">@Ilya_novator · Тест-драйв: 40 000 ₽ · 3–4 дня</p>
			</div>
			<div className="tg" aria-hidden="true">
			<div className="tg-top"><span className="av">ИН</span><div><b>Илья Новицкий</b><small>обычно отвечает в течение дня</small></div></div>
			<div className="tg-body">
			<div className="msg me">Здравствуйте! Заявки с сайта теряются, хочу понять, что чинить первым. Бюджет около 50 тысяч.<i>10:42</i></div>
			<div className="msg">Добрый день! Задача как раз для тест-драйва. Удобно завтра созвониться на 20 минут?<i>11:05</i></div>
			<div className="msg me">Да, в 12:00 подойдёт<i>11:07 ✓✓</i></div>
			</div>
			<div className="tg-cap">Так обычно выглядит начало</div>
			</div>
			</div>
			</div>
			</section>
		</>
	);
}
