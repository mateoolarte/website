# Authentication

This project uses [Supabase](https://supabase.com/) for authentication via email and password. The integration is built on `@supabase/ssr`, which handles session management through cookies and works correctly with the Next.js App Router.

## Packages

| Package                 | Version | Purpose                               |
| ----------------------- | ------- | ------------------------------------- |
| `@supabase/supabase-js` | 2.49.4  | Core Supabase client                  |
| `@supabase/ssr`         | 0.6.1   | Cookie-based session handling for SSR |

## File Structure

```
services/auth/
  client.ts       # Browser client for Client Components and Client Actions
  server.ts       # Server client for Server Components and Server Actions

app/
  sign-in/
    page.tsx                        # Public sign-in page
    components/
      sign-in-form.tsx              # Client Component — handles sign-in form submission
  admin/
    page.tsx                        # Protected admin page (Server Component)
    components/
      sign-out-button.tsx           # Client Component — handles sign-out

proxy.ts                            # Middleware — session refresh + route protection
```

## How It Works

### 1. Supabase Clients

Two separate client factories are provided because the browser and server environments have different cookie APIs.

**`services/auth/client.ts`** — used in Client Components:

```ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
  );
}
```

**`services/auth/server.ts`** — used in Server Components and Server Actions. It reads and writes cookies via Next.js `cookies()`. Cookie writes in Server Components are silently ignored (the `try/catch` in `setAll`) because the middleware has already refreshed the session by the time a Server Component runs.

### 2. Middleware — `proxy.ts`

The middleware runs on every request (excluding API routes, `_next` assets, and static files). It:

1. Creates a Supabase server client and calls `supabase.auth.getUser()` to refresh the session cookie.
2. Redirects unauthenticated users from `/admin/*` to `/sign-in`.
3. Redirects authenticated users from `/sign-in` to `/admin`.
4. Delegates all other requests to the next-intl middleware for locale routing.

The middleware is named `proxy` (not the default `middleware`) and exported via a `config` matcher:

```ts
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

### 3. Sign-In Flow

`app/sign-in/components/sign-in-form.tsx` is a Client Component that:

1. Collects email and password from a standard HTML form.
2. Calls `supabase.auth.signInWithPassword({ email, password })`.
3. On success, navigates to `/admin` via `router.push`.
4. On failure, displays the error message from Supabase in a `role="alert"` element.
5. Disables the submit button while the request is in flight (`pending` state).

### 4. Admin Page

`app/admin/page.tsx` is a Server Component that:

1. Fetches the current user with `supabase.auth.getUser()` as a server-side check (the middleware already guards the route, but this adds a defense-in-depth redirect).
2. Queries the `profiles` table for the user's `username` by `user.id`.
3. Falls back to `user.email` if no profile row is found.

### 5. Sign-Out

`app/admin/components/sign-out-button.tsx` is a Client Component that calls `supabase.auth.signOut()` and then redirects to `/sign-in`.

## Environment Variables

| Variable                                       | Description                   |
| ---------------------------------------------- | ----------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`                     | Supabase project URL          |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` | Supabase anonymous/public key |

Copy `.env.example` to `.env.local` and fill in both values from your Supabase project settings under **Project Settings → API**.

## Protected Routes

| Path       | Unauthenticated | Authenticated |
| ---------- | --------------- | ------------- |
| `/admin`   | → `/sign-in`    | Accessible    |
| `/sign-in` | Accessible      | → `/admin`    |
| All others | Accessible      | Accessible    |
