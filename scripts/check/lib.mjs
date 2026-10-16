// Общее для проверок сборки: список страниц out/ и разбор адресов.
import fs from "fs";
import path from "path";

export const OUT = path.join(process.cwd(), "out");

export function pages(dir = OUT) {
	const res = [];
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) { if (!["_next", "__proto", "demo"].includes(e.name)) res.push(...pages(p)); }
		else if (e.name.endsWith(".html")) res.push(p);
	}
	return res;
}

export const rel = (f) => "/" + path.relative(OUT, f).replace(/\\/g, "/");
export const route = (f) => rel(f).replace(/(index)?\.html$/, "").replace(/\/$/, "") || "/";
export const isRedirect = (html) => /http-equiv="refresh"/.test(html);
export const isChapter = (f) => rel(f).startsWith("/book/");

// адрес сайта → файл в out/ (как отдаёт GitHub Pages)
export function fileFor(url) {
	const p = decodeURIComponent(url.split(/[?#]/)[0]);
	const cand = p === "/" ? ["/index.html"] : [p, `${p}.html`, `${p}/index.html`];
	return cand.map((c) => path.join(OUT, c)).find((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

export function report(name, errors) {
	if (errors.length) {
		console.error(`\n✗ ${name}: ${errors.length}`);
		for (const e of errors.slice(0, 40)) console.error("  " + e);
		process.exitCode = 1;
	} else console.log(`✓ ${name}`);
}
