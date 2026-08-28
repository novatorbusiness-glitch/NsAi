// Внедрение NCAi-агентства за 30 дней (по книге «Агентство в коробке», гл. 3 «Распаковка»).
// Стиль NCAi: токены 1:1 с index/portfolio/ai-training. CSS унаследован от прежней страницы.
export const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#080808;--bg2:#0d0d0d;--bgc:#131313;--bgc2:#181818;
  --br:#1e1e1e;--br2:#2a2a2a;
  --t:#f0ede6;--t2:#6e6e6e;--t3:#333;
  --a:#FFD000;--ad:rgba(255,208,0,.08);
  --red:#e84040;
  --metal:linear-gradient(135deg,#e8e8e8 0%,#c8c8c8 35%,#888 65%,#d4d4d4 100%);
  --fd:'Syne',sans-serif;--fs:'Instrument Serif',serif;--fm:'JetBrains Mono',monospace;
  --ease:cubic-bezier(.16,1,.3,1);--max:1280px;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--t);font-family:var(--fs);font-size:17px;line-height:1.65;overflow-x:hidden}
@media(pointer:fine){body{cursor:none}}
#cd,#cr{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);display:none}
@media(pointer:fine){#cd,#cr{display:block}}
#cd{width:5px;height:5px;background:var(--a);border-radius:50%}
#cr{z-index:9998;width:28px;height:28px;border:1px solid rgba(255,208,0,.4);border-radius:50%;transition:width .3s var(--ease),height .3s var(--ease),opacity .3s}
#cr.ex{width:50px;height:50px;opacity:.3}
body::before{content:'';position:fixed;inset:0;z-index:8000;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.02}
#prog{position:fixed;top:68px;left:0;height:2px;background:linear-gradient(90deg,var(--a),rgba(255,208,0,.45));z-index:200;width:0;pointer-events:none;transition:width .1s linear}
nav{position:fixed;top:0;left:0;right:0;z-index:100;height:68px;display:flex;align-items:center;padding:0 2rem;
  background:rgba(8,8,8,.8);backdrop-filter:blur(24px) saturate(180%);-webkit-backdrop-filter:blur(24px) saturate(180%);
  border-bottom:1px solid rgba(255,255,255,.045);transition:all .3s}
nav.sc{background:rgba(8,8,8,.97);border-color:rgba(255,255,255,.08);box-shadow:0 4px 40px rgba(0,0,0,.6)}
.ni{max-width:var(--max);width:100%;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.logo{font-family:var(--fd);font-size:1.45rem;font-weight:800;letter-spacing:-.03em;text-decoration:none;
  background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nl{display:flex;gap:2rem;list-style:none}
.nl a{font-family:var(--fd);font-size:.73rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--t2);text-decoration:none;transition:color .2s}
.nl a:hover{color:var(--t)}
.nc{font-family:var(--fd);font-size:.76rem;font-weight:700;letter-spacing:.04em;color:var(--a);text-decoration:none;
  padding:.5rem 1.25rem;border:1px solid rgba(255,208,0,.3);border-radius:6px;transition:background .2s,border-color .25s}
.nc:hover{background:var(--ad);border-color:rgba(255,208,0,.6)}
@media(max-width:640px){.nl{display:none}}
.w{max-width:var(--max);margin:0 auto;padding:0 2rem}
section{padding:clamp(5.5rem,11vw,9.5rem) 0}
@media(max-width:640px){section{padding:3.5rem 0}}
hr.dv{border:none;border-top:1px solid var(--br);margin:0}
.lb{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fm);font-size:.66rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--a);opacity:.85;margin-bottom:1rem}
.lb::before{content:'';width:18px;height:1px;background:var(--a);opacity:.5}
.sh2{font-family:var(--fd);font-size:clamp(1.85rem,3.4vw,3.1rem);font-weight:800;letter-spacing:-.035em;line-height:1.07;margin-bottom:.8rem}
.sl{font-size:1.03rem;color:var(--t2);max-width:500px;margin-bottom:3.5rem;line-height:1.72}
.rv{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
.rv.on{opacity:1;transform:none}
.rv.d1{transition-delay:.1s}.rv.d2{transition-delay:.2s}.rv.d3{transition-delay:.32s}.rv.d4{transition-delay:.44s}

/* HERO */
#hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-top:68px;position:relative;overflow:hidden;gap:4rem}
@media(max-width:900px){#hero{grid-template-columns:1fr;min-height:auto;padding:calc(68px + 4rem) 0 4rem}}
.hgrid{position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,208,0,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,208,0,.022) 1px,transparent 1px);
  background-size:76px 76px;
  -webkit-mask-image:radial-gradient(ellipse 75% 80% at 30% 50%,black,transparent 75%);
  mask-image:radial-gradient(ellipse 75% 80% at 30% 50%,black,transparent 75%);
  animation:gmove 28s ease-in-out infinite alternate}
