// Типографика текстов из content/: неразрывный пробел внутри чисел и между числом и единицей,
// чтобы «40 000 ₽» или «3 недели» не разрывались переносом строки. Применяется при сборке ко всем строкам.
const NB = "\u00a0";
const WJ = "\u2060"; // склейка диапазона «2–3»: невидимый знак, запрещающий перенос
const UNIT = /(\d) (₽|млн|млрд|тыс\.?|тысяч[а-я]*|лет|год[а-я]*|минут[а-я]*|дн(?:я|ей|и)|недел[а-я]*|месяц[а-я]*|час[а-я]*|%)(?![а-яё])/g;

export function nb(s: string) {
	let t = s;
	for (let i = 0; i < 2; i++) t = t.replace(/(\d) (\d{3})(?!\d)/g, `$1${NB}$2`);
	t = t.replace(/(\d)–(\d)/g, `$1${WJ}–${WJ}$2`);
	return t.replace(UNIT, `$1${NB}$2`);
}

export function typo<T>(v: T): T {
	if (typeof v === "string") return nb(v) as T;
	if (Array.isArray(v)) return v.map(typo) as T;
	if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, typo(x)])) as T;
	return v;
}
