// Секции consulting (HTML из consulting-content, разбито по ТЗ NCAI_SPEC).

export const HERO_HTML = `<!-- HERO · ТИЗЕРНЫЙ ХУК -->
<section id="hero-consulting">
  <div class="hgrid"></div><div class="hgl"></div>
  <div class="hleft">
    <div class="hew"><span class="hdot"></span>Агентство в коробке · распаковка + подписка</div>
    <h1 class="hh1">Ты не можешь масштабировать бизнес, потому что вся работа живёт <em>у тебя в голове</em> и руками.<span class="acc">Новый способ: агентство в коробке за одну сессию.</span></h1>
    <p class="hsub">Разворачиваю вам рабочую AI-команду прямо в панели: агенты под ваши задачи, доска задач, контроль расходов на AI. За одну сессию — без найма команды, без дорогого агентства и без зависимости от подрядчика.</p>
    <div class="hacts">
      <a href="mailto:ilya.novitskii@yandex.ru" class="bp">Записаться на распаковку <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="#idea" class="bs">Почему это работает</a>
    </div>
    <div class="hstats">
      <div class="hstat"><div class="hstatn">90<span class="sfx">мин</span></div><div class="hstatl">Сессия распаковки — агентство готово</div></div>
      <div class="hstat"><div class="hstatn">25 000<span class="sfx">₽</span></div><div class="hstatl">Разово за распаковку, дальше — подписка</div></div>
      <div class="hstat"><div class="hstatn">1<span class="sfx">–5</span></div><div class="hstatl">AI-агентов под ваши задачи</div></div>
      <div class="hstat"><div class="hstatn"><span class="cnt" data-to="100">0</span><span class="sfx">%</span></div><div class="hstatl">Прозрачность: всё в панели у вас</div></div>
    </div>
  </div>
  <div class="hright">
    <div class="hcard">
      <div class="hctop"><div class="hcdot"></div><div class="hctitle">NCAi · <span>агентство в коробке</span></div></div>
      <div class="hsys">
        <div class="hsys-row">
          <div class="hbox lit" id="hb0">Workspace<br>вашего бизнеса</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb1">AI-директор<br>+ агенты</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb2">Доска<br>задач</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb3">Контроль<br>расходов на AI</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb4">Telegram-<br>алерты</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb5">Руль сразу<br>у вас</div>
        </div>
      </div>
      <div class="hccap">unpacking agency.workspace<span class="cur">▌</span></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const PANEL_HTML = `<!-- PANEL PREVIEW · как выглядит продукт -->
