// Битые ссылки и якоря во всей сборке + цели переадресаций (Blueprint: check-links). Ошибка — сборка падает.
import fs from "fs";
import { pages, fileFor, rel, report } from "./lib.mjs";

const ids = new Map();
const idsOf = (f) => {
	if (!ids.has(f)) ids.set(f, new Set([...fs.readFileSync(f, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
	return ids.get(f);
};
const errors = [];
for (const f of pages()) {
	const html = fs.readFileSync(f, "utf8").replace(/<script[\s\S]*?<\/script>/g, "");
	for (const [, attr, raw] of html.matchAll(/\s(href|src|content)="([^"]+)"/g)) {
		let url = raw.replace(/&amp;/g, "&");
		if (attr === "content") { const m = url.match(/^0;\s*url=(.+)$/); if (!m) continue; url = m[1]; }
		if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(url)) continue;
		if (url.startsWith("#")) { if (url.length > 1 && !idsOf(f).has(url.slice(1))) errors.push(`${rel(f)}: нет якоря ${url}`); continue; }
		if (!url.startsWith("/")) { if (/\.html(#|$)/.test(url)) { const base = rel(f).replace(/[^/]+$/, ""); url = base + url; } else continue; }
		const target = fileFor(url.replace(/\.html(?=#|$)/, ""));
		if (!target) { errors.push(`${rel(f)}: битая ссылка ${raw}`); continue; }
		const hash = url.split("#")[1];
		if (hash && target.endsWith(".html") && !idsOf(target).has(hash)) errors.push(`${rel(f)}: нет якоря ${raw}`);
	}
}
report("ссылки и якоря", errors);
