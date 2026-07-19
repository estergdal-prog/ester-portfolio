# אסתר וייסברג — Personal Portfolio

A modern, responsive portfolio website built with **React**, **Next.js**, and **Tailwind CSS**.

## Design

- **Theme**: Netflix-inspired dark mode with deep black (#141414) and bold red accents (#E50914)
- **Language**: Hebrew with full RTL (Right-to-Left) support
- **Typography**: Heebo and Rubik Hebrew fonts
- **Animations**: Smooth scroll, fade-in effects with Framer Motion
- **Components**: Modular, reusable React components

## Features

✓ Full RTL support (`dir="rtl"`)  
✓ Smooth scrolling navigation  
✓ Scroll-triggered fade-in animations  
✓ Hover effects on experience cards (red glow + lift)  
✓ Responsive grid layouts (mobile, tablet, desktop)  
✓ Dark mode by default  
✓ Optimized typography and spacing  

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with font setup
│   ├── page.tsx         # Home page composition
│   └── globals.css      # Global Tailwind + custom styles
├── components/
│   ├── Nav.tsx          # Sticky navigation
│   ├── Hero.tsx         # Hero section with CTA
│   ├── About.tsx        # About me section
│   ├── Experience.tsx   # Work experience cards
│   ├── Skills.tsx       # Skill badges grid
│   ├── Education.tsx    # Education timeline
│   ├── Contact.tsx      # Contact info & footer
│   └── Reveal.tsx       # Scroll animation wrapper
├── lib/
│   └── data.ts          # Content arrays (experience, skills, education)
├── tailwind.config.ts   # Tailwind customization
└── package.json         # Dependencies
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
npm start
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Google Fonts** - Hebrew fonts (Heebo, Rubik)

## Notes

- LinkedIn profile URL in Contact component points to `https://www.linkedin.com/in/ester-wiseberg` — update if needed
- All content is in Hebrew with full RTL layout
- Customizable color palette in `tailwind.config.ts`
