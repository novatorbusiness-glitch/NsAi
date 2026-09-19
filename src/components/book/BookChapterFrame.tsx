"use client";

import { useLang } from "@/lib/i18n";

interface BookChapterFrameProps {
	titleRu: string;
	titleEn: string;
	htmlRu: string;
	htmlEn: string | null;
}

// Каждая глава книги — цельный HTML-документ, рендерится в iframe целиком
// (не через React-дерево), поэтому переключение языка здесь работает иначе,
// чем Bilingual: сервер готовит оба srcDoc заранее, клиент просто выбирает,
// какой показать. Без EN-версии — тихий откат на RU, без ошибок.
export default function BookChapterFrame({ titleRu, titleEn, htmlRu, htmlEn }: BookChapterFrameProps) {
	const { lang } = useLang();
	const showEn = lang === "en" && htmlEn !== null;

	return (
		<iframe
			title={showEn ? titleEn : titleRu}
			className="bkr-frame"
			srcDoc={showEn ? htmlEn! : htmlRu}
		/>
	);
}