@keyframes gmove{0%{background-position:0 0}100%{background-position:38px 38px}}
.hgl{position:absolute;width:900px;height:900px;background:radial-gradient(circle,rgba(255,208,0,.055) 0%,transparent 62%);top:50%;left:28%;transform:translate(-50%,-54%);pointer-events:none;animation:hbr 11s ease-in-out infinite}
@keyframes hbr{0%,100%{opacity:.5;transform:translate(-50%,-54%) scale(1)}50%{opacity:1;transform:translate(-50%,-54%) scale(1.08)}}
#pcanvas{position:absolute;inset:0;pointer-events:none}
.hleft{position:relative;z-index:2;padding:0 2rem 0 max(2rem,calc((100vw - var(--max))/2 + 2rem))}
@media(max-width:900px){.hleft{padding:0 2rem}}
.hew{display:inline-flex;align-items:center;gap:.65rem;font-family:var(--fm);font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--t2);margin-bottom:2.5rem;padding:.42rem .95rem;border:1px solid var(--br2);border-radius:999px;animation:fup .8s var(--ease) both}
.hdot{width:5px;height:5px;background:var(--a);border-radius:50%;animation:blink 2.5s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.65)}}
@keyframes fup{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
/* FIX: h1 — достаточно светлый на тёмном фоне, accent без webkit-fill на мобиле */
.hh1{font-family:var(--fd);font-size:clamp(2.6rem,6.5vw,7rem);font-weight:800;line-height:.97;letter-spacing:-.04em;margin-bottom:1.75rem;animation:fup .9s .1s var(--ease) both;color:#f5f2eb}
.hh1 em{font-style:normal;background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
/* FIX: accent line — жёлтый строго через color, не fill-color (Safari mobile fix) */
.hh1 .acc{display:block;color:var(--a) !important;-webkit-text-fill-color:var(--a) !important;background:none !important}
/* FIX: subtitle — чуть светлее чем было (#9a9690 → #b0ada6) */
.hsub{font-size:clamp(.95rem,1.6vw,1.1rem);color:#b0ada6;max-width:480px;line-height:1.8;margin-bottom:2.75rem;animation:fup 1s .2s var(--ease) both}
.hacts{display:flex;gap:.875rem;flex-wrap:wrap;animation:fup 1s .32s var(--ease) both}
/* FIX: primary btn — чуть крупнее текст, box-shadow снизу для depth */
.bp{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fd);font-size:.9rem;font-weight:800;letter-spacing:.01em;background:var(--a);color:#050505;padding:.95rem 2.1rem;border-radius:8px;text-decoration:none;transition:transform .2s var(--ease),box-shadow .2s;position:relative;overflow:hidden;box-shadow:0 3px 0 rgba(180,140,0,.5),0 8px 32px rgba(255,208,0,.18)}
.bp::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.28),transparent 55%);opacity:0;transition:opacity .2s}
.bp:hover{transform:translateY(-2px);box-shadow:0 3px 0 rgba(180,140,0,.5),0 16px 44px rgba(255,208,0,.38)}.bp:hover::after{opacity:1}
/* FIX: secondary btn — граница ярче (#383838 → #4a4a4a), текст светлее */
.bs{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--fd);font-size:.9rem;font-weight:700;color:#e0ddd6;padding:.95rem 2.1rem;border:1.5px solid #4a4a4a;border-radius:8px;text-decoration:none;background:rgba(255,255,255,.05);transition:border-color .2s,background .2s,color .2s}
.bs:hover{border-color:#6a6a6a;background:rgba(255,255,255,.08);color:var(--t)}
/* FIX: stats — на мобиле grid 2×2, label без переноса слов коллизий */
.hstats{display:flex;flex-wrap:wrap;row-gap:0;margin-top:4rem;padding-top:2.5rem;border-top:1px solid var(--br);animation:fup 1s .44s var(--ease) both}
.hstat{padding-right:2.5rem;margin-right:2.5rem;border-right:1px solid var(--br)}
.hstat:last-of-type{border-right:none;margin-right:0;padding-right:0}
.hstatn{font-family:var(--fd);font-size:2.2rem;font-weight:800;letter-spacing:-.045em;color:var(--t);line-height:1.1}
.sfx{font-size:.5em;color:var(--a);vertical-align:.2em;font-weight:700}
/* FIX: label — white-space:normal на мобиле, nowrap на десктопе */
.hstatl{font-family:var(--fm);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t2);margin-top:.3rem;white-space:normal;line-height:1.35}
@media(min-width:641px){.hstatl{white-space:nowrap}}
@media(max-width:640px){
  .hstats{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:2.5rem;padding-top:1.75rem}
  .hstat{padding:1.1rem .75rem 1.1rem 0;margin:0;border-right:none;border-bottom:1px solid var(--br)}
  .hstat:nth-child(odd){border-right:1px solid var(--br);padding-right:.75rem}
  .hstat:nth-child(even){padding-left:.75rem}
  .hstat:nth-last-child(-n+2){border-bottom:none}
  .hstatn{font-size:1.7rem;letter-spacing:-.04em}
  .hstatl{font-size:.55rem;letter-spacing:.05em;white-space:normal;line-height:1.35}
}
.hright{position:relative;z-index:2;padding-right:max(2rem,calc((100vw - var(--max))/2 + 2rem));animation:fup 1.1s .35s var(--ease) both}
@media(max-width:900px){.hright{display:none}}
.hcard{background:var(--bgc);border:1px solid var(--br2);border-radius:16px;padding:2rem;position:relative;overflow:hidden}
.hcard::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,208,0,.04),transparent);pointer-events:none}
.hctop{display:flex;align-items:center;gap:.75rem;margin-bottom:1.5rem;padding-bottom:1.25rem;border-bottom:1px solid var(--br)}
.hcdot{width:8px;height:8px;border-radius:50%;background:var(--a);box-shadow:0 0 12px rgba(255,208,0,.5);animation:blink 2s ease-in-out infinite}
.hctitle{font-family:var(--fm);font-size:.67rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t2)}
.hctitle span{color:var(--a)}
.hsys{display:flex;flex-direction:column;gap:.6rem}
.hsys-row{display:grid;grid-template-columns:1fr 24px 1fr;align-items:center;gap:.4rem}
.hbox{padding:.7rem 1rem;border-radius:9px;font-family:var(--fm);font-size:.63rem;color:var(--t2);line-height:1.4;border:1px solid var(--br);background:var(--bgc2);transition:border-color .5s,color .5s,background .5s}
.hbox.lit{border-color:rgba(255,208,0,.4);color:var(--a);background:rgba(255,208,0,.04)}
.harr{text-align:center;color:var(--br2);font-size:.7rem}
.hsys-conn{display:flex;justify-content:center;padding:.1rem 0}
.hsys-line{width:1px;height:12px;background:linear-gradient(to bottom,rgba(255,208,0,.35),transparent)}
.hccap{margin-top:1.4rem;padding-top:1.25rem;border-top:1px solid var(--br);font-family:var(--fm);font-size:.63rem;color:var(--t3);letter-spacing:.04em}
.hccap .cur{animation:cur 1.1s ease-in-out infinite}
@keyframes cur{0%,100%{opacity:1}50%{opacity:0}}