<section id="panel-preview" class="sec-light">
  <div class="w">
    <span class="lb rv">Как это выглядит</span>
    <h2 class="sh2 rv d1">Не абстракция —<br>рабочая панель</h2>
    <p class="sl rv d2">Тот же Hermes, которым я управляю своей командой, — под капотом NCAi. Вот что видите вы после распаковки.</p>
    <div class="panelmock rv d2">
      <div class="pm-bar"><span class="pm-dot"></span><span class="pm-dot"></span><span class="pm-dot"></span><span class="pm-url">ncai · панель</span></div>
      <div class="pm-tabs">
        <span class="pm-tab act">Главная</span><span class="pm-tab">Команда</span><span class="pm-tab">Проекты</span><span class="pm-tab">Услуги</span><span class="pm-tab">Финансы</span><span class="pm-tab">Аналитика</span>
      </div>
      <div class="pm-body">
        <div class="pm-block">
          <div class="pm-block-h">💰 Деньги</div>
          <div class="pm-money-row"><span>Вложено</span><b>45 000 ₽</b></div>
          <div class="pm-money-row"><span>Остаток AI-бюджета</span><b>$8,40</b></div>
          <div class="pm-money-row"><span>Потрачено</span><b>$6,60</b></div>
        </div>
        <div class="pm-block">
          <div class="pm-block-h">📋 Сегодня</div>
          <div class="pm-today">3 задачи · 2,5 часа</div>
        </div>
        <div class="pm-block">
          <div class="pm-block-h">👥 Команда</div>
          <div class="pm-tline">
            <div class="pm-tl"><span class="pm-tl-ico">🧭</span><span class="pm-tl-n">Директор</span><span class="pm-tl-v">1 задача</span></div>
            <div class="pm-tl"><span class="pm-tl-ico">💻</span><span class="pm-tl-n">Разработчик</span><span class="pm-tl-v">2 задачи</span></div>
            <div class="pm-tl"><span class="pm-tl-ico">✍️</span><span class="pm-tl-n">Копирайтер</span><span class="pm-tl-v">1 задача</span></div>
          </div>
          <div class="pm-cost-note">Пишете директору одну задачу — он сам решает, кому из команды её передать.</div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const IDEA_HTML = `<!-- 1 · БОЛЬШАЯ ИДЕЯ -->
<section id="idea" class="sec-light">
  <div class="w">
    <span class="lb rv">Большая идея</span>
    <h2 class="sh2 rv d1">Почему бизнес не растёт, хотя сил уходит всё больше</h2>
    <p class="sl rv d2">Ты владелец малого бизнеса с живой операционкой: салон, клиника, магазин, услуги. Клиенты есть, рутина съедает день, а масштабироваться не получается.</p>
    <div class="pr-grid">
      <div class="pr rv d1">
        <div class="pr-n">Проблема 1</div>
        <div class="pr-t">Вся работа в твоей голове</div>
        <div class="pr-x">Ты сам ставишь задачи, сам напоминаешь, сам считаешь. Пока ты болешь или отдыхаешь — бизнес стоит.</div>
      </div>
      <div class="pr rv d2">
        <div class="pr-n">Проблема 2</div>
        <div class="pr-t">Найм — дорого и ненадёжно</div>
        <div class="pr-x">Маркетолог, копирайтер, аналитик, администратор — это ≈240 тыс ₽ в месяц зарплат, а с налогами ≈343 тыс ₽. Плюс риск, что человек уволится через три месяца.</div>
      </div>
      <div class="pr rv d3">
        <div class="pr-n">Проблема 3</div>
        <div class="pr-t">Подрядчик — чёрный ящик</div>
        <div class="pr-x">Агентство делает «что-то», отчитывается раз в месяц, а как это устроено — не знает никто. Ушёл подрядчик — встало всё.</div>
      </div>
    </div>
    <div class="w-row">
      <div class="w-col rv d2">
        <div class="w-col-tag">Почему так происходит</div>
        <div class="w-li"><span class="w-ico">1</span><span><b>Рутина не автоматизирована.</b> Ты платишь вниманием за то, что система должна делать сама.</span></div>
        <div class="w-li"><span class="w-ico">2</span><span><b>Найм = риск, а не актив.</b> Люди болеют, увольняются и требуют управления.</span></div>
        <div class="w-li"><span class="w-ico">3</span><span><b>Консалтинг продаёт слайды, а не систему.</b> «Стратегия» и отчёты не остаются работать после ухода консультанта.</span></div>
      </div>
      <div class="w-col rv d3">
        <div class="w-col-tag">Истинные причины</div>
        <div class="w-li"><span class="w-ico">1</span><span><b>Нет работающей системы</b> — есть героические усилия вручную.</span></div>
        <div class="w-li"><span class="w-ico">2</span><span><b>Знания уходят вместе с людьми</b> — всё в головах, а не в панели.</span></div>
        <div class="w-li"><span class="w-ico">3</span><span><b>Ты покупал услуги, а не актив</b> — результат не оставался с тобой.</span></div>
      </div>
    </div>
    <div class="bigidea rv d2">
      <div class="bigidea-tag">Big idea</div>
      <div class="bigidea-tx">Купи не консультанта и не подрядчика — купи работающее агентство, распакованное под твой бизнес за одну сессию. Система остаётся, зависимость уходит.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const BOX_HTML = `<!-- 2 · СУТЬ ИДЕИ -->
