# Проверка текстов по «Формуле упаковки сайта» v2 (16.10): тире, «не X, а Y», длина абзацев, паразиты, канцелярит, жаргон, вопросы и «я/мы» в заголовках, повторы заголовков. Запуск: npm run build, затем python3 scripts/check/text-audit.py out
import re,glob,sys,html
from collections import Counter,defaultdict
root=sys.argv[1]
pages=['index.html','kak-my-rabotaem.html','keisy.html','primer-chertezha.html','primer-razbora.html','blog.html','book.html','404.html']+sorted(glob.glob(root+'/blog/*.html'))
pages=[p.replace(root+'/','') for p in pages]
CR=['просто','очень','действительно','реально','буквально','на самом деле','как бы','собственно','вообще']
KA=['осуществля','являет','данн[ыо][йме]','в рамках','в целях','посредством','производится','функционал','обеспечива','реализаци','в случае ']
JA=['лид[аыов ]','конверси','cjm','roi','кастдев','юнит-эконом','онбординг','ретеншн','churn','ltv','cac']
heads=defaultdict(list); rep=[]
for f in pages:
    try: s=open(f'{root}/{f}',encoding='utf-8').read()
    except: continue
    if 'http-equiv="refresh"' in s: continue
    s=re.sub(r'<script.*?</script>|<style.*?</style>|<svg.*?</svg>','',s,flags=re.S)
    m=re.search(r'<main.*?</main>',s,re.S); body=m.group(0) if m else s
    txt=lambda x: html.unescape(re.sub(r'<[^>]+>',' ',x)).replace('\xa0',' ')
    t=re.sub(r'\s+',' ',txt(body))
    issues=[]
    d=len(re.findall(r' [—–] ',t)); 
    if d: issues.append(f'тире {d}: '+'; '.join(x[:60] for x in re.findall(r'[^.]{0,30} [—–] [^.]{0,25}',t)[:3]))
    na=len(re.findall(r'\bне [^.,;:!?]{1,40}, а ',t))
    if na>(2 if 'blog/' in f else 4): issues.append(f'«не X, а Y» {na}')
    for p in re.findall(r'<(p|li)[^>]*>(.*?)</\1>',body,re.S):
        w=len(txt(p[1]).split())
        if w>(45 if 'blog/' in f else 32): issues.append(f'абзац {w} сл.: {txt(p[1]).strip()[:60]}')
    tl=t.lower()
    c={w:len(re.findall(r'\b'+w+r'\b',tl)) for w in CR}; c={k:v for k,v in c.items() if v>(2 if 'blog/' in f else 1)}
    if c: issues.append(f'слова-паразиты {c}')
    k={w:len(re.findall(w,tl)) for w in KA}; k={a:b for a,b in k.items() if b}
    if k: issues.append(f'канцелярит {k}')
    j={w:len(re.findall(r'\b'+w,tl)) for w in JA}; j={a:b for a,b in j.items() if b}
    if j and 'blog/' not in f: issues.append(f'жаргон {j}')
    hs=[re.sub(r'\s+',' ',txt(h)).strip() for h in re.findall(r'<h[23][^>]*>(.*?)</h[23]>',body,re.S)]
    q=[h for h in hs if h.endswith('?')]
    if len(q)>1 or (q and hs and q[0]!=hs[-1] and 'blog/' not in f): issues.append(f'вопросы в заголовках {q}')
    for h in hs: heads[h.lower()].append(f)
    sh=[h for h in hs if re.match(r'^(я|мы|мой|моя|мои|наш)\b',h.lower())]
    if sh: issues.append(f'заголовки с «я/мы» {sh}')
    kr=t.count('Крылов'); 
    if kr>3: issues.append(f'Крылов {kr}')
    rep.append((f,issues))
for f,i in rep:
    print(('✓ ' if not i else '• ')+f); [print('   ',x) for x in i]
dup={h:v for h,v in heads.items() if len(v)>1 and len(h)>3}
print('\nповторы заголовков:',dup or 'нет')
