import type { Metadata } from "next";
import ProtectedStub from "@/components/pages/ProtectedStub";

export const metadata: Metadata = {
	title: "Книга внедрения — доступ через бота",
	description: "Книга внедрения NCAi — закрытый материал, выдаётся через бота NCAi.",
	robots: { index: false, follow: false },
};

export default function Page() {
	return (
		<ProtectedStub
			title="Книга внедрения"
			description={
				<>
					Книга внедрения (руководство по управлению агентством) — закрытый
					материал. Выдаётся персонально через бота NCAi по одноразовой ссылке.
				</>
			}
		/>
	);
}
