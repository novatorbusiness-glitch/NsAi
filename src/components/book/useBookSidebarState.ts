"use client";

import { useEffect, useState } from "react";

// Состояние сайдбара-оглавления (свёрнут / развёрнут).
// Хранится в localStorage, чтобы переживать навигацию между подглавами
// (на отдельных страницах /book/[slug]) и перезагрузку страницы.
const STORAGE_KEY = "ncai-book-sidebar-collapsed";

export function useBookSidebarCollapsed(): [boolean, (v: boolean) => void] {
	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		try {
			const saved = window.localStorage.getItem(STORAGE_KEY);
			if (saved === "1") setCollapsed(true);
		} catch {
			/* noop */
		}
	}, []);

	const set = (value: boolean) => {
		setCollapsed(value);
		try {
			window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
		} catch {
			/* noop */
		}
	};

	return [collapsed, set];
}
