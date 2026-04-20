# Design Brief

**SS Collection Nagpur** — premium dark retail showcase with electric neon energy. Nike-style brand aesthetic: sophisticated blacks with vibrant neon red and cyan accents. Glassmorphic surfaces, precise motion, athletic typography. Premium, fast, animated, engaging.

## Tone & Differentiation
Premium tech retail energy. Deep black foundation with electric neon pops. Glassmorphism for depth (not decoration). Motion is restrained, purposeful, Nike-grade. No soft, bouncy toy-like effects. Emphasis on offline store presence and social proof.

## Color Palette

| Role | OKLCH | Hex | Purpose |
|------|-------|-----|---------|
| Background | 0.08 0 0 | #0a0a0a | Deep black foundation, premium |
| Foreground | 0.95 0 0 | #f5f5f5 | Clean white, high contrast text |
| Primary (Neon Red) | 0.55 0.28 22 | #ff0055 | Brand energy, CTAs, highlights |
| Secondary (Cyan) | 0.65 0.25 240 | #00d4ff | Interactive accents, hover states |
| Card | 0.12 0 0 | #1a1a1a | Subtle surface elevation |
| Muted | 0.28 0 0 | #454545 | Secondary text, disabled states |
| Border | 0.2 0 0 | #333333 | Semi-transparent white/10 for glass |

## Typography

| Layer | Font | Weight | Scale | Purpose |
|-------|------|--------|-------|---------|
| Display | Plus Jakarta Sans | 700, 600 | 3rem–2rem | Hero, section headings |
| Body | Satoshi | 400, 600 | 1rem–0.875rem | Prose, descriptions |
| Mono | JetBrains Mono | 400 | 0.875rem | Badges, technical labels |

## Structural Zones

| Zone | Treatment | Rationale |
|------|-----------|-----------|
| Header / Navbar | `glass` — black/10 + backdrop-blur-md + border-white/10 | Glassmorphism, premium feel, sticky, semi-transparent |
| Hero Section | Deep black bg, animated gradient accent, particles optional | Full-width impact, neon red + cyan gradient text overlay |
| Content Sections | Alternating `bg-background` and `glass-dark` cards | Depth through elevation, not color variation |
| Product Cards | `glass-dark` with neon glow on hover | Glassmorphic, interactive, hover energizes with primary/secondary glow |
| Footer | `glass` with border-t, semi-transparent | Cohesive footer, matches navbar treatment |

## Spacing & Rhythm
**Density:** Minimal padding/gaps (1rem, 0.5rem), tight stacking. Athletic, not spacious.
**Breakpoints:** Mobile (320px), Tablet (768px), Desktop (1024px+). Mobile-first Tailwind breakpoints.

## Component Patterns

| Component | Pattern | Animation |
|-----------|---------|-----------|
| CTA Button | Neon red bg, white text, glow-primary shadow | Hover: glow intensifies, scale 1.05 |
| Accent Button | Neon cyan bg, dark text, glow-secondary shadow | Hover: glow intensifies, scale 1.05 |
| Product Card | `glass-dark` grid item, image + title + badge | Entrance: fade + scale 0.9→1. Hover: rotate(1–2°) + glow |
| Brand Logo | Square/circular, semi-transparent bg | Hover: scale 1.1 + glow-secondary |
| Section Header | Poppins bold, text-gradient (red→white→cyan), underline neon red | Entrance: fade-in on scroll |

## Motion Choreography
**Entrance:** Fade in + scale 0.9→1 over 0.6s (easeOut). Stagger children by 50–100ms.
**Hover:** Scale 1→1.05, glow intensity +30%, shadow blur +10px. Duration 0.2s smooth.
**Scroll Reveals:** Cards fade + translate up on scroll into viewport. Triggers at 80% visible.
**Button Ripple:** On click, radial glow emanates from click point, fades over 0.4s.

## Constraints
- No generic blue or purple gradients; neon red/cyan only.
- No soft borders; use sharp, minimal radius (4px, 8px).
- No uniform spacing; vary density to guide focus.
- Dark mode only (no light theme).
- Glassmorphism on interactive surfaces (cards, navbar, footer); deep black for backgrounds.
- Typography creates hierarchy via weight + tracking, not size alone.

## Signature Detail
**Neon glow on hover:** Every interactive element (button, card, link) has a subtle neon glow shadow (`glow-primary` or `glow-secondary`). On hover, glow intensifies and blur radius increases, creating electric energy. No harsh blur; keep it premium and restrained.
