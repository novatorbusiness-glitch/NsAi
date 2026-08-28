// Единый каталог книг сайта NCAi (обложки, ссылки, ключи переводов).
export interface BookMeta {
	slug: string;
	href: string;
	cover: string;
	titleKey: "book.neuroTitle" | "book.agencyTitle";
	subKey: "book.neuroSub" | "book.agencySub";
	badgeKey: "book.neuroBadge" | "book.agencyBadge";
	accent: string;
}

export const BOOKS: BookMeta[] = [
	{
		slug: "neuro-voronka",
		href: "/book",
		cover: "/covers/neuro-voronka.svg",
		titleKey: "book.neuroTitle",
		subKey: "book.neuroSub",
		badgeKey: "book.neuroBadge",
		accent: "#ffd000",
	},
	{
		slug: "agency-in-a-box",
		href: "/agency-in-a-box",
		cover: "/covers/agency-in-a-box.svg",
		titleKey: "book.agencyTitle",
		subKey: "book.agencySub",
		badgeKey: "book.agencyBadge",
		accent: "#4ecdc4",
	},
];
