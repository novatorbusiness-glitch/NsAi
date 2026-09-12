export const consultingJs = `const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.wi,.tlst').forEach(el=>{el.addEventListener('mouseenter',()=>cr.classList.add('ex'));el.addEventListener('mouseleave',()=>cr.classList.remove('ex'))});
}
const nav=document.getElementById('nav'),prog=document.getElementById('prog');
window.addEventListener('scroll',()=>{nav.classList.toggle('sc',window.scrollY>40);prog.style.width=Math.min(window.scrollY/(document.body.scrollHeight-innerHeight)*100,100)+'%'},{passive:true});
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
document.querySelectorAll('.cnt').forEach(el=>{
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const to=+el.dataset.to;let s=null;(function f(t){if(!s)s=t;const p=Math.min((t-s)/1500,1);el.textContent=Math.round((1-Math.pow(1-p,3))*to);if(p<1)requestAnimationFrame(f)})(performance.now());io.unobserve(el)})},{threshold:.6});
  io.observe(el);
});
const tls=document.querySelectorAll('.tlst'),tlps=document.querySelectorAll('.tlp');
tls.forEach(s=>s.addEventListener('click',()=>{const i=+s.dataset.s;tls.forEach(x=>x.classList.remove('act'));tlps.forEach(x=>x.classList.remove('act'));s.classList.add('act');tlps[i].classList.add('act')}));
const fzones=document.querySelectorAll('.fz');
function setActiveZone(zone){fzones.forEach(z=>z.classList.toggle('fz-dim',z.id!=='fz'+zone))}
document.querySelectorAll('.wi').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.wi').forEach(x=>x.classList.remove('act'));item.classList.add('act');if(fzones.length)setActiveZone(item.dataset.zone)}));
if(fzones.length)setActiveZone(document.querySelector('.wi.act')?.dataset.zone||'1');
const hboxes=[document.getElementById('hb0'),document.getElementById('hb1'),document.getElementById('hb2'),document.getElementById('hb3'),document.getElementById('hb4'),document.getElementById('hb5')].filter(Boolean);
let hbi=0;
setInterval(()=>{hboxes.forEach(b=>b.classList.remove('lit'));hboxes[hbi%hboxes.length].classList.add('lit');hbi++},1100);

// REALWORK — карусель по нишам
const ncarousel=document.getElementById('ncarousel');
if(ncarousel){
  const cards=Array.from(ncarousel.children);
  const dotsWrap=document.getElementById('ncDots');
  const dots=cards.map((_,i)=>{
    const d=document.createElement('span');
    d.className='ncdot'+(i===0?' act':'');
    d.addEventListener('click',()=>cards[i].scrollIntoView({behavior:'smooth',inline:'start',block:'nearest'}));
    dotsWrap.appendChild(d);
    return d;
  });
  function syncDots(){
    const left=ncarousel.scrollLeft;
    let closest=0,min=Infinity;
    cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft-ncarousel.offsetLeft-left);if(d<min){min=d;closest=i}});
    dots.forEach((d,i)=>d.classList.toggle('act',i===closest));
  }
  ncarousel.addEventListener('scroll',()=>requestAnimationFrame(syncDots),{passive:true});
  const prevBtn=document.getElementById('ncPrev'),nextBtn=document.getElementById('ncNext');
  if(prevBtn)prevBtn.addEventListener('click',()=>ncarousel.scrollBy({left:-360,behavior:'smooth'}));
  if(nextBtn)nextBtn.addEventListener('click',()=>ncarousel.scrollBy({left:360,behavior:'smooth'}));
}

// RMOCK — переключение экранов мокапа мини-аппа (серия реальных скринов)
document.querySelectorAll('[data-rmock-tabs]').forEach(tabsWrap=>{
  const root=tabsWrap.closest('.rmock');if(!root)return;
  const tabs=tabsWrap.querySelectorAll('.rmock-tab');
  const screens=root.querySelectorAll('[data-rmock-body] .rmock-screen');
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    const s=tab.dataset.screen;
    tabs.forEach(t=>t.classList.toggle('act',t===tab));
    screens.forEach(sc=>sc.classList.toggle('act',sc.dataset.screen===s));
  }));
});

// BURGER — мобильное меню
const burger=document.getElementById('burger'),mnav=document.getElementById('mnav');
if(burger&&mnav){
  burger.addEventListener('click',()=>{mnav.classList.add('open');document.body.style.overflow='hidden'});
  mnav.querySelectorAll('.mnav-close,.mnav-backdrop,.mnav-links a').forEach(el=>el.addEventListener('click',()=>{mnav.classList.remove('open');document.body.style.overflow=''}));
}`;
