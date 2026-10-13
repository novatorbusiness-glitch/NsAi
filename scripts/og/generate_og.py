# Превью для соцсетей и мессенджеров (Blueprint S7): /og/<имя>.jpg 1200×630 для каждой страницы и статьи.
# Читает готовую сборку out/: имя картинки берётся из og:image страницы, заголовок — из og:title.
# Запуск после правки заголовков: npm run build && npm run og && npm run build
# Готовые картинки не перерисовываются (public/og/manifest.json: имя → заголовок). Проверка — scripts/check-seo.mjs.
import json, re, glob, html, os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT, DST = f'{ROOT}/out', f'{ROOT}/public/og'
NM = f'{ROOT}/node_modules'
W, H = 1200, 630
INK, INK2, ACC = '#15181a', '#4b5257', '#0F6E56'
SECTION = {'home': 'Илья Новицкий', 'keisy': 'Кейсы', 'kak-my-rabotaem': 'Как мы работаем', 'nastavnichestvo': 'Наставничество',
           'blog': 'Блог', 'book': 'Книга', 'offer': 'Документы', 'privacy': 'Документы', 'consent': 'Документы'}

def font(name, size, weight=None):
    f = ImageFont.truetype(f'{NM}/{name}', size)
    if weight: f.set_variation_by_axes([weight])
    return f

def manrope(size, weight):
    return (font('@fontsource-variable/manrope/files/manrope-cyrillic-wght-normal.woff2', size, weight),
            font('@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', size, weight))

def mono(size):
    return (font('@fontsource/jetbrains-mono/files/jetbrains-mono-cyrillic-600-normal.woff2', size),
            font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2', size))

def pick(fonts, ch):
    return fonts[0] if 'Ѐ' <= ch <= 'ӿ' else fonts[1]

def width(s, fonts):
    return sum(pick(fonts, ch).getlength(ch) for ch in s)

def draw(d, x, y, s, fonts, fill):
    for ch in s:
        f = pick(fonts, ch); d.text((x, y), ch, font=f, fill=fill); x += f.getlength(ch)

def wrap(s, fonts, maxw):
    lines, cur = [], ''
    for w in s.split(' '):
        t = (cur + ' ' + w).strip()
        if width(t, fonts) <= maxw: cur = t
        else: lines.append(cur); cur = w
    return lines + [cur]

PHOTO = Image.open(f'{ROOT}/public/images/site/ilya-main.jpg').convert('RGB')

def render(name, title):
    im = Image.new('RGB', (W, H), '#ffffff'); d = ImageDraw.Draw(im)
    pw = 380; k = max(pw / PHOTO.width, H / PHOTO.height)
    ph = PHOTO.resize((round(PHOTO.width * k), round(PHOTO.height * k)), Image.LANCZOS)
    left = (ph.width - pw) // 2; top = max(0, (ph.height - H) // 4)
    im.paste(ph.crop((left, top, left + pw, top + H)), (W - pw, 0))
    x, maxw = 72, W - pw - 72 - 48
    kick = SECTION.get(name, 'Блог' if name.startswith('blog-') else 'Илья Новицкий').upper()
    d.rectangle((x, 84, x + 48, 90), fill=ACC)
    draw(d, x, 112, kick, mono(22), ACC)
    for size in (64, 58, 52, 46, 40):
        f = manrope(size, 800); lines = wrap(title, f, maxw)
        if len(lines) <= 4: break
    y = 164
    for ln in lines:
        draw(d, x, y, ln, f, INK); y += int(size * 1.18)
    draw(d, x, H - 112, 'Илья Новицкий', manrope(26, 700), INK)
    draw(d, x, H - 76, 'ilya-novitsky.ru', mono(20), INK2)
    im.save(f'{DST}/{name}.jpg', 'JPEG', quality=86, optimize=True)

os.makedirs(DST, exist_ok=True)
man_path = f'{DST}/manifest.json'
man = json.load(open(man_path, encoding='utf-8')) if os.path.exists(man_path) else {}
seen, made = set(), 0
for f in sorted(glob.glob(f'{OUT}/**/*.html', recursive=True)):
    t = open(f, encoding='utf-8').read()
    img = re.search(r'property="og:image" content="[^"]*/og/([a-z0-9-]+)\.jpg"', t)
    ttl = re.search(r'property="og:title" content="([^"]*)"', t)
    if not img or not ttl: continue
    name, title = img.group(1), html.unescape(ttl.group(1))
    if name in seen: continue
    seen.add(name)
    if man.get(name) == title and os.path.exists(f'{DST}/{name}.jpg'): continue
    render(name, title); man[name] = title; made += 1
for name in list(man):
    if name not in seen:
        man.pop(name); p = f'{DST}/{name}.jpg'
        if os.path.exists(p): os.remove(p)
json.dump(dict(sorted(man.items())), open(man_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(f'превью: {len(seen)}, нарисовано заново: {made}')
