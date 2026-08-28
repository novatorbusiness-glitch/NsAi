// Генерирует src/lib/agency-content.ts из content/agency/agency-in-a-box.md.
// Контент защищённой страницы уходит в отдельный клиентский чанк (dynamic ssr:false),
// чтобы не попадать в статический HTML /agency-in-a-box до ввода пароля.
// Запускается автоматически через npm run prebuild.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "content", "agency", "agency-in-a-box.md");
const OUT = path.join(ROOT, "src", "lib", "agency-content.ts");

const md = fs.readFileSync(SRC, "utf8");

const content =
  "// АВТОГЕНЕРАЦИЯ — не редактировать вручную.\n" +
  "// Источник: content/agency/agency-in-a-box.md\n" +
  "// Обновляется через `npm run prebuild` (scripts/gen-agency-content.js).\n" +
  "export const AGENCY_MD: string = " +
  JSON.stringify(md) +
  ";\n";

fs.writeFileSync(OUT, content);
console.log(
  `[gen-agency-content] ${OUT} ← ${SRC} (${Buffer.byteLength(md, "utf8")} bytes)`,
);
