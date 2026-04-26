# Testing

This project uses two complementary testing layers: **Vitest** for unit tests and **Playwright** for end-to-end (E2E) tests.

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

Vitest is configured in `vite.config.ts` with the jsdom environment and path alias support. Tests import components and render them with React Testing Library, asserting on accessible roles and text content.

---

## E2E Tests (Playwright)

### Stack

| Tool       | Purpose                                         |
| ---------- | ----------------------------------------------- |
| Playwright | Browser automation and assertions               |
| Chromium   | The browser used for E2E tests (see note below) |

> **Note:** Firefox and WebKit projects are temporarily disabled in `playwright.config.ts` due to an unresolved issue with the authentication flow on those browsers. Only Chromium runs in CI.

### Running Tests

```bash
bun run test:e2e    # Build and run all E2E tests
```

The Playwright config starts the production server (`bun run start`) on `http://localhost:3000` automatically before running tests.

### File Structure

```
e2e/
  auth.setup.ts       # One-time setup: logs in and saves session to disk
  auth.test.ts        # Auth flow tests (protected routes, sign-in, sign-out)
  homepage.test.ts    # Public homepage smoke test
  .auth/
    user.json         # Persisted browser session (gitignored)
```

### Authentication Setup

The `auth.setup.ts` file runs once before all test projects as a `setup` dependency. It:

1. Navigates to `/sign-in` and fills in credentials from environment variables.
2. Waits for a redirect to `/admin` and asserts the Admin heading is visible.
3. Saves the resulting browser storage state (cookies + localStorage) to `e2e/.auth/user.json`.

All Chromium tests then receive this session via `storageState`:

```ts
{
  name: "chromium",
  use: {
    ...devices["Desktop Chrome"],
    storageState: "e2e/.auth/user.json",
  },
  dependencies: ["setup"],
}
```

This means every test starts already authenticated. Tests that need to simulate an **unauthenticated** user override `storageState` inline:

```ts
test.use({ storageState: { cookies: [], origins: [] } });
```

### Environment Variables for E2E

| Variable            | Description                           |
| ------------------- | ------------------------------------- |
| `E2E_USER_EMAIL`    | Email of the test account in Supabase |
| `E2E_USER_PASSWORD` | Password of the test account          |

These must be present in `.env.local` when running E2E tests locally. In CI they are injected as environment variables — the Playwright config loads `.env` and `.env.local` at startup, silently skipping files that do not exist.

### What Is Tested

| File               | Scenarios                                                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auth.test.ts`     | Unauthenticated redirect from `/admin`, sign-in page render, invalid credentials error, authenticated redirect from `/sign-in`, admin page access, sign-out redirect |
| `homepage.test.ts` | Page title contains "Mateo Olarte"                                                                                                                                   |
