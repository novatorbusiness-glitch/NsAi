// Секции consulting (HTML из consulting-content, разбито по ТЗ NCAI_SPEC).

export const HERO_HTML = `<!-- HERO · ТИЗЕРНЫЙ ХУК -->
<section id="hero">
  <div class="hgrid"></div><div class="hgl"></div>
  <div class="hleft">
    <div class="hew"><span class="hdot"></span>Внедрение NCAi-агентства · 30 дней</div>
    <h1 class="hh1">Ты не можешь масштабировать бизнес, потому что вся работа живёт <em>у тебя в голове</em> и руками.<span class="acc">Новый способ: агентство в коробке за 30 дней.</span></h1>
    <p class="hsub">Внедряю вам рабочее NCAi-агентство прямо в панели: AI-команда, отделы, задачи, база клиентов и аналитика. За 30 дней — без найма команды, без дорогого агентства и без зависимости от подрядчика.</p>
    <div class="hacts">
      <a href="mailto:ilya.novitskii@yandex.ru" class="bp">Обсудить внедрение <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="#idea" class="bs">Почему это работает</a>
    </div>
    <div class="hstats">
      <div class="hstat"><div class="hstatn"><span class="cnt" data-to="30">0</span><span class="sfx">дней</span></div><div class="hstatl">От распаковки до передачи руля</div></div>
      <div class="hstat"><div class="hstatn">90<span class="sfx">мин</span></div><div class="hstatl">Сессия распаковки — агентство готово</div></div>
      <div class="hstat"><div class="hstatn">3–5<span class="sfx">шт</span></div><div class="hstatl">AI-сотрудников в команде</div></div>
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
          <div class="hbox" id="hb1">AI-команда<br>3–5 сотрудников</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb2">Отделы<br>и задачи</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb3">База<br>клиентов</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb4">Аналитика<br>и финансы</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb5">Оператор<br>и передача руля</div>
        </div>
      </div>
      <div class="hccap">unpacking agency.workspace<span class="cur">▌</span></div>
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
        <div class="pr-x">SMM, таргетолог, копирайтер — это 150–250 тыс ₽ в месяц. Плюс налоги, софт и риск, что человек уволится.</div>
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
      <div class="bigidea-tx">Купи не консультанта и не подрядчика — купи работающее агентство, распакованное под твой бизнес за 30 дней. Система остаётся, зависимость уходит.</div>
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
        <p class="up rv d2">NCAi — SaaS-платформа, в которой у каждого клиента своё агентство в панели. Не «чат с нейросетью», а <strong>рабочее агентство</strong>: цифровые сотрудники с ролями и базой знаний, отделы, задачи, база клиентов, аналитика и финансы.</p>
        <p class="up rv d2">Обычный консалтинг длится 2–3 месяца и заканчивается презентацией. Внедрение NCAi длится 30 дней и заканчивается <strong>работающим агентством</strong>, в котором клиент сам ставит задачи и видит финансы.</p>
      </div>
      <div class="rv d2">
        <div class="ucmp">
          <div class="urow"><div class="uchead bad">Обычный консалтинг</div><div class="uchead good">NCAi · 30 дней</div></div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>2–3 месяца работы. Результат «в конце»</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Рабочее агентство — с первой сессии</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Отдаёте на аутсорс — не понимаете как устроено</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Всё в панели: задачи, сотрудники, финансы</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Консультант ушёл — знания ушли с ним</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Передаём руль. Клиент сам ставит задачи</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Агентство на аутсорсе — чек каждый месяц</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Подписка от 2 900 ₽/мес + внедрение</div>
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
        <h2 class="sh2 rv d1">250 000 ₽ — это не трата.<br>Это сэкономленные миллионы.</h2>
      </div>
      <p class="roi-tx rv d2">Вы платите не за «ботов в Telegram» и не за красивые консультации. Вы платите за то, чтобы <strong>ближайшие полгода не отдавать миллионы за зарплаты</strong> — и запускать свои продукты за <strong>дни, а не за месяцы</strong>. Это не расход. Это ROI.</p>
    </div>
    <div class="roi-stats">
      <div class="roi-stat rv"><div class="n">до 10×</div><div class="l">Окупаемость внедрения за полгода</div></div>
      <div class="roi-stat rv d1"><div class="n">2–3 млн ₽</div><div class="l">Не тратите на зарплаты команды в год</div></div>
      <div class="roi-stat rv d2"><div class="n">месяцы → дни</div><div class="l">Сокращение цикла запуска продукта</div></div>
    </div>
    <img src="/viz/mrr.svg" alt="Экономика внедрения NCAi — лестница MRR" loading="lazy" style="width:100%;height:auto;display:block;border-radius:16px;border:1px solid var(--br);margin-bottom:3rem" />
    <div class="roi-vs">
      <div class="roi-col bad rv">
        <div class="roi-col-head"><span class="tag">Найм команды</span><span class="price">150–250к ₽ / мес</span></div>
        <div class="roi-li"><span class="x">✕</span><span>SMM + таргетолог + копирайтер — <b>150–250 тыс ₽ в месяц</b> на троих</span></div>
        <div class="roi-li"><span class="x">✕</span><span>За год — <b>≈ 2–3 млн ₽</b> только на зарплаты, без софта и налогов</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Работают 9:00–18:00, болеют, увольняются, «не в настроении»</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Новый запуск = месяцы на найм, онбординг и раскачку</span></div>
        <div class="roi-total bad"><span class="lbl">Итог за год</span><span class="v">≈ 2–3 млн ₽</span></div>
      </div>
      <div class="roi-mid">VS</div>
      <div class="roi-col good rv d1">
        <div class="roi-col-head"><span class="tag">NCAi-агентство</span><span class="price"><b>250 000 ₽</b> разово</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Разовый чек за внедрение — <b>250 000 ₽</b>, потом подписка от 2 900 ₽/мес</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Работает <b>24/7</b> без больничных и «не в настроении»</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Задача утром — <b>результат днём</b>. Запуск за дни, а не за месяцы</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Передача руля: система остаётся с вами</span></div>
        <div class="roi-total good"><span class="lbl">Итог за год</span><span class="v">250 000 ₽ + подписка</span></div>
      </div>
    </div>
    <div class="roi-bottom rv d2">
      <div class="tx">Один раз заплатили за систему — <span>полгода не платите миллионы за людей.</span></div>
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
    <p class="sl rv d2">За одну сессию 60–90 минут — то, что запускается сразу. За 30 дней — система, которая работает без вас.</p>
    <div class="ngrid">
      <div class="ncard rv"><div class="nnum">01</div><div class="ntit">Workspace вашего бизнеса</div><p class="ntx">Не «Мой проект», а «Салон Анны». Кабинет агентства: команда, задачи, отчёты и деньги в одном месте.</p></div>
      <div class="ncard rv d1"><div class="nnum">02</div><div class="ntit">AI-команда 3–5 сотрудников</div><p class="ntx">Цифровые сотрудники с ролями и базой знаний: маркетолог, копирайтер, администратор, финансист. Каждый — со зоной ответственности.</p></div>
      <div class="ncard rv d2"><div class="nnum">03</div><div class="ntit">Отделы под вашу нишу</div><p class="ntx">Разработка, маркетинг, контент, финансы. Не меню, а структура ответственности — у каждого сотрудника есть «дом».</p></div>
      <div class="ncard rv"><div class="nnum">04</div><div class="ntit">3–5 стартовых задач</div><p class="ntx">Реальные задачи из вашей анкеты: номер, срок, ответственный. До конца сессии вы сами ставите первую задачу.</p></div>
      <div class="ncard rv d1"><div class="nnum">05</div><div class="ntit">База клиентов в системе</div><p class="ntx">Ваша база — топливо агентства. Подключаем список, таблицу или CRM. Нет базы — заводим 10 тёплых контактов для старта.</p></div>
      <div class="ncard rv d2"><div class="nnum">06</div><div class="ntit">Аналитика и финансы</div><p class="ntx">Доход, расход, маржа, прибыль. Каждый вечер в 18:00 — отчёт дня. Вы видите картину целиком, а не догадываетесь.</p></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const UNPACK_HTML = `<!-- 4 · МЕХАНИЗМ: 30 ДНЕЙ -->
