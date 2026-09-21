// Секции страницы /portfolio — по паттерну consulting-sections.ts.
// Nav/mobile-menu/footer больше не дублируются здесь — страница использует
// общий PageShell (см. src/components/pages/PortfolioPage.tsx).
import { icon } from "./icons";
import { FLOW_HTML } from "./flow";

export const HERO_HTML = `<!-- HERO -->
<section id="port-hero">
  <div class="port-hero-grid"></div>
  <div class="port-hero-glow"></div>
  ${FLOW_HTML}
  <div class="port-hero-inner">
    <div class="port-hero-badge"><span class="port-bdot"></span>Tech Product Partner · Web3 / HealthTech / AI</div>
    <h1 class="port-hero-name">Сначала показываю результат.<br><span class="port-acc">Заходит — работаем месяц вместе.</span></h1>
    <p class="port-hero-sub">Не продаю часы и не обещаю. Беру вашу задачу, провожу исследование и отдаю готовые артефакты — бесплатно. Зашло — захожу в проект на месяц: внедряю метод, обучаю вашего человека им управлять и работаю рядом с ним. От 200 000 ₽.</p>
    <div class="port-hero-acts">
      <a href="https://t.me/Ilya_novator" class="bp" data-goal="portfolio_cta">Обсудить проект →</a>
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
      <div class="port-pj port-pj-shot-card rv">
        <div class="port-pj-shot"><img src="/images/portfolio/ncai.png" alt="NCAi — скриншот сайта" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">Платформа · NCAi</div>
          <div class="port-pj-title">NCAi</div>
          <p class="port-pj-desc">Этот сайт, книга, промпт-база и мини-апп — пишу код сам, от идеи до продакшена</p>
          <span class="port-pj-status">283K строк кода</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv d1">
        <div class="port-pj-shot"><img src="/images/portfolio/gaze.png" alt="Gaze Architecture — скриншот сайта" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">Beauty · Mini App</div>
          <div class="port-pj-title">Gaze Architecture</div>
          <p class="port-pj-desc">Telegram Mini App + сайт для бьюти-сферы. Подписка 990 ₽/мес</p>
          <span class="port-pj-status">Запущен</span>
        </div>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-body">
          <div class="port-pj-icon">${icon("book")}</div>
          <div class="port-pj-tag">Книга · Методология</div>
          <div class="port-pj-title">«Нейро-Воронка»</div>
          <p class="port-pj-desc">6 глав, 30 подглав. Нейробиология продаж и AI-автоматизация</p>
          <span class="port-pj-status">Бесплатно</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv d1">
        <div class="port-pj-shot"><img src="/images/portfolio/neuroflow.png" alt="Neuroflow — скриншот сайта" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">HealthTech · AI</div>
          <div class="port-pj-title">Neuroflow</div>
          <p class="port-pj-desc">PPG-измерение через камеру телефона: ВСР, показатели нервной системы</p>
          <span class="port-pj-status">R&D</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv d2">
        <div class="port-pj-shot"><img src="/images/portfolio/vlinx.png" alt="Vlinx — скриншот приложения" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">Продуктивность</div>
          <div class="port-pj-title">Vlinx</div>
          <p class="port-pj-desc">Трекер привычек — каждая вредная привычка как «босс», которого нужно одолеть</p>
          <span class="port-pj-status">Тестирование</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv">
        <div class="port-pj-shot"><img src="/images/portfolio/nezha.png" alt="Nezha_Quest — скриншот приложения" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">EdTech · Дети</div>
          <div class="port-pj-title">Nezha_Quest</div>
          <p class="port-pj-desc">Трекер дисциплины ребёнка с системой последствий. Связка ребёнок–родитель</p>
          <span class="port-pj-status">R&D</span>
        </div>
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
    <div class="port-month rv d2">
      <div class="port-month-head">
        <div class="port-month-tag">Ориентиры · что входит в месяц</div>
        <div class="port-month-h">Как проходит месяц от 200 000 ₽</div>
      </div>
      <div class="port-weeks">
        <div class="port-week">
          <div class="port-week-n">Неделя 1</div>
          <div class="port-week-t">Разбираем, что снимать</div>
          <div class="port-week-x">Смотрим, на чём лично у вас висит рутина. Разворачиваю систему под ваш бизнес и фиксирую точку отсчёта: сколько часов и на что уходит сейчас.</div>
        </div>
        <div class="port-week">
          <div class="port-week-n">Недели 2–3</div>
          <div class="port-week-t">Работаем циклами</div>
          <div class="port-week-x">Ставим задачи, разбираем результат, правим подход. Я делаю вместе с вашим человеком, а не вместо него — он учится вести систему на реальных задачах.</div>
        </div>
        <div class="port-week">
          <div class="port-week-n">Неделя 4</div>
          <div class="port-week-t">Передаю управление</div>
          <div class="port-week-x">Ваш человек ведёт сам, я рядом и подстраховываю. Разбираем, что ломается, и закрываем это до моего выхода.</div>
        </div>
        <div class="port-week is-last">
          <div class="port-week-n">На выходе</div>
          <div class="port-week-t">Система и человек у руля</div>
          <div class="port-week-x">Остаётся работающая система и сотрудник, который умеет ей управлять. Плюс сравнение с точкой отсчёта первой недели.</div>
        </div>
      </div>
          <div class="vz-hand rv d2">
      <div class="vz-hand-bars">
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:133px;--yours:37px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">Неделя 1</div>
        </div>
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:99px;--yours:71px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">Недели 2–3</div>
        </div>
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:59px;--yours:111px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">Неделя 4</div>
        </div>
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:25px;--yours:145px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">На выходе</div>
        </div>
      </div>
      <div class="vz-hand-key">
        <span><i class="m"></i>делаю я</span>
        <span><i class="y"></i>ведёт ваш человек</span>
      </div>
      <p class="vz-hand-note">Так устроен месяц по замыслу: к концу у руля стоит ваш сотрудник, а не подрядчик. Это схема работы, а не измеренная статистика — клиентов на этом продукте пока не было, и выдавать рисунок за результат я не стану.</p>
    </div>
      <div class="port-metrics">
        <div class="port-metrics-h">Чем меряем результат</div>
        <div class="port-mlist">
          <div class="port-m">
            <div class="port-m-t">Часы на рутине</div>
            <div class="port-m-x">Сколько времени в неделю снято лично с вас и с команды.</div>
          </div>
          <div class="port-m">
            <div class="port-m-t">Деньги подрядчикам</div>
            <div class="port-m-x">За какие работы вы больше не платите на стороне.</div>
          </div>
          <div class="port-m">
            <div class="port-m-t">Закрытые задачи</div>
            <div class="port-m-x">Что реально сделано за месяц и чем это подтверждено.</div>
          </div>
        </div>
        <p class="port-metrics-note">Точку отсчёта фиксируем в первую неделю и сравниваем с ней в конце — иначе «стало лучше» проверить нечем. Конкретные цифры заранее не обещаю: они зависят от того, сколько рутины у вас сейчас и какие задачи возьмём. Что показываю сразу — работу системы изнутри, а не слайд с обещаниями.</p>
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
      <a href="https://t.me/Ilya_novator" class="bp" data-goal="portfolio_cta">Telegram →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Email</a>
    </div>
  </div>
</section>`;


