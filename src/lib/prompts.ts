// Каталог промптов NCAi — по книге «Нейро-Воронка» (knowledge/prompts_index.md, 30 готовых промптов).
// Группировка по категориям, каждый промпт связан с главой книги (ссылка /book/<slug>).

export interface Prompt {
	id: string;
	title: string;
	source: string;
	chapterSlug: string | null;
}

export interface PromptCategory {
	category: string;
	emoji: string;
	description: string;
	prompts: Prompt[];
}

// Мапа «глава X.Y» → слаг страницы книги.
const CH: Record<string, string | null> = {
	"1.1": "1-1-kognitivnye-lovushki",
	"1.2": "1-2-nejrokopiraiting",
	"1.3": "1-3-lid-magnit",
	"1.4": "1-4-vizualnye-stimuly",
	"2.1": "2-1-produktovaya-matrica",
	"2.2": "2-2-anatomiya-voronki",
	"2.3": "2-3-arhitektura-voronki",
	"2.4": "2-4-finalnaya-sborka",
	"3.1": "3-1-fiziologiya-uderzhaniya",
	"3.2": "3-2-chetyre-elementa-doveriya",
	"3.3": "3-3-cepochki-kasanij",
	"3.4": "3-4-usilenie-ohvatov",
	"3.5": "3-5-ai-kopiraiter",
	"4.1": "4-1-anatomiya-kreativa",
	"4.2": "4-2-shest-stimulov",
	"4.3": "4-3-virusnaya-mehanika",
	"4.4": "4-4-organicheskij-trafik",
	"4.5": "4-5-poisk-segmentaciya",
	"4.6": "4-6-analitika-trafika",
	"4.7": "4-7-ai-kreativy",
	"5.1": "5-1-algoritm-vs-chelovek",
	"5.2": "5-2-stek-avtomatizacii",
	"5.3": "5-3-vebinarnyj-dvigatel",
	"5.4": "5-4-audit-voronki",
	"5.5": "5-5-ai-v-prodazhah",
	"6.1": "6-1-cifrovye-sotrudniki",
	"6.2": "6-2-razrabotka-bez-programmistov",
};

const P = (
	id: string,
	title: string,
	chapter: string,
	link: string | null,
): Prompt => ({ id, title, source: chapter, chapterSlug: link });

const p = (id: string, title: string, chapter: string): Prompt =>
	P(id, title, chapter, CH[chapter] ?? null);

export const PROMPT_CATEGORIES: PromptCategory[] = [
	{
		category: "продажи",
		emoji: "💰",
		description: "Промпты ядра системы: воронки, офферы, скрипты, доверие, аналитика.",
		prompts: [
			p("neuro-01", "Аудит точки перехода и смена языка Архитектора", "Вступление"),
			p("neuro-03", "Пять когнитивных ловушек: аудит оффера и первого экрана", "1.1"),
			p("neuro-04", "Нейрокопирайтинг: переписать текст по формулам", "1.2"),
			p("neuro-05", "Лид-магнит: спроектировать бесплатный продукт-артефакт", "1.3"),
			p("neuro-06", "Визуальные стимулы: 9 механизмов для креатива", "1.4"),
			p("neuro-07", "Продуктовая матрица: позиционирование + портрет + линейка", "2.1"),
			p("neuro-08", "Анатомия воронки: разобрать страницу на элементы и сигналы", "2.2"),
			p("neuro-09", "Выбор архитектуры: подобрать модель воронки из 15", "2.3"),
			p("neuro-10", "Финальная сборка: собрать Tripwire-воронку по шагам", "2.4"),
			p("neuro-13", "Цепочки касаний: собрать автоворонку-сценарий", "3.3"),
			p("neuro-22", "AI-конвейер: сильный креатив за 60 минут", "4.7"),
			p("neuro-23", "Почему система продаёт стабильнее человека", "5.1"),
			p("neuro-24", "Арсенал Архитектора: цифровой экзокортекс по ролям", "5.2"),
			p("neuro-25", "Сборка автопилота: вебинарная машина с нуля", "5.3"),
			p("neuro-26", "Аналитика воронки: CR1–CR4 и «дыры»", "5.4"),
			p("neuro-27", "AI-ассистент: собрать мастер-промпт", "5.5"),
		],
	},
	{
		category: "маркетинг",
		emoji: "📣",
		description: "Креативы, трафик, охваты и приборная панель показателей.",
		prompts: [
			p("neuro-14", "Усиление охватов: 15 чит-кодов для контента", "3.4"),
			p("neuro-16", "Нейро-креатив: реклама, проходящая сквозь фильтры", "4.1"),
			p("neuro-17", "Шесть стимулов: собрать креатив системно", "4.2"),
			p("neuro-18", "Мемический стимул: 24 мем-шаблона для креатива", "4.3"),
			p("neuro-19", "Блог как магнит: 4 опоры + 3 категории контента", "4.4"),
			p("neuro-20", "Источники трафика: выбрать каналы под состояние аудитории", "4.5"),
			p("neuro-21", "Приборная панель: CTR/CPL/CR/ROMI + A/B + декомпозиция", "4.6"),
		],
	},
	{
		category: "контент",
		emoji: "✍️",
		description: "Контент, который греет и продаёт: удержание, доверие, AI-копирайтинг.",
		prompts: [
			p("neuro-11", "Физиология удержания: серия «джебов» перед «правым хуком»", "3.1"),
			p("neuro-12", "Четыре элемента доверия: контент-план прогрева", "3.2"),
			p("neuro-15", "AI как копирайтер: конвейер «контент за 6 шагов»", "3.5"),
		],
	},
	{
		category: "книги",
		emoji: "📖",
		description: "Промпты книги «Нейро-Воронка»: манифест и архитектура цифровой монополии.",
		prompts: [
			P("neuro-02", "Манифест Архитектора: переход от хаоса к системе", "Пролог", "00-b-prolog"),
			P("neuro-30", "Эпилог: первый собранный контур и цифровая монополия", "Эпилог", "00-c-epilog"),
		],
	},
	{
		category: "разработка",
		emoji: "⚙️",
		description: "Промпты для разработки без программистов: агенты и live-coding.",
		prompts: [
			p("neuro-28", "Цифровые сотрудники: AI-агенты с правом на локальные решения", "6.1"),
			p("neuro-29", "Разработка в новой логике: live coding на естественном языке", "6.2"),
		],
	},
];

export const PROMPTS_TOTAL = PROMPT_CATEGORIES.reduce((sum, c) => sum + c.prompts.length, 0);
