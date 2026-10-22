import fs from "fs";
import path from "path";
import { readMd } from "@/lib/content";
import { nb } from "@/lib/typo";

// Книга «Нейро-воронка» v2: content/book/<slug>.md + book.json (порядок, этапы, рисунки) — собирает scripts/book/sync.py.
// covers.json — схемы в начале глав из прежней версии книги на сайте (решение Ильи 22.10), картинки в public/book/cover.
// Тексты не правим здесь: только показываем. Рисунок в тексте — отметка [[fig:N]].
export type Figure = { src: string; alt: string; caption: string; w: number; h: number };
export type Chapter = { slug: string; num: string; title: string; part: number; partTitle: string };
type Cover = { src: string; alt: string; w: number; h: number; before: string };
type Book = { chapters: Chapter[]; figures: Record<string, Figure>; covers: Record<string, Cover[]> };

let cache: Book | null = null;
export function bookData(): Book {
	if (!cache) {
		const read = (f: string) => JSON.parse(fs.readFileSync(path.join(process.cwd(), "content/book", f), "utf8"));
		cache = { ...read("book.json"), covers: read("covers.json") } as Book;
	}
	return cache;
}

export const chapters = () => bookData().chapters;

// Этапы для оглавления: «Глава 1. Нейромаркетинг: как говорить…» → номер и короткое название до двоеточия.
export function parts() {
	const out: { num: number; title: string; full: string; chapters: Chapter[] }[] = [];
	for (const c of chapters().filter((c) => c.part > 0)) {
		let p = out.find((x) => x.num === c.part);
		if (!p) {
			const full = c.partTitle.replace(/^Глава \d\.\s*/, "");
			p = { num: c.part, title: full.split(":")[0].trim(), full, chapters: [] };
			out.push(p);
		}
		p.chapters.push(c);
	}
	return out;
}

export function getChapter(slug: string) {
	const all = chapters();
	const i = all.findIndex((c) => c.slug === slug);
	if (i < 0) return null;
	const { body } = readMd("book", slug);
	return { chapter: all[i], body, index: i, total: all.length, prev: all[i - 1] || null, next: all[i + 1] || null };
}

// Заголовок главы для шапки и превью: «1.1 Пять когнитивных ловушек…», у начала и эпилога без номера.
export const label = (c: Chapter) => (c.num ? `${c.num} ${c.title}` : c.title);

// Заголовок для поиска: целиком, а если с именем сайта длиннее 85 знаков — до двоеточия, до запятой или по словам.
export function seoTitle(c: Chapter) {
	const full = label(c);
	if (full.length <= 66) return full;
	const pre = c.num ? `${c.num} ` : "";
	let short = c.title.split(":")[0].trim();
	if ((pre + short).length > 66) short = short.split(", ")[0];
	while ((pre + short).length > 66) short = short.replace(/\s+\S+$/, "");
	return pre + short;
}

function esc(s: string) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s: string) {
	return nb(esc(s)).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[\s(«])\*(?!\s)(.+?)\*(?=[\s.,:;!?)»]|$)/g, "$1<i>$2</i>");
}

// Описание главы для поиска и превью: первые фразы первого абзаца, до 158 знаков.
export function describe(body: string) {
	const p = body.split(/\n\s*\n/).map((b) => b.trim()).find((b) => b && !/^(#|\[\[|\d+\. |- |> )/.test(b)) || "";
	const plain = p.replace(/\*\*?/g, "").replace(/\s+/g, " ");
	if (plain.length <= 158) return plain;
	const cut = plain.slice(0, 158);
	const end = cut.lastIndexOf(". ");
	return end > 80 ? cut.slice(0, end + 1) : cut.slice(0, 155).replace(/\s+\S*$/, "") + "…";
}

// Markdown главы → HTML. «# Глава N» — открывает этап, «## N.N» совпадает с заголовком страницы и становится чертой,
// «###» — разделы (по ним оглавление сбоку), [[fig:N]] — рисунок с подписью, схема главы — в начале или сразу под своим заголовком.
export function render(body: string, title: string, slug: string) {
	const html: string[] = [];
	const toc: { id: string; title: string }[] = [];
	const { figures, covers } = bookData();
	const cover = (c: Cover, first: boolean) => `<figure class="bk-cover"><a href="${c.src}" target="_blank" rel="noopener"><img src="${c.src}" alt="${esc(c.alt)}" width="${c.w}" height="${c.h}"${first ? "" : ' loading="lazy"'} decoding="async"></a></figure>`;
	const mine = covers[slug] || [];
	for (const c of mine.filter((c) => c.before === "start")) html.push(cover(c, true));
	for (const blk of body.replace(/[ \t]*(\[\[fig:\d+\]\])[ \t]*/g, "\n\n$1\n\n").split(/\n\s*\n/)) { // рисунок всегда отдельным блоком
		const b = blk.trim();
		if (!b) continue;
		const fig = b.match(/^\[\[fig:(\d+)\]\]$/);
		if (fig) {
			const f = figures[fig[1]];
			html.push(`<figure class="bk-fig"><a href="${f.src}" target="_blank" rel="noopener"><img src="${f.src}" alt="${esc(f.alt).replace(/"/g, "&quot;")}" width="${f.w}" height="${f.h}" loading="lazy" decoding="async"></a><figcaption>${inline(f.caption)}</figcaption></figure>`);
			continue;
		}
		const h = b.match(/^(#{1,3}) (.+)$/);
		if (h) {
			const [, lvl, t] = h;
			if (lvl === "##" && t.replace(/^\d\.\d\.\s*/, "") === title) { if (html.some((x) => !x.startsWith('<figure class="bk-cover"'))) html.push(`<hr class="bk-start">`); continue; } // черта только после вступления этапа
			if (lvl === "#" && t === "Нейро-воронка") continue; // название книги уже в шапке страницы
			const id = `s${toc.length + 1}`;
			toc.push({ id, title: t.replace(/^Глава \d\.\s*/, "") });
			html.push(lvl === "###" ? `<h3 id="${id}">${inline(t)}</h3>` : `<h2 id="${id}"${lvl === "#" ? ' class="bk-part"' : ""}>${inline(t)}</h2>`);
			for (const c of mine.filter((c) => c.before !== "start" && t.startsWith(c.before))) html.push(cover(c, false));
			continue;
		}
		const lines = b.split("\n");
		if (lines.every((l) => /^- /.test(l))) { html.push("<ul>" + lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("") + "</ul>"); continue; }
		if (lines.every((l) => /^\d+\. /.test(l))) { html.push("<ol>" + lines.map((l) => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("") + "</ol>"); continue; }
		if (lines.every((l) => /^> ?/.test(l))) { html.push(`<blockquote>${inline(lines.map((l) => l.replace(/^> ?/, "")).join(" "))}</blockquote>`); continue; }
		html.push(`<p>${inline(b.replace(/\n/g, " "))}</p>`);
	}
	return { html: html.join("\n"), toc };
}

export const readMins = (body: string) => Math.max(3, Math.round((body.match(/[\p{L}\p{N}_]+/gu) || []).length / 180));
