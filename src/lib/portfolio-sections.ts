// Секции страницы /portfolio — по паттерну consulting-sections.ts.
// Nav/mobile-menu/footer больше не дублируются здесь — страница использует
// общий PageShell (см. src/components/pages/PortfolioPage.tsx).
import { icon } from "./icons";

export const HERO_HTML = `<!-- HERO -->
<section id="port-hero">
  <div class="port-hero-grid"></div>
  <div class="port-hero-glow"></div>
  <div class="port-hero-inner">
    <div class="port-hero-badge"><span class="port-bdot"></span>Tech Product Partner · Web3 / HealthTech / AI</div>
    <h1 class="port-hero-name">Захожу в проект, показываю результат.<br><span class="port-acc">Заходит — довожу до конца.</span></h1>
    <p class="port-hero-sub">Не продаю часы и не обещаю. Беру вашу задачу, провожу исследование и отдаю готовые артефакты — бесплатно. Зашло — захожу в проект на месяц: внедряю метод, обучаю вашего человека им управлять и работаю рядом с ним. От 200 000 ₽.</p>
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
    <div class="port-case-feature rv">
      <div class="port-case-badge">Живой кейс · ~80 ₽ (~$1) → готовые артефакты</div>
      <div class="port-case-grid">
        <div class="port-case-step">
          <div class="port-case-label">Задача</div>
          <div class="port-case-text">Костя (ex NIHILO) — нужно понять, что показать рынку и как упаковать продукт.</div>
        </div>
        <div class="port-case-step">
          <div class="port-case-label">Показал</div>
          <div class="port-case-text">Исследование, разбор сайта, презентацию на 27 слайдов, воронку и контент-план.</div>
        </div>
        <div class="port-case-step">
          <div class="port-case-label">Довёл до конца</div>
          <div class="port-case-text">Весь комплект — за один вечер, ~80 ₽ (~$1) в токенах AI.</div>
        </div>
        <div class="port-case-step port-case-result">
          <div class="port-case-label">Получил бизнес</div>
          <div class="port-case-text">Готовые артефакты вместо обещаний.</div>
        </div>
      </div>
      <p class="port-case-quote">«Заебись, чётко»<span>Костя, ex NIHILO — реакция на присланный комплект</span></p>
    </div>
    <div class="port-wgrid">
      <div class="port-pj rv">
        <div class="port-pj-icon">${icon("rocket")}</div>
        <div class="port-pj-tag">Маркетинг · Автоматизация</div>
        <div class="port-pj-title">Novator.vip</div>
        <p class="port-pj-desc">Агентство маркетинга и автоматизации: 300+ проектов, 50M+ ₽ в запусках</p>
        <span class="port-pj-status">2020–2025</span>
      </div>
      <div class="port-pj rv d1">
        <div class="port-pj-icon">${icon("sparkle")}</div>
        <div class="port-pj-tag">Beauty · Mini App</div>
        <div class="port-pj-title">Gaze Architecture</div>
        <p class="port-pj-desc">Telegram Mini App + сайт для бьюти-сферы. Подписка 990 ₽/мес</p>
        <span class="port-pj-status">Запущен</span>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-icon">${icon("book")}</div>
        <div class="port-pj-tag">Книга · Методология</div>
        <div class="port-pj-title">«Нейро-Воронка»</div>
        <p class="port-pj-desc">6 глав, 30 подглав. Нейробиология продаж и AI-автоматизация</p>
        <span class="port-pj-status">Бесплатно</span>
      </div>
      <div class="port-pj rv d1">
        <div class="port-pj-icon">${icon("brain")}</div>
        <div class="port-pj-tag">HealthTech · AI</div>
        <div class="port-pj-title">Neuroflow</div>
        <p class="port-pj-desc">PPG-измерение через камеру телефона: ВСР, показатели нервной системы</p>
        <span class="port-pj-status">R&D</span>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-icon">${icon("sword")}</div>
        <div class="port-pj-tag">Продуктивность</div>
        <div class="port-pj-title">Vlinx</div>
        <p class="port-pj-desc">Трекер привычек — каждая вредная привычка как «босс», которого нужно одолеть</p>
        <span class="port-pj-status">Тестирование</span>
      </div>
      <div class="port-pj rv">
        <div class="port-pj-icon">${icon("gamepad")}</div>
        <div class="port-pj-tag">EdTech · Дети</div>
        <div class="port-pj-title">Nezha_Quest</div>
        <p class="port-pj-desc">Трекер дисциплины ребёнка с системой последствий. Связка ребёнок–родитель</p>
        <span class="port-pj-status">R&D</span>
      </div>
    </div>
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
    <h2 class="sec-h2 rv d1">Сначала результат.<br>Платите, если зашло.</h2>
    <p class="port-sec-lead rv d1">Первый шаг ничего не стоит: беру вашу задачу и отдаю готовые артефакты. Если зашло — захожу в проект на месяц и за этот месяц оставляю вас с человеком, который умеет вести это сам.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">Шаг 1 · Бесплатно</div>
        <div class="port-mtit">Получаете готовые артефакты по своей задаче</div>
        <div class="port-mprice">0 ₽</div>
        <p class="port-mtx">Исследование, разбор, презентация, воронка, контент-план — то, что можно открыть и сразу использовать. Не питч и не смета. Ничем не обязывает: не зашло — расходимся.</p>
        <div class="port-mmeta"><span class="port-mch">Без предоплаты</span><span class="port-mch">Артефакты на руках</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">Шаг 2 · Месяц работы</div>
        <div class="port-mtit">Задачи бизнеса закрываются циклами — вместе со мной</div>
        <div class="port-mprice">от 200 000 ₽</div>
        <p class="port-mtx">Захожу в проект с технологией и методологией агентства NCAi: обучаю вашего человека управлять этим, сам работаю рядом с ним и решаю задачи бизнеса циклами. Вилка — от объёма задач.</p>
        <div class="port-mmeta"><span class="port-mch">1 месяц</span><span class="port-mch">Обучение + работа</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">Что остаётся</div>
        <div class="port-mtit">Команда работает, когда я вышел из проекта</div>
        <div class="port-mprice">Ваш человек у руля</div>
        <p class="port-mtx">К концу месяца управляет не подрядчик, а ваш сотрудник: он ведёт систему, ставит задачи и читает отчёты сам. Дальше — следующий цикл, если задачи есть. Не хотите — не нужен.</p>
        <div class="port-mmeta"><span class="port-mch">Без привязки</span><span class="port-mch">Следующий цикл — по желанию</span></div>
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

// ─────────────────────────────────────────────────────────────────────────────
// EN — английские версии секций (для переключателя языка, см. Bilingual.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export const HERO_HTML_EN = `<!-- HERO -->
<section id="port-hero">
  <div class="port-hero-grid"></div>
  <div class="port-hero-glow"></div>
  <div class="port-hero-inner">
    <div class="port-hero-badge"><span class="port-bdot"></span>Tech Product Partner · Web3 / HealthTech / AI</div>
    <h1 class="port-hero-name">I join the project, I show the result.<br><span class="port-acc">If it lands, I carry it through.</span></h1>
    <p class="port-hero-sub">I don't sell hours and I don't promise. I take your task, do the research and hand over finished artifacts — free. If it lands, I join the project for a month: I bring in the method, train the person who'll run it, and work alongside them. From 200,000 ₽.</p>
    <div class="port-hero-acts">
      <a href="https://t.me/Ilya_novator" class="bp">Discuss a project →</a>
      <a href="#port-work" class="bs">Portfolio ↓</a>
    </div>
    <div class="port-hero-term rv">
      <div class="port-term-bar"><span class="port-term-dot"></span><span class="port-term-dot"></span><span class="port-term-dot"></span><span class="port-term-path">~/client-project</span></div>
      <div class="port-term-body">
        <div class="port-term-line"><span class="port-term-prompt">$</span>git log --oneline -3</div>
        <div class="port-term-out">a3f21c9 feat: a working product, not a prototype</div>
        <div class="port-term-out">e91b402 fix: what actually broke</div>
        <div class="port-term-out">7c88d31 deploy: production ✓</div>
        <div class="port-term-line"><span class="port-term-prompt">$</span><span class="port-term-cursor">▌</span></div>
      </div>
    </div>
    <div class="port-hero-stats">
      <div class="port-hstat"><div class="port-hstat-n">300+</div><div class="port-hstat-l">projects</div></div>
      <div class="port-hstat"><div class="port-hstat-n">50M ₽</div><div class="port-hstat-l">in launches</div></div>
      <div class="port-hstat"><div class="port-hstat-n">100K+</div><div class="port-hstat-l">leads</div></div>
      <div class="port-hstat"><div class="port-hstat-n">7+</div><div class="port-hstat-l">years</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const WORK_HTML_EN = `<!-- PORTFOLIO -->
<section id="port-work">
  <div class="w">
    <span class="sec-tag rv">Portfolio</span>
    <h2 class="sec-h2 rv d1">Projects that<br>are already running</h2>
    <div class="port-case-feature rv">
      <div class="port-case-badge">Live case · ~$1 → finished artifacts</div>
      <div class="port-case-grid">
        <div class="port-case-step">
          <div class="port-case-label">Task</div>
          <div class="port-case-text">Kostya (ex NIHILO) — needed to figure out what to show the market and how to package the product.</div>
        </div>
        <div class="port-case-step">
          <div class="port-case-label">Showed</div>
          <div class="port-case-text">A research report, a site teardown, a 27-slide deck, a funnel, and a content plan.</div>
        </div>
        <div class="port-case-step">
          <div class="port-case-label">Carried through</div>
          <div class="port-case-text">The whole set — in one evening, ~$1 in AI tokens.</div>
        </div>
        <div class="port-case-step port-case-result">
          <div class="port-case-label">The business got</div>
          <div class="port-case-text">Finished artifacts instead of promises.</div>
        </div>
      </div>
      <p class="port-case-quote">"Hell yeah, that's sharp"<span>Kostya, ex NIHILO — reaction to the delivered set</span></p>
    </div>
    <div class="port-wgrid">
      <div class="port-pj rv">
        <div class="port-pj-icon">${icon("rocket")}</div>
        <div class="port-pj-tag">Marketing · Automation</div>
        <div class="port-pj-title">Novator.vip</div>
        <p class="port-pj-desc">A marketing and automation agency: 300+ projects, 50M+ ₽ in launches</p>
        <span class="port-pj-status">2020–2025</span>
      </div>
      <div class="port-pj rv d1">
        <div class="port-pj-icon">${icon("sparkle")}</div>
        <div class="port-pj-tag">Beauty · Mini App</div>
        <div class="port-pj-title">Gaze Architecture</div>
        <p class="port-pj-desc">A Telegram Mini App + website for the beauty industry. Subscription at 990 ₽/mo</p>
        <span class="port-pj-status">Launched</span>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-icon">${icon("book")}</div>
        <div class="port-pj-tag">Book · Methodology</div>
        <div class="port-pj-title">"Neuro-Funnel"</div>
        <p class="port-pj-desc">6 chapters, 30 subchapters. The neuroscience of sales and AI automation</p>
        <span class="port-pj-status">Free</span>
      </div>
      <div class="port-pj rv d1">
        <div class="port-pj-icon">${icon("brain")}</div>
        <div class="port-pj-tag">HealthTech · AI</div>
        <div class="port-pj-title">Neuroflow</div>
        <p class="port-pj-desc">PPG measurement via phone camera: HRV, nervous system markers</p>
        <span class="port-pj-status">R&D</span>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-icon">${icon("sword")}</div>
        <div class="port-pj-tag">Productivity</div>
        <div class="port-pj-title">Vlinx</div>
        <p class="port-pj-desc">A habit tracker — every bad habit is a "boss" you have to defeat</p>
        <span class="port-pj-status">Testing</span>
      </div>
      <div class="port-pj rv">
        <div class="port-pj-icon">${icon("gamepad")}</div>
        <div class="port-pj-tag">EdTech · Kids</div>
        <div class="port-pj-title">Nezha_Quest</div>
        <p class="port-pj-desc">A child discipline tracker with a consequence system. A child–parent link</p>
        <span class="port-pj-status">R&D</span>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CLIENTS_HTML_EN = `<!-- CLIENTS -->
