import re
import collections
from pathlib import Path

p = Path(r"C:\Users\Dell\.cursor\projects\c-Users-Dell-Documents-personal-portfolio\agent-tools\6f72463f-e108-421a-ba82-1f6e10e9a579.txt")
text = p.read_text(encoding="utf-8")
out = Path(r"C:\Users\Dell\Documents\personal-portfolio\.tmp-figma-audit.txt")

lines = []

inst = re.findall(r'<instance id="([^"]+)" name="([^"]+)"', text)
c = collections.Counter(n for _, n in inst)
lines.append("=== UNIQUE INSTANCES (count) ===")
for n, k in c.most_common():
    lines.append(f"{k:4d}  {n}")

lines.append("\n=== SYMBOLS ===")
for m in re.finditer(r'<symbol id="([^"]+)" name="([^"]+)"', text):
    lines.append(f"{m.group(1)}  {m.group(2)}")

lines.append("\n=== TOP-LEVEL FRAMES ===")
for m in re.finditer(
    r'^  <frame id="([^"]+)" name="([^"]+)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"',
    text,
    re.M,
):
    lines.append(f"{m.group(1)}\t{m.group(2)}\tx={m.group(3)} y={m.group(4)} {m.group(5)}x{m.group(6)}")

lines.append("\n=== TOP-LEVEL TEXTS ===")
for m in re.finditer(r'^  <text id="([^"]+)" name="([^"]+)"', text, re.M):
    lines.append(f"{m.group(1)}  {m.group(2)}")

# icon-like frame names
iconish = collections.Counter()
for m in re.finditer(r'<(?:frame|instance|symbol) id="[^"]+" name="([^"]+)"', text):
    n = m.group(1)
    nl = n.lower()
    if any(
        k in nl
        for k in (
            "icon",
            "arrow",
            "vuesax",
            "wifi",
            "battery",
            "signal",
            "check",
            "shield",
            "star",
            "alert",
            "radio",
            "switch",
            "checkbox",
            "chevron",
            "eye",
            "lock",
            "home",
            "search",
            "bell",
            "camera",
            "upload",
            "file",
            "doc",
        )
    ):
        iconish[n] += 1
lines.append("\n=== ICON-LIKE NAMES ===")
for n, k in iconish.most_common():
    lines.append(f"{k:4d}  {n}")

# unique nested frame names that look like UI patterns
pat = collections.Counter()
for m in re.finditer(r'<frame id="[^"]+" name="([^"]+)"', text):
    n = m.group(1)
    if n.startswith("Group ") or n.startswith("Rectangle") or n.startswith("Frame"):
        continue
    pat[n] += 1
lines.append("\n=== REPEATED FRAME PATTERNS (>=5) ===")
for n, k in pat.most_common():
    if k >= 5:
        lines.append(f"{k:4d}  {n}")

# CTA-ish text
lines.append("\n=== TEXT LAYER NAMES (unique, sample) ===")
texts = collections.Counter(re.findall(r'<text id="[^"]+" name="([^"]+)"', text))
for n, k in texts.most_common(250):
    lines.append(f"{k:4d}  {n}")

# Building Blocks
lines.append("\n=== BUILDING BLOCKS / PATH-LIKE INSTANCE NAMES ===")
for n, k in c.most_common():
    if "/" in n or n.startswith("Building"):
        lines.append(f"{k:4d}  {n}")

# sizes of Button instances
lines.append("\n=== BUTTON INSTANCE SIZES ===")
btn_sizes = collections.Counter()
for m in re.finditer(
    r'<instance id="[^"]+" name="Button" x="[^"]+" y="[^"]+" width="([^"]+)" height="([^"]+)"',
    text,
):
    btn_sizes[(m.group(1), m.group(2))] += 1
for (w, h), k in btn_sizes.most_common():
    lines.append(f"{k:4d}  {w}x{h}")

# FooterCTA
lines.append("\n=== FOOTER / HEADER FRAME NAMES ===")
for n, k in pat.most_common():
    nl = n.lower()
    if any(x in nl for x in ("footer", "header", "statusbar", "status-bar", "cta", "nav", "tab", "sheet", "modal")):
        lines.append(f"{k:4d}  {n}")

out.write_text("\n".join(lines), encoding="utf-8")
print("wrote", out, "chars", out.stat().st_size)
