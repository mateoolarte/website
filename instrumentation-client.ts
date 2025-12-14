import posthog from "posthog-js";

const { NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST } = process.env;

posthog.init(NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2025-11-30",
});
