// Секции главной (HTML из index-content, разбито по ТЗ NCAI_SPEC).

export const HERO_HTML = `<!-- HERO -->
<section id="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <canvas id="cvs"></canvas>
  <div class="hero-inner">
    <!-- LEFT -->
    <div>
      <div class="hero-badge"><span class="bdot"></span>AI-Powered Product Builder</div>
      <h1 class="hero-name"><em>Илья</em><span class="acc">Новицкий</span></h1>
      <div class="hero-role">NCAi · <span>Архитектор систем</span></div>
      <p class="hero-quote">«Соединяю продуктовое мышление предпринимателя с руками разработчика — на выходе рабочий продукт, а не питч-дек»</p>
      <div class="hero-meta">
        <div class="hm">Локация<span>Москва / удалённо</span></div>
        <div class="hm">Интересы<span>Web3 · HealthTech · AI</span></div>
        <div class="hm">Формат<span>Fix + опцион · удалённо</span></div>
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
    <img src="/viz/matrica.svg" alt="Продуктовая матрица NCAi — лестница ценности" loading="lazy" style="width:100%;height:auto;display:block;border-radius:16px;border:1px solid var(--br);margin-top:3rem" />
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
        <h2 class="about-h2">Система живёт в коде,<br>а не только в презентации</h2>
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
