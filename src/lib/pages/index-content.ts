// Автогенерировано из doc_f92845db3127_index.html. Не редактировать вручную.
export const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#080808;--bgc:#111;--bgc2:#161616;--bgc3:#1a1a1a;
  --br:#1e1e1e;--br2:#272727;
  --t:#edeae3;--t2:#c2bdb5;--t3:#8b867e;
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
nav{position:fixed;top:0;left:0;right:0;z-index:100;height:68px;display:flex;align-items:center;padding:0 2rem;
  background:rgba(8,8,8,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.04);transition:background .3s}
nav.sc{background:rgba(8,8,8,.97)}
.ni{max-width:var(--max);width:100%;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.logo{font-family:var(--fd);font-size:1.5rem;font-weight:800;letter-spacing:-.03em;text-decoration:none;
  background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-links{display:flex;gap:1.75rem;list-style:none}
.nav-links a{font-family:var(--fd);font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;
  color:var(--t2);text-decoration:none;transition:color .2s}
.nav-links a:hover{color:var(--t)}
.nav-cta{font-family:var(--fd);font-size:.72rem;font-weight:700;color:var(--a);-webkit-text-fill-color:var(--a);
  text-decoration:none;padding:.42rem 1.1rem;border:1px solid rgba(255,208,0,.28);border-radius:6px;transition:background .2s}
.nav-cta:hover{background:var(--ad)}
@media(max-width:640px){.nav-links{display:none}.nav-cta{display:none}}

/* HERO */
#hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:68px}
.hero-grid{position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,208,0,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,208,0,.016) 1px,transparent 1px);
  background-size:60px 60px;animation:gm 30s ease-in-out infinite alternate}
@keyframes gm{from{background-position:0 0}to{background-position:30px 30px}}
.hero-glow{position:absolute;width:900px;height:900px;border-radius:50%;
  background:radial-gradient(circle,rgba(255,208,0,.055) 0%,transparent 62%);
  top:50%;left:35%;transform:translate(-50%,-50%);pointer-events:none}
#cvs{position:absolute;inset:0;pointer-events:none}
.hero-inner{position:relative;z-index:2;max-width:var(--max);margin:0 auto;padding:0 2rem;width:100%;min-width:0;
  display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:center}
.hero-inner>*{min-width:0}
@media(max-width:640px){.hero-inner{padding:0 1.25rem}.hero-quote{font-size:.98rem}}
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
.hero-quote{font-family:var(--fs);font-style:italic;font-size:1.15rem;line-height:1.7;color:var(--t2);
  max-width:440px;margin-bottom:2rem;padding-left:1.25rem;border-left:2px solid rgba(255,208,0,.35);
  animation:fup 1s .28s var(--ease) both}
.hero-meta{display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:2.5rem;animation:fup 1s .36s var(--ease) both}
.hm{font-family:var(--fm);font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}
.hm span{display:block;color:var(--t2);margin-top:.18rem;letter-spacing:0;text-transform:none}
.hero-stats{display:flex;gap:0;border-top:1px solid var(--br);padding-top:2rem;animation:fup 1s .44s var(--ease) both}
.hstat{padding-right:2rem;margin-right:2rem;border-right:1px solid var(--br)}
.hstat:last-child{border-right:none;margin-right:0;padding-right:0}
.hstat-n{font-family:var(--fd);font-size:1.9rem;font-weight:800;letter-spacing:-.04em;color:var(--a);line-height:1}
.hstat-l{font-family:var(--fm);font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);margin-top:.25rem}
@media(max-width:480px){.hero-stats{flex-wrap:wrap;gap:1.25rem}.hstat{border-right:none;margin-right:0;padding-right:0}}

/* HERO RIGHT — PATH (смысловой блок) */
.hero-right{animation:fup 1s .3s var(--ease) both;min-width:0}
@media(max-width:900px){.hero-right{display:none}}
.hero-path{display:flex;flex-direction:column;gap:1rem;min-width:0}
.hp-item{display:flex;gap:1.1rem;align-items:flex-start;padding:1.25rem 1.4rem;
  background:var(--bgc);border:1px solid var(--br);border-radius:12px;
  transition:border-color .25s,transform .3s var(--ease),background .25s}
