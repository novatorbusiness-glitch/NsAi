// Вес страницы (Blueprint S11, check-budget): HTML, скрипты и стили в сжатом виде не больше лимита.
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pages, rel, OUT, report } from "./lib.mjs";

const LIMIT = { html: 60, js: 170, css: 25 }; // КБ после gzip
const gz = (p) => zlib.gzipSync(fs.readFileSync(p)).length / 1024;
const errors = [];
let worst = { html: 0, js: 0, css: 0 };
for (const f of pages()) {
	const html = fs.readFileSync(f, "utf8");
	const files = (re) => [...new Set([...html.matchAll(re)].map((m) => m[1]))].map((s) => path.join(OUT, s)).filter((p) => fs.existsSync(p));
	const size = { html: gz(f), js: files(/<script src="([^"]+)"/g).reduce((s, p) => s + gz(p), 0), css: files(/<link rel="stylesheet" href="([^"]+)"/g).reduce((s, p) => s + gz(p), 0) };
	for (const k of Object.keys(LIMIT)) {
		worst[k] = Math.max(worst[k], size[k]);
		if (size[k] > LIMIT[k]) errors.push(`${rel(f)}: ${k} ${size[k].toFixed(0)} КБ > ${LIMIT[k]} КБ`);
	}
}
report(`вес страниц (максимум: HTML ${worst.html.toFixed(0)} · JS ${worst.js.toFixed(0)} · CSS ${worst.css.toFixed(0)} КБ gzip)`, errors);
