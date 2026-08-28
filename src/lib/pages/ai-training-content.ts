// Страница «Обучение AI» — оффер 1 на 1, 1 месяц, 70–80к ₽.
// Самодостаточная страница (css + body + js) в паттерне consulting-content.ts / index-content.ts.
export const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#080808;--bgc:#111;--bgc2:#161616;--bgc3:#1a1a1a;
  --br:#1e1e1e;--br2:#2a2a2a;
  --t:#edeae3;--t2:#7c7870;--t3:#3a3632;
  --a:#FFD000;--ad:rgba(255,208,0,.07);--ag:rgba(255,208,0,.12);
  --tr:#4ECDC4;--trd:rgba(78,205,196,.08);--trb:rgba(78,205,196,.28);
  --metal:linear-gradient(135deg,#e0e0e0 0%,#c0c0c0 40%,#888 65%,#d0d0d0 100%);
  --fd:'Syne',sans-serif;--fs:'Instrument Serif',serif;--fm:'JetBrains Mono',monospace;
  --ease:cubic-bezier(.16,1,.3,1);--max:1200px;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--t);font-family:var(--fs);font-size:17px;line-height:1.65;overflow-x:hidden;min-height:100vh}
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
  background-image:linear-gradient(rgba(78,205,196,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(78,205,196,.018) 1px,transparent 1px);
  background-size:60px 60px;animation:gm 30s ease-in-out infinite alternate}
@keyframes gm{from{background-position:0 0}to{background-position:30px 30px}}
.hero-glow{position:absolute;width:900px;height:900px;border-radius:50%;
  background:radial-gradient(circle,rgba(78,205,196,.07) 0%,transparent 62%);
  top:50%;left:70%;transform:translate(-50%,-50%);pointer-events:none}
#cvs{position:absolute;inset:0;pointer-events:none}
.hero-inner{position:relative;z-index:2;max-width:var(--max);margin:0 auto;padding:0 2rem;width:100%;
  display:grid;grid-template-columns:1.1fr .9fr;gap:5rem;align-items:center}
@media(max-width:900px){.hero-inner{grid-template-columns:1fr;gap:3rem}}
.hero-badge{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fm);font-size:.6rem;letter-spacing:.18em;
  text-transform:uppercase;color:var(--t2);padding:.35rem .85rem;border:1px solid var(--br2);border-radius:999px;
  margin-bottom:2rem;animation:fup .8s var(--ease) both}
.bdot{width:5px;height:5px;background:var(--tr);border-radius:50%;animation:blink 2.5s ease-in-out infinite}
.hero-h1{font-family:var(--fd);font-size:clamp(2.6rem,6vw,5.6rem);font-weight:800;line-height:.98;
  letter-spacing:-.045em;margin-bottom:1.5rem;animation:fup .9s .1s var(--ease) both}
.hero-h1 em{font-style:normal;background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-h1 .acc{display:block;color:var(--tr);-webkit-text-fill-color:var(--tr)}
.hero-sub{font-size:1.05rem;line-height:1.78;color:#b8b3ac;max-width:480px;margin-bottom:2.5rem;animation:fup 1s .22s var(--ease) both}
.hero-sub strong{color:var(--t);font-weight:600}
.hero-acts{display:flex;gap:.875rem;flex-wrap:wrap;animation:fup 1s .32s var(--ease) both}
.bp{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fd);font-size:.9rem;font-weight:800;letter-spacing:.01em;
  background:var(--a);color:#050505;padding:.95rem 2.1rem;border-radius:8px;text-decoration:none;
  transition:transform .2s var(--ease),box-shadow .2s;box-shadow:0 3px 0 rgba(180,140,0,.5),0 8px 32px rgba(255,208,0,.18)}
.bp:hover{transform:translateY(-2px);box-shadow:0 3px 0 rgba(180,140,0,.5),0 16px 44px rgba(255,208,0,.38)}
.bs{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fd);font-size:.9rem;font-weight:700;color:#e0ddd6;
  padding:.95rem 2.1rem;border:1.5px solid #4a4a4a;border-radius:8px;text-decoration:none;background:rgba(255,255,255,.05);
  transition:border-color .2s,background .2s,color .2s}
