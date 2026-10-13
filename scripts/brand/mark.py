# Фирменный знак NCAi (решение Ильи 13.10): полное слово (word) и иконка «N с лепестком» (icon_n).
# Отсюда собираются public/brand/*.svg и public/icon.svg (build.py); PNG рисует render.mjs (headless Chrome).
INK, ACC = "#15181a", "#0F6E56"
N = "M40,280 V62 Q40,36 60,58 L170,258 Q190,284 190,258 V40"
C = "M478,92 A118,118 0 1 0 478,228"
A = "M534,280 L612,58 Q620,36 628,58 L676,214 Q696,282 736,282 Q778,282 778,236 V130"
BAR = "M562,206 H650"
LEAF = "M764,108 Q758,64 806,40 Q814,86 764,108 Z"
VB = "18 18 812 284"
def word(ink=INK, leaf=ACC, w=None):
    size = f' width="{w}"' if w else ""
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{VB}"{size} role="img" aria-label="NCAi">'
            f'<g fill="none" stroke="{ink}" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"><path d="{N}"/><path d="{C}"/><path d="{A}"/><path d="{BAR}" stroke-width="30"/></g>'
            f'<path d="{LEAF}" fill="{leaf}"/></svg>')

def icon_n(bg=INK, fg="#ffffff", leaf="#5fd38d"):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="112" fill="{bg}"/>'
            f'<g transform="translate(24,-190) scale(1.15)"><path d="M100,505 V330 Q100,290 128,318 L262,478 Q300,520 305,468 V320" stroke="{fg}" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
            f'<path d="M300,296 Q292,240 352,214 Q362,272 300,296 Z" fill="{leaf}"/></g></svg>')
