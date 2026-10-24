// Цели Яндекс Метрики (решение 15.5 от 08.10 + MAX от 13.10).
export const goals = {
	readToCases: "home_read_cases", // дочитал главную до кейсов
	ctaStart: "cta_start", // любая кнопка заявки; цель в Метрике «содержит», поэтому в неё входят и все cta_start_*
	telegram: "telegram", // перешёл в Telegram (главная цифра)
	max: "max", // перешёл в MAX
	pickStep: "pick_step", // выбрал вариант в подборе шага (параметр variant)
	ctaBlueprint: "cta_start_blueprint", // «Заказать чертёж» (с 24.10, раньше «Обсудить чертёж»); начинается с cta_start, поэтому входит и в общую цель
	ctaTeam: "cta_start_team", // кнопки «Работа в команде» (24.10, было cta_start_vedenie)
	ctaAudit: "cta_start_audit", // «Заказать аудит» на примере аудита (24.10)
	litres: "book_litres", // перешёл на Литрес со страницы книги или с главной (24.10)
	ctaSreda: "cta_start_sreda", // «Записаться на консультацию» на /svoya-ai-sreda
	demoOpen: "demo_open", // открыл демо кабинета (прототип) на примере чертежа
	mapBlock: "map_block", // открыл карточку блока на карте чертежа
	channel: "channel", // перешёл в канал (24.10): второй путь для тех, кто пока не готов писать
} as const;
