// Единый набор line-иконок (замена emoji) для премиум-редизайна.
// Стиль: stroke-based, 22x22, currentColor — наследует цвет родителя,
// поэтому просто оборачивать в span/div с нужным color.
const s = (inner: string) =>
	`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

export const ICONS: Record<string, string> = {
	compass: s(`<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2l-2 5.6-5.6 2 2-5.6z"/>`),
	bolt: s(`<path d="M12 2 4 14h6l-1 8 9-13h-6z"/>`),
	brain: s(`<path d="M9 3a3 3 0 0 0-3 3v.3A3 3 0 0 0 4 9v1a3 3 0 0 0 1 5.6V17a3 3 0 0 0 3 3h1V3z"/><path d="M15 3a3 3 0 0 1 3 3v.3A3 3 0 0 1 20 9v1a3 3 0 0 1-1 5.6V17a3 3 0 0 1-3 3h-1V3z"/>`),
	moon: s(`<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z"/>`),
	target: s(`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`),
	eye: s(`<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>`),
	door: s(`<rect x="5" y="3" width="12" height="18" rx="1"/><circle cx="14" cy="12" r="1"/><path d="M17 21h5M17 3h5"/>`),
	building: s(`<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>`),
	lock: s(`<rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`),
	calendar: s(`<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>`),
	box: s(`<path d="M21 8 12 3 3 8l9 5 9-5z"/><path d="M3 8v9l9 5 9-5V8"/><path d="M12 13v9"/>`),
	book: s(`<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v14A2.5 2.5 0 0 1 6.5 22"/>`),
	chat: s(`<path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="M21 4v6h-6"/>`),
	clapper: s(`<path d="M3 8.5 4.5 3h3L6 8.5z"/><path d="M8 8.5 9.5 3h3L11 8.5z"/><path d="M13 8.5 14.5 3h3L16 8.5z"/><rect x="3" y="8.5" width="18" height="12" rx="1"/>`),
	shop: s(`<path d="M4 8 5.5 3h13L20 8"/><path d="M4 8h16v13H4z"/><path d="M9 12v-1a3 3 0 0 1 6 0v1"/>`),
	toolbox: s(`<rect x="3" y="9" width="18" height="11" rx="1"/><path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><path d="M3 13h18"/>`),
	sparkle: s(`<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>`),
	check: s(`<path d="M5 12.5 10 17l9-10"/>`),
	gear: s(`<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>`),
	folder: s(`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`),
	card: s(`<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>`),
	coins: s(`<circle cx="9" cy="9" r="6"/><path d="M14.5 8.7a6 6 0 1 1 0 8.6"/>`),
	chartUp: s(`<path d="M3 17l6-6 4 4 8-8"/><path d="M15 6h6v6"/>`),
	people: s(`<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16.5 5.5a3.2 3.2 0 0 1 0 6.2"/><path d="M18.5 14a6 6 0 0 1 3.5 6"/>`),
	clipboard: s(`<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/>`),
	chartBar: s(`<path d="M4 20V10M12 20V4M20 20v-7"/>`),
	code: s(`<path d="M9 18 3 12l6-6M15 6l6 6-6 6"/>`),
	sword: s(`<path d="M14.5 3 21 9.5 11 19.5 4.5 13z"/><path d="M4.5 13 3 21l8-1.5"/><path d="M17 6.5 20 3.5"/>`),
	gamepad: s(`<rect x="2" y="8" width="20" height="10" rx="5"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="14" r="1"/>`),
	monitor: s(`<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>`),
	phone: s(`<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>`),
	handshake: s(`<path d="M2 12h4l3-3 3 3 3-3 3 3h4"/><path d="M8 9v6M16 9v6"/><path d="M2 12v3l4 3M22 12v3l-4 3"/>`),
	puzzle: s(`<path d="M9 3h4v2a2 2 0 1 0 4 0V3h4v4h-2a2 2 0 1 0 0 4h2v4h-4v-2a2 2 0 1 0-4 0v2H9v-4H7a2 2 0 1 1 0-4h2z"/>`),
	link: s(`<path d="M9 15 15 9"/><path d="M11 6l1.5-1.5a4 4 0 0 1 5.7 5.7L16.5 12"/><path d="M13 18l-1.5 1.5a4 4 0 0 1-5.7-5.7L7.5 12"/>`),
	rocket: s(`<path d="M13.5 2.5c3 1 5 3 5.5 6.5-3-.5-5.5.5-7 2-1.5 1.5-2.5 4-2 7-3.5-.5-5.5-2.5-6.5-5.5 1-4 6-9 10-10z"/><circle cx="14" cy="10" r="1.5"/><path d="M8 15l-2 5 5-2M5 12 3 13l1 3"/>`),
	robot: s(`<rect x="4" y="9" width="16" height="11" rx="2"/><circle cx="9" cy="14.5" r="1.3"/><circle cx="15" cy="14.5" r="1.3"/><path d="M12 5v4M9 5h6"/><circle cx="12" cy="4" r="1"/>`),
	hourglass: s(`<path d="M6 2h12M6 22h12"/><path d="M7 2c0 5 4 6 5 8-1 2-5 3-5 8M17 2c0 5-4 6-5 8 1 2 5 3 5 8"/>`),
};

export function icon(name: keyof typeof ICONS, color = "var(--a)"): string {
	return `<span style="display:inline-flex;color:${color}">${ICONS[name]}</span>`;
}
