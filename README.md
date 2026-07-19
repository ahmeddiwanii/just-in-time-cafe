# Just In Time — Café & Restaurant

Mobile-first marketing website for **Just In Time**, a café-restaurant in Beni Khalled, Tunisia.

Built with Next.js 16, React 18, and Tailwind CSS 4.

## Features

- **Hero with watch carousel** — food photos rotate behind a branded mobile background with touch swipe and auto-play
- **Flip-book menu** — swipeable category pages with a book-style page turn animation
- **Responsive layouts** — dedicated desktop,mobile and tablet experiences
- **Gallery & contact** — photo gallery, about section, testimonials, and contact form

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) + shadcn/ui components
- TypeScript

## Getting started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (recommended)

### Install

```bash
pnpm install
```

### Development

```bash
# Local dev server (LAN accessible for phone/tablet testing)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) or your machine's LAN IP  on mobile devices.

> Use `pnpm dev` for hot reload. Use `pnpm preview:mobile` only for production-like testing.

### Production build

```bash
pnpm build
pnpm start
```

## Project structure

```
app/
  components/     # Hero, MenuSection, SiteNav
  globals.css     # Theme tokens and global styles
  layout.tsx      # Root layout and fonts
  page.tsx        # Homepage sections
lib/
  menu-data.ts    # Menu categories and book pages
  site-images.ts  # Hero carousel and gallery images
  use-swipe.ts    # Touch swipe hooks
public/           # Static assets (logo, backgrounds, photos)
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Dev server with HMR on `0.0.0.0:3000` |
| `pnpm dev:mobile` | Same as `dev` — for phone/tablet testing |
| `pnpm preview:mobile` | Production build + serve on LAN |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |

## License

Private — © Just In Time, Beni Khalled.