.hp-item:hover{border-color:rgba(255,208,0,.3);background:var(--bgc2);transform:translateX(6px)}
.hp-num{font-family:var(--fm);font-size:.62rem;letter-spacing:.1em;color:var(--a);
  flex-shrink:0;padding-top:.15rem}
.hp-t{font-family:var(--fd);font-size:.95rem;font-weight:700;color:var(--t);margin-bottom:.25rem}
.hp-d{font-size:.9rem;color:var(--t2);line-height:1.55}

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
.sec-h2{font-family:var(--fd);font-size:clamp(1.8rem,3.5vw,2.75rem);font-weight:800;letter-spacing:-.04em;
  line-height:1.05;margin-bottom:1.2rem}
/* REVEAL — прогрессивное улучшение: без JS контент видим сразу,
   с JS — плавное появление при скролле (html.js ставит страница) */
.rv{opacity:1;transform:none}
.js .rv{opacity:0;transform:translateY(22px);transition:opacity .85s var(--ease),transform .85s var(--ease)}
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
.prod-desc{font-size:1rem;color:var(--t2);line-height:1.72;margin-bottom:1.5rem}
.prod-points{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.75rem}
.prod-point{display:flex;align-items:flex-start;gap:.65rem;font-size:.95rem;color:var(--t2);line-height:1.45}
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
.about-h2{font-family:var(--fd);font-size:clamp(1.8rem,3.5vw,2.75rem);font-weight:800;letter-spacing:-.04em;
  line-height:1.05;margin-bottom:1.25rem}
.p{font-size:1.06rem;color:#c2bdb5;line-height:1.88;margin-bottom:1.2rem}
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
.pj-desc{font-size:.95rem;color:var(--t2);line-height:1.55}
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
.f-tagline{font-size:.95rem;color:var(--t2);line-height:1.65;max-width:280px;margin-bottom:1.25rem}
.f-socials{display:flex;gap:.6rem}
.f-soc{width:34px;height:34px;border:1px solid var(--br);border-radius:7px;display:flex;align-items:center;
  justify-content:center;font-size:.8rem;color:var(--t2);text-decoration:none;transition:border-color .2s,color .2s}
.f-soc:hover{border-color:rgba(255,208,0,.3);color:var(--a)}
.f-col-title{font-family:var(--fd);font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  color:var(--t3);margin-bottom:1.1rem}
.f-links{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.f-links a{font-size:.95rem;color:var(--t2);text-decoration:none;transition:color .2s}
.f-links a:hover{color:var(--t)}
.f-bottom{display:flex;justify-content:space-between;align-items:center;
  padding-top:1.75rem;border-top:1px solid #0f0f0f;flex-wrap:wrap;gap:.75rem}
.f-copy,.f-easter{font-family:var(--fm);font-size:.62rem;color:var(--t3);letter-spacing:.04em}
.f-easter span{color:var(--a)}

/* BOOKS — каталог книг с обложками на главной */
.books-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.75rem;margin-top:1rem}
@media(max-width:860px){.books-grid{grid-template-columns:1fr;gap:1.25rem}}
.bk-card{display:grid;grid-template-columns:150px 1fr;gap:1.5rem;align-items:center;background:var(--bgc);
  border:1px solid var(--br);border-radius:18px;padding:1.5rem;text-decoration:none;position:relative;
  transition:border-color .3s,transform .3s var(--ease),box-shadow .3s;isolation:isolate}
.bk-card::before{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  background:radial-gradient(ellipse 70% 90% at 0% 50%,var(--ad),transparent 60%);opacity:.6;z-index:0}
.bk-card::after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.03)}
.bk-card:hover{border-color:rgba(255,208,0,.4);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,.45)}
@media(max-width:520px){.bk-card{grid-template-columns:1fr;text-align:center;justify-items:center}.bk-body{align-items:center}}
.bk-cover{display:block;width:150px;height:auto;aspect-ratio:600/840;object-fit:cover;border-radius:10px;
  box-shadow:0 18px 44px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08);position:relative;z-index:2}
