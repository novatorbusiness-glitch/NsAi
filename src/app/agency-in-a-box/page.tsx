import type { Metadata } from "next";
import PasswordGate from "@/components/pages/PasswordGate";

export const metadata: Metadata = {
	title: "Агентство в коробке — методология NCAi | NcAi",
	description: "Закрытый раздел NCAi. Доступ по паролю.",
	alternates: {
		canonical: "/agency-in-a-box",
	},
	robots: { index: false, follow: false },
};

export default function AgencyInABoxPage() {
	// Контент (.md → React) рендерится ТОЛЬКО на клиенте после ввода пароля
	// (см. PasswordGate / AgencyInABoxContent с dynamic ssr:false).
	// В статический HTML попадает только экран ввода пароля.
	return <PasswordGate kind="agency" />;
}
