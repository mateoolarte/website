# Testing

This project uses **Vitest** for unit tests.

## Unit Tests (Vitest)

### Stack

| Tool                  | Purpose                           |
| --------------------- | --------------------------------- |
| Vitest                | Test runner and assertion library |
| React Testing Library | Component rendering and queries   |
| jsdom                 | Browser-like DOM environment      |
| `vite-tsconfig-paths` | TypeScript path alias resolution  |

### Running Tests

```bash
bun run test          # Run all unit tests once
bun run test:watch    # Run in watch mode (re-runs on file changes)

# Run a single file
bun run test:watch path/to/file.test.tsx
```

### File Conventions

Unit tests are **co-located** with the file they test, using the `.test.tsx` extension:

```
app/[locale]/(homepage)/
  page.tsx
  page.test.tsx           ← co-located unit test

app/sign-in/components/
  sign-in-form.tsx
  sign-in-form.test.tsx   ← co-located unit test
```

### Configuration

Vitest is configured in `vitest.config.ts` with the jsdom environment and path alias support. Tests import components and render them with React Testing Library, asserting on accessible roles and text content.
