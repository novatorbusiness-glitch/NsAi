// Секции главной (HTML из index-content, разбито по ТЗ NCAI_SPEC).
import { icon } from "./icons";
import { FLOW_HTML } from "./flow";

export const HERO_HTML = `<!-- HERO -->
<section id="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  ${FLOW_HTML}
  <div class="hero-inner">
    <!-- LEFT -->
    <div>
      <div class="hero-badge"><span class="bdot"></span>Архитектор систем · NCAi</div>
      <h1 class="hero-name"><em>Илья</em><span class="acc">Новицкий</span></h1>
      <div class="hero-role">Бизнесу — готовое AI-агентство. Специалисту — своя AI-команда</div>
      <p class="hero-quote">«Продуктовое мышление предпринимателя + руки разработчика. На выходе — рабочий продукт, а не обещание»</p>
      <div class="hero-meta">
        <div class="hm">Локация<span>Москва / удалённо</span></div>
        <div class="hm">Для бизнеса<span>Распаковка агентства · обучение AI</span></div>
        <div class="hm">Для специалистов<span>AI-отдел под рукой · выше чек</span></div>
      </div>
      <div class="hero-stats">
        <div class="hstat"><div class="hstat-n">300+</div><div class="hstat-l">Проектов</div></div>
        <div class="hstat"><div class="hstat-n">50M ₽</div><div class="hstat-l">В запусках</div></div>
        <div class="hstat"><div class="hstat-n">5</div><div class="hstat-l">Лет агентства</div></div>
        <div class="hstat"><div class="hstat-n">1</div><div class="hstat-l">Книга издана</div></div>
      </div>
    </div>
    <!-- RIGHT — PRODUCT CARDS -->
    <div class="hero-right">
      <div class="pc-group-label">Для бизнеса</div>
      <div class="product-cards">
        <a href="/raspakovka" class="pc pc-consulting" style="--c:#FFD000">
          <div class="pc-icon">${icon("box", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Распаковка агентства</div>
            <div class="pc-title">Цифровой отдел за 4 шага</div>
            <div class="pc-sub">Распаковка в боте · свои AI-агенты, доска задач, руль сразу у вас · 19 900 ₽</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/ai-training" class="pc pc-training" style="--c:#4ECDC4">
          <div class="pc-icon">${icon("bolt", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Обучение AI</div>
            <div class="pc-title">1 месяц · 70–80к ₽</div>
            <div class="pc-sub">2 сессии + распаковка агентства, создаёшь реальный продукт с нуля</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/book" class="pc pc-book" style="--c:#B4A7D6">
          <div class="pc-icon">${icon("book", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Книга · Бесплатно</div>
            <div class="pc-title">Нейро-воронка</div>
            <div class="pc-sub">Нейробиология продаж и AI-автоматизация. 6 глав.</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
      </div>
      <div class="pc-group-label pc-group-label-alt">Ищете тех-партнёра</div>
      <div class="product-cards">
        <a href="/portfolio" class="pc pc-portfolio" style="--c:#ff9d2e">
          <div class="pc-icon">${icon("target", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Основное · Вход в бизнес</div>
            <div class="pc-title">Месяц работы вместе</div>
            <div class="pc-sub">Сначала бесплатно показываю результат на вашей задаче. Зашло — захожу на месяц: от 200 000 ₽</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
      </div>
    </div>
  </div>
  <div class="scroll-hint">
    <div class="sh-txt">Подробнее</div>
    <div class="sh-line"></div>
  </div>
</section>`;

export const INTRO_HTML = `<!-- INTRO: коротко кто я + Илья ≠ NCAi -->
<section id="intro">
  <div class="wrap intro-wrap">
    <span class="sec-tag rv">Коротко: кто я</span>
    <p class="p intro-lead rv d1">Предприниматель и разработчик. Пять лет строил и вёл своё агентство (2020–2025), вышел из бизнеса 7 ноября 2025 — и с тех пор собираю системы на AI сам, от идеи до кода.</p>
    <div class="intro-split rv d2">
      <div class="intro-half">
        <div class="intro-split-tag">Илья Новицкий</div>
        <div class="intro-split-x">Человек. Предприниматель, разработчик, архитектор систем. Пишет книгу, ведёт R&D-проекты, выступает.</div>
      </div>
      <div class="intro-arr">≠</div>
      <div class="intro-half">
        <div class="intro-split-tag">NCAi</div>
        <div class="intro-split-x">Продукт. Платформа «агентство в коробке», которую Илья строит и продаёт — а не он сам.</div>
      </div>
    </div>
  </div>
</section>`;

export const VIDEO_HTML = `<!-- VIDEO: личное обращение Ильи (ТЗ п.6) -->
<section id="video-intro">
  <div class="wrap">
    <div class="video-wrap">
      <p class="video-eyebrow rv">«Если хотите понять, кто я и чем занимаюсь — расскажу за две минуты»</p>
      <div class="video-ph rv d1">
        <div class="video-ph-inner">
          <div class="video-ph-play">▶</div>
          <div class="video-ph-label">Видео — личное обращение Ильи</div>
          <div class="video-ph-sub">60–120 секунд · скоро здесь</div>
        </div>
      </div>
    </div>
  </div>
</section>`;

