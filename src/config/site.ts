// Всё, что меняется на сайте, — здесь: имя, роль, меню, контакты, реквизиты.
export const site = {
	url: "https://ilya-novitsky.ru",
	name: "Илья Новицкий",
	role: "архитектор продукта и продаж",
	og: "/og/home.jpg",
	roleFooter: "архитектор продукта и продаж",
	metrikaId: 112582890,
	contacts: {
		telegram: "https://t.me/Ilya_novator",
		telegramHandle: "@Ilya_novator",
		maxPhone: "+7 965 872-45-68",
		max: "https://max.ru/u/f9LHodD0cOJ7sFFvli4XlmkEOONE_hl47mUJ5CDNggHpSU7D9dpD65nPB3w",
		channel: "https://t.me/lowcortisol_ai",
		channelHandle: "@lowcortisol_ai",
		// Экспресс-разбор за 190 ₽ — бот @NCAi_Agency_bot (ведёт чат «Контент · Боты»), метка start=site — переход с сайта.
		expressBot: "https://t.me/NCAi_Agency_bot?start=site",
		email: "ilya.novitskii@yandex.ru",
	},
	// Книга на Литрес (вышла 24.10): ссылка на карточке книги на главной, на /book и в разметке Book.
	litres: "https://www.litres.ru/book/il-ia-novitskii-34062304/neiro-voronka-kak-stroit-sistemy-prodazh-74459107/",
	requisites: "Новицкий Илья Сергеевич, самозанятый (НПД), ИНН 550115335168",
	// Шапка: четыре пункта; меню на телефоне и подвал — все страницы.
	nav: [
		{ href: "/kak-my-rabotaem", label: "Как работаю" },
		{ href: "/keisy", label: "Кейсы" },
		{ href: "/svoya-ai-sreda", label: "Консультация по AI" },
		{ href: "/blog", label: "Блог" },
	],
	menu: [
		{ href: "/kak-my-rabotaem", label: "Как работаю" },
		{ href: "/keisy", label: "Кейсы" },
		{ href: "/svoya-ai-sreda", label: "Консультация по AI" },
		{ href: "/blog", label: "Блог" },
	],
	footerNav: [
		{ href: "/kak-my-rabotaem", label: "Как работаю" },
		{ href: "/keisy", label: "Кейсы" },
		{ href: "/svoya-ai-sreda", label: "Консультация по AI" },
		{ href: "/blog", label: "Блог" },
		{ href: "/book", label: "Книга" },
	],
	legal: [
		{ href: "/privacy", label: "Политика обработки данных" },
		{ href: "/consent", label: "Согласие на обработку данных" },
		{ href: "/offer", label: "Оферта" },
	],
} as const;
