#!/usr/bin/env python3
"""Генерирует src/lib/agents-data.ts из agents.json (hermes-mini-app).

Запуск: python3 scripts/gen_agents_data.py
Источник: /Users/air/hermes-mini-app/agents.json (17 агентов).
"""
from __future__ import annotations

import json
from pathlib import Path

SRC = Path("/Users/air/hermes-mini-app/agents.json")
OUT = Path(__file__).resolve().parent.parent / "src" / "lib" / "agents-data.ts"

with open(SRC, encoding="utf-8") as f:
    data = json.load(f)

agents = data["agents"]
assert len(agents) == 17, f"Ожидалось 17 агентов, получено {len(agents)}"

FIELDS = [
    "id", "name", "role", "emoji", "avatar_color", "avatar_bg", "status",
    "department", "lead_of", "description", "knowledge_base", "skills",
    "model", "can_run", "run_hint", "petrov_level", "model_tier", "charge",
]

def js_str(s) -> str:
    return json.dumps(s, ensure_ascii=False)

def js_bool(b) -> str:
    return "true" if b else "false"

lines = []
lines.append("// АВТОГЕНЕРИРУЕМЫЙ ФАЙЛ: данные из agents.json (команда NCAi).")
lines.append("// Регенерация: python3 scripts/gen_agents_data.py (источник — /Users/air/hermes-mini-app/agents.json).")
lines.append("")
lines.append("export interface AgentItem {")
lines.append("\tid: string;")
lines.append("\tname: string;")
lines.append("\trole: string;")
lines.append("\temoji: string;")
lines.append("\tavatar_color: string;")
lines.append("\tavatar_bg: string;")
lines.append("\tstatus: string;")
lines.append("\tdepartment: string;")
lines.append("\tlead_of: string | null;")
lines.append("\tdescription: string;")
lines.append("\tknowledge_base: string[];")
lines.append("\tskills: string[];")
lines.append("\tmodel: string;")
lines.append("\tcan_run: boolean;")
lines.append("\trun_hint: string;")
lines.append("\tpetrov_level: string;")
lines.append("\tmodel_tier: string;")
lines.append("\tcharge: string | null;")
lines.append("}")
lines.append("")
lines.append("export const AGENTS: AgentItem[] = [")

for a in agents:
    lines.append("\t{")
    for f in FIELDS:
        v = a.get(f)
        if f == "can_run":
            lines.append(f"\t\tcan_run: {js_bool(bool(v))},")
        elif isinstance(v, list):
            items = ", ".join(js_str(x) for x in v)
            lines.append(f"\t\t{f}: [{items}],")
        elif v is None:
            lines.append(f"\t\t{f}: null,")
        else:
            lines.append(f"\t\t{f}: {js_str(v)},")
    lines.append("\t},")
lines.append("];")
lines.append("")
lines.append(f"export const AGENTS_TOTAL = {len(agents)};")
lines.append("")

OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"OK: {len(agents)} агентов записано в {OUT}")

# Сводка по отделам
from collections import Counter
depts = Counter(a["department"] for a in agents)
for d, c in depts.items():
    print(f"  {d}: {c}")
