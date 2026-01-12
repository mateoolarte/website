import createMiddleware from "next-intl/middleware";

import { routing } from "./services/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next`, `/_vercel`, `/sign-in`, or `/admin`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // eslint-disable-next-line unicorn/prefer-string-raw
  matcher: ["/((?!api|_next|_vercel|sign-in|admin|.*\\..*).*)"],
};