<section id="unpack" style="background:var(--bg2)">
  <div class="w">
    <div class="mhead">
      <div><span class="lb rv">Как проходит внедрение</span><h2 class="sh2 rv d1">30 дней<br>от коробки к рулю</h2></div>
      <div><p class="rv d1" style="font-size:1rem;color:var(--t2);line-height:1.75;padding-top:1.2rem">Не «мы над этим работаем». Четыре недели, каждый этап — с понятным результатом. Вы двигаетесь от распаковки к передаче руля.</p></div>
    </div>
    <div class="tltrack rv d2">
      <div class="tlst act" data-s="0"><div class="tldt">01</div><div class="tlstit">Распаковка</div><div class="tldur">нед 1</div></div>
      <div class="tlst" data-s="1"><div class="tldt">02</div><div class="tlstit">В работу</div><div class="tldur">нед 2</div></div>
      <div class="tlst" data-s="2"><div class="tldt">03</div><div class="tlstit">Автоматизация</div><div class="tldur">нед 3</div></div>
      <div class="tlst" data-s="3"><div class="tldt">04</div><div class="tlstit">Передача руля</div><div class="tldur">нед 4</div></div>
    </div>
    <div class="tlcon rv d3">
      <div class="tlp act"><div class="tlpdur">Неделя 1 · распаковка</div><div class="tlptit">Сессия 60–90 минут — агентство готово</div><p class="tlptx">Workspace, AI-команда 3–5 сотрудников, отделы, стартовые задачи, база клиентов, аналитика и финансы. Вы сами ставите первую задачу до конца сессии. Всю первую неделю — ежедневное сопровождение: брифинг в 10:00, отчёт в 18:00.</p><div class="tlpdel"><span>→</span> Рабочее агентство в панели</div></div>
      <div class="tlp"><div class="tlpdur">Неделя 2 · в работу</div><div class="tlptit">Вы ведёте задачи сами</div><p class="tlptx">Ежедневные отчёты идут, вы ставите задачи без подсказок. Созвон через 3 дня — разбираем первые вопросы. Сотрудники выполняют рутину, владелец принимает решения, а не тонет в операционке.</p><div class="tlpdel"><span>→</span> Первый реальный результат</div></div>
      <div class="tlp"><div class="tlpdur">Неделя 3 · автоматизация</div><div class="tlptit">Цифровые сотрудники берут рутину</div><p class="tlptx">Контент по базе знаний, автоматические напоминания клиентам, отчёты и аналитика. Видно, кто сегодня что делал и сколько времени. Расширения — только когда вы сами увидели пользу и попросили.</p><div class="tlpdel"><span>→</span> Рутина уходит в агентов</div></div>
      <div class="tlp"><div class="tlpdur">Неделя 4 · передача руля</div><div class="tlptit">Вы самостоятельны</div><p class="tlptx">Вы сами ставите задачи и смотрите финансы без участия внедренца. Знаете, куда писать при проблеме. Цель — передать руль, а не держать за руку. Система остаётся с вами.</p><div class="tlpdel"><span>→</span> Агентство работает без вас</div></div>
    </div>
    <img src="/viz/raspakovka.svg" alt="Шесть шагов распаковки NCAi-агентства" loading="lazy" style="width:100%;height:auto;display:block;border-radius:16px;border:1px solid var(--br);margin-top:3rem" />
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
            <path d="M8 8 L272 8 L232 60 L48 60 Z" fill="url(#fl1)" stroke="rgba(255,208,0,.3)" stroke-width="1"/>
            <text x="140" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.7)">Workspace · команда</text>
            <path d="M48 66 L232 66 L202 116 L78 116 Z" fill="url(#fl2)" stroke="rgba(255,208,0,.2)" stroke-width="1"/>
            <text x="140" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.6)">Отделы · задачи</text>
            <path d="M78 122 L202 122 L178 170 L102 170 Z" fill="url(#fl3)" stroke="rgba(255,208,0,.15)" stroke-width="1"/>
            <text x="140" y="150" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.5)">База клиентов</text>
            <path d="M102 176 L178 176 L160 222 L120 222 Z" fill="url(#fl4)" stroke="rgba(255,208,0,.1)" stroke-width="1"/>
            <text x="140" y="203" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.4)">Аналитика · финансы</text>
            <text x="140" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,.15)">в конце — вы сами ставите задачу</text>
          </svg>
        </div>
      </div>
      <div class="wdiag rv d2">
        <div class="wi act"><div class="wico">📦</div><div><div class="wtit">Шаг 1 · Workspace (10 мин)</div><div class="wtx">Создаём кабинет агентства с названием вашего бизнеса. Это не «Мой проект» — здесь живут сотрудники, задачи и деньги.</div></div></div>
        <div class="wi"><div class="wico">🧑‍💼</div><div><div class="wtit">Шаг 2 · Сотрудники и роли (15 мин)</div><div class="wtx">3–5 цифровых сотрудников по шаблону ниши: имя, роль, отдел, база знаний. Не больше 5 ролей на старте — слабого выводим, а не терпим.</div></div></div>
        <div class="wi"><div class="wico">🏛️</div><div><div class="wtit">Шаг 3 · Отделы (10 мин)</div><div class="wtx">Разработка, маркетинг, контент, финансы. Раскладываем сотрудников по отделам, чтобы у каждого был «дом» и зона ответственности.</div></div></div>
        <div class="wi"><div class="wico">✅</div><div><div class="wtit">Шаг 4 · Стартовые задачи (15 мин)</div><div class="wtx">3–5 реальных задач из анкеты: одна задача — одна строка, есть номер, срок и стоимость. Вы сами ставите одну задачу — это ваш «экзамен» дня.</div></div></div>
        <div class="wi"><div class="wico">📇</div><div><div class="wtit">Шаг 5 · База клиентов (15 мин)</div><div class="wtx">Подключаем базу: список, таблица или CRM. База — топливо системы. Нет базы — заводим 10 тёплых контактов для старта.</div></div></div>
        <div class="wi"><div class="wico">📊</div><div><div class="wtit">Шаг 6 · Аналитика и финансы (10 мин)</div><div class="wtx">Доход, расход, маржа, прибыль, расход токенов. «Контроль» — кто сегодня что делал. Каждый вечер в 18:00 приходит отчёт дня.</div></div></div>
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
    <p class="sl rv d2">Семь вопросов про эмоции и три про логику. Если на большинство ответите «да» — внедрение за 30 дней для вас.</p>
    <div class="qgrid">
      <div class="qcard rv"><span class="qtag e">Вопрос 1 · эмоции</span><div class="qq">Сколько часов в день вы тратите на рутину, которую должен делать кто-то другой?</div><div class="qa">Каждый такой час — это час, который не работает на рост бизнеса.</div></div>
      <div class="qcard rv d1"><span class="qtag e">Вопрос 2 · эмоции</span><div class="qq">Вам не страшно, что бизнес стоит, пока вы в отпуске или болеете?</div><div class="qa">Система не болеет, не увольняется и не «не в настроении».</div></div>
      <div class="qcard rv"><span class="qtag e">Вопрос 3 · эмоции</span><div class="qq">Сколько денег вы уже отдали агентствам, после которых система так и не появилась?</div><div class="qa">Вы покупали услуги. Здесь вы покупаете актив, который остаётся.</div></div>
      <div class="qcard rv d1"><span class="qtag e">Вопрос 4 · эмоции</span><div class="qq">Что вы почувствуете, когда утром откроете панель и увидите, что всё сделано само?</div><div class="qa">Это и есть передача руля: вы управляете, а не тоните в операционке.</div></div>
      <div class="qcard rv"><span class="qtag e">Вопрос 5 · эмоции</span><div class="qq">Вас не бесит, что подрядчик — чёрный ящик, и вы не знаете, что происходит?</div><div class="qa">Прозрачность — это когда всё в панели, а не в голове консультанта.</div></div>
      <div class="qcard rv d1"><span class="qtag e">Вопрос 6 · эмоции</span><div class="qq">Что будет с бизнесом через год, если вы продолжите работать руками, как сейчас?</div><div class="qa">Без системы масштаб упирается в ваше личное время.</div></div>
      <div class="qcard rv"><span class="qtag e">Вопрос 7 · эмоции</span><div class="qq">Хотите ли вы, наконец, перестать быть единственным, кто всё держит в голове?</div><div class="qa">Агентство в коробке — это способ перестать быть «человеком-системой».</div></div>
      <div class="qcard rv d1"><span class="qtag l">Вопрос 8 · логика</span><div class="qq">Что дешевле: найм 2–3 человек за 150–250 тыс ₽/мес или подписка от 2 900 ₽/мес?</div><div class="qa">Подписка — это 2–5% от стоимости найма. Математика простая.</div></div>
      <div class="qcard rv"><span class="qtag l">Вопрос 9 · логика</span><div class="qq">Сколько стоит один месяц простоя, пока вы «решаетесь»?</div><div class="qa">Месяц внедрения против месяца ожидания — разница в системе, которая уже работает.</div></div>
      <div class="qcard rv d1"><span class="qtag l">Вопрос 10 · логика</span><div class="qq">Готовы ли вы выделить одну сессию 90 минут, чтобы получить рабочее агентство?</div><div class="qa">Это единственное усилие на старте. Дальше систему ведут сотрудники.</div></div>
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
    <div class="obj rv d1"><div class="obj-q">Я не технарь, панель не осилю</div><div class="obj-a">Панель — это Telegram Mini App: ставить задачи и смотреть финансы проще, чем вести таблицу в Excel. 90 минут на сессии вы во всём разберётесь.</div></div>
    <div class="obj rv d2"><div class="obj-q">Уже пробовали автоматизацию — не взлетело</div><div class="obj-a">Разница в подходе: не «подключили бота», а построили агентство с ролями, базой знаний и правом на действие. Плюс передача руля, а не зависимость.</div></div>
    <div class="obj rv d2"><div class="obj-q">Дорого, это же подписка каждый месяц</div><div class="obj-a">Сравните: найм отдела — 150–250 тыс ₽/мес. Подписка — от 2 900 ₽. Это 2–5% от стоимости найма за команду, которая работает круглосуточно.</div></div>
    <div class="obj rv d2"><div class="obj-q">А если мне не понравится?</div><div class="obj-a">14 дней trial после распаковки — вы видите продукт в действии до того, как платить за подписку. Решение принимаете по факту, а не по обещаниям.</div></div>
  </div>
