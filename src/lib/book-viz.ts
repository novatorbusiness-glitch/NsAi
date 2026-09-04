// src/lib/book-viz.ts
// Инлайн-SVG визуализации книги «Нейро-Воронка» — светлая тема + анимации.
//
// Владелец (важно для ВСЕГО сайта): НЕ использовать <img src> для картинок/схем.
// Визуализации и анимации делать КОДОМ — инлайн-SVG, CSS-графика, canvas, CSS-анимации.
// Поэтому здесь схемы (стимулы, матрица, доверие, касания) встраиваются прямо в разметку
// подглав вместо <img src="/viz/*.svg">, с hover-анимацией на карточках и reveal при скролле.
//
// Используется в:
//   - src/lib/book-reader.ts        (читалка /book/read)
//   - src/app/book/[slug]/page.tsx  (отдельные страницы /book/[slug])

// Палитра светлой темы чтения (#f8f9fa), акцент — золото/жёлтый NCAi.
const C = {
	panelFrom: "#ffffff",
	panelTo: "#f5f7f9",
	panelBorder: "#e7e9ec",
	card: "#ffffff",
	cardBorder: "#e7e9ec",
	ink: "#16181d",
	ink2: "#3b3e44",
	ink3: "#55595f",
	label: "#6a6f76",
	muted: "#9aa0a8",
	gold: "#c99700",
	goldDeep: "#b07e00",
	yellow: "#FFD000",
	grid: "rgba(201,151,0,.06)",
};

let uidCounter = 0;
function nextId(): string {
	uidCounter += 1;
	return `nz${uidCounter}`;
}

const FG = "'Space Grotesk',sans-serif";
const FM = "'Space Mono',monospace";
const FS = "'Manrope',sans-serif";

