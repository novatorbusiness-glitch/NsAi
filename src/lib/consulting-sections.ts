// Секции consulting (HTML из consulting-content, разбито по ТЗ NCAI_SPEC).

export const HERO_HTML = `<!-- HERO · ТИЗЕРНЫЙ ХУК -->
<section id="hero-consulting">
  <div class="hgrid"></div><div class="hgl"></div>
  <div class="hleft">
    <div class="hew"><span class="hdot"></span>Агентство в коробке · распаковка + подписка</div>
    <h1 class="hh1">Ты не можешь масштабировать бизнес, потому что вся работа живёт <em>у тебя в голове</em> и руками.<span class="acc">Новый способ: агентство в коробке за одну сессию.</span></h1>
    <p class="hsub">Разворачиваю вам не «доступ к нейросети», а готовую систему: методология внедрения, роли и регламенты команды, доска задач и контроль расходов. AI внутри — просто исполнитель по регламенту, а не то, за что вы платите. За одну сессию — без найма команды, без дорогого агентства и без зависимости от подрядчика.</p>
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

export const PANEL_HTML = `<!-- PANEL PREVIEW · как выглядит продукт: точная копия реального интерфейса -->
<section id="panel-preview" class="sec-light">
  <div class="w">
    <span class="lb rv">Как это выглядит</span>
    <h2 class="sh2 rv d1">Не абстракция —<br>рабочая панель</h2>
    <p class="sl rv d2">Тот же Hermes, которым я управляю своей командой, — под капотом NCAi. Ниже — реальный интерфейс, не макет: те же вкладки, те же карточки, что видите вы после распаковки. Переключайте вкладки.</p>
    <div class="rmock rv d2">
      <div class="rmock-head">
        <div class="rmock-brand">NCAi <span class="rmock-dot">AGENCY</span></div>
        <div class="rmock-sub">Салон Анны · агентство в панели</div>
      </div>
      <div class="rmock-tabswrap">
        <div class="rmock-tabs" data-rmock-tabs>
          <div class="rmock-tab act" data-screen="dash"><span class="rmock-tic">📊</span>Главная</div>
          <div class="rmock-tab" data-screen="agents"><span class="rmock-tic">👥</span>Команда</div>
          <div class="rmock-tab" data-screen="finance"><span class="rmock-tic">💰</span>Финансы</div>
          <div class="rmock-tab" data-screen="projects"><span class="rmock-tic">🗂️</span>Проекты</div>
        </div>
        <div class="rmock-fade"></div>
      </div>
      <div class="rmock-body" data-rmock-body>

        <div class="rmock-screen act" data-screen="dash">
          <div class="rmock-label">💰 Деньги</div>
          <div class="rmock-metrics">
            <div class="rmock-metric"><div class="rmock-mnum">$8,40<span class="rmock-u"> (750₽)</span></div><div class="rmock-mlab">Остаток</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$31,60<span class="rmock-u"> (2840₽)</span></div><div class="rmock-mlab">Потрачено</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$40,00<span class="rmock-u"> (3600₽)</span></div><div class="rmock-mlab">Вложено</div></div>
          </div>
          <div class="rmock-label">📋 Сегодня</div>
          <div class="rmock-hero">
            <div class="rmock-ch"><div class="rmock-ch-num">4</div><div class="rmock-ch-lab">Задач сегодня</div></div>
            <div class="rmock-ch"><div class="rmock-ch-num">2ч 15м</div><div class="rmock-ch-lab">Часов работы</div></div>
          </div>
          <div class="rmock-label">👥 Команда</div>
          <div class="rmock-rows">
            <div class="rmock-row"><span class="rmock-rname">🎯 Директор</span><span class="rmock-rval">1 задача · 12м</span></div>
            <div class="rmock-row"><span class="rmock-rname">⚙️ Разработчик</span><span class="rmock-rval">2 задачи · 1ч 40м</span></div>
            <div class="rmock-row"><span class="rmock-rname">📈 Маркетолог</span><span class="rmock-rval">1 задача · 23м</span></div>
          </div>
        </div>

        <div class="rmock-screen" data-screen="agents">
          <div class="rmock-label">👥 Команда — 4 сотрудника</div>
          <div class="rmock-agent"><span class="rmock-aico">🎯</span><div class="rmock-abody"><div class="rmock-aname">Директор</div><div class="rmock-arole">Управление · разбирает и проверяет задачи</div></div><span class="rmock-badge live">в работе</span></div>
          <div class="rmock-agent"><span class="rmock-aico">⚙️</span><div class="rmock-abody"><div class="rmock-aname">Иван</div><div class="rmock-arole">Разработчик</div></div><span class="rmock-badge on">online</span></div>
          <div class="rmock-agent"><span class="rmock-aico">📈</span><div class="rmock-abody"><div class="rmock-aname">Мария</div><div class="rmock-arole">Маркетолог</div></div><span class="rmock-badge busy">занят</span></div>
          <div class="rmock-agent"><span class="rmock-aico">💰</span><div class="rmock-abody"><div class="rmock-aname">Финансист</div><div class="rmock-arole">Финансы · юнит-экономика, отчёты</div></div><span class="rmock-badge on">online</span></div>
          <div class="rmock-note">У каждого — понятная роль и зона ответственности. Не безликий «AI-помощник».</div>
        </div>

        <div class="rmock-screen" data-screen="finance">
          <div class="rmock-label">💰 Деньги</div>
          <div class="rmock-metrics">
            <div class="rmock-metric"><div class="rmock-mnum">$8,40<span class="rmock-u"> (750₽)</span></div><div class="rmock-mlab">Остаток</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$31,60<span class="rmock-u"> (2840₽)</span></div><div class="rmock-mlab">Потрачено</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$40,00<span class="rmock-u"> (3600₽)</span></div><div class="rmock-mlab">Вложено</div></div>
          </div>
          <div class="rmock-label">💳 Моя подписка</div>
          <div class="rmock-rows">
            <div class="rmock-row"><span class="rmock-rname">План</span><span class="rmock-rval">Premium · 15 мест</span></div>
            <div class="rmock-row"><span class="rmock-rname">Статус</span><span class="rmock-rval">active</span></div>
            <div class="rmock-row"><span class="rmock-rname">Продление</span><span class="rmock-rval">05.10.2026</span></div>
          </div>
          <div class="rmock-note">Бюджет $40 включён в подписку. Kill-switch остановит агентов, если лимит исчерпан — сюрпризов в конце месяца не бывает.</div>
        </div>

        <div class="rmock-screen" data-screen="projects">
          <div class="rmock-label">🗂️ Проекты</div>
          <div class="rmock-tflow">
            <div class="rmock-tcard"><div class="rmock-th">Входящая задача</div><div class="rmock-tt">«Собрать прайс на неделю»</div></div>
            <div class="rmock-tarr">→</div>
            <div class="rmock-tcard dir"><div class="rmock-th">🎯 Директор</div><div class="rmock-tt">Разбивает на подзадачи, назначает роль</div></div>
            <div class="rmock-tarr">→</div>
            <div class="rmock-tcard"><div class="rmock-th">⚙️ Разработчик</div><div class="rmock-tt">Статус: <b>в работе</b> → отчёт директору</div></div>
          </div>
          <div class="rmock-rows" style="margin-top:.8rem">
            <div class="rmock-row"><span class="rmock-rname">✅ Готово — директор проверил результат</span><span class="rmock-rval">закрыто</span></div>
          </div>
          <div class="rmock-note">Директор не запускает задачи в обход проверки: закрывает только после того, как сверил результат с критерием готовности.</div>
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