</section>
<hr class="dv">`;

export const OFFER_HTML = `<!-- 8 · ОФФЕР -->
<section id="offer">
  <div class="w">
    <div class="ofin">
      <span class="lb rv" style="justify-content:center">Оффер · внедрение 30 дней</span>
      <h2 class="ofh2 rv d1">Всё, что вы получаете<br>в обмен на деньги</h2>
      <p class="ofsub rv d2">Разовый чек за внедрение (распаковку) + ежемесячная подписка на платформу. Прозрачно, без скрытых платежей.</p>
      <div class="ofcard rv d2">
        <p style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1.5rem">Что входит во внедрение</p>
        <div class="ofgrid">
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Распаковка 60–90 минут <span>workspace, команда, отделы, задачи, база, аналитика</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">AI-команда 3–5 сотрудников <span>с ролями и базами знаний под вашу нишу</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">30 дней внедрения <span>4 недели: распаковка → передача руля</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Ежедневное сопровождение <span>брифинг в 10:00, отчёт в 18:00, созвоны</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Подписка от 2 900 ₽/мес <span>Standard · 5 мест · $15 AI-бюджета · 14 дней trial</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Передача руля <span>вы сами ставите задачи и смотрите финансы</span></div></div>
        </div>
        <div class="meta4">
          <div class="m4"><div class="m4-l">Результат мечты</div><div class="m4-v">Агентство в панели, которое работает без вас</div></div>
          <div class="m4"><div class="m4-l">Вероятность</div><div class="m4-v">Высокая: система видна с первой сессии</div></div>
          <div class="m4"><div class="m4-l">Время до результата</div><div class="m4-v">30 дней, руль у вас уже в неделю 4</div></div>
          <div class="m4"><div class="m4-l">Ваши усилия</div><div class="m4-v">Анкета + одна сессия 90 минут</div></div>
        </div>
        <div class="ofmeta">
          <div><div class="ofml">Формат</div><div class="ofmv">Сессия + панель</div></div>
          <div><div class="ofml">Длительность</div><div class="ofmv">30 дней</div></div>
          <div><div class="ofml">Подписка</div><div class="ofmv">от 2 900 ₽/мес</div></div>
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
    <h2 class="sh2 rv d1">Дефицит и срочность</h2>
    <p class="sl rv d2">Внедрение — это личная работа с каждым клиентом. Поэтому поток ограничен, и это честно.</p>
    <div class="amp-grid">
      <div class="amp rv d1"><div class="amp-ico">🎯</div><div><div class="amp-t">Несколько клиентов в месяц</div><div class="amp-x">Каждое внедрение ведётся лично 30 дней. Больше взять физически не могу — качество упадёт.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">⏳</div><div><div class="amp-t">Места на месяц ограничены</div><div class="amp-x">Когда слоты заняты — старт переносится. Чем раньше напишете, тем раньше начнёте.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">📅</div><div><div class="amp-t">14 дней trial</div><div class="amp-x">Платите за подписку только после того, как увидели продукт в действии. Риск — на мне, не на вас.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">🔒</div><div><div class="amp-t">Тарифы зафиксированы</div><div class="amp-x">Цена подписки не растёт «потому что». Решение сегодня — те же условия, что и завтра.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CASES_HTML = `<!-- 10 · КЕЙСЫ / ПРИМЕР -->