// ─────────────────────────────────────────────────────────────
// 4.2 — Шесть стимулов (1600×1080)
// ─────────────────────────────────────────────────────────────
function stimuly(id: string): string {
	return `<svg class="nz-viz" viewBox="0 0 1600 1080" role="img" aria-label="Шесть стимулов сильного креатива">
  <defs>
    <linearGradient id="${id}-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.panelFrom}"/><stop offset="1" stop-color="${C.panelTo}"/>
    </linearGradient>
    <pattern id="${id}-grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="${C.grid}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="20" y="20" width="1560" height="1040" rx="28" fill="url(#${id}-panel)" stroke="${C.panelBorder}"/>
  <rect x="20" y="20" width="1560" height="1040" rx="28" fill="url(#${id}-grid)" opacity=".6"/>
  <rect x="80" y="66" width="260" height="44" rx="22" fill="rgba(255,208,0,.14)" stroke="rgba(201,151,0,.35)"/>
  <text x="210" y="94" text-anchor="middle" font-family="${FM}" font-size="20" letter-spacing="2" fill="${C.gold}">ГЛ. 4 · НЕЙРО-ТРАФИК</text>
  <text x="80" y="196" font-family="${FG}" font-weight="800" font-size="62" letter-spacing="-1" fill="${C.ink}">ШЕСТЬ СТИМУЛОВ</text>
  <text x="84" y="248" font-family="${FM}" font-size="24" letter-spacing="1" fill="${C.ink3}">на что мозг реагирует раньше, чем включается анализ</text>

  <g class="vz-card">
    <rect x="40" y="300" width="500" height="350" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="72" y="366" font-family="${FG}" font-weight="800" font-size="64" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">01</text>
    <text x="72" y="430" font-family="${FG}" font-weight="800" font-size="34" fill="${C.gold}">ВИЗУАЛЬНЫЙ</text>
    <text x="72" y="468" font-family="${FM}" font-size="21" fill="${C.label}">«Я это вижу»</text>
    <text x="72" y="512" font-family="${FS}" font-size="22" fill="${C.ink3}">картинка считывается раньше текста</text>
    <text x="72" y="546" font-family="${FS}" font-size="22" fill="${C.ink3}">лица крупным планом · контраст · движение</text>
    <text x="72" y="600" font-family="${FM}" font-size="19" fill="${C.goldDeep}">слабый визуал убивает даже сильный оффер</text>
  </g>
  <g class="vz-card">
    <rect x="550" y="300" width="500" height="350" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="582" y="366" font-family="${FG}" font-weight="800" font-size="64" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">02</text>
    <text x="582" y="430" font-family="${FG}" font-weight="800" font-size="34" fill="${C.gold}">МАТЕРИАЛЬНЫЙ</text>
    <text x="582" y="468" font-family="${FM}" font-size="21" fill="${C.label}">«Я могу это взять»</text>
    <text x="582" y="512" font-family="${FS}" font-size="22" fill="${C.ink3}">эффект предварительного владения</text>
    <text x="582" y="546" font-family="${FS}" font-size="22" fill="${C.ink3}">билет · книга · ключ · коробка</text>
    <text x="582" y="600" font-family="${FM}" font-size="19" fill="${C.goldDeep}">PDF должен выглядеть как продукт</text>
  </g>
  <g class="vz-card">
    <rect x="1060" y="300" width="500" height="350" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="1092" y="366" font-family="${FG}" font-weight="800" font-size="64" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">03</text>
    <text x="1092" y="430" font-family="${FG}" font-weight="800" font-size="34" fill="${C.gold}">ЭГО</text>
    <text x="1092" y="468" font-family="${FM}" font-size="21" fill="${C.label}">«Это про меня»</text>
    <text x="1092" y="512" font-family="${FS}" font-size="22" fill="${C.ink3}">точное попадание в личную карту выгоды</text>
    <text x="1092" y="546" font-family="${FS}" font-size="22" fill="${C.ink3}">не «мы лучшие», а «ты заберёшь контроль»</text>
    <text x="1092" y="600" font-family="${FM}" font-size="19" fill="${C.goldDeep}">это не лесть, а точность</text>
  </g>
  <g class="vz-card">
    <rect x="40" y="670" width="500" height="350" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="72" y="736" font-family="${FG}" font-weight="800" font-size="64" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">04</text>
    <text x="72" y="800" font-family="${FG}" font-weight="800" font-size="34" fill="${C.gold}">ЭМОЦИОНАЛЬНЫЙ</text>
    <text x="72" y="838" font-family="${FM}" font-size="21" fill="${C.label}">«Я это чувствую»</text>
    <text x="72" y="882" font-family="${FS}" font-size="22" fill="${C.ink3}">эмоция — главное топливо решения</text>
    <text x="72" y="916" font-family="${FS}" font-size="22" fill="${C.ink3}">страх потери · облегчение · предвкушение</text>
    <text x="72" y="970" font-family="${FM}" font-size="19" fill="${C.goldDeep}">точная эмоция, а не просто громкая</text>
  </g>
  <g class="vz-card">
    <rect x="550" y="670" width="500" height="350" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="582" y="736" font-family="${FG}" font-weight="800" font-size="64" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">05</text>
    <text x="582" y="800" font-family="${FG}" font-weight="800" font-size="34" fill="${C.gold}">КОНТРАСТНЫЙ</text>
    <text x="582" y="838" font-family="${FM}" font-size="21" fill="${C.label}">«Я вижу разницу»</text>
    <text x="582" y="882" font-family="${FS}" font-size="22" fill="${C.ink3}">сравнение экономит энергию мозга</text>
    <text x="582" y="916" font-family="${FS}" font-size="22" fill="${C.ink3}">до/после · хаос/система · ручное/авто</text>
    <text x="582" y="970" font-family="${FM}" font-size="19" fill="${C.goldDeep}">решение — всегда рядом с проблемой</text>
  </g>
  <g class="vz-card">
    <rect x="1060" y="670" width="500" height="350" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="1092" y="736" font-family="${FG}" font-weight="800" font-size="64" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">06</text>
    <text x="1092" y="800" font-family="${FG}" font-weight="800" font-size="34" fill="${C.gold}">ПАМЯТЬ</text>
    <text x="1092" y="838" font-family="${FM}" font-size="21" fill="${C.label}">«Я это узнаю»</text>
    <text x="1092" y="882" font-family="${FS}" font-size="22" fill="${C.ink3}">эффект простого предъявления</text>
    <text x="1092" y="916" font-family="${FS}" font-size="22" fill="${C.ink3}">мемы · культурные коды · жанровые шаблоны</text>
    <text x="1092" y="970" font-family="${FM}" font-size="19" fill="${C.goldDeep}">особенно силён в соцсетях</text>
  </g>
</svg>`;
}

