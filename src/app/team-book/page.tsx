import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: "Команда под капотом — доступ через бота",
	description: "Книга команды NCAi — закрытый материал, выдаётся через бота NCAi.",
	alternates: { canonical: "/team-book" },
	robots: { index: false, follow: false },
	openGraph: {
		title: "Команда под капотом — доступ через бота",
		description: "Книга команды NCAi — закрытый материал, выдаётся через бота NCAi.",
		url: "/team-book",
		type: "website",
		images: [{ url: "/images/og/team-book.png", width: 1200, height: 630 }],
	},
};

export default function Page() {
	return (
		<ProtectedStub
			title="Команда под капотом"
			description={
				<>
					Книга команды NCAi (сотрудники, промпты, механика работы) —
					закрытый материал. Выдаётся персонально через бота NCAi.
				</>
			}
		/>
	);
}
