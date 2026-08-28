"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * PasswordGate — серверно-рендеримый экран ввода пароля для защищённых страниц.
 *
 * Контент (AgencyInABoxContent / TeamBook) подключается через dynamic(..., { ssr: false })
 * и рендерится ТОЛЬКО на клиенте после верного пароля, поэтому текст глав не попадает
 * в статический HTML /agency-in-a-box и /team-book.
 *
 * Пароль берётся из NEXT_PUBLIC_PROTECTED_PAGE_PASSWORD (fallback "1111").
 */

// ssr:false — компоненты не рендерятся на сервере и не попадают в HTML/RSC-payload.
const AgencyContent = dynamic(() => import("@/components/pages/AgencyInABoxContent"), {
	ssr: false,
});
const TeamBookContent = dynamic(() => import("@/components/pages/TeamBook"), {
	ssr: false,
});

const PASSWORD = process.env.NEXT_PUBLIC_PROTECTED_PAGE_PASSWORD || "1111";
const STORAGE_KEY = "ncai_page_unlocked";

export default function PasswordGate({ kind }: { kind: "agency" | "team" }) {
	const [unlocked, setUnlocked] = useState(false);
	const [value, setValue] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		try {
			if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
		} catch {
			/* noop */
		}
	}, []);

	if (unlocked) {
		return kind === "agency" ? <AgencyContent /> : <TeamBookContent />;
	}

	const submit = () => {
		if (value === PASSWORD) {
			try {
				sessionStorage.setItem(STORAGE_KEY, "1");
			} catch {
				/* noop */
			}
			setUnlocked(true);
		} else {
			setError(true);
		}
	};

	return (
		<div
			style={{
				minHeight: "70vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "2rem 1.5rem",
				background: "var(--bg, #080808)",
			}}
		>
			<div style={{ width: "100%", maxWidth: 380, textAlign: "center" }}>
				<h1
					style={{
						fontFamily: "var(--fd, inherit)",
						fontSize: "1.8rem",
						fontWeight: 800,
						letterSpacing: "-.03em",
						color: "var(--t, #fff)",
						marginBottom: ".5rem",
					}}
				>
					Внутренняя страница
				</h1>
				<p style={{ color: "var(--t2, rgba(255,255,255,.6))", marginBottom: "1.5rem" }}>
					Введите пароль для доступа
				</p>
				<input
					type="password"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						setError(false);
					}}
					onKeyDown={(e) => e.key === "Enter" && submit()}
					placeholder="••••"
					autoFocus
					style={{
						width: "100%",
						padding: ".8rem 1rem",
						fontSize: "1.2rem",
						textAlign: "center",
						borderRadius: 12,
						border: error ? "2px solid #e5484d" : "1px solid rgba(255,255,255,.2)",
						background: "rgba(255,255,255,.06)",
						color: "#fff",
						outline: "none",
						marginBottom: "1rem",
						boxSizing: "border-box",
					}}
				/>
				{error && (
					<p style={{ color: "#e5484d", marginBottom: ".8rem", fontSize: ".9rem" }}>
						Неверный пароль
					</p>
				)}
				<button
					onClick={submit}
					style={{
						width: "100%",
						padding: ".85rem 1.5rem",
						fontSize: "1rem",
						fontWeight: 700,
						borderRadius: 12,
						border: "none",
						cursor: "pointer",
						background: "var(--a, #FFD000)",
						color: "#080808",
					}}
				>
					Открыть
				</button>
			</div>
		</div>
	);
}
