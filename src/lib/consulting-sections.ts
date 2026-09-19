// Секции consulting (HTML из consulting-content, разбито по ТЗ NCAI_SPEC).
import { icon } from "./icons";
import { FLOW_HTML } from "./flow";

export const HERO_HTML = `<!-- HERO · ТИЗЕРНЫЙ ХУК -->
<section id="hero-consulting">
  ${FLOW_HTML}
  <div class="hgrid"></div><div class="hgl"></div>
  <div class="hleft">
    <div class="hew"><span class="hdot"></span>Агентство в коробке · распаковка + подписка</div>
    <h1 class="hh1">Работа в вашей голове.<span class="acc">Забираем в агентство за 19 900 ₽.</span></h1>
    <p class="hsub">Не «доступ к нейросети», а настоящий движок: приёмка задач, пир-ревью, ночной драйвер 24/7. Готовая AI-команда с ролями, доской задач и контролем расходов. Руль сразу у вас — для владельца бизнеса и для новой профессии менеджера AI-агентства.</p>
    <div class="hacts">
      <a href="https://t.me/NCAi_Agency_bot" class="bp" target="_blank" rel="noopener noreferrer">Записаться на распаковку <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="#idea" class="bs">Почему это работает</a>
    </div>
    <div class="hstats">
      <div class="hstat"><div class="hstatn">4<span class="sfx">шага</span></div><div class="hstatl">Распаковка — агентство готово</div></div>
      <div class="hstat"><div class="hstatn">19 900<span class="sfx">₽</span></div><div class="hstatl">Разово за распаковку, дальше — подписка</div></div>
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

export const WHO_HTML = `<!-- ДЛЯ КОГО · две равные ветки: бизнес + новая профессия -->
<section id="who" class="sec-light">
  <div class="w">
    <span class="lb rv">Для кого</span>
    <h2 class="sh2 rv d1">Бизнесу — операционка на AI-команде 24/7.<br>Специалисту — свой AI-отдел и выше чек.</h2>
    <p class="sl rv d2">Распаковка — не «бизнес плюс приписка про профессию». Это два одинаково сильных сценария: владелец бизнеса отдаёт операционку команде, специалист собирает себе AI-отдел и поднимает чек.</p>
    <div class="who-grid">
      <div class="who rv d1">
        <div class="who-ico">${icon("building")}</div>
        <div class="who-tag">Ветка 1 · Владелец бизнеса</div>
        <div class="who-t">Отдаёте операционку —<br>растите бизнес</div>
        <p class="who-x">Салон, клиника, магазин, услуги, онлайн-школа. Рутина съедает день, найм дорогой, подрядчик — чёрный ящик. Получаете AI-команду, которая ведёт операционку 24/7.</p>
        <div class="who-li">✓ Директор + до 5 агентов под вашу нишу</div>
        <div class="who-li">✓ Доска задач и контроль расходов на AI</div>
        <div class="who-li">✓ Отчёт каждый вечер в 18:00 — без «как дела?»</div>
        <div class="who-ex">
          <div class="who-ex-tag">Пример</div>
          <p>Салон красоты. Запись, напоминания, контент-план и отчёт по выручке делает команда. Владелица пишет задачу коротко, своими словами — если что-то непонятно, директор сам переспросит детали, прежде чем передавать в работу. Вечером читает отчёт.</p>
        </div>
      </div>
      <div class="who rv d2">
        <div class="who-ico">${icon("compass")}</div>
        <div class="who-tag">Ветка 2 · Новая профессия</div>
        <div class="who-t">Менеджер AI-агентства —<br>свой отдел под рукой</div>
        <p class="who-x">Чатботеры, маркетологи, руководители, фрилансеры. Осваиваете роль менеджера AI-агентства: оказываете свои услуги быстрее, качественнее и с большим чеком.</p>
        <div class="who-li">✓ Готовая AI-команда — как собственный отдел</div>
        <div class="who-li">✓ Свои услуги клиентам — быстрее и дороже</div>
        <div class="who-li">✓ Методология распаковки — применяете к своим клиентам</div>
        <div class="who-ex">
          <div class="who-ex-tag">Пример</div>
          <p>Маркетолог ведёт пять клиентов. Вместо ручных постов и отчётов его AI-команда собирает контент-план и отчёт за час — он продаёт это клиенту как услугу и поднимает чек.</p>
        </div>
      </div>
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
            <div class="rmock-metric"><div class="rmock-mnum">$3,60<span class="rmock-u"> (324₽)</span></div><div class="rmock-mlab">Остаток</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$8,40<span class="rmock-u"> (756₽)</span></div><div class="rmock-mlab">Потрачено</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$12,00<span class="rmock-u"> (1080₽)</span></div><div class="rmock-mlab">Вложено</div></div>
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
            <div class="rmock-metric"><div class="rmock-mnum">$3,60<span class="rmock-u"> (324₽)</span></div><div class="rmock-mlab">Остаток</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$8,40<span class="rmock-u"> (756₽)</span></div><div class="rmock-mlab">Потрачено</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$12,00<span class="rmock-u"> (1080₽)</span></div><div class="rmock-mlab">Вложено</div></div>
          </div>
          <div class="rmock-label">💳 Моя подписка</div>
          <div class="rmock-rows">
            <div class="rmock-row"><span class="rmock-rname">План</span><span class="rmock-rval">Premium</span></div>
            <div class="rmock-row"><span class="rmock-rname">Статус</span><span class="rmock-rval">active</span></div>
            <div class="rmock-row"><span class="rmock-rname">Продление</span><span class="rmock-rval">05.10.2026</span></div>
          </div>
          <div class="rmock-note">AI-бюджет включён в подписку. Kill-switch остановит агентов, если лимит исчерпан — сюрпризов в конце месяца не бывает.</div>
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

export const SCREENS_HTML = `<!-- СКРИНЫ · реальный интерфейс системы (не макет, не сток) -->
<section id="screens" class="sec-light">
  <div class="w">
    <span class="lb rv">Скрины · живая система</span>
    <h2 class="sh2 rv d1">Пять живых экранов:<br>деньги, команда, задачи, аналитика, отчёт</h2>
    <p class="sl rv d2">Реальные скрины рабочего кабинета NCAi: пульт, команда, доска задач, аналитика и отчёт. Снято с живой системы — не макет.</p>
    <div class="screens">
      <figure class="scr rv d1">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/panel.png" alt="Пульт NCAi — деньги, команда, задачи за сегодня" /></div>
        <figcaption class="scr-cap">Пульт — <span>деньги, команда, задачи за сегодня</span></figcaption>
      </figure>
      <figure class="scr rv d1">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/team.png" alt="Команда NCAi — роли, статусы, точность каждого" /></div>
        <figcaption class="scr-cap">Команда — <span>роли, статусы и точность каждого</span></figcaption>
      </figure>
      <figure class="scr rv d2">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/kanban.png" alt="Доска задач NCAi — от «не начато» до «готово»" /></div>
        <figcaption class="scr-cap">Доска задач — <span>от «не начато» до «готово»</span></figcaption>
      </figure>
      <figure class="scr rv d2">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/analytics.png" alt="Аналитика NCAi — расход AI и рейтинг сотрудников" /></div>
        <figcaption class="scr-cap">Аналитика — <span>расход AI и рейтинг сотрудников</span></figcaption>
      </figure>
      <figure class="scr rv d3">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/report.png" alt="Отчёт NCAi — точность, задачи, что сдано и что буксует" /></div>
        <figcaption class="scr-cap">Отчёт — <span>точность, что сдано и что буксует</span></figcaption>
      </figure>
    </div>
    <p class="sl rv d3" style="margin-top:1.75rem;font-size:.9rem">Один скрин — один результат. Так панель выглядит у каждого клиента после распаковки: свой workspace, своя команда, свои цифры.</p>
  </div>
</section>
<hr class="dv">`;

export const IDEA_HTML = `<!-- 1 · БОЛЬШАЯ ИДЕЯ -->
<section id="idea" class="sec-light">
  <div class="w">
    <span class="lb rv">Большая идея</span>
    <h2 class="sh2 rv d1">Больше усилий —<br>тот же потолок</h2>
    <p class="sl rv d2">Ты владелец малого бизнеса с живой операционкой: салон, клиника, магазин, услуги. Клиенты есть, рутина съедает день, а масштабироваться не получается. Или ты специалист, который осваивает роль менеджера AI-агентства — и упирается в тот же потолок: всё руками, роста нет.</p>
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
        <div class="w-li"><span class="w-ico">3</span><span><b>Стратегии продают слайды, а не систему.</b> «Стратегия» и отчёты не остаются работать после ухода консультанта.</span></div>
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
      <div class="bigidea-tx">Купи не консультанта и не подрядчика — купи работающее агентство, распакованное под твой бизнес за несколько шагов. Система остаётся, зависимость уходит.</div>
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
        <h2 class="uh2 rv d1">Покупаете не консультанта.<br>Покупаете агентство.</h2>
        <p class="up rv d2">NCAi — платформа, в которой у каждого клиента своя команда AI-агентов в панели. Не «чат с нейросетью», а <strong>рабочая команда</strong>: агенты с ролями и базой знаний, доска задач, контроль расходов на AI.</p>
        <p class="up rv d2">Обычный разбор со стороны длится 2–3 месяца и заканчивается презентацией. Распаковка NCAi — несколько понятных шагов от оплаты до <strong>работающей AI-команды</strong>, в которой клиент сам ставит задачи и видит расход на AI.</p>
      </div>
      <div class="rv d2">
        <div class="ucmp">
          <div class="urow"><div class="uchead bad">Разбор со стороны</div><div class="uchead good">NCAi · распаковка</div></div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>2–3 месяца работы. Результат «в конце»</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Рабочее агентство — с первого шага</div>
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
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>19 900 ₽ разово (первый месяц подписки включён), дальше 4 900 ₽/мес</div>
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
        <h2 class="sh2 rv d1">19 900 ₽ — не трата.<br>Это экономия миллионов.</h2>
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
        <div class="roi-col-head"><span class="tag">NCAi-агентство</span><span class="price"><b>19 900 ₽</b> разово</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Разовая распаковка — <b>19 900 ₽</b> (первый месяц подписки включён), дальше 4 900 ₽/мес</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Работает <b>24/7</b> без больничных и «не в настроении»</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Задача утром — <b>результат днём</b>. Запуск за дни, а не за месяцы</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Руль сразу у вас: система остаётся с вами</span></div>
        <div class="roi-total good"><span class="lbl">Итог за год</span><span class="v">≈ 79 000 ₽</span></div>
      </div>
    </div>
    <div class="roi-bottom rv d2">
      <div class="tx">Один раз заплатили за систему — <span>экономия ≈4 млн ₽ в год, и распаковка окупается в первый месяц.</span></div>
      <a href="#offer" class="bp" style="font-size:.88rem;padding:.85rem 1.9rem">Смотреть оффер <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </div>
</section>
<hr class="dv">`;

