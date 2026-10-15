#!/usr/bin/env bash
# Convert a Markdown guide to PDF, shrinking the images to keep the file small.
# Usage: ./make-pdf.sh [file.md] [max_image_px]
# Requires: pandoc, ImageMagick (convert/magick), google-chrome or chromium
set -euo pipefail

SRC_DIR="$(cd "$(dirname "$0")" && pwd)"
MD="${1:-micro-greenhouse-DIY.md}"
MAX_PX="${2:-1000}"

[[ -f "$SRC_DIR/$MD" ]] || { echo "File not found: $SRC_DIR/$MD" >&2; exit 1; }
OUT="$SRC_DIR/${MD%.md}.pdf"

# Find the required tools
command -v pandoc >/dev/null || { echo "pandoc is not installed" >&2; exit 1; }
if command -v magick >/dev/null; then IM=magick
elif command -v convert >/dev/null; then IM=convert
else echo "ImageMagick is not installed" >&2; exit 1; fi
CHROME=""
for c in google-chrome chromium chromium-browser; do
  command -v "$c" >/dev/null && { CHROME="$c"; break; }
done
[[ -n "$CHROME" ]] || { echo "google-chrome/chromium not found" >&2; exit 1; }

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Copy the Markdown and resized copies of the images (the originals are not modified)
cp "$SRC_DIR/$MD" "$TMP/"
shopt -s nullglob nocaseglob
for img in "$SRC_DIR"/*.{jpg,jpeg,png}; do
  "$IM" "$img" -resize "${MAX_PX}x${MAX_PX}>" -quality 80 "$TMP/$(basename "$img")"
done
shopt -u nocaseglob

cat > "$TMP/style.css" <<'EOF'
body{font-family:sans-serif;max-width:800px;margin:auto;line-height:1.5;font-size:11pt}
#title-block-header{display:none}
img{max-width:100%;max-height:420px;display:block;margin:1em auto}
figure{margin:0}
figcaption{text-align:center;font-style:italic;color:#555}
table{border-collapse:collapse;width:100%}
th,td{border:1px solid #ccc;padding:4px 8px}
h2{border-bottom:1px solid #ddd}
h1,h2,h3{break-after:avoid}
figure,table,img{break-inside:avoid}
blockquote{background:#f4f7f0;border-left:4px solid #6a9a3a;margin:1em 0;padding:.5em 1em}
EOF

# Markdown -> self-contained HTML -> PDF
(cd "$TMP" && pandoc "$MD" -s --embed-resources --css style.css -o guide.html)
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "$TMP/guide.html" 2>/dev/null

echo "PDF created: $OUT ($(du -h "$OUT" | cut -f1))"
