import type { ReactNode } from "react";

/**
 * ProtectedStub — заглушка для закрытых разделов (Фаза 1 безопасности, 20.09.2026).
 *
 * Закрытый контент (/prompts, /agency-in-a-box, /team-book, /inside, /docs)
 * больше НЕ собирается в статику сайта — его отдаёт бэкенд по одноразовому
 * ключу (GET /api/protected/content). Здесь — только указатель на бота,
 * через которого выдаётся доступ.
 *
 * Серверный компонент: в HTML/RSC-payload попадает только текст заглушки.
 */

const BOT_URL = "https://t.me/NCAi_Agency_bot";

export default function ProtectedStub({
	title,
	description,
}: {
	title: string;
	description?: ReactNode;
}) {
	return (
		<main
			style={{
				minHeight: "70vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "2rem 1.5rem",
				background: "var(--bg, #080808)",
			}}
		>
			<div style={{ width: "100%", maxWidth: 520, textAlign: "center" }}>
				<p
					className="page-badge"
					style={{ justifyContent: "center", marginBottom: "1.25rem" }}
				>
					<span className="bdot" />
					Внутренний раздел
				</p>
				<h1
					style={{
						fontFamily: "var(--fd, inherit)",
						fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
						fontWeight: 800,
						letterSpacing: "-.03em",
						color: "var(--t, #edeae3)",
						margin: "0 0 .75rem",
					}}
				>
					{title}
				</h1>
				<p
					style={{
						color: "var(--t2, #b0aba3)",
						fontSize: "1.05rem",
						lineHeight: 1.7,
						margin: "0 0 1.75rem",
					}}
				>
					{description ?? (
						<>
							Этот материал — личный, он не публикуется в открытом доступе.
							Доступ выдаётся персонально через бота NCAi.
						</>
					)}
				</p>
				<a
					href={BOT_URL}
					target="_blank"
					rel="noopener noreferrer"
					style={{
						display: "inline-block",
						padding: ".85rem 1.75rem",
						fontSize: "1rem",
						fontWeight: 700,
						borderRadius: 12,
						border: "none",
						cursor: "pointer",
						textDecoration: "none",
						background: "var(--a, #FFD000)",
						color: "#080808",
					}}
				>
					Открыть бота NCAi →
				</a>
				<p
					style={{
						color: "var(--t3, #6e6a63)",
						fontSize: ".9rem",
						marginTop: "1rem",
					}}
				>
					В боте — кнопка «🔐 Доступ к материалам»
				</p>
			</div>
		</main>
	);
}
