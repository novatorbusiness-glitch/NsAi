import type { Metadata } from "next";
import TeamBook from "@/components/pages/TeamBook";

export const metadata: Metadata = {
	title: "NCAi · команда под капотом — 17 сотрудников · 111 промптов",
	description:
		"Книга команды NCAi: 17 AI-сотрудников в 6 отделах (директор, разработка, маркетинг, контент и книга, финансы), 111 готовых промптов в 9 категориях, механика работы агентства под капотом. Карточки агентов, каталог промптов с копированием, поиск ⌘K.",
	alternates: { canonical: "/team-book" },
	openGraph: {
		type: "website",
		title: "NCAi · команда под капотом",
		description: "17 AI-сотрудников · 111 промптов · механика агентства. Как работает команда NCAi сама, 24/7.",
		url: "https://ilya-novitsky.ru/team-book",
	},
};

export default function Page() {
	return <TeamBook />;
}
