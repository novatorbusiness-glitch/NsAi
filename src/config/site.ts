// Всё, что меняется на сайте, — здесь: имя, роль, меню, контакты, реквизиты.
export const site = {
	url: "https://ilya-novitsky.ru",
	name: "Илья Новицкий",
	role: "маркетинг, продукт и автоматизация",
	og: "/og/home.jpg",
	roleFooter: "архитектор продукта и продаж",
	metrikaId: 112582890,
	contacts: {
		telegram: "https://t.me/Ilya_novator",
		telegramHandle: "@Ilya_novator",
		max: "https://max.ru/u/f9LHodD0cOJ7sFFvli4XlmkEOONE_hl47mUJ5CDNggHpSU7D9dpD65nPB3w",
		channel: "https://t.me/lowcortisol_ai",
		channelHandle: "@lowcortisol_ai",
		email: "ilya.novitskii@yandex.ru",
	},
	requisites: "Новицкий Илья Сергеевич, самозанятый (НПД), ИНН 550115335168",
	// Шапка: три пункта; меню на телефоне и подвал — все страницы.
	nav: [
		{ href: "/kak-my-rabotaem", label: "Как мы работаем" },
		{ href: "/keisy", label: "Кейсы" },
		{ href: "/blog", label: "Блог" },
	],
	menu: [
		{ href: "/kak-my-rabotaem", label: "Как мы работаем" },
		{ href: "/keisy", label: "Кейсы" },
		{ href: "/blog", label: "Блог" },
		{ href: "/nastavnichestvo", label: "Наставничество" },
	],
	footerNav: [
		{ href: "/kak-my-rabotaem", label: "Как мы работаем" },
		{ href: "/keisy", label: "Кейсы" },
		{ href: "/blog", label: "Блог" },
		{ href: "/nastavnichestvo", label: "Наставничество" },
		{ href: "/book", label: "Книга" },
	],
	legal: [
		{ href: "/privacy", label: "Политика обработки данных" },
		{ href: "/consent", label: "Согласие на обработку данных" },
		{ href: "/offer", label: "Оферта" },
	],
} as const;
