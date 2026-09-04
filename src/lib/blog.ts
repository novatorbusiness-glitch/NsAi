// Каталог статей блога NCAi. Метаданные — здесь, тело — в content/blog/<slug>.mdx.
export interface BlogPost {
	slug: string;
	title: string;
	date: string; // ISO
	dateLabel: string; // для отображения
	excerpt: string;
	tags: string[];
	category: BlogCategory; // ключ категории для фильтра
	chars: number; // знаков (с пробелами) в тексте статьи
	words: number; // слов — для расчёта времени чтения
}

// Категории блога (чипы-фильтры). Ключ «all» — показывать всё.
export type BlogCategory = "neyromarketing" | "voronki" | "doverie" | "ai";

export const BLOG_CATEGORIES: { key: BlogCategory | "all"; label: string }[] = [
	{ key: "all", label: "Всё" },
	{ key: "neyromarketing", label: "Нейромаркетинг" },
	{ key: "voronki", label: "Воронки" },
	{ key: "doverie", label: "Доверие" },
	{ key: "ai", label: "AI" },
];

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: "doverie-za-7-kasanij",
		title: "Как построить доверие за 7 касаний: цепочка, которая продаёт без уговоров",
		date: "2026-08-27",
		dateLabel: "27 августа 2026",
		excerpt:
			"Никто не покупает у незнакомца. Разбираем, как из четырёх элементов доверия — экспертность, боль, трансформация, продукт — собирается цепочка касаний, которая ведёт клиента от первого «кто ты?» до готовности купить без давления.",
		tags: ["доверие", "цепочки касаний", "прогрев"],
		category: "doverie",
		chars: 3787,
		words: 563,
	},
	{
		slug: "pochemu-klienty-ne-vozvrashhayutsya",
		title: "Почему клиенты не возвращаются и что с этим делать",
		date: "2026-08-24",
		dateLabel: "24 августа 2026",
		excerpt:
			"Клиент купил один раз и исчез, а вы снова тратите бюджет на привлечение. Разбираем три причины, по которым покупатели не возвращаются, и как достроить воронку так, чтобы повторные продажи шли сами.",
		tags: ["удержание", "повторные продажи", "воронка"],
		category: "voronki",
		chars: 3645,
		words: 526,
	},
	{
		slug: "lid-magnit-kotoryj-zabirayut-sam",
		title: "Лид-магнит, который забирают сами: бесплатный продукт, собирающий базу",
		date: "2026-08-22",
		dateLabel: "22 августа 2026",
		excerpt:
			"«Скачайте наш гайд» — и тишина. Почему бесплатные продукты не забирают, как работает химия «бесплатного» и три признака магнита, который приносит не мёртвую базу, а горячих лидов.",
		tags: ["лид-магнит", "база", "бесплатный продукт"],
		category: "voronki",
		chars: 3450,
		words: 517,
	},
	{
		slug: "kryuchok-5-sekund",
		title: "Крючок, который цепляет: как завладеть вниманием за 5 секунд",
		date: "2026-08-20",
		dateLabel: "20 августа 2026",
		excerpt:
			"Первичный мозг принимает решение за доли секунды и без единого слова. Разбираем три когнитивных ловушки, которые заставляют остановиться и прочитать — и почему «написать крючок» это не про красивый слоган.",
		tags: ["нейромаркетинг", "крючок", "внимание"],
		category: "neyromarketing",
		chars: 2151,
		words: 318,
	},
	{
		slug: "bol-pokupatelya",
		title: "Боль клиента: почему люди покупают не решение, а избавление",
		date: "2026-08-14",
		dateLabel: "14 августа 2026",
		excerpt:
			"Продукт продают не характеристики, а снятие боли. Разбираем механику: страх потери, эффект упущенной выгоды, социальное доказательство и почему «боль» в оффере работает сильнее «выгоды».",
		tags: ["оффер", "боль", "психология"],
		category: "neyromarketing",
		chars: 2227,
		words: 339,
	},
	{
		slug: "offer-bez-davleniya",
		title: "Оффер, который продаёт без давления: структура, снимающая сопротивление",
		date: "2026-08-08",
		dateLabel: "8 августа 2026",
		excerpt:
			"Жёсткие продажи встречают броню. Слабая воронка давит, сильная — снимает возражения заранее. Разбираем формулу оффера: якорь, гарантия, дедлайн и момент, когда мозг говорит «беру».",
		tags: ["оффер", "воронка", "конверсия"],
		category: "voronki",
		chars: 2270,
		words: 333,
	},
	{
		slug: "ai-kopiraiter-neuro-voronka",
		title: "AI-копирайтер по правилам нейро-воронки: промпт, который пишет",
		date: "2026-07-30",
		dateLabel: "30 июля 2026",
		excerpt:
			"ChatGPT не пишет «плохо» — вы даёте ему слабое задание. Разбираем, как скормить модели структуру нейро-воронки: крючок, боль, решение, оффер, CTA — и получить текст, который цепляет мозг, а не собирает рерайт.",
		tags: ["AI", "копирайтинг", "промпты"],
		category: "ai",
		chars: 2623,
		words: 385,
	},
	{
		slug: "tri-oshibki-voronki",
		title: "Три ошибки в воронке, которые убивают конверсию",
		date: "2026-07-22",
		dateLabel: "22 июля 2026",
		excerpt:
			"Размытый крючок, оффер «для всех» и CTA без причины. На реальных примерах показываю, как выглядят три самые дорогие ошибки воронки — и как их чинит система, а не «ещё один лендинг».",
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
