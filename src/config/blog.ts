// Блог: порядок статей, тема, дата и вид финальной плашки (тексты плашек — content/pages/blog.ts).
// Новая статья — файл в content/blog + строка здесь.
export type Cta = "product" | "path" | "price" | "repeat" | "sreda" | "team";

export const posts: { slug: string; tag: string; cta: Cta; updated: string }[] = [
	{ slug: "ii-v-prodazhah", tag: "Автоматизация бизнеса", cta: "path", updated: "2026-10-29" },
	{ slug: "vnedrenie-ii-v-biznes", tag: "Внедрение ИИ", cta: "team", updated: "2026-10-29" },
	{ slug: "ii-sotrudnik-dlya-biznesa", tag: "ИИ-агенты", cta: "team", updated: "2026-10-29" },
	{ slug: "kak-sozdat-ii-agenta", tag: "ИИ-агенты", cta: "sreda", updated: "2026-10-29" },
	{ slug: "skolko-stoit-mvp", tag: "Разработка и MVP", cta: "product", updated: "2026-10-22" },
	{ slug: "pervye-platyashchie-klienty", tag: "Маркетинг и продажи", cta: "product", updated: "2026-10-22" },
	{ slug: "podryadchiki-bez-rezultata", tag: "Автоматизация бизнеса", cta: "path", updated: "2026-10-22" },
	{ slug: "bol-pokupatelya", tag: "Маркетинг и продажи", cta: "product", updated: "2026-10-22" },
	{ slug: "cenovoy-yakor", tag: "Маркетинг и продажи", cta: "price", updated: "2026-10-22" },
	{ slug: "offer-bez-davleniya", tag: "Маркетинг и продажи", cta: "price", updated: "2026-10-22" },
	{ slug: "kursy-po-ai-a-produkta-net", tag: "Внедрение ИИ", cta: "product", updated: "2026-10-22" },
	{ slug: "pochemu-klienty-ne-vozvrashhayutsya", tag: "Маркетинг и продажи", cta: "repeat", updated: "2026-10-22" },
	{ slug: "doverie-za-7-kasanij", tag: "Маркетинг и продажи", cta: "path", updated: "2026-10-22" },
	{ slug: "tri-oshibki-voronki", tag: "Маркетинг и продажи", cta: "path", updated: "2026-10-22" },
];

export const covers = ["c-emerald", "c-dark", "c-sand", "c-lilac", "c-mint"];
