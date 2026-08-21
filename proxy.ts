import createMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";

import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next`, `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // oxlint-disable-next-line unicorn/prefer-string-raw
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