export const JOURNEY_HTML = `<!-- JOURNEY: путь с 2016 года -->
<section id="journey" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Мой путь</span>
    <h2 class="sec-h2 rv d1">300+ проектов с 2016 года — практика, а не теория</h2>
    <p class="p journey-lead rv d1">Компетентность не появилась однажды. Она собиралась годами: от первых продаж до архитектуры AI-систем.</p>

    <div class="jrn">
      <div class="jrn-item rv">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2016</div><div class="jrn-t">Решение стать предпринимателем</div><div class="jrn-x">Отправная точка. Первые продажи — товары из Китая.</div></div>
      </div>
      <div class="jrn-item rv d1">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2016–2017</div><div class="jrn-t">Первые навыки</div><div class="jrn-x">Чтобы продавать, пришлось освоить сайты, Яндекс Директ, маркетинг, упаковку, аналитику. Один навык тянул за собой следующий.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2017–2018</div><div class="jrn-t">Первая автоворонка</div><div class="jrn-x">Собрал первую автоворонку и заработал 1 млн ₽+.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2018–2022</div><div class="jrn-t">Проекты, партнёрства, запуски</div><div class="jrn-x">Успехи и провалы. Каждый — датасет для следующей итерации, а не повод остановиться.</div></div>
      </div>
      <div class="jrn-item rv">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">300+ проектов</div><div class="jrn-t">Большой практический опыт</div><div class="jrn-x">Не теория — сотни реальных запусков в разных нишах.</div></div>
      </div>
      <div class="jrn-item rv d1">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">5 лет</div><div class="jrn-t">Агентство Novator.vip</div><div class="jrn-x">Команда, клиенты, загрузка — работающий бизнес снаружи. Изнутри модель перестала нормально развиваться: крутишь педали, но бежишь по беговой дорожке.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">Переосмысление</div><div class="jrn-t">Усиление старой системы не решит проблему</div><div class="jrn-x">Модель перестала расти уже давно. Стало ясно: чинить себя ради возврата в старую систему — не выход.</div></div>
      </div>
      <div class="jrn-item rv jrn-mark">
        <div class="jrn-dot jrn-dot-mark"></div>
        <div class="jrn-body"><div class="jrn-y">7 ноября 2025</div><div class="jrn-t">Выход из бизнеса</div><div class="jrn-x">Не «сильнее давить на систему», а признать: она больше не работает. Решение, а не срыв.</div></div>
      </div>
      <div class="jrn-item rv d1">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">AI</div><div class="jrn-t">Новый инструмент того же принципа</div><div class="jrn-x">В 2020 уже объяснял клиентам CRM, ботов, автоматизацию. AI — следующий этап той же идеи, только инструмент стал мощнее.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">Разработка · R&D</div><div class="jrn-t">Собираю сам, из интереса</div><div class="jrn-x">Neuroflow, Vlinx, Nezha_Quest, Gaze Architecture — не всегда ради продажи, а чтобы проверить, возможно ли это.</div></div>
      </div>
      <div class="jrn-item rv jrn-now">
        <div class="jrn-dot jrn-dot-now"></div>
        <div class="jrn-body"><div class="jrn-y">Сейчас · NCAi</div><div class="jrn-t">Предпринимательство + продукт + разработка + AI</div><div class="jrn-x">Строю собственную систему — не для того, чтобы один раз продать, а чтобы она работала сама.</div></div>
      </div>
    </div>
  </div>
</section>`;

export const MECHANISM_HTML = `<!-- MECHANISM: как устроена система -->
<section id="mechanism" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv is-center">То, что я в итоге построил</span>
    <h2 class="sec-h2 rv d1" style="text-align:center">Пишете задачу —<br>вечером готовый результат в панели</h2>
    <p class="p mech-lead rv d1">Та же система, что провела меня от 2016 года до сейчас — только теперь можно развернуть её и под ваш бизнес. Не абстрактный «AI-помощник» и не чат с ботом: вы пишете задачу AI-директору, он сам решает, кому из команды её передать, результат и расход на AI собираются в одной панели. Подходит и владельцу бизнеса, и специалисту, который собирает себе AI-отдел.</p>

    <div class="panelmock rv d2">
      <div class="pm-bar"><span class="pm-dot"></span><span class="pm-dot"></span><span class="pm-dot"></span><span class="pm-url">ncai · панель</span></div>
      <div class="pm-tabs">
        <span class="pm-tab">Главная</span><span class="pm-tab act">Проекты</span><span class="pm-tab">Команда</span><span class="pm-tab">Аналитика</span><span class="pm-tab">Услуги</span>
      </div>
      <div class="pm-body">
        <div class="mech-task-flow">
          <div class="mech-task-card">
            <div class="mech-task-h">Входящая задача</div>
            <div class="mech-task-t">«Собрать прайс на неделю»</div>
          </div>
          <div class="mech-task-arrow">→</div>
          <div class="mech-task-card director">
            <div class="mech-task-h">${icon("compass", "currentColor")} Директор</div>
            <div class="mech-task-t">Разбивает на подзадачи, назначает роль</div>
          </div>
          <div class="mech-task-arrow">→</div>
          <div class="mech-task-card">
            <div class="mech-task-h">${icon("code", "currentColor")} Разработчик</div>
            <div class="mech-task-t">Статус: <b>в работе</b> → отчёт директору</div>
          </div>
        </div>
        <div class="pm-tline">
          <div class="pm-tl"><span class="pm-tl-ico">${icon("check", "var(--a)")}</span><span class="pm-tl-n">Готово — директор проверил результат</span><span class="pm-tl-v">закрыто</span></div>
        </div>
        <div class="pm-cost-note">Это не «чат с нейросетью», а конвейер: задача проходит приёмку, выполняется нужной ролью и закрывается только после пир-ревью — двух проверок других агентов. Ночью задачи разбирает драйвер (24/7), память и база знаний подтягиваются по смыслу (RAG), а сложные задачи идут на сильную модель, рутина — на лёгкую. Расход на AI по каждому шагу — в той же панели. <a href="/raspakovka#screens" style="color:var(--a);text-decoration:none;border-bottom:1px solid var(--a)">Живые скрины системы →</a></div>
      </div>
    </div>
  </div>
</section>`;

export const PRODUCTS_HTML = `<!-- PRODUCTS -->
<section id="products" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Чем занимаюсь</span>
    <h2 class="sec-h2 rv d1">От бесплатной книги —<br>до готового AI-агентства за 19 900 ₽</h2>
    <div class="products-grid">

      <a href="/raspakovka" class="prod-card c1 rv">
        <div class="prod-stripe" style="--stripe:#FFD000"></div>
        <div class="prod-top">
          <div class="prod-icon">${icon("box", "var(--stripe)")}</div>
          <div class="prod-type">Распаковка агентства · бизнес + специалисты</div>
          <div class="prod-title">Агентство в коробке за 4 шага</div>
          <p class="prod-desc">Разворачиваю рабочих AI-агентов в панели: под ваши задачи, с доской задач и контролем расходов на AI. Распаковка в боте — руль сразу у вас, зависимости нет.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Агенты готовы с первого шага</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>1–5 AI-агентов под ваши задачи</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Контроль расходов на AI в панели 24/7</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Руль сразу у вас — ведёте сами</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Разово</span>19 900 ₽</div>
          <div class="prod-link">Подробнее →</div>
        </div>
      </a>

      <a href="/ai-training" class="prod-card c2 rv d1">
        <div class="prod-stripe" style="--stripe:#4ECDC4"></div>
        <div class="prod-top">
          <div class="prod-icon">${icon("bolt", "var(--stripe)")}</div>
          <div class="prod-type">Обучение AI · B2C</div>
          <div class="prod-title">Научись работать с AI руками за месяц</div>
          <p class="prod-desc">2 сессии 1 на 1 + распаковка агентства NCAi. Никакой теории в пустоту — берём твой реальный проект и собираем его вместе. Уходишь с работающим продуктом, навыком и своим AI-агентством.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Claude, Gemini, ChatGPT, Cursor — когда что</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Создаёшь сайт, книгу, автоматизацию</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Месяц на связи + 111 промптов в подарок</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Онлайн · 1–2 человека одновременно</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Цена</span>70–80к ₽ / месяц</div>
          <div class="prod-link">Подробнее →</div>
        </div>
      </a>

      <a href="/book" class="prod-card c3 rv d2">
        <div class="prod-stripe" style="--stripe:#B4A7D6"></div>
        <div class="prod-top">
          <div class="prod-icon">${icon("book", "var(--stripe)")}</div>
          <div class="prod-type">Книга · Бесплатно</div>
          <div class="prod-title">Нейро-воронка</div>
          <p class="prod-desc">Практическое руководство по инженерии систем продаж. Нейробиология, поведенческая психология и AI — без воды, с визуализациями, 30 подглав.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>6 глав · 30 подглав</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Когнитивные ловушки, воронки, трафик</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>AI-автоматизация от А до Я</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Читается прямо на сайте</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Доступ</span>Бесплатно</div>
          <div class="prod-link">Читать →</div>
        </div>
      </a>

    </div>
  </div>
</section>`;