export const DEMO_HTML = `<!-- ДЕМОНСТРАЦИЯ -->
<section id="port-demo">
  <div class="w">
    <span class="sec-tag rv">Первый шаг · бесплатно</span>
    <h2 class="sec-h2 rv d1">Что вы получаете<br>до того, как заплатили</h2>
    <p class="port-sec-lead rv d1">Вы даёте реальную задачу бизнеса. Я забираю её и возвращаю готовые артефакты — то, что можно открыть и использовать, даже если дальше мы не сработаемся.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">Что делаю</div>
        <div class="port-mtit">Разбираюсь в задаче и приношу разбор</div>
        <p class="port-mtx">Исследую рынок и конкурентов, разбираю ваш сайт или продукт, собираю воронку и контент-план. Набор зависит от задачи — не бывает одинаковых.</p>
        <div class="port-mmeta"><span class="port-mch">1–3 дня</span><span class="port-mch">Без предоплаты</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">Что нужно от вас</div>
        <div class="port-mtit">Задача и полчаса разговора</div>
        <p class="port-mtx">Рассказать, что болит и что уже пробовали. Доступы и внутренние данные на этом шаге не нужны — работаю с тем, что видно снаружи.</p>
        <div class="port-mmeta"><span class="port-mch">30 минут</span><span class="port-mch">Без доступов</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">Чем это не является</div>
        <div class="port-mtit">Это не презентация обо мне</div>
        <p class="port-mtx">Не питч, не смета и не «давайте созвонимся обсудить». Артефакты остаются у вас в любом случае: не зашло — расходимся, и вы ничего не должны.</p>
        <div class="port-mmeta"><span class="port-mch">Артефакты ваши</span><span class="port-mch">Без обязательств</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FIT_HTML = `<!-- КОМУ ПОДХОДИТ -->
