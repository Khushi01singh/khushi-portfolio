# 🌌 Khushi Singh | 3D Creative Portfolio

A high-performance, minimalist 3D portfolio built with **Next.js 14**, featuring immersive **React Three Fiber** canvas animations, smooth **Lenis** scrolling, and **Framer Motion** transitions.

🚀 **Live Demo:** [khushi-portfolio-tau.vercel.app](https://khushi-portfolio-tau.vercel.app)

---

## 📊 GitHub Activity
![Khushi's GitHub Stats](https://github-readme-stats.vercel.app/api?username=Khushi01singh&show_icons=true&theme=tokyonight)

---

## 🛠️ Tech Stack

| Library | Purpose |
| :--- | :--- |
| **Next.js 14** | Framework (App Router), SSR, & SEO Optimization |
| **React Three Fiber** | 3D Particle Canvas & Floating Orbs |
| **Framer Motion** | Scroll-reveal, Magnetic buttons & Hover effects |
| **Lenis** | Buttery smooth cinematic scrolling |
| **Tailwind CSS** | Modern utility-first styling |
| **TypeScript** | Robust type safety |

---

## 🏗️ Project Structure

```text
khushi-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, fonts, & metadata
│   ├── page.tsx          # Main assembly point for all sections
│   └── globals.css       # Design tokens & core animations
├── components/
│   ├── ThreeBackground.tsx  # R3F 3D Scene (SSR Disabled)
│   ├── SmoothScroll.tsx     # Lenis smooth scroll provider
│   ├── CustomCursor.tsx     # Custom magnetic cursor interaction
│   ├── Navbar.tsx           # Sticky navigation with scroll-to anchors
│   ├── Hero.tsx             # Dynamic hero with stats integration
│   ├── Skills.tsx           # Interactive staggered skills grid
│   ├── Projects.tsx         # Horizontal drag-scroll gallery
│   ├── Experience.tsx       # Timeline-based work history
│   ├── Research.tsx         # Research paper spotlight
│   └── Footer.tsx           # Social links & contact
└── public/               # Assets & Resume PDF
