import DayfeedAnimation from "./DayfeedAnimation";
// Перенесено из прототипа 13.10.2026.
export default function Hero() {
	return (
		<>
			<section className="hero">
			<div className="wrap hero-grid">
			<div>
			<div className="role">
			<p className="kicker">Илья Новицкий · маркетинг, продукт и автоматизация</p>
			<span className="pill">Уровень директора по маркетингу, без найма в штат</span>
			</div>
			<h1>Один человек вместо отдела маркетинга и пяти подрядчиков</h1>
			<p className="lead">Сайт, контент, продукт, автоматизация и аналитика у одного специалиста. Вам не нужно собирать команду и сводить подрядчиков: пять лет опыта подсказывают, что строить, а AI-инструменты помогают сделать это за дни, а не месяцы. Начинаем с одной задачи: за 3–4 дня станет ясно, что делать и в каком порядке.</p>
			<div className="cta-row">
			<a className="btn p" href="https://t.me/Ilya_novator" target="_blank" rel="noopener">Начать с одной задачи</a>
			<a className="btn s" href="#how">Как мы работаем</a>
			</div>
			<p className="promise">Быстрее · Дешевле · Под одну ответственность</p>
			<p className="under">Тест-драйв: 40 000 ₽ · 3–4 дня · разбор остаётся у вас</p>
			</div>
			<div className="dayfeed" aria-label="Что сделано за два дня, 6–7 октября">
			<div className="df-bar"><i></i><i></i><i></i><span>6–7 октября · что сделано за два дня</span><b className="df-live">сделано</b></div>
			<ul className="df-list">
			<li><span className="df-who">Исследование</span><span className="df-task">Разобрал <b>1 001 комментарий</b> аудитории конкурентов → 9 главных болей клиентов их же словами</span><span className="df-st"></span><i className="df-prog"></i></li>
			<li><span className="df-who">Продажи</span><span className="df-task">Поднял <b>историю продаж</b> агентства → за что клиенты платили</span><span className="df-st"></span><i className="df-prog"></i></li>
			<li><span className="df-who">Тексты</span><span className="df-task">Написал и утвердил <b>13 блоков</b> главной нового сайта</span><span className="df-st"></span><i className="df-prog"></i></li>
			<li><span className="df-who">Прототип</span><span className="df-task">Собрал кабинет OkiDelo экран за экраном до <b>кликабельной версии</b></span><span className="df-st"></span><i className="df-prog"></i></li>
			<li><span className="df-who">Нейминг</span><span className="df-task">Выбрал имя продукту: <b>OkiDelo</b>, домены проверены</span><span className="df-st"></span><i className="df-prog"></i></li>
			<li className="df-coord"><span className="df-who">План</span><span className="df-task">Свёл всё в <b>один план</b>, у каждой цифры источник</span><span className="df-st"></span><i className="df-prog"></i></li>
			</ul>
			<div className="df-foot"><span>Команде из аналитика, копирайтера, дизайнера и разработчика на это понадобились бы недели. Здесь хватило двух дней: опыт подсказывает, что делать, AI-инструменты берут черновую работу</span><a href="/keisy#system">Как это устроено →</a></div>
			</div>
			</div>
			<div className="wrap">
			<div className="strip s3">
			<div><span className="num">5 лет</span><small>своё агентство, только за последние 3,5 года 631 успешная сделка</small></div>
			<div><span className="num">4</span><small>продукта собрал сам с апреля 2026 года</small></div>
			<div><span className="num">3 недели</span><small>на основу приложения, в одиночку</small></div>
			</div>
			</div>
			</section>
			<DayfeedAnimation />
		</>
	);
}
