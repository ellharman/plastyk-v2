#!/usr/bin/env bash
#
# convert_for_web.sh
#
# Step 1: Convert all .mov files in the current folder to .mp4
# Step 2: Re-encode all .mp4 files in the current folder to a
#         web-friendly format (H.264 + AAC, capped resolution/bitrate)
#
# Usage:
#   chmod +x convert_for_web.sh
#   ./convert_for_web.sh
#
# Requires: ffmpeg (and ffprobe, which ships with it)

set -euo pipefail

# ---- Config -----------------------------------------------------------
MAX_WIDTH=1920          # scale down if wider than this (keeps aspect ratio)
CRF=23                  # quality: lower = better/larger, 18-28 is typical, 23 is a good web default
PRESET="slow"           # slower = better compression for same quality; use "medium" if you want speed
AUDIO_BITRATE="128k"
OUT_SUFFIX="_web"       # suffix appended to web-optimized output files
# -------------------------------------------------------------------

shopt -s nullglob nocaseglob

# --- Step 1: MOV -> MP4 --------------------------------------------
echo "== Step 1: Converting .mov files to .mp4 =="
for f in *.mov; do
  base="${f%.*}"
  out="${base}.mp4"

  if [[ -e "$out" ]]; then
    echo "Skipping '$f' -> '$out' already exists"
    continue
  fi

  echo "Converting '$f' -> '$out'"
  ffmpeg -i "$f" -c:v libx264 -crf "$CRF" -preset "$PRESET" \
    -c:a aac -b:a "$AUDIO_BITRATE" \
    -movflags +faststart \
    "$out"
done

# --- Step 2: MP4 -> web-optimized MP4 -------------------------------
echo "== Step 2: Re-encoding .mp4 files for web use =="
for f in *.mp4; do
  # Skip files we've already optimized (avoid double-processing our own output)
  if [[ "$f" == *"${OUT_SUFFIX}.mp4" ]]; then
    continue
  fi

  base="${f%.*}"
  out="${base}${OUT_SUFFIX}.mp4"

  if [[ -e "$out" ]]; then
    echo "Skipping '$f' -> '$out' already exists"
    continue
  fi

  echo "Optimizing '$f' -> '$out'"
  ffmpeg -i "$f" \
    -vf "scale='min(${MAX_WIDTH},iw)':-2" \
    -c:v libx264 -crf "$CRF" -preset "$PRESET" \
    -c:a aac -b:a "$AUDIO_BITRATE" \
    -movflags +faststart \
    "$out"
done

echo "Done. Web-optimized files have the '${OUT_SUFFIX}' suffix."
