import { Links, Meta } from 'remix';

export function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Georama:wght@500;700;900&display=swap"
        rel="stylesheet"
      />
      {typeof document === 'undefined' ? '__STYLES__' : null}
    </head>
  );
}
