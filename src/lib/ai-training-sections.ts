// Секции страницы /ai-training — по паттерну consulting-sections.ts.
// Nav/mobile-menu/footer больше не дублируются здесь — страница использует
// общий PageShell (см. src/components/pages/AiTrainingPage.tsx).
import { icon } from "./icons";

export const HERO_HTML = `<!-- HERO · ТИЗЕРНЫЙ ХУК -->
<section id="ait-hero">
  <div class="ait-hero-grid"></div>
  <div class="ait-hero-glow"></div>
  <div class="ait-hero-inner">
    <div>
      <div class="ait-hero-badge"><span class="ait-bdot"></span>Обучение AI · 1 на 1 · 1 месяц</div>
      <h1 class="ait-hero-h1">Тебя учили <em>смотреть</em>.<span class="ait-acc">Здесь ты делаешь.</span></h1>
      <p class="ait-hero-sub">Не курс и не лекции. Берём <strong>твой реальный проект</strong> и собираем его на 2 живых сессиях. Плюс разворачиваю рабочее AI-агентство, месяц остаюсь на связи, книга из 111 промптов — в подарок.</p>
      <div class="ait-hero-acts">
        <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Записаться <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#idea" class="bs">Почему это работает</a>
      </div>
      <div class="ait-hero-meta">
        <div class="ait-hm">Формат<span>2 сессии + распаковка</span></div>
        <div class="ait-hm">Длительность<span>1 месяц на связи</span></div>
        <div class="ait-hm">Цена<span>70–80к ₽</span></div>
        <div class="ait-hm">Группа<span>1–2 человека</span></div>
      </div>
    </div>
    <div class="ait-hero-right">
      <div class="ait-hcard">
        <div class="ait-hctop"><div class="ait-hcdot"></div><div class="ait-hctitle">NCAi · <span>твой месяц</span></div></div>
        <div class="ait-htl">
          <div class="ait-htl-item ait-lit">
            <div class="ait-htl-n">1</div>
            <div class="ait-htl-body"><div class="ait-htl-t">Диагностика</div><div class="ait-htl-x">Разбираем проект, фиксируем точку А и карту решения</div></div>
          </div>
          <div class="ait-htl-item">
            <div class="ait-htl-n">2</div>
            <div class="ait-htl-body"><div class="ait-htl-t">2 сессии — собираем</div><div class="ait-htl-x">Live-кодинг на твоём проекте, а не запись вебинара</div></div>
          </div>
          <div class="ait-htl-item">
            <div class="ait-htl-n">+1</div>
            <div class="ait-htl-body"><div class="ait-htl-t">Распаковка агентства</div><div class="ait-htl-x">Рабочая AI-команда в панели, входит в месяц</div></div>
          </div>
          <div class="ait-htl-item">
            <div class="ait-htl-n">30</div>
            <div class="ait-htl-body"><div class="ait-htl-t">Месяц на связи</div><div class="ait-htl-x">+ книга из 111 промптов NCAi в подарок</div></div>
          </div>
        </div>
        <div class="ait-hcap">learning by building<span style="animation:blink 1.1s ease-in-out infinite">▌</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const IDEA_HTML = `<!-- 1 · БОЛЬШАЯ ИДЕЯ -->