<section id="port-clients">
  <div class="w">
    <span class="sec-tag rv">Clients</span>
    <h2 class="sec-h2 rv d1">Worked with</h2>
    <div class="port-clients-wrap rv d1">
      <span class="port-cl-pill stat">Yulia Vysotskaya's School</span>
      <span class="port-cl-pill stat">Leo Shevchenko's School</span>
      <span class="port-cl-pill stat">"Alyosha" Foundation</span>
      <span class="port-cl-pill stat">"Far East Hectare" state program</span>
      <span class="port-cl-pill">WB School · 100M ₽/year</span>
      <span class="port-cl-pill">"Aromath" · 17M ₽ at launch</span>
      <span class="port-cl-pill">NeuroSpace</span>
      <span class="port-cl-pill">Yelnitsky University</span>
      <span class="port-cl-pill">Health Club</span>
      <span class="port-cl-pill">AI Realtor</span>
      <span class="port-cl-pill">Trading School · 6.5M ₽</span>
      <span class="port-cl-pill">BBQ construction</span>
    </div>
  </div>
</section>
<hr class="dv">`;

export const HIRE_HTML_EN = `<!-- HIRE -->
<section id="port-hire">
  <div class="w">
    <span class="sec-tag rv">How we work</span>
    <h2 class="sec-h2 rv d1">The result comes first.<br>You pay if it lands.</h2>
    <p class="port-sec-lead rv d1">The first step costs nothing: I take your task and hand over finished artifacts. If it lands, I join the project for a month — and by the end of it you're left with someone who can run this without me.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">Step 1 · Free</div>
        <div class="port-mtit">You get finished artifacts for your own task</div>
        <div class="port-mprice">$0</div>
        <p class="port-mtx">Research, a teardown, a deck, a funnel, a content plan — things you can open and use right away. Not a pitch or a quote. No strings: if it doesn't land, we part ways.</p>
        <div class="port-mmeta"><span class="port-mch">No upfront payment</span><span class="port-mch">Artifacts in hand</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">Step 2 · A month of work</div>
        <div class="port-mtit">Business tasks get closed in cycles — with me alongside</div>
        <div class="port-mprice">from 200,000 ₽</div>
        <p class="port-mtx">I join the project with NCAi's technology and method: I train the person who'll run it, work alongside them, and close business tasks in cycles. The range depends on the scope.</p>
        <div class="port-mmeta"><span class="port-mch">1 month</span><span class="port-mch">Training + hands-on work</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">What you keep</div>
        <div class="port-mtit">The team keeps working once I've stepped out</div>
        <div class="port-mprice">Your person at the wheel</div>
        <p class="port-mtx">By the end of the month it's your employee running this, not a contractor: they set the tasks and read the reports themselves. Another cycle only if there's work for it.</p>
        <div class="port-mmeta"><span class="port-mch">No lock-in</span><span class="port-mch">Next cycle optional</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CONTACT_HTML_EN = `<!-- CONTACT -->
<section id="port-contact">
  <div class="w" style="text-align:center">
    <h2 class="port-ch2 rv">Let's discuss a task?</h2>
    <p class="port-csub rv d1">Describe the project on Telegram — I'll reply within the day. Or by email.</p>
    <div class="port-cacts rv d2">
      <a href="https://t.me/Ilya_novator" class="bp">Telegram →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Email</a>
    </div>
  </div>
</section>`;
