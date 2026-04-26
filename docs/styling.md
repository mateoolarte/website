# Styling

This project uses **CSS Modules** for component-scoped styles and a small set of global stylesheets for resets and design tokens.

## Global Styles

Global stylesheets live in `styles/` and are imported in `app/[locale]/layout.tsx`:

| File          | Purpose                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| `reset.css`   | [Josh W. Comeau CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) — sensible baseline across browsers |
| `vars.css`    | CSS custom properties (design tokens)                                                                             |
| `globals.css` | Imports `reset.css` and `vars.css`; sets global link color                                                        |

### Design Tokens — `vars.css`

All color values are defined as CSS custom properties on `:root`:

| Variable             | Value     | Usage                                      |
| -------------------- | --------- | ------------------------------------------ |
| `--primary-color`    | `#0474c4` | Primary interactive color (links, buttons) |
| `--title-color`      | `#262b40` | Headings and prominent text                |
| `--primary-bg-color` | `#f1f5fe` | Page background                            |
| `--secondary-color`  | `#2c444c` | Secondary text                             |
| `--accent-color`     | `#ff6f61` | Accent / highlight color                   |

Use these variables in component CSS Modules via `var(--token-name)`.

## CSS Modules

Each component has its own `.module.css` file in the same directory. Class names are scoped locally by Next.js at build time, so there are no naming conflicts between components.

### Conventions

- Class names use **camelCase** (e.g., `.pageWrapper`, `.contactButton`). This is enforced by the Stylelint rule `selector-class-pattern: "^[a-z][a-zA-Z0-9]+$"`.
- CSS Module files are named after their component file (e.g., `contact-form.tsx` → `contact-form.module.css`).

### Example

```tsx
// my-component.tsx
import styles from "./my-component.module.css";

export function MyComponent() {
  return <div className={styles.wrapper}>…</div>;
}
```

```css
/* my-component.module.css */
.wrapper {
  color: var(--primary-color);
}
```

## Font

The project uses **Reddit Sans** loaded via `next/font/google` in `app/layout.tsx`. The font variable is applied to the root `<html>` element and is available globally via the CSS variable that `next/font` generates.

## Linting

CSS is linted with **Stylelint** using `stylelint-config-standard` as the base config (configured in `stylelint.config.ts`). Stylelint runs automatically on changed `.css` files in the `pre-commit` hook via lint-staged.