/* BLOCK 1 */
#unique{background:var(--bg2)}
.uw{display:grid;grid-template-columns:1fr 1.05fr;gap:6rem;align-items:start}
@media(max-width:900px){.uw{grid-template-columns:1fr;gap:3rem}}
.ugh{font-family:var(--fd);font-size:clamp(6rem,16vw,13rem);font-weight:800;line-height:.88;letter-spacing:-.07em;color:transparent;-webkit-text-stroke:1px rgba(255,208,0,.09);user-select:none;pointer-events:none;margin-bottom:-.4em;display:block}
.uh2{font-family:var(--fd);font-size:clamp(1.85rem,3vw,2.9rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin-bottom:1.4rem}
.up{font-size:1rem;color:var(--t2);line-height:1.8;margin-bottom:1.2rem}
.up strong{color:var(--t)}
.ucmp{margin-top:2rem;border-radius:12px;overflow:hidden;outline:1px solid var(--br);background:var(--bgc)}
.urow{display:grid;grid-template-columns:1fr 1fr}
.urow+.urow{border-top:1px solid var(--br)}
.uc{padding:1rem 1.3rem;font-size:.84rem;line-height:1.55;display:flex;align-items:flex-start;gap:.65rem}
.uc.bad{color:var(--t3);border-right:1px solid var(--br)}.uc.good{color:var(--t)}
.uc svg{flex-shrink:0;margin-top:.18rem}
.uchead{padding:.65rem 1.3rem;font-family:var(--fm);font-size:.63rem;letter-spacing:.12em;text-transform:uppercase;background:var(--bgc2)}
.uchead.bad{color:var(--t3);border-right:1px solid var(--br)}.uchead.good{color:var(--a)}

/* BLOCK 2 */
.bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
@media(max-width:900px){.bgrid{grid-template-columns:1fr}}
.bcard{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:2.5rem 2rem;position:relative;overflow:hidden;transition:border-color .25s,background .25s}
.bcard::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--a),transparent);opacity:0;transition:opacity .3s}
.bcard:hover{background:var(--bgc2);border-color:rgba(255,208,0,.2)}.bcard:hover::after{opacity:1}
.btag{font-family:var(--fm);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1rem}
.bbf{font-size:.88rem;color:var(--t2);line-height:1.58;padding-bottom:1.25rem;margin-bottom:1.25rem;border-bottom:1px solid var(--br);padding-left:.9rem;position:relative}
.bbf::before{content:'';position:absolute;left:0;top:.3rem;bottom:.3rem;width:2px;background:var(--red);border-radius:2px;opacity:.55}
.barr{display:flex;align-items:center;gap:.45rem;font-family:var(--fm);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--a);margin-bottom:1rem;opacity:.75}
.baf{font-size:.9rem;color:var(--t);line-height:1.6;padding-left:.9rem;position:relative}
.baf::before{content:'';position:absolute;left:0;top:.3rem;bottom:.3rem;width:2px;background:var(--a);border-radius:2px}

/* BLOCK 3 */
#proof{background:var(--bg2)}
.fvis{border:1px solid rgba(255,208,0,.18);border-radius:16px;background:var(--bgc);padding:2.75rem;margin-bottom:3rem;position:relative;overflow:hidden}
.fvis::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 70% 60% at 50% -5%,rgba(255,208,0,.05),transparent)}
.fvlbl{font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t2);margin-bottom:2.25rem}
.frow{display:flex;align-items:center;justify-content:center;gap:1.75rem;padding:1.4rem 0}
.fcel{text-align:center;flex:1;min-width:0}
.fval{font-family:var(--fd);font-size:clamp(.95rem,1.8vw,1.45rem);font-weight:800;letter-spacing:-.02em;margin-bottom:.4rem;line-height:1.2}
.fval.pos{color:var(--a)}.fval.neg{color:var(--t2)}
.fkey{font-family:var(--fm);font-size:.58rem;letter-spacing:.09em;text-transform:uppercase;color:var(--t3);line-height:1.5}
.fop{font-family:var(--fd);font-size:1.6rem;font-weight:800;color:var(--br2);flex-shrink:0}
.fline{border:none;border-top:2px solid rgba(255,208,0,.22);margin:0}
.fbars{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:2.25rem;padding-top:2rem;border-top:1px solid var(--br)}
@media(max-width:640px){.fbars{grid-template-columns:1fr 1fr}}
.fbi{text-align:center}
.fblbl{font-family:var(--fm);font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3);margin-bottom:.55rem}
.fbtrack{height:3px;background:var(--br2);border-radius:2px;overflow:hidden;margin-bottom:.6rem}
.fbfill{height:100%;background:linear-gradient(90deg,var(--a),rgba(255,208,0,.5));border-radius:2px;width:0;transition:width 1.4s var(--ease)}
.fbnote{font-size:.78rem;color:var(--t2);line-height:1.45}
.srow{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
@media(max-width:900px){.srow{grid-template-columns:1fr 1fr}}
.scard{background:var(--bgc);border:1px solid var(--br);border-radius:12px;padding:2rem 1.5rem;text-align:center;transition:background .2s,border-color .25s}
.scard:hover{background:var(--bgc2);border-color:rgba(255,208,0,.2)}
.snum{font-family:var(--fd);font-size:clamp(1.8rem,3.2vw,2.8rem);font-weight:800;color:var(--a);letter-spacing:-.04em}
.slbl{font-family:var(--fm);font-size:.6rem;letter-spacing:.09em;text-transform:uppercase;color:var(--t3);margin-top:.5rem;line-height:1.45}

/* BLOCK 4 */
.wlay{display:grid;grid-template-columns:1fr 1.25fr;gap:6rem;align-items:start}
@media(max-width:900px){.wlay{grid-template-columns:1fr;gap:3rem}}
.funnelw{margin-top:2.5rem;max-width:280px}
@media(max-width:900px){.funnelw{max-width:220px;margin:2rem auto 0}}
.wdiag{display:flex;flex-direction:column;gap:.7rem}
.wi{display:flex;gap:1.2rem;padding:1.2rem 1.4rem;border:1px solid var(--br);border-radius:10px;background:var(--bgc);cursor:pointer;transition:border-color .25s,background .25s,box-shadow .25s;position:relative;overflow:hidden}
.wi::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--a);transform:scaleY(0);transform-origin:top;transition:transform .3s var(--ease)}
.wi.act,.wi:hover{border-color:rgba(255,208,0,.25);background:var(--bgc2);box-shadow:0 4px 40px rgba(255,208,0,.05)}
.wi.act::before,.wi:hover::before{transform:scaleY(1)}
.wico{font-size:1.25rem;flex-shrink:0;margin-top:.05rem}
.wtit{font-family:var(--fd);font-size:.86rem;font-weight:700;color:var(--t);margin-bottom:.28rem}
.wtx{font-size:.83rem;color:var(--t2);line-height:1.6;max-height:0;overflow:hidden;transition:max-height .4s var(--ease),opacity .3s;opacity:0}
.wi.act .wtx,.wi:hover .wtx{max-height:100px;opacity:1}

