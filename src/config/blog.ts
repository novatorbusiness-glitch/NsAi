// Блог: порядок статей, тема, дата и финальная плашка. Новая статья — файл в content/blog + строка здесь.
export type Cta = "product" | "path" | "price" | "repeat" | "mentor";

export const posts: { slug: string; tag: string; cta: Cta; updated: string }[] = [
	{ slug: "skolko-stoit-mvp", tag: "Продукт", cta: "product", updated: "2026-10-08" },
	{ slug: "pervye-platyashchie-klienty", tag: "Первые клиенты", cta: "product", updated: "2026-10-08" },
	{ slug: "podryadchiki-bez-rezultata", tag: "Путь клиента", cta: "path", updated: "2026-10-08" },
	{ slug: "bol-pokupatelya", tag: "Позиционирование", cta: "product", updated: "2026-10-08" },
	{ slug: "cenovoy-yakor", tag: "Цена", cta: "price", updated: "2026-10-08" },
	{ slug: "offer-bez-davleniya", tag: "Оффер", cta: "price", updated: "2026-10-08" },
	{ slug: "kursy-po-ai-a-produkta-net", tag: "AI своими руками", cta: "mentor", updated: "2026-10-08" },
	{ slug: "pochemu-klienty-ne-vozvrashhayutsya", tag: "Повторные продажи", cta: "repeat", updated: "2026-10-08" },
	{ slug: "doverie-za-7-kasanij", tag: "Путь клиента", cta: "path", updated: "2026-10-08" },
	{ slug: "tri-oshibki-voronki", tag: "Путь клиента", cta: "path", updated: "2026-10-08" },
];

export const covers = ["c-emerald", "c-dark", "c-sand", "c-lilac", "c-mint"];

export const ctas: Record<Cta, { title: string; text: string; button: string; href: string; under: string }> = {
	product: { title: "Разберу, кому нужен ваш продукт и что ему продавать", text: "Начнём с одной задачи: за 3–4 дня я посмотрю продукт, предложение и первых клиентов и скажу, что делать первым. Разбор останется у вас.", button: "Написать в Telegram", href: "https://t.me/Ilya_novator", under: "Тест-драйв: 40 000 ₽ · 3–4 дня" },
	path: { title: "Найду, где теряются заявки, и скажу, что чинить первым", text: "За 3–4 дня нарисую ваш путь клиента от первого касания до оплаты, найду самые дорогие дыры и разложу, в каком порядке их закрывать.", button: "Написать в Telegram", href: "https://t.me/Ilya_novator", under: "Тест-драйв: 40 000 ₽ · 3–4 дня" },
	price: { title: "Соберу предложение и лестницу цен под ваш продукт", text: "За 3–4 дня разберу, как сейчас звучит ваше предложение, с чем его сравнивают клиенты и какая лестница цен подойдёт именно вам.", button: "Написать в Telegram", href: "https://t.me/Ilya_novator", under: "Тест-драйв: 40 000 ₽ · 3–4 дня" },
	repeat: { title: "Посмотрю, куда уходят клиенты после первой покупки", text: "За 3–4 дня разберу, что происходит с клиентом после оплаты, и скажу, где проще всего вернуть тех, кто уже купил.", button: "Написать в Telegram", href: "https://t.me/Ilya_novator", under: "Тест-драйв: 40 000 ₽ · 3–4 дня" },
	mentor: { title: "Хотите собрать продукт сами?", text: "Проведу по шагам на вашем проекте: раз в неделю разбираем, что получилось, а между встречами я на связи. Код писать не придётся.", button: "Как устроено наставничество", href: "/nastavnichestvo", under: "80 000 ₽ в месяц · один на один" },
};
