// SVG → PNG через headless Chrome (прозрачный фон). node render.mjs <svg> <png> <ширина> [фон]
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
const [svgPath, out, w, bg] = process.argv.slice(2);
const C = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const p = spawn(C, ["--headless=new", "--remote-debugging-port=9337", `--user-data-dir=${process.env.TMPDIR}cdp-brand`, "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let tabs; for (let i = 0; i < 40; i++) { try { tabs = await (await fetch("http://127.0.0.1:9337/json")).json(); break; } catch { await sleep(250); } }
const ws = new WebSocket(tabs.find((t) => t.type === "page").webSocketDebuggerUrl); await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map(); ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const svg = fs.readFileSync(svgPath, "utf8");
const vb = svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number); const W = +w; const H = Math.round(W * vb[3] / vb[2]);
await send("Emulation.setDefaultBackgroundColorOverride", { color: { r: 0, g: 0, b: 0, a: 0 } });
await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 1, mobile: false });
const html = `<html><body style="margin:0;background:${bg || "transparent"}">${svg.replace("<svg ", `<svg width="${W}" height="${H}" style="display:block" `)}</body></html>`;
await send("Page.navigate", { url: "data:text/html;charset=utf-8," + encodeURIComponent(html) }); await sleep(500);
const s = await send("Page.captureScreenshot", { clip: { x: 0, y: 0, width: W, height: H, scale: 1 }, format: "png" });
fs.writeFileSync(out, Buffer.from(s.result.data, "base64")); ws.close(); p.kill();
