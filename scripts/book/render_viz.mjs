// Схемы книги из src/lib/book-viz.ts → scripts/book/viz.json. Запуск: node --experimental-strip-types scripts/book/render_viz.mjs (Node 22+).
import { writeFileSync } from "node:fs";
const mod = await import("../../src/lib/book-viz.ts");
const names = ["stimuly", "matrica", "doverie", "kasanija", "anatomiya", "arhitektura", "sborka", "uderzhanie", "ohvaty", "kopirajter"];
const out = {};
for (const n of names) out[n] = mod.inlineVizSvg(`<img src="/viz/${n}.svg">`);
out.__css = mod.VIZ_CSS;
writeFileSync(new URL("./viz.json", import.meta.url), JSON.stringify(out));
console.log("viz:", names.length);