export const GETS_HTML = `<!-- 3 · ЧТО РЕАЛЬНО МЕНЯЕТСЯ -->
<section id="gets" class="sec-light">
  <div class="w">
    <span class="lb rv">Уникальный механизм</span>
    <h2 class="sh2 rv d1">Что реально меняется<br>после распаковки</h2>
    <p class="sl rv d2">Не абстрактные фичи — конкретные перемены, которые вы почувствуете с первого дня, а не через месяц настройки.</p>
    <div class="ngrid">
      <div class="ncard rv"><div class="nbadge">01</div><div class="ntit">Своё с первого дня</div><p class="ntx"><b>Кабинет с названием вашего бизнеса работает сразу</b> — не демо-версия «Мой проект». Агенты, задачи и расходы на AI в одном месте, а не в пяти вкладках и переписках.</p></div>
      <div class="ncard rv d1"><div class="nbadge">02</div><div class="ntit">Не решаете, кому что поручить</div><p class="ntx"><b>Написали директору одну задачу — дальше не ваша забота.</b> Он сам разбирает её на подзадачи и назначает роль: разработка, тексты, контент, аналитика.</p></div>
      <div class="ncard rv d2"><div class="nbadge">03</div><div class="ntit">Делегируете, а не гадаете</div><p class="ntx"><b>У каждого агента понятная роль</b> — не безликий «AI-помощник». Открыли панель — сразу видно, кому какую задачу поручить.</p></div>
      <div class="ncard rv"><div class="nbadge">04</div><div class="ntit">Работа стартует до конца сессии</div><p class="ntx"><b>Не «начнём на следующей неделе».</b> 3–5 реальных задач из вашей анкеты уже стоят на доске, и последнюю вы поставили сами.</p></div>
      <div class="ncard rv d1"><div class="nbadge">05</div><div class="ntit">Счёт вас не удивит</div><p class="ntx"><b>Бюджет и kill-switch не дадут потратить больше лимита</b> — расходы под контролем автоматически, а не по факту в конце месяца.</p></div>
      <div class="ncard rv d2"><div class="nbadge">06</div><div class="ntit">Всегда знаете, что происходит</div><p class="ntx"><b>Каждый вечер в 18:00 — отчёт дня:</b> что сделано, кто что делал. Не спрашиваете «как дела», а открываете панель.</p></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const REALWORK_HTML = `<!-- 4 · КАК ЭТО РАБОТАЕТ НА САМОМ ДЕЛЕ: КАРУСЕЛЬ ПО НИШАМ -->
