# Собирает файлы знака: SVG для сайта и иконку вкладки. PNG рисует render.mjs (headless Chrome).
import os
from mark import word, icon_n
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
P = f"{ROOT}/public"
os.makedirs(f"{P}/brand", exist_ok=True)
open(f"{P}/brand/ncai.svg", "w").write(word())
open(f"{P}/brand/ncai-white.svg", "w").write(word(ink="#ffffff", leaf="#7fd3b6"))
open(f"{P}/icon.svg", "w").write(icon_n(bg="#0F6E56", leaf="#bfe6d8"))
# значок «N с лепестком» без фона — для шапки и превью
def bare(ink, leaf):
    s = icon_n(bg="none", fg=ink, leaf=leaf).replace('<rect width="512" height="512" rx="112" fill="none"/>', "")
    return s.replace('viewBox="0 0 512 512"', 'viewBox="100 50 350 375"')
open(f"{P}/brand/n.svg", "w").write(bare("#15181a", "#0F6E56"))
open(f"{P}/brand/n-white.svg", "w").write(bare("#ffffff", "#7fd3b6"))
print("ok: public/brand/ncai.svg, ncai-white.svg, n.svg, n-white.svg, public/icon.svg")
