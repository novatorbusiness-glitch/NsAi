// Секции главной (HTML из index-content, разбито по ТЗ NCAI_SPEC).

export const HERO_HTML = `<!-- HERO -->
<section id="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <canvas id="cvs"></canvas>
  <div class="hero-inner">
    <!-- LEFT -->
    <div>
      <div class="hero-badge"><span class="bdot"></span>Архитектор систем · NCAi</div>
      <h1 class="hero-name"><em>Илья</em><span class="acc">Новицкий</span></h1>
      <div class="hero-role">Бизнесу — рабочее AI-агентство. Стартапам — технический партнёр</div>
      <p class="hero-quote">«Соединяю продуктовое мышление предпринимателя с руками разработчика — на выходе рабочий продукт, а не обещание на бумаге»</p>
      <div class="hero-meta">
        <div class="hm">Локация<span>Москва / удалённо</span></div>
        <div class="hm">Для бизнеса<span>Внедрение NCAi · обучение AI</span></div>
        <div class="hm">Для стартапов<span>Tech-партнёрство · Web3 · HealthTech</span></div>
      </div>
      <div class="hero-stats">
        <div class="hstat"><div class="hstat-n">300+</div><div class="hstat-l">Проектов</div></div>
        <div class="hstat"><div class="hstat-n">50M ₽</div><div class="hstat-l">В запусках</div></div>
        <div class="hstat"><div class="hstat-n">3+</div><div class="hstat-l">Года агентства</div></div>
        <div class="hstat"><div class="hstat-n">1</div><div class="hstat-l">Книга издана</div></div>
      </div>
    </div>
    <!-- RIGHT — PRODUCT CARDS -->
    <div class="hero-right">
      <div class="pc-group-label">Для бизнеса</div>
      <div class="product-cards">
        <a href="/consulting" class="pc pc-consulting" style="--c:#FFD000">
          <div class="pc-icon">📦</div>
          <div class="pc-body">
            <div class="pc-label">Внедрение NCAi</div>
            <div class="pc-title">Агентство за 30 дней</div>
            <div class="pc-sub">Агентство в коробке: распаковка, AI-команда, система в панели</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/raspakovka" class="pc pc-raspakovka" style="--c:#8FD694">
          <div class="pc-icon">🧩</div>
          <div class="pc-body">
            <div class="pc-label">Сессия-распаковка</div>
            <div class="pc-title">Цифровой отдел за 1 сессию</div>
            <div class="pc-sub">60–90 минут · 25 000 ₽, входит в стоимость внедрения</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/ai-training" class="pc pc-training" style="--c:#4ECDC4">
          <div class="pc-icon">⚡</div>
          <div class="pc-body">
            <div class="pc-label">Обучение AI</div>
            <div class="pc-title">1 месяц · 70–80к ₽</div>
            <div class="pc-sub">5–6 сессий, создаёшь реальный продукт с нуля</div>
          </div>
          <div class="pc-arr">→</div>
        </a>
        <a href="/book" class="pc pc-book" style="--c:#B4A7D6">
          <div class="pc-icon">📖</div>
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
          <div class="pc-icon">🎯</div>
          <div class="pc-body">
            <div class="pc-label">Портфолио · Найм</div>
            <div class="pc-title">Tech Product Partner</div>
            <div class="pc-sub">Fix от 200K + опцион. Web3, HealthTech, AI</div>
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
    <h2 class="sec-h2 rv d1">С 2016 года — шаг за шагом</h2>
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
        <div class="jrn-body"><div class="jrn-y">2017–2022</div><div class="jrn-t">Проекты, партнёрства, запуски</div><div class="jrn-x">Успехи и провалы. Каждый — датасет для следующей итерации, а не повод остановиться.</div></div>
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
        <div class="jrn-body"><div class="jrn-y">Переосмысление</div><div class="jrn-t">Усиление старой системы не решит проблему</div><div class="jrn-x">Загрузил сотни рабочих диалогов в AI и посмотрел на собственное поведение со стороны. Увидел повторяющиеся паттерны.</div></div>
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
    <span class="sec-tag rv">Как это устроено</span>
    <h2 class="sec-h2 rv d1" style="text-align:center">Задача попадает в систему —<br>результат выходит из панели</h2>
    <p class="p mech-lead rv d1">Не абстрактный «AI-помощник» и не чат с ботом. Рабочая цепочка: ты формулируешь задачу, AI-директор распределяет её между цифровыми сотрудниками по отделам, результат собирается в одной панели — не в переписке.</p>

    <div class="mech-flow">
      <div class="mech-node rv d2">
        <div class="mech-node-ico">🧑‍💻</div>
        <div class="mech-node-t">Ты</div>
        <div class="mech-node-s">Формулируешь задачу</div>
      </div>

      <div class="mech-line rv d2"><i class="mech-pulse"></i></div>

      <div class="mech-node mech-node-a rv d2">
        <div class="mech-node-ico">🧭</div>
        <div class="mech-node-t">AI-директор</div>
        <div class="mech-node-s">Распределяет по отделам</div>
      </div>

      <div class="mech-line rv d3"><i class="mech-pulse"></i></div>

      <div class="mech-depts rv d3">
        <div class="mech-dept" style="--i:0"><div class="mech-dept-ico">💻</div><div class="mech-dept-t">Разработка</div></div>
        <div class="mech-dept" style="--i:1"><div class="mech-dept-ico">📣</div><div class="mech-dept-t">Маркетинг</div></div>
        <div class="mech-dept" style="--i:2"><div class="mech-dept-ico">✍️</div><div class="mech-dept-t">Контент</div></div>
        <div class="mech-dept" style="--i:3"><div class="mech-dept-ico">💰</div><div class="mech-dept-t">Финансы</div></div>
      </div>

      <div class="mech-line rv d3"><i class="mech-pulse"></i></div>

      <div class="mech-node mech-node-r rv d3">
        <div class="mech-node-ico">📊</div>
        <div class="mech-node-t">Результат в панели</div>
        <div class="mech-node-s">Прозрачно, 24/7</div>
      </div>
    </div>
  </div>
</section>`;