<section id="box" style="background:var(--bg2)">
  <div class="w">
    <div class="uw">
      <div>
        <div class="ugh rv">01</div>
        <span class="lb rv d1">Суть идеи</span>
        <h2 class="uh2 rv d1">Покупаете не консультанта.<br>Покупаете агентство.<br>Уже распакованное.</h2>
        <p class="up rv d2">NCAi — платформа, в которой у каждого клиента своя команда AI-агентов в панели. Не «чат с нейросетью», а <strong>рабочая команда</strong>: агенты с ролями и базой знаний, доска задач, контроль расходов на AI.</p>
        <p class="up rv d2">Обычный консалтинг длится 2–3 месяца и заканчивается презентацией. Распаковка NCAi длится 90 минут и заканчивается <strong>работающей AI-командой</strong>, в которой клиент сам ставит задачи и видит расход на AI.</p>
      </div>
      <div class="rv d2">
        <div class="ucmp">
          <div class="urow"><div class="uchead bad">Обычный консалтинг</div><div class="uchead good">NCAi · распаковка</div></div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>2–3 месяца работы. Результат «в конце»</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Рабочее агентство — с первой сессии</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Отдаёте на аутсорс — не понимаете как устроено</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Всё в панели: задачи, агенты, расход на AI</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Консультант ушёл — знания ушли с ним</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Руль сразу у вас. Клиент сам ставит задачи</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Агентство на аутсорсе — чек каждый месяц</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>25 000 ₽ разово (первый месяц подписки включён), дальше 4 900 ₽/мес</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const ROI_HTML = `<!-- ROI · ПОЧЕМУ ЭТО ОКУПАЕТСЯ -->
<section id="roi">
  <div class="w">
    <div class="roi-head">
      <div>
        <span class="lb rv">Почему это окупается</span>
        <h2 class="sh2 rv d1">25 000 ₽ — это не трата.<br>Это сэкономленные миллионы.</h2>
      </div>
      <p class="roi-tx rv d2">Вы платите не за «ботов в Telegram» и не за красивые консультации. Вы платите за то, чтобы <strong>ближайшие полгода не отдавать миллионы за зарплаты</strong> — и запускать свои продукты за <strong>дни, а не за месяцы</strong>. Это не расход. Это ROI.</p>
    </div>
    <div class="roi-stats">
      <div class="roi-stat rv"><div class="n">до 50×</div><div class="l">Окупаемость распаковки за год</div></div>
      <div class="roi-stat rv d1"><div class="n">≈4 млн ₽</div><div class="l">Экономия на ФОТ в год</div></div>
      <div class="roi-stat rv d2"><div class="n">месяцы → дни</div><div class="l">Сокращение цикла запуска продукта</div></div>
    </div>
    <div class="mrrviz rv d2">
      <span class="mrrviz-badge">Агентство в коробке</span>
      <h3 class="mrrviz-tit">Экономика · лестница MRR</h3>
      <p class="mrrviz-sub">Предсказуемый ежемесячный доход — растёт с каждым клиентом, единая подписка 4 900 ₽/мес</p>
      <div class="mrrviz-bars">
        <div class="mrrviz-col"><div class="mrrviz-val">49 000 ₽/мес</div><div class="mrrviz-bar" style="--h:20%"></div><div class="mrrviz-lbl">10 клиентов</div></div>
        <div class="mrrviz-arr">+20 клиентов →</div>
        <div class="mrrviz-col"><div class="mrrviz-val">147 000 ₽/мес</div><div class="mrrviz-bar" style="--h:60%"></div><div class="mrrviz-lbl">30 клиентов</div></div>
        <div class="mrrviz-arr">+20 клиентов →</div>
        <div class="mrrviz-col"><div class="mrrviz-val">245 000 ₽/мес</div><div class="mrrviz-bar" style="--h:100%"></div><div class="mrrviz-lbl">50 клиентов</div></div>
      </div>
      <p class="mrrviz-note">Сверх MRR — внедрение, слоты, топ-апы AI, апгрейды. Маржу защищает kill-switch AI-бюджета.</p>
    </div>
    <div class="roi-vs">
      <div class="roi-col bad rv">
        <div class="roi-col-head"><span class="tag">Найм команды</span><span class="price">≈343к ₽ / мес</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Маркетолог + копирайтер + аналитик + администратор — <b>≈240 тыс ₽/мес</b> зарплат</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Плюс налоги ≈43% — <b>≈343 тыс ₽/мес</b>, за год — <b>≈4,1 млн ₽</b></span></div>
        <div class="roi-li"><span class="x">✕</span><span>Работают 9:00–18:00, болеют, увольняются, «не в настроении»</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Новый запуск = месяцы на найм, онбординг и раскачку</span></div>
        <div class="roi-total bad"><span class="lbl">Итог за год</span><span class="v">≈ 4,1 млн ₽</span></div>
      </div>
      <div class="roi-mid">VS</div>
      <div class="roi-col good rv d1">
        <div class="roi-col-head"><span class="tag">NCAi-агентство</span><span class="price"><b>25 000 ₽</b> разово</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Разовая сессия распаковки — <b>25 000 ₽</b> (первый месяц подписки включён), дальше 4 900 ₽/мес</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Работает <b>24/7</b> без больничных и «не в настроении»</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Задача утром — <b>результат днём</b>. Запуск за дни, а не за месяцы</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Руль сразу у вас: система остаётся с вами</span></div>
        <div class="roi-total good"><span class="lbl">Итог за год</span><span class="v">≈ 79 000 ₽</span></div>
      </div>
    </div>
    <div class="roi-bottom rv d2">
      <div class="tx">Один раз заплатили за систему — <span>экономия ≈4 млн ₽ в год, и распаковка окупается в первый месяц.</span></div>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bp" style="font-size:.88rem;padding:.85rem 1.9rem">Обсудить окупаемость <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </div>
</section>
<hr class="dv">`;

