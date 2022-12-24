import { LiveReload, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import { Head } from '~/components/Head';

export default function App() {
  const { pathname: currentUrl } = useLocation();
  const language = currentUrl.includes('blog') ? 'es' : 'en';

  return (
    <html lang={language}>
      <Head />
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