/* BLOCK 5 */
#enemy{background:var(--bg2)}
.elay{display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
@media(max-width:900px){.elay{grid-template-columns:1fr;gap:3rem}}
.ebig{font-family:var(--fd);font-size:clamp(2.6rem,5.5vw,5.5rem);font-weight:800;line-height:1.04;letter-spacing:-.04em;margin-bottom:1.5rem}
.ebig .red{color:var(--red);text-shadow:0 0 80px rgba(232,64,64,.22)}
.ep{font-size:1rem;color:var(--t2);line-height:1.78;margin-bottom:1rem}
.ep strong{color:var(--t)}
.esyms{display:flex;flex-direction:column;gap:.6rem}
.esym{display:flex;align-items:flex-start;gap:.9rem;padding:.95rem 1.2rem;background:var(--bgc);border:1px solid var(--br);border-radius:8px;transition:border-color .25s,background .25s}
.esym:hover{border-color:rgba(232,64,64,.3);background:rgba(232,64,64,.03)}
.epu{width:7px;height:7px;background:var(--red);border-radius:50%;flex-shrink:0;margin-top:.48rem;animation:spu 2.5s ease-in-out infinite}
.esym:nth-child(2) .epu{animation-delay:.35s}.esym:nth-child(3) .epu{animation-delay:.7s}
.esym:nth-child(4) .epu{animation-delay:1.05s}.esym:nth-child(5) .epu{animation-delay:1.4s}.esym:nth-child(6) .epu{animation-delay:1.75s}
@keyframes spu{0%{box-shadow:0 0 0 0 rgba(232,64,64,.5)}65%{box-shadow:0 0 0 9px rgba(232,64,64,0)}100%{box-shadow:0 0 0 0 rgba(232,64,64,0)}}
.estx{font-size:.86rem;color:var(--t2);line-height:1.55}

/* BLOCK 6 */
.ngrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
@media(max-width:900px){.ngrid{grid-template-columns:1fr}}
.ncard{padding:2.5rem 2rem;border:1px solid var(--br);border-radius:12px;background:var(--bgc);position:relative;overflow:hidden;transition:border-color .3s,transform .3s var(--ease)}
.ncard:hover{border-color:rgba(255,208,0,.3);transform:translateY(-5px)}
.ncard::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--a);transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease)}
.ncard:hover::after{transform:scaleX(1)}
.nnum{font-family:var(--fd);font-size:4rem;font-weight:800;letter-spacing:-.06em;line-height:1;color:transparent;-webkit-text-stroke:1px var(--br2);margin-bottom:1.5rem;user-select:none}
.ntit{font-family:var(--fd);font-size:1rem;font-weight:700;color:var(--t);margin-bottom:.7rem}
.ntx{font-size:.87rem;color:var(--t2);line-height:1.68}
.ntl{display:grid;grid-template-columns:repeat(4,1fr);margin-top:3rem;padding:2rem 1.5rem;background:var(--bgc);border:1px solid var(--br);border-radius:12px;position:relative}
.ntl::before{content:'';position:absolute;top:calc(2rem + 16px);left:calc(12.5% + 16px);right:calc(12.5% + 16px);height:1px;background:linear-gradient(90deg,var(--a),rgba(255,208,0,.12));z-index:0}
.ntli{text-align:center;position:relative;z-index:1}
.ntldot{width:32px;height:32px;border-radius:50%;margin:0 auto .8rem;display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-size:.6rem;font-weight:500}
.ntldot.now{background:var(--a);color:#080808;box-shadow:0 0 20px rgba(255,208,0,.45)}
.ntldot.soon{background:var(--bgc2);border:1px solid var(--br2);color:var(--t2)}
.ntldot.late{background:var(--bg);border:1px solid var(--br);color:var(--t3)}
.ntll{font-family:var(--fm);font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.25rem}
.ntls{font-size:.77rem;color:var(--t2);line-height:1.45;padding:0 .25rem}

/* BLOCK 7 */
#trust{background:var(--bg2)}
.tlay{display:grid;grid-template-columns:1fr 1.45fr;gap:5rem;align-items:start}
@media(max-width:900px){.tlay{grid-template-columns:1fr;gap:3rem}}
.tquote{position:relative;padding:2.5rem;border:1px solid rgba(255,208,0,.18);border-radius:16px;background:var(--bgc)}
.tquote::before{content:'\\201C';position:absolute;top:-.6rem;left:1.75rem;font-family:var(--fs);font-size:4.5rem;color:var(--a);line-height:1;opacity:.45}
.tqtx{font-family:var(--fs);font-style:italic;font-size:1.06rem;line-height:1.76;color:var(--t);margin-bottom:1.5rem}
.tqau{font-family:var(--fm);font-size:.63rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t2)}
.eras{margin-top:1.75rem;padding:1.5rem;background:var(--bgc2);border:1px solid var(--br);border-radius:10px}
.erastit{font-family:var(--fm);font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);margin-bottom:.9rem}
.erasrow{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:.5rem}
.erl,.err{padding:.85rem .95rem;border-radius:7px;font-size:.82rem;line-height:1.45}
.erl{background:rgba(255,255,255,.02);border:1px solid var(--br);color:var(--t2)}
.err{background:var(--ad);border:1px solid rgba(255,208,0,.2);color:var(--t)}
.erlbl{font-family:var(--fm);font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:.35rem}
.erarr{color:var(--a);font-size:.9rem;flex-shrink:0}
.tpts{display:flex;flex-direction:column;gap:1.65rem}
.tpt{display:flex;gap:1.4rem;align-items:flex-start}
.tpico{width:42px;height:42px;border-radius:10px;background:var(--ad);border:1px solid rgba(255,208,0,.2);display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0}
.tptit{font-family:var(--fd);font-size:.93rem;font-weight:700;color:var(--t);margin-bottom:.3rem}
.tptx{font-size:.86rem;color:var(--t2);line-height:1.62}

