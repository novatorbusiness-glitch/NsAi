# Главы книги «Нейро-воронка»: content/book/*.mdx → public/book/<slug>.html (светлый стиль сайта).
# Тексты глав не меняются (решение Ильи 09.10). Схемы: scripts/book/viz.json (render_viz.mjs).
# Запуск после правки глав: node --experimental-strip-types scripts/book/render_viz.mjs && python3 scripts/book/build_book.py
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'content' / 'book'
OUT = ROOT / 'public' / 'book'
VIZ = json.loads((Path(__file__).parent / 'viz.json').read_text(encoding='utf-8'))
FONTS = '/fonts/fonts.css'
OVERRIDE = ('<style>body{cursor:auto!important}#cd,#cr{display:none!important}'
            'a,button,summary{cursor:pointer!important}</style>')

def fix(html, slug):
    html = re.sub(r'<link href="https://fonts\.googleapis\.com/css2\?[^"]*" rel="stylesheet">', f'<link href="{FONTS}" rel="stylesheet">', html)
    html = html.replace("'Unbounded',sans-serif", "'Manrope',sans-serif").replace("'PT Serif',serif", "'Manrope',sans-serif")
    html = re.sub(r'\s*·\s*NcAi</title>', '</title>', html)
    if 'name="description"' not in html:
        hs = re.search(r'class="hero-sub[^"]*"[^>]*>(.*?)</p>', html, re.S)
        d = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', hs.group(1))).strip() if hs else 'Глава книги «Нейро-воронка» Ильи Новицкого о системах продаж на стыке нейробиологии, психологии и AI.'
        if len(d) > 158: d = d[:155].rsplit(' ', 1)[0].rstrip(',;:—-') + '…'
        d = d.replace('"', '&quot;')
        html = html.replace('</title>', '</title>\n<meta name="description" content="' + d + '">', 1)
    html = html.replace('<a href="/" class="logo">NcAi</a>', '<a href="../index.html" class="logo">Илья Новицкий</a>')
    html = re.sub(r'>\s*NcAi\s*<', '>Илья Новицкий<', html)
    html = re.sub(r'href="/book/read#([0-9a-z-]+)"', r'href="\1.html"', html)
    html = re.sub(r'href="/book/([0-9a-z-]+)"', r'href="\1.html"', html)
    html = html.replace('href="/book"', 'href="../book.html"').replace('href="/"', 'href="../index.html"')
    def viz(m):
        svg = VIZ[m.group(1)]
        return svg.replace("'Unbounded',sans-serif", "'Manrope',sans-serif").replace("'PT Serif',serif", "'Manrope',sans-serif")
    html = re.sub(r'<img\b[^>]*src=["\']/viz/([a-z]+)\.svg["\'][^>]*/?>', viz, html)
    html = html.replace('</head>', '<style>' + VIZ['__css'] + '</style>' + OVERRIDE + '\n</head>', 1)
    return html

def links(html):
    html = re.sub(r'<link rel="preconnect" href="https://fonts\.(googleapis|gstatic)\.com"[^>]*>\s*', '', html)
    html = re.sub(r'href="([0-9a-z-]+)\.html"', r'href="/book/\1"', html)
    html = html.replace('href="../index.html"', 'href="/"').replace('href="../book.html"', 'href="/book"')
    return html