<section id="idea" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">Большая идея</span>
    <h2 class="ait-sec-h2 rv d1">Почему у тебя нет своего продукта</h2>
    <p class="ait-sl rv d2">Дело не в лени и не в отсутствии времени. Дело в том, как тебя учили. Ты владелец бизнеса или эксперт: идеи есть, задачи ясны — а продукт так и не собрался.</p>
    <div class="ait-pr-grid">
      <div class="ait-pr rv d1">
        <div class="ait-pr-n">Проблема 1</div>
        <div class="ait-pr-t">Идея есть — старта нет</div>
        <div class="ait-pr-x">Непонятно, с чего начать и чем собирать. Проект живёт в голове, а не на экране.</div>
      </div>
      <div class="ait-pr rv d2">
        <div class="ait-pr-n">Проблема 2</div>
        <div class="ait-pr-t">AI — как чат, а не как сотрудник</div>
        <div class="ait-pr-x">Результат случайный: то получилось, то нет. Системы нет, воспроизвести нечего.</div>
      </div>
      <div class="ait-pr rv d3">
        <div class="ait-pr-n">Проблема 3</div>
        <div class="ait-pr-t">Каждый шаг — через подрядчика</div>
        <div class="ait-pr-x">«Потом разберусь» растягивается на месяцы. Деньги уходят, навык не остаётся.</div>
      </div>
    </div>
    <div class="ait-w-row">
      <div class="ait-w-col rv d2">
        <div class="ait-w-col-tag">Почему так происходит</div>
        <div class="ait-w-li"><span class="ait-w-ico">1</span><span><b>Курсы учат смотреть, а не делать.</b> После вебинара ты зритель, а не исполнитель.</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">2</span><span><b>«Копипаст промптов» даёт иллюзию, а не систему.</b> Чужие запросы не знают твоей задачи.</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">3</span><span><b>Никто не садится рядом с твоим проектом.</b> Менторство «в общем» не ведёт к результату.</span></div>
      </div>
      <div class="ait-w-col rv d3">
        <div class="ait-w-col-tag">Истинные причины</div>
        <div class="ait-w-li"><span class="ait-w-ico">1</span><span><b>Навык не вырос</b> — не было одного собранного руками продукта.</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">2</span><span><b>Уверенность не появилась</b> — не было подтверждения «я могу».</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">3</span><span><b>Результат не пришёл</b> — ты ждал готовое «из коробки», а не строил сам.</span></div>
      </div>
    </div>
    <div class="ait-bigidea rv d2">
      <div class="ait-bigidea-tag">Big idea</div>
      <div class="ait-bigidea-tx">Не «учиться AI вообще» — а собрать свой продукт с помощью AI за месяц. Навык рождается из результата, а не из лекций.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const SUT_HTML = `<!-- 2 · СУТЬ ИДЕИ -->
<section id="sut">
  <div class="w">
    <span class="ait-sec-tag rv">Суть идеи</span>
    <h2 class="ait-sec-h2 rv d1">Почему ChatGPT «в лоб»<br>не собирает твой продукт</h2>
    <p class="ait-sl rv d2">Ты пробовал ChatGPT «в лоб» — получалось вяло. И решил: «мне это не дано». Дело не в тебе. Дело в том, что нейросети дали задачу без структуры.</p>
    <p class="ait-sl rv d2" style="margin-bottom:2.5rem">Модель не знает твоей воронки и твоего бизнеса. Она собирает текст из того, что ты задал. Задал «напиши продающий текст» — получил штамп, который продаёт всем и никому. Нейро-воронка — это система ограничений: крючок → боль → решение → оффер → CTA. Я научу тебя собирать такие тексты и продукты руками.</p>
    <div class="ait-ba-grid rv d2">
      <div class="ait-ba-card ait-ba-before">
        <div class="ait-ba-head">Было</div>
        <div class="ait-ba-line"><span class="ait-ba-x">✕</span>Идея есть, а продукта нет</div>
        <div class="ait-ba-line"><span class="ait-ba-x">✕</span>AI как чат — без системы и воспроизводимого результата</div>
        <div class="ait-ba-line"><span class="ait-ba-x">✕</span>Каждый шаг зависит от подрядчика или «потом разберусь»</div>
      </div>
      <div class="ait-ba-card ait-ba-after">
        <div class="ait-ba-head">Стало</div>
        <div class="ait-ba-line"><span class="ait-ba-ok">✓</span>Работающий продукт: сайт, книга, SaaS или приложение</div>
        <div class="ait-ba-line"><span class="ait-ba-ok">✓</span>Навык: знаешь, какой инструмент когда брать и почему</div>
        <div class="ait-ba-line"><span class="ait-ba-ok">✓</span>Записи всех занятий — пересматриваешь и повторяешь сам</div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const MECHANISM_HTML = `<!-- 3 · УНИКАЛЬНЫЙ МЕХАНИЗМ -->
