import fs from "fs";
import path from "path";
import { getSubchapterTitle } from "@/lib/book-data";

// ─────────────────────────────────────────────────────────────────────────────
// Загрузка и нормализация глав книги «Нейро-Воронка».
// Каждая content/book/*.mdx — ПОЛНЫЙ HTML-документ (собственный <style>, <script>,
// <nav>, <article>). Контент НЕ обрезается: в читалку отдаётся вся страница целиком.
// ─────────────────────────────────────────────────────────────────────────────

export interface ReaderChapter {
	slug: string;
	title: string;
	html: string;
}

export function getBookSlugs(): string[] {
	const dir = path.join(process.cwd(), "content/book");
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => f.replace(/\.mdx$/, ""))
		.sort((a, b) => a.localeCompare(b, "ru"));
}

function stripFrontmatter(source: string): string {
	if (!source.startsWith("---\n")) return source;
	const endIndex = source.indexOf("\n---\n", 4);
	if (endIndex === -1) return source;
	return source.slice(endIndex + 5).trim();
}

export function getChapterSource(slug: string): string {
	const filePath = path.join(process.cwd(), "content/book", `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return "";
	return stripFrontmatter(fs.readFileSync(filePath, "utf8").trim());
}

// Светлая тема чтения (та же, что и на отдельных страницах /book/[slug]):
// фон #f8f9fa, тёмный текст, акцент — жёлтый NCAi. Для длинной страницы дополнительно
// скрываем внутриглаевую навигацию/скролл-точки/прогресс-бар — навигацию даёт сайдбар.
const READER_CSS = `
:root{--bg:#f8f9fa!important;--bg2:#ffffff!important;--bgc:#ffffff!important;--bgc2:#f1f3f5!important;--br:#e7e9ec!important;--br2:#d9dce1!important;--t:#16181d!important;--t2:#55595f!important;--t3:#9aa0a8!important;--a:#c99700!important;--ad:rgba(255,208,0,.14)!important;--red:#d23b3b!important}
body{background:var(--bg)!important;color:var(--t)!important}
body::before{display:none!important;background-image:none!important;opacity:0!important;content:none!important}
#cd,#cr{display:none!important}
#prog{display:none!important}
nav#nav{display:none!important}
.scroll-nav{display:none!important}
@media(pointer:fine){body{cursor:auto!important}}
.hero-h1 em{background:linear-gradient(135deg,#141519 0%,#4a4d55 100%)!important;-webkit-background-clip:text!important;background-clip:text!important;-webkit-text-fill-color:transparent!important}
.prose-p{color:#3b3e44!important}
.prose-p em{color:#3b3e44!important}
.prose-p strong{color:#141519!important}
.prose-h2{color:#141519!important}
.practice p{color:#3b3e44!important}
.practice strong{color:#141519!important}
.silence-card{background:#ffffff!important;border-color:#e7e9ec!important}
.silence-day{color:#b0b4ba!important}
.silence-word{color:#3a3d43!important}
.tg-cta{background:#ffd000!important}
.tg-cta-title{color:#0a0a0a!important}
.tg-cta-text{color:rgba(0,0,0,.62)!important}
.tg-cta-btn{background:#0a0a0a!important;color:#ffd000!important}
.tg-sub{background:#ffffff!important;border-color:rgba(255,208,0,.35)!important}
.tg-sub-btn{background:#ffd000!important;color:#0a0a0a!important}
.cn-btn.next{background:#ffd000!important;border-color:#ffd000!important}
.cn-btn.next .cn-dir,.cn-btn.next .cn-title{color:#0a0a0a!important}
@media (prefers-reduced-motion:reduce){.rv{opacity:1!important;transform:none!important}}
`;

// Скрипт, сообщающий родительской странице реальную высоту содержимого iframe,
// чтобы каждая подглава занимала ровно свою высоту в длинном скролле.
function heightReporterScript(slug: string): string {
	const slugJson = JSON.stringify(slug);
	return `<script>(function(){var slug=${slugJson};var tid=null;function post(){try{window.parent.postMessage({__ncaiBookH:document.documentElement.scrollHeight,slug:slug},"*")}catch(e){}}function start(){post();var n=0;tid=setInterval(function(){post();if(++n>12)clearInterval(tid)},500)}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",start)}else{start()}window.addEventListener("load",post);window.addEventListener("resize",post);if(window.ResizeObserver){try{new ResizeObserver(post).observe(document.documentElement)}catch(e){}}})();</script>`;
}

function normalizeChapterHtml(source: string, slug: string): string {
	return source
		.replace(
			/<link[^>]*fonts\.googleapis\.com[^>]*>/gi,
			'<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Space+Grotesk:wght@500;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">',
		)
		.replace(/--fd:\s*'Syne',\s*sans-serif;/g, "--fd:'Space Grotesk',sans-serif;")
		.replace(/--fs:\s*'Instrument Serif',\s*serif;/g, "--fs:'Manrope',sans-serif;")
		.replace(/--fm:\s*'JetBrains Mono',\s*monospace;/g, "--fm:'Space Mono',monospace;")
		.replace(/NCAi/g, "NcAi")
		.replace(/(<a\b[^>]*class=["']logo["'][^>]*>)([\s\S]*?)(<\/a>)/gi, "$1NcAi$3")
		.replace(/(<a\b[^>]*class=["']logo["'][^>]*href=["'])[^"']*(["'][^>]*>)/gi, "$1/$2")
		.replace(/(<a\b[^>]*class=["']nav-back["'][^>]*href=["'])[^"']*(["'][^>]*>)/gi, "$1/book$2")
		.replace(/<\/head>/i, `<style id="ncai-light-reader">${READER_CSS}</style>${heightReporterScript(slug)}</head>`);
}

export function buildReaderChapters(): ReaderChapter[] {
	return getBookSlugs().map((slug) => ({
		slug,
		title: getSubchapterTitle(slug),
		html: normalizeChapterHtml(getChapterSource(slug), slug),
	}));
}
