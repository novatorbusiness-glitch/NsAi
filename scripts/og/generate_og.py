#!/usr/bin/env python3
"""
Генератор OG-картинок (1200x630) в стиле сайта NCAi.

Раньше картинки в public/images/og/*.png делались вручную одноразовым
скриптом и не пересобирались при правке текста на странице — из-за этого
default.png и raspakovka.png разошлись с реальным содержанием страниц
(21.09.2026). Этот скрипт — единственный источник генерации: текст
передаётся явно (badge/headline/subtitle/stat), так же как он берётся
из export const metadata в src/app/<page>/page.tsx, чтобы у копии
на картинке и в metadata был один и тот же ввод.

CLI-использование (одна картинка):
    python3 scripts/og/generate_og.py \
        --out public/images/og/raspakovka.png \
        --badge "Илья Новицкий · NCAi" \
        --headline "Операционка уходит с вас" \
        --subtitle "Разворачиваю под ваш бизнес AI-команду..." \
        --stat "19 900 ₽"

Как модуль (для скриптов вроде generate_blog_images.py):
    from generate_og import render
    render(out="public/images/og/x.png", badge="...", headline="...", subtitle="...")

Шрифт (Unbounded, вариативный, вес 400-800, кириллица) скачивается один
раз с GitHub (google/fonts) и кешируется в scripts/og/.cache/ — при
повторных запусках сеть не нужна.
"""
import argparse
import pathlib
import subprocess
import sys
import urllib.request

HERE = pathlib.Path(__file__).parent
CACHE = HERE / ".cache"
FULL_FONT = CACHE / "unbounded-full.ttf"
FONT_URL = "https://github.com/google/fonts/raw/main/ofl/unbounded/Unbounded%5Bwght%5D.ttf"

W, H = 1200, 630
BG = (8, 8, 8)      # --bg
T = (237, 234, 227)  # --t
T3 = (139, 134, 126)  # --t3
A = (255, 208, 0)    # --a
BR = (30, 30, 30)    # --br


def ensure_deps():
    try:
        import fontTools  # noqa
        import PIL  # noqa
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "--quiet", "fonttools", "Pillow"])


def ensure_font(weight: int) -> pathlib.Path:
    instance = CACHE / f"unbounded-{weight}.ttf"
    if instance.exists():
        return instance
    CACHE.mkdir(parents=True, exist_ok=True)
    if not FULL_FONT.exists():
        urllib.request.urlretrieve(FONT_URL, FULL_FONT)
    subprocess.check_call([
        sys.executable, "-m", "fontTools.varLib.instancer",
        str(FULL_FONT), f"wght={weight}", "-o", str(instance),
    ])
    return instance


def wrap(draw, text, font, max_width):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def render(out, badge: str, headline: str, subtitle: str, stat: str = "", url: str = "ilya-novitsky.ru") -> pathlib.Path:
    """Рендерит одну og-картинку. Возвращает путь к сохранённому файлу."""
    ensure_deps()
    from PIL import Image, ImageDraw, ImageFont

    f_logo = ImageFont.truetype(str(ensure_font(700)), 30)
    f_badge = ImageFont.truetype(str(ensure_font(600)), 15)
    f_headline = ImageFont.truetype(str(ensure_font(800)), 52)
    f_sub = ImageFont.truetype(str(ensure_font(400)), 21)
    f_footer = ImageFont.truetype(str(ensure_font(400)), 18)
    f_stat = ImageFont.truetype(str(ensure_font(700)), 20)

    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    margin = 80

    d.text((margin, 56), "NCAi", font=f_logo, fill=T)

    badge_y = 128
    d.line([(margin, badge_y + 8), (margin + 28, badge_y + 8)], fill=A, width=2)
    d.text((margin + 42, badge_y), badge.upper(), font=f_badge, fill=A)

    def cap_lines(all_lines, font, max_w, max_lines):
        if len(all_lines) <= max_lines:
            return all_lines
        capped = all_lines[:max_lines]
        last = capped[-1]
        while d.textlength(last + "…", font=font) > max_w and len(last) > 1:
            last = last[:-1].rstrip()
        capped[-1] = last + "…"
        return capped

    max_w = W - margin * 2 - 40
    lines = cap_lines(wrap(d, headline, f_headline, max_w), f_headline, max_w, 3)
    hy = 205
    for line in lines:
        d.text((margin, hy), line, font=f_headline, fill=T)
        hy += 62

    sub_y = hy + 18
    sub_max_w = W - margin * 2
    sub_lines = cap_lines(wrap(d, subtitle, f_sub, sub_max_w), f_sub, sub_max_w, 3)
    for line in sub_lines:
        d.text((margin, sub_y), line, font=f_sub, fill=T3)
        sub_y += 30

    div_y = max(532, sub_y + 24)
    d.line([(margin, div_y), (W - margin, div_y)], fill=BR, width=1)

    foot_y = div_y + 32
    if foot_y + 24 > H - 10:
        print(f"WARNING: {out} — content may overflow canvas (foot_y={foot_y}, H={H}) — shorten headline/subtitle")
    d.text((margin, foot_y), url, font=f_footer, fill=T3)
    if stat:
        stat_w = d.textlength(stat, font=f_stat)
        d.text((W - margin - stat_w, foot_y - 1), stat, font=f_stat, fill=A)

    out_path = pathlib.Path(out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path)
    return out_path


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--out", required=True, help="путь к выходному PNG")
    ap.add_argument("--badge", required=True, help="строка-эйбрау над заголовком")
    ap.add_argument("--headline", required=True, help="заголовок (H1/og:title)")
    ap.add_argument("--subtitle", required=True, help="подзаголовок (og:description)")
    ap.add_argument("--stat", default="", help="цифра справа внизу (например, цена); можно пусто")
    ap.add_argument("--url", default="ilya-novitsky.ru")
    args = ap.parse_args()

    out_path = render(out=args.out, badge=args.badge, headline=args.headline, subtitle=args.subtitle, stat=args.stat, url=args.url)
    print(f"saved {out_path}")


if __name__ == "__main__":
    main()
