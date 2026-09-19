/**
 * Живой слоистый фон для hero-секций.
 *
 * Механика разобрана на референсе exnihilo.life/onto-nothing: ощущение
 * работающего прибора там даёт не сложный SVG, а многослойность — один
 * простой путь-обводка, продублированный несколько раз с разной
 * прозрачностью, своим оттенком и своей длительностью, часть слоёв идёт
 * в обратную сторону. Движение непрерывное, а не одноразовое.
 *
 * Здесь та же механика на палитре NCAi. Стили — .vz-flow в viz.css,
 * там же отключение при prefers-reduced-motion.
 */
export const FLOW_HTML = `<div class="vz-flow" aria-hidden="true">
    <svg class="f1" viewBox="0 0 2000 400" preserveAspectRatio="none"><path d="M0,200 Q250,90 500,200 T1000,200 T1500,200 T2000,200"/></svg>
    <svg class="f2" viewBox="0 0 2000 400" preserveAspectRatio="none"><path d="M0,200 Q200,300 400,200 T800,200 T1200,200 T1600,200 T2000,200"/></svg>
    <svg class="f3" viewBox="0 0 2000 400" preserveAspectRatio="none"><path d="M0,200 Q150,145 300,200 T600,200 T900,200 T1200,200 T1500,200 T1800,200 T2000,200"/></svg>
    <svg class="f4" viewBox="0 0 2000 400" preserveAspectRatio="none"><path d="M0,210 Q330,110 660,210 T1320,210 T1980,210"/></svg>
    <svg class="f5" viewBox="0 0 2000 400" preserveAspectRatio="none"><path d="M0,190 Q180,265 360,190 T720,190 T1080,190 T1440,190 T1800,190 T2000,190"/></svg>
    <svg class="f6" viewBox="0 0 2000 400" preserveAspectRatio="none"><path d="M0,200 Q420,125 840,200 T1680,200 T2000,200"/></svg>
  </div>`;