/* BLOCK 8 */
.mhead{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:start;margin-bottom:4.5rem}
@media(max-width:900px){.mhead{grid-template-columns:1fr;gap:2rem;margin-bottom:3rem}}
.tltrack{display:flex;align-items:flex-start;position:relative;margin-bottom:2rem}
.tltrack::before{content:'';position:absolute;top:20px;left:20px;right:20px;height:1px;background:linear-gradient(90deg,var(--a) 0%,rgba(255,208,0,.15) 100%);z-index:0}
.tlst{flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;z-index:1;padding:0 .6rem;cursor:pointer}
.tldt{width:40px;height:40px;border-radius:50%;border:2px solid rgba(255,208,0,.28);background:var(--bg);display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-size:.68rem;color:var(--a);transition:background .25s,border-color .25s,box-shadow .25s,color .25s;margin-bottom:.85rem}
.tlst.act .tldt,.tlst:hover .tldt{background:var(--a);color:#080808;border-color:var(--a);box-shadow:0 0 24px rgba(255,208,0,.4)}
.tlstit{font-family:var(--fd);font-size:.76rem;font-weight:700;color:var(--t2);transition:color .25s;line-height:1.3;margin-bottom:.25rem}
.tlst.act .tlstit,.tlst:hover .tlstit{color:var(--t)}
.tldur{font-family:var(--fm);font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}
.tlcon{background:var(--bgc);border:1px solid var(--br);border-radius:12px;padding:2.25rem 2.5rem;min-height:160px;position:relative;overflow:hidden}
.tlcon::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--a)}
.tlp{display:none}
.tlp.act{display:block;animation:slin .38s var(--ease)}
@keyframes slin{from{opacity:0;transform:translateX(10px)}to{opacity:1;transform:none}}
.tlpdur{font-family:var(--fm);font-size:.63rem;letter-spacing:.1em;text-transform:uppercase;color:var(--a);opacity:.8;margin-bottom:.65rem}
.tlptit{font-family:var(--fd);font-size:1.08rem;font-weight:700;color:var(--t);margin-bottom:.5rem}
.tlptx{font-size:.92rem;color:var(--t2);line-height:1.66;margin-bottom:1rem}
.tlpdel{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--fm);font-size:.7rem;color:var(--t3);padding:.48rem .85rem;background:var(--bg);border:1px solid var(--br);border-radius:5px}
.tlpdel span{color:var(--a)}

/* BLOCK 9 */
#vsmarket{background:var(--bg2)}
.vstable-wrap{margin-top:3rem;overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:14px;border:1px solid var(--br)}
.vstable{min-width:520px;border-radius:0;overflow:hidden}
.vshead{display:grid;grid-template-columns:1.2fr 1fr 1.1fr;background:var(--bgc2);border-bottom:1px solid var(--br)}
.vsh{padding:.85rem 1rem;font-family:var(--fd);font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.vsh.cr{color:var(--t3)}.vsh.th{color:var(--t3)}.vsh.me2{color:var(--a)}
.vsrow{display:grid;grid-template-columns:1.2fr 1fr 1.1fr;border-bottom:1px solid var(--br);transition:background .2s}
.vsrow:last-child{border-bottom:none}
.vsrow:hover{background:rgba(255,208,0,.018)}
.vsc{padding:.9rem 1rem;font-size:.8rem;line-height:1.5;word-break:break-word}
.vsc.cr{font-family:var(--fd);font-size:.76rem;font-weight:700;color:var(--t2);border-right:1px solid var(--br)}
.vsc.th{color:var(--t3);border-right:1px solid var(--br)}
.vsc.me{color:var(--t)}

/* BLOCK 10 */
.hlay{display:grid;grid-template-columns:1.2fr 1fr;gap:6rem;align-items:start}
@media(max-width:900px){.hlay{grid-template-columns:1fr;gap:3rem}}
.hplist{display:flex;flex-direction:column;gap:.9rem}
.hpr{padding:1.5rem 1.75rem;border-left:3px solid transparent;background:var(--bgc);border-radius:0 10px 10px 0;transition:border-color .3s,padding-left .3s var(--ease),background .25s}
.hpr:hover{border-left-color:var(--a);padding-left:2.25rem;background:var(--bgc2)}
.hptit{font-family:var(--fd);font-size:.92rem;font-weight:700;color:var(--t);margin-bottom:.3rem}
.hptx{font-size:.85rem;color:var(--t2);line-height:1.62}
.hfor{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:2.25rem}
.hfortit{font-family:var(--fm);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:1.2rem}
.hfortit.no{color:var(--t3)}.hfortit.yes{color:var(--a)}
.hflist{display:flex;flex-direction:column;gap:.55rem;margin-bottom:1.75rem}
.hfno{display:flex;align-items:flex-start;gap:.75rem;padding:.75rem 1rem;border:1px solid var(--br);border-radius:8px;font-size:.84rem;color:var(--t3);line-height:1.45}
.hfno::before{content:'✕';font-family:var(--fd);font-size:.7rem;font-weight:700;color:#333;flex-shrink:0;margin-top:.08rem;width:16px}
.hfyes{display:flex;gap:.75rem;align-items:flex-start;font-size:.87rem;color:var(--t);line-height:1.48;padding:.4rem 0}
.hfyes span:first-child{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:var(--ad);border:1px solid rgba(255,208,0,.3);color:var(--a);font-size:.7rem;font-weight:800;flex-shrink:0;margin-top:.06rem}

/* CASES */
.cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
@media(max-width:900px){.cgrid{grid-template-columns:1fr}}
.ccard{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:2rem;transition:border-color .25s,transform .3s var(--ease),box-shadow .3s;position:relative;overflow:hidden}
.ccard::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--cc,var(--a))}
.ccard:hover{border-color:rgba(255,255,255,.1);transform:translateY(-6px);box-shadow:0 30px 80px rgba(0,0,0,.45)}
.ctag{font-family:var(--fm);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:.9rem}
.ctit{font-family:var(--fd);font-size:1.02rem;font-weight:700;color:var(--t);margin-bottom:.5rem;line-height:1.3}
.csub{font-size:.84rem;color:var(--t2);line-height:1.56;margin-bottom:1.5rem}
.cress{display:flex;flex-direction:column;gap:.4rem}
.cres{display:flex;align-items:center;gap:.6rem;font-family:var(--fm);font-size:.7rem;color:var(--t2);padding:.38rem .65rem;background:rgba(255,255,255,.025);border-radius:4px}
.cres strong{color:var(--a)}
.cold{margin-top:1.5rem;padding:1.4rem 2rem;background:var(--bgc);border:1px solid var(--br);border-radius:10px;display:flex;align-items:center;gap:2rem}
@media(max-width:640px){.cold{flex-direction:column;align-items:flex-start;gap:1rem}}
.coldtag{font-family:var(--fm);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);white-space:nowrap}
.coldtx{font-size:.86rem;color:var(--t2);line-height:1.55}

