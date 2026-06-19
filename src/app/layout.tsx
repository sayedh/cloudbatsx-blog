// src/app/layout.tsx
import { Footer } from "@/app/_components/site";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import cn from "classnames";
import { ThemeScript } from "./_components/theme-switcher";
import { SiteNav } from "./_components/site-nav";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

// Brand fonts — siblings of cloudbats.com (Sora display + DM Sans body)
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — cloud, networks & practical AI, written down`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "The cloudbats engineering blog: real builds that helped real teams — cloud, networks, and practical AI, with the code to back it up.",
  openGraph: {
    title: `${SITE_NAME} — cloud, networks & practical AI, written down`,
    description:
      "Real builds that helped real teams — cloud, networks, and practical AI, with the code to back it up.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — cloud, networks & practical AI, written down`,
    description:
      "Real builds that helped real teams — cloud, networks, and practical AI, with the code to back it up.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(sora.variable, dmSans.variable, jetbrainsMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#06b6d4"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </head>
      <body className="font-body antialiased">
        <ThemeScript />
        <div className="min-h-screen flex flex-col">
          <SiteNav />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
