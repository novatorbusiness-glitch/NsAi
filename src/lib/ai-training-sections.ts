// Секции страницы /ai-training — по паттерну consulting-sections.ts.
// Nav/mobile-menu/footer больше не дублируются здесь — страница использует
// общий PageShell (см. src/components/pages/AiTrainingPage.tsx).
import { icon } from "./icons";
import { FLOW_HTML } from "./flow";

export const HERO_HTML = `<!-- HERO · ТИЗЕРНЫЙ ХУК -->
<section id="ait-hero">
  ${FLOW_HTML}
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

// ─────────────────────────────────────────────────────────────────────────────
// EN — английские версии секций (для переключателя языка, см. Bilingual.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export const HERO_HTML_EN = `<!-- HERO -->
<section id="ait-hero">
  ${FLOW_HTML}
  <div class="ait-hero-grid"></div>
  <div class="ait-hero-glow"></div>
  <div class="ait-hero-inner">
    <div>
      <div class="ait-hero-badge"><span class="ait-bdot"></span>AI training · 1 on 1 · 1 month</div>
      <h1 class="ait-hero-h1">You were taught to <em>watch</em>.<span class="ait-acc">Here you build.</span></h1>
      <p class="ait-hero-sub">Not a course, not lectures. We take <strong>your real project</strong> and build it across 2 live sessions. Plus I deploy a working AI agency, stay on hand for a month, and give you a book of 111 prompts as a gift.</p>
      <div class="ait-hero-acts">
        <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Sign up <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#idea" class="bs">Why this works</a>
      </div>
      <div class="ait-hero-meta">
        <div class="ait-hm">Format<span>2 sessions + unboxing</span></div>
        <div class="ait-hm">Duration<span>1 month on hand</span></div>
        <div class="ait-hm">Price<span>70–80K ₽</span></div>
        <div class="ait-hm">Group<span>1–2 people</span></div>
      </div>
    </div>
    <div class="ait-hero-right">
      <div class="ait-hcard">
        <div class="ait-hctop"><div class="ait-hcdot"></div><div class="ait-hctitle">NCAi · <span>your month</span></div></div>
        <div class="ait-htl">
          <div class="ait-htl-item ait-lit">
            <div class="ait-htl-n">1</div>
            <div class="ait-htl-body"><div class="ait-htl-t">Diagnosis</div><div class="ait-htl-x">We break down the project, fix point A and a solution map</div></div>
          </div>
          <div class="ait-htl-item">
            <div class="ait-htl-n">2</div>
            <div class="ait-htl-body"><div class="ait-htl-t">2 sessions — building</div><div class="ait-htl-x">Live-coding on your project, not a webinar recording</div></div>
          </div>
          <div class="ait-htl-item">
            <div class="ait-htl-n">+1</div>
            <div class="ait-htl-body"><div class="ait-htl-t">Agency unboxing</div><div class="ait-htl-x">A working AI team in a panel, included in the month</div></div>
          </div>
          <div class="ait-htl-item">
            <div class="ait-htl-n">30</div>
            <div class="ait-htl-body"><div class="ait-htl-t">A month on hand</div><div class="ait-htl-x">+ NCAi's 111-prompt book as a gift</div></div>
          </div>
        </div>
        <div class="ait-hcap">learning by building<span style="animation:blink 1.1s ease-in-out infinite">▌</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const IDEA_HTML_EN = `<!-- THE BIG IDEA -->
<section id="idea" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">The big idea</span>
    <h2 class="ait-sec-h2 rv d1">Why you don't have your own product yet</h2>
    <p class="ait-sl rv d2">It's not laziness and it's not a lack of time. It's how you were taught. You're a business owner or an expert: you have the ideas, the tasks are clear — but the product never came together.</p>
    <div class="ait-pr-grid">
      <div class="ait-pr rv d1">
        <div class="ait-pr-n">Problem 1</div>
        <div class="ait-pr-t">You have the idea — not the start</div>
        <div class="ait-pr-x">It's unclear where to begin or what to build with. The project lives in your head, not on a screen.</div>
      </div>
      <div class="ait-pr rv d2">
        <div class="ait-pr-n">Problem 2</div>
        <div class="ait-pr-t">AI feels like a chat, not an employee</div>
        <div class="ait-pr-x">The result is random: sometimes it works, sometimes it doesn't. There's no system, nothing to repeat.</div>
      </div>
      <div class="ait-pr rv d3">
        <div class="ait-pr-n">Problem 3</div>
        <div class="ait-pr-t">Every step goes through a contractor</div>
        <div class="ait-pr-x">"I'll figure it out later" stretches into months. Money goes out, no skill stays.</div>
      </div>
    </div>
    <div class="ait-w-row">
      <div class="ait-w-col rv d2">
        <div class="ait-w-col-tag">Why this happens</div>
        <div class="ait-w-li"><span class="ait-w-ico">1</span><span><b>Courses teach you to watch, not to do.</b> After a webinar you're a viewer, not a builder.</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">2</span><span><b>"Copy-pasting prompts" gives an illusion, not a system.</b> Someone else's prompts don't know your task.</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">3</span><span><b>Nobody sits down with your actual project.</b> Mentorship "in general" doesn't lead to a result.</span></div>
      </div>
      <div class="ait-w-col rv d3">
        <div class="ait-w-col-tag">The real reasons</div>
        <div class="ait-w-li"><span class="ait-w-ico">1</span><span><b>The skill never grew</b> — there was never one product built with your own hands.</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">2</span><span><b>Confidence never showed up</b> — there was no proof of "I can do this."</span></div>
        <div class="ait-w-li"><span class="ait-w-ico">3</span><span><b>The result never arrived</b> — you were waiting for something ready-made, instead of building it yourself.</span></div>
      </div>
    </div>
    <div class="ait-bigidea rv d2">
      <div class="ait-bigidea-tag">Big idea</div>
      <div class="ait-bigidea-tx">Not "learn AI in general" — build your own product with AI in a month. The skill comes from the result, not from lectures.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const SUT_HTML_EN = `<!-- THE CORE IDEA -->
