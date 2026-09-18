"use client";

import { useLang } from "@/lib/i18n";

// Рендерит RU или EN вариант HTML-блока секции в зависимости от языка сайта.
export default function Bilingual({ ru, en }: { ru: string; en: string }) {
	const { lang } = useLang();
	return <div dangerouslySetInnerHTML={{ __html: lang === "en" ? en : ru }} />;
}
