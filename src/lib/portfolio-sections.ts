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
    <p class="port-hero-sub">Не продаю часы и не обещаю. Беру вашу задачу и показываю готовый результат — исследование, разбор, рабочий прототип. Заходит — довожу до релиза: фикс от 200 000 ₽, или доля/опцион, если строим вместе.</p>
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
    <h2 class="sec-h2 rv d1">Демонстрация → Партнёрство → Ретейнер</h2>
    <p class="port-sec-lead rv d1">Сначала показываю результат на вашей задаче — без предоплаты и без часового отчёта. Заходит — довожу до релиза. Дальше, если нужно, остаюсь рядом на постоянной основе.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">Демонстрация</div>
        <div class="port-mtit">Не уверены, что я вам подхожу — посмотрите на результате</div>
        <div class="port-mprice">от 0 ₽</div>
        <p class="port-mtx">Даёте задачу — присылаю рабочий артефакт: разбор, прототип, план. Не питч и не смета, а то, что можно посмотреть и потрогать. Дальше решаете сами: продолжать со мной или нет.</p>
        <div class="port-mmeta"><span class="port-mch">1–3 дня</span><span class="port-mch">Готовый артефакт</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">Партнёрство / довожу до релиза</div>
        <div class="port-mtit">Демонстрация зашла — довожу задачу до конца</div>
        <div class="port-mprice">от 200 000 ₽</div>
        <p class="port-mtx">Фикс за результат или доля/опцион, если строим вместе. Обсуждаем задачу, срок и критерий готовности до старта — дальше я просто делаю, без отчётов по часам.</p>
        <div class="port-mmeta"><span class="port-mch">2–4 недели</span><span class="port-mch">Результат, не часы</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">Ретейнер</div>
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
    <span class="sec-tag rv">Другие форматы</span>
    <h2 class="sec-h2 rv d1">Ещё три способа поработать вместе</h2>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mico">${icon("handshake")}</div>
        <div class="port-mtag">Совместный продукт</div>
        <div class="port-mtit">Вхожу руками, а не подрядчик на удержании</div>
        <p class="port-mtx">Прежде чем говорить о доле — показываю результат на вашей задаче. Заходит — проектирую, пишу код, вывожу на рынок за долю или опцион. Лично заинтересован в росте продукта, а не в закрытии тикетов.</p>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mico">${icon("puzzle")}</div>
        <div class="port-mtag">White-label / Методология</div>
        <div class="port-mtit">Готовая система под вашим брендом — без месяцев разработки</div>
        <p class="port-mtx">Методология NCAi и книга «Нейро-Воронка» уже проверены на реальных клиентах. Продаёте как свою, экономите R&D и выходите на рынок сразу — без стадии «а вдруг не взлетит».</p>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mico">${icon("link")}</div>
        <div class="port-mtag">Рефералка</div>
        <div class="port-mtit">Доход с клиента без дополнительной работы</div>
        <p class="port-mtx">Знакомите — я сам закрываю задачу: распаковку, обучение или разработку. Простая и прозрачная комиссия за каждого пришедшего клиента.</p>
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
    <p class="port-hero-sub">I don't sell hours and I don't promise. I take your task and show a finished result — a research report, a teardown, a working prototype. If it lands, I carry it to release: a fixed fee from 200,000 ₽, or equity/an option if we build it together.</p>
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
    <h2 class="sec-h2 rv d1">Demonstration → Partnership → Retainer</h2>
    <p class="port-sec-lead rv d1">First I show a result on your actual task — no upfront payment, no hourly report. If it lands, I carry it to release. After that, if you need it, I stay on as a standing partner.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">Demonstration</div>
        <div class="port-mtit">Not sure I'm the right fit — judge me by a result</div>
        <div class="port-mprice">from $0</div>
        <p class="port-mtx">Give me a task — I send back a working artifact: a teardown, a prototype, a plan. Not a pitch or a quote, something you can actually look at and use. Then you decide whether to continue.</p>
        <div class="port-mmeta"><span class="port-mch">1–3 days</span><span class="port-mch">Finished artifact</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">Partnership / carried to release</div>
        <div class="port-mtit">The demo landed — now I carry the task through</div>
        <div class="port-mprice">from 200,000 ₽</div>
        <p class="port-mtx">A fixed fee for the result, or equity/an option if we build it together. We agree on the task, timeline and acceptance criteria before starting — then I just get it done, no hourly reports.</p>
        <div class="port-mmeta"><span class="port-mch">2–4 weeks</span><span class="port-mch">A result, not hours</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">Retainer</div>
        <div class="port-mtit">You need a standing tech partner</div>
        <div class="port-mprice">from 200,000 ₽ / mo</div>
        <p class="port-mtx">I deploy an NCAi agency for you: 5 AI employees + an AI director, 4 departments, a report every day. Plus I'm personally on hand as a technical partner, not a contractor at the end of a phone line.</p>
        <div class="port-mmeta"><span class="port-mch">5 AI employees + a director</span><span class="port-mch">Daily report</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const PARTNER_HTML_EN = `<!-- PARTNERSHIP -->
<section id="port-partner">
  <div class="w">
    <span class="sec-tag rv">Other formats</span>
    <h2 class="sec-h2 rv d1">Three more ways to work together</h2>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mico">${icon("handshake")}</div>
        <div class="port-mtag">Joint product</div>
        <div class="port-mtit">Hands-on, not a contractor on retainer</div>
        <p class="port-mtx">Before we talk equity, I show a result on your actual task. If it lands, I design it, write the code, and take it to market for equity or an option. Personally invested in the product's growth, not in closing tickets.</p>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mico">${icon("puzzle")}</div>
        <div class="port-mtag">White-label / Methodology</div>
        <div class="port-mtit">A ready system under your brand — no months of development</div>
        <p class="port-mtx">NCAi's methodology and the "Neuro-Funnel" book are already proven on real clients. Sell them as your own, skip the R&D, and go to market right away — no "will this even work" stage.</p>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mico">${icon("link")}</div>
        <div class="port-mtag">Referrals</div>
        <div class="port-mtit">Income per client, no extra work</div>
        <p class="port-mtx">You make the introduction — I handle the work myself: unboxing, training, or development. A simple, transparent commission for every client who comes through you.</p>
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