export const ABOUT_HTML = `<!-- ABOUT -->
<section id="about" class="sec-light">
  <div class="wrap">
    <div class="about-layout">
      <div class="about-visual rv">
        <div class="about-card">
          <div class="ac-top">
            <div class="ac-ava">И</div>
            <div>
              <div class="ac-name">Илья Новицкий</div>
              <div class="ac-role">Архитектор систем · NCAi</div>
            </div>
          </div>
          <div class="ac-stack">
            <span class="ac-tag">VS Code</span><span class="ac-tag">Cursor</span>
            <span class="ac-tag">Claude</span><span class="ac-tag">Google AI Studio</span>
            <span class="ac-tag">GitHub</span><span class="ac-tag">Tilda</span>
            <span class="ac-tag">Salebot</span><span class="ac-tag">Obsidian</span>
          </div>
          <div class="ac-journey">
            <div class="acj">
              <div class="acj-dot">01</div>
              <div>
                <div class="acj-p">2020–2025</div>
                <div class="acj-t">Novator.vip</div>
                <div class="acj-d">Регулярные продажи · маркетинг и автоматизация</div>
              </div>
            </div>
            <div class="acj">
              <div class="acj-dot">02</div>
              <div>
                <div class="acj-p">Точка перехода</div>
                <div class="acj-t">Закрыл агентство</div>
                <div class="acj-d">Ушёл в GenAI-разработку и live-кодинг</div>
              </div>
            </div>
            <div class="acj">
              <div class="acj-dot now">03</div>
              <div>
                <div class="acj-p">Сейчас · NCAi</div>
                <div class="acj-t">Три продукта</div>
                <div class="acj-d">Распаковка · Обучение · Книга · Соло R&D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rv d1">
        <span class="sec-tag">О себе</span>
        <h2 class="about-h2">От идеи до кода —<br>без посредников</h2>
        <p class="p">Предприниматель с системным подходом: пять лет руководил собственным агентством, выстроил регулярную модель продаж и довёл до результата 300+ проектов в автоматизации и маркетинге.</p>
        <p class="p">Сегодня фокус сместился в IT-разработку. С помощью генеративного AI самостоятельно проектирую и собираю функциональные цифровые продукты — <strong>без раздутой команды на старте</strong>.</p>
        <div class="about-alai">Это редкое сочетание: человек, который одновременно придумывает воронку и пишет код, который её обслуживает.</div>
        <p class="p">Баг, отказ рынка или неудачный тест — воспринимаю не как проблему, а как датасет для следующей итерации системы.</p>
        <div class="about-nums">
          <div><span class="an-n">100K+</span><span class="an-l">Заявок</span></div>
          <div><span class="an-n">3</span><span class="an-l">Продукта</span></div>
          <div><span class="an-n">6 · 30</span><span class="an-l">Глав · подглав в книге</span></div>
          <div><span class="an-n">4</span><span class="an-l">Соло-проекта</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

export const CLIENTS_HTML = `<!-- CLIENTS -->
<section id="clients">
  <div class="wrap">
    <span class="sec-tag rv">Работал с</span>
    <div class="clients-wrap rv d1">
      <span class="cl-pill stat">Школа Юлии Высоцкой</span>
      <span class="cl-pill stat">Школа Лео Шевченко</span>
      <span class="cl-pill stat">Фонд «Алёша»</span>
      <span class="cl-pill stat">Госпрограмма «Дальневосточный Гектар»</span>
      <span class="cl-pill">Школа WB · 100M ₽/год</span>
      <span class="cl-pill">«Aromath» · 17M ₽ на запуске</span>
      <span class="cl-pill">NeuroSpace</span>
      <span class="cl-pill">Университет Ельницкого</span>
      <span class="cl-pill">Клуб Здоровья</span>
      <span class="cl-pill">AI-Риелтор</span>
      <span class="cl-pill">Школа Трейдинга · 6.5M ₽</span>
      <span class="cl-pill">BBQ строительство</span>
    </div>
  </div>
</section>`;

export const SOLO_HTML = `<!-- SOLO PROJECTS -->
<section id="projects" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Соло R&D</span>
    <h2 class="sec-h2 rv d1">Никого не нанимал.<br>Собрал сам.</h2>
    <div class="proj-grid">
      <div class="pj rv">
        <div class="pj-icon">${icon("brain")}</div>
        <div class="pj-tag">HealthTech · AI</div>
        <div class="pj-title">Neuroflow</div>
        <p class="pj-desc">PPG-измерение через камеру телефона: ВСР, показатели нервной системы, интеграция с гаджетами</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d1">
        <div class="pj-icon">${icon("sword")}</div>
        <div class="pj-tag">Продуктивность</div>
        <div class="pj-title">Vlinx</div>
        <p class="pj-desc">Трекер дисциплины и привычек — каждая вредная привычка как «босс», которого нужно одолеть</p>
        <span class="pj-status">Тестирование</span>
      </div>
      <div class="pj rv d2">
        <div class="pj-icon">${icon("gamepad")}</div>
        <div class="pj-tag">EdTech · Дети</div>
        <div class="pj-title">Nezha_Quest</div>
        <p class="pj-desc">Трекер дисциплины ребёнка с системой последствий. Связка ребёнок–родитель</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d3">
        <div class="pj-icon">${icon("sparkle")}</div>
        <div class="pj-tag">Beauty · SaaS</div>
        <div class="pj-title">GAZE</div>
        <p class="pj-desc">SaaS-платформа для бьюти-мастеров: клиентская база, аналитика дохода, обучение и сертификаты</p>
        <span class="pj-status">Запущен</span>
      </div>
    </div>
  </div>
