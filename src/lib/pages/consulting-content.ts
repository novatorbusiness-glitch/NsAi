// Автогенерировано из doc_9bc2c3b323f1_consulting.html. Не редактировать вручную.
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
`;

export const body = `
<div id="cd"></div><div id="cr"></div>
<div id="prog"></div>

<nav id="nav">
  <div class="ni">
    <a href="/" class="logo">NCAi</a>
    <ul class="nl"><li><a href="#mechanism">Метод</a></li><li><a href="#cases">Кейсы</a></li><li><a href="/book">Книга</a></li></ul>
    <a href="#offer" class="nc">Обсудить проект</a>
  </div>
</nav>

<section id="hero">
  <canvas id="pcanvas"></canvas>
  <div class="hgrid"></div><div class="hgl"></div>
  <div class="hleft">
    <div class="hew"><span class="hdot"></span>Архитектор систем · AI-консалтинг</div>
    <h1 class="hh1">Я захожу<br>в проект <em>мозгами.</em><span class="acc">Система остаётся.</span></h1>
    <p class="hsub">Вхожу в команду заказчика — вместе строим маркетинговую систему, AI-автоматизацию и продукт. Лайф-кодинг: видите каждое решение. Ухожу — зависимости нет.</p>
    <div class="hacts">
      <a href="#offer" class="bp">Обсудить проект <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a href="#mechanism" class="bs">Как это работает</a>
    </div>
    <div class="hstats">
      <div class="hstat"><div class="hstatn"><span class="cnt" data-to="300">0</span><span class="sfx">+</span></div><div class="hstatl">Кейсов всего</div></div>
      <div class="hstat"><div class="hstatn"><span class="cnt" data-to="7">0</span><span class="sfx">лет</span></div><div class="hstatl">В маркетинге и автоматизации</div></div>
      <div class="hstat"><div class="hstatn">2–3<span class="sfx">мес</span></div><div class="hstatl">Длительность работы</div></div>
      <div class="hstat"><div class="hstatn"><span class="cnt" data-to="100">0</span><span class="sfx">%</span></div><div class="hstatl">Прозрачность процесса</div></div>
    </div>
  </div>
  <div class="hright">
    <div class="hcard">
      <div class="hctop"><div class="hcdot"></div><div class="hctitle">NCAi · <span>архитектура системы</span></div></div>
      <div class="hsys">
        <div class="hsys-row">
          <div class="hbox lit" id="hb0">Нейромаркетинг<br>+ смыслы</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb1">Сайт / Лендинг<br>liveCode</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb2">AI-агенты<br>автоматизация</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb3">Воронка<br>+ аналитика</div>
        </div>
        <div class="hsys-conn"><div class="hsys-line"></div></div>
        <div class="hsys-row">
          <div class="hbox" id="hb4">Трафик<br>и контент</div>
          <div class="harr">→</div>
          <div class="hbox" id="hb5">Документация<br>→ передача</div>
        </div>
      </div>
      <div class="hccap">building system.architecture<span class="cur">▌</span></div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="unique">
  <div class="w">
    <div class="uw">
      <div>
        <div class="ugh rv">01</div>
        <span class="lb rv d1">Уникальность</span>
        <h2 class="uh2 rv d1">Я не строю маркетинг.<br>Я строю системы,<br>которые его делают.</h2>
        <p class="up rv d2">Пока агентства пишут отчёты, а консультанты строят презентации — <strong>я работаю рядом с вашей командой</strong>. Каждое решение в реальном времени. Каждая строка кода — с объяснением зачем.</p>
        <p class="up rv d2">Когда ухожу — у вас <strong>не зависимость от подрядчика</strong>. Работающая система и команда, которая понимает как она устроена.</p>
      </div>
      <div class="rv d2">
        <div class="ucmp">
          <div class="urow"><div class="uchead bad">Обычный подрядчик</div><div class="uchead good">NCAi</div></div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Чёрный ящик. Результат без объяснений</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Лайф-кодинг: каждое решение на ваших глазах</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>AI прикручен сверху — ChatGPT для текстов</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>AI — несущая архитектура с первой строки</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>Ушёл — всё встало. Знания у подрядчика</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Цель — уйти и не быть нужным. Система остаётся</div>
          </div>
          <div class="urow">
            <div class="uc bad"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="#e84040" stroke-width="1.5" stroke-linecap="round"/></svg>«Так принято», «у конкурентов так»</div>
            <div class="uc good"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3L10 2" stroke="#FFD000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Нейромаркетинг + данные. Всё объяснено</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="benefit">
  <div class="w">
    <span class="lb rv">Выгода</span>
    <h2 class="sh2 rv d1">Что меняется<br>после работы</h2>
    <p class="sl rv d2">Не «улучшение показателей». Конкретные трансформации — было / стало.</p>
    <div class="bgrid rv d2">
      <div class="bcard"><div class="btag">Маркетинговая система</div><p class="bbf">Запускаете рекламу — трафик идёт, заявок нет. Непонятно где теряется каждый рубль</p><div class="barr"><svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5h11M8 1l4 3.5L8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>После</div><p class="baf">Воронка с аналитикой: видите где теряется каждый рубль и знаете как это починить</p></div>
      <div class="bcard"><div class="btag">Операционка</div><p class="bbf">Держите всё в голове. Операционка съедает день — на стратегию времени не остаётся</p><div class="barr"><svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5h11M8 1l4 3.5L8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>После</div><p class="baf">AI-агенты обрабатывают рутину 24/7. Вы занимаетесь только решениями, которые нельзя автоматизировать</p></div>
      <div class="bcard"><div class="btag">Зависимость от подрядчиков</div><p class="bbf">Объясняете задачу — получаете не то. Платите снова. Ушёл человек — всё встало</p><div class="barr"><svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M1 4.5h11M8 1l4 3.5L8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>После</div><p class="baf">Команда понимает систему изнутри. Развиваете сами или с кем угодно — без зависимости</p></div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="proof">
  <div class="w">
    <span class="lb rv">Механика оффера</span>
    <h2 class="sh2 rv d1">Почему одни предложения<br>покупают сразу, а другие — нет</h2>
    <p class="sl rv d2">Это формула. И каждый блок этой страницы работает на одну из переменных.</p>
    <div class="fvis rv d2" id="fvisEl">
      <div class="fvlbl">Формула мощного оффера — Хормози · применяю в каждом проекте</div>
      <div class="frow"><div class="fcel"><div class="fval pos">Результат мечты</div><div class="fkey">что клиент хочет получить</div></div><div class="fop">×</div><div class="fcel"><div class="fval pos">Вероятность достижения</div><div class="fkey">насколько он верит что это произойдёт</div></div></div>
      <hr class="fline">
      <div class="frow"><div class="fcel"><div class="fval neg">Задержка по времени</div><div class="fkey">как долго ждать первого результата</div></div><div class="fop">×</div><div class="fcel"><div class="fval neg">Усилия и жертвы</div><div class="fkey">что нужно сделать чтобы получить результат</div></div></div>
      <div class="fbars">
        <div class="fbi"><div class="fblbl">Результат ↑</div><div class="fbtrack"><div class="fbfill" data-w="92"></div></div><div class="fbnote">Блоки 1–3<br>на этой странице</div></div>
        <div class="fbi"><div class="fblbl">Вероятность ↑</div><div class="fbtrack"><div class="fbfill" data-w="78"></div></div><div class="fbnote">Кейсы<br>и механизм</div></div>
        <div class="fbi"><div class="fblbl">Время ↓</div><div class="fbtrack"><div class="fbfill" data-w="85"></div></div><div class="fbnote">MVP за 2–3<br>недели</div></div>
        <div class="fbi"><div class="fblbl">Усилия ↓</div><div class="fbtrack"><div class="fbfill" data-w="70"></div></div><div class="fbnote">Лайф-кодинг<br>и документация</div></div>
      </div>
    </div>
    <div class="srow rv d3">
      <div class="scard"><div class="snum">×2.1</div><div class="slbl">Рост выручки без роста бюджета</div></div>
      <div class="scard"><div class="snum">−80%</div><div class="slbl">Потерянных лидов после внедрения</div></div>
      <div class="scard"><div class="snum">8.3%</div><div class="slbl">Конверсия лендинга на холодный трафик</div></div>
      <div class="scard"><div class="snum">3 нед</div><div class="slbl">От идеи до живого AI-продукта</div></div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="why">
  <div class="w">
    <div class="wlay">
      <div>
        <span class="lb rv">Диагностика</span>
        <h2 class="sh2 rv d1">Почему<br>не получается</h2>
        <p class="sl rv d2" style="margin-bottom:0">Причина редко там, где кажется. Нажмите — узнайте диагноз.</p>
        <div class="funnelw rv d3">
          <svg viewBox="0 0 280 270" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fl1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".85"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".3"/></linearGradient>
              <linearGradient id="fl2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".55"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".15"/></linearGradient>
              <linearGradient id="fl3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".32"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".08"/></linearGradient>
              <linearGradient id="fl4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFD000" stop-opacity=".16"/><stop offset="100%" stop-color="#FFD000" stop-opacity=".04"/></linearGradient>
            </defs>
            <path d="M8 8 L272 8 L232 60 L48 60 Z" fill="url(#fl1)" stroke="rgba(255,208,0,.3)" stroke-width="1"/>
            <text x="140" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.7)">Трафик · 1000 чел</text>
            <path d="M48 66 L232 66 L202 116 L78 116 Z" fill="url(#fl2)" stroke="rgba(255,208,0,.2)" stroke-width="1"/>
            <text x="140" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.6)">Лиды · 400</text>
            <path d="M78 122 L202 122 L178 170 L102 170 Z" fill="url(#fl3)" stroke="rgba(255,208,0,.15)" stroke-width="1"/>
            <text x="140" y="150" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.5)">Интерес · 150</text>
            <path d="M102 176 L178 176 L160 222 L120 222 Z" fill="url(#fl4)" stroke="rgba(255,208,0,.1)" stroke-width="1"/>
            <text x="140" y="203" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="rgba(255,208,0,.4)">Продажи · 30</text>
            <g opacity=".85"><line x1="232" y1="34" x2="255" y2="34" stroke="#e84040" stroke-width="1.5" stroke-dasharray="3,2"/><text x="258" y="38" font-family="JetBrains Mono,monospace" font-size="8" fill="#e84040">−60%</text></g>
            <g opacity=".75"><line x1="202" y1="91" x2="225" y2="91" stroke="#e84040" stroke-width="1.5" stroke-dasharray="3,2"/><text x="228" y="95" font-family="JetBrains Mono,monospace" font-size="8" fill="#e84040">−25%</text></g>
            <g opacity=".65"><line x1="178" y1="146" x2="201" y2="146" stroke="#e84040" stroke-width="1.5" stroke-dasharray="3,2"/><text x="204" y="150" font-family="JetBrains Mono,monospace" font-size="8" fill="#e84040">−8%</text></g>
            <text x="140" y="250" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="rgba(255,255,255,.15)">где именно теряется — видно в аналитике</text>
          </svg>
        </div>
      </div>
      <div class="wdiag rv d2">
        <div class="wi act"><div class="wico">🔍</div><div><div class="wtit">Нет архитектуры — есть набор действий</div><div class="wtx">Трафик, лендинг, рассылка — всё по отдельности. Между ними нет логики. Это не система, это дорогой хаос.</div></div></div>
        <div class="wi"><div class="wico">🧱</div><div><div class="wtit">Копируете чужие воронки</div><div class="wtx">Воронка — не шаблон. Это отражение вашей бизнес-логики. Чужая не подходит по той же причине, что чужой костюм.</div></div></div>
        <div class="wi"><div class="wico">⚡</div><div><div class="wtit">AI прикручен, а не встроен</div><div class="wtx">ChatGPT для текстов — это не автоматизация. Разница как между электромобилем и бензиновым с доп. мотором.</div></div></div>
        <div class="wi"><div class="wico">🔌</div><div><div class="wtit">Знания в голове у подрядчика</div><div class="wtx">Ушёл один человек — всё встало. Система должна жить в документации, а не в голове исполнителя.</div></div></div>
        <div class="wi"><div class="wico">📊</div><div><div class="wtit">Смотрите не на те метрики</div><div class="wtx">Охваты и лайки — витамины. CPL и LTV — лекарства. Оптимизируете приятное, а не то что влияет на деньги.</div></div></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="enemy">
  <div class="w">
    <div class="elay">
      <div>
        <span class="lb rv">Общий враг</span>
        <h2 class="ebig rv d1">Иллюзия<br><span class="red">деятельности.</span></h2>
        <p class="ep rv d2">Главный враг — не конкуренты и не маленький бюджет. Это когда все заняты, деньги тратятся, что-то происходит — <strong>но системы нет</strong>.</p>
        <p class="ep rv d2">Без архитектуры любые действия — дорогой хаос. Причина не в плохих подрядчиках. Причина в отсутствии логики связей между элементами.</p>
      </div>
      <div>
        <p style="font-family:var(--fd);font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--t3);margin-bottom:1.25rem" class="rv">Узнаёте себя?</p>
        <div class="esyms">
          <div class="esym rv d1"><div class="epu"></div><p class="estx">Каждый месяц новая гипотеза — и каждый месяц «не зашло»</p></div>
          <div class="esym rv d1"><div class="epu"></div><p class="estx">Подрядчики заняты, но результата не видно</p></div>
          <div class="esym rv d2"><div class="epu"></div><p class="estx">Трафик есть — продаж нет. Непонятно почему</p></div>
          <div class="esym rv d2"><div class="epu"></div><p class="estx">Красивые отчёты, падающая выручка</p></div>
          <div class="esym rv d3"><div class="epu"></div><p class="estx">Постоянное «надо бы пересмотреть стратегию»</p></div>
          <div class="esym rv d3"><div class="epu"></div><p class="estx">Ключевые знания в голове одного человека</p></div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="now">
  <div class="w">
    <span class="lb rv">Почему сейчас</span>
    <h2 class="sh2 rv d1">Окно не закроется<br>завтра. Но закроется.</h2>
    <div class="ngrid">
      <div class="ncard rv"><div class="nnum">01</div><div class="ntit">AI меняет стоимость входа</div><p class="ntx">Инфраструктура, которая раньше стоила 3М и полгода, сегодня строится за 3 недели. Через год это станет стандартом. Сейчас — преимущество.</p></div>
      <div class="ncard rv d1"><div class="nnum">02</div><div class="ntit">Каждый день без системы считается</div><p class="ntx">Пока воронка не работает — блог не растёт, заявки не поступают, база не прогревается. Это не страшно. Но это считается.</p></div>
      <div class="ncard rv d2"><div class="nnum">03</div><div class="ntit">Первые получают больше</div><p class="ntx">В любой нише первые 20% компаний с AI-системами занимают позиции, которые потом очень дорого отвоёвывать у конкурентов.</p></div>
    </div>
    <div class="ntl rv d3">
      <div class="ntli"><div class="ntldot soon"><span style="font-size:.55rem">2022</span></div><div class="ntll" style="color:var(--t3)">Прошлое</div><div class="ntls">Агентства, подрядчики, ручной труд</div></div>
      <div class="ntli"><div class="ntldot now"><span style="font-size:.55rem">сейчас</span></div><div class="ntll" style="color:var(--a)">Сейчас</div><div class="ntls">AI + человек. Скорость × 10</div></div>
      <div class="ntli"><div class="ntldot soon"></div><div class="ntll" style="color:var(--t2)">Скоро</div><div class="ntls">AI-системы — новый минимум рынка</div></div>
      <div class="ntli"><div class="ntldot late"></div><div class="ntll" style="color:var(--t3)">2026+</div><div class="ntls">Без AI — не конкурент</div></div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="trust">
  <div class="w">
    <span class="lb rv">Доверие</span>
    <div class="tlay">
      <div>
        <div class="tquote rv">
          <p class="tqtx">Я прошёл обе эры. Строил маркетинговые системы до ChatGPT — и строю сейчас. Понимаю что изменилось, а что осталось неизменным. Нейробиология принятия решений не поменялась. Поменялась скорость и стоимость реализации.</p>
          <div class="tqau">— Основатель NCAi</div>
        </div>
        <div class="eras rv d2">
          <div class="erastit">Две эры — одна система мышления</div>
          <div class="erasrow">
            <div class="erl"><div class="erlbl">Классическая эра</div>15+ кейсов: воронки, лендинги, Email, запуски, SEO</div>
            <div class="erarr">→</div>
            <div class="err"><div class="erlbl">AI-эра</div>AI-системы, автоматизация, live-кодинг, агенты</div>
          </div>
        </div>
      </div>
      <div class="tpts rv d2">
        <div class="tpt"><div class="tpico">📖</div><div><div class="tptit">Книга как доказательство</div><p class="tptx">30 подглав — задокументированная методология. Читая книгу, видите как я думаю — до принятия решения о работе.</p></div></div>
        <div class="tpt"><div class="tpico">⚡</div><div><div class="tptit">Лайф-кодинг — никаких чёрных ящиков</div><p class="tptx">Весь процесс у вас на глазах: экран, код, решения в реальном времени. Понимаете как работает — не только что получили.</p></div></div>
        <div class="tpt"><div class="tpico">🎯</div><div><div class="tptit">15 кейсов до AI + 3 после</div><p class="tptx">Две эры — два набора инструментов. Понимание обеих изнутри. Разница — не в технологии, а в скорости.</p></div></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="mechanism">
  <div class="w">
    <div class="mhead">
      <div><span class="lb rv">Механизм</span><h2 class="sh2 rv d1">Как выглядят<br>2–3 месяца вместе</h2></div>
      <div><p class="rv d1" style="font-size:1rem;color:var(--t2);line-height:1.75;padding-top:1.2rem">Не «мы над этим работаем». Конкретные этапы, артефакты, сроки. Каждый шаг — с понятным результатом.</p></div>
    </div>
    <div class="tltrack rv d2">
      <div class="tlst act" data-s="0"><div class="tldt">01</div><div class="tlstit">Аудит</div><div class="tldur">1–2 нед</div></div>
      <div class="tlst" data-s="1"><div class="tldt">02</div><div class="tlstit">Фундамент</div><div class="tldur">2–4 нед</div></div>
      <div class="tlst" data-s="2"><div class="tldt">03</div><div class="tlstit">Запуск</div><div class="tldur">2–3 нед</div></div>
      <div class="tlst" data-s="3"><div class="tldt">04</div><div class="tlstit">Оптимизация</div><div class="tldur">3–4 нед</div></div>
      <div class="tlst" data-s="4"><div class="tldt">05</div><div class="tlstit">Передача</div><div class="tldur">1 нед</div></div>
    </div>
    <div class="tlcon rv d3">
      <div class="tlp act"><div class="tlpdur">1–2 недели</div><div class="tlptit">Аудит и архитектура системы</div><p class="tlptx">Разбираем текущую ситуацию: что есть, что работает, что нет. Проектируем архитектуру — воронка, контент, автоматизация. Вы видите карту системы до старта работ.</p><div class="tlpdel"><span>→</span> Документ архитектуры + карта системы</div></div>
      <div class="tlp"><div class="tlpdur">2–4 недели</div><div class="tlptit">Строим фундамент вместе</div><p class="tlptx">Создаём несущие элементы: сайт, воронка, базовая автоматизация. Всё — в прямом эфире с командой. Можно остановить, спросить, изменить решение прямо сейчас.</p><div class="tlpdel"><span>→</span> Работающий MVP системы</div></div>
      <div class="tlp"><div class="tlpdur">2–3 недели</div><div class="tlptit">Запускаем и смотрим на данные</div><p class="tlptx">Первые тесты, первые данные. Настраиваем аналитику, наблюдаем за цифрами, делаем первую итерацию. Не слепой запуск — управляемый эксперимент.</p><div class="tlpdel"><span>→</span> Данные первых 500–1000 пользователей</div></div>
      <div class="tlp"><div class="tlpdur">3–4 недели</div><div class="tlptit">Оптимизируем по данным</div><p class="tlptx">На основе реальных цифр улучшаем конверсию, дорабатываем слабые места, добавляем автоматизацию там, где она экономит максимум времени.</p><div class="tlpdel"><span>→</span> Оптимизированная воронка + отчёт по метрикам</div></div>
      <div class="tlp"><div class="tlpdur">1 неделя</div><div class="tlptit">Передача — вы самостоятельны</div><p class="tlptx">Документируем всё. Команда понимает каждый элемент. Можете развивать сами или с любым разработчиком. Я ухожу — система остаётся.</p><div class="tlpdel"><span>→</span> Документация + обучение команды + чеклист поддержки</div></div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="vsmarket">
  <div class="w">
    <span class="lb rv">Сравнение</span>
    <h2 class="sh2 rv d1">Как делают все.<br>Как делаю я.</h2>
    <div class="vstable-wrap rv d2">
      <div class="vstable">
        <div class="vshead"><div class="vsh cr">Критерий</div><div class="vsh th">Агентства / фрилансеры</div><div class="vsh me2">→ NCAi</div></div>
        <div class="vsrow"><div class="vsc cr">Прозрачность</div><div class="vsc th">Чёрный ящик. Результат через N недель</div><div class="vsc me">Лайф-кодинг: каждое решение у вас на глазах</div></div>
        <div class="vsrow"><div class="vsc cr">AI в работе</div><div class="vsc th">ChatGPT для текстов. Зовут «AI-автоматизацией»</div><div class="vsc me">AI — несущая архитектура с первой строки, не надстройка</div></div>
        <div class="vsrow"><div class="vsc cr">Результат</div><div class="vsc th">Набор задач без системной логики</div><div class="vsc me">Механизм с логикой, метриками и документацией</div></div>
        <div class="vsrow"><div class="vsc cr">После ухода</div><div class="vsc th">Без нас не поддержать — ретейнер навсегда</div><div class="vsc me">Команда понимает. Развивайте сами или с кем угодно</div></div>
        <div class="vsrow"><div class="vsc cr">Обоснование</div><div class="vsc th">«Нам кажется», «у конкурентов так»</div><div class="vsc me">Нейромаркетинг + данные. Каждое решение объяснено</div></div>
        <div class="vsrow"><div class="vsc cr">Скорость</div><div class="vsc th">3–6 мес на сайт. Год на «маркетинг»</div><div class="vsc me">MVP за 2–3 недели. Система за 2–3 месяца</div></div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="how">
  <div class="w">
    <div class="hlay">
      <div>
        <span class="lb rv">Принципы</span>
        <h2 class="sh2 rv d1">Как я работаю<br>и как нужно</h2>
        <p class="sl rv d2" style="margin-bottom:2rem">Это не слова для сайта. Правила, которые я не нарушаю ни с одним клиентом.</p>
        <div class="hplist">
          <div class="hpr rv"><div class="hptit">Система выше задач</div><p class="hptx">Каждое действие — элемент механизма. Не набор работ, а связанная архитектура с логикой роста.</p></div>
          <div class="hpr rv d1"><div class="hptit">Объяснение — часть работы</div><p class="hptx">Если клиент не понимает почему принято решение — я не выполнил работу. Лайф-кодинг — стандарт, не опция.</p></div>
          <div class="hpr rv d2"><div class="hptit">Цель — уйти</div><p class="hptx">Успех работы — когда я больше не нужен. Зависимость клиента от меня — это провал, а не бизнес-модель.</p></div>
          <div class="hpr rv d3"><div class="hptit">Данные, не интуиция</div><p class="hptx">Каждое решение обосновано нейромаркетингом или реальными цифрами. «Мне кажется» — не аргумент.</p></div>
        </div>
      </div>
      <div class="hfor rv d2">
        <div class="hfortit no">Кому это не подойдёт</div>
        <div class="hflist">
          <div class="hfno">Хотите красивые слайды без реализации</div>
          <div class="hfno">Команды нет — только вы один</div>
          <div class="hfno">Ждёте результат за неделю без участия</div>
          <div class="hfno">Продукт ещё не проверен рынком</div>
        </div>
        <div class="hfortit yes">Кому подойдёт идеально</div>
        <div class="hflist" style="margin-bottom:0">
          <div class="hfyes"><span>✓</span>Есть работающий продукт, нет системного маркетинга</div>
          <div class="hfyes"><span>✓</span>Команда 2–10 человек, готовая учиться</div>
          <div class="hfyes"><span>✓</span>Хотите понимать систему, а не зависеть от неё</div>
          <div class="hfyes"><span>✓</span>Готовы работать вместе, а не ждать результата</div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr class="dv">