export const REALWORK_HTML = `<!-- 4 · КАК ЭТО РАБОТАЕТ НА САМОМ ДЕЛЕ: КАРУСЕЛЬ ПО НИШАМ -->
<section id="realwork" class="sec-light">
  <div class="w">
    <span class="lb rv">Что меняется в вашей нише</span>
    <h2 class="sh2 rv d1">Что реально закрывается<br>за первую неделю</h2>
    <p class="sl rv d2">Вы ставите задачи в чате директору — он разбирает их на подзадачи и раздаёт ролям. Ниже — что конкретно снимается с вас в бьюти, услугах, продажах и контенте: сколько рутины уходит с ваших рук и за что больше не нужно платить подрядчику. Не «представьте, что…», а то, что готово по итогам распаковки.</p>
    <div class="ncw rv d2">
      <button class="nc-arr nc-prev" id="ncPrev" aria-label="Предыдущая ниша">‹</button>
      <div class="ncarousel" id="ncarousel">
        <div class="nccard">
          <div class="ncico">${icon("sparkle")}</div>
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
          <div class="ncico">${icon("toolbox")}</div>
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
          <div class="ncico">${icon("shop")}</div>
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
          <div class="ncico">${icon("clapper")}</div>
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
    <p class="sl rv d3" style="margin-top:.6rem;font-size:.88rem">Команда не работает сама по себе: задачи ставите вы (или ваш оператор) в Telegram или в панели, AI-директор разбивает их на подзадачи и раздаёт ролям, проверяет результат перед закрытием. Это цифровой отдел, которым управляют, а не автопилот без водителя.</p>
  </div>
</section>
<hr class="dv">`;

export const STEPS_HTML = `<!-- 5 · МЕХАНИЗМ: РАСПАКОВКА -->
<section id="steps" class="sec-light">
  <div class="w">
    <div class="wlay">
      <div>
        <span class="lb rv">Распаковка · как это устроено</span>
        <h2 class="sh2 rv d1">Платите один раз —<br>агентство работает уже сегодня</h2>
        <p class="sl rv d2" style="margin-bottom:0">Не абстрактный «процесс внедрения» на месяцы. Четыре шага, у каждого — результат, который видно, а не который надо принять на веру. Нажмите на шаг.</p>
        <div class="funnelw rv d3">
          <svg viewBox="0 0 280 270" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fl1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".85"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".3"/></linearGradient>
              <linearGradient id="fl2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".55"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".15"/></linearGradient>
              <linearGradient id="fl3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".32"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".08"/></linearGradient>
              <linearGradient id="fl4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".16"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".04"/></linearGradient>
            </defs>
            <path id="fz1" class="fz" d="M8 8 L272 8 L232 60 L48 60 Z" fill="url(#fl1)" stroke="rgba(180,130,0,.4)" stroke-width="1"/>
            <text x="140" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Распаковка в боте</text>
            <path id="fz2" class="fz" d="M48 66 L232 66 L202 116 L78 116 Z" fill="url(#fl2)" stroke="rgba(180,130,0,.3)" stroke-width="1"/>
            <text x="140" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Кабинет разворачивается</text>
            <path id="fz3" class="fz" d="M78 122 L202 122 L178 170 L102 170 Z" fill="url(#fl3)" stroke="rgba(180,130,0,.25)" stroke-width="1"/>
            <text x="140" y="150" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Обучение по инструкции</text>
            <path id="fz4" class="fz" d="M102 176 L178 176 L160 222 L120 222 Z" fill="url(#fl4)" stroke="rgba(180,130,0,.2)" stroke-width="1"/>
            <text x="140" y="203" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Первые задачи</text>
            <text x="140" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#8b867e">дальше — агентство работает на вас</text>
          </svg>
        </div>
      </div>
      <div class="wdiag rv d2">
        <div class="wi act" data-zone="1"><div class="wico">${icon("chat")}</div><span class="wchev">▾</span><div><div class="wtit">Шаг 1 · Распаковка в боте</div><div class="wtx">Бот не спрашивает «расскажите о своём бизнесе» для галочки — он выясняет, где реально горит: кто тянет операционку, какие задачи съедают день, что отдать в первую очередь. Пять минут вашего времени вместо недель брифов с агентством.<div class="wres"><span class="ncl">Результат</span><p>Система знает ваш бизнес и уже понимает, какую команду под него собрать — не шаблон «для всех».</p></div></div></div></div>
        <div class="wi" data-zone="2"><div class="wico">${icon("box")}</div><span class="wchev">▾</span><div><div class="wtit">Шаг 2 · Кабинет разворачивается сам</div><div class="wtx">Пока в других агентствах готовят коммерческое предложение, у вас уже разворачивается рабочий кабинет: AI-директор, агенты под роли, стартовые задачи под вашу нишу. Автоматически — без «ждите, подготовим смету».<div class="wres"><span class="ncl">Результат</span><p>Агентство физически существует и ждёт в Telegram — не через месяц, а сразу после оплаты.</p></div></div></div></div>
        <div class="wi" data-zone="3"><div class="wico">${icon("book")}</div><span class="wchev">▾</span><div><div class="wtit">Шаг 3 · Обучение — в своём темпе, без созвонов</div><div class="wtx">Пошаговая инструкция вместо часового звонка с продавцом: как подключить AI-бюджет, куда заходить, как ставить задачи и читать отчёты. Разбираетесь тогда, когда удобно вам — а не когда свободен менеджер.<div class="wres"><span class="ncl">Результат</span><p>Пользуетесь панелью уверенно сами — без зависимости от чьего-то графика.</p></div></div></div></div>
        <div class="wi" data-zone="4"><div class="wico">✅</div><span class="wchev">▾</span><div><div class="wtit">Шаг 4 · Первая задача — и агентство поехало</div><div class="wtx">Ставите директору реальную задачу — не тестовую. Он распределяет её между агентами, проверяет результат перед закрытием и в 18:00 присылает отчёт, который читается за минуту.<div class="wres"><span class="ncl">Результат</span><p>Агентство работает на вас с первого дня — а не вы тратите неделю на его настройку.</p></div></div></div></div>
        <p class="sl rv d3" style="margin-top:1.5rem;font-size:.92rem">Рабочее агентство остаётся с вами. Первый месяц подписки уже включён в оплату распаковки, дальше — 4 900 ₽/мес.</p>
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
      <div class="qcard rv d1"><span class="qtag">Вопрос 2</span><div class="qq">Что будет с задачами, пока я в отпуске или болею?</div><div class="qa">Система не болеет, не увольняется и не «не в настроении».</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 3</span><div class="qq">Сколько денег вы уже отдали агентствам, после которых система так и не появилась?</div><div class="qa">Вы покупали услуги. Здесь вы покупаете актив, который остаётся.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 4</span><div class="qq">Что вы почувствуете, когда утром откроете панель и увидите, что всё сделано само?</div><div class="qa">Это и есть передача руля: вы управляете, а не тоните в операционке.</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 5</span><div class="qq">Вас не бесит, что подрядчик — чёрный ящик, и вы не знаете, что происходит?</div><div class="qa">Прозрачность — это когда всё в панели, а не в голове консультанта.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 6</span><div class="qq">Что будет с бизнесом через год, если вы продолжите работать руками, как сейчас?</div><div class="qa">Без системы масштаб упирается в ваше личное время.</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 7</span><div class="qq">Хотите ли вы, наконец, перестать быть единственным, кто всё держит в голове?</div><div class="qa">Агентство в коробке — это способ перестать быть «человеком-системой».</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 8</span><div class="qq">Что дешевле: найм команды за ≈343 тыс ₽/мес с налогами или подписка 4 900 ₽/мес?</div><div class="qa">Подписка — это ≈1,5% от стоимости найма. Математика простая.</div></div>
      <div class="qcard rv"><span class="qtag">Вопрос 9</span><div class="qq">Сколько стоит один месяц простоя, пока вы «решаетесь»?</div><div class="qa">Месяц внедрения против месяца ожидания — разница в системе, которая уже работает.</div></div>
      <div class="qcard rv d1"><span class="qtag">Вопрос 10</span><div class="qq">Готовы ли вы пройти распаковку в боте, чтобы получить рабочее агентство?</div><div class="qa">Это единственное усилие на старте. Дальше систему ведут сотрудники.</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const OBJECTIONS_HTML = `<!-- 7 · ВОЗРАЖЕНИЯ -->
<section id="objections" class="sec-light">
  <div class="w">
    <span class="lb rv">Возражения</span>
    <h2 class="sh2 rv d1">«Да, но...» — это не аргумент</h2>
    <p class="sl rv d2">Самые частые сомнения перед внедрением. Разберём каждое по очереди.</p>
    <div class="obj rv d1"><div class="obj-q">Это робот, я ему не доверяю</div><div class="obj-a">За системой стоит живой человек — архитектор, которому можно написать в любой момент. Цифровые сотрудники работают по вашему регламенту и под вашим контролем.</div></div>
    <div class="obj rv d1"><div class="obj-q">У меня нет базы клиентов</div><div class="obj-a">Панель — не CRM, она не хранит и не ведёт вашу базу. Команда выполняет задачи: контент, отчёты, финансы. Если клиентов пока мало, первые задачи — на привлечение: контент-план и скрипты для первых обращений.</div></div>
    <div class="obj rv d1"><div class="obj-q">Я не технарь, панель не осилю</div><div class="obj-a">Панель — это Telegram Mini App: ставить задачи и смотреть расход на AI проще, чем вести таблицу в Excel. Распаковка в боте и пошаговая инструкция — разберётесь без звонков.</div></div>
    <div class="obj rv d2"><div class="obj-q">Уже пробовали автоматизацию — не взлетело</div><div class="obj-a">Разница в подходе: не «подключили бота», а построили агентство с ролями, базой знаний и правом на действие. Плюс передача руля, а не зависимость.</div></div>
    <div class="obj rv d2"><div class="obj-q">Дорого, это же подписка каждый месяц</div><div class="obj-a">Сравните: найм команды — ≈343 тыс ₽/мес с налогами. Подписка — 4 900 ₽. Около 1,5% от стоимости найма за команду, которая работает круглосуточно.</div></div>
    <div class="obj rv d2"><div class="obj-q">А если мне не понравится?</div><div class="obj-a">Первый месяц подписки уже включён в стоимость распаковки — вы пользуетесь продуктом в реальной работе, прежде чем платить за него отдельно. Решение принимаете по факту, а не по обещаниям.</div></div>
    <div class="obj rv d2"><div class="obj-q">Есть же Codex, Клод, ChatGPT — зачем мне ещё что-то?</div><div class="obj-a">Это инструменты, а не команда — подробное сравнение чуть выше. Коротко: инструмент отвечает здесь и сейчас, ничего не помня. Распаковка — это память о вашем бизнесе и директор, который проверяет результат.</div></div>
    <div class="obj rv d2"><div class="obj-q">У меня уже есть подрядчики — переплачиваю, зато всё понятно</div><div class="obj-a">Никто не просит рвать с ними за один день. Начните с одной ниши задач, которую агентство закроет дешевле и быстрее — отчёты, контент-план, первичная обработка заявок. Когда увидите разницу в цене и скорости, решите сами, что оставить подрядчикам, а что забрать под AI-команду.</div></div>
    <div class="obj rv d2"><div class="obj-q">У меня мало задач — сам справлюсь через ChatGPT</div><div class="obj-a">Если задач на 2–3 часа в неделю — да, отдельная команда не нужна, честно скажем это сразу. Распаковка окупается там, где рутина повторяется каждую неделю: отчёты, контент, обработка заявок. Если сомневаетесь — посчитайте, сколько часов в месяц уходит на такую рутину, и сравните с 4 900 ₽.</div></div>
    <div class="obj rv d2"><div class="obj-q">Это же просто открытая программа, я могу поставить её сам бесплатно</div><div class="obj-a">Да, движок под капотом (Hermes) — open source, это не секрет. Но вы платите не за доступ к нему: вы платите за готовую команду ролей с базой знаний под вашу нишу, за дисциплину директора, который проверяет результат, а не просто раздаёт задачи, за методологию из 13 готовых процессов внедрения, за постоянно работающий сервер — и за то, что всё это разворачивается за несколько шагов, а не за недели самостоятельной настройки.</div></div>
  </div>