// ─────────────────────────────────────────────────────────────
// 2.1 — Продуктовая матрица (1600×1000)
// ─────────────────────────────────────────────────────────────
function matrica(id: string): string {
	const bars = [
		{ y: 820, o: 0, lvl: "УР. 0 · 0 ₽", title: "ЛИД-МАГНИТ", sub: "бесплатная ценность → доверие + контакт", note: "вход", gold: false },
		{ y: 640, o: 1, lvl: "УР. 1", title: "ТРИПВАЙЕР", sub: "символическая цена · мастер-класс, интенсив", note: "подписчик → покупатель", gold: false },
		{ y: 460, o: 2, lvl: "УР. 2", title: "ОСНОВНОЙ ПРОДУКТ", sub: "флагман · главная проблема клиента + основной доход", note: "ядро бизнеса", gold: true },
		{ y: 280, o: 3, lvl: "УР. 3", title: "VIP / ПРЕМИУМ", sub: "наставничество / консалтинг · максимум ценности", note: "вершина", gold: true },
	];
	const barRows = bars
		.map((b) => {
			const fill = `rgba(255,208,0,${[0.06, 0.12, 0.2, 0.32][b.o]})`;
			const stroke = `rgba(201,151,0,${[0.35, 0.45, 0.55, 0.7][b.o]})`;
			const lvlFill = b.o >= 2 ? C.gold : C.goldDeep;
			const titleFill = b.o >= 3 ? C.gold : C.ink;
			return `<g class="vz-bar">
    <rect x="140" y="${b.y}" width="1320" height="100" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <text x="180" y="${b.y + 42}" font-family="${FM}" font-size="20" letter-spacing="1" fill="${lvlFill}">${b.lvl}</text>
    <text x="360" y="${b.y + 44}" font-family="${FG}" font-weight="800" font-size="32" fill="${titleFill}">${b.title}</text>
    <text x="360" y="${b.y + 78}" font-family="${FS}" font-size="21" fill="${C.ink3}">${b.sub}</text>
    <text x="1430" y="${b.y + 62}" text-anchor="end" font-family="${FM}" font-size="19" fill="${C.ink2}">${b.note}</text>
  </g>`;
		})
		.join("\n");

	return `<svg class="nz-viz" viewBox="0 0 1600 1000" role="img" aria-label="Продуктовая матрица: лестница ценности от бесплатного до VIP">
  <defs>
    <linearGradient id="${id}-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.panelFrom}"/><stop offset="1" stop-color="${C.panelTo}"/>
    </linearGradient>
    <pattern id="${id}-grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="${C.grid}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="20" y="20" width="1560" height="960" rx="28" fill="url(#${id}-panel)" stroke="${C.panelBorder}"/>
  <rect x="20" y="20" width="1560" height="960" rx="28" fill="url(#${id}-grid)" opacity=".6"/>
  <rect x="80" y="66" width="280" height="44" rx="22" fill="rgba(255,208,0,.14)" stroke="rgba(201,151,0,.35)"/>
  <text x="220" y="94" text-anchor="middle" font-family="${FM}" font-size="20" letter-spacing="2" fill="${C.gold}">ГЛ. 2 · ИНЖЕНЕРИЯ СИСТЕМ</text>
  <text x="80" y="196" font-family="${FG}" font-weight="800" font-size="62" letter-spacing="-1" fill="${C.ink}">ПРОДУКТОВАЯ МАТРИЦА</text>
  <text x="84" y="248" font-family="${FM}" font-size="24" letter-spacing="1" fill="${C.ink3}">лестница ценности · техника «нога в двери» · каждое «да» делает следующее проще</text>
  ${barRows}
  <g stroke="${C.gold}" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M70,780 l14,-14 m-14,14 l-14,-14"/>
    <path d="M70,600 l14,-14 m-14,14 l-14,-14"/>
    <path d="M70,420 l14,-14 m-14,14 l-14,-14"/>
  </g>
  <text x="70" y="766" text-anchor="middle" font-family="${FM}" font-size="20" fill="${C.gold}">▲</text>
  <text x="70" y="586" text-anchor="middle" font-family="${FM}" font-size="20" fill="${C.gold}">▲</text>
  <text x="70" y="406" text-anchor="middle" font-family="${FM}" font-size="20" fill="${C.gold}">▲</text>
  <text x="80" y="942" font-family="${FM}" font-size="18" letter-spacing="1" fill="${C.muted}">не пытайся продать дорогое холодному контакту · выстраивай плавную лестницу</text>
</svg>`;
}