.bs:hover{border-color:#6a6a6a;background:rgba(255,255,255,.08);color:var(--t)}
.hero-meta{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:3.25rem;padding-top:2rem;border-top:1px solid var(--br);animation:fup 1s .42s var(--ease) both}
.hm{font-family:var(--fm);font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}
.hm span{display:block;color:var(--t2);margin-top:.2rem;letter-spacing:0;text-transform:none;font-size:.82rem}

/* HERO RIGHT — OFFER CARD */
.hero-right{animation:fup 1s .34s var(--ease) both}
@media(max-width:900px){.hero-right{display:none}}
.hcard{background:var(--bgc);border:1px solid var(--br2);border-radius:16px;padding:2rem;position:relative;overflow:hidden}
.hcard::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 55% at 50% 0%,rgba(78,205,196,.05),transparent);pointer-events:none}
.hctop{display:flex;align-items:center;gap:.75rem;margin-bottom:1.5rem;padding-bottom:1.25rem;border-bottom:1px solid var(--br)}
.hcdot{width:8px;height:8px;border-radius:50%;background:var(--tr);box-shadow:0 0 12px rgba(78,205,196,.5);animation:blink 2s ease-in-out infinite}
.hctitle{font-family:var(--fm);font-size:.67rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t2)}
.hctitle span{color:var(--tr)}
.hsys{display:flex;flex-direction:column;gap:.6rem}
.hsys-row{display:grid;grid-template-columns:1fr 24px 1fr;align-items:center;gap:.4rem}
.hbox{padding:.7rem 1rem;border-radius:9px;font-family:var(--fm);font-size:.63rem;color:var(--t2);line-height:1.4;border:1px solid var(--br);background:var(--bgc2)}
.hbox.lit{border-color:var(--trb);color:var(--tr);background:var(--trd)}
.harr{text-align:center;color:var(--br2);font-size:.7rem}
.hsys-conn{display:flex;justify-content:center;padding:.1rem 0}
.hsys-line{width:1px;height:12px;background:linear-gradient(to bottom,rgba(78,205,196,.35),transparent)}
.hcap{margin-top:1.4rem;padding-top:1.25rem;border-top:1px solid var(--br);font-family:var(--fm);font-size:.63rem;color:var(--t3);letter-spacing:.04em}

/* SECTION BASE */
.wrap{max-width:var(--max);margin:0 auto;padding:0 2rem}
section{padding:6rem 0}
@media(max-width:640px){section{padding:4rem 0}}
.sec-tag{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--fm);font-size:.6rem;
  letter-spacing:.2em;text-transform:uppercase;color:var(--tr);opacity:.9;margin-bottom:1rem}
.sec-tag::before{content:'';width:14px;height:1px;background:var(--tr);opacity:.5}
.sec-h2{font-family:var(--fd);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;letter-spacing:-.04em;
  line-height:1.05;margin-bottom:.75rem}
.sl{font-size:1rem;color:var(--t2);max-width:540px;margin-bottom:3rem;line-height:1.75}
.rv{opacity:0;transform:translateY(22px);transition:opacity .85s var(--ease),transform .85s var(--ease)}
.rv.on{opacity:1;transform:none}
.rv.d1{transition-delay:.1s}.rv.d2{transition-delay:.22s}.rv.d3{transition-delay:.34s}
.alt{background:var(--bgc)}

/* WHO — для кого */
.fit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
@media(max-width:900px){.fit-grid{grid-template-columns:1fr}}
.fit-card{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:2rem;position:relative;overflow:hidden;
  transition:border-color .25s,transform .3s var(--ease)}