<section id="cases" class="sec-light">
  <div class="w">
    <span class="lb rv">Как это работает</span>
    <h2 class="sh2 rv d1">Примеры из разных ниш</h2>
    <p class="sl rv d2">Агентство в коробке распаковывается под нишу клиента. Вот как это выглядит в четырёх типовых случаях.</p>
    <div class="cgrid">
      <div class="ccard rv" style="--cc:#FFD000">
        <div class="ctag">Бьюти</div>
        <div class="ctit">Салон / косметология / студия</div>
        <div class="csub">Запись, контент, напоминания, возврат базы.</div>
        <div class="cress">
          <div class="cres"><strong>→</strong> Напоминания о записи за 24 и 2 часа</div>
          <div class="cres"><strong>→</strong> Контент-план на неделю</div>
          <div class="cres"><strong>→</strong> Отчёт по записи за день</div>
        </div>
      </div>
      <div class="ccard rv d1" style="--cc:#4ECDC4">
        <div class="ctag">Услуги</div>
        <div class="ctit">Клиника / психолог / юрист / ремонт</div>
        <div class="csub">Прогрев, отчёты, финансы, работа с базой.</div>
        <div class="cress">
          <div class="cres"><strong>→</strong> Скрипт первого касания</div>
          <div class="cres"><strong>→</strong> 20 тёплых клиентов в работу</div>
          <div class="cres"><strong>→</strong> Финансовый отчёт за месяц</div>
        </div>
      </div>
      <div class="ccard rv d2" style="--cc:#FFD000">
        <div class="ctag">Продажи</div>
        <div class="ctit">Магазин / e-commerce / локальный бренд</div>
        <div class="csub">Товарный контент, отчёты по заказам, финансы.</div>
        <div class="cress">
          <div class="cres"><strong>→</strong> Схема работы с заказом</div>
          <div class="cres"><strong>→</strong> Автоотчёт по заказам</div>
          <div class="cres"><strong>→</strong> Контроль запасов</div>
        </div>
      </div>
    </div>
    <div class="bigidea rv d2" style="margin-top:3rem">
      <div class="bigidea-tag">Пример · как это происходит</div>
      <div class="bigidea-tx" style="font-size:1.02rem;line-height:1.55">Салон Анны. На сессии распаковки за 90 минут создаём workspace «Салон Анны», команду из четырёх цифровых сотрудников, отделы, стартовые задачи и подключаем базу клиентов. К концу сессии Анна сама ставит первую задачу. Через неделю система напоминает клиентам о записях и готовит контент-план. Через месяц Анна смотрит финансы в панели и принимает решения, а не тонет в рутине.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CTA_HTML = `<!-- CTA -->
<section id="final" style="position:relative;overflow:hidden">
  <div class="ofin">
    <h2 class="ofh2 rv">Хватит быть человеком-системой.<br>Получите <em style="font-style:normal;color:var(--a)">агентство в коробке.</em></h2>
    <p class="ofsub rv d1">30 дней — и у вас рабочее агентство, которое работает без вас. Передаю руль — и работаете сами.</p>
    <div class="ofcta rv d2">
      <a href="mailto:ilya.novitskii@yandex.ru" class="bp" style="font-size:.92rem;padding:1rem 2.25rem">Написать напрямую <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/ai-training" class="bs">Сравнить с обучением AI</a>
    </div>
    <div class="final-alt" style="font-family:var(--fm);font-size:.68rem;color:var(--t3);margin-top:1.5rem">Вопросы? <a href="mailto:ilya.novitskii@yandex.ru" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">ilya.novitskii@yandex.ru</a> или <a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">Telegram</a></div>
  </div>
</section>`;
