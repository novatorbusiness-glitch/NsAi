export interface BookChapterLink {
	id: number;
	title: string;
	entrySlug: string;
}

export interface BookIntroLink {
	title: string;
	slug: string;
	description: string;
}

export const BOOK_INTRO_LINKS: BookIntroLink[] = [
	{ title: "Знакомство", slug: "00-a-znakomstvo", description: "Об авторе и книге" },
	{ title: "Пролог", slug: "00-b-prolog", description: "Манифест Архитектора" },
	{ title: "Эпилог", slug: "00-c-epilog", description: "Архитектура цифровой монополии" },
];

// Single source of truth for chapter entry links.
// We link each chapter to its first existing subchapter file slug.
export const BOOK_CHAPTER_LINKS: BookChapterLink[] = [
	{ id: 1, title: "Нейромаркетинг", entrySlug: "1-1-kognitivnye-lovushki" },
	{ id: 2, title: "Инженерия систем", entrySlug: "2-1-produktovaya-matrica" },
	{ id: 3, title: "Синтез доверия", entrySlug: "3-1-fiziologiya-uderzhaniya" },
	{ id: 4, title: "Трафик", entrySlug: "4-1-anatomiya-kreativa" },
	{ id: 5, title: "Автоматизация", entrySlug: "5-1-algoritm-vs-chelovek" },
	{ id: 6, title: "Автономный разум", entrySlug: "6-1-cifrovye-sotrudniki" },
];

// Человеческие заголовки подглав (для SEO: title/description).
// Слаг → нормальный заголовок из книги «Нейро-Воронка».
export const BOOK_SUBCHAPTER_TITLES: Record<string, string> = {
	"00-a-znakomstvo": "Знакомство",
	"00-b-prolog": "Пролог. Манифест Архитектора",
	"00-c-epilog": "Эпилог. Архитектура твоей цифровой монополии",
	"1-1-kognitivnye-lovushki": "Когнитивные ловушки",
	"1-2-nejrokopiraiting": "Нейрокопирайтинг",
	"1-3-lid-magnit": "Лид-магнит",
	"1-4-vizualnye-stimuly": "Визуальные стимулы",
	"2-1-produktovaya-matrica": "Продуктовая матрица",
	"2-2-anatomiya-voronki": "Анатомия воронки",
	"2-3-arhitektura-voronki": "Архитектура воронки",
	"2-4-finalnaya-sborka": "Финальная сборка",
	"3-1-fiziologiya-uderzhaniya": "Физиология удержания",
	"3-2-chetyre-elementa-doveriya": "Четыре элемента доверия",
	"3-3-cepochki-kasanij": "Цепочки касаний",
	"3-4-usilenie-ohvatov": "Усиление охватов",
	"3-5-ai-kopiraiter": "AI-копирайтер",
	"4-1-anatomiya-kreativa": "Анатомия креатива",
	"4-2-shest-stimulov": "Шесть стимулов",
	"4-3-virusnaya-mehanika": "Вирусная механика",
	"4-4-organicheskij-trafik": "Органический трафик",
	"4-5-poisk-segmentaciya": "Поиск и сегментация",
	"4-6-analitika-trafika": "Аналитика трафика",
	"4-7-ai-kreativy": "AI-креативы",
	"5-1-algoritm-vs-chelovek": "Алгоритм против человека",
	"5-2-stek-avtomatizacii": "Стек автоматизации",
	"5-3-vebinarnyj-dvigatel": "Вебинарный двигатель",
	"5-4-audit-voronki": "Аудит воронки",
	"5-5-ai-v-prodazhah": "AI в продажах",
	"6-1-cifrovye-sotrudniki": "Цифровые сотрудники",
	"6-2-razrabotka-bez-programmistov": "Разработка без программистов",
};

// Получить человеческий заголовок подглавы (слаг → название).
export function getSubchapterTitle(slug: string): string {
	return BOOK_SUBCHAPTER_TITLES[slug] ?? slug.replace(/-/g, " ");
}

// Подглавы по главам (для интерактивного оглавления на страницах книги).
export interface BookChapterSub {
	id: number;
	title: string;
	subs: { slug: string; title: string }[];
}

export const BOOK_CHAPTER_SUBS: BookChapterSub[] = [
	{
		id: 1,
		title: "Нейромаркетинг",
		subs: [
			{ slug: "1-1-kognitivnye-lovushki", title: "Когнитивные ловушки" },
			{ slug: "1-2-nejrokopiraiting", title: "Нейрокопирайтинг" },
			{ slug: "1-3-lid-magnit", title: "Лид-магнит" },
			{ slug: "1-4-vizualnye-stimuly", title: "Визуальные стимулы" },
		],
	},
	{
		id: 2,
		title: "Инженерия систем",
		subs: [
			{ slug: "2-1-produktovaya-matrica", title: "Продуктовая матрица" },
			{ slug: "2-2-anatomiya-voronki", title: "Анатомия воронки" },
			{ slug: "2-3-arhitektura-voronki", title: "Архитектура воронки" },
			{ slug: "2-4-finalnaya-sborka", title: "Финальная сборка" },
		],
	},
	{
		id: 3,
		title: "Синтез доверия",
		subs: [
			{ slug: "3-1-fiziologiya-uderzhaniya", title: "Физиология удержания" },
			{ slug: "3-2-chetyre-elementa-doveriya", title: "Четыре элемента доверия" },
			{ slug: "3-3-cepochki-kasanij", title: "Цепочки касаний" },
			{ slug: "3-4-usilenie-ohvatov", title: "Усиление охватов" },
			{ slug: "3-5-ai-kopiraiter", title: "AI-копирайтер" },
		],
	},
	{
		id: 4,
		title: "Трафик",
		subs: [
			{ slug: "4-1-anatomiya-kreativa", title: "Анатомия креатива" },
			{ slug: "4-2-shest-stimulov", title: "Шесть стимулов" },
			{ slug: "4-3-virusnaya-mehanika", title: "Вирусная механика" },
			{ slug: "4-4-organicheskij-trafik", title: "Органический трафик" },
			{ slug: "4-5-poisk-segmentaciya", title: "Поиск и сегментация" },
			{ slug: "4-6-analitika-trafika", title: "Аналитика трафика" },
			{ slug: "4-7-ai-kreativy", title: "AI-креативы" },
		],
	},
	{
		id: 5,
		title: "Автоматизация",
		subs: [
			{ slug: "5-1-algoritm-vs-chelovek", title: "Алгоритм против человека" },
			{ slug: "5-2-stek-avtomatizacii", title: "Стек автоматизации" },
			{ slug: "5-3-vebinarnyj-dvigatel", title: "Вебинарный двигатель" },
			{ slug: "5-4-audit-voronki", title: "Аудит воронки" },
			{ slug: "5-5-ai-v-prodazhah", title: "AI в продажах" },
		],
	},
	{
		id: 6,
		title: "Автономный разум",
		subs: [
			{ slug: "6-1-cifrovye-sotrudniki", title: "Цифровые сотрудники" },
			{ slug: "6-2-razrabotka-bez-programmistov", title: "Разработка без программистов" },
		],
	},
];