</section>
<hr class="dv">`;

export const OFFER_HTML = `<!-- 8 · ОФФЕР -->
<section id="offer">
  <div class="w">
    <div class="ofin">
      <span class="lb rv" style="justify-content:center">Оффер · распаковка</span>
      <h2 class="ofh2 rv d1">Что вы получаете<br>за 19 900 ₽</h2>
      <p class="ofsub rv d2">Лестница входа: <b>разбор 190 ₽</b> (квиз в боте, без риска) → <b>распаковка 19 900 ₽</b> (первый месяц подписки включён) → <b>подписка 4 900 ₽/мес</b>. Прозрачно, без скрытых платежей.</p>
      <div class="ofcard rv d2">
        <p style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1.5rem">Что входит в распаковку</p>
        <div class="ofgrid">
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Распаковка в боте <span>workspace, агенты, доска задач, контроль расходов на AI — разворачиваются по итогам</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">AI-директор + до 5 агентов <span>с ролями и базами знаний под вашу нишу</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Руль сразу у вас <span>ставите задачи и смотрите расход на AI с первого дня</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Подписка 4 900 ₽/мес <span>первый месяц включён в распаковку</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Поддержка на связи <span>вопросы и донастройка — в Telegram, когда нужно</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Рост без пересборки <span>добавляете агентов по мере роста бизнеса — доп. сотрудник 1 000 ₽/мес</span></div></div>
        </div>
        <div class="meta4">
          <div class="m4"><div class="m4-l">Результат мечты</div><div class="m4-v">Агентство в панели, которое держит рутину на себе</div></div>
          <div class="m4"><div class="m4-l">Вероятность</div><div class="m4-v">Высокая: система видна с первого шага</div></div>
          <div class="m4"><div class="m4-l">Время до результата</div><div class="m4-v">4 шага, руль у вас сразу</div></div>
          <div class="m4"><div class="m4-l">Ваши усилия</div><div class="m4-v">Распаковка в боте — дальше система разворачивает всё сама</div></div>
        </div>
        <div class="ofmeta">
          <div><div class="ofml">Разбор</div><div class="ofmv">190 ₽</div></div>
          <div><div class="ofml">Распаковка</div><div class="ofmv">19 900 ₽</div></div>
          <div><div class="ofml">Подписка</div><div class="ofmv">4 900 ₽/мес</div></div>
          <div><div class="ofml">Годовая</div><div class="ofmv">49 000 ₽</div></div>
        </div>
      </div>
      <div class="rv d3" style="margin-top:1.5rem;padding:1.1rem 1.25rem;border:1px solid var(--br2);border-radius:14px;background:rgba(255,208,0,.06)">
        <div style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:.5rem">Оплата без разового удара</div>
        <p style="font-size:.92rem;color:var(--t2);line-height:1.6;margin:0">Распаковку <b>19 900 ₽</b> можно разбить на части — рассрочка через Prodamus. Годовая подписка — <b>49 000 ₽</b> вместо 58 800 помесячно: два месяца в подарок.</p>
      </div>
      <div class="ofcta rv d3">
        <a href="https://t.me/NCAi_Agency_bot" class="bp" style="font-size:.92rem;padding:1rem 2.25rem" target="_blank" rel="noopener noreferrer">Начать распаковку <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
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
      <div class="amp rv d1"><div class="amp-ico">${icon("box")}</div><div><div class="amp-t">Один стандарт распаковки</div><div class="amp-x">Один и тот же процесс для любой ниши — workspace, шаблон команды, роли, руль сразу у вас. Не «пилотный проект», а повторяемая процедура.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">${icon("hourglass")}</div><div><div class="amp-t">Личный контроль каждой распаковки</div><div class="amp-x">Бот ведёт распаковку автоматически, но каждую оплату вижу лично и проверяю, что кабинет настроен верно — беру ограниченное число новых клиентов в неделю, чтобы успевать.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("calendar")}</div><div><div class="amp-t">Первый месяц включён</div><div class="amp-x">Подписка на первый месяц уже входит в оплату распаковки — вы работаете в системе до того, как платите за неё отдельно.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("lock")}</div><div><div class="amp-t">Тарифы зафиксированы</div><div class="amp-x">Цена подписки не растёт «потому что». Решение сегодня — те же условия, что и завтра.</div></div></div>
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
        <div class="csub">6 глав · 30 подглав о нейромаркетинге и AI-автоматизации</div>
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
      <div class="bigidea-tx" style="font-size:1.02rem;line-height:1.55">После распаковки в боте система разворачивает ваш workspace и 1–5 AI-агентов под ваши задачи — и вы ставите первую задачу сами. Агент выполняет её и присылает отчёт: сразу видите результат и сколько это стоило. Дальше делегируете сами, а я на связи, если нужна помощь.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CTA_HTML = `<!-- CTA -->
<section id="final" style="position:relative;overflow:hidden">
  <div class="ofin">
    <h2 class="ofh2 rv">Хватит быть человеком-системой.<br>Получите <em style="font-style:normal;color:var(--a)">агентство в коробке.</em></h2>
    <p class="ofsub rv d1">Несколько шагов — и у вас рабочее агентство, которое снимает с вас операционку. Дальше руль в ваших руках: ставите задачи, смотрите результат.</p>
    <div class="ofcta rv d2">
      <a href="https://t.me/NCAi_Agency_bot" class="bp" style="font-size:.92rem;padding:1rem 2.25rem" target="_blank" rel="noopener noreferrer">Записаться на распаковку <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/ai-training" class="bs">Сравнить с обучением AI</a>
    </div>
    <div class="final-alt" style="font-family:var(--fm);font-size:.68rem;color:var(--t3);margin-top:1.5rem">Вопросы? <a href="mailto:ilya.novitskii@yandex.ru" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">ilya.novitskii@yandex.ru</a> или <a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">Telegram</a></div>
  </div>
</section>`;

export const VS_AI_HTML = `<!-- 3 · ЧЕМ ОТЛИЧАЕТСЯ ОТ Claude/GPT/Codex -->
<section id="vs-ai">
  <div class="w">
    <span class="lb rv">Отличие от чат-ботов</span>
    <h2 class="sh2 rv d1">Claude и GPT — инструменты.<br>Распаковка NCAi — команда.</h2>
    <p class="sl rv d2">Claude и GPT отвечают на запрос здесь и сейчас, но не помнят ваш бизнес, не проверяют свою работу и не работают, пока вы не открыли чат. Распаковка NCAi — готовая команда ролей с памятью о вашей нише, директором, который проверяет результат, и доской задач, а не окно диалога, которое нужно каждый раз собирать заново.</p>
    <div class="vz vz-status rv d2" role="img" aria-label="Путь одной задачи: принята, назначена роль, проверена директором, согласована">
      <div class="vz-head">
        <span class="vz-badge"><span class="vz-pulse"></span>AI-директор ведёт задачу</span>
        <span class="vz-note">Вы ставите задачу в чате — дальше видно каждый шаг и кто что проверил</span>
      </div>
      <div class="vz-st-card">
        <div class="vz-st-task">
          <span class="vz-st-id">#1043</span>
          <span class="vz-st-title">Собрать прайс услуг на неделю</span>
        </div>
        <ol class="vz-st-steps">
          <li class="vz-st-step" style="--i:0">
            <span class="vz-st-time">09:14</span>
            <span class="vz-st-txt">Принял задачу и уточнил недостающие детали</span>
          </li>
          <li class="vz-st-step" style="--i:1">
            <span class="vz-st-time">09:16</span>
            <span class="vz-st-txt">Назначил исполнителя: специалист по трафику и воронкам</span>
          </li>
          <li class="vz-st-step" style="--i:2">
            <span class="vz-st-time">09:41</span>
            <span class="vz-st-txt">Результат ушёл на проверку — сверка с критериями задачи</span>
          </li>
          <li class="vz-st-step is-final" style="--i:3">
            <span class="vz-st-time">09:48</span>
            <span class="vz-st-txt">Согласовано. У вас на руках готовый прайс</span>
          </li>
        </ol>
      </div>
    </div>
    <div class="vstable-wrap rv d2">
      <div class="vstable">
        <div class="vshead">
          <div class="vsh cr">Критерий</div>
          <div class="vsh th">Claude / GPT / Codex</div>
          <div class="vsh me2">→ Распаковка NCAi</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Что это</div>
          <div class="vsc th">Инструмент: отвечает на запрос здесь и сейчас</div>
          <div class="vsc me">Команда: роли + память + доска + отчёты</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Память о бизнесе</div>
          <div class="vsc th">Не помнит нишу и вчерашние задачи</div>
          <div class="vsc me">Держит нишу и историю задач</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Проверка результата</div>
          <div class="vsc th">Проверяете сами, вручную</div>
          <div class="vsc me">Директор проверяет перед закрытием</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Что происходит между вашими заходами</div>
          <div class="vsc th">Ничего: закрыли чат — работа встала</div>
          <div class="vsc me">Поставленные задачи продолжают идти, вечером отчёт</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Управление</div>
          <div class="vsc th">Каждый раз собираете диалог заново</div>
          <div class="vsc me">Ставите задачу директору — дальше сам</div>
        </div>
      </div>
    </div>
    <p class="vstable-hint">← смахните, чтобы увидеть сравнение с NCAi →</p>
  </div>
</section>
<hr class="dv">`;