<section id="mechanism" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">Уникальный механизм</span>
    <h2 class="ait-sec-h2 rv d1">Learning by building: навык остаётся</h2>
    <p class="ait-sl rv d2">Не «смотри запись». Мы собираем твой проект вместе, в моменте. Ты не слушаешь — ты строишь. Как именно расписан месяц по сессиям — в следующем блоке.</p>
    <div class="ait-out-grid rv d3">
      <div class="ait-out-item"><div class="ait-out-num">2</div><div class="ait-out-tx">Живые сессии 1 на 1, лайф-кодинг на твоём проекте</div></div>
      <div class="ait-out-item"><div class="ait-out-num">1</div><div class="ait-out-tx">Рабочее AI-агентство — распаковка NCAi входит в месяц</div></div>
      <div class="ait-out-item"><div class="ait-out-num">111</div><div class="ait-out-tx">Промптов NCAi в подарок</div></div>
      <div class="ait-out-item"><div class="ait-out-num">1 мес</div><div class="ait-out-tx">На связи после сессий, а не «до свидания»</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const PROGRAM_HTML = `<!-- 4 · ПЛАН МЕСЯЦА -->
<section id="program">
  <div class="w">
    <span class="ait-sec-tag rv">Программа</span>
    <h2 class="ait-sec-h2 rv d1">Твой месяц: 2 сессии, распаковка, 111 промптов —<br>на выходе работающий продукт</h2>
    <p class="ait-sl rv d2">Маршрут гибкий — под твой проект, но логика всегда одна: от идеи к работающему продукту и своему AI-агентству.</p>
    <div class="ait-tl">
      <div class="ait-tl-item rv d1">
        <div><div class="ait-tl-n">Сессия 1</div><div class="ait-tl-t">Разбор проекта и карта решения</div></div>
        <div class="ait-tl-d">Определяем, что именно собираем (сайт / книга / SaaS / приложение), каким стеком, и с чего начнём в моменте. Фиксируем точку А.</div>
      </div>
      <div class="ait-tl-item rv d1">
        <div><div class="ait-tl-n">Сессия 2</div><div class="ait-tl-t">Собираем и доводим до рабочего состояния</div></div>
        <div class="ait-tl-d">Основная работа: каркас продукта, инструменты (Claude, Gemini, ChatGPT, Cursor) на практике, доделываем и тестируем. Продукт должен реально работать, а не «быть почти готов».</div>
      </div>
      <div class="ait-tl-item rv d2">
        <div><div class="ait-tl-n">Распаковка</div><div class="ait-tl-t">Разворачиваю тебе агентство NCAi</div></div>
        <div class="ait-tl-d">Тот же процесс, что и в «Распаковке» отдельным продуктом — бот разворачивает рабочую AI-команду в панели: агенты под твои задачи, доска задач, контроль расходов на AI. Входит в месяц, не доплачиваешь отдельно.</div>
      </div>
      <div class="ait-tl-item rv d3">
        <div><div class="ait-tl-n">Весь месяц</div><div class="ait-tl-t">На связи + 111 промптов в подарок</div></div>
        <div class="ait-tl-d">Пишешь в Telegram, если застрял — отвечаю. В конце месяца — план развития без меня и книга из 111 готовых промптов NCAi.</div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const QUESTIONS_HTML = `<!-- 5 · 10 ВОПРОСОВ -->
