// Перенесено из прототипа 13.10.2026.
export default function Hero() {
	return (
		<>
			<section className="hero">
			<div className="wrap hero-grid">
			<div>
			<p className="kicker">Наставничество один на один · Илья Новицкий</p>
			<h1>Приложение, сайт или сервис на AI. Соберёте сами, я проведу по шагам</h1>
			<p className="lead">Для своего дела или как навык, на котором потом можно зарабатывать. Это не курс в записи. Мы работаем над вашим проектом: раз в неделю разбираем, что получилось, а между встречами я на связи.</p>
			<p className="sub">Каждый шаг расписан: что делать, чем пользоваться и как понять, что готово. Технические шаги тоже, вплоть до сервера, доступов и подключений, так что опыт программирования не нужен. Вы делаете по инструкции. Где застряли, там подскажу.</p>
			<a className="btn p" href="https://t.me/Ilya_novator" target="_blank" rel="noopener">Записаться на разговор</a>
			<p className="under">80 000 ₽ в месяц · один на один · беру одного нового ученика в месяц</p>
			</div>
			<div className="journey" aria-label="Пример: путь ученика по шагам на пятой неделе">
			<div className="jh"><span>ваш проект · пример пути</span><b>неделя 5</b></div>
			<div className="jbar"><i style={{ width: "50%" }}></i></div>
			<ol><li className="is-done"><span className="jn">0</span><span className="jt">Рабочее пространство</span><span className="js">готово</span></li><li className="is-done"><span className="jn">1</span><span className="jt">Каркас проекта</span><span className="js">готово</span></li><li className="is-done"><span className="jn">2</span><span className="jt">Анализ</span><span className="js">готово</span></li><li className="is-done"><span className="jn">3</span><span className="jt">Архитектура</span><span className="js">готово</span></li><li className="is-now"><span className="jn">4</span><span className="jt">Прототип</span><span className="js">в работе</span></li><li className=""><span className="jn">5</span><span className="jt">Проверка на людях</span><span className="js"></span></li><li className=""><span className="jn">6</span><span className="jt">Сборка с AI</span><span className="js"></span></li><li className=""><span className="jn">7</span><span className="jt">Запуск и первые клиенты</span><span className="js"></span></li></ol>
			<div className="jf"><div><em>встреча</em>четверг, 12:00 · разбор прототипа</div><div><em>Telegram</em>вопрос по шагу 4 · ответ в течение дня</div></div>
			</div>
			</div>
			</section>
		</>
	);
}