.fit-card:hover{border-color:var(--trb);transform:translateY(-4px)}
.fit-ico{font-size:1.5rem;margin-bottom:1rem}
.fit-tit{font-family:var(--fd);font-size:1rem;font-weight:700;color:var(--t);margin-bottom:.6rem}
.fit-tx{font-size:.88rem;color:var(--t2);line-height:1.66}

/* OUTCOME — что получишь (было/стало) */
.ba-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2.5rem}
@media(max-width:900px){.ba-grid{grid-template-columns:1fr}}
.ba-card{border-radius:14px;padding:2rem;border:1px solid var(--br)}
.ba-before{background:var(--bgc);color:var(--t2)}
.ba-after{background:var(--bgc2);border-color:var(--trb)}
.ba-head{font-family:var(--fm);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:1.25rem}
.ba-before .ba-head{color:var(--t3)}
.ba-after .ba-head{color:var(--tr)}
.ba-line{display:flex;gap:.7rem;align-items:flex-start;padding:.55rem 0;font-size:.92rem;line-height:1.55}
.ba-before .ba-line{color:var(--t2)}
.ba-after .ba-line{color:var(--t)}
.ba-x{color:#e84040;flex-shrink:0;margin-top:.12rem;font-family:var(--fd);font-weight:700}
.ba-ok{color:var(--tr);flex-shrink:0;margin-top:.12rem;font-family:var(--fd);font-weight:700}
.out-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem}
@media(max-width:900px){.out-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.out-grid{grid-template-columns:1fr}}
.out-item{background:var(--bgc);border:1px solid var(--br);border-radius:12px;padding:1.5rem;transition:border-color .25s}
.out-item:hover{border-color:var(--trb)}
.out-num{font-family:var(--fd);font-size:1.5rem;font-weight:800;color:var(--tr);letter-spacing:-.03em;margin-bottom:.5rem}
.out-tx{font-size:.85rem;color:var(--t2);line-height:1.55}

/* HOW — механика */
.steps{display:flex;flex-direction:column;gap:0;margin-top:3rem}
.step{display:grid;grid-template-columns:64px 1fr;gap:1.5rem;padding:1.75rem 0;border-top:1px solid var(--br);align-items:start}
.step:last-child{border-bottom:1px solid var(--br)}
.step-num{font-family:var(--fd);font-size:1.1rem;font-weight:800;color:var(--tr);width:64px;height:64px;border-radius:12px;
  background:var(--trd);border:1px solid var(--trb);display:flex;align-items:center;justify-content:center;letter-spacing:-.02em}
.step-tit{font-family:var(--fd);font-size:1.05rem;font-weight:700;color:var(--t);margin-bottom:.4rem}
.step-tx{font-size:.92rem;color:var(--t2);line-height:1.66;max-width:640px}

/* PROGRAM — программа месяца */
.tl{display:flex;flex-direction:column;gap:.85rem;margin-top:3rem}
.tl-item{display:grid;grid-template-columns:1.2fr 2fr;gap:1.5rem;padding:1.5rem 1.75rem;border:1px solid var(--br);
  border-radius:12px;background:var(--bgc);transition:border-color .25s,background .25s}
.tl-item:hover{border-color:var(--trb);background:var(--bgc2)}
@media(max-width:700px){.tl-item{grid-template-columns:1fr;gap:.5rem}}
.tl-n{font-family:var(--fm);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--tr);margin-bottom:.3rem}
.tl-t{font-family:var(--fd);font-size:.95rem;font-weight:700;color:var(--t);line-height:1.3}
.tl-d{font-size:.88rem;color:var(--t2);line-height:1.6}

/* TOOLS — инструменты */
.tools-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
@media(max-width:900px){.tools-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.tools-grid{grid-template-columns:1fr}}
.tool{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:1.75rem;transition:border-color .25s,transform .3s var(--ease)}
.tool:hover{border-color:var(--trb);transform:translateY(-4px)}
.tool-name{font-family:var(--fd);font-size:1.05rem;font-weight:800;color:var(--t);margin-bottom:.5rem;letter-spacing:-.02em}
.tool-use{font-family:var(--fm);font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--tr);margin-bottom:.75rem}
.tool-tx{font-size:.84rem;color:var(--t2);line-height:1.58}