<section id="questions" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">10 вопросов</span>
    <h2 class="ait-sec-h2 rv d1">Ответь себе честно</h2>
    <p class="ait-sl rv d2">Семь вопросов про эмоции и три про логику. Если на большинство ответишь «да» — этот месяц для тебя.</p>
    <div class="ait-qgrid">
      <div class="ait-qcard rv"><span class="ait-qtag">Вопрос 1</span><div class="ait-qq">Сколько ещё ты будешь откладывать свой продукт «на потом»?</div><div class="ait-qa">Каждый месяц отсрочки — это месяц, который твои конкуренты уже работают.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Вопрос 2</span><div class="ait-qq">Тебе не надоело платить подрядчикам за то, что можно собрать самому за месяц?</div><div class="ait-qa">Навык остаётся с тобой, а не в голове подрядчика.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Вопрос 3</span><div class="ait-qq">Что ты почувствуешь, когда твой сайт, книга или продукт наконец заработают?</div><div class="ait-qa">Ощущение «я могу» не даёт ни один сертификат.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Вопрос 4</span><div class="ait-qq">Ты уверен, что «потом разберусь» не превращается в «никогда»?</div><div class="ait-qa">Через год ты будешь в той же точке, только с большим опытом откладывания.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Вопрос 5</span><div class="ait-qq">Сколько уже денег ты потратил на курсы и ролики, после которых продукта нет?</div><div class="ait-qa">Инвестиция в ролики не вернулась. Инвестиция в продукт возвращается.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Вопрос 6</span><div class="ait-qq">Тебе не тревожно, что конкуренты собирают AI-продукты, пока ты смотришь?</div><div class="ait-qa">Отставание на год начинается с месяца бездействия.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Вопрос 7</span><div class="ait-qq">Что бы изменилось, если бы через месяц у тебя был работающий продукт?</div><div class="ait-qa">Изменился бы не только продукт — изменилась бы твоя уверенность.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Вопрос 8</span><div class="ait-qq">Что дешевле: собрать самому за 70–80к или нанять команду за 300–500к, когда заявок ещё нет?</div><div class="ait-qa">Математика в пользу навыка: платишь один раз, а умение остаётся навсегда.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Вопрос 9</span><div class="ait-qq">Сколько времени ты готов потратить, чтобы навык остался с тобой навсегда?</div><div class="ait-qa">Один месяц. Записи остаются у тебя. Это не разовая услуга.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Вопрос 10</span><div class="ait-qq">Что для тебя дороже: потерять 70–80к на месяце работы или потерять год на ожидании «удобного момента»?</div><div class="ait-qa">Цена месяца — это цена одной ошибки на найме. Год ожидания стоит дороже.</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const OBJECTIONS_HTML = `<!-- 6 · ВОЗРАЖЕНИЯ -->
<section id="objections">
  <div class="w">
    <span class="ait-sec-tag rv">Возражения</span>
    <h2 class="ait-sec-h2 rv d1">Знаю, о чём ты сейчас думаешь</h2>
    <p class="ait-sl rv d2">Самые частые причины, по которым люди остаются на месте. Разберём каждую по очереди.</p>
    <div class="ait-obj rv d1"><div class="ait-obj-q">Я не технарь</div><div class="ait-obj-a">И не нужно. Мы собираем через AI и естественный язык. Техническая часть — моя, решения — твои.</div></div>
    <div class="ait-obj rv d1"><div class="ait-obj-q">У меня нет проекта</div><div class="ait-obj-a">За месяц найдём. Сайт, книга, автоматизация — что-то из этого есть у каждого. Точка А есть всегда.</div></div>
    <div class="ait-obj rv d1"><div class="ait-obj-q">Дорого</div><div class="ait-obj-a">Дороже — нанять команду. Дешевле — ещё один курс, который не оставит навыка. Здесь 70–80к = продукт + навык навсегда.</div></div>
    <div class="ait-obj rv d2"><div class="ait-obj-q">А вдруг не получится?</div><div class="ait-obj-a">Работаем на твоём проекте, в моменте, по шагам. Каждый шаг проверяем. «Не получится ничего» — невозможно: продукт собирается частями.</div></div>
    <div class="ait-obj rv d2"><div class="ait-obj-q">Я уже проходил курсы — не зашло</div><div class="ait-obj-a">Это не курс. Это работа. Ты не слушаешь — ты собираешь. Разница как между просмотром фильма о спорте и тренировкой.</div></div>
    <div class="ait-obj rv d2"><div class="ait-obj-q">Нет времени</div><div class="ait-obj-a">2 сессии + распаковка, график под тебя. Месяц — это 4 недели. Вопрос не во времени, а в приоритете: что важнее — смотреть или собрать.</div></div>
  </div>
</section>
<hr class="dv">`;

