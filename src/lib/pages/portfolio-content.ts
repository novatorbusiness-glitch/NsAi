// Страница /portfolio — найм и партнёрство (Tech Product Partner).
// Дизайн-система NCAi: токены 1:1 с src/lib/pages/index-content.ts.
export const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#080808;--bgc:#111;--bgc2:#161616;--bgc3:#1a1a1a;
  --br:#1e1e1e;--br2:#272727;
  --t:#edeae3;--t2:#7c7870;--t3:#383430;
  --a:#FFD000;--ad:rgba(255,208,0,.07);--ag:rgba(255,208,0,.14);
  --metal:linear-gradient(135deg,#e0e0e0 0%,#c0c0c0 40%,#888 65%,#d0d0d0 100%);
  --fd:var(--font-syne),sans-serif;--fs:var(--font-instrument-serif),serif;--fm:var(--font-jetbrains-mono),monospace;
  --ease:cubic-bezier(.16,1,.3,1);--max:1280px;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--t);font-family:var(--fs);overflow-x:hidden;min-height:100vh}
@media(pointer:fine){body{cursor:none}}
#cd,#cr{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);display:none}
@media(pointer:fine){#cd,#cr{display:block}}
#cd{width:5px;height:5px;background:var(--a);border-radius:50%}
#cr{z-index:9998;width:26px;height:26px;border:1px solid rgba(255,208,0,.32);border-radius:50%;transition:width .3s var(--ease),height .3s var(--ease)}
#cr.ex{width:44px;height:44px;opacity:.28}
body::before{content:'';position:fixed;inset:0;z-index:8000;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.018}
@keyframes fup{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:100;height:60px;display:flex;align-items:center;padding:0 2rem;
  background:rgba(8,8,8,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.04);transition:background .3s}
nav.sc{background:rgba(8,8,8,.97)}
.ni{max-width:var(--max);width:100%;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.logo{font-family:var(--fd);font-size:1.3rem;font-weight:800;letter-spacing:-.03em;text-decoration:none;
  background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-links{display:flex;gap:1.75rem;list-style:none}
.nav-links a{font-family:var(--fd);font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;
  color:var(--t2);text-decoration:none;transition:color .2s}
.nav-links a:hover{color:var(--t)}
.nav-cta{font-family:var(--fd);font-size:.72rem;font-weight:700;color:var(--a);-webkit-text-fill-color:var(--a);
  text-decoration:none;padding:.42rem 1.1rem;border:1px solid rgba(255,208,0,.28);border-radius:6px;transition:background .2s}
.nav-cta:hover{background:var(--ad)}
@media(max-width:640px){.nav-links{display:none}}

/* HERO */
#hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:60px;text-align:center}
.hero-grid{position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,208,0,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,208,0,.016) 1px,transparent 1px);
  background-size:60px 60px;animation:gm 30s ease-in-out infinite alternate}
@keyframes gm{from{background-position:0 0}to{background-position:30px 30px}}
.hero-glow{position:absolute;width:900px;height:900px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,208,0,.055) 0%,transparent 62%);
  top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}
.hero-inner{position:relative;z-index:2;max-width:var(--max);margin:0 auto;padding:0 2rem;width:100%;
  display:flex;flex-direction:column;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fm);font-size:.6rem;letter-spacing:.18em;
  text-transform:uppercase;color:var(--t2);padding:.35rem .85rem;border:1px solid var(--br2);border-radius:999px;
  margin-bottom:2rem;animation:fup .8s var(--ease) both}
.bdot{width:5px;height:5px;background:var(--a);border-radius:50%;animation:blink 2.5s ease-in-out infinite}
.hero-name{font-family:var(--fd);font-size:clamp(2.4rem,5.5vw,5.25rem);font-weight:800;line-height:1.05;
  letter-spacing:-.045em;margin-bottom:1.5rem;animation:fup .9s .1s var(--ease) both}
.hero-name .acc{display:block;color:var(--a);-webkit-text-fill-color:var(--a)}
.hero-sub{font-size:clamp(.98rem,1.5vw,1.1rem);color:#b8b3ac;max-width:620px;line-height:1.8;
  margin:0 auto 2.5rem;animation:fup 1s .22s var(--ease) both}
.hero-acts{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;animation:fup 1s .34s var(--ease) both}
.btn{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fd);font-size:.9rem;font-weight:800;
  padding:.95rem 2.1rem;border-radius:8px;text-decoration:none;
  transition:transform .2s var(--ease),box-shadow .2s,background .2s,border-color .2s,color .2s}
