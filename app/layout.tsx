import { Reddit_Sans } from "next/font/google";

import "./globals.css";

const font = Reddit_Sans();

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