# Светлая тема в стиле сайта (Илья 09.10: «в нашем новом стиле», анимации убрать)
ACC = {'default': ('15,110,86', '#0F6E56', '#0b5a46'), 'prolog': ('201,138,0', '#B07800', '#8a5e00')}
def to_light(html, slug):
    rgb, acc, accd = ACC['prolog' if slug == '00-b-prolog' else 'default']
    root_old = re.search(r':root\{.*?\}', html, re.S).group(0)
    root_new = (':root{--bg:#ffffff;--bg2:#f6f7f6;--bgc:#ffffff;--bgc2:#f6f7f6;--br:#e3e6e4;--br2:#cfd4d1;'
                '--t:#15181a;--t2:#4b5257;--t3:#8a9196;--a:' + acc + ';--ad:rgba(' + rgb + ',.08);--red:#c62828;'
                '--metal:linear-gradient(135deg,#15181a 0%,#2c3236 50%,#15181a 100%);'
                "--fd:'Manrope',sans-serif;--fs:'Manrope',sans-serif;--fm:'JetBrains Mono',monospace;"
                '--ease:cubic-bezier(.16,1,.3,1);--max:760px}')
    html = html.replace(root_old, root_new, 1)
    # светлые плашки и чёрные секции старой читалки: фон, а не текст
    html = re.sub(r'background:\s*#f5f1e8', 'background:#f6f7f6', html, flags=re.I)
    html = re.sub(r'background:\s*#000(?![0-9a-fA-F])', 'background:#f6f7f6', html)
    html = re.sub(r'(?<![a-z-])color:\s*#1a1a1a', 'color:#15181a', html, flags=re.I)
    # призывы канала: в канале заметки и разборы, новых глав там нет (Илья 09.10)
    for a, b in [('Подписывайтесь на канал Ильи — там контент, разборы и новые главы', 'Мой канал в Telegram'),
                 ('Разборы, кейсы и новые главы книги — раньше, чем где-либо ещё.', 'Короткие заметки по ходу работы: что строю, что сработало, а что нет, и разборы из практики.'),
                 ('Разборы, новые главы и инструменты — в Telegram-канале Ильи.', 'Короткие заметки по ходу работы и разборы из практики.'),
                 ('Больше контента — в канале', 'Мой канал в Telegram')]:
        html = html.replace(a, b)
    pairs = [('#080808','#ffffff'),('#0a0a0a','#ffffff'),('#0d0d0d','#f6f7f6'),('#131313','#ffffff'),('#151515','#ffffff'),
             ('#181818','#f6f7f6'),('#1a1a1a','#f6f7f6'),('#1e1e1e','#e3e6e4'),('#232323','#e3e6e4'),('#2a2a2a','#cfd4d1'),
             ('#333333','#b9bfbb'),('#f0ede6','#15181a'),('#f5f1e8','#15181a'),('#cfcbc0','#2c3236'),('#a8a49b','#4b5257'),
             ('#7a7670','#6b7378'),('#4a463f','#8a9196'),('#ffd000',acc),('#c99700',accd),('#e84040','#c62828'),
             ('#e8e8e8','#15181a'),('#c8c8c8','#2c3236'),('#d4d4d4','#15181a')]
    for a, b in pairs:
        html = re.sub(re.escape(a) + r'(?![0-9a-fA-F])', b, html, flags=re.I)
    html = re.sub(r'#333(?![0-9a-fA-F])', '#b9bfbb', html)
    html = re.sub(r'#888(?![0-9a-fA-F])', '#4b5257', html)
    html = re.sub(r'rgba\(\s*255\s*,\s*208\s*,\s*0\s*,', 'rgba(' + rgb + ',', html)
    html = re.sub(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,', 'rgba(21,24,26,', html)
    html = re.sub(r'rgba\(\s*240\s*,\s*237\s*,\s*230\s*,', 'rgba(21,24,26,', html)
    html = re.sub(r'rgba\(\s*245\s*,\s*241\s*,\s*232\s*,', 'rgba(21,24,26,', html)
    html = re.sub(r'rgba\(\s*8\s*,\s*8\s*,\s*8\s*,\s*\.88\)', 'rgba(255,255,255,.92)', html)
    html = re.sub(r'rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*\.(?:62|35)\)', 'rgba(21,24,26,.08)', html)
    fix_css = ('<style>body::before{display:none!important}.rv{opacity:1!important;transform:none!important;transition:none!important}'
               'html{scroll-behavior:auto!important;overflow-x:clip}body{font-size:18px;line-height:1.7;background:#fff;color:#15181a;overflow-x:clip}'
               '@media(max-width:480px){.silence-vis{grid-template-columns:1fr!important}nav,.chapter-nav{max-width:100%;box-sizing:border-box}}'
               '.prose-p{font-size:18px!important;line-height:1.7!important;color:#2c3236!important}'
               '*,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important}'
               '.hero-h1,.hero-h1 *{background:none!important;-webkit-text-fill-color:#15181a!important;color:#15181a!important}'
               '.pivot-title,.cc-title{color:#15181a!important}.tg-cta{background:#e8f3ef!important}.tg-cta::before{display:none!important}'
               '.tg-cta-title{color:#15181a!important}.tg-cta-text{color:#4b5257!important}.tg-cta-btn{background:#0F6E56!important;color:#fff!important}'
               '.nz-viz{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;margin:0!important}</style>'
               '<script>try{history.scrollRestoration="manual"}catch(e){}addEventListener("load",function(){if(!location.hash)scrollTo(0,0);'
               'document.querySelectorAll("[data-fill]").forEach(function(b){b.style.width=b.dataset.fill+"%"});'
               'document.querySelectorAll(".ladder-fill").forEach(function(b){b.style.width=b.dataset.w+"%"});'
               'document.querySelectorAll(".rv").forEach(function(e){e.classList.add("on")})});</script>')
    return html.replace('</head>', fix_css + '\n</head>', 1)


OUT.mkdir(parents=True, exist_ok=True)
slugs = sorted(p.stem for p in SRC.glob('*.mdx') if not p.stem.endswith('.en'))
for s in slugs:
    html = (SRC / f'{s}.mdx').read_text(encoding='utf-8')
    (OUT / f'{s}.html').write_text(links(to_light(fix(html, s), s)), encoding='utf-8')
print('глав:', len(slugs))
