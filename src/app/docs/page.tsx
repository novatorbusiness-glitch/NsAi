import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import React from "react";

export const metadata: Metadata = {
	title: "Книга NCAi — руководство по управлению агентством",
	description: "Бонус-руководство для клиентов NCAi: как управлять уже готовым AI-агентством — задачи, отчёты, финансы, частые вопросы.",
	robots: { index: false, follow: false }, // скрыть от поисковиков
};

/** Инлайн-markdown: **жирный** → <strong>, `код` → <code>. */
function inline(s: string): string {
	return s
		.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
		.replace(/`(.+?)`/g, '<code class="docs-code">$1</code>');
}

/** Простой парсер markdown → React (заголовки, списки, таблицы, жирный, блоки кода). */
function mdToHtml(src: string): React.ReactNode[] {
	const lines = src.split("\n");
	const out: React.ReactNode[] = [];
	let list: string[] = [];
	let table: string[][] = [];
	let inTable = false;
	let inCode = false;
	let codeLines: string[] = [];
	let key = 0;

	const flushList = () => {
		if (list.length) {
			out.push(
				<ul key={`ul-${key++}`} className="docs-list">
					{list.map((li, i) => (
						<li key={i} dangerouslySetInnerHTML={{ __html: li }} />
					))}
				</ul>,
			);
			list = [];
		}
	};
	const flushTable = () => {
		if (table.length) {
			out.push(
				<div key={`tbl-${key++}`} className="docs-table-wrap">
					<table className="docs-table">
						<thead>
							<tr>{table[0].map((c, i) => <th key={i} dangerouslySetInnerHTML={{ __html: c }} />)}</tr>
						</thead>
						<tbody>
							{table.slice(1).map((row, ri) => (
								<tr key={ri}>{row.map((c, i) => <td key={i} dangerouslySetInnerHTML={{ __html: c }} />)}</tr>
							))}
						</tbody>
					</table>
				</div>,
			);
			table = [];
			inTable = false;
		}
	};

	for (const raw of lines) {
		const line = raw.trimEnd();
		if (line.trim().startsWith("```")) {
			if (!inCode) {
				flushList();
				if (inTable) flushTable();
				inCode = true;
				codeLines = [];
			} else {
				out.push(
					<pre key={key++} className="docs-pre">
						<code>{codeLines.join("\n")}</code>
					</pre>,
				);
				inCode = false;
			}
			continue;
		}
		if (inCode) {
			codeLines.push(raw);
			continue;
		}
		if (line.startsWith("|")) {
			const cells = line.split("|").slice(1, -1).map((c) => inline(c.trim()));
			if (!inTable) {
				table = [];
				inTable = true;
			}
			table.push(cells);
			continue;
		}
		if (inTable) flushTable();
		if (line.startsWith("### ")) {
			flushList();
			out.push(<h3 key={key++} className="docs-h3" dangerouslySetInnerHTML={{ __html: inline(line.slice(4)) }} />);
		} else if (line.startsWith("## ")) {
			flushList();
			out.push(<h2 key={key++} className="docs-h2" dangerouslySetInnerHTML={{ __html: inline(line.slice(3)) }} />);
		} else if (line.startsWith("# ")) {
			flushList();
			out.push(<h1 key={key++} className="docs-h1" dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }} />);
		} else if (line.startsWith("- ")) {
			list.push(inline(line.slice(2)));
		} else if (line.startsWith("> ")) {
			flushList();
			out.push(<blockquote key={key++} className="docs-quote" dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }} />);
		} else if (line.trim() === "---") {
			flushList();
			out.push(<hr key={key++} className="docs-hr" />);
		} else if (line.trim() === "") {
			flushList();
		} else {
			flushList();
			out.push(<p key={key++} className="docs-p" dangerouslySetInnerHTML={{ __html: inline(line) }} />);
		}
	}
	flushList();
	flushTable();
	return out;
}

export default function DocsPage() {
	let src = "";
	try {
		src = fs.readFileSync(path.join(process.cwd(), "content/docs/kniga-vnedreniya.md"), "utf8");
	} catch {
		src = "# Книга внедрения\n\nФайл не найден.";
	}

	return (
		<main className="docs-page">
			<div className="docs-shell">
				<a href="/" className="docs-back">
					← На сайт NCAi
				</a>
				<p className="page-badge">
					<span className="bdot" />
					Внутренний документ
				</p>
				{mdToHtml(src)}
			</div>
		</main>
	);
}
