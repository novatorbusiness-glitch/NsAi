import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import { getSubchapterTitle } from "@/lib/book-data";
import { inlineVizSvg, VIZ_CSS } from "@/lib/book-viz";
import BookSidebar from "@/components/book/BookSidebar";
import "@/styles/book-reader.css";

const LEGACY_SLUG_ALIASES: Record<string, string> = {
	vvedenie: "00-vvedenie",
	nejrokopiraiting: "1-2-nejrokopiraiting",
};

function resolveChapterSlug(slug: string): string {
	return LEGACY_SLUG_ALIASES[slug] ?? slug;
}

function getBookSlugs(): string[] {
	const dir = path.join(process.cwd(), "content/book");
	if (!fs.existsSync(dir)) return [];

	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => f.replace(/\.mdx$/, ""))
		.sort((a, b) => a.localeCompare(b, "ru"));
}

export function generateStaticParams() {
	const canonical = getBookSlugs();
	const legacy = Object.keys(LEGACY_SLUG_ALIASES);
	return [...canonical, ...legacy].map((slug) => ({ slug }));
}

function getChapterFilePath(slug: string): string {
	return path.join(process.cwd(), "content/book", `${slug}.mdx`);
}

function getChapterSource(slug: string): string {
	const filePath = getChapterFilePath(slug);
	if (!fs.existsSync(filePath)) return "";
	const source = fs.readFileSync(filePath, "utf8").trim();
	return stripFrontmatter(source);
}

function stripFrontmatter(source: string): string {
	if (!source.startsWith("---\n")) return source;

	const endIndex = source.indexOf("\n---\n", 4);
	if (endIndex === -1) return source;

	return source.slice(endIndex + 5).trim();
}

function isFullHtmlDocument(source: string): boolean {
	return source.trimStart().toLowerCase().startsWith("<!doctype html>");
}

