# Забрать карту и демо кабинета из чата «Фундамент» (решение 16.10): python3 scripts/primer/sync.py
# Карта → content/data/project-map.json, демо → public/demo/kabinet.html (с noindex). Название продукта и цены на сайт не попадают.
import json, os, re, sys
# PRIMER_SRC: папка с собранной копией демо, если её собирали отдельно (20.10)
SRC = os.environ.get("PRIMER_SRC") or os.path.expanduser("~/Desktop/OkiDelo/90 Рабочие файлы/Карта проекта")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BAD = re.compile(r"oki\s*delo|оки\s*дело|₽", re.I)

def check(name, text):
    plain = re.sub(r"<[^>]+>", "", text)
    if BAD.search(text) or BAD.search(plain):
        sys.exit(f"стоп: в {name} есть название продукта или цена")

m = open(os.path.join(SRC, "okidelo-map.public.json"), encoding="utf-8").read()
check("карте", m); json.loads(m)
# на сайте тире нет (формула текстов): «Сайт продукта — каркас» → «Сайт продукта: каркас»
m = m.replace(" — ", ": ")
open(os.path.join(ROOT, "content/data/project-map.json"), "w", encoding="utf-8").write(m)

d = open(os.path.join(SRC, "okidelo-demo.html"), encoding="utf-8").read()
check("демо", d)
# рабочие пометки из стилей (шаги, имена, «Фундамент») наружу не отдаём
d = re.sub(r"<style>.*?</style>", lambda m: re.sub(r"/\*.*?\*/", "", m.group(0), flags=re.S), d, flags=re.S)
d = re.sub(r"<!--.*?-->", "", d, flags=re.S)
# на сайте не пишем «условные» (решение Ильи 16.10): плашка демо просто «Демо»
d = d.replace("Демо · данные условные", "Демо")
if 'name="robots"' not in d:
    d = re.sub(r'(<meta charset="[^"]*">)', r'\1<meta name="robots" content="noindex,nofollow">', d, count=1)
os.makedirs(os.path.join(ROOT, "public/demo"), exist_ok=True)
open(os.path.join(ROOT, "public/demo/kabinet.html"), "w", encoding="utf-8").write(d)
print("карта и демо обновлены")