<section id="cases" style="background:var(--bg2)">
  <div class="w">
    <span class="lb rv">Кейсы · Новая эра</span>
    <h2 class="sh2 rv d1">AI-системы,<br>которые уже работают</h2>
    <p class="sl rv d2">Проекты 2024–2025. До этого — 15 кейсов классического маркетинга.</p>
    <div class="cgrid">
      <div class="ccard rv" style="--cc:#FFD000"><div class="ctag">Сайт · Консалтинг · Next.js</div><div class="ctit">Сайт-воронка для AI-консалтинга</div><p class="csub">Личный сайт + 30 SEO-статей из книги + система заявок. Разработка — полностью в прямом эфире.</p><div class="cress"><div class="cres"><strong>30 SEO-страниц</strong> — готовы с первого дня</div><div class="cres"><strong>3 недели</strong> — от идеи до деплоя</div><div class="cres"><strong>0 ₽</strong> — на агентство</div></div></div>
      <div class="ccard rv d1" style="--cc:#4ECDC4"><div class="ctag">Приложение · Marketing OS · React Native</div><div class="ctit">Marketing OS — AI вместо маркетолога</div><p class="csub">Мобильное приложение с AI-агентом: контент-план, генерация текстов, публикация по расписанию.</p><div class="cress"><div class="cres"><strong>−2.5 часа/день</strong> — маркетинговой рутины убрано</div><div class="cres"><strong>×3 скорость</strong> — публикации контента</div><div class="cres"><strong>8 недель</strong> — до App Store</div></div></div>
      <div class="ccard rv d2" style="--cc:#B4A7D6"><div class="ctag">Приложение · SaaS · Claude API</div><div class="ctit">Funnel Builder — конструктор воронок с AI</div><p class="csub">Визуальный редактор воронок с AI-советником: анализирует логику, предсказывает конверсию.</p><div class="cress"><div class="cres"><strong>−60%</strong> — времени на проектирование запуска</div><div class="cres"><strong>12 архитектур</strong> — воронок в библиотеке</div><div class="cres"><strong>10 недель</strong> — до MVP</div></div></div>
    </div>
    <div class="cold rv d3">
      <div class="coldtag">Прошлая эра →</div>
      <p class="coldtx">15 кейсов классического маркетинга: воронки, лендинги, Email-автоматизация, запуски, SEO — до того, как в работу вошёл AI. Архив по запросу.</p>
    </div>
  </div>
