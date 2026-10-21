# M. Arham — Expert Flutter Developer & Software Engineer Portfolio

A premium, Dribbble-inspired portfolio web application built with **Next.js 15 (App Router)**, **TypeScript**, and **Vanilla CSS with a centralized CSS custom property color system**.

Designed to showcase **M. Arham** as a top-tier **Flutter Application Architect** with extensive production experience in cross-platform mobile apps (AI Fintech, Realtime Marketplaces, Quran & Lifestyle Apps, Health/Sensor Tracking), alongside full-stack web and backend capabilities (Supabase, Firebase, REST APIs, Python/EDA).

---

## 🎨 Theme & Centralized Colors

The theme follows a sleek **Black & Red** aesthetic (`#070709` obsidian blacks with `#ff2a4b` neon crimson accents, ambient radial glow, and frosted glassmorphism).

As requested, all colors are defined in a single file:
📍 `src/styles/colors.css`

To switch or customize the theme, simply update the CSS variables in that file:
```css
:root {
  --bg-primary: #070709;
  --bg-secondary: #0d0d12;
  --red-primary: #ff2a4b;
  --red-accent: #ef4444;
  --red-glow: rgba(255, 42, 75, 0.35);
  /* ... */
}
```

---

## 🧩 Modular Widget Architecture

The main page (`src/app/page.tsx`) uses a clean modular widget architecture:

1. **`HeroWidget`** (`src/components/widgets/HeroWidget.tsx`)
   - High-impact SEO H1 headline targeting *"Arham Flutter Developer"* & *"Arham Software Engineer"*.
   - Live availability badge with animated red pulse.
   - Developer portrait with neon rim lighting and verification badges.
   - Live stats ticker (3+ Years Experience, 6+ Major Production Apps, 3.58 CGPA).

2. **`LiveFlutterSimulatorWidget`** (`src/components/widgets/LiveFlutterSimulatorWidget.tsx`)
   - Dribbble-grade interactive mobile device simulator.
   - Live toggleable apps: *AI Expense Tracker* (with OCR scanning simulation), *Islam Master* (with interactive Tasbeeh counter & Qibla direction), and *WorkSphere* (with live Supabase realtime proposals).
   - Side-by-side Dart 3.x Clean Architecture code view.

3. **`ProjectsWidget`** (`src/components/widgets/ProjectsWidget.tsx`)
   - Category filtering: *All*, *Flutter Mobile*, *Full-Stack & Web*, *Python & Data Analysis*.
   - Interactive project cards with glowing borders, tech stack badges, and deep architecture specification modals.

4. **`ExperienceWidget`** (`src/components/widgets/ExperienceWidget.tsx`)
   - Career timeline featuring *Abinos*, *Apna Khaiyal*, and *Corvit Systems (NAVTTC)*.

5. **`SkillsMatrixWidget`** (`src/components/widgets/SkillsMatrixWidget.tsx`)
   - Categorized matrix presenting Arham as a **Flutter Expert** with proficient Web, Cloud, and Data capabilities.

6. **`CertificationsWidget`** (`src/components/widgets/CertificationsWidget.tsx`)
   - Verified credentials for NAVTTC Python Data Analysis and Huawei HCCDA-AI, plus university academic honors.

7. **`ContactWidget`** (`src/components/widgets/ContactWidget.tsx`)
   - 1-click clipboard copy for email & phone, direct WhatsApp link, and interactive contact form.

8. **`Navbar`** & **`Footer`** (`src/components/layout/`)
   - Floating frosted glass navigation, active section spy, and quick social links.

---

## 🚀 SEO & Discovery

Optimized to rank on search engines for *"Arham Flutter Developer"* and *"Arham Software Engineer"*:
- **Structured Data**: Schema.org JSON-LD `Person`, `ProfilePage`, and `WebSite` graph.
- **Dynamic Sitemap**: `sitemap.xml` generated automatically at `src/app/sitemap.ts`.
- **Search Engine Crawlers**: `robots.txt` generated automatically at `src/app/robots.ts`.
- **Social Graph**: OpenGraph and Twitter card metadata with custom developer imagery.

---

## ⚡ Deployment on Vercel

### Option 1: Direct Vercel CLI Deployment
From within the `arham portfolio` directory, run:
```bash
npx vercel
```
Follow the quick CLI prompts to link to your Vercel account and deploy immediately to a production URL!

### Option 2: GitHub + Vercel Dashboard (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Arham Modern Portfolio"
   git remote add origin https://github.com/ArhamSE2002/arham-portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com), click **Add New Project**, and select your `arham-portfolio` repository.
3. Vercel will automatically detect **Next.js**, run `npm run build`, and deploy your portfolio with free SSL!

---

## 🛠️ Local Development

```bash
# Run local development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```