export const UNDER_HOOD_HTML = `<!-- ДВИЖОК · как система принимает, проверяет и доводит задачи -->
<section id="under-hood" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">Движок</span>
    <h2 class="sh2 rv d1">Не «доступ к нейросети».<br>Настоящий движок приёмки и проверки.</h2>
    <p class="sl rv d2">Под капотом — не чат с моделью, а конвейер: задача проходит приёмку, двойную проверку и только потом закрывается. Поэтому «сдано» в NCAi означает «проверено», а не «написано».</p>
    <div class="vz vz-pipe rv d2" role="img" aria-label="Конвейер приёмки задачи: согласование, исполнение, проверка двумя агентами, директор, закрыто">
      <div class="vz-head">
        <span class="vz-badge"><span class="vz-pulse"></span>Конвейер приёмки</span>
        <span class="vz-note">Задача не закрывается, пока не пройдёт все пять узлов</span>
      </div>
      <ol class="vz-track">
        <svg class="vz-rail" viewBox="0 0 1000 2" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <line class="vz-rail-line" x1="8" y1="1" x2="992" y2="1" />
          <rect class="vz-rail-pulse" x="8" y="0" width="110" height="2" rx="1" />
        </svg>
        <li class="vz-step" style="--i:0">
          <span class="vz-step-n">01</span>
          <span class="vz-step-t">Приёмка</span>
          <span class="vz-step-x">Работа не стартует, пока концепция не согласована</span>
        </li>
        <li class="vz-step" style="--i:1">
          <span class="vz-step-n">02</span>
          <span class="vz-step-t">Исполнение</span>
          <span class="vz-step-x">Задачу берёт агент с профильной зоной ответственности</span>
        </li>
        <li class="vz-step" style="--i:2">
          <span class="vz-step-n">03</span>
          <span class="vz-step-t">Проверка ×2</span>
          <span class="vz-step-x">Результат смотрят два других агента, независимо друг от друга</span>
        </li>
        <li class="vz-step" style="--i:3">
          <span class="vz-step-n">04</span>
          <span class="vz-step-t">Директор</span>
          <span class="vz-step-x">Финальная сверка с критериями задачи</span>
        </li>
        <li class="vz-step is-done" style="--i:4">
          <span class="vz-step-n">05</span>
          <span class="vz-step-t">Закрыто</span>
          <span class="vz-step-x">«Сдано» означает проверено, а не написано</span>
        </li>
      </ol>
    </div>
    <div class="amp-grid">
      <div class="amp rv d1"><div class="amp-ico">${icon("door")}</div><div><div class="amp-t">Задачу сначала согласовывают</div><div class="amp-x">Работа не начинается, пока концепция не согласована. Не делаем лишнего и не тратим ваш AI-бюджет на задачи, которые всё равно переделывать.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">${icon("eye")}</div><div><div class="amp-t">Каждую задачу проверяют дважды</div><div class="amp-x">Прежде чем закрыть задачу, её смотрят два других агента, и только потом — директор. «Готово» — это проверенный результат, а не слово на веру.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("target")}</div><div><div class="amp-t">Сдаём с первого раза — или честно говорим</div><div class="amp-x">Перед тем как показать вам «готово», систему саму проверяют: компиляция, тесты, соответствие критериям — слово сотрудника не принимается на веру. И да, мы сами поймали момент, когда эта цифра была завышена, и пересчитали как есть — честная цифра лучше красивой.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("moon")}</div><div><div class="amp-t">Поставленные задачи идут и ночью</div><div class="amp-x">Задачи ставите вы — дальше очередь разбирается ночью и к утру у вас результат, а не список дел на завтра. Если задача зависает, система останавливает её сама и присылает уведомление, бюджет не сгорает.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">${icon("brain")}</div><div><div class="amp-t">Помнит вашу нишу и не повторяет ошибок</div><div class="amp-x">Держит в голове текущую задачу, помнит прошлые уроки и подтягивает нужные факты из базы знаний вашего бизнеса. На одни грабли дважды не наступает.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("bolt")}</div><div><div class="amp-t">Платите за задачу, а не за мощность</div><div class="amp-x">Сложные решения — через сильную модель, рутина — через быструю и дешёвую. Экономия считается автоматически, вам не нужно в этом разбираться.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FEATURES_HTML = `<!-- 8 · ФИЧИ ПАНЕЛИ -->
<section id="features" class="sec-light">
  <div class="w">
    <span class="lb rv">Фичи панели</span>
    <h2 class="sh2 rv d1">Шесть вкладок панели —<br>работают с первого дня</h2>
    <p class="sl rv d2">Не обещания — конкретные вкладки рабочего кабинета, которые работают с первого дня.</p>
    <div class="ngrid">
      <div class="ncard rv"><div class="nbadge">01</div><div class="ntit">Доска задач</div><p class="ntx">Номер, срок, исполнитель, статус. Закрытой задача становится только после вашего «Утвердил» — статус сотрудника «готово» до этого лишь гипотеза.</p></div>
      <div class="ncard rv d1"><div class="nbadge">02</div><div class="ntit">Команда</div><p class="ntx">Роли, статусы (online / busy / idle), базы знаний. Не безликий «AI-помощник», а сотрудники с зонами ответственности.</p></div>
      <div class="ncard rv d2"><div class="nbadge">03</div><div class="ntit">Финансы</div><p class="ntx">Вложено / остаток / потрачено — реальные деньги с точностью до цента, а не «виртуальные кредиты».</p></div>
      <div class="ncard rv"><div class="nbadge">04</div><div class="ntit">Контроль расходов на AI</div><p class="ntx">Kill-switch блокирует запуск ДО того, как потрачены деньги, а не после. Счёт в конце месяца не удивляет.</p></div>
      <div class="ncard rv d1"><div class="nbadge">05</div><div class="ntit">Аналитика</div><p class="ntx">P&L-прогноз, рейтинг, отчёты. Видно, что приносит деньги, а что просто горит.</p></div>
      <div class="ncard rv d2"><div class="nbadge">06</div><div class="ntit">Отчёты</div><p class="ntx">Утром — план на день, вечером в 18:00 — итог, по пятницам — полный отчёт за неделю документом. Отдельно каждый день перепроверяем, что «сдано» — правда сдано.</p></div>
    </div>
  </div>
</section>
<hr class="dv">`;

// ─────────────────────────────────────────────────────────────────────────────
// EN — английские версии секций (для переключателя языка, см. Bilingual.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export const HERO_HTML_EN = `<!-- HERO -->
<section id="hero-consulting">
  ${FLOW_HTML}
  <div class="hgrid"></div><div class="hgl"></div>
  <div class="hleft">
    <div class="hew"><span class="hdot"></span>Agency in a box · unboxing + subscription</div>
    <h1 class="hh1">The work in your head.<span class="acc">We turn it into an agency for 19,900 ₽.</span></h1>
    <p class="hsub">Not "access to a neural network," but a real engine: task intake, peer review, a 24/7 night-shift driver. A ready AI team with roles, a task board and spend control. You're in control from day one — for a business owner and for the new profession of AI-agency manager alike.</p>
    <div class="hacts">
      <a href="https://t.me/NCAi_Agency_bot" class="bp" target="_blank" rel="noopener noreferrer">Book an unboxing <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="#idea" class="bs">Why this works</a>
    </div>
    <div class="hstats">
      <div class="hstat"><div class="hstatn">4<span class="sfx">steps</span></div><div class="hstatl">Unboxing — agency ready</div></div>
      <div class="hstat"><div class="hstatn">19,900<span class="sfx">₽</span></div><div class="hstatl">One-time for unboxing, then a subscription</div></div>
      <div class="hstat"><div class="hstatn">1<span class="sfx">–5</span></div><div class="hstatl">AI agents built for your tasks</div></div>
      <div class="hstat"><div class="hstatn"><span class="cnt" data-to="100">0</span><span class="sfx">%</span></div><div class="hstatl">Transparent: everything's in your panel</div></div>
    </div>
  </div>
  <div class="hright">
    <div class="hcard">
      <div class="hctop"><div class="hcdot"></div><div class="hctitle">NCAi · <span>agency in a box</span></div></div>
      <div class="hsys">
        <div class="hsys-row">
          <div class="hbox lit" id="hb0">Your business's<br>workspace</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb1">AI director<br>+ agents</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb2">Task<br>board</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb3">AI spend<br>control</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb4">Telegram<br>alerts</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb5">You're in control<br>from day one</div>
        </div>
      </div>
      <div class="hccap">unpacking agency.workspace<span class="cur">▌</span></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const WHO_HTML_EN = `<!-- WHO IT'S FOR -->
<section id="who" class="sec-light">
  <div class="w">
    <span class="lb rv">Who it's for</span>
    <h2 class="sh2 rv d1">For a business — operations run by an AI team, 24/7.<br>For a specialist — your own AI department and a higher rate.</h2>
    <p class="sl rv d2">Unboxing isn't "a business pitch with a profession footnote." It's two equally strong paths: a business owner hands off operations to a team, a specialist builds their own AI department and raises their rate.</p>
    <div class="who-grid">
      <div class="who rv d1">
        <div class="who-ico">${icon("building")}</div>
        <div class="who-tag">Path 1 · Business owner</div>
        <div class="who-t">Hand off operations —<br>grow the business</div>
        <p class="who-x">A salon, clinic, shop, service business, online school. Routine eats your day, hiring is expensive, a contractor is a black box. You get an AI team that runs operations 24/7.</p>
        <div class="who-li">✓ A director + up to 5 agents built for your niche</div>
        <div class="who-li">✓ A task board and AI spend control</div>
        <div class="who-li">✓ A report every evening at 6pm — no "how's it going?" needed</div>
        <div class="who-ex">
          <div class="who-ex-tag">Example</div>
          <p>A beauty salon. Booking, reminders, a content plan and a revenue report are handled by the team. The owner writes a task briefly, in her own words — if something's unclear, the director asks a clarifying question before passing it on. In the evening she reads the report.</p>
        </div>
      </div>
      <div class="who rv d2">
        <div class="who-ico">${icon("compass")}</div>
        <div class="who-tag">Path 2 · New profession</div>
        <div class="who-t">AI-agency manager —<br>your own department on hand</div>
        <p class="who-x">Chatbot builders, marketers, managers, freelancers. You pick up the role of AI-agency manager: deliver your own services faster, better, and at a higher rate.</p>
        <div class="who-li">✓ A ready AI team — like your own department</div>
        <div class="who-li">✓ Your services to clients — faster and pricier</div>
        <div class="who-li">✓ An unboxing methodology — apply it to your own clients</div>
        <div class="who-ex">
          <div class="who-ex-tag">Example</div>
          <p>A marketer runs five clients. Instead of writing posts and reports by hand, their AI team puts together a content plan and a report in an hour — they sell that to the client as a service and raise their rate.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const PANEL_HTML_EN = `<!-- PANEL PREVIEW -->
