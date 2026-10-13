import fs from "fs";
import path from "path";

// Общий разбор файлов content/: карточка в начале файла (key: "значение", повтор ключа — список) + текст.
// Нет обязательного поля — сборка падает, а не страница.
export type Card = Record<string, string | string[]>;

export function readMd(dir: string, slug: string, required: string[] = []) {
	const file = path.join(process.cwd(), "content", dir, `${slug}.md`);
	const raw = fs.readFileSync(file, "utf8");
	const [, fmRaw, ...rest] = raw.split("---");
	const fm: Card = {};
	for (const m of fmRaw.matchAll(/^(\w+):\s*"(.*)"\s*$/gm)) {
		const [, k, v] = m;
		const prev = fm[k];
		fm[k] = prev === undefined ? v : Array.isArray(prev) ? [...prev, v] : [prev, v];
	}
	for (const k of required) if (!fm[k]) throw new Error(`content/${dir}/${slug}.md: нет поля ${k}`);
	return { fm, body: rest.join("---").trim() };
}

export function listMd(dir: string) {
	return fs.readdirSync(path.join(process.cwd(), "content", dir)).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3));
}

export const str = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) || "";
export const list = (v: string | string[] | undefined) => (v === undefined ? [] : Array.isArray(v) ? v : [v]);
