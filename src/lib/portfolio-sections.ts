// Секции страницы /portfolio — по паттерну consulting-sections.ts.
// Nav/mobile-menu/footer больше не дублируются здесь — страница использует
// общий PageShell (см. src/components/pages/PortfolioPage.tsx).

export const HERO_HTML = `<!-- HERO -->
<section id="port-hero">
  <div class="port-hero-grid"></div>
  <div class="port-hero-glow"></div>
  <div class="port-hero-inner">
    <div class="port-hero-badge"><span class="port-bdot"></span>Tech Product Partner · Web3 / HealthTech / AI</div>
    <h1 class="port-hero-name">Большинство тех-партнёров продают часы.<br><span class="port-acc">Я довожу до релиза.</span></h1>
    <p class="port-hero-sub">Не агентство и не фриланс. Вхожу в проект руками: проектирую, пишу код, вывожу на рынок. Фикс от 200 000 ₽ за задачу — или доля/опцион, если строим вместе.</p>
    <div class="port-hero-acts">
      <a href="https://t.me/Ilya_novator" class="bp">Обсудить проект →</a>
      <a href="#port-work" class="bs">Портфолио ↓</a>
    </div>
    <div class="port-hero-term rv">
      <div class="port-term-bar"><span class="port-term-dot"></span><span class="port-term-dot"></span><span class="port-term-dot"></span><span class="port-term-path">~/проект-клиента</span></div>
      <div class="port-term-body">
        <div class="port-term-line"><span class="port-term-prompt">$</span>git log --oneline -3</div>
        <div class="port-term-out">a3f21c9 feat: рабочий продукт, не прототип</div>
        <div class="port-term-out">e91b402 fix: то, что реально ломалось</div>
        <div class="port-term-out">7c88d31 deploy: production ✓</div>
        <div class="port-term-line"><span class="port-term-prompt">$</span><span class="port-term-cursor">▌</span></div>
      </div>
    </div>
    <div class="port-hero-stats">
      <div class="port-hstat"><div class="port-hstat-n">300+</div><div class="port-hstat-l">проектов</div></div>
      <div class="port-hstat"><div class="port-hstat-n">50M ₽</div><div class="port-hstat-l">в запусках</div></div>
      <div class="port-hstat"><div class="port-hstat-n">100K+</div><div class="port-hstat-l">заявок</div></div>
      <div class="port-hstat"><div class="port-hstat-n">7+</div><div class="port-hstat-l">лет</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const WORK_HTML = `<!-- PORTFOLIO -->
<section id="port-work">
  <div class="w">
    <span class="sec-tag rv">Портфолио</span>
    <h2 class="sec-h2 rv d1">Проекты, которые<br>уже работают</h2>
    <div class="port-wgrid">
      <div class="port-pj rv">
        <div class="port-pj-icon">🚀</div>
        <div class="port-pj-tag">Маркетинг · Автоматизация</div>
        <div class="port-pj-title">Novator.vip</div>
        <p class="port-pj-desc">Агентство маркетинга и автоматизации: 300+ проектов, 50M+ ₽ в запусках</p>
        <span class="port-pj-status">2020–2025</span>
      </div>
      <div class="port-pj rv d1">
        <div class="port-pj-icon">✨</div>
        <div class="port-pj-tag">Beauty · Mini App</div>
        <div class="port-pj-title">Gaze Architecture</div>
        <p class="port-pj-desc">Telegram Mini App + сайт для бьюти-сферы. Подписка 990 ₽/мес</p>
        <span class="port-pj-status">Запущен</span>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-icon">📖</div>
        <div class="port-pj-tag">Книга · Методология</div>
        <div class="port-pj-title">«Нейро-Воронка»</div>
        <p class="port-pj-desc">6 глав, 30 подглав. Нейробиология продаж и AI-автоматизация</p>
        <span class="port-pj-status">Бесплатно</span>
      </div>
      <div class="port-pj rv">
        <div class="port-pj-icon">🤖</div>
        <div class="port-pj-tag">AI-команда</div>
        <div class="port-pj-title">NCAi Agency</div>
        <p class="port-pj-desc">4 отдела, 5 AI-сотрудников + AI-директор. Полная разработка и автоматизация</p>
        <span class="port-pj-status">Ретейнер</span>
      </div>
      <div class="port-pj rv d1">
        <div class="port-pj-icon">🧠</div>
        <div class="port-pj-tag">HealthTech · AI</div>
        <div class="port-pj-title">Neuroflow</div>
        <p class="port-pj-desc">PPG-измерение через камеру телефона: ВСР, показатели нервной системы</p>
        <span class="port-pj-status">R&D</span>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-icon">⚔️</div>
        <div class="port-pj-tag">Продуктивность</div>
        <div class="port-pj-title">Vlinx</div>
        <p class="port-pj-desc">Трекер привычек — каждая вредная привычка как «босс», которого нужно одолеть</p>
        <span class="port-pj-status">Тестирование</span>
      </div>
      <div class="port-pj rv d3">
        <div class="port-pj-icon">🎮</div>
        <div class="port-pj-tag">EdTech · Дети</div>
        <div class="port-pj-title">Nezha_Quest</div>
        <p class="port-pj-desc">Трекер дисциплины ребёнка с системой последствий. Связка ребёнок–родитель</p>
        <span class="port-pj-status">R&D</span>
      </div>
    </div>
    <img src="/viz/mrr.svg" alt="Масштаб запусков — лестница MRR и экономика проектов" loading="lazy" style="width:100%;height:auto;display:block;border-radius:16px;border:1px solid var(--br);margin-top:3rem" />
  </div>
