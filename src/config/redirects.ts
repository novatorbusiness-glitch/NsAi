// Старые адреса сайта → новые (Blueprint 15.4). Каждая пара — статическая страница с переадресацией.
// Заглушки NCAi (/team-book, /agency-in-a-box, /docs, /inside, /prompts) в поиске не были — по плану отдают 404.
export const redirects: Record<string, string> = {
	"/raspakovka": "/",
	"/consulting": "/",
	"/o-proekte": "/",
	"/partners": "/",
	"/b24u": "/",
	"/ex-nihilo": "/",
	"/portfolio": "/keisy",
	"/roadmap": "/keisy",
	"/ai-training": "/",
	"/primer-razbora": "/primer-audita", // переименовано 22.10: это аудит, а не разбор
	"/nastavnichestvo": "/", // наставничество скрыто 14.10, код страницы — src/app/_nastavnichestvo
	"/book/read": "/book",
	"/book/00-a-znakomstvo": "/book/00-nachalo", // v2 22.10: знакомство и пролог — одна глава
	"/book/00-b-prolog": "/book/00-nachalo",
	"/blog/ai-kopiraiter-neuro-voronka": "/blog",
	"/blog/chto-takoe-ncai": "/blog",
	"/blog/kryuchok-5-sekund": "/blog",
	"/blog/lid-magnit-kotoryj-zabirayut-sam": "/blog",
	"/blog/menedzher-ai-agentstva": "/blog",
	"/blog/pochemu-ai-agent-ne-chatgpt": "/blog",
	"/blog/sdelano-i-provereno": "/blog",
	"/blog/sotrudnik-kotoryy-ne-spit": "/blog",
};
