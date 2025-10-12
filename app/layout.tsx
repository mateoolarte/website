import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mateo Olarte - Software Engineer",
  description: "Portfolio of Mateo Olarte, a software engineer.",
};

const font = Reddit_Sans({
  subsets: ["latin"],
});

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
