# Aditya Singh — Portfolio (React Project)

A clean, component-based React portfolio converted from the original single-file `index.html`.

## Project Structure

```
aditya-portfolio/
├── public/
│   └── index.html              ← HTML shell + font imports
├── src/
│   ├── index.js                ← React entry point
│   ├── App.jsx                 ← Root component (composes all sections)
│   │
│   ├── data/
│   │   └── index.js            ← All portfolio content (edit here!)
│   │
│   ├── hooks/
│   │   └── index.js            ← useActiveSection, useCountUp, useInView, useFadeIn
│   │
│   ├── components/
│   │   ├── motion.js           ← Lightweight framer-motion shim (no extra deps)
│   │   ├── Background.jsx/.css ← Animated gradient + particle field
│   │   ├── Navbar.jsx/.css     ← Sticky nav with mobile menu
│   │   ├── Hero.jsx/.css       ← Hero section with typing animation + orbital visual
│   │   └── Sections.jsx/.css   ← Stats, About, Experience, Projects, TechStack,
│   │                               Certificates, Learning, Contact, Footer, ScrollTop
│   │
│   └── styles/
│       └── globals.css         ← CSS variables, reset, layout helpers, keyframes
│
└── package.json
```

## Quick Start

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Build for Production

```bash
npm run build
```

Outputs optimized files to `build/`.

## Customizing Content

All portfolio data lives in **`src/data/index.js`** — edit that one file to update:

- Hero roles (typing animation)
- Stats counters
- Experience timeline
- Projects (name, description, GitHub/demo links, tech stack)
- Tech stack grid
- Certificates
- Currently learning chips
- Contact info (phone, email, LinkedIn, GitHub)

## Deploying

### Vercel (recommended)
1. Push to a GitHub repo
2. Import on vercel.com → auto-detected as Create React App → deploy

### Netlify
Drag the `build/` folder onto app.netlify.com/drop

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add "homepage": "https://<user>.github.io/<repo>" to package.json
# Add "predeploy": "npm run build" and "deploy": "gh-pages -d build" to scripts
npm run deploy
```

## Before Deploying

- **Resume**: Place `Aditya_Singh_Resume.pdf` in the `public/` folder
- **Contact form**: Wire up to [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
- **Certificate images**: Add images to `public/` and reference them in the certificates data

## Dependencies

Only React 18 — no animation library required. The motion shim in `src/components/motion.js`
handles all transitions using CSS + IntersectionObserver.
