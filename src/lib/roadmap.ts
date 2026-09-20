/**
 * Карта развития NCAi.
 *
 * Принцип: даты старта разработки НЕ заявлены, а взяты из рабочей базы —
 * первый запуск агента 20.08.2026, первый воркспейс 27.08.2026, за первый
 * месяц 719 запусков и 295 задач. Такие пункты помечены `proof`, чтобы
 * читатель отличал факт от намерения.
 *
 * Будущие этапы — планы, а не обещания: сроков не гарантируем, потому что
 * подтвердить их пока нечем (см. раздел 0 базы знаний о границе честности).
 */
export type Stage = {
	when: string;
	whenEn: string;
	what: string;
	whatEn: string;
	text: string;
	textEn: string;
	state: "done" | "now" | "plan";
	proof?: string;
	proofEn?: string;
};

export const ROADMAP: Stage[] = [
	{
		when: "2016–2019",
		whenEn: "2016–2019",
		what: "Практика до системы",
		whatEn: "Practice before the system",
		text: "Первые продажи, сайты, контекст, упаковка, аналитика. Один навык тянул за собой следующий — так набралась насмотренность, из которой потом выросла методология.",
		textEn: "First sales, websites, ads, packaging, analytics. One skill pulled in the next — that accumulated experience later became the methodology.",
		state: "done",
	},
	{
		when: "2020–2025",
		whenEn: "2020–2025",
		what: "Агентство Novator.vip",
		whatEn: "Novator.vip agency",
		text: "Пять лет своего агентства маркетинга и автоматизации: 300+ проектов, 50M+ ₽ в запусках. Самые активные годы продаж — 2023, 2024 и 2025.",
		textEn: "Five years running a marketing and automation agency: 300+ projects, 50M+ ₽ in launches. The busiest sales years were 2023, 2024 and 2025.",
		state: "done",
	},
	{
		when: "Ноябрь 2025",
		whenEn: "November 2025",
		what: "Выход из агентства",
		whatEn: "Leaving the agency",
		text: "Снаружи работающий бизнес, изнутри — бег по дорожке: рост упирался в найм. Вышел, чтобы собрать систему, которая не держится на количестве людей.",
		textEn: "A working business from the outside, a treadmill from the inside: growth was capped by hiring. I left to build a system that doesn't depend on headcount.",
		state: "done",
	},
	{
		when: "Первая половина 2026",
		whenEn: "First half of 2026",
		what: "Данные и методология",
		whatEn: "Data and methodology",
		text: "Не разработка, а сбор фактуры: что повторяется в воронках разных ниш и где они рвутся. Из этого выросла книга «Нейро-Воронка» — 6 глав, 30 подглав.",
		textEn: "Not development but groundwork: what repeats across funnels in different niches and where they break. That became the book Neuro-Funnel — 6 chapters, 30 subchapters.",
		state: "done",
	},
	{
		when: "20 августа 2026",
		whenEn: "20 August 2026",
		what: "Старт активной разработки",
		whatEn: "Active development starts",
		text: "Первый запуск агента в рабочей системе. Через неделю развёрнут первый воркспейс — с этого момента платформа существует не на бумаге.",
		textEn: "The first agent run in the live system. A week later the first workspace was provisioned — from that point the platform existed for real.",
		state: "done",
		proof: "дата из базы, не заявление",
		proofEn: "date from the database, not a claim",
	},
	{
		when: "Сентябрь 2026",
		whenEn: "September 2026",
		what: "Система обкатывается на себе",
		whatEn: "The system is tested on itself",
		text: "За первый месяц — 719 запусков агентов и 295 задач в собственном воркспейсе. Платформа строит сама себя: это и разработка, и проверка метода одновременно.",
		textEn: "719 agent runs and 295 tasks in our own workspace in the first month. The platform builds itself — that's development and method validation at once.",
		state: "now",
		proof: "цифры из базы на 20.09.2026",
		proofEn: "figures from the database, 20.09.2026",
	},
	{
		when: "До конца 2026",
		whenEn: "By end of 2026",
		what: "Первые клиенты на месячном цикле",
		whatEn: "First clients on the monthly cycle",
		text: "Приёмка задач и критерии готовности применяются к каждой задаче, кабинет показывает проверки и историю правок. Продаём месяц работы, а не подписку.",
		textEn: "Task intake and acceptance criteria applied to every task; the workspace shows reviews and revision history. We sell the month of work, not a subscription.",
		state: "plan",
	},
	{
		when: "Первая половина 2027",
		whenEn: "First half of 2027",
		what: "Распаковка и подписка в продажу",
		whatEn: "Unboxing and subscription go on sale",
		text: "Только после того, как метод обкатан на живых бизнесах. Подписка — продукт самообслуживания, и выпускать её раньше значит оставить клиента один на один с сырой системой.",
		textEn: "Only after the method has been proven on real businesses. A subscription is self-serve, and shipping it early means leaving the client alone with a raw system.",
		state: "plan",
	},
	{
		when: "Вторая половина 2027",
		whenEn: "Second half of 2027",
		what: "Масштаб по нишам",
		whatEn: "Scaling across niches",
		text: "Отраслевые шаблоны команд и задач, чтобы новый клиент получал заполненную доску в первый день, а не пустой кабинет.",
		textEn: "Industry templates for teams and tasks, so a new client gets a filled board on day one instead of an empty workspace.",
		state: "plan",
	},
];
