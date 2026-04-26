## References

For any Next.js question or feature, always consult the latest version docs at https://nextjs.org/docs

## Commands

Use `bun` (not `npm` or `yarn`) for all commands.

```bash
bun run dev          # Start development server (localhost:3000)
bun run build        # Production build
bun run lint         # Run ESLint + Stylelint
bun run type-check   # TypeScript type checking
bun run test         # Run unit tests (Vitest) once
bun run test:watch   # Run unit tests in watch mode
bun run test:e2e     # Run Playwright E2E tests
```

To run a single test file:

```bash
bun run test:watch path/to/file.test.tsx
```

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (enforced via commitlint + husky). Use the format `type(scope): description`, e.g. `feat(auth): add login page`, `fix(i18n): correct Spanish translation`, `chore(deps): update dependencies`. Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`.

## Architecture

Personal portfolio site built with Next.js 16 App Router, React 19, TypeScript.

### Routing structure

```
app/
  layout.tsx              # Root HTML shell (font only, no providers)
  [locale]/
    layout.tsx            # Locale validation + NextIntlClientProvider + metadata
    (homepage)/
      page.tsx            # Main portfolio page
      page.test.tsx       # Unit tests co-located with page
      components/         # Page-specific components
  admin/                  # Admin section
  sign-in/                # Auth page
```

- Locales: `es` (default) and `en`, using `next-intl` with `localePrefix: "as-needed"` (Spanish URLs have no prefix, English uses `/en/...`)
- i18n routing config lives in `services/i18n/routing.ts`; request config in `services/i18n/request.ts`; typed navigation helpers in `services/i18n/navigation.ts`
- Translation files: `messages/en.json` and `messages/es.json`

### Dependencies

Always use exact (fixed) version numbers for all dependencies — no `^` or `~` prefixes. This ensures reproducible installs locally and in CI. When adding or updating a package, pin the resolved version exactly, e.g. `"react": "19.2.5"` not `"react": "^19.2.5"`.

### Naming conventions

- All new files and folders must use **kebab-case** (e.g., `my-component.tsx`, `auth-utils/`)
- This applies to all file types: components, utilities, services, styles, etc.

### Exports

- Prefer **named exports** for all components, functions, utilities, hooks, and other exports
- Use default exports only when not possible (e.g., Next.js page/layout files that require them)

### Key patterns

- **Styling**: CSS Modules (`.module.css`) per component; global styles in `styles/` (`reset.css`, `vars.css`, `globals.css`)
- **Analytics**: PostHog initialized in `instrumentation-client.ts` (Next.js client instrumentation); proxied through `/ingest/` rewrites in `next.config.js`
- **Icons**: `@phosphor-icons/react` (tree-shaken via `optimizePackageImports`)
- **UI primitives**: Radix UI
- Tests use Vitest + React Testing Library with jsdom environment; E2E uses Playwright (Chrome, Firefox, Safari)
- Pre-commit hooks via Husky run lint-staged on changed files

### Environment variables

- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog ingest host (proxied through `/ingest/`)