.btn-p{background:var(--a);color:#050505;-webkit-text-fill-color:#050505;box-shadow:0 3px 0 rgba(180,140,0,.5),0 8px 32px rgba(255,208,0,.18)}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 3px 0 rgba(180,140,0,.5),0 16px 44px rgba(255,208,0,.38)}
.btn-s{color:#e0ddd6;border:1.5px solid #4a4a4a;background:rgba(255,255,255,.05)}
.btn-s:hover{border-color:#6a6a6a;background:rgba(255,255,255,.08);color:var(--t)}
.hero-stats{display:flex;gap:3rem;justify-content:center;border-top:1px solid var(--br);padding-top:2rem;
  margin-top:3.5rem;flex-wrap:wrap;animation:fup 1s .46s var(--ease) both}
.hstat{text-align:center}
.hstat-n{font-family:var(--fd);font-size:clamp(1.7rem,3vw,2.1rem);font-weight:800;letter-spacing:-.04em;color:var(--a);line-height:1}
.hstat-l{font-family:var(--fm);font-size:.56rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);margin-top:.35rem}
@media(max-width:480px){.hero-stats{gap:1.5rem}}

/* SECTIONS */
.wrap{max-width:var(--max);margin:0 auto;padding:0 2rem}
section{padding:6rem 0}
@media(max-width:640px){section{padding:4rem 0}}
#clients,#partner{background:var(--bgc)}
.sec-tag{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--fm);font-size:.6rem;
  letter-spacing:.2em;text-transform:uppercase;color:var(--a);opacity:.8;margin-bottom:1rem}
.sec-tag::before{content:'';width:14px;height:1px;background:var(--a);opacity:.5}
.sec-h2{font-family:var(--fd);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;letter-spacing:-.04em;
  line-height:1.05;margin-bottom:.75rem}
.rv{opacity:1;transform:none}
html.js .rv{opacity:0;transform:translateY(22px);transition:opacity .85s var(--ease),transform .85s var(--ease)}
.rv.on{opacity:1;transform:none}
.rv.d1{transition-delay:.1s}.rv.d2{transition-delay:.22s}.rv.d3{transition-delay:.34s}

/* PORTFOLIO GRID */
.wgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:2.5rem}
@media(max-width:900px){.wgrid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.wgrid{grid-template-columns:1fr}}
.pj{padding:1.6rem;background:var(--bgc2);border:1px solid var(--br);border-radius:12px;
  transition:border-color .25s,transform .3s var(--ease)}
.pj:hover{border-color:rgba(255,208,0,.22);transform:translateY(-4px)}
.pj-icon{font-size:1.4rem;margin-bottom:.9rem}
.pj-tag{font-family:var(--fm);font-size:.54rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:.4rem}
.pj-title{font-family:var(--fd);font-size:.9rem;font-weight:700;color:var(--t);margin-bottom:.4rem}
.pj-desc{font-size:.8rem;color:var(--t2);line-height:1.55}
.pj-status{display:inline-block;font-family:var(--fm);font-size:.52rem;letter-spacing:.08em;text-transform:uppercase;
  margin-top:.75rem;padding:.2rem .5rem;border-radius:3px;background:rgba(255,208,0,.08);
  border:1px solid rgba(255,208,0,.18);color:rgba(255,208,0,.6)}

/* CLIENTS */
.clients-wrap{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:2rem}
.cl-pill{font-family:var(--fm);font-size:.65rem;letter-spacing:.06em;padding:.5rem .95rem;
  background:var(--bgc);border:1px solid var(--br);border-radius:6px;color:var(--t2);
  transition:border-color .2s,color .2s}
.cl-pill:hover{border-color:rgba(255,208,0,.25);color:var(--t)}
.cl-pill.stat{border-color:rgba(255,208,0,.18);color:rgba(255,208,0,.7)}

/* HIRE + PARTNER CARDS */
.mgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem}
@media(max-width:900px){.mgrid{grid-template-columns:1fr}}
.mcard{background:var(--bgc2);border:1px solid var(--br);border-radius:14px;padding:2.25rem 2rem;
  position:relative;overflow:hidden;transition:border-color .25s,transform .3s var(--ease)}
