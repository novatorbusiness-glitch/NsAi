import { site } from "@/config/site";

declare global {
	interface Window {
		ym?: (...args: unknown[]) => void;
	}
}

// Цель в Метрику. Пока посетитель не дал согласие, Метрики нет — вызов просто ничего не делает.
export function goal(name: string, params?: Record<string, unknown>) {
	if (typeof window !== "undefined" && window.ym) window.ym(site.metrikaId, "reachGoal", name, params);
}