</section>
<hr class="dv">`;

export const CLIENTS_HTML = `<!-- CLIENTS -->
<section id="port-clients">
  <div class="w">
    <span class="sec-tag rv">Клиенты</span>
    <h2 class="sec-h2 rv d1">Работал с</h2>
    <div class="port-clients-wrap rv d1">
      <span class="port-cl-pill stat">Школа Юлии Высоцкой</span>
      <span class="port-cl-pill stat">Школа Лео Шевченко</span>
      <span class="port-cl-pill stat">Фонд «Алёша»</span>
      <span class="port-cl-pill stat">Госпрограмма «Дальневосточный Гектар»</span>
      <span class="port-cl-pill">Школа WB · 100M ₽/год</span>
      <span class="port-cl-pill">«Aromath» · 17M ₽ на запуске</span>
      <span class="port-cl-pill">NeuroSpace</span>
      <span class="port-cl-pill">Университет Ельницкого</span>
      <span class="port-cl-pill">Клуб Здоровья</span>
      <span class="port-cl-pill">AI-Риелтор</span>
      <span class="port-cl-pill">Школа Трейдинга · 6.5M ₽</span>
      <span class="port-cl-pill">BBQ строительство</span>
    </div>
  </div>
</section>
<hr class="dv">`;

export const HIRE_HTML = `<!-- HIRE -->
<section id="port-hire">
  <div class="w">
    <span class="sec-tag rv">Как работаем</span>
    <h2 class="sec-h2 rv d1">Три формата: аудит от 30 000 ₽,<br>фикс от 200 000 ₽, ретейнер</h2>
    <p class="port-sec-lead rv d1">Я не продаю часы и не собираю тикеты в бэклог. Смотрю на задачу и сам предлагаю формат — вот три, которые чаще всего подходят. Партнёрство за долю — отдельно, ниже.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">Аудит / Консультация</div>
        <div class="port-mtit">Не уверены, что чинить — разберёмся вместе</div>
        <div class="port-mprice">от 30 000 ₽</div>
        <p class="port-mtx">Разбор продукта или кода + звонок. На выходе — письменный план: что менять в первую очередь и почему. Дальше решаете сами: чинить своей командой, звать меня или кого-то ещё.</p>
        <div class="port-mmeta"><span class="port-mch">1–3 дня</span><span class="port-mch">Письменный план</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">Fix / Спринт</div>
        <div class="port-mtit">Есть чёткая задача — беру и делаю</div>
        <div class="port-mprice">от 200 000 ₽</div>
        <p class="port-mtx">2–4 недели. Вы платите за готовый результат, а не за отчёт по часам. Обсуждаем задачу, срок и критерий готовности до старта — дальше я просто делаю.</p>
        <div class="port-mmeta"><span class="port-mch">2–4 недели</span><span class="port-mch">Результат, не часы</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">Ретейнер / AI-команда</div>
        <div class="port-mtit">Нужен постоянный тех-партнёр</div>
        <div class="port-mprice">от 200 000 ₽ / мес</div>
        <p class="port-mtx">Разворачиваю у вас NCAi-агентство: 5 AI-сотрудников + AI-директор, 4 отдела, отчёт каждый день. Плюс я лично на связи как технический партнёр, а не подрядчик на телефоне.</p>
        <div class="port-mmeta"><span class="port-mch">5 AI-сотрудников + директор</span><span class="port-mch">Отчёт ежедневно</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const PARTNER_HTML = `<!-- PARTNERSHIP -->
<section id="port-partner">
  <div class="w">
    <span class="sec-tag rv">Партнёрство</span>
    <h2 class="sec-h2 rv d1">Партнёрство: доля, white-label, комиссия</h2>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mico">🤝</div>
        <div class="port-mtag">Совместный продукт</div>
        <div class="port-mtit">Строим вместе</div>
        <p class="port-mtx">Вхожу техническим партнёром за долю или опцион. Проектирую, пишу код, вывожу на рынок.</p>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mico">🧩</div>
        <div class="port-mtag">White-label / Методология</div>
        <div class="port-mtit">NCAi + «Нейро-Воронка» под вашим брендом</div>
        <p class="port-mtx">Готовая методология под ваш бренд. Продавайте систему и книгу как свою.</p>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mico">🔗</div>
        <div class="port-mtag">Рефералка</div>
        <div class="port-mtit">Комиссия за клиента</div>
        <p class="port-mtx">Приводите клиентов — получаете комиссию. Простая и прозрачная схема.</p>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CONTACT_HTML = `<!-- CONTACT -->
<section id="port-contact">
  <div class="w" style="text-align:center">
    <h2 class="port-ch2 rv">Обсудим задачу?</h2>
    <p class="port-csub rv d1">Опишите проект в Telegram — отвечу в течение дня. Или на почту.</p>
    <div class="port-cacts rv d2">
      <a href="https://t.me/Ilya_novator" class="bp">Telegram →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Email</a>
    </div>
  </div>
</section>`;