export const GETS_HTML = `<!-- 3 · УНИКАЛЬНЫЙ МЕХАНИЗМ -->
<section id="gets" class="sec-light">
  <div class="w">
    <span class="lb rv">Уникальный механизм</span>
    <h2 class="sh2 rv d1">Что вы получаете<br>после распаковки</h2>
    <p class="sl rv d2">За одну сессию 60–90 минут — то, что запускается сразу и работает без вас с первого дня.</p>
    <div class="ngrid">
      <div class="ncard rv"><div class="nnum">01</div><div class="ntit">Workspace вашего бизнеса</div><p class="ntx">Не «Мой проект», а «Салон Анны». Кабинет: агенты, задачи и расходы на AI в одном месте.</p></div>
      <div class="ncard rv d1"><div class="nnum">02</div><div class="ntit">AI-директор + агенты</div><p class="ntx">Настраиваю живьём под вашу нишу — от одного агента до полноценной команды с ролями: разработка, тексты, контент, аналитика. Директору можно написать одну задачу — он сам решит, кому из команды её передать.</p></div>
      <div class="ncard rv d2"><div class="nnum">03</div><div class="ntit">Роли и зона ответственности</div><p class="ntx">У каждого агента понятная роль — не безликий «AI-помощник». Вы всегда знаете, кому делегировать конкретную задачу.</p></div>
      <div class="ncard rv"><div class="nnum">04</div><div class="ntit">3–5 стартовых задач</div><p class="ntx">Реальные задачи из вашей анкеты: номер, срок, ответственный агент. До конца сессии вы сами ставите первую задачу.</p></div>
      <div class="ncard rv d1"><div class="nnum">05</div><div class="ntit">Контроль расходов на AI</div><p class="ntx">Расход по каждому агенту и модели, бюджет и kill-switch — не спишет больше лимита. Прозрачно, без сюрпризов в конце месяца.</p></div>
      <div class="ncard rv d2"><div class="nnum">06</div><div class="ntit">Доска задач и отчёты</div><p class="ntx">Что в работе, что готово, какой агент что сделал. Каждый вечер в 18:00 — отчёт дня. Вы видите картину целиком, а не догадываетесь.</p></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const STEPS_HTML = `<!-- 5 · МЕХАНИЗМ: РАСПАКОВКА 90 МИН -->
