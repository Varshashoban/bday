# 💗 Viru Ma Birthday Surprise

A tiny, handmade, nine-screen interactive birthday experience — from **Ammu** to **Viru Ma**.

Built with React + Vite. Runs entirely in the browser with local assets. No backend, no accounts, no paid services required.

---

## ✨ Features

- **9 interactive screens** with cute puppy illustrations, a heartfelt letter, Polaroid memories, a surprise gift, and a virtual hug
- **Smooth transitions** between every screen
- **Fully responsive** — works beautifully on phones and desktops
- **Accessible** — keyboard navigation, focus states, screen reader labels, reduced-motion support
- **Graceful fallbacks** — missing images show themed emoji placeholders (never broken icons)
- **Easy to customize** — swap images by dropping files into `public/images/`

---

## 🚀 Run Locally

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or newer)

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

### Production build

```sh
npm run build
npm run preview
```

---

## 🖼️ Replacing Images

All images live in `public/images/`. To replace any image:

1. Name your file exactly like the one you're replacing (e.g., `memory-1.png`)
2. Drop it into `public/images/`, overwriting the old file
3. Refresh the browser

See **[ASSETS.md](./ASSETS.md)** for the full image reference — filenames, recommended dimensions, which are optional, and how fallbacks work.

---

## 🎮 How It Works

| Screen | What happens |
|--------|-------------|
| 1 — Welcome | "HEY!!" — Choose YES or NO |
| 2 — Rejection | "HOW DARE YOU" — Go back |
| 3 — Good girl | "That's a good girl!!" — Continue |
| 4 — Birthday | "HAPPY BIRTHDAY BBG 💗" — Next |
| 5 — Envelope | Tap to open the letter |
| 6 — Letter | Heartfelt message from Ammu |
| 7 — Memories | Three Polaroid photos on a string (tap to enlarge) |
| 8 — Gift | Tap the gift box to open it |
| 9 — Virtual hug | Final message + Replay / View memories |

**Browser Back** returns to the previous screen. **Escape** closes the photo lightbox. All animations respect the OS reduced-motion preference.

---

## 📁 Project Structure

```
├── public/
│   └── images/          ← All replaceable image assets
├── src/
│   ├── components/      ← Reusable UI components
│   │   ├── SafeImage.jsx
│   │   ├── PuppyIllustration.jsx
│   │   ├── PinkButton.jsx
│   │   ├── Envelope.jsx
│   │   ├── GiftBox.jsx
│   │   ├── PolaroidGallery.jsx
│   │   ├── Lightbox.jsx
│   │   └── FloatingHearts.jsx
│   ├── screens/         ← One component per screen
│   │   ├── WelcomeScreen.jsx
│   │   ├── NoScreen.jsx
│   │   ├── YesScreen.jsx
│   │   ├── BirthdayScreen.jsx
│   │   ├── EnvelopeScreen.jsx
│   │   ├── LetterScreen.jsx
│   │   ├── MemoriesScreen.jsx
│   │   ├── GiftScreen.jsx
│   │   └── HugScreen.jsx
│   ├── App.jsx          ← Root component + navigation state
│   ├── main.jsx         ← React entry point
│   └── styles.css       ← All styles + design tokens
├── index.html
├── vite.config.js
├── ASSETS.md            ← Image replacement guide
├── README.md            ← This file
└── package.json
```

---

## 🌐 Free Deployment

### Option A: Netlify (Recommended — Quickest)

1. **Create a GitHub repository** and push this project:

   ```sh
   git init
   git add .
   git commit -m "Viru Ma birthday surprise 💗"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/viruma-birthday.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub
   - Click **Add new site → Import an existing project**
   - Select your repository
   - Set **Build command:** `npm run build`
   - Set **Publish directory:** `dist`
   - Click **Deploy site**

3. **Share the link!** Netlify gives you a free `*.netlify.app` URL.

### Option B: Vercel

1. Push to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com/), import the repo
3. Vercel auto-detects Vite — just click Deploy
4. Share the free `*.vercel.app` URL

### Option C: GitHub Pages

1. Add `base: '/viruma-birthday/'` to `vite.config.js` (replace with your repo name)
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

> **Note:** Netlify and Vercel are simpler because they don't require the `base` configuration.

---

## 💕 Credits

Made with love by Ammu, for Viru Ma.