<section id="port-fit">
  <div class="w">
    <span class="sec-tag rv">Честно</span>
    <h2 class="sec-h2 rv d1">Кому это подходит,<br>а кому — нет</h2>
    <p class="port-sec-lead rv d1">Месяц работы даёт результат не всем. Лучше разойтись на входе, чем через три недели выяснить, что мы решали разные задачи.</p>
    <div class="port-fit-grid">
      <div class="port-fit-col is-yes rv">
        <div class="port-fit-h">Подходит, если</div>
        <ul class="port-fit-list">
          <li>Есть конкретная задача бизнеса, а не желание «внедрить AI».</li>
          <li>Есть человек, которого можно научить вести это дальше — вы сами или сотрудник.</li>
          <li>Готовы участвовать: ставить задачи и смотреть результат, а не получить систему под ключ и забыть.</li>
          <li>Нужен не исполнитель на поток задач, а метод, который останется у вас.</li>
        </ul>
      </div>
      <div class="port-fit-col is-no rv d1">
        <div class="port-fit-h">Не подходит, если</div>
        <ul class="port-fit-list">
          <li>Ждёте, что всё будет работать само и без вашего участия. Так не будет — в чате нужно сидеть и ставить задачи.</li>
          <li>Некому передавать: если человека у руля не появится, через месяц система встанет.</li>
          <li>Нужен подрядчик на поток мелких задач по часам — это другая услуга и другие деньги.</li>
          <li>Задача — разово сделать один сайт или лендинг. Для этого месяц избыточен.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FAQ_HTML = `<!-- ВОПРОСЫ -->
<section id="port-faq">
  <div class="w">
    <span class="sec-tag rv">Вопросы</span>
    <h2 class="sec-h2 rv d1">То, что спрашивают<br>перед началом</h2>
    <div class="port-faq">
      <div class="port-qa rv">
        <div class="port-q">Почему первый шаг бесплатный? В чём подвох</div>
        <div class="port-a">Подвоха нет, есть расчёт. Мне дешевле один раз показать результат, чем убеждать словами, — а вам не нужно рисковать деньгами на незнакомом человеке. Если не зайдёт, я потерял вечер, вы не потеряли ничего.</div>
      </div>
      <div class="port-qa rv d1">
        <div class="port-q">Чем это отличается от агентства</div>
        <div class="port-a">Агентство продаёт процесс и оставляет вас зависимым: уходит команда — уходит всё. Здесь наоборот: цель месяца в том, чтобы к его концу у руля стоял ваш человек, а не я. Поэтому я и работаю рядом с ним, а не вместо него.</div>
      </div>
      <div class="port-qa rv">
        <div class="port-q">Нужно ли мне самому разбираться в AI</div>
        <div class="port-a">Нет. Но участвовать придётся: задачи ставите вы, и в чате с командой сидеть тоже вам. Я не продаю «оно само» — это было бы враньём. Я делаю так, чтобы участие занимало минуты, а не дни.</div>
      </div>
      <div class="port-qa rv d1">
        <div class="port-q">Что будет после месяца</div>
        <div class="port-a">Система и обученный человек остаются у вас, без привязки ко мне. Следующий цикл — только если есть задачи под него. Не будет задач — не будет и цикла, навязывать продление не стану.</div>
      </div>
      <div class="port-qa rv">
        <div class="port-q">Откуда вилка «от 200 000 ₽»</div>
        <div class="port-a">Зависит от объёма задач на месяц и от того, сколько людей нужно обучить. После демонстрации я вижу реальный масштаб и называю цифру до старта — она не меняется по ходу.</div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

// ─────────────────────────────────────────────────────────────────────────────
// EN — английские версии секций (для переключателя языка, см. Bilingual.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export const HERO_HTML_EN = `<!-- HERO -->
<section id="port-hero">
  <div class="port-hero-grid"></div>
  <div class="port-hero-glow"></div>
  ${FLOW_HTML}
  <div class="port-hero-inner">
    <div class="port-hero-badge"><span class="port-bdot"></span>Tech Product Partner · Web3 / HealthTech / AI</div>
    <h1 class="port-hero-name">First I show you a result.<br><span class="port-acc">If it lands, we work a month together.</span></h1>
    <p class="port-hero-sub">I don't sell hours and I don't promise. I take your task, do the research and hand over finished artifacts — free. If it lands, I join the project for a month: I bring in the method, train the person who'll run it, and work alongside them. From 200,000 ₽.</p>
    <div class="port-hero-acts">
      <a href="https://t.me/Ilya_novator" class="bp" data-goal="portfolio_cta">Discuss a project →</a>
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
      <div class="port-pj port-pj-shot-card rv">
        <div class="port-pj-shot"><img src="/images/portfolio/ncai.png" alt="NCAi — website screenshot" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">Platform · NCAi</div>
          <div class="port-pj-title">NCAi</div>
          <p class="port-pj-desc">This site, the book, the prompt base and the mini-app — I write the code myself, idea to production</p>
          <span class="port-pj-status">283K lines of code</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv d1">
        <div class="port-pj-shot"><img src="/images/portfolio/gaze.png" alt="Gaze Architecture — website screenshot" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">Beauty · Mini App</div>
          <div class="port-pj-title">Gaze Architecture</div>
          <p class="port-pj-desc">A Telegram Mini App + website for the beauty industry. Subscription at 990 ₽/mo</p>
          <span class="port-pj-status">Launched</span>
        </div>
      </div>
      <div class="port-pj rv d2">
        <div class="port-pj-body">
          <div class="port-pj-icon">${icon("book")}</div>
          <div class="port-pj-tag">Book · Methodology</div>
          <div class="port-pj-title">"Neuro-Funnel"</div>
          <p class="port-pj-desc">6 chapters, 30 subchapters. The neuroscience of sales and AI automation</p>
          <span class="port-pj-status">Free</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv d1">
        <div class="port-pj-shot"><img src="/images/portfolio/neuroflow.png" alt="Neuroflow — website screenshot" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">HealthTech · AI</div>
          <div class="port-pj-title">Neuroflow</div>
          <p class="port-pj-desc">PPG measurement via phone camera: HRV, nervous system markers</p>
          <span class="port-pj-status">R&D</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv d2">
        <div class="port-pj-shot"><img src="/images/portfolio/vlinx.png" alt="Vlinx — app screenshot" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">Productivity</div>
          <div class="port-pj-title">Vlinx</div>
          <p class="port-pj-desc">A habit tracker — every bad habit is a "boss" you have to defeat</p>
          <span class="port-pj-status">Testing</span>
        </div>
      </div>
      <div class="port-pj port-pj-shot-card rv">
        <div class="port-pj-shot"><img src="/images/portfolio/nezha.png" alt="Nezha_Quest — app screenshot" loading="lazy" width="760" height="475"></div>
        <div class="port-pj-body">
          <div class="port-pj-tag">EdTech · Kids</div>
          <div class="port-pj-title">Nezha_Quest</div>
          <p class="port-pj-desc">A child discipline tracker with a consequence system. A child–parent link</p>
          <span class="port-pj-status">R&D</span>
        </div>
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
    <div class="port-month rv d2">
      <div class="port-month-head">
        <div class="port-month-tag">What the month includes</div>
        <div class="port-month-h">How a month from 200,000 ₽ runs</div>
      </div>
      <div class="port-weeks">
        <div class="port-week">
          <div class="port-week-n">Week 1</div>
          <div class="port-week-t">Work out what to take off you</div>
          <div class="port-week-x">We look at where the routine actually sits. I deploy the system for your business and fix a baseline: how many hours go where today.</div>
        </div>
        <div class="port-week">
          <div class="port-week-n">Weeks 2–3</div>
          <div class="port-week-t">Working in cycles</div>
          <div class="port-week-x">We set tasks, review results, adjust the approach. I work alongside your person rather than instead of them — they learn on real tasks.</div>
        </div>
        <div class="port-week">
          <div class="port-week-n">Week 4</div>
          <div class="port-week-t">Handing over</div>
          <div class="port-week-x">Your person runs it while I'm still there as backup. We find what breaks and close it before I step out.</div>
        </div>
        <div class="port-week is-last">
          <div class="port-week-n">What you're left with</div>
          <div class="port-week-t">A system and someone running it</div>
          <div class="port-week-x">A working system plus an employee who can operate it — and a comparison against week one's baseline.</div>
        </div>
      </div>
          <div class="vz-hand rv d2">
      <div class="vz-hand-bars">
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:133px;--yours:37px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">Week 1</div>
        </div>
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:99px;--yours:71px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">Weeks 2–3</div>
        </div>
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:59px;--yours:111px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">Week 4</div>
        </div>
        <div class="vz-hand-col">
          <div class="vz-hand-stack" style="--mine:25px;--yours:145px">
            <div class="vz-hand-mine"></div>
            <div class="vz-hand-yours"></div>
          </div>
          <div class="vz-hand-w">After</div>
        </div>
      </div>
      <div class="vz-hand-key">
        <span><i class="m"></i>done by me</span>
        <span><i class="y"></i>run by your person</span>
      </div>
      <p class="vz-hand-note">This is how the month is designed: by the end your employee is at the wheel, not a contractor. It's the shape of the work, not measured statistics — there have been no clients on this product yet, and I won't pass a drawing off as a result.</p>
    </div>
      <div class="port-metrics">
        <div class="port-metrics-h">How we measure the result</div>
        <div class="port-mlist">
          <div class="port-m">
            <div class="port-m-t">Hours on routine</div>
            <div class="port-m-x">How much weekly time came off you and your team.</div>
          </div>
          <div class="port-m">
            <div class="port-m-t">Money to contractors</div>
            <div class="port-m-x">Which work you no longer pay for outside.</div>
          </div>
          <div class="port-m">
            <div class="port-m-t">Tasks closed</div>
            <div class="port-m-x">What actually got done in the month, and what backs it up.</div>
          </div>
        </div>
        <p class="port-metrics-note">We fix the baseline in week one and compare against it at the end — otherwise "it got better" can't be checked. I don't promise specific numbers up front: they depend on how much routine you have now and which tasks we take. What I do show immediately is the system working from the inside, not a slide full of promises.</p>
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
      <a href="https://t.me/Ilya_novator" class="bp" data-goal="portfolio_cta">Telegram →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Email</a>
    </div>
  </div>