</section>
<hr class="dv">

<section id="offer">
  <div class="w">
    <div class="ofin">
      <span class="lb rv" style="justify-content:center">Оффер</span>
      <h2 class="ofh2 rv d1">Купите мои мозги<br>на 2–3 месяца</h2>
      <p class="ofsub rv d2">Я вхожу в ваш проект — работаю вместе с командой, строю систему, передаю знания.</p>
      <div class="ofcard rv d2">
        <p style="font-family:var(--fm);font-size:.63rem;letter-spacing:.14em;text-transform:uppercase;color:var(--t3);margin-bottom:1.5rem">Что входит в работу</p>
        <div class="ofgrid">
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Упаковка проекта <span>Стратегия, смыслы, позиционирование — с нуля или аудит существующего</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Сайт через лайф-кодинг <span>Каждое решение у вас на глазах. Команда понимает как это работает</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Маркетинговое приложение <span>AI-инструмент под вашу специфику</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Технический стек под ключ <span>Деплой, интеграции, аналитика</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">AI-агенты в процессы <span>Не чат-боты — реальные системы решений</span></div></div>
          <div class="ofit"><span class="ofck">✓</span><div class="ofitx">Передача и документация <span>Полная автономия команды</span></div></div>
        </div>
        <div class="ofmeta">
          <div><div class="ofml">Формат</div><div class="ofmv">Сессии + асинхрон</div></div>
          <div><div class="ofml">Длительность</div><div class="ofmv">2–3 месяца</div></div>
          <div><div class="ofml">Мест сейчас</div><div class="ofmv">1–2 проекта</div></div>
        </div>
      </div>
      <div class="ofcta rv d3">
        <a href="mailto:hello@ncai.pro" class="bp" style="font-size:.92rem;padding:1rem 2.25rem">Написать напрямую <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="/book" class="bs">Читать книгу бесплатно</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="fwm">NCAi</div>
  <div class="w" style="position:relative;z-index:2">
    <div class="fgrid">
      <div>
        <div class="flogo">NCAi</div>
        <p class="ftag">Архитектор систем. Нейромаркетинг, AI-автоматизация и системное мышление для тех, кто строит бизнес серьёзно.</p>
        <div class="fsoc"><a href="#" class="fsi">✈</a><a href="#" class="fsi">▶</a><a href="#" class="fsi">in</a></div>
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
        <div class="fch">Работа</div>
        <ul class="fls">
          <li><a href="#offer">Консалтинг</a></li>
          <li><a href="#cases">Кейсы</a></li>
          <li><a href="#mechanism">Метод</a></li>
          <li><a href="/book">Книга бесплатно</a></li>
        </ul>
      </div>
    </div>
    <div class="fbot">
      <span class="fcp">© 2025 NCAi. Все права защищены.</span>
      <span class="fea">Сделано через лайф-кодинг — <span>как обещано</span></span>
    </div>
  </div>