export const OFFER_HTML = `<!-- 7 · ОФФЕР -->
<section id="inside" class="ait-alt">
  <div class="w ait-price-wrap">
    <span class="ait-sec-tag rv" style="justify-content:center">Оффер</span>
    <h2 class="ait-sec-h2 rv d1" style="text-align:center">Что ты получаешь за 70–80к</h2>
    <div class="ait-price-card rv d2">
      <div class="ait-price-top">
        <div>
          <div class="ait-price-label">Обучение AI · 1 на 1</div>
          <div class="ait-price-val">70–80к <em>₽</em></div>
          <div class="ait-price-note">за месяц · фиксированно, без доп. платежей</div>
        </div>
        <div>
          <div class="ait-price-label">Формат</div>
          <div class="ait-price-val" style="font-size:1.3rem">2 сессии + распаковка</div>
          <div class="ait-price-note">онлайн · 1–2 человека одновременно</div>
        </div>
      </div>
      <div class="ait-inc-grid">
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">2 индивидуальные сессии 1 на 1 — live-кодинг на твоём проекте</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Распаковка агентства NCAi входит в месяц (отдельно стоит 19 900 ₽)</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Месяц на связи в Telegram после сессий</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Книга из 111 промптов NCAi в подарок</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Твой реальный проект как основа, не учебный пример</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Claude, Gemini, ChatGPT, Cursor — на практике</span></div>
      </div>
      <div class="ait-meta4">
        <div class="ait-m4"><div class="ait-m4-l">Результат мечты</div><div class="ait-m4-v">Работающий продукт + своё AI-агентство без зависимости</div></div>
        <div class="ait-m4"><div class="ait-m4-l">Вероятность</div><div class="ait-m4-v">Высокая: твой проект, лайф-кодинг, шаг за шагом</div></div>
        <div class="ait-m4"><div class="ait-m4-l">Время до результата</div><div class="ait-m4-v">1 месяц: 2 сессии + распаковка</div></div>
        <div class="ait-m4"><div class="ait-m4-l">Твои усилия</div><div class="ait-m4-v">Диагностика + практика между сессиями</div></div>
      </div>
      <div class="ait-price-cta">
        <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Записаться в Telegram</a>
        <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Написать на почту</a>
      </div>
      <div class="ait-price-caption">1–2 человека одновременно — работаю с тобой лично, а не с потоком. Если места заняты, встаёшь в лист ожидания.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const AMP_HTML = `<!-- 8 · УСИЛИТЕЛИ -->