</section>`;

export const DEMO_HTML_EN = `<!-- DEMONSTRATION -->
<section id="port-demo">
  <div class="w">
    <span class="sec-tag rv">First step · free</span>
    <h2 class="sec-h2 rv d1">What you get<br>before you've paid</h2>
    <p class="port-sec-lead rv d1">You hand me a real business task. I take it and hand back finished artifacts — things you can open and use, even if we don't end up working together.</p>
    <div class="port-mgrid">
      <div class="port-mcard rv">
        <div class="port-mtag">What I do</div>
        <div class="port-mtit">Dig into the task and bring back a teardown</div>
        <p class="port-mtx">I research the market and competitors, take apart your site or product, put together a funnel and a content plan. The set depends on the task — no two are alike.</p>
        <div class="port-mmeta"><span class="port-mch">1–3 days</span><span class="port-mch">No upfront payment</span></div>
      </div>
      <div class="port-mcard rv d1">
        <div class="port-mtag">What I need from you</div>
        <div class="port-mtit">A task and half an hour of talking</div>
        <p class="port-mtx">Tell me what hurts and what you've already tried. No access or internal data needed at this stage — I work with what's visible from outside.</p>
        <div class="port-mmeta"><span class="port-mch">30 minutes</span><span class="port-mch">No access needed</span></div>
      </div>
      <div class="port-mcard rv d2">
        <div class="port-mtag">What it isn't</div>
        <div class="port-mtit">It isn't a presentation about me</div>
        <p class="port-mtx">Not a pitch, not a quote, not "let's hop on a call to discuss." The artifacts are yours either way: if it doesn't land, we part and you owe nothing.</p>
        <div class="port-mmeta"><span class="port-mch">Artifacts are yours</span><span class="port-mch">No strings</span></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FIT_HTML_EN = `<!-- WHO IT FITS -->
<section id="port-fit">
  <div class="w">
    <span class="sec-tag rv">Straight talk</span>
    <h2 class="sec-h2 rv d1">Who this fits,<br>and who it doesn't</h2>
    <p class="port-sec-lead rv d1">A month of work doesn't pay off for everyone. Better to part at the start than to discover three weeks in that we were solving different problems.</p>
    <div class="port-fit-grid">
      <div class="port-fit-col is-yes rv">
        <div class="port-fit-h">It fits if</div>
        <ul class="port-fit-list">
          <li>You have a concrete business task, not a wish to "adopt AI".</li>
          <li>There's someone who can be trained to run it — you or an employee.</li>
          <li>You're ready to take part: set tasks and review results, not receive a turnkey system and forget it.</li>
          <li>You want a method that stays with you, not a contractor on tap.</li>
        </ul>
      </div>
      <div class="port-fit-col is-no rv d1">
        <div class="port-fit-h">It doesn't fit if</div>
        <ul class="port-fit-list">
          <li>You expect it to run itself with no involvement. It won't — someone has to sit in the chat and set tasks.</li>
          <li>There's nobody to hand over to: with no one at the wheel, the system stalls within a month.</li>
          <li>You need a contractor for a stream of small hourly tasks — that's a different service and different money.</li>
          <li>The job is a one-off site or landing page. A month is overkill for that.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;

export const FAQ_HTML_EN = `<!-- QUESTIONS -->
<section id="port-faq">
  <div class="w">
    <span class="sec-tag rv">Questions</span>
    <h2 class="sec-h2 rv d1">What people ask<br>before starting</h2>
    <div class="port-faq">
      <div class="port-qa rv">
        <div class="port-q">Why is the first step free? What's the catch</div>
        <div class="port-a">No catch, just arithmetic. It's cheaper for me to show a result once than to argue for it in words — and you don't have to risk money on a stranger. If it doesn't land, I lost an evening and you lost nothing.</div>
      </div>
      <div class="port-qa rv d1">
        <div class="port-q">How is this different from an agency</div>
        <div class="port-a">An agency sells process and leaves you dependent: the team leaves, everything leaves with it. Here it's the opposite — the point of the month is that by the end your person is at the wheel, not me. That's why I work beside them rather than instead of them.</div>
      </div>
      <div class="port-qa rv">
        <div class="port-q">Do I need to understand AI myself</div>
        <div class="port-a">No. But you do have to take part: you set the tasks, and sitting in the chat with the team is on you too. I'm not selling "it runs itself" — that would be a lie. I make sure taking part costs minutes, not days.</div>
      </div>
      <div class="port-qa rv d1">
        <div class="port-q">What happens after the month</div>
        <div class="port-a">The system and a trained person stay with you, with no tie to me. Another cycle only if there's work for one. No work, no cycle — I won't push a renewal.</div>
      </div>
      <div class="port-qa rv">
        <div class="port-q">Where does "from 200,000 ₽" come from</div>
        <div class="port-a">It depends on the month's workload and how many people need training. After the demonstration I can see the real scope and name the figure before we start — it doesn't move mid-way.</div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">`;