<section id="panel-preview" class="sec-light">
  <div class="w">
    <span class="lb rv">What it looks like</span>
    <h2 class="sh2 rv d1">Not an abstraction —<br>a working panel</h2>
    <p class="sl rv d2">The same Hermes engine I use to run my own team powers NCAi under the hood. Below is the real interface, not a mockup: the same tabs, the same cards you see after unboxing. Switch between the tabs.</p>
    <div class="rmock rv d2">
      <div class="rmock-head">
        <div class="rmock-brand">NCAi <span class="rmock-dot">AGENCY</span></div>
        <div class="rmock-sub">Anna's Salon · agency in a panel</div>
      </div>
      <div class="rmock-tabswrap">
        <div class="rmock-tabs" data-rmock-tabs>
          <div class="rmock-tab act" data-screen="dash"><span class="rmock-tic">📊</span>Home</div>
          <div class="rmock-tab" data-screen="agents"><span class="rmock-tic">👥</span>Team</div>
          <div class="rmock-tab" data-screen="finance"><span class="rmock-tic">💰</span>Finance</div>
          <div class="rmock-tab" data-screen="projects"><span class="rmock-tic">🗂️</span>Projects</div>
        </div>
        <div class="rmock-fade"></div>
      </div>
      <div class="rmock-body" data-rmock-body>

        <div class="rmock-screen act" data-screen="dash">
          <div class="rmock-label">💰 Money</div>
          <div class="rmock-metrics">
            <div class="rmock-metric"><div class="rmock-mnum">$3.60<span class="rmock-u"> (324₽)</span></div><div class="rmock-mlab">Balance</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$8.40<span class="rmock-u"> (756₽)</span></div><div class="rmock-mlab">Spent</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$12.00<span class="rmock-u"> (1080₽)</span></div><div class="rmock-mlab">Funded</div></div>
          </div>
          <div class="rmock-label">📋 Today</div>
          <div class="rmock-hero">
            <div class="rmock-ch"><div class="rmock-ch-num">4</div><div class="rmock-ch-lab">Tasks today</div></div>
            <div class="rmock-ch"><div class="rmock-ch-num">2h 15m</div><div class="rmock-ch-lab">Hours worked</div></div>
          </div>
          <div class="rmock-label">👥 Team</div>
          <div class="rmock-rows">
            <div class="rmock-row"><span class="rmock-rname">🎯 Director</span><span class="rmock-rval">1 task · 12m</span></div>
            <div class="rmock-row"><span class="rmock-rname">⚙️ Developer</span><span class="rmock-rval">2 tasks · 1h 40m</span></div>
            <div class="rmock-row"><span class="rmock-rname">📈 Marketer</span><span class="rmock-rval">1 task · 23m</span></div>
          </div>
        </div>

        <div class="rmock-screen" data-screen="agents">
          <div class="rmock-label">👥 Team — 4 employees</div>
          <div class="rmock-agent"><span class="rmock-aico">🎯</span><div class="rmock-abody"><div class="rmock-aname">Director</div><div class="rmock-arole">Management · breaks down and reviews tasks</div></div><span class="rmock-badge live">working</span></div>
          <div class="rmock-agent"><span class="rmock-aico">⚙️</span><div class="rmock-abody"><div class="rmock-aname">Ivan</div><div class="rmock-arole">Developer</div></div><span class="rmock-badge on">online</span></div>
          <div class="rmock-agent"><span class="rmock-aico">📈</span><div class="rmock-abody"><div class="rmock-aname">Maria</div><div class="rmock-arole">Marketer</div></div><span class="rmock-badge busy">busy</span></div>
          <div class="rmock-agent"><span class="rmock-aico">💰</span><div class="rmock-abody"><div class="rmock-aname">Finance lead</div><div class="rmock-arole">Finance · unit economics, reports</div></div><span class="rmock-badge on">online</span></div>
          <div class="rmock-note">Everyone has a clear role and area of responsibility. Not a faceless "AI assistant."</div>
        </div>

        <div class="rmock-screen" data-screen="finance">
          <div class="rmock-label">💰 Money</div>
          <div class="rmock-metrics">
            <div class="rmock-metric"><div class="rmock-mnum">$3.60<span class="rmock-u"> (324₽)</span></div><div class="rmock-mlab">Balance</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$8.40<span class="rmock-u"> (756₽)</span></div><div class="rmock-mlab">Spent</div></div>
            <div class="rmock-metric"><div class="rmock-mnum">$12.00<span class="rmock-u"> (1080₽)</span></div><div class="rmock-mlab">Funded</div></div>
          </div>
          <div class="rmock-label">💳 My subscription</div>
          <div class="rmock-rows">
            <div class="rmock-row"><span class="rmock-rname">Plan</span><span class="rmock-rval">Premium</span></div>
            <div class="rmock-row"><span class="rmock-rname">Status</span><span class="rmock-rval">active</span></div>
            <div class="rmock-row"><span class="rmock-rname">Renews</span><span class="rmock-rval">10/05/2026</span></div>
          </div>
          <div class="rmock-note">AI budget is included in the subscription. A kill-switch stops the agents if the limit runs out — no surprises at month's end.</div>
        </div>

        <div class="rmock-screen" data-screen="projects">
          <div class="rmock-label">🗂️ Projects</div>
          <div class="rmock-tflow">
            <div class="rmock-tcard"><div class="rmock-th">Incoming task</div><div class="rmock-tt">"Put together a weekly price list"</div></div>
            <div class="rmock-tarr">→</div>
            <div class="rmock-tcard dir"><div class="rmock-th">🎯 Director</div><div class="rmock-tt">Breaks it into subtasks, assigns a role</div></div>
            <div class="rmock-tarr">→</div>
            <div class="rmock-tcard"><div class="rmock-th">⚙️ Developer</div><div class="rmock-tt">Status: <b>in progress</b> → report to director</div></div>
          </div>
          <div class="rmock-rows" style="margin-top:.8rem">
            <div class="rmock-row"><span class="rmock-rname">✅ Done — director reviewed the result</span><span class="rmock-rval">closed</span></div>
          </div>
          <div class="rmock-note">The director never closes a task without a check — only after comparing the result against the acceptance criteria.</div>
        </div>

      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const SCREENS_HTML_EN = `<!-- SCREENS -->
<section id="screens" class="sec-light">
  <div class="w">
    <span class="lb rv">Screenshots · the live system</span>
    <h2 class="sh2 rv d1">Five live screens:<br>money, team, tasks, analytics, report</h2>
    <p class="sl rv d2">Real screenshots of the NCAi workspace: dashboard, team, task board, analytics and the report. Captured from the live system — not a mockup.</p>
    <div class="screens">
      <figure class="scr rv d1">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/panel.png" alt="NCAi dashboard — money, team, today's tasks" /></div>
        <figcaption class="scr-cap">Dashboard — <span>money, team, today's tasks</span></figcaption>
      </figure>
      <figure class="scr rv d1">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/team.png" alt="NCAi team — roles, statuses, each one's accuracy" /></div>
        <figcaption class="scr-cap">Team — <span>roles, statuses and each one's accuracy</span></figcaption>
      </figure>
      <figure class="scr rv d2">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/kanban.png" alt="NCAi task board — from 'not started' to 'done'" /></div>
        <figcaption class="scr-cap">Task board — <span>from "not started" to "done"</span></figcaption>
      </figure>
      <figure class="scr rv d2">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/analytics.png" alt="NCAi analytics — AI spend and staff ranking" /></div>
        <figcaption class="scr-cap">Analytics — <span>AI spend and staff ranking</span></figcaption>
      </figure>
      <figure class="scr rv d3">
        <div class="scr-frame"><div class="scr-chrome"><span class="scr-dot"></span>NCAi · live</div><img src="/screens/report.png" alt="NCAi report — accuracy, tasks, what shipped and what's stuck" /></div>
        <figcaption class="scr-cap">Report — <span>accuracy, what shipped and what's stuck</span></figcaption>
      </figure>
    </div>
    <p class="sl rv d3" style="margin-top:1.75rem;font-size:.9rem">One screenshot, one result. This is what the panel looks like for every client after unboxing: their own workspace, their own team, their own numbers.</p>
  </div>
</section>
<hr class="dv">`;

export const IDEA_HTML_EN = `<!-- THE BIG IDEA -->
<section id="idea" class="sec-light">
  <div class="w">
    <span class="lb rv">The big idea</span>
    <h2 class="sh2 rv d1">More effort —<br>the same ceiling</h2>
    <p class="sl rv d2">You're a small-business owner with real day-to-day operations: a salon, a clinic, a shop, a service business. You have clients, routine eats your day, and scaling isn't happening. Or you're a specialist picking up the AI-agency-manager role — and hitting the same ceiling: everything by hand, no growth.</p>
    <div class="pr-grid">
      <div class="pr rv d1">
        <div class="pr-n">Problem 1</div>
        <div class="pr-t">All the work lives in your head</div>
        <div class="pr-x">You set the tasks, you send the reminders, you do the math. While you're sick or on vacation, the business stands still.</div>
      </div>
      <div class="pr rv d2">
        <div class="pr-n">Problem 2</div>
        <div class="pr-t">Hiring is expensive and unreliable</div>
        <div class="pr-x">A marketer, copywriter, analyst, admin — that's roughly 240K ₽ a month in salaries, and about 343K ₽ with taxes. Plus the risk that someone quits in three months.</div>
      </div>
      <div class="pr rv d3">
        <div class="pr-n">Problem 3</div>
        <div class="pr-t">A contractor is a black box</div>
        <div class="pr-x">An agency does "something," reports back once a month, and nobody knows how it actually works. The contractor leaves — everything stops.</div>
      </div>
    </div>
    <div class="w-row">
      <div class="w-col rv d2">
        <div class="w-col-tag">Why this happens</div>
        <div class="w-li"><span class="w-ico">1</span><span><b>Routine isn't automated.</b> You're paying with your attention for what a system should do on its own.</span></div>
        <div class="w-li"><span class="w-ico">2</span><span><b>Hiring is a risk, not an asset.</b> People get sick, quit, and need managing.</span></div>
        <div class="w-li"><span class="w-ico">3</span><span><b>Consulting sells slides, not a system.</b> "Strategy" and reports don't keep working after the consultant leaves.</span></div>
      </div>
      <div class="w-col rv d3">
        <div class="w-col-tag">The real reasons</div>
        <div class="w-li"><span class="w-ico">1</span><span><b>There's no working system</b> — just heroic manual effort.</span></div>
        <div class="w-li"><span class="w-ico">2</span><span><b>Knowledge leaves with people</b> — it's all in heads, not in a panel.</span></div>
        <div class="w-li"><span class="w-ico">3</span><span><b>You were buying services, not an asset</b> — the result didn't stay with you.</span></div>
      </div>
    </div>
    <div class="bigidea rv d2">
      <div class="bigidea-tag">Big idea</div>
      <div class="bigidea-tx">Don't buy a consultant or a contractor — buy a working agency, unboxed for your business in a few steps. The system stays, the dependency goes away.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const BOX_HTML_EN = `<!-- THE CORE IDEA -->
<section id="box" style="background:var(--bg2)">
  <div class="w">
    <div class="uw">
      <div>
        <div class="ugh rv">01</div>
        <span class="lb rv d1">The core idea</span>
        <h2 class="uh2 rv d1">You're not buying a consultant.<br>You're buying an agency.</h2>
        <p class="up rv d2">NCAi is a platform where every client gets their own team of AI agents in a panel. Not "a chat with a neural network," but a <strong>working team</strong>: agents with roles and a knowledge base, a task board, AI spend control.</p>
        <p class="up rv d2">Ordinary consulting runs 2–3 months and ends with a presentation. NCAi unboxing is a few clear steps from payment to a <strong>working AI team</strong>, where the client sets tasks themselves and sees the AI spend.</p>
      </div>
      <div class="rv d2">
        <div class="ucmp">
          <div class="urow"><div class="uchead bad">Ordinary consulting</div><div class="uchead good">NCAi · unboxing</div></div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>2–3 months of work. The result comes "at the end"</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>A working agency — from step one</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Outsourced — you don't understand how it works</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Everything's in the panel: tasks, agents, AI spend</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>The consultant leaves — the knowledge leaves with them</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>You're in control from day one. The client sets tasks themselves</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>An outsourced agency — a bill every month</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>19,900 ₽ one-time (first month of subscription included), then 4,900 ₽/mo</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const ROI_HTML_EN = `<!-- ROI -->
