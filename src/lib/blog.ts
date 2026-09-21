// Каталог статей блога NCAi. Метаданные — здесь, тело — в content/blog/<slug>.mdx.
export interface BlogPost {
	slug: string;
	title: string;
	titleEn: string;
	date: string; // ISO
	dateLabel: string; // для отображения
	excerpt: string;
	excerptEn: string;
	tags: string[];
	category: BlogCategory; // ключ категории для фильтра
	chars: number; // знаков (с пробелами) в тексте статьи
	words: number; // слов — для расчёта времени чтения
}

// Категории блога (чипы-фильтры). Ключ «all» — показывать всё.
export type BlogCategory = "neyromarketing" | "voronki" | "doverie" | "ai";

export const BLOG_CATEGORIES: { key: BlogCategory | "all"; label: string; labelEn: string }[] = [
	{ key: "all", label: "Всё", labelEn: "All" },
	{ key: "neyromarketing", label: "Нейромаркетинг", labelEn: "Neuromarketing" },
	{ key: "voronki", label: "Воронки", labelEn: "Funnels" },
	{ key: "doverie", label: "Доверие", labelEn: "Trust" },
	{ key: "ai", label: "AI", labelEn: "AI" },
];

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: "sdelano-i-provereno",
		title: "«Сделано» и «проверено» — разные слова: как в AI-команде работает контроль качества",
		titleEn: "\"Done\" and \"Checked\" Are Different Words: How Quality Control Works in an AI Team",
		date: "2026-09-21",
		dateLabel: "21 сентября 2026",
		excerpt:
			"AI отвечает быстро — это не то же самое, что отвечает правильно. Рассказываю, как устроена проверка в NCAi: почему ни одна задача не закрывается на первом «готово» и кто ставит финальную точку перед тем, как результат попадёт к вам.",
		excerptEn:
			"An AI answers fast — that's not the same as answering correctly. Here's how checking works at NCAi: why no task closes on the first \"done,\" and who has the final say before a result reaches you.",
		tags: ["контроль качества", "AI-команда", "NCAi"],
		category: "ai",
		chars: 2063,
		words: 328,
	},
	{
		slug: "pochemu-ai-agent-ne-chatgpt",
		title: "Почему AI-агент — это не ChatGPT в новой обёртке",
		titleEn: "Why an AI Agent Isn't Just ChatGPT in a New Wrapper",
		date: "2026-09-21",
		dateLabel: "21 сентября 2026",
		excerpt:
			"«Просто подключите нейросеть» — самый частый совет, который не работает. Разбираю, чем команда AI-агентов с ролями и памятью о бизнесе отличается от одного чата с ChatGPT — и почему разница решает, работает система без вас или нет.",
		excerptEn:
			"\"Just plug in a neural network\" is the most common advice — and it usually doesn't work. Here's what separates a team of AI agents with roles and memory of your business from a single ChatGPT chat — and why that difference decides whether the system runs without you.",
		tags: ["AI-агенты", "NCAi", "агентство в коробке"],
		category: "ai",
		chars: 2072,
		words: 319,
	},
	{
		slug: "chto-takoe-ncai",
		title: "Что такое NCAi на самом деле — агентство, которое не нанимает людей",
		titleEn: "What NCAi Actually Is — an Agency That Doesn't Hire People",
		date: "2026-09-19",
		dateLabel: "19 сентября 2026",
		excerpt:
			"Пять лет я руководил агентством, потом закрыл его и собрал NCAi с нуля. Рассказываю, что это на самом деле: не «ещё один AI-инструмент», а готовая команда агентов, которая разворачивается за несколько шагов — и кому это подходит.",
		excerptEn:
			"I ran an agency for five years, then closed it and built NCAi from scratch. Here's what it actually is — not \"another AI tool,\" but a ready agent team that deploys in a few steps — and who it's for.",
		tags: ["NCAi", "агентство в коробке", "о продукте"],
		category: "ai",
		chars: 2788,
		words: 443,
	},
	{
		slug: "cenovoy-yakor",
		title: "Ценовой якорь: почему дорогой тариф продаёт дешёвый",
		titleEn: "The Price Anchor: Why an Expensive Tier Sells the Cheap One",
		date: "2026-09-16",
		dateLabel: "16 сентября 2026",
		excerpt:
			"Одинаковые тарифы заставляют сравнивать цену. Разная лестница цен заставляет сравнивать ценность. Разбираем механику ценового якоря — и почему без него даже сильный продукт продаёт хуже, чем мог бы.",
		excerptEn:
			"Identical prices make people compare cost. A price ladder makes them compare value. We break down the anchoring effect — and why without it, even a strong product sells worse than it could.",
		tags: ["ценовой якорь", "нейромаркетинг", "оффер"],
		category: "neyromarketing",
		chars: 2840,
		words: 467,
	},
	{
		slug: "sotrudnik-kotoryy-ne-spit",
		title: "Сотрудник, который не спит: сколько на самом деле стоит рутина",
		titleEn: "The Employee Who Never Sleeps: What Routine Really Costs",
		date: "2026-09-12",
		dateLabel: "12 сентября 2026",
		excerpt:
			"Найм команды — это ≈4,1 млн ₽ в год и риск, что человек уйдёт через три месяца. Считаем, во сколько на самом деле обходится рутина — и что меняется, когда её забирает AI-команда, которая не болеет и не увольняется.",
		excerptEn:
			"Hiring a team costs about 4.1M ₽ a year — with the risk someone quits in three months. We do the math on what routine actually costs, and what changes when an AI team that never gets sick or quits takes it over.",
		tags: ["AI-команда", "экономика", "найм"],
		category: "ai",
		chars: 2617,
		words: 413,
	},
	{
		slug: "menedzher-ai-agentstva",
		title: "Менеджер AI-агентства: профессия, которой не было два года назад",
		titleEn: "AI-Agency Manager: a Job That Didn't Exist Two Years Ago",
		date: "2026-09-08",
		dateLabel: "8 сентября 2026",
		excerpt:
			"Два года назад такой профессии не было в резюме. Сегодня «менеджер AI-агентства» — это человек, который управляет цифровой командой и поднимает свой чек за счёт скорости, а не новых часов работы.",
		excerptEn:
			"Two years ago, this job title didn't exist. Today, an \"AI-agency manager\" is someone who runs a digital team and raises their rate through speed, not extra hours worked.",
		tags: ["новая профессия", "AI-агентство", "обучение AI"],
		category: "ai",
		chars: 2669,
		words: 405,
	},
	{
		slug: "doverie-za-7-kasanij",
		title: "Доверие за 7 касаний: цепочка без уговоров",
		titleEn: "Trust in 7 touches: a sequence with no arm-twisting",
		date: "2026-08-27",
		dateLabel: "27 августа 2026",
		excerpt:
			"Никто не покупает у незнакомца. Разбираем, как из четырёх элементов доверия — экспертность, боль, трансформация, продукт — собирается цепочка касаний, которая ведёт клиента от первого «кто ты?» до готовности купить без давления.",
		excerptEn:
			"No one buys from a stranger. We break down how a touch sequence is built from four elements of trust — expertise, pain, transformation, product — carrying a client from the first \"who are you?\" to a purchase with no pressure.",
		tags: ["доверие", "цепочки касаний", "прогрев"],
		category: "doverie",
		chars: 3787,
		words: 563,
	},
	{
		slug: "pochemu-klienty-ne-vozvrashhayutsya",
		title: "Почему клиенты не возвращаются и что с этим делать",
		titleEn: "Why clients don't come back — and what to do about it",
		date: "2026-08-24",
		dateLabel: "24 августа 2026",
		excerpt:
			"Клиент купил один раз и исчез, а вы снова тратите бюджет на привлечение. Разбираем три причины, по которым покупатели не возвращаются, и как достроить воронку так, чтобы повторные продажи шли сами.",
		excerptEn:
			"A client buys once and vanishes, and you're spending budget on acquisition again. We break down three reasons buyers don't return, and how to complete the funnel so repeat sales happen on their own.",
		tags: ["удержание", "повторные продажи", "воронка"],
		category: "voronki",
		chars: 3645,
		words: 526,
	},
	{
		slug: "lid-magnit-kotoryj-zabirayut-sam",
		title: "Лид-магнит, который забирают сами: бесплатный продукт, собирающий базу",
		titleEn: "A lead magnet people actually grab: a free product that builds your list",
		date: "2026-08-22",
		dateLabel: "22 августа 2026",
		excerpt:
			"«Скачайте наш гайд» — и тишина. Почему бесплатные продукты не забирают, как работает химия «бесплатного» и три признака магнита, который приносит не мёртвую базу, а горячих лидов.",
		excerptEn:
			"\"Download our guide\" — then silence. Why free products go unclaimed, how the psychology of \"free\" works, and three signs of a magnet that brings in hot leads, not a dead list.",
		tags: ["лид-магнит", "база", "бесплатный продукт"],
		category: "voronki",
		chars: 3450,
		words: 517,
	},
	{
		slug: "kryuchok-5-sekund",
		title: "Крючок, который цепляет: как завладеть вниманием за 5 секунд",
		titleEn: "A hook that lands: how to grab attention in 5 seconds",
		date: "2026-08-20",
		dateLabel: "20 августа 2026",
		excerpt:
			"Первичный мозг принимает решение за доли секунды и без единого слова. Разбираем три когнитивных ловушки, которые заставляют остановиться и прочитать — и почему «написать крючок» это не про красивый слоган.",
		excerptEn:
			"The primal brain decides in a fraction of a second, without a single word. We break down three cognitive traps that make someone stop and read — and why \"writing a hook\" isn't about a clever tagline.",
		tags: ["нейромаркетинг", "крючок", "внимание"],
		category: "neyromarketing",
		chars: 2151,
		words: 318,
	},
	{
		slug: "bol-pokupatelya",
		title: "Боль клиента: почему люди покупают не решение, а избавление",
		titleEn: "Customer pain: why people buy relief, not a solution",
		date: "2026-08-14",
		dateLabel: "14 августа 2026",
		excerpt:
			"Продукт продают не характеристики, а снятие боли. Разбираем механику: страх потери, эффект упущенной выгоды, социальное доказательство и почему «боль» в оффере работает сильнее «выгоды».",
		excerptEn:
			"A product isn't sold on its features — it's sold on removing pain. We break down the mechanics: loss aversion, FOMO, social proof, and why \"pain\" in an offer outperforms \"benefit.\"",
		tags: ["оффер", "боль", "психология"],
		category: "neyromarketing",
		chars: 2227,
		words: 339,
	},
	{
		slug: "offer-bez-davleniya",
		title: "Оффер, который продаёт без давления: структура, снимающая сопротивление",
		titleEn: "An offer that sells with no pressure: a structure that dissolves resistance",
		date: "2026-08-08",
		dateLabel: "8 августа 2026",
		excerpt:
			"Жёсткие продажи встречают броню. Слабая воронка давит, сильная — снимает возражения заранее. Разбираем формулу оффера: якорь, гарантия, дедлайн и момент, когда мозг говорит «беру».",
		excerptEn:
			"Hard selling meets armor. A weak funnel pushes; a strong one removes objections in advance. We break down the offer formula: anchor, guarantee, deadline, and the moment the brain says \"I'll take it.\"",
		tags: ["оффер", "воронка", "конверсия"],
		category: "voronki",
		chars: 2270,
		words: 333,
	},
	{
		slug: "ai-kopiraiter-neuro-voronka",
		title: "AI-копирайтер по правилам нейро-воронки: промпт, который пишет",
		titleEn: "An AI copywriter that follows neuro-funnel rules: a prompt that actually writes",
		date: "2026-07-30",
		dateLabel: "30 июля 2026",
		excerpt:
			"ChatGPT не пишет «плохо» — вы даёте ему слабое задание. Разбираем, как скормить модели структуру нейро-воронки: крючок, боль, решение, оффер, CTA — и получить текст, который цепляет мозг, а не собирает рерайт.",
		excerptEn:
			"ChatGPT doesn't write \"badly\" — you're giving it a weak brief. We break down how to feed the model a neuro-funnel structure: hook, pain, solution, offer, CTA — and get copy that hooks the brain instead of a rewrite.",
		tags: ["AI", "копирайтинг", "промпты"],
		category: "ai",
		chars: 2623,
		words: 385,
	},
	{
		slug: "tri-oshibki-voronki",
		title: "Три ошибки в воронке, которые убивают конверсию",
		titleEn: "Three funnel mistakes that kill conversion",
		date: "2026-07-22",
		dateLabel: "22 июля 2026",
		excerpt:
			"Размытый крючок, оффер «для всех» и CTA без причины. На реальных примерах показываю, как выглядят три самые дорогие ошибки воронки — и как их чинит система, а не «ещё один лендинг».",
		excerptEn:
			"A vague hook, an offer \"for everyone,\" and a CTA with no reason. Using real examples, I show what the three most expensive funnel mistakes look like — and how a system fixes them, not \"one more landing page.\"",
		tags: ["воронка", "ошибки", "аудит"],
		category: "voronki",
		chars: 2149,
		words: 333,
	},
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogSlugs(): string[] {
	return BLOG_POSTS.map((p) => p.slug);
}