<section id="steps" class="sec-light">
  <div class="w">
    <div class="wlay">
      <div>
        <span class="lb rv">Распаковка · сессия</span>
        <h2 class="sh2 rv d1">90 минут —<br>и агентство работает</h2>
        <p class="sl rv d2" style="margin-bottom:0">Шесть шагов, за которые вы получаете агентство и понимаете, как оно устроено. Нажмите на шаг.</p>
        <div class="funnelw rv d3">
          <svg viewBox="0 0 280 270" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fl1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".85"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".3"/></linearGradient>
              <linearGradient id="fl2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".55"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".15"/></linearGradient>
              <linearGradient id="fl3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".32"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".08"/></linearGradient>
              <linearGradient id="fl4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".16"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".04"/></linearGradient>
            </defs>
            <path id="fz1" class="fz" d="M8 8 L272 8 L232 60 L48 60 Z" fill="url(#fl1)" stroke="rgba(180,130,0,.4)" stroke-width="1"/>
            <text x="140" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Workspace · команда</text>
            <path id="fz2" class="fz" d="M48 66 L232 66 L202 116 L78 116 Z" fill="url(#fl2)" stroke="rgba(180,130,0,.3)" stroke-width="1"/>
            <text x="140" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Роли · задачи</text>
            <path id="fz3" class="fz" d="M78 122 L202 122 L178 170 L102 170 Z" fill="url(#fl3)" stroke="rgba(180,130,0,.25)" stroke-width="1"/>
            <text x="140" y="150" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Контроль расходов</text>
            <path id="fz4" class="fz" d="M102 176 L178 176 L160 222 L120 222 Z" fill="url(#fl4)" stroke="rgba(180,130,0,.2)" stroke-width="1"/>
            <text x="140" y="203" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Доска задач · отчёты</text>
            <text x="140" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#8b867e">в конце — вы сами ставите задачу</text>
          </svg>
        </div>
      </div>
      <div class="wdiag rv d2">
        <div class="wi act" data-zone="1"><div class="wico">📦</div><span class="wchev">▾</span><div><div class="wtit">Шаг 1 · Workspace (10 мин)</div><div class="wtx">Создаём кабинет с названием вашего бизнеса. Это не «Мой проект» — здесь живут агенты, задачи и расходы на AI.</div></div></div>
        <div class="wi" data-zone="1"><div class="wico">🧑‍💼</div><span class="wchev">▾</span><div><div class="wtit">Шаг 2 · Директор и агенты (15 мин)</div><div class="wtx">Настраиваю AI-директора и от одного до пяти агентов под ваши задачи: имя, роль, зона ответственности, база знаний. Директору можно написать одну задачу — дальше он сам решает, кому её передать.</div></div></div>
        <div class="wi" data-zone="2"><div class="wico">🏛️</div><span class="wchev">▾</span><div><div class="wtit">Шаг 3 · Роли (10 мин)</div><div class="wtx">Раскладываем агентов по ролям, чтобы у каждого была понятная зона ответственности — не безликий помощник, а конкретный специалист, которому вы делегируете.</div></div></div>
        <div class="wi" data-zone="2"><div class="wico">✅</div><span class="wchev">▾</span><div><div class="wtit">Шаг 4 · Стартовые задачи (15 мин)</div><div class="wtx">3–5 реальных задач из анкеты: одна задача — одна строка, понятно, кому она делегирована. Вы сами ставите одну задачу — это ваш «экзамен» дня.</div></div></div>
        <div class="wi" data-zone="3"><div class="wico">💳</div><span class="wchev">▾</span><div><div class="wtit">Шаг 5 · Контроль расходов (15 мин)</div><div class="wtx">Настраиваем бюджет на AI и kill-switch — лимит, после которого агенты сами останавливаются. Видно, кто сколько тратит.</div></div></div>
        <div class="wi" data-zone="4"><div class="wico">📊</div><span class="wchev">▾</span><div><div class="wtit">Шаг 6 · Доска задач и отчёты (10 мин)</div><div class="wtx">Что в работе, что готово, какой агент что сделал. Каждый вечер в 18:00 приходит отчёт дня.</div></div></div>
        <p class="sl rv d3" style="margin-top:1.5rem;font-size:.92rem">После сессии рабочее агентство остаётся с вами. Первый месяц подписки уже включён в оплату распаковки, дальше — 4 900 ₽/мес.</p>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const QUESTIONS_HTML = `<!-- 6 · 10 ВОПРОСОВ -->
<section id="questions" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">10 вопросов</span>
    <h2 class="sh2 rv d1">Ответьте себе честно</h2>
    <p class="sl rv d2">Семь вопросов про эмоции и три про логику. Если на большинство ответите «да» — распаковка для вас.</p>
    <div class="qgrid">
      <div class="qcard rv"><span class="qtag">Вопрос 1</span><div class="qq">Сколько часов в день вы тратите на рутину, которую должен делать кто-то другой?</div><div class="qa">Каждый такой час — это час, который не работает на рост бизнеса.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 2</span><div class="qq">Вам не страшно, что бизнес стоит, пока вы в отпуске или болеете?</div><div class="qa">Система не болеет, не увольняется и не «не в настроении».</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 3</span><div class="qq">Сколько денег вы уже отдали агентствам, после которых система так и не появилась?</div><div class="qa">Вы покупали услуги. Здесь вы покупаете актив, который остаётся.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 4</span><div class="qq">Что вы почувствуете, когда утром откроете панель и увидите, что всё сделано само?</div><div class="qa">Это и есть передача руля: вы управляете, а не тоните в операционке.</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 5</span><div class="qq">Вас не бесит, что подрядчик — чёрный ящик, и вы не знаете, что происходит?</div><div class="qa">Прозрачность — это когда всё в панели, а не в голове консультанта.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 6</span><div class="qq">Что будет с бизнесом через год, если вы продолжите работать руками, как сейчас?</div><div class="qa">Без системы масштаб упирается в ваше личное время.</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 7</span><div class="qq">Хотите ли вы, наконец, перестать быть единственным, кто всё держит в голове?</div><div class="qa">Агентство в коробке — это способ перестать быть «человеком-системой».</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 8</span><div class="qq">Что дешевле: найм команды за ≈343 тыс ₽/мес с налогами или подписка 4 900 ₽/мес?</div><div class="qa">Подписка — это ≈1,5% от стоимости найма. Математика простая.</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 9</span><div class="qq">Сколько стоит один месяц простоя, пока вы «решаетесь»?</div><div class="qa">Месяц внедрения против месяца ожидания — разница в системе, которая уже работает.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 10</span><div class="qq">Готовы ли вы выделить одну сессию 90 минут, чтобы получить рабочее агентство?</div><div class="qa">Это единственное усилие на старте. Дальше систему ведут сотрудники.</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const OBJECTIONS_HTML = `<!-- 7 · ВОЗРАЖЕНИЯ -->
