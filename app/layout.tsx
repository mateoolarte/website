import { Reddit_Sans } from "next/font/google";

const font = Reddit_Sans({
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning className={font.className}>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
