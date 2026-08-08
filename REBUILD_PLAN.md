# Clean asset rebuild

Stable asset layout for the public version:

- `assets/tarot/` — Major Arcana 0–21, one fixed image per card
- `assets/rigs/` — rig / hook-set images
- `assets/tips/` — rod-tip images
- `assets/sinkers/` — sinker images
- `assets/places/` — lake / venue images
- `assets/ui/` — logo, backgrounds, ornaments

Rules:

1. Never crop a source image into multiple card assets.
2. Gallery and fortune result must reference the same tarot file.
3. Tarot filenames are fixed: `00-fool.webp` … `21-world.webp`.
4. No base64 fallback files or one-off inline image overrides.
5. Replace an image only by replacing the file at its fixed path.