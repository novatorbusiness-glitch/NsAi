// Перенесено из прототипа 13.10.2026.
export default function Contact() {
	return (
		<>
			<section id="contact" className="final dark">
			<div className="wrap">
			<div className="card final-card">
			<div>
			<h2>Напишите в Telegram или MAX</h2>
			<p className="lead">Пара строк о деле или идее: что хотите собрать и есть ли уже своё дело. Отвечу в течение рабочего дня. Если всё подходит, предложу короткий созвон на 20 минут, на котором поймём, подходим ли мы друг другу и с чего начнём.</p>
			<div className="cta-row"><a className="btn p" href="https://t.me/Ilya_novator" target="_blank" rel="noopener">Написать в Telegram</a><a className="btn s" href="https://max.ru/u/f9LHodD0cOJ7sFFvli4XlmkEOONE_hl47mUJ5CDNggHpSU7D9dpD65nPB3w" target="_blank" rel="noopener">Написать в MAX</a></div>
			<p className="under">@Ilya_novator · 80 000 ₽ в месяц</p>
			</div>
			<div className="tg" aria-hidden="true">
			<div className="tg-top"><span className="av">ИН</span><div><b>Илья Новицкий</b><small>обычно отвечает в течение дня</small></div></div>
			<div className="tg-body">
			<div className="msg me">Здравствуйте! У меня студия растяжки, хочу сам собрать онлайн-запись и напоминания клиентам. В коде не разбираюсь.<i>11:20</i></div>
			<div className="msg">Добрый день! Это как раз путь наставничества, код писать не придётся. Созвонимся на 20 минут, покажу, с чего начнём?<i>11:46</i></div>
			<div className="msg me">Давайте, завтра в 12:00<i>11:48 ✓✓</i></div>
			</div>
			<div className="tg-cap">Так обычно выглядит начало</div>
			</div>
			</div>
			</div>
			</section>
		</>
	);
}