// Сортировка: свежие сверху.
export const BLOG_POSTS_SORTED = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

// Свежая статья — в пределах N дней (для метки NEW и счётчика «новых за 30 дней»).
export function isWithinDays(dateISO: string, days: number): boolean {
	const d = new Date(`${dateISO}T00:00:00`);
	const now = new Date();
	const diff = now.getTime() - d.getTime();
	return diff >= 0 && diff <= days * 24 * 3600 * 1000;
}

export const NEW_DAYS = 30;

// Метка NEW на карточке — только у статей из последней «пачки» публикаций
// (той же даты, что самая свежая статья на сайте), а не у всех, что вышли
// за последние NEW_DAYS: иначе после нескольких публикаций подряд NEW
// копится сразу на куче старых статей и перестаёт значить «новое».
// Как только выходит статья со свежей датой — метка сама уходит со всех
// прежних, никаких ручных правок не нужно.
export const LATEST_POST_DATE = BLOG_POSTS.reduce((max, p) => (p.date > max ? p.date : max), BLOG_POSTS[0]?.date ?? "");
export function isLatestBatch(dateISO: string): boolean {
	return dateISO === LATEST_POST_DATE;
}

// Количество страниц на сайте (статические маршруты: главная + разделы +
// статьи блога + главы книги). Используется в блоке «статы» на /blog.
export const SITE_PAGES = 53;