/* OFFER */
#offer{position:relative;overflow:hidden}
#offer::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 80% 55% at 50% 108%,rgba(255,208,0,.06),transparent)}
.ofin{max-width:860px;margin:0 auto;text-align:center;position:relative;z-index:2}
.ofh2{font-family:var(--fd);font-size:clamp(2.3rem,5vw,4.8rem);font-weight:800;letter-spacing:-.045em;line-height:1.04;margin-bottom:1.25rem}
.ofsub{font-size:1.02rem;color:var(--t2);margin-bottom:3rem;max-width:460px;margin-left:auto;margin-right:auto;line-height:1.76}
.ofcard{background:var(--bgc);border:1px solid rgba(255,208,0,.2);border-radius:18px;padding:2.75rem;margin-bottom:2.5rem;text-align:left;position:relative;overflow:hidden}
.ofcard::before{content:'';position:absolute;inset:0;border-radius:18px;pointer-events:none;background:radial-gradient(ellipse 70% 45% at 50% 0%,rgba(255,208,0,.04),transparent)}
.ofgrid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:2rem}
@media(max-width:640px){.ofgrid{grid-template-columns:1fr}}
.ofit{display:flex;align-items:flex-start;gap:.75rem;padding:.85rem;background:rgba(255,255,255,.02);border-radius:8px;border:1px solid var(--br)}
.ofck{color:var(--a);flex-shrink:0;margin-top:.1rem}
.ofitx{font-size:.88rem;color:var(--t);line-height:1.42}
.ofitx span{display:block;font-size:.76rem;color:var(--t2);margin-top:.18rem}
.ofmeta{display:flex;gap:2rem;padding-top:1.75rem;border-top:1px solid var(--br);flex-wrap:wrap}
.ofml{font-family:var(--fm);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);margin-bottom:.3rem}
.ofmv{font-family:var(--fd);font-size:.96rem;font-weight:700;color:var(--t)}
.ofcta{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}

/* FOOTER */
footer{background:#040404;padding:4.5rem 0 2rem;border-top:1px solid var(--br);position:relative;overflow:hidden}
.fwm{position:absolute;bottom:-.05em;right:-.02em;font-family:var(--fd);font-size:clamp(9rem,22vw,20rem);font-weight:800;letter-spacing:-.07em;color:rgba(255,255,255,.01);user-select:none;pointer-events:none;line-height:1}
.fgrid{display:grid;grid-template-columns:1.8fr 1fr 1fr;gap:4rem;margin-bottom:4rem}
@media(max-width:900px){.fgrid{grid-template-columns:1fr 1fr;gap:2.5rem}}
@media(max-width:640px){.fgrid{grid-template-columns:1fr}}
.flogo{font-family:var(--fd);font-size:1.4rem;font-weight:800;letter-spacing:-.03em;background:var(--metal);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem}
.ftag{font-size:.87rem;color:var(--t2);line-height:1.65;max-width:270px;margin-bottom:1.5rem}
.fsoc{display:flex;gap:.75rem}
.fsi{width:34px;height:34px;border:1px solid var(--br);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.78rem;color:var(--t2);text-decoration:none;transition:border-color .2s,color .2s}
.fsi:hover{border-color:rgba(255,208,0,.3);color:var(--a)}
.fch{font-family:var(--fd);font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:1.2rem}
.fls{list-style:none;display:flex;flex-direction:column;gap:.52rem}
.fls a{font-size:.86rem;color:var(--t2);text-decoration:none;transition:color .2s}
.fls a:hover{color:var(--t)}
.fbot{display:flex;justify-content:space-between;align-items:center;padding-top:2rem;border-top:1px solid #0f0f0f;flex-wrap:wrap;gap:.75rem}
.fcp,.fea{font-family:var(--fm);font-size:.66rem;color:var(--t3);letter-spacing:.04em}
.fea span{color:var(--a)}

/* фикс: якоря не перекрываются фиксированным навом */
section[id]{scroll-margin-top:76px}

/* Внедрение NCAi за 30 дней: мелкие правки под новый контент */
.tlcon{min-height:190px}
@media(max-width:640px){.tlcon{min-height:auto}}
/* Внедрение NCAi за 30 дней: мелкие правки под новый контент */
.tlcon{min-height:190px}
@media(max-width:640px){.tlcon{min-height:auto}}
/* NEW · 10-блочная продающая структура */
.pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem}
@media(max-width:900px){.pr-grid{grid-template-columns:1fr}}
.pr{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:2rem;position:relative;overflow:hidden;transition:border-color .25s,transform .3s var(--ease)}
.pr:hover{border-color:var(--trb);transform:translateY(-4px)}
.pr-n{font-family:var(--fm);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--tr);margin-bottom:.8rem}
.pr-t{font-family:var(--fd);font-size:1.02rem;font-weight:700;color:var(--t);margin-bottom:.6rem}
.pr-x{font-size:.87rem;color:var(--t2);line-height:1.62}
.w-row{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:2.5rem;align-items:start}
@media(max-width:800px){.w-row{grid-template-columns:1fr}}
.w-col{background:var(--bgc);border:1px solid var(--br);border-radius:14px;padding:1.75rem 2rem}
.w-col-tag{font-family:var(--fm);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1rem}
.w-li{display:flex;gap:.85rem;padding:.65rem 0;font-size:.9rem;color:var(--t2);line-height:1.55;border-bottom:1px solid var(--br)}
.w-li:last-child{border-bottom:none}
.w-li b{color:var(--t);font-weight:600}
.w-ico{flex-shrink:0;margin-top:.05rem;color:var(--tr);font-family:var(--fd);font-weight:700}
.bigidea{margin-top:2.5rem;padding:2rem 2.25rem;border:1px solid var(--trb);border-radius:14px;background:var(--trd);position:relative}
.bigidea-tag{font-family:var(--fm);font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--tr);margin-bottom:.7rem}
.bigidea-tx{font-family:var(--fd);font-size:clamp(1.15rem,2.2vw,1.6rem);font-weight:800;line-height:1.3;letter-spacing:-.02em}
.qgrid{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:2.5rem}
@media(max-width:800px){.qgrid{grid-template-columns:1fr}}
.qcard{background:var(--bgc);border:1px solid var(--br);border-radius:12px;padding:1.5rem 1.75rem;transition:border-color .25s}
.qcard:hover{border-color:var(--trb)}
.qtag{font-family:var(--fm);font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.6rem}
.qtag.e{color:var(--tr)}.qtag.l{color:var(--a)}
.qq{font-family:var(--fd);font-size:.98rem;font-weight:700;color:var(--t);line-height:1.35;margin-bottom:.5rem}
.qa{font-size:.85rem;color:var(--t2);line-height:1.55}
.obj{display:grid;grid-template-columns:1fr 2fr;gap:1.5rem;padding:1.5rem 1.75rem;border:1px solid var(--br);border-radius:12px;background:var(--bgc);margin-top:1rem;transition:border-color .25s}
.obj:hover{border-color:var(--trb)}
@media(max-width:700px){.obj{grid-template-columns:1fr;gap:.6rem}}
.obj-q{font-family:var(--fd);font-size:1.02rem;font-weight:700;color:var(--t);line-height:1.3}
.obj-q::before{content:'«'}
.obj-a{font-size:.9rem;color:var(--t2);line-height:1.6}
.obj-a b{color:var(--t);font-weight:600}
.meta4{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-bottom:2rem}
@media(max-width:640px){.meta4{grid-template-columns:1fr 1fr}}
.m4{background:var(--bgc2);border:1px solid var(--br);border-radius:10px;padding:1rem 1.1rem}
.m4-l{font-family:var(--fm);font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);margin-bottom:.35rem}
.m4-v{font-family:var(--fd);font-size:.9rem;font-weight:700;color:var(--t);line-height:1.35}
.amp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem;margin-top:2rem}
@media(max-width:640px){.amp-grid{grid-template-columns:1fr}}
.amp{background:var(--bgc);border:1px solid var(--br);border-radius:12px;padding:1.5rem;display:flex;gap:1rem;align-items:flex-start}
.amp-ico{font-size:1.3rem;flex-shrink:0}
.amp-t{font-family:var(--fd);font-size:.95rem;font-weight:700;color:var(--t);margin-bottom:.35rem}
.amp-x{font-size:.85rem;color:var(--t2);line-height:1.55}
`;

export const body = `<div id="cd"></div><div id="cr"></div>
<div id="prog"></div>

