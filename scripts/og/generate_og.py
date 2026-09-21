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

Использование:
    python3 scripts/og/generate_og.py \
        --out public/images/og/raspakovka.png \
        --badge "Илья Новицкий · NCAi" \
        --headline "Операционка уходит с вас за 19 900 ₽" \
        --subtitle "Разворачиваю под ваш бизнес AI-команду: задачи ставите в чате, результат проверяется до закрытия, расход под контролем." \
        --stat "19 900 ₽"

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


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--out", required=True, help="путь к выходному PNG")
    ap.add_argument("--badge", required=True, help="строка-эйбрау над заголовком")
    ap.add_argument("--headline", required=True, help="заголовок (H1/og:title)")
    ap.add_argument("--subtitle", required=True, help="подзаголовок (og:description)")
    ap.add_argument("--stat", default="", help="цифра справа внизу (например, цена); можно пусто")
    ap.add_argument("--url", default="ilya-novitsky.ru")
    args = ap.parse_args()

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
    d.text((margin + 42, badge_y), args.badge.upper(), font=f_badge, fill=A)

    max_w = W - margin * 2 - 40
    lines = wrap(d, args.headline, f_headline, max_w)
    hy = 205
    for line in lines:
        d.text((margin, hy), line, font=f_headline, fill=T)
        hy += 62

    sub_y = hy + 18
    for line in wrap(d, args.subtitle, f_sub, W - margin * 2)[:2]:
        d.text((margin, sub_y), line, font=f_sub, fill=T3)
        sub_y += 30

    div_y = 532
    d.line([(margin, div_y), (W - margin, div_y)], fill=BR, width=1)

    foot_y = 564
    d.text((margin, foot_y), args.url, font=f_footer, fill=T3)
    if args.stat:
        stat_w = d.textlength(args.stat, font=f_stat)
        d.text((W - margin - stat_w, foot_y - 1), args.stat, font=f_stat, fill=A)

    out = pathlib.Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out)
    print(f"saved {out}")


if __name__ == "__main__":
    main()