</section>`;

export const RD_STORIES_HTML = `<!-- RD STORIES: сцена → поворот → вывод -->
<section id="rd-stories">
  <div class="wrap">
    <span class="sec-tag rv">Истории R&D</span>
    <h2 class="sec-h2 rv d1">Не кейсы для портфолио —<br>эксперименты для себя</h2>
    <div class="rds-grid">
      <div class="rds rv">
        <div class="rds-tag">Neuroflow · HealthTech</div>
        <div class="rds-row"><span class="rds-l">Сцена</span><p>Один, без команды, взялся собрать измерение пульса и ВСР через камеру телефона.</p></div>
        <div class="rds-row"><span class="rds-l">Поворот</span><p>Проект вырос до <b>30 000+ строк кода</b> — объём, для которого раньше нанимали бы команду на месяцы.</p></div>
        <div class="rds-row"><span class="rds-l">Вывод</span><p>AI не думает за тебя — он снимает ограничение по рукам. Архитектура и решения остаются твоими.</p></div>
      </div>
      <div class="rds rv d1">
        <div class="rds-tag">GAZE · Beauty SaaS</div>
        <div class="rds-row"><span class="rds-l">Сцена</span><p>Нужен был не сайт-визитка, а рабочий инструмент для бьюти-мастеров: клиентская база, аналитика дохода, обучение.</p></div>
        <div class="rds-row"><span class="rds-l">Поворот</span><p>Выросло в полноценную SaaS-платформу: <b>26 000+ строк кода</b>, 25 экранов, своя база данных с изоляцией по мастеру — не прототип, а работающий продукт с подпиской.</p></div>
        <div class="rds-row"><span class="rds-l">Вывод</span><p>Один человек с AI может построить то, для чего раньше нужна была бы команда разработки на месяцы.</p></div>
      </div>
      <div class="rds rv d2">
        <div class="rds-tag">Эксперимент за $22</div>
        <div class="rds-row"><span class="rds-l">Сцена</span><p>Прежде чем что-то обещать клиентам, проверяю гипотезы сам — на свои деньги, на своих проектах.</p></div>
        <div class="rds-row"><span class="rds-l">Поворот</span><p>Одна из проверок обошлась в <b>$22</b> — и дала ответ быстрее, чем любая теоретическая дискуссия.</p></div>
        <div class="rds-row"><span class="rds-l">Вывод</span><p class="rds-note">Внутренний эксперимент NCAi, а не универсальное обещание клиенту.</p></div>
      </div>
    </div>
  </div>
</section>`;

export const PRINCIPLES_HTML = `<!-- PRINCIPLES: как я думаю (ТЗ п.32) -->
<section id="principles" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Как я думаю</span>
    <h2 class="sec-h2 rv d1">Семь принципов, на которых всё держится</h2>
    <div class="princ-grid">
      <div class="princ rv"><div class="princ-n">01</div><div class="princ-t">Интерес — тоже метрика</div></div>
      <div class="princ rv d1"><div class="princ-n">02</div><div class="princ-t">Ошибка — это данные</div></div>
      <div class="princ rv d2"><div class="princ-n">03</div><div class="princ-t">Система важнее усилия</div></div>
      <div class="princ rv"><div class="princ-n">04</div><div class="princ-t">Генерировать и строить — разные вещи</div></div>
      <div class="princ rv d1"><div class="princ-n">05</div><div class="princ-t">AI сокращает путь от идеи до результата</div></div>
      <div class="princ rv d2"><div class="princ-n">06</div><div class="princ-t">Хорошая система работает без постоянного ручного управления</div></div>
      <div class="princ rv"><div class="princ-n">07</div><div class="princ-t">Чем доступнее AI, тем важнее человек, который умеет думать</div></div>
    </div>
    <div class="princ-manifest rv d2">Я оцениваю свои действия по уровню интереса в процессе, а не по финальному результату.</div>
  </div>
</section>`;

export const PERSONAL_HTML = `<!-- PERSONAL LAYER: фото-плейсхолдеры (ТЗ п.7-9, 14-16, 48) -->
<section id="personal">
  <div class="wrap">
    <span class="sec-tag rv">Помимо работы</span>
    <h2 class="sec-h2 rv d1">За системами и продуктами — обычная жизнь</h2>
    <div class="pers-grid">
      <div class="pers-item rv">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">💻</div><div class="photo-ph-label">[ФОТО — ИЛЬЯ ЗА РАБОТОЙ]</div></div></div>
        <p class="pers-cap">R&D — ноутбук, код, эксперимент</p>
      </div>
      <div class="pers-item rv d1">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">🥊</div><div class="photo-ph-label">[ФОТО — СПОРТ]</div></div></div>
        <p class="pers-cap">Бег · бокс · плавание · ходьба</p>
      </div>
      <div class="pers-item rv d2">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">🚗</div><div class="photo-ph-label">[ФОТО — АЛТАЙ]</div></div></div>
        <p class="pers-cap">≈9000 км Москва → Алтай, 25+ городов</p>
      </div>
      <div class="pers-item rv">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">👨‍👩‍👦</div><div class="photo-ph-label">[ФОТО — СЕМЬЯ]</div></div></div>
        <p class="pers-cap">Женат, сын, два кота. За семью, за своих.</p>
      </div>
      <div class="pers-item rv d1">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">🎤</div><div class="photo-ph-label">[ФОТО — ВЫСТУПЛЕНИЕ]</div></div></div>
        <p class="pers-cap">Сцена, аудитория</p>
      </div>
      <div class="pers-item rv d2">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">📦</div><div class="photo-ph-label">[ФОТО — ПРОДУКТ]</div></div></div>
        <p class="pers-cap">Рядом с тем, что собрал сам</p>
      </div>
    </div>
  </div>