// ─────────────────────────────────────────────────────────────
// 3.2 — Четыре элемента доверия (1600×800)
// ─────────────────────────────────────────────────────────────
function doverie(id: string): string {
	const cards = [
		{ x: 40, n: "1", t: "ЭКСПЕРТНОСТЬ", q: "«Почему я должен слушать тебя?»", l1: "сторителлинг, кейсы с цифрами,", l2: "авторская методология", f: "надежный проводник" },
		{ x: 420, n: "2", t: "ТЕМА / ПРОБЛЕМА", q: "«Почему это важно для меня сейчас?»", l1: "разрушение мифов, статистика,", l2: "формула PAS", f: "управляемый диссонанс" },
		{ x: 800, n: "3", t: "ТРАНСФОРМАЦИЯ", q: "«Какой результат я получу?»", l1: "истории клиентов, Future Pacing,", l2: "визуализация будущего", f: "предвкушение награды" },
		{ x: 1180, n: "4", t: "ПРОДУКТ", q: "«Как получить этот результат?»", l1: "анонс через пользу, разбор", l2: "возражений, демо изнутри", f: "мост к решению" },
	];
	const rows = cards
		.map((c) => {
			const w = c.x === 1180 ? 380 : 360;
			return `<g class="vz-card">
    <rect x="${c.x}" y="310" width="${w}" height="300" rx="20" fill="${C.card}" stroke="${C.cardBorder}"/>
    <text x="${c.x + 32}" y="378" font-family="${FG}" font-weight="800" font-size="60" fill="none" stroke="rgba(201,151,0,.5)" stroke-width="1.5">${c.n}</text>
    <text x="${c.x + 32}" y="442" font-family="${FG}" font-weight="800" font-size="30" fill="${C.gold}">${c.t}</text>
    <text x="${c.x + 32}" y="486" font-family="${FM}" font-size="19" fill="${C.label}">${c.q}</text>
    <text x="${c.x + 32}" y="530" font-family="${FS}" font-size="21" fill="${C.ink3}">${c.l1}</text>
    <text x="${c.x + 32}" y="562" font-family="${FS}" font-size="21" fill="${C.ink3}">${c.l2}</text>
    <text x="${c.x + 32}" y="600" font-family="${FM}" font-size="17" fill="${C.goldDeep}">${c.f}</text>
  </g>`;
		})
		.join("\n");

	return `<svg class="nz-viz" viewBox="0 0 1600 800" role="img" aria-label="Четыре элемента доверия: экспертиза, тема, трансформация, продукт">
  <defs>
    <linearGradient id="${id}-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.panelFrom}"/><stop offset="1" stop-color="${C.panelTo}"/>
    </linearGradient>
    <pattern id="${id}-grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="${C.grid}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="20" y="20" width="1560" height="760" rx="28" fill="url(#${id}-panel)" stroke="${C.panelBorder}"/>
  <rect x="20" y="20" width="1560" height="760" rx="28" fill="url(#${id}-grid)" opacity=".6"/>
  <rect x="80" y="66" width="270" height="44" rx="22" fill="rgba(255,208,0,.14)" stroke="rgba(201,151,0,.35)"/>
  <text x="215" y="94" text-anchor="middle" font-family="${FM}" font-size="20" letter-spacing="2" fill="${C.gold}">ГЛ. 3 · СИНТЕЗ ДОВЕРИЯ</text>
  <text x="80" y="196" font-family="${FG}" font-weight="800" font-size="62" letter-spacing="-1" fill="${C.ink}">ЧЕТЫРЕ ЭЛЕМЕНТА ДОВЕРИЯ</text>
  <text x="84" y="248" font-family="${FM}" font-size="24" letter-spacing="1" fill="${C.ink3}">прогрев: спроектированное меню из четырёх блюд · от скепсиса к готовности действовать</text>
  ${rows}
  <g stroke="${C.gold}" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M405,460 l14,-10 m-14,10 l14,10"/>
    <path d="M785,460 l14,-10 m-14,10 l14,10"/>
    <path d="M1165,460 l14,-10 m-14,10 l14,10"/>
  </g>
  <text x="220" y="660" text-anchor="middle" font-family="${FM}" font-size="21" letter-spacing="1" fill="${C.ink2}">порядок подачи строг: каждый элемент готовит следующий шаг</text>
  <text x="80" y="744" font-family="${FM}" font-size="18" letter-spacing="1" fill="${C.muted}">к моменту открытия продаж все четыре опоры должны быть выстроены</text>
</svg>`;
}

