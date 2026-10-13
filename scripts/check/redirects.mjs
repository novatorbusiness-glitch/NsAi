// Каждый старый адрес из src/config/redirects.ts отдаёт страницу-переадресацию на существующую страницу.
import fs from "fs";
import { fileFor, report } from "./lib.mjs";

const src = fs.readFileSync("src/config/redirects.ts", "utf8");
const errors = [];
for (const [, from, to] of src.matchAll(/"(\/[^"]+)":\s*"([^"]+)"/g)) {
	const f = fileFor(from);
	if (!f) { errors.push(`${from}: нет страницы-переадресации`); continue; }
	if (!fs.readFileSync(f, "utf8").includes(`url=${to}"`)) errors.push(`${from}: ведёт не на ${to}`);
	if (!fileFor(to)) errors.push(`${from} → ${to}: такой страницы нет`);
}
report("переадресации", errors);