</section>`;

export const CLOSING_HTML = `<!-- CLOSING CTA -->
<section id="closing">
  <div class="wrap">
    <span class="sec-tag rv is-center">Готов начать</span>
    <h2 class="closing-h2 rv d1">Не разговор «про AI вообще» —<br>конкретный первый шаг</h2>
    <p class="closing-lead rv d1">Три шага — от разбора за 190 ₽ до рабочего агентства. Всё ведёт в одну систему, ничего не платится дважды.</p>

    <div class="closing-paths rv d2">
      <a href="/book" class="closing-path">
        <div class="cp-n">0</div>
        <div class="cp-t">Прочитать книгу</div>
        <div class="cp-s">Бесплатно · 30 подглав о механике продаж</div>
      </a>
      <a href="/raspakovka" class="closing-path cp-main">
        <div class="cp-n">1</div>
        <div class="cp-t">Распаковка агентства</div>
        <div class="cp-s">Разбор 190 ₽ → распаковка 19 900 ₽ — руль сразу у вас</div>
      </a>
      <a href="/ai-training" class="closing-path">
        <div class="cp-n">2</div>
        <div class="cp-t">Обучение AI</div>
        <div class="cp-s">1 месяц · 2 сессии — создаёшь реальный продукт с нуля · 70–80к ₽</div>
      </a>
    </div>

    <div class="closing-acts rv d3">
      <a href="/raspakovka#offer" class="bp">Обсудить проект →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Написать напрямую</a>
    </div>
  </div>