.mcard::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--a),transparent);opacity:0;transition:opacity .3s}
.mcard:hover{border-color:rgba(255,208,0,.22);transform:translateY(-4px)}
.mcard:hover::after{opacity:1}
.mico{font-size:1.5rem;margin-bottom:1rem}
.mtag{font-family:var(--fm);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--a);margin-bottom:1rem}
.mtit{font-family:var(--fd);font-size:1.12rem;font-weight:800;letter-spacing:-.02em;color:var(--t);margin-bottom:.7rem}
.mprice{font-family:var(--fd);font-size:1.05rem;font-weight:700;color:var(--a);margin-bottom:1rem}
.mtx{font-size:.87rem;color:var(--t2);line-height:1.65}
.mmeta{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.25rem;padding-top:1.25rem;border-top:1px solid var(--br)}
.mch{font-family:var(--fm);font-size:.6rem;letter-spacing:.06em;color:var(--t3);padding:.3rem .7rem;border:1px solid var(--br);border-radius:999px}

/* CONTACT */
.ch2{font-family:var(--fd);font-size:clamp(2rem,4.5vw,3.4rem);font-weight:800;letter-spacing:-.04em;margin-bottom:1rem}
.csub{font-size:1rem;color:var(--t2);max-width:480px;margin:0 auto 2.5rem;line-height:1.7}
.cacts{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}

/* FOOTER */
footer{padding:4rem 0 2rem;border-top:1px solid var(--br);background:#050505;position:relative;overflow:hidden}
.footer-wm{position:absolute;bottom:-.05em;right:-.02em;font-family:var(--fd);font-size:clamp(8rem,20vw,18rem);
  font-weight:800;letter-spacing:-.07em;color:rgba(255,255,255,.012);user-select:none;pointer-events:none;line-height:1}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3.5rem;margin-bottom:3.5rem}
@media(max-width:800px){.footer-grid{grid-template-columns:1fr 1fr;gap:2rem}}
@media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
.f-logo{font-family:var(--fd);font-size:1.3rem;font-weight:800;letter-spacing:-.03em;
  background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.85rem}
.f-tagline{font-size:.88rem;color:var(--t2);line-height:1.65;max-width:280px;margin-bottom:1.25rem}
.f-socials{display:flex;gap:.6rem}
.f-soc{width:34px;height:34px;border:1px solid var(--br);border-radius:7px;display:flex;align-items:center;
  justify-content:center;font-size:.8rem;color:var(--t2);text-decoration:none;transition:border-color .2s,color .2s}
