#!/usr/bin/env python3
"""
Автоматически пересобирает og-картинки для /blog и каждой статьи
/blog/[slug] прямо из src/lib/blog.ts — чтобы при добавлении новой
статьи никто не забыл сделать под неё превью (тот же класс бага,
что был 21.09.2026 с default.png/raspakovka.png, только для блога).

Запускается автоматически перед каждой сборкой (npm run build →
"prebuild" в package.json, и явным шагом в .github/workflows/deploy.yml
перед npm run build) — руками запускать не обязательно, но можно:
    python3 scripts/og/generate_blog_images.py

Источник текста — BLOG_POSTS в src/lib/blog.ts (slug/title/excerpt),
парсится регуляркой (без Node/ts-node — скрипт должен работать и в
CI, где ставится только Python). Если формат BLOG_POSTS в blog.ts
изменится настолько, что регулярка перестанет находить записи, скрипт
не упадёт молча — сверяет число найденных постов со счётчиком "slug:"
и громко ругается при расхождении.
"""
import pathlib
import re
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from generate_og import render  # noqa: E402

ROOT = pathlib.Path(__file__).parent.parent.parent
BLOG_TS = ROOT / "src/lib/blog.ts"
OG_DIR = ROOT / "public/images/og"

BADGE = "Блог · Илья Новицкий"


def load_posts():
    text = BLOG_TS.read_text(encoding="utf-8")
    m = re.search(r"BLOG_POSTS[^=]*=\s*\[(.*?)\n\];", text, re.S)
    if not m:
        print("ERROR: не нашёл массив BLOG_POSTS в src/lib/blog.ts — формат файла изменился?", file=sys.stderr)
        sys.exit(1)
    body = m.group(1)
    posts = re.findall(r'\{\s*slug:\s*"([^"]+)".*?title:\s*"([^"]+)".*?excerpt:\s*"([^"]+)"', body, re.S)
    slug_count = len(re.findall(r'\bslug:\s*"', body))
    if len(posts) != slug_count:
        print(
            f"ERROR: регулярка нашла {len(posts)} постов, а slug: встречается {slug_count} раз — "
            "формат BLOG_POSTS в blog.ts мог измениться, картинки могут быть не для всех статей. "
            "Проверь регулярку в generate_blog_images.py.",
            file=sys.stderr,
        )
        sys.exit(1)
    return [{"slug": s, "title": t, "excerpt": e} for s, t, e in posts]


def main():
    posts = load_posts()
    print(f"Найдено {len(posts)} статей в blog.ts")

    render(
        out=OG_DIR / "blog.png",
        badge="Илья Новицкий · NCAi",
        headline="Блог — нейромаркетинг, воронки и AI",
        subtitle="Практические статьи о том, как заставить воронку продаж работать: крючок, боль, оффер, AI.",
    )
    print("  blog.png (индекс) — ок")

    for p in posts:
        out = OG_DIR / f"blog-{p['slug']}.png"
        render(out=out, badge=BADGE, headline=p["title"], subtitle=p["excerpt"])
        print(f"  {out.name} — ок")

    # чистим картинки статей, которых больше нет в blog.ts (переименовали/удалили)
    live_slugs = {p["slug"] for p in posts}
    for f in OG_DIR.glob("blog-*.png"):
        slug = f.stem.removeprefix("blog-")
        if slug not in live_slugs:
            f.unlink()
            print(f"  {f.name} — удалён (статьи больше нет в blog.ts)")


if __name__ == "__main__":
    main()
