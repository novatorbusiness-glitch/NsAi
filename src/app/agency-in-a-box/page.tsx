import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: "Агентство в коробке — доступ через бота",
	description: "Методология «Агентство в коробке» — закрытый материал, выдаётся через бота NCAi.",
	alternates: { canonical: "/agency-in-a-box" },
	robots: { index: false, follow: false },
};

export default function Page() {
	return (
		<ProtectedStub
			title="Агентство в коробке"
			description={
				<>
					Методология «Агентство в коробке» — закрытый материал.
					Выдаётся персонально через бота NCAi по одноразовой ссылке.
				</>
			}
		/>
	);
}