export const PRODUCTS_HTML = `<!-- PRODUCTS -->
<section id="products" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Чем занимаюсь</span>
    <h2 class="sec-h2 rv d1">Три направления.<br>Выбери своё.</h2>
    <div class="products-grid">

      <a href="/consulting" class="prod-card c1 rv">
        <div class="prod-stripe" style="--stripe:#FFD000"></div>
        <div class="prod-top">
          <div class="prod-icon">📦</div>
          <div class="prod-type">Внедрение NCAi · B2B</div>
          <div class="prod-title">Агентство в коробке за 30 дней</div>
          <p class="prod-desc">Внедряю рабочее NCAi-агентство в панели: AI-команда, отделы, задачи, база клиентов и аналитика. Распаковка за 60–90 минут, передача руля через 30 дней — зависимости нет.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Распаковка: агентство готово с первой сессии</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>AI-команда 3–5 цифровых сотрудников</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Аналитика и финансы в панели 24/7</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Передача руля — клиент ведёт сам</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Длительность</span>30 дней</div>
          <div class="prod-link">Подробнее →</div>
        </div>
      </a>

      <a href="/ai-training" class="prod-card c2 rv d1">
        <div class="prod-stripe" style="--stripe:#4ECDC4"></div>
        <div class="prod-top">
          <div class="prod-icon">⚡</div>
          <div class="prod-type">Обучение AI · B2C</div>
          <div class="prod-title">Научись работать с AI руками за месяц</div>
          <p class="prod-desc">5–6 сессий 1 на 1. Никакой теории в пустоту — берём твой реальный проект и собираем его вместе. Уходишь с работающим продуктом и навыком.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Claude, Gemini, ChatGPT, Cursor — когда что</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Создаёшь сайт, книгу, автоматизацию</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Запись каждого занятия остаётся</span></div>
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
          <div class="prod-icon">📖</div>
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
                <div class="acj-p">2017–2023</div>
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
                <div class="acj-d">Консалтинг · Обучение · Книга · Соло R&D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rv d1">
        <span class="sec-tag">О себе</span>
        <h2 class="about-h2">От идеи до кода —<br>без посредников</h2>
        <p class="p">Предприниматель с системным подходом: больше трёх лет руководил собственным агентством, выстроил регулярную модель продаж и довёл до результата 300+ проектов в автоматизации и маркетинге.</p>
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
        <div class="pj-icon">🧠</div>
        <div class="pj-tag">HealthTech · AI</div>
        <div class="pj-title">Neuroflow</div>
        <p class="pj-desc">PPG-измерение через камеру телефона: ВСР, показатели нервной системы, интеграция с гаджетами</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d1">
        <div class="pj-icon">⚔️</div>
        <div class="pj-tag">Продуктивность</div>
        <div class="pj-title">Vlinx</div>
        <p class="pj-desc">Трекер дисциплины и привычек — каждая вредная привычка как «босс», которого нужно одолеть</p>
        <span class="pj-status">Тестирование</span>
      </div>
      <div class="pj rv d2">
        <div class="pj-icon">🎮</div>
        <div class="pj-tag">EdTech · Дети</div>
        <div class="pj-title">Nezha_Quest</div>
        <p class="pj-desc">Трекер дисциплины ребёнка с системой последствий. Связка ребёнок–родитель</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d3">
        <div class="pj-icon">✨</div>
        <div class="pj-tag">Beauty · Web</div>
        <div class="pj-title">Gaze Architecture</div>
        <p class="pj-desc">Многостраничный сайт под ключ для бьюти-сферы — витрина, которая продаёт мастера</p>
        <span class="pj-status">Запущен</span>
      </div>
    </div>
  </div>
</section>`;

export const PRINCIPLES_HTML = `<!-- PRINCIPLES: как я думаю (ТЗ п.32) -->
<section id="principles" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">Как я думаю</span>
    <h2 class="sec-h2 rv d1">Несколько принципов, на которых всё держится</h2>
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
    <span class="sec-tag rv" style="justify-content:center">Готов начать</span>
    <h2 class="closing-h2 rv d1">Дальше не разговор «про AI вообще» —<br>дальше конкретный первый шаг</h2>
    <p class="closing-lead rv d1">Три способа начать — от бесплатного до полного внедрения. Всё ведёт в одну систему, ничего не платится дважды.</p>

    <div class="closing-paths rv d2">
      <a href="/book" class="closing-path">
        <div class="cp-n">0</div>
        <div class="cp-t">Прочитать книгу</div>
        <div class="cp-s">Бесплатно · 30 подглав о механике продаж</div>
      </a>
      <a href="/raspakovka" class="closing-path cp-main">
        <div class="cp-n">1</div>
        <div class="cp-t">Сессия-распаковка</div>
        <div class="cp-s">60–90 минут · 25 000 ₽ — входит в стоимость внедрения</div>
      </a>
      <a href="/consulting" class="closing-path">
        <div class="cp-n">2</div>
        <div class="cp-t">Полное внедрение</div>
        <div class="cp-s">30 дней · 250 000 ₽ — агентство передано вам в руки</div>
      </a>
    </div>

    <div class="closing-acts rv d3">
      <a href="/consulting#offer" class="bp">Обсудить проект →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Написать напрямую</a>
    </div>
  </div>
</section>`;
