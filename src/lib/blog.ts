import { posts, covers } from "@/config/blog";
import { readMd, str } from "@/lib/content";

// Статьи блога: content/blog/<slug>.md (title, h1, description, cover во frontmatter).
// Ошибка в карточке статьи — сборка падает, а не страница.
export type Post = { slug: string; title: string; h1: string; description: string; cover: string; tag: string; cta: string; updated: string; mins: number; coverClass: string; body: string };

const MON = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export function dateRu(iso: string) {
	const [y, m, d] = iso.split("-").map(Number);
	return `${d} ${MON[m - 1]} ${y}`;
}

function read(slug: string) {
	const { fm, body } = readMd("blog", slug, ["title", "description"]);
	return { fm: Object.fromEntries(Object.entries(fm).map(([k, v]) => [k, str(v)])), body };
}

export function allPosts(): Post[] {
	return posts.map((p, k) => {
		const { fm, body } = read(p.slug);
		const words = (body.match(/[\p{L}\p{N}_]+/gu) || []).length;
		return {
			slug: p.slug, title: fm.title, h1: fm.h1 || fm.title, description: fm.description,
			cover: fm.cover || fm.title.split(/[:?]/)[0].trim(), tag: p.tag, cta: p.cta, updated: p.updated,
			mins: Math.max(2, Math.round(words / 170)), coverClass: covers[k % covers.length], body,
		};
	});
}

export function getPost(slug: string) {
	const all = allPosts();
	const i = all.findIndex((p) => p.slug === slug);
	if (i < 0) return null;
	const a = all[i];
	const same = all.filter((x) => x.slug !== slug && x.tag === a.tag);
	const rest = all.filter((x) => x.slug !== slug && !same.includes(x));
	const rot = rest.slice(i % rest.length).concat(rest.slice(0, i % rest.length));
	return { post: a, related: same.concat(rot).slice(0, 3) };
}

function esc(s: string) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s: string) {
	s = esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
	s = s.replace(/\[(.+?)\]\((.+?)\)/g, (_m, t, u) => `<a href="${u}">${t}</a>`);
	s = s.replace(/ {2}\n/g, "<br>");
	for (let i = 0; i < 2; i++) s = s.replace(/(\d) (\d{3})/g, "$1 $2");
	return s.replace(/(\d) (₽|млн|тыс)/g, "$1 $2");
}

// Markdown статьи → HTML. Отметка [[pick]] — место для подбора шага.
export function render(body: string) {
	const out: (string | { pick: true })[] = [];
	const toc: { id: string; title: string }[] = [];
	for (const blk of body.split(/\n\s*\n/)) {
		const b = blk.trim();
		if (!b) continue;
		if (b === "[[pick]]") { out.push({ pick: true }); continue; }
		if (b.startsWith("## ")) { const t = b.slice(3).trim(); const id = `s${toc.length + 1}`; toc.push({ id, title: t }); out.push(`<h2 id="${id}">${inline(t)}</h2>`); continue; }
		if (b.startsWith("### ")) { out.push(`<h3>${inline(b.slice(4))}</h3>`); continue; }
		const lines = b.split("\n");
		if (lines.every((l) => /^- /.test(l))) { out.push("<ul>" + lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("") + "</ul>"); continue; }
		if (lines.every((l) => /^\d+\. /.test(l))) { out.push("<ol>" + lines.map((l) => `<li>${inline(l.replace(/^\d+\. /, ""))}</li>`).join("") + "</ol>"); continue; }
		if (b.startsWith("> ")) { out.push(`<blockquote>${inline(b.slice(2))}</blockquote>`); continue; }
		out.push(`<p>${inline(b.includes("  \n") ? b : b.replace(/\n/g, " "))}</p>`);
	}
	return { parts: out, toc };
}