// Светлая тема чтения (эталон exnihilo.life/metriki-mozga):
// тёмная шапка-навигация остаётся, контент — светлый #f8f9fa, тёмный текст,
// акцент — жёлтый NCAi. Внедряется внутрь iframe поверх inline-стилей главы.
const LIGHT_READER_CSS = `
:root{--bg:#f8f9fa!important;--bg2:#ffffff!important;--bgc:#ffffff!important;--bgc2:#f1f3f5!important;--br:#e7e9ec!important;--br2:#d9dce1!important;--t:#16181d!important;--t2:#55595f!important;--t3:#9aa0a8!important;--a:#c99700!important;--ad:rgba(255,208,0,.14)!important;--red:#d23b3b!important}
body{background:var(--bg)!important;color:var(--t)!important}
body::before{display:none!important;background-image:none!important;opacity:0!important;content:none!important}
#cd,#cr{display:none!important}
@media(pointer:fine){body{cursor:auto!important}}
nav#nav{background:rgba(8,8,8,.94)!important;border-bottom:1px solid rgba(255,255,255,.07)!important}
.nav-chap{color:#8b8e95!important}
.nav-back{color:#c9cbd1!important}
.nav-back:hover{color:#ffffff!important}
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

function normalizeChapterHtmlFonts(source: string): string {
	return inlineVizSvg(source)
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
		.replace(/<\/head>/i, `<style id="ncai-light-reader">${LIGHT_READER_CSS}</style><style id="ncai-book-viz">${VIZ_CSS}</style></head>`);
}

interface ChapterPageProps {
	params: {
		slug: string;
	};
}

function KeyTakeaway({ children }: { children: ReactNode }) {
	return (
		<div className="book-takeaway">
			<div className="book-chip">Key Takeaway</div>
			<p>{children}</p>
		</div>
	);
}

function ChapterCTA({ text, href }: { text: string; href: string }) {
	return (
		<div className="book-next-cta">
			<div>
				<div className="book-chip">Следующая глава</div>
				<div className="book-next-title">{text}</div>
			</div>
			<a href={href} className="bp">
				Читать дальше
			</a>
		</div>
	);
}

function StatRow({ children }: { children: ReactNode }) {
	return <div className="bk-stat-row">{children}</div>;
}

function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className="bk-stat">
			<div className="bk-stat-val">{value}</div>
			<div className="bk-stat-label">{label}</div>
		</div>
	);
}

function MomentBlock({ children }: { children: ReactNode }) {
	return <div className="bk-moment">{children}</div>;
}

function ResultsFlow({ children }: { children: ReactNode }) {
	return <div className="bk-flow">{children}</div>;
}

function FlowStep({ children, peak }: { children: ReactNode; peak?: boolean }) {
	return <span className={`bk-flow-step${peak ? " peak" : ""}`}>{children}</span>;
}

function FlowArrow() {
	return <span className="bk-flow-arrow">→</span>;
}

function LightCard({ label, title, children }: { label?: string; title?: string; children: ReactNode }) {
	return (
		<div className="bk-light">
			{label && <div className="bk-light-label">{label}</div>}
			{title && <div className="bk-light-title">{title}</div>}
			<p>{children}</p>
		</div>
	);
}

function RoadmapGrid({ children }: { children: ReactNode }) {
	return <div className="bk-road">{children}</div>;
}

function RoadItem({
	num,
	title,
	color,
	children,
}: {
	num: string;
	title: string;
	color?: string;
	children: ReactNode;
}) {
	return (
		<div className="bk-road-item">
			<div className="bk-road-num" style={color ? { color } : undefined}>
				{num}
			</div>
			<div>
				<div className="bk-road-title">{title}</div>
				<p className="bk-road-desc">{children}</p>
			</div>
		</div>
	);
}

export function generateMetadata({ params }: ChapterPageProps): Metadata {
	const slugs = getBookSlugs();
	const resolvedSlug = resolveChapterSlug(params.slug);
	if (!slugs.includes(resolvedSlug)) {
		return {
			title: "Глава не найдена | NCAi",
			description: "Запрошенная глава книги не найдена.",
		};
	}

	const chapterTitle = getSubchapterTitle(resolvedSlug);

	return {
		title: `${chapterTitle} — Нейро-воронка | NCAi`,
		description: `${chapterTitle}. Глава книги «Нейро-воронка» Ильи Новицкого — инженерия систем продаж на стыке нейробиологии, поведенческой психологии и AI.`,
		alternates: {
			canonical: `/book/${resolvedSlug}`,
		},
	};
}

export default function ChapterPage({ params }: ChapterPageProps) {
	const slugs = getBookSlugs();
	const resolvedSlug = resolveChapterSlug(params.slug);
	const index = slugs.indexOf(resolvedSlug);

	if (index === -1) {
		notFound();
	}

	const chapterSource = getChapterSource(resolvedSlug);
	const chapterTitle = getSubchapterTitle(resolvedSlug);
	const isFullHtml = isFullHtmlDocument(chapterSource);
	const normalizedFullHtml = isFullHtml ? normalizeChapterHtmlFonts(chapterSource) : "";

	return (
		<div className="bkr">
			<BookSidebar current={resolvedSlug} />

			<main className="bkr-main">
				{isFullHtml ? (
					<iframe
						title={chapterTitle}
						className="bkr-frame"
						srcDoc={normalizedFullHtml}
					/>
				) : (
					<article className="bkr-prose">
						<p style={{ marginTop: 0 }}>
							<a href="/book" style={{ color: "#c99700" }}>
								← Все книги
							</a>
						</p>
						{chapterSource ? (
							<MDXRemote
								source={chapterSource}
								components={{
									KeyTakeaway,
									ChapterCTA,
									StatRow,
									Stat,
									MomentBlock,
									ResultsFlow,
									FlowStep,
									FlowArrow,
									LightCard,
									RoadmapGrid,
									RoadItem,
								}}
							/>
						) : (
							<p>Эта глава пока пустая. Добавьте текст в файл {`${params.slug}.mdx`}.</p>
						)}
					</article>
				)}
			</main>
		</div>
	);
}
