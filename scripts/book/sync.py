# Книга «Нейро-воронка» v2: Obsidian → сайт одной командой (python3.13 scripts/book/sync.py).
# Берёт утверждённые главы «02 Редакция v2/*.md», рисунки «04 Иллюстрации/v2 фирменный стиль» и подписи из DOCX.
# Пишет content/book/<slug>.md (тексты как есть, [КАРТИНКА: …] → [[fig:N]]), content/book/book.json (порядок, этапы, рисунки)
# public/book/img/<slug>-<k>.webp (1200 px) и обложку public/images/site/book-cover.jpg. Тексты не правит. Не сошлись рисунки, подписи или главы — останавливается.
# Источник можно подменить: BOOK_SRC=<папка Neuro-Funnel>.
import json, os, re, sys, zipfile
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = Path(os.environ.get('BOOK_SRC', Path.home() / 'Documents/Obsidian_Vault/03_🧠_ПРОЕКТ_NsAi (Л-Б, Консалтинг, Книги)/02_Книги_и_Методология/Neuro-Funnel'))
TEXT, PICS, DOCX = SRC / '02 Редакция v2', SRC / '04 Иллюстрации/v2 фирменный стиль', SRC / '02 Редакция v2/Neuro-Voronka_LitRes_v2.docx'
OUT_MD, OUT_IMG = ROOT / 'content/book', ROOT / 'public/book/img'
COVER = SRC / '04 Иллюстрации/neuro-cover-litres-v2-вариант2.jpg'  # обложка v2 (вариант 2: нейробиология, психология и AI сходятся в воронку)
W = 1200  # ширина рисунка на сайте: шире колонки текста на телефоне и компьютере с запасом на ретину

# Адреса глав не меняем (поиск и ссылки): номер подглавы → старый адрес. Новое только начало: знакомство и пролог в v2 — одна глава.
SLUGS = {
    '00': '00-nachalo', '99': '00-c-epilog',
    '1-1': '1-1-kognitivnye-lovushki', '1-2': '1-2-nejrokopiraiting', '1-3': '1-3-lid-magnit', '1-4': '1-4-vizualnye-stimuly',
    '2-1': '2-1-produktovaya-matrica', '2-2': '2-2-anatomiya-voronki', '2-3': '2-3-arhitektura-voronki', '2-4': '2-4-finalnaya-sborka',
    '3-1': '3-1-fiziologiya-uderzhaniya', '3-2': '3-2-chetyre-elementa-doveriya', '3-3': '3-3-cepochki-kasanij', '3-4': '3-4-usilenie-ohvatov', '3-5': '3-5-ai-kopiraiter',
    '4-1': '4-1-anatomiya-kreativa', '4-2': '4-2-shest-stimulov', '4-3': '4-3-virusnaya-mehanika', '4-4': '4-4-organicheskij-trafik', '4-5': '4-5-poisk-segmentaciya', '4-6': '4-6-analitika-trafika', '4-7': '4-7-ai-kreativy',
    '5-1': '5-1-algoritm-vs-chelovek', '5-2': '5-2-stek-avtomatizacii', '5-3': '5-3-vebinarnyj-dvigatel', '5-4': '5-4-audit-voronki', '5-5': '5-5-ai-v-prodazhah',
    '6-1': '6-1-cifrovye-sotrudniki', '6-2': '6-2-razrabotka-bez-programmistov',
}
FIG = re.compile(r'^\[КАРТИНКА: (.+?)\]\s*$', re.M)

def stop(msg):
    sys.exit(f'✗ книга: {msg}')

def captions():
    x = zipfile.ZipFile(DOCX).read('word/document.xml').decode()
    paras = [re.sub(r'<[^>]+>', '', p) for p in re.findall(r'<w:p[ >].*?</w:p>', x, re.S)]
    return [p.strip() for p in paras if re.match(r'Рисунок \d+\.', p)]

def key(f):  # «1-1-lovushki.md» → «1-1», «00-nachalo.md» → «00»
    m = re.match(r'(\d-\d|00|99)-', f.name)
    return m.group(1) if m else None