<section id="sut">
  <div class="w">
    <span class="ait-sec-tag rv">The core idea</span>
    <h2 class="ait-sec-h2 rv d1">Why ChatGPT "head-on"<br>doesn't build your product</h2>
    <p class="ait-sl rv d2">You tried ChatGPT head-on — it came out flat. And you decided: "this just isn't for me." It's not about you. It's that the model was given a task with no structure.</p>
    <p class="ait-sl rv d2" style="margin-bottom:2.5rem">The model doesn't know your funnel or your business. It assembles text from whatever you fed it. Ask for "write me sales copy" and you get a template that sells to everyone and no one. A neuro-funnel is a system of constraints: hook → pain → solution → offer → CTA. I'll teach you to build copy and products like that with your own hands.</p>
    <div class="ait-ba-grid rv d2">
      <div class="ait-ba-card ait-ba-before">
        <div class="ait-ba-head">Before</div>
        <div class="ait-ba-line"><span class="ait-ba-x">✕</span>You have the idea, but no product</div>
        <div class="ait-ba-line"><span class="ait-ba-x">✕</span>AI as a chat — no system, no repeatable result</div>
        <div class="ait-ba-line"><span class="ait-ba-x">✕</span>Every step depends on a contractor or "I'll figure it out later"</div>
      </div>
      <div class="ait-ba-card ait-ba-after">
        <div class="ait-ba-head">After</div>
        <div class="ait-ba-line"><span class="ait-ba-ok">✓</span>A working product: a website, a book, a SaaS, or an app</div>
        <div class="ait-ba-line"><span class="ait-ba-ok">✓</span>A skill: you know which tool to reach for, and why</div>
        <div class="ait-ba-line"><span class="ait-ba-ok">✓</span>Recordings of every session — rewatch and repeat on your own</div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const MECHANISM_HTML_EN = `<!-- THE UNIQUE MECHANISM -->
<section id="mechanism" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">The unique mechanism</span>
    <h2 class="ait-sec-h2 rv d1">Learning by building: the skill stays</h2>
    <p class="ait-sl rv d2">Not "watch the recording." We build your project together, in the moment. You don't listen — you build. How the month breaks down session by session is in the next block.</p>
    <div class="ait-out-grid rv d3">
      <div class="ait-out-item"><div class="ait-out-num">2</div><div class="ait-out-tx">Live 1-on-1 sessions, live-coding on your project</div></div>
      <div class="ait-out-item"><div class="ait-out-num">1</div><div class="ait-out-tx">A working AI agency — NCAi unboxing included in the month</div></div>
      <div class="ait-out-item"><div class="ait-out-num">111</div><div class="ait-out-tx">NCAi prompts as a gift</div></div>
      <div class="ait-out-item"><div class="ait-out-num">1 mo</div><div class="ait-out-tx">On hand after the sessions, not a "goodbye"</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const PROGRAM_HTML_EN = `<!-- MONTH PLAN -->