<section id="roi">
  <div class="w">
    <div class="roi-head">
      <div>
        <span class="lb rv">Why it pays for itself</span>
        <h2 class="sh2 rv d1">19,900 ₽ isn't a cost.<br>It's a savings of millions.</h2>
      </div>
      <p class="roi-tx rv d2">You're not paying for "Telegram bots" or nice-sounding consultations. You're paying so that <strong>you don't hand over millions in salaries over the next six months</strong> — and so you can launch products in <strong>days, not months</strong>. This isn't a cost. It's ROI.</p>
    </div>
    <div class="roi-stats">
      <div class="roi-stat rv"><div class="n">up to 50×</div><div class="l">Payback on unboxing within a year</div></div>
      <div class="roi-stat rv d1"><div class="n">≈4M ₽</div><div class="l">Payroll savings per year</div></div>
      <div class="roi-stat rv d2"><div class="n">months → days</div><div class="l">Shorter product launch cycle</div></div>
    </div>
    <div class="roi-vs">
      <div class="roi-col bad rv">
        <div class="roi-col-head"><span class="tag">Hiring a team</span><span class="price">≈343K ₽ / mo</span></div>
        <div class="roi-li"><span class="x">✕</span><span>A marketer + copywriter + analyst + admin — <b>≈240K ₽/mo</b> in salaries</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Plus ≈43% in taxes — <b>≈343K ₽/mo</b>, ≈<b>4.1M ₽</b> per year</span></div>
        <div class="roi-li"><span class="x">✕</span><span>Work 9am–6pm, get sick, quit, "aren't in the mood"</span></div>
        <div class="roi-li"><span class="x">✕</span><span>A new launch means months of hiring, onboarding and ramp-up</span></div>
        <div class="roi-total bad"><span class="lbl">Total per year</span><span class="v">≈ 4.1M ₽</span></div>
      </div>
      <div class="roi-mid">VS</div>
      <div class="roi-col good rv d1">
        <div class="roi-col-head"><span class="tag">NCAi agency</span><span class="price"><b>19,900 ₽</b> one-time</span></div>
        <div class="roi-li"><span class="y">✓</span><span>A one-time unboxing — <b>19,900 ₽</b> (first month of subscription included), then 4,900 ₽/mo</span></div>
        <div class="roi-li"><span class="y">✓</span><span>Runs <b>24/7</b> with no sick days and no "off days"</span></div>
        <div class="roi-li"><span class="y">✓</span><span>A task in the morning — <b>a result the same day</b>. Launches in days, not months</span></div>
        <div class="roi-li"><span class="y">✓</span><span>You're in control from day one: the system stays with you</span></div>
        <div class="roi-total good"><span class="lbl">Total per year</span><span class="v">≈ 79,000 ₽</span></div>
      </div>
    </div>
    <div class="roi-bottom rv d2">
      <div class="tx">Pay once for the system — <span>save ≈4M ₽ a year, and the unboxing pays for itself in month one.</span></div>
      <a href="#offer" class="bp" style="font-size:.88rem;padding:.85rem 1.9rem">See the offer <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </div>
</section>
<hr class="dv">`;

export const REALWORK_HTML_EN = `<!-- HOW IT ACTUALLY WORKS: NICHE CAROUSEL -->
<section id="realwork" class="sec-light">
  <div class="w">
    <span class="lb rv">How it actually works</span>
    <h2 class="sh2 rv d1">Ready-made tasks for 4 niches:<br>beauty, services, sales, content</h2>
    <p class="sl rv d2">Every niche gets its own template: departments, roles and the first tasks that genuinely get set in week one. Not "imagine if…" — this is already live in the panel right after unboxing.</p>
    <div class="ncw rv d2">
      <button class="nc-arr nc-prev" id="ncPrev" aria-label="Previous niche">‹</button>
      <div class="ncarousel" id="ncarousel">
        <div class="nccard">
          <div class="ncico">${icon("sparkle")}</div>
          <div class="nctag">Beauty · salons, cosmetology, studios</div>
          <div class="ncrow"><span class="ncl">Problem</span><p>Bookings fall through, content goes out sporadically, the client base goes quiet between visits.</p></div>
          <div class="ncrow"><span class="ncl">Team</span><p>Marketer, SMM agent, admin, finance lead</p></div>
          <div class="nctasks">
            <div class="nctask">Put together a service price list</div>
            <div class="nctask">Content plan for the week</div>
            <div class="nctask">Daily booking report</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Result</span><p>Bookings and reminders run themselves, content goes out on schedule — not when someone remembers. Visible in the panel, not just talked about.</p></div>
        </div>
        <div class="nccard">
          <div class="ncico">${icon("toolbox")}</div>
          <div class="nctag">Services · clinics, therapists, lawyers, repair</div>
          <div class="ncrow"><span class="ncl">Problem</span><p>Leads come in, but there's no nurture system or follow-up — a client buys once and disappears.</p></div>
          <div class="ncrow"><span class="ncl">Team</span><p>Sales manager, copywriter, analyst</p></div>
          <div class="nctasks">
            <div class="nctask">First-touch script</div>
            <div class="nctask">A list of 20 warm clients</div>
            <div class="nctask">Monthly financial report</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Result</span><p>The warm client base doesn't get forgotten between visits — it's tracked systematically. A financial report is ready every month with no manual work.</p></div>
        </div>
        <div class="nccard">
          <div class="ncico">${icon("shop")}</div>
          <div class="nctag">Sales · shops, e-commerce, wholesale</div>
          <div class="ncrow"><span class="ncl">Problem</span><p>Orders get lost between chats and spreadsheets, product content is made by hand and rarely.</p></div>
          <div class="ncrow"><span class="ncl">Team</span><p>Manager, backend developer, finance lead</p></div>
          <div class="nctasks">
            <div class="nctask">Order-handling workflow</div>
            <div class="nctask">Automated order report</div>
            <div class="nctask">Inventory control</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Result</span><p>Every order stage is visible in one place, stock is under control — fewer lost orders and less manual reconciliation in spreadsheets.</p></div>
        </div>
        <div class="nccard">
          <div class="ncico">${icon("clapper")}</div>
          <div class="nctag">Content · creators, experts, online schools</div>
          <div class="ncrow"><span class="ncl">Problem</span><p>The content plan runs on one-off inspiration, nobody tracks engagement systematically.</p></div>
          <div class="ncrow"><span class="ncl">Team</span><p>Editor, copywriter, designer, finance lead</p></div>
          <div class="nctasks">
            <div class="nctask">7-day content plan</div>
            <div class="nctask">Launch announcement post</div>
            <div class="nctask">Engagement report</div>
          </div>
          <div class="ncrow ncresult"><span class="ncl">Result</span><p>Content goes out on plan every week, not on inspiration — and it's clear what's actually working, not just what feels like it is.</p></div>
        </div>
      </div>
      <button class="nc-arr nc-next" id="ncNext" aria-label="Next niche">›</button>
    </div>
    <div class="ncdots" id="ncDots"></div>
    <p class="sl rv d3" style="margin-top:1.5rem;font-size:.88rem">The template is a starting point, not a rulebook: we adjust departments and roles to fit you right during unboxing.</p>
    <p class="sl rv d3" style="margin-top:.6rem;font-size:.88rem">The team doesn't run on its own: you (or your operator) set tasks in Telegram or the panel, the AI director splits them into subtasks, assigns roles, and checks the result before closing it. This is a digital department that's managed, not an autopilot with no driver.</p>
  </div>
</section>
<hr class="dv">`;

export const STEPS_HTML_EN = `<!-- MECHANISM: UNBOXING -->
<section id="steps" class="sec-light">
  <div class="w">
    <div class="wlay">
      <div>
        <span class="lb rv">Unboxing · how it works</span>
        <h2 class="sh2 rv d1">Pay once —<br>the agency works today</h2>
        <p class="sl rv d2" style="margin-bottom:0">Not an abstract months-long "onboarding process." Four steps, each with a result you can see — not one you have to take on faith. Click a step.</p>
        <div class="funnelw rv d3">
          <svg viewBox="0 0 280 270" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fl1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".85"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".3"/></linearGradient>
              <linearGradient id="fl2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".55"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".15"/></linearGradient>
              <linearGradient id="fl3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".32"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".08"/></linearGradient>
              <linearGradient id="fl4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".16"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".04"/></linearGradient>
            </defs>
            <path id="fz1" class="fz" d="M8 8 L272 8 L232 60 L48 60 Z" fill="url(#fl1)" stroke="rgba(180,130,0,.4)" stroke-width="1"/>
            <text x="140" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Unboxing in the bot</text>
            <path id="fz2" class="fz" d="M48 66 L232 66 L202 116 L78 116 Z" fill="url(#fl2)" stroke="rgba(180,130,0,.3)" stroke-width="1"/>
            <text x="140" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">The workspace deploys</text>
            <path id="fz3" class="fz" d="M78 122 L202 122 L178 170 L102 170 Z" fill="url(#fl3)" stroke="rgba(180,130,0,.25)" stroke-width="1"/>
            <text x="140" y="150" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">Walkthrough</text>
            <path id="fz4" class="fz" d="M102 176 L178 176 L160 222 L120 222 Z" fill="url(#fl4)" stroke="rgba(180,130,0,.2)" stroke-width="1"/>
            <text x="140" y="203" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="600" fill="#3b3e44">First tasks</text>
            <text x="140" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#8b867e">from here, the agency works for you</text>
          </svg>
        </div>
      </div>
      <div class="wdiag rv d2">
        <div class="wi act" data-zone="1"><div class="wico">${icon("chat")}</div><span class="wchev">▾</span><div><div class="wtit">Step 1 · Unboxing in the bot</div><div class="wtx">The bot doesn't ask "tell us about your business" to check a box — it finds out where it actually hurts: who's carrying the operations, which tasks eat your day, what to hand off first. Five minutes of your time instead of weeks of agency briefs.<div class="wres"><span class="ncl">Result</span><p>The system knows your business and already knows what team to build for it — not a one-size-fits-all template.</p></div></div></div></div>
        <div class="wi" data-zone="2"><div class="wico">${icon("box")}</div><span class="wchev">▾</span><div><div class="wtit">Step 2 · The workspace deploys — without you</div><div class="wtx">While other agencies are drafting a proposal, your working workspace is already deploying: an AI director, agents by role, starter tasks for your niche. Automatically — no "hang on, we'll put together a quote."<div class="wres"><span class="ncl">Result</span><p>The agency physically exists and is waiting in Telegram — not in a month, right after payment.</p></div></div></div></div>
        <div class="wi" data-zone="3"><div class="wico">${icon("book")}</div><span class="wchev">▾</span><div><div class="wtit">Step 3 · A walkthrough — at your pace, no calls</div><div class="wtx">A step-by-step guide instead of an hour-long sales call: how to top up the AI budget, where to go, how to give the director tasks and read reports. Go through it whenever suits you — not whenever a manager is free.<div class="wres"><span class="ncl">Result</span><p>You confidently run the panel yourself — no dependence on someone else's schedule.</p></div></div></div></div>
        <div class="wi" data-zone="4"><div class="wico">✅</div><span class="wchev">▾</span><div><div class="wtit">Step 4 · The first task — and the agency is moving</div><div class="wtx">You give the director a real task — not a test one. It splits the work across the agents, checks the result before closing it, and at 6pm sends a report you can read in a minute.<div class="wres"><span class="ncl">Result</span><p>The agency works for you from day one — instead of you spending a week setting it up.</p></div></div></div></div>
        <p class="sl rv d3" style="margin-top:1.5rem;font-size:.92rem">The working agency stays with you. The first month's subscription is already included in the unboxing fee, then 4,900 ₽/mo.</p>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const QUESTIONS_HTML_EN = `<!-- 10 QUESTIONS -->
