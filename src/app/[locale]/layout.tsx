import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const siteDescription =
  "SWRD is an AI anime research lab and community. We research, create, and share the future of AI-generated anime.";

export const metadata: Metadata = {
  metadataBase: new URL("https://swrd.live"),
  title: {
    default: "swrd.live",
    template: "%s | swrd.live",
  },
  description: siteDescription,
  openGraph: {
    title: "swrd.live",
    description: siteDescription,
    url: "https://swrd.live",
    siteName: "swrd.live",
    images: [{ url: "/images/hero-bg.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "swrd.live",
    description: siteDescription,
    images: ["/images/hero-bg.png"],
  },
  icons: {
    icon: [{ url: "/images/logo.jpg", type: "image/jpeg" }],
    apple: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="min-h-screen bg-bg-primary text-fg-primary">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