<section id="program">
  <div class="w">
    <span class="ait-sec-tag rv">Program</span>
    <h2 class="ait-sec-h2 rv d1">Your month: 2 sessions, unboxing, 111 prompts —<br>a working product at the end</h2>
    <p class="ait-sl rv d2">The route flexes to fit your project, but the logic is always the same: from idea to a working product and your own AI agency.</p>
    <div class="ait-tl">
      <div class="ait-tl-item rv d1">
        <div><div class="ait-tl-n">Session 1</div><div class="ait-tl-t">Project breakdown and a solution map</div></div>
        <div class="ait-tl-d">We define exactly what we're building (a website / book / SaaS / app), which stack, and where to start right now. We fix point A.</div>
      </div>
      <div class="ait-tl-item rv d1">
        <div><div class="ait-tl-n">Session 2</div><div class="ait-tl-t">Build it and get it to a working state</div></div>
        <div class="ait-tl-d">The main work: the product's skeleton, tools (Claude, Gemini, ChatGPT, Cursor) in practice, finishing touches and testing. The product has to actually work, not "be almost ready."</div>
      </div>
      <div class="ait-tl-item rv d2">
        <div><div class="ait-tl-n">Unboxing</div><div class="ait-tl-t">I deploy your NCAi agency</div></div>
        <div class="ait-tl-d">The same process as the standalone "Unboxing" product — the bot deploys a working AI team in a panel: agents for your tasks, a task board, AI spend control. Included in the month, no extra charge.</div>
      </div>
      <div class="ait-tl-item rv d3">
        <div><div class="ait-tl-n">All month</div><div class="ait-tl-t">On hand + 111 prompts as a gift</div></div>
        <div class="ait-tl-d">Message me on Telegram if you're stuck — I answer. At the end of the month: a development plan without me and a book of 111 ready NCAi prompts.</div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const QUESTIONS_HTML_EN = `<!-- 10 QUESTIONS -->
