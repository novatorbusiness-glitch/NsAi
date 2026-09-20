import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: "Команда под капотом — доступ через бота",
	description: "Книга команды NCAi — закрытый материал, выдаётся через бота NCAi.",
	alternates: { canonical: "/team-book" },
	robots: { index: false, follow: false },
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
