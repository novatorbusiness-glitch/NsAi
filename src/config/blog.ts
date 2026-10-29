// Блог: порядок статей, тема, дата и вид финальной плашки (тексты плашек — content/pages/blog.ts).
// Новая статья — файл в content/blog + строка здесь.
export type Cta = "product" | "path" | "price" | "repeat" | "sreda";

export const posts: { slug: string; tag: string; cta: Cta; updated: string }[] = [
	{ slug: "kak-sozdat-ii-agenta", tag: "ИИ-агенты", cta: "sreda", updated: "2026-10-29" },
	{ slug: "skolko-stoit-mvp", tag: "Продукт", cta: "product", updated: "2026-10-22" },
	{ slug: "pervye-platyashchie-klienty", tag: "Первые клиенты", cta: "product", updated: "2026-10-22" },
	{ slug: "podryadchiki-bez-rezultata", tag: "Путь клиента", cta: "path", updated: "2026-10-22" },
	{ slug: "bol-pokupatelya", tag: "Позиционирование", cta: "product", updated: "2026-10-22" },
	{ slug: "cenovoy-yakor", tag: "Цена", cta: "price", updated: "2026-10-22" },
	{ slug: "offer-bez-davleniya", tag: "Оффер", cta: "price", updated: "2026-10-22" },
	{ slug: "kursy-po-ai-a-produkta-net", tag: "ИИ своими руками", cta: "product", updated: "2026-10-22" },
	{ slug: "pochemu-klienty-ne-vozvrashhayutsya", tag: "Повторные продажи", cta: "repeat", updated: "2026-10-22" },
	{ slug: "doverie-za-7-kasanij", tag: "Путь клиента", cta: "path", updated: "2026-10-22" },
	{ slug: "tri-oshibki-voronki", tag: "Путь клиента", cta: "path", updated: "2026-10-22" },
];

export const covers = ["c-emerald", "c-dark", "c-sand", "c-lilac", "c-mint"];