<nav id="nav">
  <div class="ni">
    <a href="/" class="logo">NCAi</a>
    <ul class="nl">
      <li><a href="/consulting">Внедрение</a></li>
      <li><a href="/ai-training">Обучение AI</a></li>
      <li><a href="/book">Книга</a></li>
      <li><a href="/agency-in-a-box">Агентство в коробке</a></li>
      <li><a href="/portfolio">Портфолио</a></li>
    </ul>
    <a href="mailto:ilya.novitskii@yandex.ru" class="nc">Написать</a>
  </div>
</nav>

<!-- HERO · ТИЗЕРНЫЙ ХУК -->
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
<hr class="dv">

<!-- 1 · БОЛЬШАЯ ИДЕЯ -->
<section id="idea">
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
<hr class="dv">

<!-- 2 · СУТЬ ИДЕИ -->
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
<hr class="dv">

<!-- 3 · УНИКАЛЬНЫЙ МЕХАНИЗМ -->
<section id="gets">
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
<hr class="dv">

<!-- 4 · МЕХАНИЗМ: 30 ДНЕЙ -->
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
      <div class="tlp"><div class="tlpdur">Неделя 4 · передача руля</div><div class="tlptit">Вы самостоятельны</div><p class="tlptx">Вы сами ставите задачи и смотрите финансы без участия внедренца. Знаете, куда писать при проблеме. Цель — передать руль, а не держать за руку. Система остаётся — зависимость уходит.</p><div class="tlpdel"><span>→</span> Агентство работает без вас</div></div>
    </div>
  </div>
</section>
<hr class="dv">

<!-- 5 · МЕХАНИЗМ: РАСПАКОВКА 90 МИН -->
<section id="steps">
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
<hr class="dv">

<!-- 6 · 10 ВОПРОСОВ -->
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
<hr class="dv">

<!-- 7 · ВОЗРАЖЕНИЯ -->
<section id="objections">
  <div class="w">
    <span class="lb rv">Возражения</span>
    <h2 class="sh2 rv d1">«Да, но...» — и почему это не аргумент</h2>
    <p class="sl rv d2">Самые частые сомнения перед внедрением. Разберём каждое по очереди.</p>
    <div class="obj rv d1"><div class="obj-q">Это робот, я ему не доверяю</div><div class="obj-a">За системой стоит живой человек — архитектор, которому можно написать в любой момент. Цифровые сотрудники работают по вашему регламенту и под вашим контролем.</div></div>
    <div class="obj rv d1"><div class="obj-q">У меня нет базы клиентов</div><div class="obj-a">На распаковке заводим 10 тёплых контактов для старта. База — топливо системы, и её можно собрать за первую неделю.</div></div>
    <div class="obj rv d1"><div class="obj-q">Я не технарь, панель не осилю</div><div class="obj-a">Панель — это Telegram Mini App: ставить задачи и смотреть финансы проще, чем вести таблицу в Excel. 90 минут на сессии вы во всём разберётесь.</div></div>
    <div class="obj rv d2"><div class="obj-q">Уже пробовали автоматизацию — не взлетело</div><div class="obj-a">Разница в подходе: не «подключили бота», а построили агентство с ролями, базой знаний и правом на действие. Плюс передача руля, а не зависимость.</div></div>
    <div class="obj rv d2"><div class="obj-q">Дорого, это же подписка каждый месяц</div><div class="obj-a">Сравните: найм отдела — 150–250 тыс ₽/мес. Подписка — от 2 900 ₽. Это 2–5% от стоимости найма за команду, которая работает 24/7.</div></div>
    <div class="obj rv d2"><div class="obj-q">А если мне не понравится?</div><div class="obj-a">14 дней trial после распаковки — вы видите продукт в действии до того, как платить за подписку. Решение принимаете по факту, а не по обещаниям.</div></div>
  </div>
