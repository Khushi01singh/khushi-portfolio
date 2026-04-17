# Khushi Singh — 3D Portfolio

A modern Next.js 14 portfolio with **react-three-fiber** 3D canvas, **Lenis** smooth scroll, and **Framer Motion** animations.

## Tech Stack

| Library | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework, SSR, routing |
| React Three Fiber | 3D particle canvas + floating orbs |
| Three.js | WebGL renderer |
| Framer Motion | Scroll-reveal & hover animations |
| Lenis | Buttery smooth scroll |
| Tailwind CSS | Utility styles |
| TypeScript | Type safety |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Production build

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

```bash
npx vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com) — zero config needed.

## Project Structure

```
khushi-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Design tokens, animations
├── components/
│   ├── ThreeBackground.tsx  # react-three-fiber 3D canvas (SSR disabled)
│   ├── SmoothScroll.tsx     # Lenis smooth scroll provider
│   ├── CustomCursor.tsx     # Custom cursor dot + ring
│   ├── Navbar.tsx           # Sticky nav with Lenis scrollTo
│   ├── Hero.tsx             # Hero section with stats
│   ├── Skills.tsx           # Skills grid with stagger animation
│   ├── Projects.tsx         # Horizontal drag-scroll project cards
│   ├── Experience.tsx       # Work experience card
│   ├── Research.tsx         # Published paper card
│   └── Footer.tsx           # Contact links
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customisation

- **Colors**: Edit CSS variables in `app/globals.css` under `:root`
- **3D Scene**: Edit `components/ThreeBackground.tsx` — change particle count, orb positions/colors
- **Content**: Each section is a standalone component — update text/links directly
- **Fonts**: Swap in `app/layout.tsx` via `next/font/google`
