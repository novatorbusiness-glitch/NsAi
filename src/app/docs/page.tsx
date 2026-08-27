import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import React from "react";

export const metadata: Metadata = {
	title: "Книга внедрения NCAi",
	description: "Полное руководство по внедрению AI-агентства NCAi в бизнес: установка, настройка, обучение оператора.",
	robots: { index: false, follow: false }, // скрыть от поисковиков
};

/** Простой парсер markdown → React (заголовки, списки, таблицы, жирный). */
function mdToHtml(src: string): React.ReactNode[] {
	const lines = src.split("\n");
	const out: React.ReactNode[] = [];
	let list: string[] = [];
	let table: string[][] = [];
	let inTable = false;
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
		if (line.startsWith("|")) {
			const cells = line.split("|").slice(1, -1).map((c) => c.trim());
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
			out.push(<h3 key={key++} className="docs-h3">{line.slice(4)}</h3>);
		} else if (line.startsWith("## ")) {
			flushList();
			out.push(<h2 key={key++} className="docs-h2">{line.slice(3)}</h2>);
		} else if (line.startsWith("# ")) {
			flushList();
			out.push(<h1 key={key++} className="docs-h1">{line.slice(2)}</h1>);
		} else if (line.startsWith("- ")) {
			list.push(line.slice(2));
		} else if (line.startsWith("> ")) {
			flushList();
			out.push(<blockquote key={key++} className="docs-quote" dangerouslySetInnerHTML={{ __html: line.slice(2) }} />);
		} else if (line.trim() === "---") {
			flushList();
			out.push(<hr key={key++} className="docs-hr" />);
		} else if (line.trim() === "") {
			flushList();
		} else {
			flushList();
			out.push(<p key={key++} className="docs-p" dangerouslySetInnerHTML={{ __html: line }} />);
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
			<div className="docs-shell">{mdToHtml(src)}</div>
		</main>
	);
}
