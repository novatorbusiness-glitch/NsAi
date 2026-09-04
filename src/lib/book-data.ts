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

// Вводные разделы книги (00-a / 00-b / 00-c).
// Названия — точные, из <title> соответствующих content/book/*.mdx.
export const BOOK_INTRO_LINKS: BookIntroLink[] = [
	{ title: "Знакомство с книгой", slug: "00-a-znakomstvo", description: "Об авторе и книге" },
	{ title: "Пролог. Манифест Архитектора", slug: "00-b-prolog", description: "Манифест Архитектора" },
	{ title: "Эпилог. Архитектура твоей цифровой монополии", slug: "00-c-epilog", description: "Архитектура цифровой монополии" },
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

// Точные заголовки подглав (для SEO: title/description).
// Слаг → реальное название из <title> файла content/book/*.mdx
// (убраны суффикс « — Нейро-воронка · NcAi» и номер «X.Y »).
export const BOOK_SUBCHAPTER_TITLES: Record<string, string> = {
	"00-a-znakomstvo": "Знакомство с книгой",
	"00-b-prolog": "Пролог. Манифест Архитектора",
	"00-c-epilog": "Эпилог. Архитектура твоей цифровой монополии",
	"1-1-kognitivnye-lovushki": "Пять когнитивных ловушек",
	"1-2-nejrokopiraiting": "Нейрокопирайтинг",
	"1-3-lid-magnit": "Лид-магнит",
	"1-4-vizualnye-stimuly": "Визуальные стимулы",
	"2-1-produktovaya-matrica": "Продуктовая матрица: каждый продукт ведёт к следующему",
	"2-2-anatomiya-voronki": "Анатомия воронки: из каких конструкций она состоит",
	"2-3-arhitektura-voronki": "Выбор архитектуры: какая воронка нужна твоему бизнесу",
	"2-4-finalnaya-sborka": "Финальная сборка: соединяем элементы в работающий механизм",
	"3-1-fiziologiya-uderzhaniya": "Физиология удержания: почему одни тексты читают до конца",
	"3-2-chetyre-elementa-doveriya": "Четыре несущих элемента доверия",
	"3-3-cepochki-kasanij": "Цепочки касаний: путь от подписки до заявки",
	"3-4-usilenie-ohvatov": "Усиление охватов: один материал — пять площадок",
	"3-5-ai-kopiraiter": "AI как копирайтер: автоматизация без потери голоса",
	"4-1-anatomiya-kreativa": "Почему один нейро-креатив стоит миллиона рублей бюджета",
	"4-2-shest-stimulov": "Шесть стимулов: как мозг считывает сильный креатив",
	"4-3-virusnaya-mehanika": "Мемический стимул: говорить на языке, который уже любят",
	"4-4-organicheskij-trafik": "Блог как магнит: органический трафик с помощью контента",
	"4-5-poisk-segmentaciya": "Источники трафика: где искать твоих клиентов",
	"4-6-analitika-trafika": "Приборная панель: трафик по цифрам, а не по ощущениям",
	"4-7-ai-kreativy": "AI-конвейер: сборка сильных креативов за 60 минут",
	"5-1-algoritm-vs-chelovek": "Почему система продаёт стабильнее человека",
	"5-2-stek-avtomatizacii": "Арсенал Архитектора: собираем цифровой экзокортекс",
	"5-3-vebinarnyj-dvigatel": "Сборка автопилота: вебинарная машина с нуля",
	"5-4-audit-voronki": "Аналитика воронки: как найти «дыры» и усилить прибыль",
	"5-5-ai-v-prodazhah": "AI-ассистент для воронки: первый цифровой слой общения",
	"6-1-cifrovye-sotrudniki": "Цифровые сотрудники: AI-агенты с правом на локальные решения",
	"6-2-razrabotka-bez-programmistov": "Разработка в новой логике: IT-инфраструктура на естественном языке",
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
			{ slug: "1-1-kognitivnye-lovushki", title: "Пять когнитивных ловушек" },
			{ slug: "1-2-nejrokopiraiting", title: "Нейрокопирайтинг" },
			{ slug: "1-3-lid-magnit", title: "Лид-магнит" },
			{ slug: "1-4-vizualnye-stimuly", title: "Визуальные стимулы" },
		],
	},
	{
		id: 2,
		title: "Инженерия систем",
		subs: [
			{ slug: "2-1-produktovaya-matrica", title: "Продуктовая матрица: каждый продукт ведёт к следующему" },
			{ slug: "2-2-anatomiya-voronki", title: "Анатомия воронки: из каких конструкций она состоит" },
			{ slug: "2-3-arhitektura-voronki", title: "Выбор архитектуры: какая воронка нужна твоему бизнесу" },
			{ slug: "2-4-finalnaya-sborka", title: "Финальная сборка: соединяем элементы в работающий механизм" },
		],
	},
	{
		id: 3,
		title: "Синтез доверия",
		subs: [
			{ slug: "3-1-fiziologiya-uderzhaniya", title: "Физиология удержания: почему одни тексты читают до конца" },
			{ slug: "3-2-chetyre-elementa-doveriya", title: "Четыре несущих элемента доверия" },
			{ slug: "3-3-cepochki-kasanij", title: "Цепочки касаний: путь от подписки до заявки" },
			{ slug: "3-4-usilenie-ohvatov", title: "Усиление охватов: один материал — пять площадок" },
			{ slug: "3-5-ai-kopiraiter", title: "AI как копирайтер: автоматизация без потери голоса" },
		],
	},
	{
		id: 4,
		title: "Трафик",
		subs: [
			{ slug: "4-1-anatomiya-kreativa", title: "Почему один нейро-креатив стоит миллиона рублей бюджета" },
			{ slug: "4-2-shest-stimulov", title: "Шесть стимулов: как мозг считывает сильный креатив" },
			{ slug: "4-3-virusnaya-mehanika", title: "Мемический стимул: говорить на языке, который уже любят" },
			{ slug: "4-4-organicheskij-trafik", title: "Блог как магнит: органический трафик с помощью контента" },
			{ slug: "4-5-poisk-segmentaciya", title: "Источники трафика: где искать твоих клиентов" },
			{ slug: "4-6-analitika-trafika", title: "Приборная панель: трафик по цифрам, а не по ощущениям" },
			{ slug: "4-7-ai-kreativy", title: "AI-конвейер: сборка сильных креативов за 60 минут" },
		],
	},
	{
		id: 5,
		title: "Автоматизация",
		subs: [
			{ slug: "5-1-algoritm-vs-chelovek", title: "Почему система продаёт стабильнее человека" },
			{ slug: "5-2-stek-avtomatizacii", title: "Арсенал Архитектора: собираем цифровой экзокортекс" },
			{ slug: "5-3-vebinarnyj-dvigatel", title: "Сборка автопилота: вебинарная машина с нуля" },
			{ slug: "5-4-audit-voronki", title: "Аналитика воронки: как найти «дыры» и усилить прибыль" },
			{ slug: "5-5-ai-v-prodazhah", title: "AI-ассистент для воронки: первый цифровой слой общения" },
		],
	},
	{
		id: 6,
		title: "Автономный разум",
		subs: [
			{ slug: "6-1-cifrovye-sotrudniki", title: "Цифровые сотрудники: AI-агенты с правом на локальные решения" },
			{ slug: "6-2-razrabotka-bez-programmistov", title: "Разработка в новой логике: IT-инфраструктура на естественном языке" },
		],
	},
];
