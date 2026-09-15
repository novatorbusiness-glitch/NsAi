import type { Metadata } from "next";
import PasswordGate from "@/components/pages/PasswordGate";

export const metadata: Metadata = {
	title: "Под капотом NCAi — обзор базы знаний | NcAi",
	description: "Закрытая страница NCAi. Обзор базы знаний агентства. Доступ по паролю.",
	alternates: {
		canonical: "/inside",
	},
	robots: { index: false, follow: false },
};

export default function InsidePage() {
	// Снапшот БД (db-overview.json) рендерится ТОЛЬКО на клиенте после ввода пароля
	// (см. PasswordGate / DbOverview с dynamic ssr:false).
	// В статический HTML попадает только экран ввода пароля.
	return <PasswordGate kind="db" />;
}
