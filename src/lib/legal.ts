import fs from "fs";
import path from "path";

// Документы сайта: content/legal/<slug>.md → HTML. Заголовок страницы — строка «# …».
const DIR = path.join(process.cwd(), "content/legal");
const LINKS: Record<string, string> = { "ilya-novitsky.ru/privacy": "/privacy", "ilya-novitsky.ru/offer": "/offer", "ilya-novitsky.ru/consent": "/consent" };

function esc(s: string) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s: string) {
	s = esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(?<![*\w])\*(?!\s)(.+?)(?<!\s)\*(?!\w)/g, "<i>$1</i>");
	s = s.replace(/(https:\/\/max\.ru\/\S+)/g, '<a href="$1" target="_blank" rel="noopener">написать в MAX</a>');
	for (const [a, b] of Object.entries(LINKS)) s = s.split(a).join(`<a href="${b}">${a}</a>`);
	s = s.replace(/(?<![\w/.])(ilya\.novitskii@yandex\.ru)/g, '<a href="mailto:$1">$1</a>');
	return s.replace(/@Ilya_novator/g, '<a href="https://t.me/Ilya_novator" target="_blank" rel="noopener">@Ilya_novator</a>');
}

export function legal(slug: string) {
	const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8");
	const lines = raw.split("\n");
	const title = (lines.find((l) => l.startsWith("# ")) || "").slice(2).trim();
	const out: string[] = [];
	let i = 0;
	while (i < lines.length) {
		const l = lines[i];
		if (!l.trim() || l.startsWith("# ")) { i++; continue; }
		if (l.startsWith("## ")) { out.push(`<h2>${inline(l.slice(3))}</h2>`); i++; continue; }
		if (l.startsWith("|")) {
			const rows: string[][] = [];
			while (i < lines.length && lines[i].startsWith("|")) {
				if (!/^\|[-| ]+\|$/.test(lines[i])) rows.push(lines[i].replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
				i++;
			}
			const [h, ...b] = rows;
			out.push(`<div class="dtable"><table><thead><tr>${h.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${b.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
			continue;
		}
		if (l.startsWith("- ")) {
			const items: string[] = [];
			while (i < lines.length && lines[i].startsWith("- ")) items.push(`<li>${inline(lines[i++].slice(2))}</li>`);
			out.push(`<ul>${items.join("")}</ul>`);
			continue;
		}
		const para = [l];
		i++;
		while (i < lines.length && lines[i].trim() && !/^(#|\||- )/.test(lines[i])) para.push(lines[i++]);
		out.push(`<p>${para.map(inline).join("<br>")}</p>`);
	}
	return { title, html: out.join("\n") };
}