</footer>

<script>
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>cr.classList.add('ex'));el.addEventListener('mouseleave',()=>cr.classList.remove('ex'))});
}
const nav=document.getElementById('nav'),prog=document.getElementById('prog');
window.addEventListener('scroll',()=>{nav.classList.toggle('sc',window.scrollY>40);prog.style.width=Math.min(window.scrollY/(document.body.scrollHeight-innerHeight)*100,100)+'%'},{passive:true});
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
// FIX: counters — textContent only on the span, not innerHTML
document.querySelectorAll('.cnt').forEach(el=>{
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const to=+el.dataset.to;let s=null;(function f(t){if(!s)s=t;const p=Math.min((t-s)/1500,1);el.textContent=Math.round((1-Math.pow(1-p,3))*to);if(p<1)requestAnimationFrame(f)})(performance.now());io.unobserve(el)})},{threshold:.6});
  io.observe(el);
});
// FIX: formula bars — observe the wrapper div directly
const fve=document.getElementById('fvisEl');
if(fve){let done=false;new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!done){done=true;fve.querySelectorAll('.fbfill').forEach((b,i)=>setTimeout(()=>{b.style.width=b.dataset.w+'%'},250+i*180))}})},{threshold:.3}).observe(fve)}
// FIX: timeline — data-s index mapping
const tls=document.querySelectorAll('.tlst'),tlps=document.querySelectorAll('.tlp');
tls.forEach(s=>s.addEventListener('click',()=>{const i=+s.dataset.s;tls.forEach(x=>x.classList.remove('act'));tlps.forEach(x=>x.classList.remove('act'));s.classList.add('act');tlps[i].classList.add('act')}));
// Diagnostic accordion
document.querySelectorAll('.wi').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.wi').forEach(x=>x.classList.remove('act'));item.classList.add('act')}));
// Particles
const cv=document.getElementById('pcanvas');
if(cv){const ctx=cv.getContext('2d');let W,H;
const pts=Array.from({length:55},()=>({x:Math.random()*1400,y:Math.random()*900,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,r:Math.random()*1.5+.4,a:Math.random()*.4+.07}));
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();window.addEventListener('resize',rs,{passive:true});
(function draw(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=\`rgba(255,208,0,\${p.a})\`;ctx.fill()});
for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.strokeStyle=\`rgba(255,208,0,\${.06*(1-d/120)})\`;ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}
requestAnimationFrame(draw)})()}
// Hero diagram — sequential highlight
const hboxes=[document.getElementById('hb0'),document.getElementById('hb1'),document.getElementById('hb2'),document.getElementById('hb3'),document.getElementById('hb4'),document.getElementById('hb5')].filter(Boolean);
let hbi=0;
setInterval(()=>{hboxes.forEach(b=>b.classList.remove('lit'));hboxes[hbi%hboxes.length].classList.add('lit');hbi++},1100);
</script>
`;

export const js = `
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('mouseenter',()=>cr.classList.add('ex'));el.addEventListener('mouseleave',()=>cr.classList.remove('ex'))});
}
const nav=document.getElementById('nav'),prog=document.getElementById('prog');
window.addEventListener('scroll',()=>{nav.classList.toggle('sc',window.scrollY>40);prog.style.width=Math.min(window.scrollY/(document.body.scrollHeight-innerHeight)*100,100)+'%'},{passive:true});
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
// FIX: counters — textContent only on the span, not innerHTML
document.querySelectorAll('.cnt').forEach(el=>{
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const to=+el.dataset.to;let s=null;(function f(t){if(!s)s=t;const p=Math.min((t-s)/1500,1);el.textContent=Math.round((1-Math.pow(1-p,3))*to);if(p<1)requestAnimationFrame(f)})(performance.now());io.unobserve(el)})},{threshold:.6});
  io.observe(el);
});
// FIX: formula bars — observe the wrapper div directly
const fve=document.getElementById('fvisEl');
if(fve){let done=false;new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!done){done=true;fve.querySelectorAll('.fbfill').forEach((b,i)=>setTimeout(()=>{b.style.width=b.dataset.w+'%'},250+i*180))}})},{threshold:.3}).observe(fve)}
// FIX: timeline — data-s index mapping
const tls=document.querySelectorAll('.tlst'),tlps=document.querySelectorAll('.tlp');
tls.forEach(s=>s.addEventListener('click',()=>{const i=+s.dataset.s;tls.forEach(x=>x.classList.remove('act'));tlps.forEach(x=>x.classList.remove('act'));s.classList.add('act');tlps[i].classList.add('act')}));
// Diagnostic accordion
document.querySelectorAll('.wi').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.wi').forEach(x=>x.classList.remove('act'));item.classList.add('act')}));
// Particles
const cv=document.getElementById('pcanvas');
if(cv){const ctx=cv.getContext('2d');let W,H;
const pts=Array.from({length:55},()=>({x:Math.random()*1400,y:Math.random()*900,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,r:Math.random()*1.5+.4,a:Math.random()*.4+.07}));
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();window.addEventListener('resize',rs,{passive:true});
(function draw(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=\`rgba(255,208,0,\${p.a})\`;ctx.fill()});
for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.strokeStyle=\`rgba(255,208,0,\${.06*(1-d/120)})\`;ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}
requestAnimationFrame(draw)})()}
// Hero diagram — sequential highlight
const hboxes=[document.getElementById('hb0'),document.getElementById('hb1'),document.getElementById('hb2'),document.getElementById('hb3'),document.getElementById('hb4'),document.getElementById('hb5')].filter(Boolean);
let hbi=0;
setInterval(()=>{hboxes.forEach(b=>b.classList.remove('lit'));hboxes[hbi%hboxes.length].classList.add('lit');hbi++},1100);
`;
