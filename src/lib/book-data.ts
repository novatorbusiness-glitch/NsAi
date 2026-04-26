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