// Сводные статы блога для шапки /blog.
export const BLOG_STATS = {
	materials: BLOG_POSTS.length,
	chars: BLOG_POSTS.reduce((s, p) => s + p.chars, 0),
	words: BLOG_POSTS.reduce((s, p) => s + p.words, 0),
	readingMinutes: Math.max(1, Math.round(BLOG_POSTS.reduce((s, p) => s + p.words, 0) / 180)),
	pages: SITE_PAGES,
	newIn30: BLOG_POSTS.filter((p) => isWithinDays(p.date, NEW_DAYS)).length,
};

// Ритм публикаций для визуализации на /blog — считаем из тех же дат,
// что уже лежат в BLOG_POSTS, ничего не придумываем. pct — позиция
// точки на шкале (0 = первая статья, 100 = последняя).
export interface BlogCadencePoint {
	date: string;
	pct: number;
}

function daysBetween(a: string, b: string): number {
	const ta = new Date(`${a}T00:00:00`).getTime();
	const tb = new Date(`${b}T00:00:00`).getTime();
	return Math.round((tb - ta) / (24 * 3600 * 1000));
}

export const BLOG_CADENCE = (() => {
	const dates = [...BLOG_POSTS].map((p) => p.date).sort();
	const first = dates[0];
	const last = dates[dates.length - 1];
	const span = Math.max(1, daysBetween(first, last));
	const points: BlogCadencePoint[] = dates.map((d) => ({
		date: d,
		pct: (daysBetween(first, d) / span) * 100,
	}));
	const gaps: number[] = [];
	for (let i = 1; i < dates.length; i++) gaps.push(daysBetween(dates[i - 1], dates[i]));
	const avgGap = Math.round((gaps.reduce((s, g) => s + g, 0) / gaps.length) * 10) / 10;
	const minGap = Math.min(...gaps);
	const maxGap = Math.max(...gaps);
	return { points, span, first, last, avgGap, minGap, maxGap };
})();