.f-soc:hover{border-color:rgba(255,208,0,.3);color:var(--a)}
.f-col-title{font-family:var(--fd);font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  color:var(--t3);margin-bottom:1.1rem}
.f-links{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.f-links a{font-size:.85rem;color:var(--t2);text-decoration:none;transition:color .2s}
.f-links a:hover{color:var(--t)}
.f-bottom{display:flex;justify-content:space-between;align-items:center;
  padding-top:1.75rem;border-top:1px solid #0f0f0f;flex-wrap:wrap;gap:.75rem}
.f-copy,.f-easter{font-family:var(--fm);font-size:.62rem;color:var(--t3);letter-spacing:.04em}
.f-easter span{color:var(--a)}

section[id]{scroll-margin-top:76px}
`;

export const body = `
<div id="cd"></div><div id="cr"></div>

<!-- NAV -->
<nav id="nav">
  <div class="ni">
    <a href="/" class="logo">NCAi</a>
    <ul class="nav-links">
      <li><a href="/consulting">Внедрение</a></li>
      <li><a href="/ai-training">Обучение AI</a></li>
      <li><a href="/book">Книга</a></li>
      <li><a href="/portfolio">Портфолио</a></li>
    </ul>
    <a href="https://t.me/Ilya_novator" class="nav-cta">Обсудить проект</a>
  </div>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>
  <div class="hero-inner">
    <div class="hero-badge"><span class="bdot"></span>Tech Product Partner · Web3 / HealthTech / AI</div>
    <h1 class="hero-name">Наймите меня в проект.<br><span class="acc">Или станьте партнёром.</span></h1>
    <p class="hero-sub">Не агентство и не фриланс. Я вхожу в продукт как технический партнёр: проектирую, пишу код, вывожу на рынок. Фикс от 200 000 ₽ за задачу — или доля/опцион, если строим вместе.</p>
    <div class="hero-acts">
      <a href="https://t.me/Ilya_novator" class="btn btn-p">Обсудить проект →</a>
      <a href="#work" class="btn btn-s">Портфолио ↓</a>
    </div>
    <div class="hero-stats">
      <div class="hstat"><div class="hstat-n">300+</div><div class="hstat-l">проектов</div></div>
      <div class="hstat"><div class="hstat-n">50M ₽</div><div class="hstat-l">в запусках</div></div>
      <div class="hstat"><div class="hstat-n">100K+</div><div class="hstat-l">заявок</div></div>
      <div class="hstat"><div class="hstat-n">15</div><div class="hstat-l">специалистов</div></div>
    </div>
  </div>
</section>

<!-- PORTFOLIO -->
<section id="work">
  <div class="wrap">
    <span class="sec-tag rv">Портфолио</span>
    <h2 class="sec-h2 rv d1">Проекты, которые<br>уже работают</h2>
    <div class="wgrid">
      <div class="pj rv">
        <div class="pj-icon">🚀</div>
        <div class="pj-tag">Маркетинг · Автоматизация</div>
        <div class="pj-title">Novator.vip</div>
        <p class="pj-desc">Агентство маркетинга и автоматизации: 300+ проектов, 50M+ ₽ в запусках</p>
        <span class="pj-status">2017–2023</span>
      </div>
      <div class="pj rv d1">
        <div class="pj-icon">✨</div>
        <div class="pj-tag">Beauty · Mini App</div>
        <div class="pj-title">Gaze Architecture</div>
        <p class="pj-desc">Telegram Mini App + сайт для бьюти-сферы. Подписка 990 ₽/мес</p>
        <span class="pj-status">Запущен</span>
      </div>
      <div class="pj rv d2">
        <div class="pj-icon">📖</div>
        <div class="pj-tag">Книга · Методология</div>
        <div class="pj-title">«Нейро-Воронка»</div>
        <p class="pj-desc">6 глав, 30 подглав. Нейробиология продаж и AI-автоматизация</p>
        <span class="pj-status">Бесплатно</span>
      </div>
      <div class="pj rv">
        <div class="pj-icon">🤖</div>
        <div class="pj-tag">AI-команда</div>
        <div class="pj-title">NCAi Agency</div>
        <p class="pj-desc">4 отдела, 15 специалистов. Полная разработка и автоматизация</p>
        <span class="pj-status">200 000 ₽/мес</span>
      </div>
      <div class="pj rv d1">
        <div class="pj-icon">🧠</div>
        <div class="pj-tag">HealthTech · AI</div>
        <div class="pj-title">Neuroflow</div>
        <p class="pj-desc">PPG-измерение через камеру телефона: ВСР, показатели нервной системы</p>
        <span class="pj-status">R&D</span>
      </div>
      <div class="pj rv d2">
        <div class="pj-icon">⚔️</div>
        <div class="pj-tag">Продуктивность</div>
        <div class="pj-title">Vlinx</div>
        <p class="pj-desc">Трекер привычек — каждая вредная привычка как «босс», которого нужно одолеть</p>
        <span class="pj-status">Тестирование</span>
      </div>
      <div class="pj rv d3">
        <div class="pj-icon">🎮</div>
        <div class="pj-tag">EdTech · Дети</div>
        <div class="pj-title">Nezha_Quest</div>
        <p class="pj-desc">Трекер дисциплины ребёнка с системой последствий. Связка ребёнок–родитель</p>
        <span class="pj-status">R&D</span>
      </div>
    </div>
  </div>
</section>

<!-- CLIENTS -->
<section id="clients">
  <div class="wrap">
    <span class="sec-tag rv">Клиенты</span>
    <h2 class="sec-h2 rv d1">Работал с</h2>
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
</section>

<!-- HIRE -->
<section id="hire">
  <div class="wrap">
    <span class="sec-tag rv">Найм</span>
    <h2 class="sec-h2 rv d1">Наймите меня</h2>
    <div class="mgrid">
      <div class="mcard rv">
        <div class="mtag">Fix / Спринт</div>
        <div class="mtit">Фиксированная задача</div>
        <div class="mprice">от 200 000 ₽</div>
        <p class="mtx">2–4 недели. Платите за результат, а не за часы. Чёткая задача — чёткий срок — готовый продукт.</p>
        <div class="mmeta"><span class="mch">2–4 недели</span><span class="mch">Результат, не часы</span></div>
      </div>
      <div class="mcard rv d1">
        <div class="mtag">Опцион / Доля</div>
        <div class="mtit">Tech Co-Founder</div>
        <div class="mprice">Доля / опцион</div>
        <p class="mtx">Web3 / HealthTech / AI. Строю всю технику за долю в продукте. Когда строим вместе — риски общие.</p>
        <div class="mmeta"><span class="mch">Web3</span><span class="mch">HealthTech</span><span class="mch">AI</span></div>
      </div>
      <div class="mcard rv d2">
        <div class="mtag">Ретейнер / AI-команда</div>
        <div class="mtit">AI-команда под ключ</div>
        <div class="mprice">200 000 ₽ / мес</div>
        <p class="mtx">15 специалистов + продюсер. 4 отдела, отчёт ежедневно. Полная разработка и автоматизация.</p>
        <div class="mmeta"><span class="mch">15 специалистов</span><span class="mch">Отчёт ежедневно</span></div>
      </div>
    </div>
  </div>
</section>

<!-- PARTNERSHIP -->
<section id="partner">
  <div class="wrap">
    <span class="sec-tag rv">Партнёрство</span>
    <h2 class="sec-h2 rv d1">Партнёрство</h2>
    <div class="mgrid">
      <div class="mcard rv">
        <div class="mico">🤝</div>
        <div class="mtag">Совместный продукт</div>
        <div class="mtit">Строим вместе</div>
        <p class="mtx">Вхожу техническим партнёром за долю или опцион. Проектирую, пишу код, вывожу на рынок.</p>
      </div>
      <div class="mcard rv d1">
        <div class="mico">🧩</div>
        <div class="mtag">White-label / Методология</div>
        <div class="mtit">Система Петрова + «Нейро-Воронка»</div>
        <p class="mtx">Готовая методология под ваш бренд. Продавайте систему и книгу как свою.</p>
      </div>
      <div class="mcard rv d2">
        <div class="mico">🔗</div>
        <div class="mtag">Рефералка</div>
        <div class="mtit">Комиссия за клиента</div>
        <p class="mtx">Приводите клиентов — получаете комиссию. Простая и прозрачная схема.</p>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="wrap" style="text-align:center">
    <h2 class="ch2 rv">Обсудим задачу?</h2>
    <p class="csub rv d1">Опишите проект в Telegram — отвечу в течение дня. Или на почту.</p>
    <div class="cacts rv d2">
      <a href="https://t.me/Ilya_novator" class="btn btn-p">Telegram →</a>
      <a href="mailto:ilya.novitskii@yandex.ru" class="btn btn-s">Email</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-wm">NCAi</div>
  <div class="wrap" style="position:relative;z-index:2">
    <div class="footer-grid">
      <div>
        <div class="f-logo">NCAi</div>
        <p class="f-tagline">Tech Product Partner. Вхожу в продукт как технический партнёр — проектирую, пишу код, вывожу на рынок.</p>
        <div class="f-socials">
          <a href="https://t.me/Ilya_novator" class="f-soc">✈</a>
        </div>
      </div>
      <div>
        <div class="f-col-title">Продукты</div>
        <ul class="f-links">
          <li><a href="/consulting">Внедрение NCAi · 30 дней</a></li>
          <li><a href="/ai-training">Обучение AI</a></li>
          <li><a href="/book">Книга</a></li>
          <li><a href="/portfolio">Портфолио</a></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Контакт</div>
        <ul class="f-links">
          <li><a href="https://t.me/Ilya_novator">Telegram</a></li>
          <li><a href="mailto:ilya.novitskii@yandex.ru">Email</a></li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <span class="f-copy">© 2025 NCAi · Илья Новицкий</span>
      <span class="f-easter">Сделано через лайф-кодинг — <span>как обещано</span></span>
    </div>
  </div>
</footer>
`;

export const js = `
// CURSOR
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>cr.classList.add('ex'));
    el.addEventListener('mouseleave',()=>cr.classList.remove('ex'));
  });
}
// NAV SCROLL
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('sc',window.scrollY>40)},{passive:true});
// REVEAL (с защитой: контент никогда не остаётся невидимым)
document.documentElement.classList.add('js');
if(!('IntersectionObserver' in window)){
  document.querySelectorAll('.rv').forEach(el=>el.classList.add('on'));
}else{
  const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.08});
  document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
  setTimeout(()=>{
    document.querySelectorAll('.rv:not(.on)').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<innerHeight&&r.bottom>0)el.classList.add('on');
    });
  },1500);
}
`;
