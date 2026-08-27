// Автогенерировано из doc_f92845db3127_index.html. Не редактировать вручную.
export const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#080808;--bgc:#111;--bgc2:#161616;--bgc3:#1a1a1a;
  --br:#1e1e1e;--br2:#2a2a2a;
  --t:#edeae3;--t2:#7c7870;--t3:#3a3632;
  --a:#FFD000;--ad:rgba(255,208,0,.07);--ag:rgba(255,208,0,.12);
  --metal:linear-gradient(135deg,#e0e0e0 0%,#c0c0c0 40%,#888 65%,#d0d0d0 100%);
  --fd:'Syne',sans-serif;--fs:'Instrument Serif',serif;--fm:'JetBrains Mono',monospace;
  --ease:cubic-bezier(.16,1,.3,1);--max:1200px;
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
#hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:60px}
.hero-grid{position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,208,0,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,208,0,.016) 1px,transparent 1px);
  background-size:60px 60px;animation:gm 30s ease-in-out infinite alternate}
@keyframes gm{from{background-position:0 0}to{background-position:30px 30px}}
.hero-glow{position:absolute;width:900px;height:900px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,208,0,.055) 0%,transparent 62%);
  top:50%;left:35%;transform:translate(-50%,-50%);pointer-events:none}
#cvs{position:absolute;inset:0;pointer-events:none}
.hero-inner{position:relative;z-index:2;max-width:var(--max);margin:0 auto;padding:0 2rem;width:100%;
  display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
@media(max-width:900px){.hero-inner{grid-template-columns:1fr;gap:3rem}}

/* HERO LEFT */
.hero-badge{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fm);font-size:.6rem;letter-spacing:.18em;
  text-transform:uppercase;color:var(--t2);padding:.35rem .85rem;border:1px solid var(--br2);border-radius:999px;
  margin-bottom:2rem;animation:fup .8s var(--ease) both}
.bdot{width:5px;height:5px;background:var(--a);border-radius:50%;animation:blink 2.5s ease-in-out infinite}
.hero-name{font-family:var(--fd);font-size:clamp(3rem,7vw,7rem);font-weight:800;line-height:.92;
  letter-spacing:-.055em;margin-bottom:1.5rem;animation:fup .9s .1s var(--ease) both}
.hero-name em{font-style:normal;background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-name .acc{display:block;color:var(--a);-webkit-text-fill-color:var(--a)}
.hero-role{font-family:var(--fm);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t2);
  margin-bottom:1.5rem;animation:fup 1s .18s var(--ease) both}
.hero-role span{color:var(--a)}
.hero-quote{font-family:var(--fs);font-style:italic;font-size:1.05rem;line-height:1.72;color:var(--t2);
  max-width:420px;margin-bottom:2.5rem;padding-left:1.25rem;border-left:2px solid rgba(255,208,0,.35);
  animation:fup 1s .28s var(--ease) both}
.hero-meta{display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:3rem;animation:fup 1s .36s var(--ease) both}
.hm{font-family:var(--fm);font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}
.hm span{display:block;color:var(--t2);margin-top:.18rem;letter-spacing:0;text-transform:none}
.hero-stats{display:flex;gap:0;border-top:1px solid var(--br);padding-top:2rem;animation:fup 1s .44s var(--ease) both}
.hstat{padding-right:2rem;margin-right:2rem;border-right:1px solid var(--br)}
.hstat:last-child{border-right:none;margin-right:0;padding-right:0}
.hstat-n{font-family:var(--fd);font-size:1.9rem;font-weight:800;letter-spacing:-.04em;color:var(--a);line-height:1}
.hstat-l{font-family:var(--fm);font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);margin-top:.25rem}
@media(max-width:480px){.hero-stats{flex-wrap:wrap;gap:1.25rem}.hstat{border-right:none;margin-right:0;padding-right:0}}

/* HERO RIGHT — CARDS */
.hero-right{animation:fup 1s .3s var(--ease) both}
@media(max-width:900px){.hero-right{display:none}}
.product-cards{display:flex;flex-direction:column;gap:.75rem}
.pc{display:flex;align-items:center;gap:1.25rem;padding:1.35rem 1.5rem;
  background:var(--bgc);border:1px solid var(--br);border-radius:12px;text-decoration:none;
  transition:border-color .25s,transform .3s var(--ease),background .25s;position:relative;overflow:hidden}
