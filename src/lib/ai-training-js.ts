// Интерактив страницы /ai-training: курсор + reveal.
// Nav-scroll и бургер-меню убраны — этим занимается общий Navigation.tsx (PageShell).
// Canvas-частицы в hero убраны (премиум-редизайн, эталон /b24u — без визуального шума).
export const aiTrainingJs = `
// CURSOR
const cd=document.getElementById('cd'),cr=document.getElementById('cr');
let mx=0,my=0,rx=0,ry=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.left=mx+'px';cd.style.top=my+'px'});
  (function loop(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(loop)})();
  document.querySelectorAll('a,button,.ait-fit-card,.ait-tool,.ait-build-card,.ait-tl-item').forEach(el=>{
    el.addEventListener('mouseenter',()=>cr.classList.add('ex'));
    el.addEventListener('mouseleave',()=>cr.classList.remove('ex'));
  });
}
// REVEAL (с защитой: контент никогда не остаётся невидимым)
document.documentElement.classList.add('js');
if(!('IntersectionObserver' in window)){
  document.querySelectorAll('.rv').forEach(el=>el.classList.add('on'));
}else{
  const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')})},{threshold:.07});
  document.querySelectorAll('.rv').forEach(el=>ro.observe(el));
  setTimeout(()=>{
    document.querySelectorAll('.rv:not(.on)').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<innerHeight&&r.bottom>0)el.classList.add('on');
    });
  },1500);
}
`;