// ─────────────────────────────────────────────────────────────
// 3.3 — Цепочка касаний (1600×760)
// ─────────────────────────────────────────────────────────────
function kasanija(id: string): string {
	const steps = [
		{ x: 200, d: "Д0", t: "ЛИД-МАГНИТ", l1: "ценность в обмен", l2: "на контакт", f: "«внедри один приём»" },
		{ x: 440, d: "Д2", t: "ЭКСПЕРТНОСТЬ", l1: "кейс с цифрами", l2: "+17% заявок", f: "«этот источник даёт результат»" },
		{ x: 680, d: "Д3", t: "ТРАНСФОРМАЦИЯ", l1: "скриншот выпускницы,", l2: "Future Pacing", f: "мозг проживает результат" },
		{ x: 920, d: "Д5", t: "ПРОБЛЕМА", l1: "«окно есть,", l2: "но не вечно»", f: "дефицит + FOMO" },
		{ x: 1160, d: "Д7", t: "ХУК", l1: "флагманский курс,", l2: "модель завершена", f: "оффер = следующий шаг" },
	];
	const nodes = steps
		.map((s) => {
			return `<g class="vz-dot">
    <circle cx="${s.x}" cy="400" r="16" fill="${C.yellow}"/>
    <text x="${s.x}" y="330" text-anchor="middle" font-family="${FM}" font-size="22" fill="${C.gold}">${s.d}</text>
    <text x="${s.x}" y="300" text-anchor="middle" font-family="${FG}" font-weight="800" font-size="26" fill="${C.ink}">${s.t}</text>
    <text x="${s.x}" y="450" text-anchor="middle" font-family="${FS}" font-size="19" fill="${C.ink2}">${s.l1}</text>
    <text x="${s.x}" y="478" text-anchor="middle" font-family="${FS}" font-size="19" fill="${C.ink2}">${s.l2}</text>
    <text x="${s.x}" y="512" text-anchor="middle" font-family="${FM}" font-size="16" fill="${C.goldDeep}">${s.f}</text>
  </g>`;
		})
		.join("\n");

	return `<svg class="nz-viz" viewBox="0 0 1600 760" role="img" aria-label="Цепочка касаний: линия времени прогрева">
  <defs>
    <linearGradient id="${id}-panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.panelFrom}"/><stop offset="1" stop-color="${C.panelTo}"/>
    </linearGradient>
    <pattern id="${id}-grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="${C.grid}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="20" y="20" width="1560" height="720" rx="28" fill="url(#${id}-panel)" stroke="${C.panelBorder}"/>
  <rect x="20" y="20" width="1560" height="720" rx="28" fill="url(#${id}-grid)" opacity=".6"/>
  <rect x="80" y="66" width="270" height="44" rx="22" fill="rgba(255,208,0,.14)" stroke="rgba(201,151,0,.35)"/>
  <text x="215" y="94" text-anchor="middle" font-family="${FM}" font-size="20" letter-spacing="2" fill="${C.gold}">ГЛ. 3 · СИНТЕЗ ДОВЕРИЯ</text>
  <text x="80" y="196" font-family="${FG}" font-weight="800" font-size="62" letter-spacing="-1" fill="${C.ink}">ЦЕПОЧКА КАСАНИЙ</text>
  <text x="84" y="248" font-family="${FM}" font-size="24" letter-spacing="1" fill="${C.ink3}">каждый «джеб» снимает один барьер и готовит следующий шаг · 24/7, автоматически</text>
  <line x1="200" y1="400" x2="1400" y2="400" stroke="rgba(201,151,0,.35)" stroke-width="3"/>
  ${nodes}
  <g class="vz-dot">
    <circle cx="1400" cy="400" r="16" fill="${C.ink}" stroke="${C.yellow}" stroke-width="3"/>
    <text x="1400" y="330" text-anchor="middle" font-family="${FM}" font-size="22" fill="${C.ink}">✓</text>
    <text x="1400" y="300" text-anchor="middle" font-family="${FG}" font-weight="800" font-size="26" fill="${C.ink}">ПОКУПКА</text>
    <text x="1400" y="450" text-anchor="middle" font-family="${FS}" font-size="19" fill="${C.ink2}">решение стало</text>
    <text x="1400" y="478" text-anchor="middle" font-family="${FS}" font-size="19" fill="${C.ink2}">очевидным</text>
    <text x="1400" y="512" text-anchor="middle" font-family="${FM}" font-size="16" fill="${C.goldDeep}">когнитивная лёгкость</text>
  </g>
  <text x="80" y="676" font-family="${FM}" font-size="18" letter-spacing="1" fill="${C.muted}">последовательность снимает барьеры доверия · каждый джеб бьёт в реальную боль сегмента</text>
</svg>`;
}