<section id="objections" class="sec-light">
  <div class="w">
    <span class="lb rv">Возражения</span>
    <h2 class="sh2 rv d1">«Да, но...» — и почему это не аргумент</h2>
    <p class="sl rv d2">Самые частые сомнения перед внедрением. Разберём каждое по очереди.</p>
    <div class="obj rv d1"><div class="obj-q">Это робот, я ему не доверяю</div><div class="obj-a">За системой стоит живой человек — архитектор, которому можно написать в любой момент. Цифровые сотрудники работают по вашему регламенту и под вашим контролем.</div></div>
    <div class="obj rv d1"><div class="obj-q">У меня нет базы клиентов</div><div class="obj-a">На распаковке заводим 10 тёплых контактов для старта. База — топливо системы, и её можно собрать за первую неделю.</div></div>
    <div class="obj rv d1"><div class="obj-q">Я не технарь, панель не осилю</div><div class="obj-a">Панель — это Telegram Mini App: ставить задачи и смотреть расход на AI проще, чем вести таблицу в Excel. 90 минут на сессии вы во всём разберётесь.</div></div>
    <div class="obj rv d2"><div class="obj-q">Уже пробовали автоматизацию — не взлетело</div><div class="obj-a">Разница в подходе: не «подключили бота», а построили агентство с ролями, базой знаний и правом на действие. Плюс передача руля, а не зависимость.</div></div>
    <div class="obj rv d2"><div class="obj-q">Дорого, это же подписка каждый месяц</div><div class="obj-a">Сравните: найм команды — ≈343 тыс ₽/мес с налогами. Подписка — 4 900 ₽. Около 1,5% от стоимости найма за команду, которая работает круглосуточно.</div></div>
    <div class="obj rv d2"><div class="obj-q">А если мне не понравится?</div><div class="obj-a">Первый месяц подписки уже включён в стоимость распаковки — вы пользуетесь продуктом в реальной работе, прежде чем платить за него отдельно. Решение принимаете по факту, а не по обещаниям.</div></div>
    <div class="obj rv d2"><div class="obj-q">Это же просто открытая программа, я могу поставить её сам бесплатно</div><div class="obj-a">Да, движок под капотом (Hermes) — open source, это не секрет. Но вы платите не за доступ к нему: вы платите за готовую команду ролей с базой знаний под вашу нишу, за дисциплину директора, который проверяет результат, а не просто раздаёт задачи, за методологию из 13 готовых процессов внедрения, за постоянно работающий сервер — и за то, что всё это собирается за 90 минут, а не за недели самостоятельной настройки.</div></div>
  </div>