.pc::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--c,var(--a));
  transform:scaleY(0);transform-origin:top;transition:transform .35s var(--ease)}
.pc:hover{border-color:rgba(255,255,255,.08);background:var(--bgc2);transform:translateX(6px)}
.pc:hover::before{transform:scaleY(1)}
.pc-icon{width:40px;height:40px;border-radius:9px;display:flex;align-items:center;justify-content:center;
  font-size:1.15rem;flex-shrink:0;background:rgba(255,255,255,.04);border:1px solid var(--br)}
.pc-body{flex:1;min-width:0}
.pc-label{font-family:var(--fm);font-size:.56rem;letter-spacing:.12em;text-transform:uppercase;
  margin-bottom:.28rem}
.pc-title{font-family:var(--fd);font-size:.88rem;font-weight:700;color:var(--t);margin-bottom:.2rem}
.pc-sub{font-size:.78rem;color:var(--t2);line-height:1.4}
.pc-arr{color:var(--t3);font-size:.8rem;flex-shrink:0;transition:color .2s,transform .25s var(--ease)}
.pc:hover .pc-arr{color:var(--a);transform:translateX(4px)}
.pc-consulting .pc-label{color:#FFD000}
.pc-training .pc-label{color:#4ECDC4}
.pc-book .pc-label{color:#B4A7D6}
.pc-portfolio .pc-label{color:#ff9d2e}

/* SCROLL HINT */
.scroll-hint{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:.4rem;animation:fup 1.2s .7s var(--ease) both}
.sh-txt{font-family:var(--fm);font-size:.52rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3)}
.sh-line{width:1px;height:28px;background:linear-gradient(to bottom,rgba(255,208,0,.5),transparent);
  animation:spulse 2s ease-in-out infinite}
@keyframes spulse{0%,100%{opacity:.4}50%{opacity:1}}

/* PRODUCTS SECTION */
#products{padding:6rem 0}
@media(max-width:640px){#products{padding:4rem 0}}
.wrap{max-width:var(--max);margin:0 auto;padding:0 2rem}
.sec-tag{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--fm);font-size:.6rem;
  letter-spacing:.2em;text-transform:uppercase;color:var(--a);opacity:.8;margin-bottom:1rem}
.sec-tag::before{content:'';width:14px;height:1px;background:var(--a);opacity:.5}
.sec-h2{font-family:var(--fd);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;letter-spacing:-.04em;
  line-height:1.05;margin-bottom:.75rem}
.rv{opacity:0;transform:translateY(22px);transition:opacity .85s var(--ease),transform .85s var(--ease)}
.rv.on{opacity:1;transform:none}
.rv.d1{transition-delay:.1s}.rv.d2{transition-delay:.22s}.rv.d3{transition-delay:.34s}

.products-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
@media(max-width:900px){.products-grid{grid-template-columns:1fr}}

.prod-card{background:var(--bgc);border:1px solid var(--br);border-radius:16px;overflow:hidden;
  text-decoration:none;display:flex;flex-direction:column;
  transition:border-color .3s,transform .3s var(--ease),box-shadow .3s}
.prod-card:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(0,0,0,.5)}
.prod-card.c1:hover{border-color:rgba(255,208,0,.3)}
.prod-card.c2:hover{border-color:rgba(78,205,196,.3)}
.prod-card.c3:hover{border-color:rgba(180,167,214,.3)}

.prod-top{padding:2.5rem 2rem 2rem;flex:1}
.prod-stripe{height:3px;background:var(--stripe,var(--a))}
.prod-icon{font-size:2rem;margin-bottom:1.25rem}
.prod-type{font-family:var(--fm);font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;
  margin-bottom:.65rem;opacity:.85}
.c1 .prod-type{color:var(--a)}
.c2 .prod-type{color:#4ECDC4}
.c3 .prod-type{color:#B4A7D6}
.prod-title{font-family:var(--fd);font-size:1.35rem;font-weight:800;letter-spacing:-.03em;color:var(--t);margin-bottom:.85rem;line-height:1.15}
.prod-desc{font-size:.92rem;color:var(--t2);line-height:1.72;margin-bottom:1.5rem}
.prod-points{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.75rem}
.prod-point{display:flex;align-items:flex-start;gap:.65rem;font-size:.84rem;color:var(--t2);line-height:1.45}
.pp-dot{width:4px;height:4px;border-radius:50%;flex-shrink:0;margin-top:.5rem}
.c1 .pp-dot{background:var(--a)}
.c2 .pp-dot{background:#4ECDC4}
.c3 .pp-dot{background:#B4A7D6}
.prod-bottom{padding:1.5rem 2rem;border-top:1px solid var(--br);display:flex;align-items:center;justify-content:space-between;background:var(--bgc2)}
.prod-price{font-family:var(--fd);font-size:.88rem;font-weight:700;color:var(--t)}
.prod-price span{display:block;font-family:var(--fm);font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);font-weight:400;margin-bottom:.1rem}
.prod-link{font-family:var(--fd);font-size:.72rem;font-weight:700;display:flex;align-items:center;gap:.4rem;
  transition:gap .2s var(--ease)}
.c1 .prod-link{color:var(--a)}
.c2 .prod-link{color:#4ECDC4}
.c3 .prod-link{color:#B4A7D6}
.prod-card:hover .prod-link{gap:.7rem}

/* ABOUT */
#about{padding:6rem 0;background:var(--bgc)}
@media(max-width:640px){#about{padding:4rem 0}}
.about-layout{display:grid;grid-template-columns:1fr 1.2fr;gap:6rem;align-items:center}
@media(max-width:900px){.about-layout{grid-template-columns:1fr;gap:3rem}}
.about-visual{position:relative}
.about-card{background:var(--bgc2);border:1px solid var(--br2);border-radius:16px;padding:2rem;position:relative;overflow:hidden}
.about-card::before{content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse 60% 50% at 50% 0%,rgba(255,208,0,.04),transparent);pointer-events:none}
.ac-top{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1.25rem;border-bottom:1px solid var(--br)}
.ac-ava{width:48px;height:48px;border-radius:50%;background:var(--bgc3);border:1.5px solid rgba(255,208,0,.3);
  display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:1rem;font-weight:800;color:var(--a);flex-shrink:0}
.ac-name{font-family:var(--fd);font-size:.9rem;font-weight:700;color:var(--t)}
.ac-role{font-family:var(--fm);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-top:.15rem}
.ac-stack{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.25rem}
.ac-tag{font-family:var(--fm);font-size:.6rem;letter-spacing:.05em;padding:.25rem .6rem;
  background:rgba(255,255,255,.04);border:1px solid var(--br);border-radius:4px;color:var(--t2)}
.ac-journey{display:flex;flex-direction:column;gap:0;position:relative}
.ac-journey::before{content:'';position:absolute;left:10px;top:0;bottom:0;width:1px;
  background:linear-gradient(to bottom,rgba(255,208,0,.4),transparent)}
.acj{display:grid;grid-template-columns:22px 1fr;gap:1rem;padding-bottom:1.25rem}
.acj:last-child{padding-bottom:0}
.acj-dot{width:22px;height:22px;border-radius:50%;border:1px solid rgba(255,208,0,.25);background:var(--bgc2);
  display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-size:.48rem;color:var(--a);
  position:relative;z-index:2;flex-shrink:0;margin-top:.1rem}
.acj-dot.now{background:var(--a);color:#050505;border-color:var(--a)}
.acj-p{font-family:var(--fm);font-size:.54rem;letter-spacing:.06em;text-transform:uppercase;color:var(--t3);margin-bottom:.2rem}
.acj-t{font-family:var(--fd);font-size:.8rem;font-weight:700;color:var(--t);margin-bottom:.18rem}
.acj-d{font-size:.78rem;color:var(--t2);line-height:1.55}

.about-text{}
.about-h2{font-family:var(--fd);font-size:clamp(1.7rem,3vw,2.5rem);font-weight:800;letter-spacing:-.04em;
  line-height:1.05;margin-bottom:1.25rem}
.p{font-size:.98rem;color:#b8b3ac;line-height:1.88;margin-bottom:1.2rem}
.p strong{color:var(--t);font-weight:600}
.about-alai{font-family:var(--fs);font-style:italic;font-size:1.05rem;line-height:1.75;color:var(--t);
  padding:1.5rem 1.75rem;background:var(--ad);border-left:3px solid rgba(255,208,0,.4);
  border-radius:0 10px 10px 0;margin:1.75rem 0}
.about-nums{display:flex;gap:2rem;flex-wrap:wrap;margin-top:2rem;padding-top:2rem;border-top:1px solid var(--br)}
.an-n{font-family:var(--fd);font-size:1.6rem;font-weight:800;letter-spacing:-.04em;color:var(--a);display:block}
.an-l{font-family:var(--fm);font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);display:block;margin-top:.18rem}

/* CLIENTS */
#clients{padding:5rem 0}
@media(max-width:640px){#clients{padding:3.5rem 0}}
.clients-wrap{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:2rem}
.cl-pill{font-family:var(--fm);font-size:.65rem;letter-spacing:.06em;padding:.5rem .95rem;
  background:var(--bgc);border:1px solid var(--br);border-radius:6px;color:var(--t2);
  transition:border-color .2s,color .2s}
.cl-pill:hover{border-color:rgba(255,208,0,.25);color:var(--t)}
.cl-pill.stat{border-color:rgba(255,208,0,.18);color:rgba(255,208,0,.7)}

/* PROJECTS STRIP */
#projects{padding:5rem 0;background:var(--bgc)}
@media(max-width:640px){#projects{padding:3.5rem 0}}
.proj-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2.5rem}
@media(max-width:900px){.proj-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.proj-grid{grid-template-columns:1fr}}
.pj{padding:1.5rem;background:var(--bgc2);border:1px solid var(--br);border-radius:12px;
  transition:border-color .25s,transform .3s var(--ease)}
.pj:hover{border-color:rgba(255,208,0,.22);transform:translateY(-4px)}
.pj-icon{font-size:1.4rem;margin-bottom:.9rem}
.pj-tag{font-family:var(--fm);font-size:.54rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:.4rem}
.pj-title{font-family:var(--fd);font-size:.9rem;font-weight:700;color:var(--t);margin-bottom:.4rem}
.pj-desc{font-size:.8rem;color:var(--t2);line-height:1.55}
.pj-status{display:inline-block;font-family:var(--fm);font-size:.52rem;letter-spacing:.08em;text-transform:uppercase;
  margin-top:.75rem;padding:.2rem .5rem;border-radius:3px;background:rgba(255,208,0,.08);
  border:1px solid rgba(255,208,0,.18);color:rgba(255,208,0,.6)}

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
`;

export const body = `
<div id="cd"></div><div id="cr"></div>

<!-- NAV -->
<nav id="nav">
  <div class="ni">
    <a href="/" class="logo">NCAi</a>
    <ul class="nav-links">
      <li><a href="/consulting">Консалтинг</a></li>
      <li><a href="/ai-training">Обучение AI</a></li>
      <li><a href="/book">Книга</a></li>
      <li><a href="/portfolio">Портфолио</a></li>
    </ul>
    <a href="mailto:ilya.novitskii@yandex.ru" class="nav-cta">Написать</a>
  </div>
</nav>

<!-- HERO -->
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
        <div class="hm">Условия<span>Fix от 200K ₽ + опцион</span></div>
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
          <div class="pc-icon">🏗️</div>
          <div class="pc-body">
            <div class="pc-label">Консалтинг</div>
            <div class="pc-title">2–3 месяца вместе</div>
            <div class="pc-sub">Вхожу в команду, строю систему, передаю с документацией</div>
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
</section>

<!-- PRODUCTS -->
<section id="products">
  <div class="wrap">
    <span class="sec-tag rv">Чем занимаюсь</span>
    <h2 class="sec-h2 rv d1">Три направления.<br>Выбери своё.</h2>
    <div class="products-grid">

      <a href="/consulting" class="prod-card c1 rv">
        <div class="prod-stripe" style="--stripe:#FFD000"></div>
        <div class="prod-top">
          <div class="prod-icon">🏗️</div>
          <div class="prod-type">Консалтинг · B2B</div>
          <div class="prod-title">Купите мои мозги на 2–3 месяца</div>
          <p class="prod-desc">Вхожу в вашу команду — строю маркетинговую систему и AI-автоматизацию через лайф-кодинг. Каждое решение у вас на глазах. Ухожу — зависимости нет.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Архитектура системы с нуля</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Лайф-кодинг — никаких чёрных ящиков</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Передача с документацией</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>1–2 проекта одновременно</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Длительность</span>2–3 месяца</div>
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
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="wrap">
    <div class="about-layout">
      <div class="about-visual rv">
        <div class="about-card">
          <div class="ac-top">
            <div class="ac-ava">И</div>
            <div>
              <div class="ac-name">Илья Новицкий</div>
              <div class="ac-role">AI-Powered Product Builder</div>
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
                <div class="acj-d">300+ проектов, 50M+ ₽ в запусках</div>
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
          <div><span class="an-n">300+</span><span class="an-l">Проектов</span></div>
          <div><span class="an-n">50M ₽</span><span class="an-l">В запусках</span></div>
          <div><span class="an-n">100K+</span><span class="an-l">Заявок</span></div>
          <div><span class="an-n">1</span><span class="an-l">Книга</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CLIENTS -->
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
</section>

<!-- SOLO PROJECTS -->
<section id="projects">
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
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-wm">NCAi</div>
  <div class="wrap" style="position:relative;z-index:2">
    <div class="footer-grid">
      <div>
        <div class="f-logo">NCAi</div>
        <p class="f-tagline">AI-Powered Product Builder. Соединяю продуктовое мышление с руками разработчика.</p>
        <div class="f-socials">
          <a href="https://t.me/Ilya_novator" class="f-soc">✈</a>
          <a href="#" class="f-soc">in</a>
        </div>
      </div>
      <div>
        <div class="f-col-title">Продукты</div>
        <ul class="f-links">
          <li><a href="/consulting">Консалтинг</a></li>
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

<script>
// CURSOR
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.pj,.prod-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>cr.classList.add('ex'));
    el.addEventListener('mouseleave',()=>cr.classList.remove('ex'));
  });
}
// NAV SCROLL
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('sc',window.scrollY>40);
},{passive:true});
// REVEAL
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.07});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
// CANVAS PARTICLES
const cv=document.getElementById('cvs');
if(cv){const ctx=cv.getContext('2d');let W,H;
  const pts=Array.from({length:40},()=>({x:Math.random()*1400,y:Math.random()*900,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.3+.3,a:Math.random()*.3+.05}));
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();
  window.addEventListener('resize',rs,{passive:true});
  (function draw(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,208,0,'+p.a+')';ctx.fill()});
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<100){ctx.beginPath();ctx.strokeStyle='rgba(255,208,0,'+(0.045*(1-d/100))+')';ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}
  requestAnimationFrame(draw)})()}
</script>
`;

export const js = `
// CURSOR
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.pj,.prod-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>cr.classList.add('ex'));
    el.addEventListener('mouseleave',()=>cr.classList.remove('ex'));
  });
}
// NAV SCROLL
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('sc',window.scrollY>40);
},{passive:true});
// REVEAL
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.07});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
// CANVAS PARTICLES
const cv=document.getElementById('cvs');
if(cv){const ctx=cv.getContext('2d');let W,H;
  const pts=Array.from({length:40},()=>({x:Math.random()*1400,y:Math.random()*900,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.3+.3,a:Math.random()*.3+.05}));
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();
  window.addEventListener('resize',rs,{passive:true});
  (function draw(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,208,0,'+p.a+')';ctx.fill()});
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<100){ctx.beginPath();ctx.strokeStyle='rgba(255,208,0,'+(0.045*(1-d/100))+')';ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}
  requestAnimationFrame(draw)})()}
`;