<section id="questions" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">10 questions</span>
    <h2 class="sh2 rv d1">Answer yourself honestly</h2>
    <p class="sl rv d2">Seven questions about emotion, three about logic. If you answer "yes" to most of them — unboxing is for you.</p>
    <div class="qgrid">
      <div class="qcard rv"><span class="qtag">Question 1</span><div class="qq">How many hours a day do you spend on routine that someone else should be doing?</div><div class="qa">Every one of those hours is an hour not spent growing the business.</div></div>
      <div class="qcard rv d1"><span class="qtag">Question 2</span><div class="qq">Doesn't it worry you that the business stalls whenever you're on vacation or sick?</div><div class="qa">A system doesn't get sick, doesn't quit, and is never "not in the mood."</div></div>
      <div class="qcard rv"><span class="qtag">Question 3</span><div class="qq">How much money have you already given to agencies that never left you with a system?</div><div class="qa">You were buying services. Here you're buying an asset that stays.</div></div>
      <div class="qcard rv d1"><span class="qtag">Question 4</span><div class="qq">How would it feel to open the panel one morning and see it all already done?</div><div class="qa">That's what handing off control means: you manage, instead of drowning in operations.</div></div>
      <div class="qcard rv"><span class="qtag">Question 5</span><div class="qq">Doesn't it bother you that a contractor is a black box, and you don't know what's actually happening?</div><div class="qa">Transparency means everything's in a panel — not in a consultant's head.</div></div>
      <div class="qcard rv d1"><span class="qtag">Question 6</span><div class="qq">Where will the business be in a year if you keep doing everything by hand, like now?</div><div class="qa">Without a system, scale runs into the limit of your own time.</div></div>
      <div class="qcard rv"><span class="qtag">Question 7</span><div class="qq">Do you want to finally stop being the only one who holds it all in their head?</div><div class="qa">An agency in a box is a way to stop being a "human system."</div></div>
      <div class="qcard rv d1"><span class="qtag">Question 8</span><div class="qq">Which is cheaper: hiring a team at ≈343K ₽/mo with taxes, or a 4,900 ₽/mo subscription?</div><div class="qa">The subscription is ≈1.5% of the cost of hiring. The math is simple.</div></div>
      <div class="qcard rv"><span class="qtag">Question 9</span><div class="qq">What does one month of standing still cost you while you "decide"?</div><div class="qa">A month of setup versus a month of waiting — the difference is a system that's already running.</div></div>
      <div class="qcard rv d1"><span class="qtag">Question 10</span><div class="qq">Are you ready to go through the bot's unboxing flow to get a working agency?</div><div class="qa">That's the only effort required up front. After that, your team runs the system.</div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const OBJECTIONS_HTML_EN = `<!-- OBJECTIONS -->
<section id="objections" class="sec-light">
  <div class="w">
    <span class="lb rv">Objections</span>
    <h2 class="sh2 rv d1">"Yes, but…" isn't an argument</h2>
    <p class="sl rv d2">The most common doubts before adopting this. Let's go through each one.</p>
    <div class="obj rv d1"><div class="obj-q">It's a robot, I don't trust it</div><div class="obj-a">There's a real person behind the system — an architect you can message any time. The digital employees work to your rules and under your control.</div></div>
    <div class="obj rv d1"><div class="obj-q">I don't have a client base</div><div class="obj-a">The panel isn't a CRM — it doesn't store or manage your client base. The team executes tasks: content, reports, finance. If you're short on clients, the first tasks focus on acquisition: a content plan and scripts for first-touch outreach.</div></div>
    <div class="obj rv d1"><div class="obj-q">I'm not technical, I won't be able to use the panel</div><div class="obj-a">The panel is a Telegram Mini App: setting tasks and checking AI spend is easier than keeping an Excel sheet. The bot's unboxing flow and step-by-step guide mean you'll figure it out with no calls needed.</div></div>
    <div class="obj rv d2"><div class="obj-q">We already tried automation — it didn't take off</div><div class="obj-a">The difference is the approach: not "we hooked up a bot," but we built an agency with roles, a knowledge base and the right to act. Plus you keep control instead of depending on us.</div></div>
    <div class="obj rv d2"><div class="obj-q">It's expensive, it's a subscription every month</div><div class="obj-a">Compare it: hiring a team costs ≈343K ₽/mo with taxes. The subscription is 4,900 ₽. That's about 1.5% of the cost of a team that works around the clock.</div></div>
    <div class="obj rv d2"><div class="obj-q">What if I don't like it?</div><div class="obj-a">The first month's subscription is already included in the unboxing price — you use the product in real work before paying for it separately. You decide based on results, not promises.</div></div>
    <div class="obj rv d2"><div class="obj-q">There's already Codex, Claude, ChatGPT — why do I need anything else?</div><div class="obj-a">Those are tools, not a team — see the detailed comparison above. In short: a tool answers here and now, remembering nothing. Unboxing gives you memory of your business and a director who checks the result.</div></div>
    <div class="obj rv d2"><div class="obj-q">I already have contractors — I overpay, but at least it's clear</div><div class="obj-a">Nobody's asking you to cut ties with them overnight. Start with one slice of tasks the agency can handle cheaper and faster — reports, a content plan, initial lead handling. Once you see the difference in price and speed, decide yourself what stays with contractors and what moves to the AI team.</div></div>
    <div class="obj rv d2"><div class="obj-q">I don't have that many tasks — I can manage with ChatGPT myself</div><div class="obj-a">If it's 2–3 hours of tasks a week — yes, you don't need a separate team, and we'll say that upfront. Unboxing pays off where routine repeats every week: reports, content, lead handling. If you're unsure, count how many hours a month go into that routine and compare it to 4,900 ₽.</div></div>
    <div class="obj rv d2"><div class="obj-q">It's just an open-source program, I could set it up myself for free</div><div class="obj-a">Yes, the engine under the hood (Hermes) is open source — that's no secret. But you're not paying for access to it: you're paying for a ready team of roles with a knowledge base for your niche, for a director who disciplines the process and checks results instead of just handing out tasks, for a methodology built from 13 ready-made onboarding processes, for a server that keeps running — and for all of it deploying in a few steps instead of weeks of self-setup.</div></div>
  </div>
</section>
<hr class="dv">`;

export const OFFER_HTML_EN = `<!-- THE OFFER -->
<section id="offer">
  <div class="w">
    <div class="ofin">
      <span class="lb rv" style="justify-content:center">Offer · unboxing</span>
      <h2 class="ofh2 rv d1">What you get<br>for 19,900 ₽</h2>
      <p class="ofsub rv d2">An entry ladder: <b>a 190 ₽ assessment</b> (a quiz in the bot, no risk) → <b>a 19,900 ₽ unboxing</b> (first month of subscription included) → <b>a 4,900 ₽/mo subscription</b>. Transparent, no hidden fees.</p>
      <div class="ofcard rv d2">
        <p style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1.5rem">What's included in the unboxing</p>
        <div class="ofgrid">
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Unboxing in the bot <span>workspace, agents, task board, AI spend control — all deployed by the end</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">An AI director + up to 5 agents <span>with roles and knowledge bases built for your niche</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">You're in control from day one <span>set tasks and watch AI spend from day one</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">4,900 ₽/mo subscription <span>first month included in the unboxing</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Support on hand <span>questions and fine-tuning — in Telegram, whenever needed</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Grow without rebuilding <span>add agents as your business grows — an extra employee is 1,000 ₽/mo</span></div></div>
        </div>
        <div class="meta4">
          <div class="m4"><div class="m4-l">Dream outcome</div><div class="m4-v">An agency in a panel that runs without you</div></div>
          <div class="m4"><div class="m4-l">Likelihood</div><div class="m4-v">High: the system is visible from step one</div></div>
          <div class="m4"><div class="m4-l">Time to result</div><div class="m4-v">4 steps, you're in control right away</div></div>
          <div class="m4"><div class="m4-l">Your effort</div><div class="m4-v">Unboxing in the bot — the system deploys the rest itself</div></div>
        </div>
        <div class="ofmeta">
          <div><div class="ofml">Assessment</div><div class="ofmv">190 ₽</div></div>
          <div><div class="ofml">Unboxing</div><div class="ofmv">19,900 ₽</div></div>
          <div><div class="ofml">Subscription</div><div class="ofmv">4,900 ₽/mo</div></div>
          <div><div class="ofml">Annual</div><div class="ofmv">49,000 ₽</div></div>
        </div>
      </div>
      <div class="rv d3" style="margin-top:1.5rem;padding:1.1rem 1.25rem;border:1px solid var(--br2);border-radius:14px;background:rgba(255,208,0,.06)">
        <div style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:.5rem">Payment without a single hit</div>
        <p style="font-size:.92rem;color:var(--t2);line-height:1.6;margin:0">The <b>19,900 ₽</b> unboxing can be split into installments via Prodamus. The annual subscription is <b>49,000 ₽</b> instead of 58,800 paid monthly: two months free.</p>
      </div>
      <div class="ofcta rv d3">
        <a href="https://t.me/NCAi_Agency_bot" class="bp" style="font-size:.92rem;padding:1rem 2.25rem" target="_blank" rel="noopener noreferrer">Start unboxing <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const AMP_HTML_EN = `<!-- WHY NOW -->
<section id="amp" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">Why now</span>
    <h2 class="sh2 rv d1">A standard process, not a queue for custom work</h2>
    <p class="sl rv d2">Unboxing follows the same proven scenario every time — it isn't built from scratch for each client. The terms below are the same for everyone.</p>
    <div class="amp-grid">
      <div class="amp rv d1"><div class="amp-ico">${icon("box")}</div><div><div class="amp-t">One unboxing standard</div><div class="amp-x">The same process for any niche — workspace, team template, roles, you're in control from day one. Not a "pilot project," but a repeatable procedure.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">${icon("hourglass")}</div><div><div class="amp-t">I personally oversee every unboxing</div><div class="amp-x">The bot runs unboxing automatically, but I personally see every payment and check the workspace is set up correctly — I take a limited number of new clients a week so I can keep up.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("calendar")}</div><div><div class="amp-t">First month included</div><div class="amp-x">The first month's subscription is already included in the unboxing fee — you work in the system before you pay for it separately.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("lock")}</div><div><div class="amp-t">Rates are locked in</div><div class="amp-x">The subscription price doesn't rise "just because." The terms you get today are the terms you get tomorrow.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CASES_HTML_EN = `<!-- REAL RESULTS -->
