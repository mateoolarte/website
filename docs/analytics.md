# Analytics

This project uses [PostHog](https://posthog.com/) for product analytics and user behavior tracking.

## Packages

Two PostHog packages are installed:

| Package        | Version | Purpose                                        |
| -------------- | ------- | ---------------------------------------------- |
| `posthog-js`   | 1.318.1 | Client-side event tracking (browser)           |
| `posthog-node` | 5.20.0  | Server-side tracking (available, not yet used) |

## How it works

### Initialization

PostHog is initialized via [`instrumentation-client.ts`](../instrumentation-client.ts), a Next.js built-in file that runs automatically on the client side before the app renders. This is the recommended approach in Next.js 15+ for setting up third-party SDKs.

```ts
import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2025-11-30",
});
```

- `NEXT_PUBLIC_POSTHOG_KEY` — the PostHog project API key.
- `NEXT_PUBLIC_POSTHOG_HOST` — the PostHog ingestion host (proxied, see below).
- `defaults: "2025-11-30"` — pins the PostHog configuration defaults to a specific date, ensuring consistent behavior regardless of future SDK changes.

### Request proxying

To avoid having analytics requests blocked by ad blockers and to keep all traffic on the same domain, PostHog requests are proxied through the Next.js app via rewrites defined in [`next.config.js`](../next.config.js):

```js
async rewrites() {
  return [
    {
      source: "/ingest/static/:path*",
      destination: "https://us-assets.i.posthog.com/static/:path*",
    },
    {
      source: "/ingest/:path*",
      destination: "https://us.i.posthog.com/:path*",
    },
  ];
},
skipTrailingSlashRedirect: true,
```

- Requests to `/ingest/static/*` are forwarded to PostHog's CDN for static assets (e.g., the toolbar).
- Requests to `/ingest/*` are forwarded to the PostHog API for event ingestion.
- `skipTrailingSlashRedirect: true` is required because PostHog uses trailing slashes in some API paths that would otherwise be redirected and break the requests.

When using the proxy, `NEXT_PUBLIC_POSTHOG_HOST` should point to the app's own `/ingest` path (e.g., `https://yourdomain.com/ingest`) rather than the PostHog host directly.

## Environment variables

| Variable                   | Description             | Example                    |
| -------------------------- | ----------------------- | -------------------------- |
| `NEXT_PUBLIC_POSTHOG_KEY`  | PostHog project API key | `phc_xxxxxxxxxxxx`         |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingestion host  | `https://us.i.posthog.com` |

Copy `.env.example` to `.env.local` and fill in both values from your PostHog project settings.

## Server-side usage

The `posthog-node` package is installed and ready to use for server-side event tracking (e.g., from API routes or Server Actions). It is not yet used in the codebase. When needed, initialize it as a singleton:

```ts
import { PostHog } from "posthog-node";

const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});
```