// ─────────────────────────────────────────────────────────────
// Замена <img src="/viz/*.svg"> на инлайн-SVG
// ─────────────────────────────────────────────────────────────
const VIZ: Record<string, (id: string) => string> = {
	stimuly,
	matrica,
	doverie,
	kasanija,
};

export function inlineVizSvg(html: string): string {
	return html.replace(
		/<img\b[^>]*src=["']\/viz\/(stimuly|matrica|doverie|kasanija)\.svg["'][^>]*\/?>/gi,
		(match, name: string) => {
			const fn = VIZ[name.toLowerCase()];
			if (!fn) return match;
			const svg = fn(nextId());
			return `<figure class="nz-viz">${svg}</figure>`;
		},
	);
}

// CSS для инлайн-визуализаций (встраивается в <head> каждой подглавы).
export const VIZ_CSS = `
.nz-viz{margin:2.6rem 0;padding:1rem;background:#fff;border:1px solid #e7e9ec;border-radius:16px;box-shadow:0 14px 34px rgba(0,0,0,.06)}
.nz-viz svg{width:100%;height:auto;display:block;border-radius:10px}
.nz-viz .vz-card{transition:transform .35s cubic-bezier(.16,1,.3,1),filter .35s cubic-bezier(.16,1,.3,1)}
.nz-viz .vz-card:hover{transform:translateY(-5px);filter:drop-shadow(0 12px 20px rgba(201,151,0,.16))}
.nz-viz .vz-bar{transition:transform .35s cubic-bezier(.16,1,.3,1)}
.nz-viz .vz-bar:hover{transform:translateX(8px)}
.nz-viz .vz-dot{transition:transform .3s cubic-bezier(.16,1,.3,1)}
.nz-viz .vz-dot:hover{transform:scale(1.22);transform-origin:center}
@media (max-width:640px){.nz-viz{padding:.6rem;border-radius:12px}}
`;