/* BUILD — что можно собрать */
.build-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
@media(max-width:900px){.build-grid{grid-template-columns:1fr}}
.build-card{background:var(--bgc);border:1px solid var(--br);border-radius:16px;padding:2rem;position:relative;overflow:hidden;
  transition:border-color .3s,transform .3s var(--ease)}
.build-card:hover{border-color:var(--trb);transform:translateY(-6px)}
.build-ico{font-size:2rem;margin-bottom:1.1rem}
.build-tit{font-family:var(--fd);font-size:1.2rem;font-weight:800;color:var(--t);margin-bottom:.6rem;letter-spacing:-.02em}
.build-tx{font-size:.88rem;color:var(--t2);line-height:1.66}

/* PRICE */
.price-wrap{max-width:820px;margin:0 auto}
.price-card{background:var(--bgc);border:1px solid var(--trb);border-radius:18px;padding:3rem;position:relative;overflow:hidden;text-align:left}
.price-card::before{content:'';position:absolute;inset:0;border-radius:18px;pointer-events:none;
  background:radial-gradient(ellipse 70% 45% at 50% 0%,rgba(78,205,196,.06),transparent)}
.price-top{display:flex;justify-content:space-between;align-items:baseline;gap:2rem;flex-wrap:wrap;margin-bottom:1.75rem;padding-bottom:1.75rem;border-bottom:1px solid var(--br)}
.price-label{font-family:var(--fm);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:.4rem}
.price-val{font-family:var(--fd);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.04em;color:var(--t)}
.price-val em{font-style:normal;color:var(--tr)}
.price-note{font-family:var(--fm);font-size:.68rem;color:var(--t2);margin-top:.5rem}
.inc-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:2rem}
@media(max-width:640px){.inc-grid{grid-template-columns:1fr}}
.inc{display:flex;gap:.75rem;align-items:flex-start;padding:.9rem;background:rgba(255,255,255,.02);border-radius:8px;border:1px solid var(--br)}
.inc-ck{color:var(--tr);flex-shrink:0;margin-top:.12rem;font-family:var(--fd);font-weight:700}
.inc-tx{font-size:.88rem;color:var(--t);line-height:1.45}
.price-cta{display:flex;gap:1rem;flex-wrap:wrap}
.price-caption{font-family:var(--fm);font-size:.62rem;color:var(--t3);margin-top:1.25rem;line-height:1.6}

/* FINAL CTA */
#final{position:relative;overflow:hidden}
#final::before{content:'';position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 80% 55% at 50% 108%,rgba(78,205,196,.07),transparent)}
.final-in{max-width:760px;margin:0 auto;text-align:center;position:relative;z-index:2}
.final-h2{font-family:var(--fd);font-size:clamp(2.1rem,4.5vw,3.6rem);font-weight:800;letter-spacing:-.045em;line-height:1.05;margin-bottom:1.25rem}
.final-h2 em{font-style:normal;color:var(--tr)}
.final-sub{font-size:1rem;color:var(--t2);margin-bottom:2.5rem;max-width:460px;margin-left:auto;margin-right:auto;line-height:1.75}
.final-acts{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.final-alt{font-family:var(--fm);font-size:.68rem;color:var(--t3);margin-top:1.5rem}
.final-alt a{color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)}
.final-alt a:hover{color:var(--t)}

