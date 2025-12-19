import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Mateo Olarte - Software Engineer",
  description: "Portfolio of Mateo Olarte, a software engineer.",
};

const font = Reddit_Sans({
  subsets: ["latin"],
});

interface RootLayoutProperties {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
