// Единый каталог книг сайта NCAi (обложки, ссылки, ключи переводов).
export interface BookMeta {
	slug: string;
	href: string;
	cover: string;
	titleKey: "book.neuroTitle";
	subKey: "book.neuroSub";
	badgeKey: "book.neuroBadge";
	accent: string;
}

export const BOOKS: BookMeta[] = [
	{
		slug: "neuro-voronka",
		href: "/book/00-a-znakomstvo",
		cover: "/covers/neuro-voronka.svg",
		titleKey: "book.neuroTitle",
		subKey: "book.neuroSub",
		badgeKey: "book.neuroBadge",
		accent: "#ffd000",
	},
];