/* FOOTER */
footer{padding:4rem 0 2rem;border-top:1px solid var(--br);background:#050505;position:relative;overflow:hidden}
.footer-wm{position:absolute;bottom:-.05em;right:-.02em;font-family:var(--fd);font-size:clamp(8rem,20vw,18rem);
  font-weight:800;letter-spacing:-.07em;color:rgba(255,255,255,.012);user-select:none;pointer-events:none;line-height:1}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3.5rem;margin-bottom:3.5rem;position:relative;z-index:2}
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
  padding-top:1.75rem;border-top:1px solid #0f0f0f;flex-wrap:wrap;gap:.75rem;position:relative;z-index:2}
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
      <li><a href="/agency-in-a-box">Агентство в коробке</a></li>
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
    <div>
      <div class="hero-badge"><span class="bdot"></span>Обучение AI · 1 на 1</div>
      <h1 class="hero-h1">Научись работать<br>с AI <em>руками.</em><span class="acc">За один месяц.</span></h1>
      <p class="hero-sub">Не курс и не лекции. Берём <strong>твой реальный проект</strong> — сайт, книгу или автоматизацию — и собираем его вместе на 5–6 сессиях один на один. Уходишь с работающим продуктом и навыком.</p>
      <div class="hero-acts">
        <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Записаться <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#inside" class="bs">Что входит</a>
      </div>
      <div class="hero-meta">
        <div class="hm">Формат<span>5–6 сессий · 1 на 1</span></div>
        <div class="hm">Длительность<span>1 месяц</span></div>
        <div class="hm">Цена<span>70–80к ₽ / мес</span></div>
        <div class="hm">Группа<span>1–2 человека</span></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="hcard">
        <div class="hctop"><div class="hcdot"></div><div class="hctitle">NCAi · <span>обучение AI</span></div></div>
        <div class="hsys">
          <div class="hsys-row">
            <div class="hbox lit">Твой проект<br>+ идея</div>
            <div class="harr">→</div>
            <div class="hbox">Диагностика<br>и карта решения</div>
          </div>
          <div class="hsys-conn"><div class="hsys-line"></div></div>
          <div class="hsys-row">
            <div class="hbox">5–6 сессий<br>live-кодинг</div>
            <div class="harr">→</div>
            <div class="hbox lit">Работающий<br>продукт</div>
          </div>
          <div class="hsys-conn"><div class="hsys-line"></div></div>
          <div class="hsys-row">
            <div class="hbox">Записи занятий<br>+ навык</div>
            <div class="harr">→</div>
            <div class="hbox">План дальше<br>без зависимости</div>
          </div>
        </div>
        <div class="hcap">learning by building<span style="animation:blink 1.1s ease-in-out infinite">▌</span></div>
      </div>
    </div>
  </div>
</section>

<!-- WHO -->
<section id="who" class="alt">
  <div class="wrap">
    <span class="sec-tag rv">Для кого</span>
    <h2 class="sec-h2 rv d1">Кому это подходит</h2>
    <p class="sl rv d2">Три сценария, в которых месяц работы со мной окупается быстрее, чем найм команды.</p>
    <div class="fit-grid">
      <div class="fit-card rv d1">
        <div class="fit-ico">🧭</div>
        <div class="fit-tit">Предприниматель без команды</div>
        <div class="fit-tx">Нужен сайт, книга или автоматизация, но нанимать разработчиков на старте — дорого и долго. Собираешь сам, под моим контролем, и понимаешь, как это устроено.</div>
      </div>
      <div class="fit-card rv d2">
        <div class="fit-ico">🧠</div>
        <div class="fit-tit">Эксперт, который хочет сам</div>
        <div class="fit-tx">Уже пробовал ChatGPT «в лоб» — получается вяло. Нужен навык, а не ролики: когда какой инструмент брать и как выжимать из AI результат.</div>
      </div>
      <div class="fit-card rv d3">
        <div class="fit-ico">⚙️</div>
        <div class="fit-tit">Тот, кто застрял на теории</div>
        <div class="fit-tx">Курсов пройдено много, продукта — ноль. Здесь всё наоборот: продукт — цель, теория подтягивается по ходу, только там, где нужна.</div>
      </div>
    </div>
  </div>
</section>

