// Блог: порядок статей, тема, дата и вид финальной плашки (тексты плашек — content/pages/blog.ts).
// Новая статья — файл в content/blog + строка здесь.
export type Cta = "product" | "path" | "price" | "repeat" | "mentor";

export const posts: { slug: string; tag: string; cta: Cta; updated: string }[] = [
	{ slug: "skolko-stoit-mvp", tag: "Продукт", cta: "product", updated: "2026-10-13" },
	{ slug: "pervye-platyashchie-klienty", tag: "Первые клиенты", cta: "product", updated: "2026-10-08" },
	{ slug: "podryadchiki-bez-rezultata", tag: "Путь клиента", cta: "path", updated: "2026-10-08" },
	{ slug: "bol-pokupatelya", tag: "Позиционирование", cta: "product", updated: "2026-10-08" },
	{ slug: "cenovoy-yakor", tag: "Цена", cta: "price", updated: "2026-10-08" },
	{ slug: "offer-bez-davleniya", tag: "Оффер", cta: "price", updated: "2026-10-08" },
	{ slug: "kursy-po-ai-a-produkta-net", tag: "AI своими руками", cta: "mentor", updated: "2026-10-13" },
	{ slug: "pochemu-klienty-ne-vozvrashhayutsya", tag: "Повторные продажи", cta: "repeat", updated: "2026-10-08" },
	{ slug: "doverie-za-7-kasanij", tag: "Путь клиента", cta: "path", updated: "2026-10-08" },
	{ slug: "tri-oshibki-voronki", tag: "Путь клиента", cta: "path", updated: "2026-10-08" },
];

export const covers = ["c-emerald", "c-dark", "c-sand", "c-lilac", "c-mint"];
