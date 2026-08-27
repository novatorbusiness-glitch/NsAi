import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import fs from "fs";
import path from "path";
import { getSubchapterTitle } from "@/lib/book-data";

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

function slugToTitle(slug: string): string {
	return slug
		.split("-")
		.filter((part) => !/^\d+$/.test(part))
		.join(" ");
}

function isFullHtmlDocument(source: string): boolean {
	return source.trimStart().toLowerCase().startsWith("<!doctype html>");
}

function normalizeChapterHtmlFonts(source: string, slug: string): string {
	const isPremiumChapter = slug === "00-a-znakomstvo" || slug === "00-b-prolog";
	const runtimeBrandingCss = ".logo{font-family:var(--fd)!important}.nav-chap{font-family:var(--fm)!important}.nav-back{font-family:var(--fd)!important}body::before{display:none!important;background-image:none!important;opacity:0!important;content:none!important}.chapter-nav{display:grid!important;grid-template-columns:1fr 1fr!important;gap:1rem!important}.cn-btn{border:1px solid var(--br)!important;background:rgba(255,255,255,.03)!important;border-radius:12px!important;padding:1.15rem 1.25rem!important;text-decoration:none!important;transition:border-color .2s ease,background .2s ease,transform .2s ease!important}.cn-btn:hover{border-color:rgba(255,208,0,.35)!important;background:rgba(255,255,255,.06)!important;transform:translateY(-2px)!important}.cn-btn .cn-dir{font-family:var(--fm)!important;font-size:.6rem!important;letter-spacing:.12em!important;text-transform:uppercase!important;color:var(--t3)!important;margin-bottom:.45rem!important}.cn-btn .cn-title{font-family:var(--fd)!important;font-size:1.02rem!important;font-weight:700!important;line-height:1.3!important;color:var(--t)!important}.cn-btn.next{border-color:var(--a)!important;background:var(--a)!important}.cn-btn.next:hover{border-color:var(--a)!important;background:#ffe04d!important}.cn-btn.next .cn-dir,.cn-btn.next .cn-title{color:#0a0a0a!important}@media(max-width:480px){.chapter-nav{grid-template-columns:1fr!important}}";
	const premiumCss = isPremiumChapter
		? ".hero-bg{background:radial-gradient(ellipse 75% 55% at 30% 0%,rgba(255,208,0,.075),transparent)!important}.hero-grid{opacity:.9}.stat-card,.silence-card,.road-item,.author-pivot,.conclusion-card,.tc,.pain-card,.blueprint,.lang-close,.hq,.ep-item,.trance-block{position:relative;overflow:hidden;transition:border-color .24s ease,transform .24s ease,box-shadow .24s ease,background-color .24s ease}.stat-card::after,.silence-card::after,.road-item::after,.author-pivot::after,.conclusion-card::after,.tc::after,.pain-card::after,.blueprint::after,.lang-close::after,.hq::after,.ep-item::after,.trance-block::after{content:'';position:absolute;inset:0;background:linear-gradient(125deg,rgba(255,208,0,.06),transparent 52%);opacity:.5;pointer-events:none}.stat-card:hover,.silence-card:hover,.road-item:hover,.author-pivot:hover,.conclusion-card:hover,.tc:hover,.pain-card:hover,.blueprint:hover,.lang-close:hover,.hq:hover,.ep-item:hover,.trance-block:hover{border-color:rgba(255,208,0,.3)!important;box-shadow:0 10px 28px rgba(0,0,0,.23),0 0 16px rgba(255,208,0,.08)}.road-item:hover,.tc:hover,.pain-card:hover{transform:translateY(-2px)}.cn-btn:not(.next){background:rgba(255,255,255,.04)!important}.cn-btn:not(.next):hover{background:rgba(255,255,255,.08)!important}.cn-btn.next{box-shadow:0 8px 26px rgba(255,208,0,.25)!important}@media (prefers-reduced-motion:reduce){.stat-card,.silence-card,.road-item,.author-pivot,.conclusion-card,.tc,.pain-card,.blueprint,.lang-close,.hq,.ep-item,.trance-block,.cn-btn{transition:none!important;transform:none!important}}"
		: "";

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
		.replace(
			/<\/head>/i,
			`<style id="ncai-chapter-runtime-branding">${runtimeBrandingCss}${premiumCss}</style></head>`,
		);
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
			title: "Глава не найдена | NcAi",
			description: "Запрошенная глава книги не найдена.",
		};
	}

	const chapterTitle = getSubchapterTitle(resolvedSlug);

	return {
		title: `${chapterTitle} — Нейро-воронка | NcAi`,
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

	const prevSlug = index > 0 ? slugs[index - 1] : null;
	const nextSlug = index < slugs.length - 1 ? slugs[index + 1] : null;
	const chapterSource = getChapterSource(resolvedSlug);
	const chapterTitle = getSubchapterTitle(resolvedSlug);
	const isFullHtml = isFullHtmlDocument(chapterSource);
	const normalizedFullHtml = isFullHtml ? normalizeChapterHtmlFonts(chapterSource, resolvedSlug) : "";

	return (
		<main
			className="w"
			style={{
				paddingTop: isFullHtml ? "0" : "120px",
				paddingBottom: isFullHtml ? "0" : "80px",
				maxWidth: isFullHtml ? "100%" : undefined,
				paddingLeft: isFullHtml ? "0" : undefined,
				paddingRight: isFullHtml ? "0" : undefined,
			}}
		>
			{isFullHtml ? (
				<iframe
					title={chapterTitle}
					srcDoc={normalizedFullHtml}
					style={{
						display: "block",
						width: "100%",
						height: "100vh",
						border: "0",
						background: "var(--bg)",
						position: "relative",
						zIndex: 9001,
					}}
				/>
			) : null}

			{!isFullHtml ? (
			<p style={{ marginTop: 0 }}>
				<a href="/book">← Ко всем главам</a>
			</p>
			) : null}

			{!isFullHtml && !chapterSource.trimStart().startsWith("<") && !chapterSource.includes("# ") ? (
				<h1 style={{ marginBottom: "12px" }}>{chapterTitle}</h1>
			) : null}

			{chapterSource && !isFullHtml ? (
				<article className="book-article">
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
				</article>
			) : (
				!isFullHtml && (
					<p style={{ color: "var(--t2)", marginBottom: "24px" }}>
					Эта глава пока пустая. Добавьте текст в файл {`${params.slug}.mdx`}.
					</p>
				)
			)}

			{!isFullHtml ? (
				<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
					{prevSlug ? <a href={`/book/${prevSlug}`}>← Предыдущая</a> : null}
					{nextSlug ? <a href={`/book/${nextSlug}`}>Следующая →</a> : null}
				</div>
			) : null}
		</main>
	);
}