<!-- OUTCOME -->
<section id="outcome">
  <div class="wrap">
    <span class="sec-tag rv">Результат</span>
    <h2 class="sec-h2 rv d1">Что меняется за месяц</h2>
    <p class="sl rv d2">Не «базовые навыки AI». Конкретная разница — было / стало.</p>
    <div class="ba-grid rv d2">
      <div class="ba-card ba-before">
        <div class="ba-head">Было</div>
        <div class="ba-line"><span class="ba-x">✕</span>Есть идея, но непонятно, с чего начать и чем собирать</div>
        <div class="ba-line"><span class="ba-x">✕</span>AI используешь как чат — без системы и воспроизводимого результата</div>
        <div class="ba-line"><span class="ba-x">✕</span>Каждый шаг зависит от подрядчика или «потом разберусь»</div>
      </div>
      <div class="ba-card ba-after">
        <div class="ba-head">Стало</div>
        <div class="ba-line"><span class="ba-ok">✓</span>Работающий продукт: сайт, книга или автоматизация</div>
        <div class="ba-line"><span class="ba-ok">✓</span>Навык: знаешь, какой инструмент когда брать и почему</div>
        <div class="ba-line"><span class="ba-ok">✓</span>Записи всех занятий — пересматриваешь и повторяешь сам</div>
      </div>
    </div>
    <div class="out-grid rv d3">
      <div class="out-item"><div class="out-num">1</div><div class="out-tx">Готовый продукт, который уже работает на тебя</div></div>
      <div class="out-item"><div class="out-num">4</div><div class="out-tx">Инструмента в арсенале: Claude, Gemini, ChatGPT, Cursor</div></div>
      <div class="out-item"><div class="out-num">100%</div><div class="out-tx">Запись каждого занятия остаётся у тебя</div></div>
      <div class="out-item"><div class="out-num">0</div><div class="out-tx">Зависимости от меня после месяца работы</div></div>
    </div>
  </div>
</section>

<!-- HOW -->
<section id="how" class="alt">
  <div class="wrap">
    <span class="sec-tag rv">Механика</span>
    <h2 class="sec-h2 rv d1">Как проходит обучение</h2>
    <p class="sl rv d2">Никакой теории в пустоту. Четыре шага от твоей задачи до работающего продукта.</p>
    <div class="steps">
      <div class="step rv d1">
        <div class="step-num">01</div>
        <div><div class="step-tit">Диагностика</div><div class="step-tx">Разбираем твой проект и задачу, фиксируем точку А — что есть сейчас и что должно получиться на выходе.</div></div>
      </div>
      <div class="step rv d2">
        <div class="step-num">02</div>
        <div><div class="step-tit">5–6 сессий 1 на 1</div><div class="step-tx">Живой лайф-кодинг: я показываю каждое решение на твоём проекте, ты собираешь вместе со мной. Не «смотри запись», а работаем в моменте.</div></div>
      </div>
      <div class="step rv d3">
        <div class="step-num">03</div>
        <div><div class="step-tit">Практика между сессиями</div><div class="step-tx">Между встречами применяешь сам. Застреваешь — разбираем на следующей сессии, это часть процесса.</div></div>
      </div>
      <div class="step rv d3">
        <div class="step-num">04</div>
        <div><div class="step-tit">Передача</div><div class="step-tx">Запись каждого занятия + готовая система. Дальше развиваешь сам или с кем угодно — без зависимости от меня.</div></div>
      </div>
    </div>
  </div>
</section>