<section id="ait-amp">
  <div class="w">
    <span class="ait-sec-tag rv">Почему сейчас</span>
    <h2 class="ait-sec-h2 rv d1">Почему мест так мало</h2>
    <p class="ait-sl rv d2">Месяц работы с тобой лично нельзя растянуть на поток. Поэтому мест мало — и это честно, а не маркетинг.</p>
    <div class="ait-amp-grid">
      <div class="ait-amp rv d1"><div class="ait-amp-ico">${icon("target")}</div><div><div class="ait-amp-t">1–2 человека в месяц</div><div class="ait-amp-x">Не поток, а личная работа. Именно поэтому результат — продукт, а не «посмотрел вебинар».</div></div></div>
      <div class="ait-amp rv d1"><div class="ait-amp-ico">${icon("hourglass")}</div><div><div class="ait-amp-t">Мест всего два</div><div class="ait-amp-x">Когда места заняты — встаёшь в лист ожидания на следующий месяц.</div></div></div>
      <div class="ait-amp rv d2"><div class="ait-amp-ico">${icon("calendar")}</div><div><div class="ait-amp-t">Старт в ближайшие недели</div><div class="ait-amp-x">Чем раньше начнёшь — тем раньше продукт начнёт работать на тебя.</div></div></div>
      <div class="ait-amp rv d2"><div class="ait-amp-ico">${icon("lock")}</div><div><div class="ait-amp-t">Цена фиксирована</div><div class="ait-amp-x">Стоимость не растёт, пока ты думаешь. Решение сегодня — та же цена, что и завтра.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CASES_HTML = `<!-- 9 · КЕЙСЫ / ПРИМЕР -->
<section id="cases" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">Как это работает</span>
    <h2 class="ait-sec-h2 rv d1">Истории, которые повторяются</h2>
    <p class="ait-sl rv d2">Один месяц, один проект, один навык. Вот конкретно что чаще всего собирают ученики — не абстрактная «автоматизация», а вещь, которую можно потрогать и показать.</p>
    <div class="ait-build-grid">
      <div class="ait-build-card rv d1">
        <div class="ait-build-ico">${icon("monitor")}</div>
        <div class="ait-build-tit">Сайт / лендинг</div>
        <div class="ait-build-tx">Витрина, которая продаёт: от структуры и текстов до рабочей страницы, которую можно запускать.</div>
      </div>
      <div class="ait-build-card rv d2">
        <div class="ait-build-ico">${icon("book")}</div>
        <div class="ait-build-tit">Книга</div>
        <div class="ait-build-tx">Экспертный материал: структура, главы, воронка чтения — от идеи до готовой рукописи в твоём голосе.</div>
      </div>
      <div class="ait-build-card rv d3">
        <div class="ait-build-ico">${icon("gear")}</div>
        <div class="ait-build-tit">SaaS-продукт</div>
        <div class="ait-build-tx">Рабочий сервис по подписке: от идеи до первой платящей когорты — интерфейс, логика, оплата.</div>
      </div>
      <div class="ait-build-card rv d3">
        <div class="ait-build-ico">${icon("phone")}</div>
        <div class="ait-build-tit">Приложение</div>
        <div class="ait-build-tx">Telegram Mini App или веб-приложение: то, что открывает клиент и реально им пользуется.</div>
      </div>
    </div>
    <div class="ait-bigidea rv d2" style="margin-top:3rem">
      <div class="ait-bigidea-tag">Пример · как это происходит</div>
      <div class="ait-bigidea-tx" style="font-size:1.02rem;line-height:1.55">Ты эксперт, и тебе нужна книга. На первой сессии фиксируем тему, структуру и учим нейросеть писать в твоём голосе. На второй — собираем первые главы вместе. Дальше месяц на связи и распаковка агентства: книга собирается, а навык и своя AI-команда остаются с тобой.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FINAL_HTML = `<!-- 10 · CTA -->
<section id="ait-final">
  <div class="ait-final-in">
    <h2 class="ait-final-h2 rv">Хватит смотреть.<br>Начни <em>собирать.</em></h2>
    <p class="ait-final-sub rv d1">Месяц, твой проект, 1 на 1. Уходишь с продуктом и навыком, который остаётся.</p>
    <div class="ait-final-acts rv d2">
      <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Записаться <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/raspakovka" class="bs">Сравнить с распаковкой NCAi</a>
    </div>
    <div class="ait-final-alt rv d3">Вопросы? <a href="mailto:ilya.novitskii@yandex.ru">ilya.novitskii@yandex.ru</a> или <a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer">Telegram</a></div>
  </div>
</section>`;
