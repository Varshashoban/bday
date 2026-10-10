# Image Assets Guide

All replaceable images live in `public/images/`. The app uses local files and shows a themed emoji fallback (♡ or 🐶) if any image is missing — you'll never see broken-image icons.

## Quick Reference

| Screen | Filename | Purpose | Recommended Size | Required? |
|--------|----------|---------|-----------------|-----------|
| 1 — Welcome | `puppy-rose.png` | Golden puppy holding a red rose | Transparent PNG, 700×700 px+ | Yes |
| 2 — Rejection | `puppy-angry.png` | Fluffy white angry puppy | Transparent PNG, 700×700 px+ | Yes |
| 3 — Good girl | `puppy-happy.png` | Happy golden puppy with hearts | Transparent PNG, 700×700 px+ | Yes |
| 4 — Birthday | `puppy-birthday.png` | Puppy with party hat + cake | Transparent PNG, 700×700 px+ | Yes |
| 6 — Letter (decoration) | `letter-puppy.png` | Small puppy in the letter card | Transparent PNG, 400×400 px+ | Optional |
| 6 — Letter (photo) | `letter-photo.png` | Heart-shaped photo frame | JPG or PNG, square crop, 800×800 px+ | Optional |
| 7 — Memories | `memory-1.png` | First Polaroid memory photo | JPG or PNG, portrait 4:5, 900×1125 px | Yes |
| 7 — Memories | `memory-2.png` | Second Polaroid memory photo | JPG or PNG, portrait 4:5, 900×1125 px | Yes |
| 7 — Memories | `memory-3.png` | Third Polaroid memory photo | JPG or PNG, portrait 4:5, 900×1125 px | Yes |
| 8 — Gift | `gift-box.png` | Gift box illustration | Transparent PNG, 600×600 px+ | Optional (CSS fallback exists) |
| 9 — Virtual hug | `virtual-hug.png` | Two characters hugging | Transparent PNG, 900×700 px+ | Yes |

## How to Replace Images

1. **Prepare your image** at the recommended size above.
2. **Name it exactly** as shown in the Filename column (keep the `.png` extension).
3. **Drop it into** `public/images/`, overwriting the existing file.
4. **That's it!** No code changes needed. Refresh the browser to see your new image.

### Changing the file format

If you want to use `.jpg` instead of `.png` for the memory photos:

1. Place your JPGs in `public/images/` (e.g., `memory-1.jpg`).
2. Open `src/components/PolaroidGallery.jsx`.
3. Change the `file` values in the `photos` array to match your new filenames.

### Changing the letter photo

The heart-shaped photo on Screen 6 uses `letter-photo.png`. A square crop works best because it's clipped to a heart shape via CSS.

## Fallback Behavior

| Image type | Fallback when missing |
|------------|----------------------|
| Puppy illustrations | 🐶 emoji on a soft pink gradient |
| Photo frames / memories | ♡ on a soft pink gradient |
| Virtual hug | 🫂 emoji on a soft pink gradient |
| Gift box | CSS-drawn gift (no image needed) |

All fallbacks are styled to match the site theme, so the experience remains pleasant even with missing images.

## Image Tips

- **Transparent PNGs** work best for puppies and illustrations — the cream background shows through.
- **Portrait 4:5 ratio** works best for memory photos — they fit the Polaroid frames naturally.
- **Square crops** work best for the letter heart-frame photo.
- Keep images under **1.5 MB each** for fast loading.
- The site uses `object-fit: contain` for illustrations and `object-fit: cover` for photos, so images are never distorted.
