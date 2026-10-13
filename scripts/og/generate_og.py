# Превью для соцсетей и мессенджеров (Blueprint S7): /og/<имя>.jpg 1200×630 для каждой страницы и статьи.
# Читает готовую сборку out/: имя картинки берётся из og:image страницы, заголовок — из og:title,
# подзаголовок — из content/og.json.
# Запуск после правки заголовков: npm run build && npm run og && npm run build
# Готовые картинки не перерисовываются (public/og/manifest.json: имя → заголовок и подзаголовок). Проверка — scripts/check/seo.mjs.
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
            font('@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', size, weight),
            font('@fontsource-variable/manrope/files/manrope-latin-ext-wght-normal.woff2', size, weight))

def mono(size):
    return (font('@fontsource/jetbrains-mono/files/jetbrains-mono-cyrillic-600-normal.woff2', size),
            font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2', size),
            font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-ext-600-normal.woff2', size))

def pick(fonts, ch):
    # кириллица · знаки валют (₽ есть только в latin-ext) · остальное
    if 0x0400 <= ord(ch) <= 0x04FF: return fonts[0]
    if 0x20A0 <= ord(ch) <= 0x20C0: return fonts[2]
    return fonts[1]

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

SUBS = json.load(open(f'{ROOT}/content/og.json', encoding='utf-8'))
MARK = {k: Image.open(f'{ROOT}/public/brand/{k}.png').convert('RGBA') for k in ('n', 'n-white')}  # знак «N с лепестком»
COVER = Image.open(f'{ROOT}/public/images/site/book-cover.jpg').convert('RGB')  # обложка — на превью глав
PHOTO = Image.open(f'{ROOT}/public/images/site/ilya-main.jpg').convert('RGB')

# Статьи — в цвете своей обложки из блога (порядок и темы — src/config/blog.ts, цвета — .c-* в base.css).
THEMES = {  # фон: два цвета градиента, текст, акцент
    'c-emerald': ('#0F6E56', '#0b5242', '#ffffff', '#bfe6d8'),
    'c-dark': ('#1b1f22', '#111416', '#e9ecea', '#7fd3b6'),
    'c-sand': ('#f6ece4', '#eadbcf', '#3a2a20', '#8a5a3c'),
    'c-lilac': ('#efeafb', '#e1d9f7', '#2a1f4a', '#5b46a8'),
    'c-mint': ('#e8f3ef', '#d5ebe2', '#123f33', '#0F6E56'),
}
_cfg = open(f'{ROOT}/src/config/blog.ts', encoding='utf-8').read()
POSTS = re.findall(r'slug: "([^"]+)", tag: "([^"]+)"', _cfg)
COVERS = re.findall(r'"(c-[a-z]+)"', _cfg[_cfg.index('covers'):])
ARTICLE = {s: (tag, COVERS[i % len(COVERS)]) for i, (s, tag) in enumerate(POSTS)}

def gradient(c1, c2):
    a, b = Image.new('RGB', (W, H), c1), Image.new('RGB', (W, H), c2)
    mask = Image.new('L', (2, 2)); mask.putdata([0, 110, 145, 255])  # плавно из левого верхнего угла в правый нижний
    return Image.composite(b, a, mask.resize((W, H), Image.BILINEAR))

def title_block(d, x, y, title, sub, maxw, color, subcolor, room, sizes=(68, 62, 56, 50, 44)):
    # заголовок + подзаголовок; подбираем размер, чтобы всё влезло в room пикселей по высоте
    for size in sizes:
        f = manrope(size, 800); lines = wrap(title, f, maxw)
        ss = max(28, int(size * 0.5)); sf = manrope(ss, 600); slines = wrap(sub, sf, maxw) if sub else []
        if len(slines) > 2:  # подзаголовок — не больше двух строк, дальше многоточие
            last = slines[1]
            while last and width(last + '…', sf) > maxw: last = last.rsplit(' ', 1)[0] if ' ' in last else last[:-1]
            slines = [slines[0], last.rstrip(',;:—- ') + '…']
        h = len(lines) * int(size * 1.16) + (22 + len(slines) * int(ss * 1.35) if slines else 0)
        if h <= room: break
    for ln in lines:
        draw(d, x, y, ln, f, color); y += int(size * 1.16)
    y += 22
    for ln in slines:
        draw(d, x, y, ln, sf, subcolor); y += int(ss * 1.35)

def chapter(t, title):
    # глава книги: «Гл. 1.3 · Лид-магнит» → отметка, заголовок без номера и « — Нейро-воронка», подзаголовок — первая фраза описания
    nav = re.search(r'class="nav-chap">([^<]*)<', t); part = nav.group(1).split(' · ')[0].strip() if nav else ''
    part = part if part.startswith(('Гл.', 'Пролог', 'Эпилог')) else ''
    title = re.sub(r'\s*—\s*Нейро-воронка$', '', title); title = re.sub(r'^(\d\.\d\s+|Пролог\.\s+|Эпилог\.\s+)', '', title)
    desc = html.unescape(re.search(r'name="description" content="([^"]*)"', t).group(1))
    sub = re.split(r'(?<=[.!?])\s', desc)[0].rstrip('…').replace('→', '—')  # стрелок нет в шрифтах сайта
    return title, sub, 'КНИГА «НЕЙРО-ВОРОНКА»' + (' · ' + part.upper() if part else '')

def render(name, title, sub_text=None, kicker=None):
    x = 72
    if name.startswith('blog-') and name[5:] in ARTICLE:
        tag, cover = ARTICLE[name[5:]]; c1, c2, ink, acc = THEMES[cover]
        im = gradient(c1, c2); d = ImageDraw.Draw(im)
        d.ellipse((W - 300, H - 300, W + 200, H + 200), outline=acc, width=3)  # круг, как на обложке в блоге
        kick, maxw, sub = f'БЛОГ · {tag.upper()}', W - 2 * x - 290, acc  # текст не заходит на круг
        subtle = ink
    else:
        im = Image.new('RGB', (W, H), '#ffffff'); d = ImageDraw.Draw(im); ink, sub = INK, INK2; acc = ACC; subtle = INK2
        if kicker:  # глава книги — с обложкой справа
            ch = 470; cw = round(COVER.width * ch / COVER.height); cv = COVER.resize((cw, ch), Image.LANCZOS)
            d.rectangle((W - 72 - cw + 8, 88, W - 72 + 8, 80 + ch + 8), fill='#e3e6e4')  # тень
            im.paste(cv, (W - 72 - cw, 80)); maxw = W - cw - 2 * x - 56
            d.rectangle((W - 16, 0, W, H), fill=ACC)
        elif name == 'home':  # главная — о человеке, поэтому с фото
            pw = 380; k = max(pw / PHOTO.width, H / PHOTO.height)
            ph = PHOTO.resize((round(PHOTO.width * k), round(PHOTO.height * k)), Image.LANCZOS)
            left = (ph.width - pw) // 2; top = max(0, (ph.height - H) // 4)
            im.paste(ph.crop((left, top, left + pw, top + H)), (W - pw, 0)); maxw = W - pw - x - 48
        else:
            maxw = W - 2 * x - 60
            d.rectangle((W - 16, 0, W, H), fill=ACC)  # зелёная кромка справа — фирменный цвет
        kick = kicker or SECTION.get(name, 'Илья Новицкий').upper()
    d.rectangle((x, 84, x + 48, 90), fill=acc)
    draw(d, x, 112, kick, mono(20 if len(kick) > 34 else 22), acc)
    title_block(d, x, 164, title, sub_text if sub_text is not None else SUBS.get(name, ''), maxw, ink, subtle, room=H - 164 - 140, sizes=(56, 52, 48, 44, 40) if name == 'home' else (66, 60, 54, 50, 44, 40))
    light = ink.lower() in ('#ffffff', '#e9ecea')  # на тёмном/зелёном фоне — белый знак
    mk = MARK['n-white' if light else 'n']; mh = 46; mk = mk.resize((round(mk.width * mh / mk.height), mh), Image.LANCZOS)
    im.paste(mk, (x, H - 118), mk); nx = x + mk.width + 14
    draw(d, nx, H - 112, 'Илья Новицкий', manrope(26, 700), ink)
    draw(d, nx, H - 76, 'ilya-novitsky.ru · маркетинг, продукт и автоматизация', mono(20), sub)
    im.save(f'{DST}/{name}.jpg', 'JPEG', quality=86, optimize=True)

os.makedirs(DST, exist_ok=True)
man_path = f'{DST}/manifest.json'
man = json.load(open(man_path, encoding='utf-8')) if os.path.exists(man_path) else {}
seen, made = set(), 0
for f in sorted(glob.glob(f'{OUT}/**/*.html', recursive=True)):
    t = open(f, encoding='utf-8').read()
    if f.endswith('/404.html') or 'http-equiv="refresh"' in t: continue  # 404 и переадресации: превью по умолчанию, своё не рисуем
    img = re.search(r'property="og:image" content="[^"]*/og/([a-z0-9-]+)\.jpg"', t)
    ttl = re.search(r'property="og:title" content="([^"]*)"', t)
    if not img or not ttl: continue
    name, title = img.group(1), html.unescape(ttl.group(1))
    if name in seen: continue
    seen.add(name)
    if name.startswith('book-'):  # главы книги
        ctitle, csub, kick = chapter(t, title)
        want = {'title': title, 'sub': csub, 'brand': 1}
        if man.get(name) == want and os.path.exists(f'{DST}/{name}.jpg'): continue
        render(name, ctitle, csub, kick); man[name] = want; made += 1; continue
    want = {'title': title, 'sub': SUBS.get(name, ''), 'brand': 1}
    if man.get(name) == want and os.path.exists(f'{DST}/{name}.jpg'): continue
    render(name, title); man[name] = want; made += 1
for name in list(man):
    if name not in seen:
        man.pop(name); p = f'{DST}/{name}.jpg'
        if os.path.exists(p): os.remove(p)
json.dump(dict(sorted(man.items())), open(man_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(f'превью: {len(seen)}, нарисовано заново: {made}')