<section id="questions" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">10 questions</span>
    <h2 class="ait-sec-h2 rv d1">Answer yourself honestly</h2>
    <p class="ait-sl rv d2">Seven questions about emotion, three about logic. If you answer "yes" to most of them — this month is for you.</p>
    <div class="ait-qgrid">
      <div class="ait-qcard rv"><span class="ait-qtag">Question 1</span><div class="ait-qq">How much longer are you going to put your product off "for later"?</div><div class="ait-qa">Every month of delay is a month your competitors are already working.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Question 2</span><div class="ait-qq">Aren't you tired of paying contractors for something you could build yourself in a month?</div><div class="ait-qa">The skill stays with you, not in a contractor's head.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Question 3</span><div class="ait-qq">How will it feel when your website, book, or product finally works?</div><div class="ait-qa">No certificate gives you the feeling of "I can do this."</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Question 4</span><div class="ait-qq">Are you sure "I'll figure it out later" isn't turning into "never"?</div><div class="ait-qa">A year from now you'll be at the same point, just more practiced at putting things off.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Question 5</span><div class="ait-qq">How much money have you already spent on courses and videos that left you with no product?</div><div class="ait-qa">The investment in videos didn't pay off. The investment in a product does.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Question 6</span><div class="ait-qq">Doesn't it worry you that competitors are building AI products while you watch?</div><div class="ait-qa">A year behind starts with a month of standing still.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Question 7</span><div class="ait-qq">What would change if you had a working product a month from now?</div><div class="ait-qa">It wouldn't just be the product that changed — your confidence would too.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Question 8</span><div class="ait-qq">Which is cheaper: building it yourself for 70–80K, or hiring a team for 300–500K before you even have leads?</div><div class="ait-qa">The math favors the skill: you pay once, the ability stays forever.</div></div>
      <div class="ait-qcard rv"><span class="ait-qtag">Question 9</span><div class="ait-qq">How much time are you willing to spend to have a skill that stays with you for good?</div><div class="ait-qa">One month. The recordings stay yours. This isn't a one-off service.</div></div>
      <div class="ait-qcard rv d1"><span class="ait-qtag">Question 10</span><div class="ait-qq">What costs you more: losing 70–80K on a month of work, or losing a year waiting for "the right moment"?</div><div class="ait-qa">The price of the month is the price of one bad hire. A year of waiting costs more.</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const OBJECTIONS_HTML_EN = `<!-- OBJECTIONS -->
<section id="objections">
  <div class="w">
    <span class="ait-sec-tag rv">Objections</span>
    <h2 class="ait-sec-h2 rv d1">I know what you're thinking right now</h2>
    <p class="ait-sl rv d2">The most common reasons people stay stuck. Let's go through each one.</p>
    <div class="ait-obj rv d1"><div class="ait-obj-q">I'm not technical</div><div class="ait-obj-a">You don't need to be. We build through AI and plain language. The technical part is mine, the decisions are yours.</div></div>
    <div class="ait-obj rv d1"><div class="ait-obj-q">I don't have a project</div><div class="ait-obj-a">We'll find one within the month. A website, a book, an automation — everyone has something. There's always a point A.</div></div>
    <div class="ait-obj rv d1"><div class="ait-obj-q">It's expensive</div><div class="ait-obj-a">Hiring a team is more expensive. Another course that leaves you with no skill is cheaper. Here, 70–80K = a product + a skill for life.</div></div>
    <div class="ait-obj rv d2"><div class="ait-obj-q">What if it doesn't work out?</div><div class="ait-obj-a">We work on your project, in the moment, step by step. We check every step. "Nothing works out at all" isn't possible: the product gets built in pieces.</div></div>
    <div class="ait-obj rv d2"><div class="ait-obj-q">I've already taken courses — didn't click</div><div class="ait-obj-a">This isn't a course. It's work. You don't listen — you build. It's the difference between watching a movie about sports and actually training.</div></div>
    <div class="ait-obj rv d2"><div class="ait-obj-q">I don't have time</div><div class="ait-obj-a">2 sessions + unboxing, scheduled around you. A month is 4 weeks. It's not a question of time, but of priority: what matters more — watching or building.</div></div>
  </div>
</section>
<hr class="dv">`;

export const OFFER_HTML_EN = `<!-- THE OFFER -->
<section id="inside" class="ait-alt">
  <div class="w ait-price-wrap">
    <span class="ait-sec-tag rv" style="justify-content:center">The offer</span>
    <h2 class="ait-sec-h2 rv d1" style="text-align:center">What you get for 70–80K</h2>
    <div class="ait-price-card rv d2">
      <div class="ait-price-top">
        <div>
          <div class="ait-price-label">AI training · 1 on 1</div>
          <div class="ait-price-val">70–80K <em>₽</em></div>
          <div class="ait-price-note">for the month · fixed, no extra charges</div>
        </div>
        <div>
          <div class="ait-price-label">Format</div>
          <div class="ait-price-val" style="font-size:1.3rem">2 sessions + unboxing</div>
          <div class="ait-price-note">online · 1–2 people at a time</div>
        </div>
      </div>
      <div class="ait-inc-grid">
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">2 individual 1-on-1 sessions — live-coding on your project</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">NCAi agency unboxing included in the month (worth 19,900 ₽ separately)</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">A month on hand in Telegram after the sessions</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">NCAi's 111-prompt book as a gift</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Your real project as the base, not a training example</span></div>
        <div class="ait-inc"><span class="ait-inc-ck">✓</span><span class="ait-inc-tx">Claude, Gemini, ChatGPT, Cursor — hands-on</span></div>
      </div>
      <div class="ait-meta4">
        <div class="ait-m4"><div class="ait-m4-l">Dream outcome</div><div class="ait-m4-v">A working product + your own AI agency, no dependency</div></div>
        <div class="ait-m4"><div class="ait-m4-l">Likelihood</div><div class="ait-m4-v">High: your project, live-coding, step by step</div></div>
        <div class="ait-m4"><div class="ait-m4-l">Time to result</div><div class="ait-m4-v">1 month: 2 sessions + unboxing</div></div>
        <div class="ait-m4"><div class="ait-m4-l">Your effort</div><div class="ait-m4-v">Diagnosis + practice between sessions</div></div>
      </div>
      <div class="ait-price-cta">
        <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Sign up on Telegram</a>
        <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Email me</a>
      </div>
      <div class="ait-price-caption">1–2 people at a time — I work with you personally, not with a crowd. If the spots are taken, you join the waitlist.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const AMP_HTML_EN = `<!-- WHY NOW -->