@media(max-width:520px){.bk-cover{width:180px}}
.bk-body{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem;position:relative;z-index:2}
.bk-badge{font-family:var(--fm);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t2);
  padding:.28rem .65rem;border:1px solid var(--br2);border-radius:999px;background:rgba(255,255,255,.02)}
.bk-title{font-family:var(--fd);font-size:1.35rem;font-weight:800;letter-spacing:-.02em;line-height:1.05;color:var(--t)}
.bk-author{font-family:var(--fm);font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}
.bk-author span{color:var(--a)}
.bk-desc{font-size:.95rem;color:var(--t2);line-height:1.6;margin:0}
.bk-cta{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--fd);font-size:.78rem;font-weight:800;
  color:#050505;-webkit-text-fill-color:#050505;background:var(--a);padding:.55rem 1.15rem;border-radius:8px;margin-top:.2rem;
  box-shadow:0 6px 22px rgba(0,0,0,.35);transition:transform .2s var(--ease),box-shadow .2s}
.bk-card:hover .bk-cta{transform:translateX(4px);box-shadow:0 10px 30px rgba(255,208,0,.3)}
/* ИЗНАНКА · реальные цифры NCAi */
#iznanka{padding:6rem 0;background:var(--bgc);position:relative;overflow:hidden}
@media(max-width:640px){#iznanka{padding:4rem 0}}
#iznanka::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 55% 50% at 50% 0%,rgba(255,208,0,.05),transparent)}
.iz-head{display:grid;grid-template-columns:1fr 1.15fr;gap:4rem;align-items:end;margin-bottom:3rem}
@media(max-width:900px){.iz-head{grid-template-columns:1fr;gap:1.5rem}}
.iz-tx{font-size:1.06rem;color:#c2bdb5;line-height:1.8}
.iz-tx strong{color:var(--t)}
.iz-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-bottom:3rem}
@media(max-width:700px){.iz-stats{grid-template-columns:1fr 1fr}.iz-stats .iz-stat:last-child{grid-column:1/-1}}
.iz-stat{background:var(--bgc2);border:1px solid var(--br2);border-radius:16px;padding:2rem 1.75rem;position:relative;overflow:hidden;transition:border-color .3s,transform .3s var(--ease)}
.iz-stat:hover{border-color:rgba(255,208,0,.3);transform:translateY(-4px)}
.iz-stat::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--a),transparent);opacity:0;transition:opacity .3s}
.iz-stat:hover::after{opacity:1}
.iz-n{font-family:var(--fd);font-size:clamp(2.2rem,4.5vw,3.6rem);font-weight:800;letter-spacing:-.05em;color:var(--a);line-height:.95;margin-bottom:.5rem}
.iz-n small{font-size:.45em;color:var(--t2);font-weight:700;letter-spacing:0}
.iz-l{font-family:var(--fm);font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--t3);line-height:1.5}
.iz-report{background:#0c0c0c;border:1px solid var(--br2);border-radius:16px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5)}
.iz-rep-top{display:flex;align-items:center;gap:.5rem;padding:.8rem 1.1rem;border-bottom:1px solid var(--br);background:var(--bgc2)}
.iz-dot{width:9px;height:9px;border-radius:50%;background:var(--br2);flex-shrink:0}
.iz-dot:nth-child(1){background:#e84040}.iz-dot:nth-child(2){background:#FFD000}.iz-dot:nth-child(3){background:#2ecc71}
.iz-rep-title{font-family:var(--fm);font-size:.6rem;letter-spacing:.1em;color:var(--t3);margin-left:.4rem}
.iz-rep-body{font-family:var(--fm);font-size:.78rem;line-height:1.7;padding:1.5rem 1.6rem;color:var(--t2)}
.iz-rep-body .ln{display:flex;gap:.75rem;align-items:flex-start}
.iz-rep-body .ok{color:#2ecc71;flex-shrink:0}
.iz-rep-body .task{color:var(--t)}
.iz-rep-body .st{color:var(--a)}
.iz-rep-body .dim{color:var(--t3)}
.iz-rep-div{border:none;border-top:1px solid var(--br);margin:.9rem 0}
.iz-bot{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;margin-top:2.25rem}
.iz-bot .tx{font-family:var(--fd);font-size:clamp(1rem,1.8vw,1.3rem);font-weight:800;letter-spacing:-.02em;line-height:1.3;flex:1;min-width:240px}
.iz-bot .tx span{color:var(--a)}
section[id]{scroll-margin-top:76px}

/* Светлые секции — ритмичное чередование (читаемость, контраст) */
.sec-light{background:#FAFAF8 !important}
.sec-light .sec-h2,.sec-light .about-h2{color:#111}
.sec-light .sec-tag{color:#a37900;opacity:1}
.sec-light .sec-tag::before{background:#a37900;opacity:.6}
.sec-light .p{color:#2e2e2c}
.sec-light .p strong{color:#000}
.sec-light .sl{color:#2e2e2c}
.sec-light .about-alai{color:#111;background:rgba(255,208,0,.16);border-left:3px solid rgba(170,115,0,.5)}
.sec-light .an-n{color:#b8860b}
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
      <li><a href="/book">Книги</a></li>
      <li><a href="/blog">Блог</a></li>
      <li><a href="/o-proekte">О проекте</a></li>
      <li><a href="/portfolio">Портфолио</a></li>
    </ul>
    <a href="mailto:ilya.novitskii@yandex.ru" class="nav-cta">Написать</a>
    <button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button>
  </div>
</nav>

<!-- Мобильное меню (шторка) -->
<div class="mnav" id="mnav">
  <div class="mnav-backdrop" id="mnavBackdrop"></div>
  <div class="mnav-panel">
    <div class="mnav-head"><span class="mnav-logo">NCAi</span><button class="mnav-close" id="mnavClose" aria-label="Закрыть">✕</button></div>
    <div class="mnav-links">
      <a href="/consulting"><span class="mnav-arrow">→</span>Внедрение NCAi</a>
      <a href="/ai-training"><span class="mnav-arrow">→</span>Обучение AI</a>
      <a href="/book"><span class="mnav-arrow">→</span>Книги</a>
      <a href="/blog"><span class="mnav-arrow">→</span>Блог</a>
      <a href="/o-proekte"><span class="mnav-arrow">→</span>О проекте</a>
      <a href="/portfolio"><span class="mnav-arrow">→</span>Портфолио</a>
      <a href="/partners"><span class="mnav-arrow">→</span>Партнёры</a>
    </div>
    <div class="mnav-foot">
      <a href="mailto:ilya.novitskii@yandex.ru" class="mnav-cta">Написать напрямую</a>
      <div class="mnav-soc"><a href="https://t.me/ilya_novator" target="_blank" rel="noopener noreferrer">Telegram</a><a href="mailto:ilya.novitskii@yandex.ru">Email</a></div>
    </div>
  </div>
</div>

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
        <div class="hm">Формат<span>Fix + опцион · удалённо</span></div>
      </div>
      <div class="hero-stats">
        <div class="hstat"><div class="hstat-n">300+</div><div class="hstat-l">Проектов</div></div>
        <div class="hstat"><div class="hstat-n">50M ₽</div><div class="hstat-l">В запусках</div></div>
        <div class="hstat"><div class="hstat-n">3+</div><div class="hstat-l">Года агентства</div></div>
        <div class="hstat"><div class="hstat-n">1</div><div class="hstat-l">Книга издана</div></div>
      </div>
    </div>
    <!-- RIGHT — смысловой блок: AI это будущее -->
    <div class="hero-right">
      <div class="hero-path">
        <div class="hp-item"><span class="hp-num">01</span><div><div class="hp-t">AI экономит деньги</div><div class="hp-d">Заменяет рутину, а не людей: компания платит за результат, а не за штат</div></div></div>
        <div class="hp-item"><span class="hp-num">02</span><div><div class="hp-t">AI экономит ресурсы</div><div class="hp-d">Задачи, на которые уходили дни, закрываются за минуты</div></div></div>
        <div class="hp-item"><span class="hp-num">03</span><div><div class="hp-t">Новый навык — внедрение</div><div class="hp-d">Тот, кто умеет встраивать AI в бизнес, становится дефицитным</div></div></div>
      </div>
    </div>
  </div>
  <div class="scroll-hint">
    <div class="sh-txt">Подробнее</div>
    <div class="sh-line"></div>
  </div>
</section>

<!-- PRODUCTS -->
<section id="products" class="sec-light">
  <div class="wrap">
    <span class="sec-tag rv">AI — это будущее</span>
    <h2 class="sec-h2 rv d1">Три продукта.<br>Один смысл — внедрение.</h2>
    <div class="products-grid">

      <a href="/consulting" class="prod-card c1 rv">
        <div class="prod-stripe" style="--stripe:#FFD000"></div>
        <div class="prod-top">
          <div class="prod-icon">📦</div>
          <div class="prod-type">Внедрение NCAi · B2B</div>
          <div class="prod-title">Агентство в коробке за 30 дней</div>
          <p class="prod-desc">Внедряю рабочее NCAi-агентство в панели: AI-команда, отделы, задачи, база клиентов и аналитика. Распаковка за 60–90 минут, передача руля через 30 дней — зависимости нет.</p>
          <div class="prod-points">
            <div class="prod-point"><div class="pp-dot"></div><span>Распаковка: агентство готово с первой сессии</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>AI-команда 3–5 цифровых сотрудников</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Аналитика и финансы в панели 24/7</span></div>
            <div class="prod-point"><div class="pp-dot"></div><span>Передача руля — клиент ведёт сам</span></div>
          </div>
        </div>
        <div class="prod-bottom">
          <div class="prod-price"><span>Длительность</span>30 дней</div>
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
    <img src="/viz/matrica.svg" alt="Продуктовая матрица NCAi — лестница ценности" loading="lazy" style="width:100%;height:auto;display:block;border-radius:16px;border:1px solid var(--br);margin-top:3rem" />
  </div>
</section>

<!-- BOOKS -->
<section id="books">
  <div class="wrap">
    <span class="sec-tag rv">Книги · бесплатно</span>
    <h2 class="sec-h2 rv d1">Читай, применяй,<br>собирай систему.</h2>
    <p class="sl rv d2">Книга Ильи Новицкого — с механикой нейро-воронки, читается прямо на сайте.</p>
    <div class="books-grid">
      <a href="/book" class="bk-card rv d1">
        <img src="/covers/neuro-voronka-cover.jpg" alt="Книга Нейро-Воронка — обложка" class="bk-cover" loading="lazy" />
        <div class="bk-body">
          <div class="bk-badge">Книга · Бесплатно</div>
          <div class="bk-title">Нейро-Воронка</div>
          <div class="bk-author">Илья Новицкий · <span>2026</span></div>
          <div class="bk-desc">Инженерия систем продаж на стыке нейробиологии, поведенческой психологии и AI. 6 глав, 30 подглав.</div>
          <div class="bk-cta">Читать →</div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="sec-light">
  <div class="wrap">
    <div class="about-layout">
      <div class="about-visual rv">
        <div class="about-card">
          <div class="ac-top">
            <div class="ac-ava">И</div>
            <div>
              <div class="ac-name">Илья Новицкий</div>
              <div class="ac-role">Архитектор систем · NCAi</div>
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
                <div class="acj-d">Регулярные продажи · маркетинг и автоматизация</div>
              </div>
            </div>
            <div class="acj">
              <div class="acj-dot">02</div>
              <div>
                <div class="acj-p">Переход</div>
                <div class="acj-t">Ушёл в AI-разработку</div>
                <div class="acj-d">GenAI, агенты, live-кодинг</div>
              </div>
            </div>
            <div class="acj">
              <div class="acj-dot now">03</div>
              <div>
                <div class="acj-p">Сейчас · NCAi</div>
                <div class="acj-t">AI-агентство в коробке</div>
                <div class="acj-d">Внедрение AI-команды в бизнес</div>
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
          <div><span class="an-n">100K+</span><span class="an-l">Заявок</span></div>
          <div><span class="an-n">3</span><span class="an-l">Продукта</span></div>
          <div><span class="an-n">6 · 30</span><span class="an-l">Глав · подглав в книге</span></div>
          <div><span class="an-n">4</span><span class="an-l">Соло-проекта</span></div>
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

<!-- BIG IDEA · переход -->
<section id="iznanka">
  <div class="wrap">
    <div class="iz-head">
      <div>
        <span class="sec-tag rv">Главная идея</span>
        <h2 class="sec-h2 rv d1">Я создаю AI-системы,<br>которые работают за компанию.</h2>
      </div>
      <p class="iz-tx rv d2">Вся механика под капотом — <strong>команда из AI-сотрудников, отделы, задачи, аналитика</strong> — разобрана детально на странице «Внедрение». Здесь — суть: AI забирает рутину, а бизнес получает время и деньги.</p>
    </div>
    <div class="iz-bot rv d2">
      <div class="tx">Хочешь увидеть, <span>как это устроено изнутри</span> — зайди на «Внедрение».</div>
      <a href="/consulting" class="bk-cta" style="font-size:.82rem;padding:.7rem 1.5rem">Внедрение NCAi →</a>
    </div>
  </div>
</section>

<!-- SOLO PROJECTS -->
<section id="projects" class="sec-light">
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
          <a href="https://t.me/ilya_novator" class="f-soc">✈</a>
          <a href="mailto:ilya.novitskii@yandex.ru" class="f-soc">✉</a>
        </div>
      </div>
      <div>
        <div class="f-col-title">Продукты</div>
        <ul class="f-links">
          <li><a href="/consulting">Внедрение NCAi · 30 дней</a></li>
          <li><a href="/ai-training">Обучение AI</a></li>
          <li><a href="/book">Книга</a></li>
          <li><a href="/blog">Блог</a></li>
          <li><a href="/o-proekte">О проекте</a></li>
          <li><a href="/partners">Партнёры</a></li>
          <li><a href="/portfolio">Портфолио</a></li>
        </ul>
      </div>
      <div>
        <div class="f-col-title">Контакт</div>
        <ul class="f-links">
          <li><a href="https://t.me/Ilya_novator">Telegram</a></li>
          <li><a href="mailto:ilya.novitskii@yandex.ru">Email</a></li>
          <li><a href="/privacy">Политика конфиденциальности</a></li>
          <li><a href="/offer">Публичная оферта</a></li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <span class="f-copy">© 2026 NCAi · Илья Новицкий</span>
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
// Включаем прогрессивный reveal: без этой метки контент виден сразу
document.documentElement.classList.add('js');
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
// REVEAL (с защитой: контент никогда не остаётся невидимым)
if(!('IntersectionObserver' in window)){
  document.querySelectorAll('.rv').forEach(el=>el.classList.add('on'));
}else{
  const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.07});
  document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
  // Страховка: если observer по какой-то причине не сработал для видимых блоков — показываем их
  setTimeout(()=>{
    document.querySelectorAll('.rv:not(.on)').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<innerHeight&&r.bottom>0)el.classList.add('on');
    });
  },1500);
}
// CANVAS PARTICLES
const cv=document.getElementById('cvs');
if(cv){const ctx=cv.getContext('2d');let W,H;
  const pts=Array.from({length:40},()=>({x:Math.random()*1400,y:Math.random()*900,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.3+.3,a:Math.random()*.3+.05}));
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();
  window.addEventListener('resize',rs,{passive:true});
  (function draw(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,208,0,'+p.a+')';ctx.fill()});
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<100){ctx.beginPath();ctx.strokeStyle='rgba(255,208,0,'+(0.045*(1-d/100))+')';ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}
  requestAnimationFrame(draw)})()}

// BURGER — мобильное меню
const burger=document.getElementById('burger'),mnav=document.getElementById('mnav');
if(burger&&mnav){
  burger.addEventListener('click',()=>{mnav.classList.add('open');document.body.style.overflow='hidden'});
  mnav.querySelectorAll('.mnav-close,.mnav-backdrop,.mnav-links a').forEach(el=>el.addEventListener('click',()=>{mnav.classList.remove('open');document.body.style.overflow=''}));
}
`;
