import { createServerClient } from "@supabase/ssr";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

import { routing } from "./services/i18n/routing";

const intlMiddleware = createMiddleware(routing);

function isHomepage(pathname: string) {
  if (pathname === "/") return true;
  const segments = pathname.split("/").filter(Boolean);
  return segments.length === 1 && (routing.locales as readonly string[]).includes(segments[0]);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isHomepage(pathname)) {
    return intlMiddleware(request);
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }
          response = NextResponse.next({ request });
          for (const { name, value, options } of cookiesToSet) {
            response.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (pathname.startsWith("/admin") && !user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (pathname === "/sign-in" && user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Only run i18n middleware on locale-handled paths
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/sign-in")) {
    return intlMiddleware(request);
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next`, `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  // oxlint-disable-next-line unicorn/prefer-string-raw
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
