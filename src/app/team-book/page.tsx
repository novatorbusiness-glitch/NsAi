import type { Metadata } from "next";
import PasswordGate from "@/components/pages/PasswordGate";

export const metadata: Metadata = {
	title: "NCAi · команда под капотом",
	description: "Закрытый раздел NCAi. Доступ по паролю.",
	alternates: { canonical: "/team-book" },
	robots: { index: false, follow: false },
};

export default function Page() {
	// TeamBook рендерится ТОЛЬКО на клиенте после ввода пароля
	// (dynamic ssr:false) — данные сотрудников и промптов не попадают в статический HTML.
	return <PasswordGate kind="team" />;
}