files = sorted((f for f in TEXT.glob('*.md') if key(f)), key=lambda f: (key(f) == '99', key(f)))
if {key(f) for f in files} != set(SLUGS): stop(f'главы не совпали с адресами: {sorted({key(f) for f in files} ^ set(SLUGS))}')
pics = {}
for p in PICS.glob('*.jpg'):
    m = re.match(r'(\d-\d|00|99)-(\d+) (.+)\.jpg$', p.name)
    if not m: stop(f'непонятное имя рисунка: {p.name}')
    pics[(m.group(1), int(m.group(2)))] = (p, m.group(3))
caps = captions()

OUT_MD.mkdir(parents=True, exist_ok=True); OUT_IMG.mkdir(parents=True, exist_ok=True)
book, n, used, notes = {'chapters': [], 'figures': {}}, 0, set(), []
for f in files:
    k, slug = key(f), SLUGS[key(f)]
    raw = f.read_text(encoding='utf-8')
    body = re.sub(r'\A---\n.*?\n---\n', '', raw, flags=re.S).strip()
    part = re.search(r'^# (Глава (\d)\. .+)$', body, re.M)
    sub = re.search(r'^## (\d\.\d)\. (.+)$', body, re.M)
    if k == '00': num, title = '', 'Знакомство с книгой и пролог'
    elif k == '99': num, title = '', re.search(r'^# (.+)$', body, re.M).group(1)
    elif sub: num, title = sub.group(1), sub.group(2)
    else: stop(f'{f.name}: нет заголовка «## N.N. …»')
    figs = FIG.findall(body)
    for i, alt in enumerate(figs, 1):
        n += 1
        p, name = pics.get((k, i), (None, None))
        if not p: stop(f'{f.name}: нет файла рисунка {k}-{i} «{alt}»')
        cap = caps[n - 1] if n <= len(caps) else ''  # порядок рисунка в подглаве → файл, общий номер → подпись; файл и подпись должны совпасть
        if not cap.startswith(f'Рисунок {n}. '): stop(f'нет подписи «Рисунок {n}. …» для {k}-{i} «{name}»')
        if not cap.lower().startswith(f'рисунок {n}. {name.lower()}'): notes.append(f'{k}-{i} «{name}» ↔ «{cap[:60]}»')
        out = OUT_IMG / f'{slug}-{i}.webp'
        if not out.exists() or out.stat().st_mtime < p.stat().st_mtime:
            im = Image.open(p).convert('RGB')
            im.resize((W, round(im.height * W / im.width)), Image.LANCZOS).save(out, 'WEBP', quality=82, method=6)
        w, h = Image.open(out).size
        book['figures'][str(n)] = {'src': f'/book/img/{out.name}', 'alt': cap.split('. ', 1)[1], 'caption': cap, 'w': w, 'h': h}
        used.add((k, i))
    start = n - len(figs)
    body = FIG.sub(lambda m, c=iter(range(start + 1, n + 1)): f'[[fig:{next(c)}]]', body)
    (OUT_MD / f'{slug}.md').write_text(f'---\nnum: "{num}"\ntitle: "{title}"\n---\n{body}\n', encoding='utf-8')
    book['chapters'].append({'slug': slug, 'num': num, 'title': title, 'part': int(part.group(2)) if part else (int(k[0]) if k[0] in '123456' else 0), 'partTitle': part.group(1) if part else ''})

if n != len(caps): stop(f'рисунков в тексте {n}, подписей в DOCX {len(caps)}')
if set(pics) - used: stop(f'лишние рисунки без места в тексте: {sorted(set(pics) - used)}')
for old in OUT_MD.glob('*'):  # старые главы и чужие файлы в папке книги не оставляем
    if old.suffix == '.mdx' or (old.suffix == '.md' and old.stem not in SLUGS.values()): old.unlink()
for old in OUT_IMG.glob('*.webp'):
    if old.name not in {Path(x['src']).name for x in book['figures'].values()}: old.unlink()
cover = Image.open(COVER).convert('RGB'); cover.thumbnail((1000, 1500), Image.LANCZOS); cover.save(ROOT / 'public/images/site/book-cover.jpg', 'JPEG', quality=86, optimize=True)
(OUT_MD / 'book.json').write_text(json.dumps(book, ensure_ascii=False, indent=1), encoding='utf-8')
kb = sum(p.stat().st_size for p in OUT_IMG.glob('*.webp')) // 1024
print(*(['проверьте глазами, имя файла и подпись разные:'] + notes if notes else []), sep='\n  ')
print(f'✓ книга: глав {len(files)}, рисунков {n}/{len(caps)}, вес рисунков {kb} КБ')