</section>
<hr class="dv">

<!-- 8 · ОФФЕР -->
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
        <a href="/agency-in-a-box" class="bs">Читать «Агентство в коробке»</a>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<!-- 9 · УСИЛИТЕЛИ -->
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
<hr class="dv">

<!-- 10 · КЕЙСЫ / ПРИМЕР -->
<section id="cases">
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
<hr class="dv">

<!-- CTA -->
<section id="final" style="position:relative;overflow:hidden">
  <div class="ofin">
    <h2 class="ofh2 rv">Хватит быть человеком-системой.<br>Получите <em style="font-style:normal;color:var(--a)">агентство в коробке.</em></h2>
    <p class="ofsub rv d1">30 дней — и у вас рабочее агентство, которое не болеет и не увольняется. Передаю руль — зависимость уходит.</p>
    <div class="ofcta rv d2">
      <a href="mailto:ilya.novitskii@yandex.ru" class="bp" style="font-size:.92rem;padding:1rem 2.25rem">Написать напрямую <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="/ai-training" class="bs">Сравнить с обучением AI</a>
    </div>
    <div class="final-alt" style="font-family:var(--fm);font-size:.68rem;color:var(--t3);margin-top:1.5rem">Вопросы? <a href="mailto:ilya.novitskii@yandex.ru" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">ilya.novitskii@yandex.ru</a> или <a href="https://t.me/Ilya_novator" target="_blank" rel="noopener noreferrer" style="color:var(--t2);text-decoration:none;border-bottom:1px solid var(--br2)">Telegram</a></div>
  </div>
</section>

<footer>
  <div class="fwm">NCAi</div>
  <div class="w" style="position:relative;z-index:2">
    <div class="fgrid">
      <div>
        <div class="flogo">NCAi</div>
        <p class="ftag">Архитектор систем. Нейромаркетинг, AI-автоматизация и агентства в коробке для тех, кто строит бизнес серьёзно.</p>
        <div class="fsoc"><a href="https://t.me/Ilya_novator" class="fsi" target="_blank" rel="noopener noreferrer">✈</a><a href="mailto:ilya.novitskii@yandex.ru" class="fsi">✉</a></div>
      </div>
      <div>
        <div class="fch">Книга</div>
        <ul class="fls">
          <li><a href="/book/1-1-kognitivnye-lovushki">Гл. 1 — Нейромаркетинг</a></li>
          <li><a href="/book/2-1-produktovaya-matrica">Гл. 2 — Инженерия систем</a></li>
          <li><a href="/book/3-1-fiziologiya-uderzhaniya">Гл. 3 — Синтез доверия</a></li>
          <li><a href="/book/4-1-anatomiya-kreativa">Гл. 4 — Трафик</a></li>
          <li><a href="/book/5-1-algoritm-vs-chelovek">Гл. 5 — Автоматизация</a></li>
          <li><a href="/book/6-1-cifrovye-sotrudniki">Гл. 6 — Автономный разум</a></li>
        </ul>
      </div>
      <div>
        <div class="fch">Продукты</div>
        <ul class="fls">
          <li><a href="/consulting">Внедрение NCAi · 30 дней</a></li>
          <li><a href="/ai-training">Обучение AI</a></li>
          <li><a href="/agency-in-a-box">Агентство в коробке</a></li>
          <li><a href="/portfolio">Портфолио</a></li>
        </ul>
      </div>
    </div>
    <div class="fbot">
      <span class="fcp">© 2025 NCAi. Все права защищены.</span>
      <span class="fea">Сделано через лайф-кодинг — <span>как обещано</span></span>
    </div>
  </div>
</footer>`;

export const js = `const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.wi,.tlst').forEach(el=>{el.addEventListener('mouseenter',()=>cr.classList.add('ex'));el.addEventListener('mouseleave',()=>cr.classList.remove('ex'))});
}
const nav=document.getElementById('nav'),prog=document.getElementById('prog');
window.addEventListener('scroll',()=>{nav.classList.toggle('sc',window.scrollY>40);prog.style.width=Math.min(window.scrollY/(document.body.scrollHeight-innerHeight)*100,100)+'%'},{passive:true});
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
document.querySelectorAll('.cnt').forEach(el=>{
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const to=+el.dataset.to;let s=null;(function f(t){if(!s)s=t;const p=Math.min((t-s)/1500,1);el.textContent=Math.round((1-Math.pow(1-p,3))*to);if(p<1)requestAnimationFrame(f)})(performance.now());io.unobserve(el)})},{threshold:.6});
  io.observe(el);
});
const tls=document.querySelectorAll('.tlst'),tlps=document.querySelectorAll('.tlp');
tls.forEach(s=>s.addEventListener('click',()=>{const i=+s.dataset.s;tls.forEach(x=>x.classList.remove('act'));tlps.forEach(x=>x.classList.remove('act'));s.classList.add('act');tlps[i].classList.add('act')}));
document.querySelectorAll('.wi').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.wi').forEach(x=>x.classList.remove('act'));item.classList.add('act')}));
const hboxes=[document.getElementById('hb0'),document.getElementById('hb1'),document.getElementById('hb2'),document.getElementById('hb3'),document.getElementById('hb4'),document.getElementById('hb5')].filter(Boolean);
let hbi=0;
setInterval(()=>{hboxes.forEach(b=>b.classList.remove('lit'));hboxes[hbi%hboxes.length].classList.add('lit');hbi++},1100);`;
