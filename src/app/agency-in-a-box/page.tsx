import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import React from "react";

export const metadata: Metadata = {
	title: "Агентство в коробке — методология NCAi | NcAi",
	description:
		"«Агентство в коробке» — методология SaaS-платформы NCAi: мульти-аренда, распаковка клиента, подписка и тарифы, автоматизация, ведение сети клиентов. 6 глав, чит-коды, словарь. Илья Новицкий.",
	alternates: {
		canonical: "/agency-in-a-box",
	},
};

/** Разбор inline-разметки: **жирный**, *курсив*, `код`. */
function inline(text: string): React.ReactNode {
	const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g);
	return parts.map((p, i) => {
		if (p.startsWith("**") && p.endsWith("**") && p.length > 4) {
			return <strong key={i}>{p.slice(2, -2)}</strong>;
		}
		if (p.startsWith("`") && p.endsWith("`") && p.length > 2) {
			return (
				<code key={i} className="docs-code">
					{p.slice(1, -1)}
				</code>
			);
		}
		if (p.startsWith("*") && p.endsWith("*") && p.length > 2) {
			return <em key={i}>{p.slice(1, -1)}</em>;
		}
		return p;
	});
}

interface TocEntry {
	id: string;
	title: string;
}

/** Парсер markdown → React: заголовки (с якорями), списки, чек-листы, таблицы, цитаты, код, hr. */
function mdToReact(src: string): { toc: TocEntry[]; nodes: React.ReactNode[] } {
	const lines = src.split("\n");
	const out: React.ReactNode[] = [];
	const toc: TocEntry[] = [];
	let key = 0;
	let list: { type: "ul" | "ol"; items: React.ReactNode[] } | null = null;
	let table: string[][] = [];
	let inTable = false;
	let inCode = false;
	let codeBuf: string[] = [];

	const flushList = () => {
		if (!list) return;
		const items = list.items;
		if (list.type === "ol") {
			out.push(
				<ol key={`ol-${key++}`} className="docs-list">
					{items.map((it, i) => (
						<li key={i}>{it}</li>
					))}
				</ol>,
			);
		} else {
			out.push(
				<ul key={`ul-${key++}`} className="docs-list">
					{items.map((it, i) => (
						<li key={i}>{it}</li>
					))}
				</ul>,
			);
		}
		list = null;
	};

	const flushTable = () => {
		if (!inTable || !table.length) return;
		out.push(
			<div key={`tbl-${key++}`} className="docs-table-wrap">
				<table className="docs-table">
					<thead>
						<tr>
							{table[0].map((c, i) => (
								<th key={i}>{inline(c)}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{table.slice(1).map((row, ri) => (
							<tr key={ri}>
								{row.map((c, i) => (
									<td key={i}>{inline(c)}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>,
		);
		table = [];
		inTable = false;
	};

	const flushCode = () => {
		if (!inCode) return;
		out.push(
			<pre key={`pre-${key++}`} className="docs-pre">
				<code>{codeBuf.join("\n")}</code>
			</pre>,
		);
		codeBuf = [];
		inCode = false;
	};

	const flushAll = () => {
		flushList();
		flushTable();
		flushCode();
	};

	for (const raw of lines) {
		const line = raw.trimEnd();

		// Кодовые блоки
		if (line.trim().startsWith("```")) {
			if (inCode) {
				flushCode(); // закрывающий фенс
			} else {
				flushList();
				flushTable();
				inCode = true;
			}
			continue;
		}
		if (inCode) {
			codeBuf.push(line);
			continue;
		}

		// Таблицы
		if (line.startsWith("|")) {
			flushList();
			const cells = line.split("|").slice(1, -1).map((c) => c.trim());
			// строка-разделитель |---|---| — пропускаем
			if (cells.length && cells.every((c) => /^:?-+:?$/.test(c))) {
				inTable = false;
				table = [];
				continue;
			}
			if (!inTable) {
				table = [];
				inTable = true;
			}
			table.push(cells);
			continue;
		}
		if (inTable) flushTable();

		const trimmed = line.trim();

		if (trimmed.startsWith("# ")) {
			flushAll();
			const title = trimmed.slice(2).trim();
			if (/^агентство в коробке/i.test(title)) continue; // заголовок документа — уже в шапке страницы
			const id = `ch-${toc.length + 1}`;
			toc.push({ id, title });
			out.push(
				<h2 key={`h2-${key++}`} id={id} className="docs-h2">
					{title}
				</h2>,
			);
		} else if (trimmed.startsWith("## ")) {
			flushAll();
			out.push(
				<h3 key={`h3-${key++}`} className="docs-h3">
					{trimmed.slice(3).trim()}
				</h3>,
			);
		} else if (trimmed.startsWith("### ")) {
			flushAll();
			out.push(
				<h4 key={`h4-${key++}`} className="docs-h4">
					{trimmed.slice(4).trim()}
				</h4>,
			);
		} else if (/^[-*] \[[ xX]\]\s+/.test(trimmed)) {
			if (!list || list.type !== "ul") {
				flushList();
				list = { type: "ul", items: [] };
			}
			const rest = trimmed.replace(/^[-*] \[[ xX]\]\s+/, "");
			list.items.push(
				<span className="docs-check">
					<span className="docs-check-box">☐</span>
					{inline(rest)}
				</span>,
			);
		} else if (/^[-*]\s+/.test(trimmed)) {
			if (!list || list.type !== "ul") {
				flushList();
				list = { type: "ul", items: [] };
			}
			list.items.push(inline(trimmed.slice(2).trim()));
		} else if (/^\d+\.\s+/.test(trimmed)) {
			if (!list || list.type !== "ol") {
				flushList();
				list = { type: "ol", items: [] };
			}
			list.items.push(inline(trimmed.replace(/^\d+\.\s+/, "")));
		} else if (trimmed.startsWith("> ")) {
			flushList();
			out.push(
				<blockquote key={`q-${key++}`} className="docs-quote">
					{inline(trimmed.slice(2))}
				</blockquote>,
			);
		} else if (trimmed === "---") {
			flushAll();
			out.push(<hr key={`hr-${key++}`} className="docs-hr" />);
		} else if (trimmed === "") {
			flushList();
		} else if (trimmed.startsWith("![")) {
			flushList();
			const m = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
			if (m) {
				out.push(
					<div key={`img-${key++}`} className="docs-img-wrap">
						<img src={m[2]} alt={m[1]} className="docs-img" loading="lazy" />
					</div>,
				);
			}
		} else {
			flushList();
			out.push(
				<p key={`p-${key++}`} className="docs-p">
					{inline(trimmed)}
				</p>,
			);
		}
	}
	flushAll();
	return { toc, nodes: out };
}

export default function AgencyInABoxPage() {
	let src = "";
	try {
		src = fs.readFileSync(path.join(process.cwd(), "content/agency/agency-in-a-box.md"), "utf8");
	} catch {
		src = "# АГЕНТСТВО В КОРОБКЕ\n\nФайл не найден.";
	}

	// Фронт-маттер (заголовок, теги, «Карта документа») заменяется шапкой страницы и кликабельным оглавлением —
	// контент начинаем с «Глава 1».
	const startIdx = src.indexOf("# Глава 1.");
	if (startIdx !== -1) src = src.slice(startIdx);

	const { toc, nodes } = mdToReact(src);

	return (
		<main className="docs-page agency-page">
			<div className="docs-shell">
				<p className="docs-back">
					<a href="/">← NcAi · на главную</a>
					<span className="docs-back-sep">·</span>
					<a href="/book">Книга «Нейро-Воронка»</a>
				</p>

				<h1 className="book-index-title">АГЕНТСТВО В КОРОБКЕ</h1>
				<p className="book-index-subtitle">
					NCAi — SaaS-платформа «Агентство в коробке». Методология продукта: мульти-аренда,
					распаковка клиента, подписка и тарифы, автоматизация, ведение сети клиентов.
				</p>
				<p className="book-index-author">Автор: Илья Новицкий · NCAi · версия 2.0 · 27.08.2026</p>

				<div className="docs-toc">
					<div className="docs-toc-label">Оглавление</div>
					<ol className="docs-toc-list">
						{toc.map((entry) => (
							<li key={entry.id}>
								<a href={`#${entry.id}`} className="docs-toc-link">
									{entry.title}
								</a>
							</li>
						))}
					</ol>
				</div>

				<div className="docs-body">{nodes}</div>
			</div>
		</main>
	);
}
