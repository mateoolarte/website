import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

interface Props {
  children: React.ReactNode;
}

function AdminLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

export default AdminLayout;
