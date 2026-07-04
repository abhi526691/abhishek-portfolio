# Abhishek Pandey — Portfolio

A story-driven portfolio homepage: not a résumé, but a scroll-driven narrative of the path from a biology textbook to AI engineering, ending in a catalogue of six AI engineering disciplines mapped to real projects.

Built with [Next.js](https://nextjs.org) (App Router) + React + TypeScript, recreated pixel-for-pixel from a [Claude Design](https://claude.ai/design) prototype.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
├── app/
│   ├── layout.tsx     # root layout, metadata, font variables
│   ├── page.tsx        # renders <Portfolio />
│   └── globals.css     # reset, selection color
├── components/
│   └── Portfolio.tsx   # the whole homepage
└── lib/
    └── fonts.ts         # Instrument Serif, Inter, JetBrains Mono via next/font/google
```

`Portfolio.tsx` renders, top to bottom:

- **Header + chapter rail** — fixed nav with scroll-spy (`IntersectionObserver`) highlighting the active chapter
- **00 Frontispiece** — hero with portrait and a rotating "I build ___" line
- **01–06** — the story chapters (The Fork, The Choice, First Production, The Awakening, Crossing Over, Now)
- **07 The Work** — six AI engineering disciplines (Agentic RAG, Guardrails, Agents, LLMOps, Evals, Fine-tuning), each mapped to a real or in-progress project
- **08 Contact** — contact details, socials, colophon

## Deploy

Deploy on [Vercel](https://vercel.com/new) — zero config needed.