<section id="ait-amp">
  <div class="w">
    <span class="ait-sec-tag rv">Why now</span>
    <h2 class="ait-sec-h2 rv d1">Why there are so few spots</h2>
    <p class="ait-sl rv d2">A month of personal work with you can't be stretched across a crowd. That's why spots are limited — that's honesty, not marketing.</p>
    <div class="ait-amp-grid">
      <div class="ait-amp rv d1"><div class="ait-amp-ico">${icon("target")}</div><div><div class="ait-amp-t">1–2 people a month</div><div class="ait-amp-x">Not a crowd, personal work. That's exactly why the result is a product, not "watched a webinar."</div></div></div>
      <div class="ait-amp rv d1"><div class="ait-amp-ico">${icon("hourglass")}</div><div><div class="ait-amp-t">Only two spots</div><div class="ait-amp-x">Once the spots are taken, you join the waitlist for next month.</div></div></div>
      <div class="ait-amp rv d2"><div class="ait-amp-ico">${icon("calendar")}</div><div><div class="ait-amp-t">Starting in the coming weeks</div><div class="ait-amp-x">The sooner you start, the sooner the product starts working for you.</div></div></div>
      <div class="ait-amp rv d2"><div class="ait-amp-ico">${icon("lock")}</div><div><div class="ait-amp-t">The price is fixed</div><div class="ait-amp-x">The price doesn't rise while you think it over. A decision today gets the same price as tomorrow.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CASES_HTML_EN = `<!-- CASES / EXAMPLE -->
<section id="cases" class="ait-alt">
  <div class="w">
    <span class="ait-sec-tag rv">How it works</span>
    <h2 class="ait-sec-h2 rv d1">Stories that repeat</h2>
    <p class="ait-sl rv d2">One month, one project, one skill. Here's specifically what students build most often — not an abstract "automation," but something you can touch and show.</p>
    <div class="ait-build-grid">
      <div class="ait-build-card rv d1">
        <div class="ait-build-ico">${icon("monitor")}</div>
        <div class="ait-build-tit">Website / landing page</div>
        <div class="ait-build-tx">A storefront that sells: from structure and copy to a working page you can launch.</div>
      </div>
      <div class="ait-build-card rv d2">
        <div class="ait-build-ico">${icon("book")}</div>
        <div class="ait-build-tit">Book</div>
        <div class="ait-build-tx">Expert material: structure, chapters, a reading funnel — from idea to a finished manuscript in your own voice.</div>
      </div>
      <div class="ait-build-card rv d3">
        <div class="ait-build-ico">${icon("gear")}</div>
        <div class="ait-build-tit">SaaS product</div>
        <div class="ait-build-tx">A working subscription service: from idea to the first paying cohort — interface, logic, payments.</div>
      </div>
      <div class="ait-build-card rv d3">
        <div class="ait-build-ico">${icon("phone")}</div>
        <div class="ait-build-tit">App</div>
        <div class="ait-build-tx">A Telegram Mini App or a web app: something a client opens and actually uses.</div>
      </div>
    </div>
    <div class="ait-bigidea rv d2" style="margin-top:3rem">
      <div class="ait-bigidea-tag">Example · how it plays out</div>
      <div class="ait-bigidea-tx" style="font-size:1.02rem;line-height:1.55">You're an expert, and you need a book. In session one we fix the topic, structure, and teach the model to write in your voice. In session two, we build the first chapters together. From there, a month on hand and the agency unboxing: the book comes together, and the skill plus your own AI team stay with you.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FINAL_HTML_EN = `<!-- CTA -->
<section id="ait-final">
  <div class="ait-final-in">
    <h2 class="ait-final-h2 rv">Stop watching.<br>Start <em>building.</em></h2>
    <p class="ait-final-sub rv d1">A month, your project, one on one. You leave with a product and a skill that stays.</p>
    <div class="ait-final-acts rv d2">
      <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Sign up <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/raspakovka" class="bs">Compare with NCAi unboxing</a>
    </div>
    <div class="ait-final-alt rv d3">Questions? <a href="mailto:ilya.novitskii@yandex.ru">ilya.novitskii@yandex.ru</a> or <a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer">Telegram</a></div>
  </div>
</section>`;
