import re
import collections
from pathlib import Path

p = Path(r"C:\Users\Dell\.cursor\projects\c-Users-Dell-Documents-personal-portfolio\agent-tools\73c82f2a-2e5a-44f8-9723-3615fca207c9.txt")
text = p.read_text(encoding="utf-8")
if "IMPORTANT: After you call" in text:
    text = text.split("IMPORTANT: After you call")[0]

top = re.findall(
    r'^  <(frame|symbol|rounded-rectangle|vector) id="([^"]+)" name="([^"]+)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"',
    text,
    re.M,
)
instances = re.findall(r'<instance id="([^"]+)" name="([^"]+)"', text)
symbols = re.findall(r'<symbol id="([^"]+)" name="([^"]+)"', text)
frames = re.findall(
    r'<frame id="([^"]+)" name="([^"]+)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"',
    text,
)
icon_pat = re.compile(
    r"(icon|arrow|chevron|check|eye|wifi|battery|signal|lock|shield|star|bell|search|trash|upload|file|home|user|edit|building|fingerprint|cloud|info|alert|clock|car|mail|phone|calendar|plus|minus|close|radio|checkbox|vuesax)",
    re.I,
)
icon_names = collections.Counter()
for tag, iid, name in re.findall(
    r'<(frame|vector|symbol|instance) id="([^"]+)" name="([^"]+)"', text
):
    if icon_pat.search(name) or name.lower() in ("check", "edit", "home", "user", "info", "star", "bell"):
        icon_names[name] += 1

ic = collections.Counter(n for _, n in instances)
fc = collections.Counter(n for _, n, *_ in frames)

screens = []
nonscreen = []
for kind, iid, name, x, y, w, h in top:
    try:
        wf, hf = float(w), float(h)
    except ValueError:
        continue
    if kind == "frame" and 360 <= wf <= 430 and hf >= 700:
        screens.append((iid, name, x, y, w, h))
    elif kind == "frame":
        nonscreen.append((iid, name, w, h))

out = Path(r"C:\Users\Dell\Documents\personal-portfolio\.tmp-figma-audit.txt")
lines = []
lines.append(f"INSTANCE_UNIQUE {len(ic)} TOTAL {sum(ic.values())}")
lines.append(f"SYMBOLS {len(symbols)}")
lines.append(f"SCREENS {len(screens)}")
lines.append("=== INSTANCES ===")
for n, c in ic.most_common():
    lines.append(f"{c:4d}  {n}")
lines.append("=== SYMBOLS ===")
for i, n in symbols:
    lines.append(f"{i}  {n}")
lines.append("=== SCREENS ===")
for row in screens:
    lines.append("\t".join(row))
lines.append("=== TOP NONSCREEN ===")
for iid, name, w, h in nonscreen:
    lines.append(f"{iid}\t{name}\t{w}x{h}")
lines.append("=== ICON NAMES ===")
for n, c in icon_names.most_common():
    lines.append(f"{c:4d}  {n}")
lines.append("=== REPEATED FRAMES >=8 ===")
for n, c in fc.most_common():
    if c >= 8:
        lines.append(f"{c:4d}  {n}")
out.write_text("\n".join(lines), encoding="utf-8")
print(out, "written", len(lines), "lines")
