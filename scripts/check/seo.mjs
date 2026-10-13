// SEO каждой страницы (Blueprint S3–S7, S12): title и description нужной длины, свои у каждой страницы,
// один H1, canonical, превью /og/*.jpg существует и нарисовано по текущему заголовку, у картинок alt и размеры.
import fs from "fs";
import path from "path";
import { pages, rel, route, isRedirect, isChapter, report } from "./lib.mjs";

const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), "public/og/manifest.json"), "utf8"));
const unesc = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const errors = [];
const titles = new Map();
for (const f of pages()) {
	const html = fs.readFileSync(f, "utf8");
	const r = rel(f);
	if (isRedirect(html) || r === "/404.html" || /google[0-9a-f]+\.html$/.test(r)) continue;
	const title = unesc(html.match(/<title>([^<]*)<\/title>/)?.[1] || "");
	const desc = unesc(html.match(/<meta name="description" content="([^"]*)"/)?.[1] || "");
	const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
	const h1 = (html.match(/<h1[\s>]/g) || []).length;
	if (!title) errors.push(`${r}: нет title`);
	else if (title.length > 85) errors.push(`${r}: title длиннее 85 знаков (${title.length})`);
	if (titles.has(title)) errors.push(`${r}: title совпадает с ${titles.get(title)}`); else titles.set(title, r);
	if (desc.length < 50 || desc.length > 200) errors.push(`${r}: description ${desc.length} знаков, нужно 50–200`);
	if (h1 !== 1) errors.push(`${r}: H1 на странице — ${h1}, нужен один`);
	if (!canon) errors.push(`${r}: нет canonical`);
	else if (!isChapter(f) && new URL(canon).pathname.replace(/\/$/, "") !== route(f).replace(/\/$/, "")) errors.push(`${r}: canonical ${canon} не совпадает с адресом`);
	if (isChapter(f)) continue; // главы книги — готовые страницы, у них свои правила (scripts/book)
	const og = html.match(/property="og:image" content="[^"]*\/og\/([a-z0-9-]+)\.jpg"/)?.[1];
	const ogTitle = unesc(html.match(/property="og:title" content="([^"]*)"/)?.[1] || "");
	if (!og) errors.push(`${r}: нет своего превью /og/*.jpg`);
	else if (!fs.existsSync(path.join(process.cwd(), "public/og", `${og}.jpg`))) errors.push(`${r}: нет файла public/og/${og}.jpg — запустите npm run og`);
	else if (manifest[og] !== ogTitle) errors.push(`${r}: превью ${og}.jpg нарисовано по старому заголовку — запустите npm run og`);
	for (const [img] of html.matchAll(/<img\b[^>]*>/g)) {
		if (!/\salt="[^"]+"/.test(img)) errors.push(`${r}: картинка без alt ${img.slice(0, 80)}`);
		if (!/\swidth="\d+"/.test(img) || !/\sheight="\d+"/.test(img)) errors.push(`${r}: у картинки не заданы размеры ${img.slice(0, 80)}`);
	}
}
report("SEO страниц", errors);