<section id="cases" class="sec-light">
  <div class="w">
    <span class="lb rv">Not theory</span>
    <h2 class="sh2 rv d1">The same system<br>I use myself</h2>
    <p class="sl rv d2">Before unboxing it for you, I test the approach on my own projects. Here's what came out of it.</p>
    <div class="cgrid">
      <div class="ccard rv" style="--cc:#FFD000">
        <div class="ctag">Book</div>
        <div class="ctit">"Neuro-Funnel"</div>
        <div class="csub">6 chapters · 30 subchapters on neuromarketing and AI automation</div>
        <div class="cress"><div class="cres"><strong>→</strong> Written in 7 days with AI agents</div></div>
      </div>
      <div class="ccard rv d1" style="--cc:#4ECDC4">
        <div class="ctag">App</div>
        <div class="ctit">From scratch to a working version</div>
        <div class="csub">Full cycle: idea → architecture → code → launch</div>
        <div class="cress"><div class="cres"><strong>→</strong> 2 weeks instead of months with a hired team</div></div>
      </div>
      <div class="ccard rv d2" style="--cc:#FFD000">
        <div class="ctag">GAZE</div>
        <div class="ctit">A SaaS platform for beauty professionals</div>
        <div class="csub">Client CRM, income analytics, training — built on Supabase</div>
        <div class="cress"><div class="cres"><strong>→</strong> 26,000+ lines of code, 25 screens</div></div>
      </div>
      <div class="ccard rv d3" style="--cc:#ff9d2e">
        <div class="ctag">Neuroflow</div>
        <div class="ctit">HealthTech · pulse measurement via camera</div>
        <div class="csub">Solo R&D, no hired team</div>
        <div class="cress"><div class="cres"><strong>→</strong> 30,000+ lines of code</div></div>
      </div>
    </div>
    <div class="bigidea rv d2" style="margin-top:3rem">
      <div class="bigidea-tag">What this looks like in practice</div>
      <div class="bigidea-tx" style="font-size:1.02rem;line-height:1.55">After unboxing in the bot, the system deploys your workspace and 1–5 AI agents built for your tasks — and you set the first task yourself. The agent completes it and sends a report: you see the result and what it cost right away. From there you delegate on your own, and I'm on hand if you need help.</div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const CTA_HTML_EN = `<!-- CTA -->
<section id="final" style="position:relative;overflow:hidden">
  <div class="ofin">
    <h2 class="ofh2 rv">Stop being a human system.<br>Get an <em style="font-style:normal;color:var(--a)">agency in a box.</em></h2>
    <p class="ofsub rv d1">A few steps — and you have a working agency running operations without you. From there, you're in control: set tasks, watch the results.</p>
    <div class="ofcta rv d2">
      <a href="https://t.me/NCAi_Agency_bot" class="bp" style="font-size:.92rem;padding:1rem 2.25rem" target="_blank" rel="noopener noreferrer">Book an unboxing <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/ai-training" class="bs">Compare with AI training</a>
    </div>
    <div class="final-alt" style="font-family:var(--fm);font-size:.68rem;color:var(--t3);margin-top:1.5rem">Questions? <a href="mailto:ilya.novitskii@yandex.ru" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">ilya.novitskii@yandex.ru</a> or <a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">Telegram</a></div>
  </div>
</section>`;

export const VS_AI_HTML_EN = `<!-- HOW IT'S DIFFERENT FROM Claude/GPT/Codex -->
<section id="vs-ai">
  <div class="w">
    <span class="lb rv">Different from chatbots</span>
    <h2 class="sh2 rv d1">Claude and GPT are tools.<br>NCAi unboxing is a team.</h2>
    <p class="sl rv d2">Claude and GPT answer a request here and now, but don't remember your business, don't check their own work, and don't work unless you've opened the chat. NCAi unboxing is a ready team of roles with memory of your niche, a director who checks the result, and a task board — not a dialog window you have to rebuild from scratch every time.</p>
    <div class="vz vz-status rv d2" role="img" aria-label="One task's path: accepted, role assigned, checked by the director, approved">
      <div class="vz-head">
        <span class="vz-badge"><span class="vz-pulse"></span>The AI director runs the task</span>
        <span class="vz-note">You set the task in chat — then every step and every check is visible</span>
      </div>
      <div class="vz-st-card">
        <div class="vz-st-task">
          <span class="vz-st-id">#1043</span>
          <span class="vz-st-title">Put together this week's service pricing</span>
        </div>
        <ol class="vz-st-steps">
          <li class="vz-st-step" style="--i:0">
            <span class="vz-st-time">09:14</span>
            <span class="vz-st-txt">Accepted the task and asked for the missing details</span>
          </li>
          <li class="vz-st-step" style="--i:1">
            <span class="vz-st-time">09:16</span>
            <span class="vz-st-txt">Assigned it to the traffic and funnels specialist</span>
          </li>
          <li class="vz-st-step" style="--i:2">
            <span class="vz-st-time">09:41</span>
            <span class="vz-st-txt">Result went for review — checked against the task's criteria</span>
          </li>
          <li class="vz-st-step is-final" style="--i:3">
            <span class="vz-st-time">09:48</span>
            <span class="vz-st-txt">Approved. The finished pricing is in your hands</span>
          </li>
        </ol>
      </div>
    </div>
    <div class="vstable-wrap rv d2">
      <div class="vstable">
        <div class="vshead">
          <div class="vsh cr">Criterion</div>
          <div class="vsh th">Claude / GPT / Codex</div>
          <div class="vsh me2">→ NCAi unboxing</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">What it is</div>
          <div class="vsc th">A tool: answers a request here and now</div>
          <div class="vsc me">A team: roles + memory + a board + reports</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Memory of the business</div>
          <div class="vsc th">Doesn't remember the niche or yesterday's tasks</div>
          <div class="vsc me">Holds the niche and task history</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Checking the result</div>
          <div class="vsc th">You check it yourself, by hand</div>
          <div class="vsc me">The director checks it before closing</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Working without you</div>
          <div class="vsc th">Doesn't work until you open the chat</div>
          <div class="vsc me">Runs 24/7, a report every evening</div>
        </div>
        <div class="vsrow">
          <div class="vsc cr">Managing it</div>
          <div class="vsc th">You rebuild the conversation every time</div>
          <div class="vsc me">Give the director a task — it takes it from there</div>
        </div>
      </div>
    </div>
    <p class="vstable-hint">← swipe to see the NCAi comparison →</p>
  </div>
</section>
<hr class="dv">`;

export const UNDER_HOOD_HTML_EN = `<!-- THE ENGINE -->
<section id="under-hood" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">The engine</span>
    <h2 class="sh2 rv d1">Not "access to a neural network."<br>A real intake and review engine.</h2>
    <p class="sl rv d2">Under the hood isn't a chat with a model, it's a pipeline: a task goes through intake, a double review, and only then gets closed. That's why "done" in NCAi means "checked," not just "written."</p>
    <div class="vz vz-pipe rv d2" role="img" aria-label="Task intake pipeline: approval, execution, review by two agents, director, closed">
      <div class="vz-head">
        <span class="vz-badge"><span class="vz-pulse"></span>Intake pipeline</span>
        <span class="vz-note">A task doesn't close until it clears all five nodes — and you see each one</span>
      </div>
      <ol class="vz-track">
        <svg class="vz-rail" viewBox="0 0 1000 2" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <line class="vz-rail-line" x1="8" y1="1" x2="992" y2="1" />
          <rect class="vz-rail-pulse" x="8" y="0" width="110" height="2" rx="1" />
        </svg>
        <li class="vz-step" style="--i:0">
          <span class="vz-step-n">01</span>
          <span class="vz-step-t">Intake</span>
          <span class="vz-step-x">Work doesn't start until the concept is signed off</span>
        </li>
        <li class="vz-step" style="--i:1">
          <span class="vz-step-n">02</span>
          <span class="vz-step-t">Execution</span>
          <span class="vz-step-x">An agent whose remit covers it picks the task up</span>
        </li>
        <li class="vz-step" style="--i:2">
          <span class="vz-step-n">03</span>
          <span class="vz-step-t">Review ×2</span>
          <span class="vz-step-x">Two other agents check the result, independently of each other</span>
        </li>
        <li class="vz-step" style="--i:3">
          <span class="vz-step-n">04</span>
          <span class="vz-step-t">Director</span>
          <span class="vz-step-x">A final check against the task's acceptance criteria</span>
        </li>
        <li class="vz-step is-done" style="--i:4">
          <span class="vz-step-n">05</span>
          <span class="vz-step-t">Closed</span>
          <span class="vz-step-x">"Done" means checked, not written</span>
        </li>
      </ol>
    </div>
    <div class="amp-grid">
      <div class="amp rv d1"><div class="amp-ico">${icon("door")}</div><div><div class="amp-t">A task gets approved first</div><div class="amp-x">Work doesn't start until the concept is signed off. We don't do unnecessary work or burn your AI budget on tasks that will just get redone.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">${icon("eye")}</div><div><div class="amp-t">Every task gets checked twice</div><div class="amp-x">Before a task closes, two other agents review it, and only then the director. "Done" is a checked result, not just a claim taken on faith.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("target")}</div><div><div class="amp-t">We ship it right the first time — or say so honestly</div><div class="amp-x">Before showing you "done," the system checks itself: compilation, tests, matching the acceptance criteria — an agent's word isn't taken on faith. And yes, we caught the moment this very number was overstated, and recalculated it as it actually is — an honest number beats a flattering one.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("moon")}</div><div><div class="amp-t">The tasks you set keep moving overnight</div><div class="amp-x">You set the tasks — then the queue gets worked through overnight, so by morning you have results rather than a to-do list. If a task stalls, the system stops it itself and sends a notification — the budget doesn't burn away unnoticed.</div></div></div>
      <div class="amp rv d1"><div class="amp-ico">${icon("brain")}</div><div><div class="amp-t">Remembers your niche and doesn't repeat mistakes</div><div class="amp-x">It keeps the current task in mind, remembers past lessons, and pulls the right facts from your business's knowledge base. It doesn't trip over the same thing twice.</div></div></div>
      <div class="amp rv d2"><div class="amp-ico">${icon("bolt")}</div><div><div class="amp-t">You pay for the task, not for raw power</div><div class="amp-x">Hard decisions go through a strong model, routine work through a fast, cheap one. The savings are calculated automatically — you don't need to figure it out yourself.</div></div></div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FEATURES_HTML_EN = `<!-- PANEL FEATURES -->
<section id="features" class="sec-light">
  <div class="w">
    <span class="lb rv">Panel features</span>
    <h2 class="sh2 rv d1">Six panel tabs —<br>working from day one</h2>
    <p class="sl rv d2">Not promises — actual tabs in the workspace, working from day one.</p>
    <div class="ngrid">
      <div class="ncard rv"><div class="nbadge">01</div><div class="ntit">Task board</div><p class="ntx">Number, deadline, assignee, status. A task closes only after your "Approved" — an employee's "done" status is just a claim until then.</p></div>
      <div class="ncard rv d1"><div class="nbadge">02</div><div class="ntit">Team</div><p class="ntx">Roles, statuses (online / busy / idle), knowledge bases. Not a faceless "AI assistant," but employees with defined areas of responsibility.</p></div>
      <div class="ncard rv d2"><div class="nbadge">03</div><div class="ntit">Finance</div><p class="ntx">Funded / balance / spent — real money down to the cent, not "virtual credits."</p></div>
      <div class="ncard rv"><div class="nbadge">04</div><div class="ntit">AI spend control</div><p class="ntx">A kill-switch blocks a run BEFORE money is spent, not after. The bill at month's end is never a surprise.</p></div>
      <div class="ncard rv d1"><div class="nbadge">05</div><div class="ntit">Analytics</div><p class="ntx">A P&L forecast, rankings, reports. You can see what's making money and what's just burning it.</p></div>
      <div class="ncard rv d2"><div class="nbadge">06</div><div class="ntit">Reports</div><p class="ntx">A plan for the day each morning, a summary at 6pm, and a full weekly report as a document every Friday. Every day, we separately double-check that "done" really is done.</p></div>
    </div>
  </div>
</section>
<hr class="dv">`;