<!-- PROGRAM -->
<section id="program">
  <div class="wrap">
    <span class="sec-tag rv">Программа</span>
    <h2 class="sec-h2 rv d1">План месяца</h2>
    <p class="sl rv d2">Маршрут гибкий — под твой проект, но логика всегда одна: от идеи к готовому продукту.</p>
    <div class="tl">
      <div class="tl-item rv d1">
        <div><div class="tl-n">Сессия 1</div><div class="tl-t">Разбор проекта и карта решения</div></div>
        <div class="tl-d">Определяем, что именно собираем (сайт / книга / автоматизация) и каким стеком. Фиксируем точку А.</div>
      </div>
      <div class="tl-item rv d1">
        <div><div class="tl-n">Сессия 2</div><div class="tl-t">Инструменты: когда что брать</div></div>
        <div class="tl-d">Claude, Gemini, ChatGPT, Cursor — разбираем на практике, какой инструмент решает какую задачу.</div>
      </div>
      <div class="tl-item rv d2">
        <div><div class="tl-n">Сессия 3</div><div class="tl-t">Собираем ядро продукта</div></div>
        <div class="tl-d">Основная работа: каркас сайта, структура книги или логика автоматизации. Лайф-кодинг вместе.</div>
      </div>
      <div class="tl-item rv d2">
        <div><div class="tl-n">Сессия 4</div><div class="tl-t">Доводим до рабочего состояния</div></div>
        <div class="tl-d">Доделываем, тестируем, запускаем. Продукт должен реально работать, а не «быть почти готов».</div>
      </div>
      <div class="tl-item rv d3">
        <div><div class="tl-n">Сессия 5</div><div class="tl-t">Упаковка и передача</div></div>
        <div class="tl-d">Собираем записи, фиксируем, что и как устроено, чертим план развития без меня.</div>
      </div>
      <div class="tl-item rv d3">
        <div><div class="tl-n">Сессия 6 · запасная</div><div class="tl-t">По твоему запросу</div></div>
        <div class="tl-d">Если что-то не успели или хочешь глубже в одну из тем — используем запасную сессию.</div>
      </div>
    </div>
  </div>
</section>

<!-- TOOLS -->
<section id="tools" class="alt">
  <div class="wrap">
    <span class="sec-tag rv">Инструменты</span>
    <h2 class="sec-h2 rv d1">Стек, на котором работаем</h2>
    <p class="sl rv d2">Не «один всемогущий чат». Четыре инструмента — каждый под свою задачу.</p>
    <div class="tools-grid">
      <div class="tool rv d1"><div class="tool-name">Claude</div><div class="tool-use">Смыслы и архитектура</div><div class="tool-tx">Тексты, стратегия, структура продукта. Глубина рассуждения и точность формулировок.</div></div>
      <div class="tool rv d1"><div class="tool-name">Gemini</div><div class="tool-use">Большие контексты</div><div class="tool-tx">Разбор объёмных документов, исследования, работа с длинными материалами.</div></div>
      <div class="tool rv d2"><div class="tool-name">ChatGPT</div><div class="tool-use">Универсальный ассистент</div><div class="tool-tx">Быстрые задачи, генерация идей, черновая работа — там, где важна скорость.</div></div>
      <div class="tool rv d2"><div class="tool-name">Cursor</div><div class="tool-use">Сборка кодом</div><div class="tool-tx">Проектирование и сборка продукта: сайт, автоматизация, MVP — на естественном языке.</div></div>
    </div>
  </div>
</section>

<!-- BUILD -->
<section id="build">
  <div class="wrap">
    <span class="sec-tag rv">Что можно собрать</span>
    <h2 class="sec-h2 rv d1">Твой продукт — твой выбор</h2>
    <p class="sl rv d2">Три самых частых результата. Можно сфокусироваться на одном или совместить.</p>
    <div class="build-grid">
      <div class="build-card rv d1">
        <div class="build-ico">🖥️</div>
        <div class="build-tit">Сайт / лендинг</div>
        <div class="build-tx">Витрина, которая продаёт: от структуры и текстов до рабочей страницы, которую можно запускать.</div>
      </div>
      <div class="build-card rv d2">
        <div class="build-ico">📖</div>
        <div class="build-tit">Книга / контент-система</div>
        <div class="build-tx">Экспертный материал: структура, главы, воронка чтения. Или система контента, которая генерируется на потоке.</div>
      </div>
      <div class="build-card rv d3">
        <div class="build-ico">🤖</div>
        <div class="build-tit">Автоматизация / AI-агенты</div>
        <div class="build-tx">Рутина, которая съедает день, уходит в цифрового сотрудника: воронки, касания, отчёты — на автомате.</div>
      </div>
    </div>
  </div>