<section id="realwork" class="sec-light">
  <div class="w">
    <span class="lb rv">Как это работает на самом деле</span>
    <h2 class="sh2 rv d1">Не абстракция — конкретные задачи для вашей ниши</h2>
    <p class="sl rv d2">Под каждую нишу — свой шаблон: отделы, роли и первые задачи, которые реально ставятся в первую неделю. Не «представьте, что…», а то, что настраивается прямо на сессии.</p>
    <div class="ncw rv d2">
      <button class="nc-arr nc-prev" id="ncPrev" aria-label="Предыдущая ниша">‹</button>
      <div class="ncarousel" id="ncarousel">
        <div class="nccard">
          <div class="ncico">💇</div>
          <div class="nctag">Бьюти · салон, косметология, студии</div>
          <div class="ncrow"><span class="ncl">Проблема</span><p>Запись срывается, контент выходит от случая к случаю, база клиентов молчит между визитами.</p></div>
          <div class="ncrow"><span class="ncl">Команда</span><p>Маркетолог, SMM-агент, администратор, финансист</p></div>
          <div class="nctasks">
            <div class="nctask">Собрать прайс услуг</div>
            <div class="nctask">Контент-план на неделю</div>
            <div class="nctask">Отчёт по записи за день</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Результат</span><p>Запись и напоминания идут сами, контент выходит по графику — а не когда вспомнили. Видно в панели, а не на словах.</p></div>
        </div>
        <div class="nccard">
          <div class="ncico">🧰</div>
          <div class="nctag">Услуги · клиники, психологи, юристы, ремонт</div>
          <div class="ncrow"><span class="ncl">Проблема</span><p>Заявки приходят, но нет системы прогрева и повторных касаний — клиент разово купил и пропал.</p></div>
          <div class="ncrow"><span class="ncl">Команда</span><p>Менеджер по продажам, копирайтер, аналитик</p></div>
          <div class="nctasks">
            <div class="nctask">Скрипт первого касания</div>
            <div class="nctask">Список из 20 тёплых клиентов</div>
            <div class="nctask">Финансовый отчёт за месяц</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Результат</span><p>Тёплая база не забывается между визитами — за ней следят системно. Финансовый отчёт готов без ручного труда каждый месяц.</p></div>
        </div>
        <div class="nccard">
          <div class="ncico">🛍️</div>
          <div class="nctag">Продажи · магазины, e-commerce, опт</div>
          <div class="ncrow"><span class="ncl">Проблема</span><p>Заказы теряются между чатами и таблицами, товарный контент делается вручную и редко.</p></div>
          <div class="ncrow"><span class="ncl">Команда</span><p>Менеджер, бэкенд-разработчик, финансист</p></div>
          <div class="nctasks">
            <div class="nctask">Схема работы с заказом</div>
            <div class="nctask">Автоотчёт по заказам</div>
            <div class="nctask">Контроль запасов</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Результат</span><p>Заказ виден на каждом этапе в одном месте, остатки под контролем — меньше потерянных заказов и ручной сверки в таблицах.</p></div>
        </div>
        <div class="nccard">
          <div class="ncico">🎬</div>
          <div class="nctag">Контент · блогеры, эксперты, онлайн-школы</div>
          <div class="ncrow"><span class="ncl">Проблема</span><p>Контент-план держится на разовом вдохновении, вовлечённость никто не считает системно.</p></div>
          <div class="ncrow"><span class="ncl">Команда</span><p>Редактор, копирайтер, дизайнер, финансист</p></div>
          <div class="nctasks">
            <div class="nctask">Контент-план на 7 дней</div>
            <div class="nctask">Пост-анонс запуска</div>
            <div class="nctask">Отчёт по вовлечённости</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Результат</span><p>Контент выходит по плану каждую неделю, а не по вдохновению — и видно, что реально работает, а не кажется.</p></div>
        </div>
      </div>
      <button class="nc-arr nc-next" id="ncNext" aria-label="Следующая ниша">›</button>
    </div>
    <div class="ncdots" id="ncDots"></div>
    <p class="sl rv d3" style="margin-top:1.5rem;font-size:.88rem">Шаблон — отправная точка, а не догма: отделы и роли меняем под вас прямо во время распаковки.</p>
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
    <div class="obj rv d1"><div class="obj-q">У меня нет базы клиентов</div><div class="obj-a">Панель — не CRM, она не хранит и не ведёт вашу базу. Команда выполняет задачи: контент, отчёты, финансы. Если клиентов пока мало, первые задачи — на привлечение: контент-план и скрипты для первых обращений.</div></div>
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
