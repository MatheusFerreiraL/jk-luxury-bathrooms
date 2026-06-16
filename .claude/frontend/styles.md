# Styles

## CSS variables — defined in `src/index.css` `:root`

| Token | Value | Used for |
|---|---|---|
| `--espresso` | `#26201B` | Dark section backgrounds (Services, Footer, Navbar scrolled) |
| `--espresso-mid` | `#312620` | Contact section background |
| `--dusk` | `#3D342C` | Body text |
| `--sand` | `#B08C6B` | Primary accent — buttons, labels, icons, borders on hover |
| `--sand-light` | `#C9A882` | Hover/active state of `--sand` |
| `--stone` | `#E3D9CF` | Reviews section background, card borders, dividers |
| `--dust` | `#C8BDB4` | Muted/secondary text, stat labels |
| `--cream` | `#F7F4EF` | Main page background, card backgrounds |
| `--white` | `#ffffff` | Hard white (slider handle, form inputs) |
| `--radius` | `6px` | Border radius across all rounded elements |
| `--transition` | `0.3s ease` | Standard hover/focus transitions |
| `--transition-slow` | `0.55s ease` | Expand/collapse animations (reviews) |

The palette is warm and pastel-leaning. Never reintroduce cold blues or harsh high-saturation colours.

## Typography

- **Headings:** `Cormorant Garamond` (loaded from Google Fonts, weights 300/400/500/600). Referenced as `var(--font-heading)`.
- **Body:** `Inter` (loaded from Google Fonts, weights 300/400/500/600). Referenced as `var(--font-body)`.
- Heading sizes use `clamp()` for fluid scaling — prefer this over breakpoint overrides.
- Font smoothing: `-webkit-font-smoothing: antialiased` on `body`.

## Global utility classes (in `src/index.css`)

Apply these directly in JSX as plain `className` strings — they are not scoped to any module.

| Class | Purpose |
|---|---|
| `.section-label` | Small uppercase `--sand` label displayed above section titles |
| `.section-title` | Serif (`--font-heading`) `--espresso` heading, `clamp(2rem, 4vw, 3rem)` |
| `.section-title--light` | Same as above but `--cream` coloured (use on dark section backgrounds) |
| `.btn-primary` | `--sand` background, white text, hover lifts with shadow |
| `.btn-secondary` | Transparent, `--cream` border — use on dark backgrounds |
| `.btn-secondary--dark` | Transparent, `--espresso` border — use on light backgrounds |

## CSS Modules conventions

- Every component has its own co-located `.module.css`. Never share a module between components.
- Never use global selectors (e.g. `h2`, `p`) inside a `.module.css` — use class selectors only.
- No hardcoded hex values inside modules — always reference a CSS variable from `:root`.
- Exception: `rgba()` with variable-equivalent RGB values is acceptable for alpha-composited colours (e.g. `rgba(38, 32, 27, 0.6)`).
- Responsive rules go at the bottom of each module, ordered from widest breakpoint to narrowest.
- Prefer CSS `transition` over JS-driven animation. Use `animation` only for one-shot effects (e.g. the slider handle wiggle hint).

## Section background pattern

| Section | Background |
|---|---|
| Hero | Full-bleed photo + warm overlay |
| About | `--cream` |
| Services | `--espresso` (dark) |
| Projects | `--cream` |
| Reviews | `--stone` |
| Contact | `--espresso-mid` (dark) |
| Footer | `--espresso` (dark) |
| Gallery banner | `--espresso` (dark) |
| Gallery grid | `--cream` |
| Gallery CTA | `--stone` |