</section>

<!-- PRICE -->
<section id="inside" class="alt">
  <div class="wrap price-wrap">
    <span class="sec-tag rv" style="justify-content:center">Стоимость</span>
    <h2 class="sec-h2 rv d1" style="text-align:center">Один месяц. Один результат.</h2>
    <div class="price-card rv d2">
      <div class="price-top">
        <div>
          <div class="price-label">Обучение AI · 1 на 1</div>
          <div class="price-val">70–80к <em>₽</em></div>
          <div class="price-note">за месяц · фиксированно, без доп. платежей</div>
        </div>
        <div>
          <div class="price-label">Формат</div>
          <div class="price-val" style="font-size:1.3rem">5–6 сессий</div>
          <div class="price-note">онлайн · 1–2 человека одновременно</div>
        </div>
      </div>
      <div class="inc-grid">
        <div class="inc"><span class="inc-ck">✓</span><span class="inc-tx">5–6 индивидуальных сессий 1 на 1</span></div>
        <div class="inc"><span class="inc-ck">✓</span><span class="inc-tx">Твой реальный проект как основа обучения</span></div>
        <div class="inc"><span class="inc-ck">✓</span><span class="inc-tx">Запись каждого занятия остаётся у тебя</span></div>
        <div class="inc"><span class="inc-ck">✓</span><span class="inc-tx">Claude, Gemini, ChatGPT, Cursor — на практике</span></div>
        <div class="inc"><span class="inc-ck">✓</span><span class="inc-tx">На выходе — работающий продукт и навык</span></div>
        <div class="inc"><span class="inc-ck">✓</span><span class="inc-tx">План развития без меня после месяца</span></div>
      </div>
      <div class="price-cta">
        <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Записаться в Telegram</a>
        <a href="mailto:ilya.novitskii@yandex.ru" class="bs">Написать на почту</a>
      </div>
      <div class="price-caption">1–2 человека одновременно — работаю с тобой лично, а не с потоком. Если места заняты, встаёшь в лист ожидания.</div>
    </div>
  </div>
</section>

<!-- FINAL -->
<section id="final">
  <div class="final-in">
    <h2 class="final-h2 rv">Не хочешь нанимать команду.<br>Хочешь <em>собрать сам</em>.</h2>
    <p class="final-sub rv d1">За месяц ты уходишь не с сертификатом, а с работающим продуктом и навыком, который остаётся.</p>
    <div class="final-acts rv d2">
      <a href="https://t.me/Ilya_novator" class="bp" target="_blank" rel="noopener noreferrer">Записаться <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/consulting" class="bs">Сравнить с внедрением NCAi</a>
    </div>
    <div class="final-alt rv d3">Вопросы? <a href="mailto:ilya.novitskii@yandex.ru">ilya.novitskii@yandex.ru</a> или <a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer">Telegram</a></div>
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
          <a href="https://t.me/Ilya_novator" class="f-soc" target="_blank" rel="noopener noreferrer">✈</a>
        </div>
      </div>
      <div>
        <div class="f-col-title">Продукты</div>
        <ul class="f-links">
          <li><a href="/consulting">Внедрение NCAi · 30 дней</a></li>
          <li><a href="/ai-training">Обучение AI</a></li>
          <li><a href="/agency-in-a-box">Агентство в коробке</a></li>
          <li><a href="/book">Книга</a></li>
          <li><a href="/portfolio">Портфолио</a></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Контакт</div>
        <ul class="f-links">
          <li><a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer">Telegram</a></li>
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
  document.querySelectorAll('a,button,.fit-card,.tool,.build-card,.tl-item').forEach(el=>{
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
  (function draw(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(78,205,196,'+p.a+')';ctx.fill()});
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<100){ctx.beginPath();ctx.strokeStyle='rgba(78,205,196,'+(0.045*(1-d/100))+')';ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}
  requestAnimationFrame(draw)})()}
`;