</section>
<hr class="dv">`;

export const OFFER_HTML = `<!-- 8 · ОФФЕР -->
<section id="offer">
  <div class="w">
    <div class="ofin">
      <span class="lb rv" style="justify-content:center">Оффер · распаковка</span>
      <h2 class="ofh2 rv d1">Всё, что вы получаете<br>в обмен на деньги</h2>
      <p class="ofsub rv d2">Разовый чек за сессию распаковки — <b>25 000 ₽</b> (первый месяц подписки включён), дальше — 4 900 ₽/мес. Прозрачно, без скрытых платежей.</p>
      <div class="ofcard rv d2">
        <p style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1.5rem">Что входит в распаковку</p>
        <div class="ofgrid">
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Сессия 60–90 минут <span>workspace, агенты, доска задач, контроль расходов на AI</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">AI-директор + до 5 агентов <span>с ролями и базами знаний под вашу нишу</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Руль сразу у вас <span>ставите задачи и смотрите расход на AI с первого дня</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Подписка 4 900 ₽/мес <span>15 мест · $40 AI-бюджета · первый месяц включён в распаковку</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Поддержка на связи <span>вопросы и донастройка — в Telegram, когда нужно</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Рост без пересборки <span>добавляете агентов и роли по мере роста бизнеса</span></div></div>
        </div>
        <div class="meta4">
          <div class="m4"><div class="m4-l">Результат мечты</div><div class="m4-v">Агентство в панели, которое работает без вас</div></div>
          <div class="m4"><div class="m4-l">Вероятность</div><div class="m4-v">Высокая: система видна с первой сессии</div></div>
          <div class="m4"><div class="m4-l">Время до результата</div><div class="m4-v">90 минут, руль у вас сразу</div></div>
          <div class="m4"><div class="m4-l">Ваши усилия</div><div class="m4-v">Анкета + одна сессия 90 минут</div></div>
        </div>
        <div class="ofmeta">
          <div><div class="ofml">Распаковка</div><div class="ofmv">25 000 ₽</div></div>
          <div><div class="ofml">Длительность</div><div class="ofmv">60–90 минут</div></div>
          <div><div class="ofml">Подписка</div><div class="ofmv">4 900 ₽/мес</div></div>
        </div>
      </div>
      <div class="ofcta rv d3">
        <a href="mailto:ilya.novitskii@yandex.ru" class="bp" style="font-size:.92rem;padding:1rem 2.25rem">Написать напрямую <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const AMP_HTML = `<!-- 9 · УСИЛИТЕЛИ -->
<section id="amp" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">Почему сейчас</span>
    <h2 class="sh2 rv d1">Стандартный процесс, а не очередь на подряд</h2>
    <p class="sl rv d2">Распаковка идёт по одному и тому же проверенному сценарию — не собирается с нуля под каждого клиента. Условия ниже одинаковы для всех.</p>
    <div class="amp-grid">
      <div class="amp rv d1"><div class="amp-ico">📦</div><div><div class="amp-t">Один стандарт распаковки</div><div class="amp-x">Один и тот же процесс для любой ниши — workspace, шаблон команды, роли, руль сразу у вас. Не «пилотный проект», а повторяемая процедура.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">⏳</div><div><div class="amp-t">Ограниченное число сессий в неделю</div><div class="amp-x">Провожу распаковку лично, поэтому беру ограниченное количество сессий — чтобы каждая была полноценной, а не на бегу.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">📅</div><div><div class="amp-t">Первый месяц включён</div><div class="amp-x">Подписка на первый месяц уже входит в оплату распаковки — вы работаете в системе до того, как платите за неё отдельно.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">🔒</div><div><div class="amp-t">Тарифы зафиксированы</div><div class="amp-x">Цена подписки не растёт «потому что». Решение сегодня — те же условия, что и завтра.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CASES_HTML = `<!-- 10 · РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ -->
