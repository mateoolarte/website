import { Reddit_Sans } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { routing } from "../../services/i18n/routing";
import "@/styles/globals.css";

interface MetadataProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MetadataProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "maintainance",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

const font = Reddit_Sans({
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

async function RootLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={font.className}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
