# Slides Casual - Agent Guide

## Architecture

- **App.tsx** — Entry point. Exports `default function App()` which initializes a Reveal.js deck (theme: `sky`, transition: `convex`) and composes all slide components with `isNested` prop.
- **Slide.tsx** — Wrapper component. When `isNested=true`, renders children directly (used inside App). When standalone, creates its own Reveal.js deck for single-slide preview. Exports both `Slide` (named) and `SlidePreview` (default).
- **styles.css** — Global styles scoped under `.reveal`. Uses Comic Sans / cursive font family. Defines classes for topic cards, emoji rows, poll options, and a bounce animation.
- **slides/** — Six numbered slide files (01-Title through 06-End). Each exports a named component (e.g., `TitleSlide`) and a default `*Preview` function for isolated rendering. Slides accept optional props with defaults and wrap content in `<Slide isNested={isNested}>`.

Data flow: App creates Reveal deck -> renders slide components with `isNested` -> each slide wraps its `<section>` in `<Slide>` which passes children through when nested. A `ResizeObserver` handles layout recalculation.

## Styling

- Single `styles.css` file with plain CSS (not CSS modules).
- All selectors scoped under `.reveal` or slide-specific classes (`.title-slide`, `.topic-card`, `.poll-option`).
- Emoji-heavy design with colorful accents (`#ff6b6b`, `#ffd93d`, `#6bcb77`).
- Uses CSS grid (`.topics-grid`) and flexbox (`.emoji-row`, `.poll-options`) for layouts.
- Includes a `@keyframes bounce` animation.

## Extension Points

- Add a new slide by creating `slides/0N-Name.tsx`, exporting a named component and default preview, then importing/rendering it in `App.tsx`.
- Customize content via slide props (each slide has optional props with sensible defaults).
- Add new visual elements by defining CSS classes in `styles.css` — keep selectors under `.reveal` scope.

## Constraints

- Reveal.js is initialized in embedded mode (`embedded: true`, `hash: false`). Do not enable hash-based routing.