</section>`;

// ─────────────────────────────────────────────────────────────────────────────
// EN — английские версии секций (для переключателя языка, см. Bilingual.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export const HERO_HTML_EN = `<!-- HERO -->
<section id="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  ${FLOW_HTML}
  <div class="hero-inner">
    <!-- LEFT -->
    <div>
      <div class="hero-badge"><span class="bdot"></span>Systems Architect · NCAi</div>
      <h1 class="hero-name"><em>Ilya</em><span class="acc">Novitsky</span></h1>
      <div class="hero-role">For business — a ready-made AI agency. For specialists — your own AI team</div>
      <p class="hero-quote">"An entrepreneur's product thinking + a developer's hands. What comes out is a working product, not a promise"</p>
      <div class="hero-meta">
        <div class="hm">Location<span>Moscow / remote</span></div>
        <div class="hm">For business<span>Agency unboxing · AI training</span></div>
        <div class="hm">For specialists<span>AI department on tap · higher rate</span></div>
      </div>
      <div class="hero-stats">
        <div class="hstat"><div class="hstat-n">300+</div><div class="hstat-l">Projects</div></div>
        <div class="hstat"><div class="hstat-n">50M ₽</div><div class="hstat-l">In launches</div></div>
        <div class="hstat"><div class="hstat-n">5</div><div class="hstat-l">Years running an agency</div></div>
        <div class="hstat"><div class="hstat-n">1</div><div class="hstat-l">Book published</div></div>
      </div>
    </div>
    <!-- RIGHT — PRODUCT CARDS -->
    <div class="hero-right">
      <div class="pc-group-label">For business</div>
      <div class="product-cards">
        <a href="/raspakovka" class="pc pc-consulting" style="--c:#FFD000">
          <div class="pc-icon">${icon("box", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Agency Unboxing</div>
            <div class="pc-title">A digital department in 4 steps</div>
            <div class="pc-sub">Unboxed in the bot · your own AI agents, a task board, control stays with you from day one · 19 900 ₽</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/ai-training" class="pc pc-training" style="--c:#4ECDC4">
          <div class="pc-icon">${icon("bolt", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">AI Training</div>
            <div class="pc-title">1 month · 70–80K ₽</div>
            <div class="pc-sub">2 sessions + agency unboxing — you build a real product from scratch</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/book" class="pc pc-book" style="--c:#B4A7D6">
          <div class="pc-icon">${icon("book", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Book · Free</div>
            <div class="pc-title">Neuro-Funnel</div>
            <div class="pc-sub">The neuroscience of sales and AI automation. 6 chapters.</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
      </div>
      <div class="pc-group-label pc-group-label-alt">Looking for a tech partner</div>
      <div class="product-cards">
        <a href="/portfolio" class="pc pc-portfolio" style="--c:#ff9d2e">
          <div class="pc-icon">${icon("target", "var(--c)")}</div>
          <div class="pc-body">
            <div class="pc-label">Main · Joining your business</div>
            <div class="pc-title">A month of work together</div>
            <div class="pc-sub">First I show a result on your task for free. If it lands, I join for a month: from 200,000 ₽</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
      </div>
    </div>
  </div>
  <div class="scroll-hint">
    <div class="sh-txt">More below</div>
    <div class="sh-line"></div>
  </div>
</section>`;

export const INTRO_HTML_EN = `<!-- INTRO -->
<section id="intro">
  <div class="wrap intro-wrap">
    <span class="sec-tag rv">In short: who I am</span>
    <p class="p intro-lead rv d1">Entrepreneur and developer. Spent five years building and running my own agency (2020–2025), exited the business on November 7, 2025 — and have been building AI systems myself ever since, from idea to code.</p>
    <div class="intro-split rv d2">
      <div class="intro-half">
        <div class="intro-split-tag">Ilya Novitsky</div>
        <div class="intro-split-x">The person. An entrepreneur, developer, systems architect. Writing a book, running R&D projects, speaking.</div>
      </div>
      <div class="intro-arr">≠</div>
      <div class="intro-half">
        <div class="intro-split-tag">NCAi</div>
        <div class="intro-split-x">The product. An "agency in a box" platform that Ilya builds and sells — not him personally.</div>
      </div>
    </div>
  </div>
</section>`;

export const VIDEO_HTML_EN = `<!-- VIDEO -->
<section id="video-intro">
  <div class="wrap">
    <div class="video-wrap">
      <p class="video-eyebrow rv">"If you want to understand who I am and what I do — I'll tell you in two minutes"</p>
      <div class="video-ph rv d1">
        <div class="video-ph-inner">
          <div class="video-ph-play">▶</div>
          <div class="video-ph-label">Video — a personal message from Ilya</div>
          <div class="video-ph-sub">60–120 seconds · coming soon</div>
        </div>
      </div>
    </div>
  </div>
</section>`;

export const JOURNEY_HTML_EN = `<!-- JOURNEY -->
<section id="journey" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">My path</span>
    <h2 class="sec-h2 rv d1">300+ projects since 2016 — practice, not theory</h2>
    <p class="p journey-lead rv d1">Competence didn't appear overnight. It was built over years: from first sales to architecting AI systems.</p>

    <div class="jrn">
      <div class="jrn-item rv">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2016</div><div class="jrn-t">Decided to become an entrepreneur</div><div class="jrn-x">The starting point. First sales — goods imported from China.</div></div>
      </div>
      <div class="jrn-item rv d1">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2016–2017</div><div class="jrn-t">First skills</div><div class="jrn-x">To sell, I had to learn websites, Yandex Direct, marketing, packaging, analytics. One skill pulled the next one with it.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2017–2018</div><div class="jrn-t">First automated funnel</div><div class="jrn-x">Built my first automated sales funnel and made over 1M ₽.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">2018–2022</div><div class="jrn-t">Projects, partnerships, launches</div><div class="jrn-x">Wins and failures. Each one a dataset for the next iteration, not a reason to stop.</div></div>
      </div>
      <div class="jrn-item rv">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">300+ projects</div><div class="jrn-t">Deep hands-on experience</div><div class="jrn-x">Not theory — hundreds of real launches across different niches.</div></div>
      </div>
      <div class="jrn-item rv d1">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">5 years</div><div class="jrn-t">Novator.vip agency</div><div class="jrn-x">A team, clients, a full pipeline — a working business from the outside. From the inside, the model had stopped growing properly: pedaling hard, but running on a treadmill.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">Rethinking</div><div class="jrn-t">Pushing the old system harder won't fix it</div><div class="jrn-x">The model had stopped growing long before. It became clear: fixing myself just to return to the old system wasn't the answer.</div></div>
      </div>
      <div class="jrn-item rv jrn-mark">
        <div class="jrn-dot jrn-dot-mark"></div>
        <div class="jrn-body"><div class="jrn-y">November 7, 2025</div><div class="jrn-t">Exited the business</div><div class="jrn-x">Not "push the system harder," but admitting: it no longer works. A decision, not a breakdown.</div></div>
      </div>
      <div class="jrn-item rv d1">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">AI</div><div class="jrn-t">A new tool for the same principle</div><div class="jrn-x">Back in 2020 I was already explaining CRMs, bots, and automation to clients. AI is the next stage of the same idea — just a far more powerful tool.</div></div>
      </div>
      <div class="jrn-item rv d2">
        <div class="jrn-dot"></div>
        <div class="jrn-body"><div class="jrn-y">Development · R&D</div><div class="jrn-t">Building it myself, out of interest</div><div class="jrn-x">Neuroflow, Vlinx, Nezha_Quest, Gaze Architecture — not always to sell, but to test whether it's even possible.</div></div>
      </div>
      <div class="jrn-item rv jrn-now">
        <div class="jrn-dot jrn-dot-now"></div>
        <div class="jrn-body"><div class="jrn-y">Now · NCAi</div><div class="jrn-t">Entrepreneurship + product + development + AI</div><div class="jrn-x">Building my own system — not to sell it once, but so it runs on its own.</div></div>
      </div>
    </div>
  </div>
</section>`;

export const MECHANISM_HTML_EN = `<!-- MECHANISM -->
<section id="mechanism" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv is-center">What I ended up building</span>
    <h2 class="sec-h2 rv d1" style="text-align:center">You write the task —<br>by evening, the result is ready in the panel</h2>
    <p class="p mech-lead rv d1">The same system that carried me from 2016 to now — except now you can deploy it for your own business too. Not an abstract "AI assistant" or a chat with a bot: you give the AI director a task, it decides who on the team should handle it, and the result plus the AI spend land in one panel. Works for a business owner and for a specialist building their own AI department alike.</p>

    <div class="panelmock rv d2">
      <div class="pm-bar"><span class="pm-dot"></span><span class="pm-dot"></span><span class="pm-dot"></span><span class="pm-url">ncai · panel</span></div>
      <div class="pm-tabs">
        <span class="pm-tab">Home</span><span class="pm-tab act">Projects</span><span class="pm-tab">Team</span><span class="pm-tab">Analytics</span><span class="pm-tab">Services</span>
      </div>
      <div class="pm-body">
        <div class="mech-task-flow">
          <div class="mech-task-card">
            <div class="mech-task-h">Incoming task</div>
            <div class="mech-task-t">"Put together a weekly price list"</div>
          </div>
          <div class="mech-task-arrow">→</div>
          <div class="mech-task-card director">
            <div class="mech-task-h">${icon("compass", "currentColor")} Director</div>
            <div class="mech-task-t">Breaks it into subtasks, assigns a role</div>
          </div>
          <div class="mech-task-arrow">→</div>
          <div class="mech-task-card">
            <div class="mech-task-h">${icon("code", "currentColor")} Developer</div>
            <div class="mech-task-t">Status: <b>in progress</b> → report to director</div>
          </div>
        </div>
        <div class="pm-tline">
          <div class="pm-tl"><span class="pm-tl-ico">${icon("check", "var(--a)")}</span><span class="pm-tl-n">Done — director reviewed the result</span><span class="pm-tl-v">closed</span></div>
        </div>
        <div class="pm-cost-note">This isn't "chat with a neural network," it's a pipeline: a task goes through intake, gets handled by the right role, and only closes after peer review — two independent checks by other agents. Overnight, a night-shift driver handles tasks (24/7), memory and the knowledge base are pulled in by meaning (RAG), and complex tasks go to a stronger model while routine ones go to a lighter one. AI spend for every step shows up in the same panel. <a href="/raspakovka#screens" style="color:var(--a);text-decoration:none;border-bottom:1px solid var(--a)">Live screenshots of the system →</a></div>
      </div>
    </div>
  </div>
</section>`;

export const PRODUCTS_HTML_EN = `<!-- PRODUCTS -->
<section id="products" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">What I do</span>
    <h2 class="sec-h2 rv d1">From a free book —<br>to a ready AI agency for 19 900 ₽</h2>
    <div class="products-grid">

      <a href="/raspakovka" class="prod-card c1 rv">
        <div class="prod-stripe" style="--stripe:#FFD000"></div>
        <div class="prod-top">
          <div class="prod-icon">${icon("box", "var(--stripe)")}</div>
          <div class="prod-type">Agency unboxing · business + specialists</div>
          <div class="prod-title">Agency in a box in 4 steps</div>
          <p class="prod-desc">I deploy working AI agents in a panel: built for your tasks, with a task board and AI spend control. Unboxed in the bot — control stays with you from day one, no dependency on me.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Agents are ready from step one</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>1–5 AI agents built for your tasks</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>AI spend control in the panel, 24/7</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>You're in control from day one</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>One-time</span>19 900 ₽</div>
          <div class="prod-link">Learn more →</div>
        </div>
      </a>

      <a href="/ai-training" class="prod-card c2 rv d1">
        <div class="prod-stripe" style="--stripe:#4ECDC4"></div>
        <div class="prod-top">
          <div class="prod-icon">${icon("bolt", "var(--stripe)")}</div>
          <div class="prod-type">AI training · B2C</div>
          <div class="prod-title">Learn to work with AI hands-on, in a month</div>
          <p class="prod-desc">2 one-on-one sessions + an NCAi agency unboxing. No theory in a vacuum — we take your real project and build it together. You leave with a working product, a skill, and your own AI agency.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Claude, Gemini, ChatGPT, Cursor — when to use what</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Build a site, a book, an automation</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>A month of support + 111 prompts as a gift</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Online · 1–2 people at a time</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Price</span>70–80K ₽ / month</div>
          <div class="prod-link">Learn more →</div>
        </div>
      </a>

      <a href="/book" class="prod-card c3 rv d2">
        <div class="prod-stripe" style="--stripe:#B4A7D6"></div>
        <div class="prod-top">
          <div class="prod-icon">${icon("book", "var(--stripe)")}</div>
          <div class="prod-type">Book · Free</div>
          <div class="prod-title">Neuro-Funnel</div>
          <p class="prod-desc">A practical guide to engineering sales systems. Neuroscience, behavioral psychology and AI — no filler, with visualizations, 30 subchapters.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>6 chapters · 30 subchapters</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Cognitive traps, funnels, traffic</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>AI automation from A to Z</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Read right on the site</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Access</span>Free</div>
          <div class="prod-link">Read →</div>
        </div>
      </a>

    </div>
  </div>
</section>`;

export const ABOUT_HTML_EN = `<!-- ABOUT -->
<section id="about" class="sec-light">
  <div class="wrap">
    <div class="about-layout">
      <div class="about-visual rv">
        <div class="about-card">
          <div class="ac-top">
            <div class="ac-ava">I</div>
            <div>
              <div class="ac-name">Ilya Novitsky</div>
              <div class="ac-role">Systems architect · NCAi</div>
            </div>
          </div>
          <div class="ac-stack">
            <span class="ac-tag">VS Code</span><span class="ac-tag">Cursor</span>
            <span class="ac-tag">Claude</span><span class="ac-tag">Google AI Studio</span>
            <span class="ac-tag">GitHub</span><span class="ac-tag">Tilda</span>
            <span class="ac-tag">Salebot</span><span class="ac-tag">Obsidian</span>
          </div>
          <div class="ac-journey">
            <div class="acj">
              <div class="acj-dot">01</div>
              <div>
                <div class="acj-p">2020–2025</div>
                <div class="acj-t">Novator.vip</div>
                <div class="acj-d">Steady sales · marketing and automation</div>
              </div>
            </div>
            <div class="acj">
              <div class="acj-dot">02</div>
              <div>
                <div class="acj-p">Turning point</div>
                <div class="acj-t">Closed the agency</div>
                <div class="acj-d">Moved into GenAI development and live-coding</div>
              </div>
            </div>
            <div class="acj">
              <div class="acj-dot now">03</div>
              <div>
                <div class="acj-p">Now · NCAi</div>
                <div class="acj-t">Three products</div>
                <div class="acj-d">Unboxing · Training · Book · Solo R&D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rv d1">
        <span class="sec-tag">About me</span>
        <h2 class="about-h2">From idea to code —<br>no middlemen</h2>
        <p class="p">An entrepreneur with a systems mindset: ran my own agency for five years, built a repeatable sales model, and carried 300+ projects in automation and marketing through to results.</p>
        <p class="p">Today the focus has shifted to software development. With generative AI I design and build functional digital products myself — <strong>without a bloated team from day one</strong>.</p>
        <div class="about-alai">A rare combination: someone who designs the funnel and writes the code that runs it.</div>
        <p class="p">A bug, a market rejection, a failed test — I don't treat those as problems, but as data for the next iteration of the system.</p>
        <div class="about-nums">
          <div><span class="an-n">100K+</span><span class="an-l">Leads</span></div>
          <div><span class="an-n">3</span><span class="an-l">Products</span></div>
          <div><span class="an-n">6 · 30</span><span class="an-l">Chapters · subchapters in the book</span></div>
          <div><span class="an-n">4</span><span class="an-l">Solo projects</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

export const CLIENTS_HTML_EN = `<!-- CLIENTS -->
<section id="clients">
  <div class="wrap">
    <span class="sec-tag rv">Worked with</span>
    <div class="clients-wrap rv d1">
      <span class="cl-pill stat">Yulia Vysotskaya's School</span>
      <span class="cl-pill stat">Leo Shevchenko's School</span>
      <span class="cl-pill stat">"Alyosha" Foundation</span>
      <span class="cl-pill stat">"Far East Hectare" state program</span>
      <span class="cl-pill">WB School · 100M ₽/year</span>
      <span class="cl-pill">"Aromath" · 17M ₽ at launch</span>
      <span class="cl-pill">NeuroSpace</span>
      <span class="cl-pill">Yelnitsky University</span>
      <span class="cl-pill">Health Club</span>
      <span class="cl-pill">AI Realtor</span>
      <span class="cl-pill">Trading School · 6.5M ₽</span>
      <span class="cl-pill">BBQ construction</span>
    </div>
  </div>
</section>`;

export const SOLO_HTML_EN = `<!-- SOLO PROJECTS -->
<section id="projects" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Solo R&D</span>
    <h2 class="sec-h2 rv d1">Never hired anyone.<br>Built it myself.</h2>
    <div class="proj-grid">
      <div class="pj rv">
        <div class="pj-icon">${icon("brain")}</div>
        <div class="pj-tag">HealthTech · AI</div>
        <div class="pj-title">Neuroflow</div>
        <p class="pj-desc">PPG measurement via phone camera: HRV, nervous system markers, device integration</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d1">
        <div class="pj-icon">${icon("sword")}</div>
        <div class="pj-tag">Productivity</div>
        <div class="pj-title">Vlinx</div>
        <p class="pj-desc">A discipline and habit tracker — every bad habit is a "boss" you have to defeat</p>
        <span class="pj-status">Testing</span>
      </div>
      <div class="pj rv d2">
        <div class="pj-icon">${icon("gamepad")}</div>
        <div class="pj-tag">EdTech · Kids</div>
        <div class="pj-title">Nezha_Quest</div>
        <p class="pj-desc">A child discipline tracker with a consequence system. A child–parent link</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d3">
        <div class="pj-icon">${icon("sparkle")}</div>
        <div class="pj-tag">Beauty · SaaS</div>
        <div class="pj-title">GAZE</div>
        <p class="pj-desc">A SaaS platform for beauty professionals: a client base, income analytics, training and certificates</p>
        <span class="pj-status">Launched</span>
      </div>
    </div>
  </div>
</section>`;

export const RD_STORIES_HTML_EN = `<!-- RD STORIES -->
<section id="rd-stories">
  <div class="wrap">
    <span class="sec-tag rv">R&D stories</span>
    <h2 class="sec-h2 rv d1">Not portfolio case studies —<br>experiments for myself</h2>
    <div class="rds-grid">
      <div class="rds rv">
        <div class="rds-tag">Neuroflow · HealthTech</div>
        <div class="rds-row"><span class="rds-l">Scene</span><p>Alone, with no team, I set out to measure heart rate and HRV through a phone camera.</p></div>
        <div class="rds-row"><span class="rds-l">Turn</span><p>The project grew to <b>30,000+ lines of code</b> — the kind of scope that used to require hiring a team for months.</p></div>
        <div class="rds-row"><span class="rds-l">Takeaway</span><p>AI doesn't think for you — it removes the limit on how much you can build with your own hands. The architecture and decisions stay yours.</p></div>
      </div>
      <div class="rds rv d1">
        <div class="rds-tag">GAZE · Beauty SaaS</div>
        <div class="rds-row"><span class="rds-l">Scene</span><p>What was needed wasn't a landing page, but a real working tool for beauty professionals: a client base, income analytics, training.</p></div>
        <div class="rds-row"><span class="rds-l">Turn</span><p>It grew into a full SaaS platform: <b>26,000+ lines of code</b>, 25 screens, its own database with per-professional isolation — not a prototype, a working subscription product.</p></div>
        <div class="rds-row"><span class="rds-l">Takeaway</span><p>One person with AI can build what used to require a development team for months.</p></div>
      </div>
      <div class="rds rv d2">
        <div class="rds-tag">A $22 experiment</div>
        <div class="rds-row"><span class="rds-l">Scene</span><p>Before promising anything to clients, I test hypotheses myself — with my own money, on my own projects.</p></div>
        <div class="rds-row"><span class="rds-l">Turn</span><p>One of those tests cost <b>$22</b> — and gave an answer faster than any theoretical debate could.</p></div>
        <div class="rds-row"><span class="rds-l">Takeaway</span><p class="rds-note">An internal NCAi experiment, not a universal promise to clients.</p></div>
      </div>
    </div>
  </div>
</section>`;

export const PRINCIPLES_HTML_EN = `<!-- PRINCIPLES -->
<section id="principles" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">How I think</span>
    <h2 class="sec-h2 rv d1">Seven principles everything rests on</h2>
    <div class="princ-grid">
      <div class="princ rv"><div class="princ-n">01</div><div class="princ-t">Interest is a metric too</div></div>
      <div class="princ rv d1"><div class="princ-n">02</div><div class="princ-t">A mistake is data</div></div>
      <div class="princ rv d2"><div class="princ-n">03</div><div class="princ-t">The system matters more than the effort</div></div>
      <div class="princ rv"><div class="princ-n">04</div><div class="princ-t">Generating and building are different things</div></div>
      <div class="princ rv d1"><div class="princ-n">05</div><div class="princ-t">AI shortens the path from idea to result</div></div>
      <div class="princ rv d2"><div class="princ-n">06</div><div class="princ-t">A good system runs without constant manual steering</div></div>
      <div class="princ rv"><div class="princ-n">07</div><div class="princ-t">The more accessible AI gets, the more a person who can think matters</div></div>
    </div>
    <div class="princ-manifest rv d2">I judge my own actions by how interesting the process was, not by the final result.</div>
  </div>
</section>`;

export const PERSONAL_HTML_EN = `<!-- PERSONAL LAYER -->
<section id="personal">
  <div class="wrap">
    <span class="sec-tag rv">Beyond work</span>
    <h2 class="sec-h2 rv d1">Behind the systems and products — an ordinary life</h2>
    <div class="pers-grid">
      <div class="pers-item rv">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">💻</div><div class="photo-ph-label">[PHOTO — ILYA AT WORK]</div></div></div>
        <p class="pers-cap">R&D — laptop, code, experiment</p>
      </div>
      <div class="pers-item rv d1">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">🥊</div><div class="photo-ph-label">[PHOTO — SPORT]</div></div></div>
        <p class="pers-cap">Running · boxing · swimming · hiking</p>
      </div>
      <div class="pers-item rv d2">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">🚗</div><div class="photo-ph-label">[PHOTO — ALTAI]</div></div></div>
        <p class="pers-cap">≈9,000 km Moscow → Altai, 25+ cities</p>
      </div>
      <div class="pers-item rv">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">👨‍👩‍👦</div><div class="photo-ph-label">[PHOTO — FAMILY]</div></div></div>
        <p class="pers-cap">Married, a son, two cats. Family first, for my own.</p>
      </div>
      <div class="pers-item rv d1">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">🎤</div><div class="photo-ph-label">[PHOTO — TALK]</div></div></div>
        <p class="pers-cap">Stage, audience</p>
      </div>
      <div class="pers-item rv d2">
        <div class="photo-ph"><div class="photo-ph-inner"><div class="photo-ph-icon">📦</div><div class="photo-ph-label">[PHOTO — PRODUCT]</div></div></div>
        <p class="pers-cap">Next to something I built myself</p>
      </div>
    </div>
  </div>
</section>`;

export const CLOSING_HTML_EN = `<!-- CLOSING CTA -->
<section id="closing">
  <div class="wrap">
    <span class="sec-tag rv is-center">Ready to start</span>
    <h2 class="closing-h2 rv d1">Not a chat "about AI in general" —<br>a concrete first step</h2>
    <p class="closing-lead rv d1">Three steps — from a 190 ₽ breakdown to a working agency. It all leads into one system, nothing gets paid for twice.</p>

    <div class="closing-paths rv d2">
      <a href="/book" class="closing-path">
        <div class="cp-n">0</div>
        <div class="cp-t">Read the book</div>
        <div class="cp-s">Free · 30 subchapters on the mechanics of sales</div>
      </a>
      <a href="/raspakovka" class="closing-path cp-main">
        <div class="cp-n">1</div>
        <div class="cp-t">Agency unboxing</div>
        <div class="cp-s">190 ₽ breakdown → 19 900 ₽ unboxing — you stay in control</div>
      </a>
      <a href="/ai-training" class="closing-path">
        <div class="cp-n">2</div>
        <div class="cp-t">AI training</div>
        <div class="cp-s">1 month · 2 sessions — you build a real product from scratch · 70–80K ₽</div>
      </a>
    </div>

    <div class="closing-acts rv d3">
      <a href="/raspakovka#offer" class="bp">Discuss a project →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Write directly</a>
    </div>
  </div>
</section>`;
