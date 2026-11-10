# Zakaria Chelouati — Developer Portfolio

Personal portfolio website for **Zakaria Chelouati**, Backend Software Engineer and final-year Computer Engineering student (Génie Logiciel) at High-Tech Rabat, Salé/Rabat, Morocco.

Features an interactive developer terminal, real-world project showcases, and a responsive dark/light visual identity.

## Tech Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 (stone neutrals, dark panels, purple accent `#bc96ec`)
- **Typography:** Archivo (body text & terminal) & Syne (headings)
- **Animations:** framer-motion & split-type
- **Deployment:** Vercel

## Key Features

- **Interactive CLI Terminal:** A fully interactive terminal section (`help`, `whoami`, `ls projects`, `cat security`, `cat about`, `skills`, `./hire-me`, `clear`) with command history, autocomplete shortcuts, and clickable pills.
- **Project Case Studies:** Detailed breakdown of real-world products including Wasla CRM, Aube Café, and Botanica Skincare with dynamic routing and image previews.
- **Design & Performance:** Smooth scroll interactions, dynamic cursor, theme switching, and optimized static page generation.
- **SEO & Social Cards:** Configured metadata, Open Graph cards, dynamic XML sitemap, and robots.txt.

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm (or pnpm / yarn)

### Installation

```bash
git clone https://github.com/ZAKARIAXXX/zakaria-portfolio.git
cd zakaria-portfolio
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Run typechecking:

```bash
npx tsc --noEmit
```

Run ESLint:

```bash
npm run lint
```
