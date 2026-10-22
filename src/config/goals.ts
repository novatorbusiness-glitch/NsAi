// Цели Яндекс Метрики (решение 15.5 от 08.10 + MAX от 13.10).
export const goals = {
	readToCases: "home_read_cases", // дочитал главную до кейсов
	ctaStart: "cta_start", // нажал «Начать с аудита» (ведёт к блоку «Как работаем») или «Написать» на первом экране
	telegram: "telegram", // перешёл в Telegram (главная цифра)
	max: "max", // перешёл в MAX
	pickStep: "pick_step", // выбрал вариант в подборе шага (параметр variant)
	ctaBlueprint: "cta_start_blueprint", // «Обсудить чертёж» (22.10); начинается с cta_start, поэтому входит и в общую цель
	ctaVedenie: "cta_start_vedenie", // «Обсудить ведение»
	ctaSreda: "cta_start_sreda", // «Записаться на консультацию» на /svoya-ai-sreda
	demoOpen: "demo_open", // открыл демо кабинета (прототип) на примере чертежа
	mapBlock: "map_block", // открыл карточку блока на карте чертежа
	mentorTelegram: "mentor_telegram", // перешёл в мессенджер со страницы наставничества
} as const;