<section id="cases" class="sec-light">
  <div class="w">
    <span class="lb rv">Не теория</span>
    <h2 class="sh2 rv d1">Та же система,<br>которой я пользуюсь сам</h2>
    <p class="sl rv d2">Прежде чем распаковывать её вам, проверяю подход на своих проектах. Вот что получилось.</p>
    <div class="cgrid">
      <div class="ccard rv" style="--cc:#FFD000">
        <div class="ctag">Книга</div>
        <div class="ctit">«Нейро-Воронка»</div>
        <div class="csub">30 глав о нейромаркетинге и AI-автоматизации</div>
        <div class="cress"><div class="cres"><strong>→</strong> Написана за 7 дней с AI-агентами</div></div>
      </div>
      <div class="ccard rv d1" style="--cc:#4ECDC4">
        <div class="ctag">Приложение</div>
        <div class="ctit">С нуля до рабочей версии</div>
        <div class="csub">Полный цикл: идея → архитектура → код → запуск</div>
        <div class="cress"><div class="cres"><strong>→</strong> 2 недели вместо месяцев с командой найма</div></div>
      </div>
      <div class="ccard rv d2" style="--cc:#FFD000">
        <div class="ctag">GAZE</div>
        <div class="ctit">SaaS-платформа для бьюти-мастеров</div>
        <div class="csub">CRM клиентов, аналитика дохода, обучение — на Supabase</div>
        <div class="cress"><div class="cres"><strong>→</strong> 26 000+ строк кода, 25 экранов</div></div>
      </div>
      <div class="ccard rv d3" style="--cc:#ff9d2e">
        <div class="ctag">Neuroflow</div>
        <div class="ctit">HealthTech · измерение пульса через камеру</div>
        <div class="csub">Соло R&D, без найма команды</div>
        <div class="cress"><div class="cres"><strong>→</strong> 30 000+ строк кода</div></div>
      </div>
    </div>
    <div class="bigidea rv d2" style="margin-top:3rem">
      <div class="bigidea-tag">Как это выглядит на практике</div>
      <div class="bigidea-tx" style="font-size:1.02rem;line-height:1.55">На сессии распаковки создаём ваш workspace, настраиваем 1–5 AI-агентов под ваши задачи — и вы ставите первую задачу до конца звонка. Агент выполняет её и присылает отчёт: вы сразу видите результат и сколько это стоило. Дальше делегируете сами, а я на связи, если нужна помощь.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CTA_HTML = `<!-- CTA -->
<section id="final" style="position:relative;overflow:hidden">
  <div class="ofin">
    <h2 class="ofh2 rv">Хватит быть человеком-системой.<br>Получите <em style="font-style:normal;color:var(--a)">агентство в коробке.</em></h2>
    <p class="ofsub rv d1">90 минут — и у вас рабочее агентство, которое ведёт операционку без вас. Дальше руль в ваших руках: ставите задачи, смотрите результат.</p>
    <div class="ofcta rv d2">
      <a href="mailto:ilya.novitskii@yandex.ru" class="bp" style="font-size:.92rem;padding:1rem 2.25rem">Записаться на распаковку <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/ai-training" class="bs">Сравнить с обучением AI</a>
    </div>
    <div class="final-alt" style="font-family:var(--fm);font-size:.68rem;color:var(--t3);margin-top:1.5rem">Вопросы? <a href="mailto:ilya.novitskii@yandex.ru" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">ilya.novitskii@yandex.ru</a> или <a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">Telegram</a></div>
  </div>
</section>`;
