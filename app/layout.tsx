import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Self-hosted at build time; no runtime request to Google.
// Keep `opsz` — without it the hero headline silently wraps to five lines.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nevyera.com"),
  title: {
    default: "Nevyera — The software your business runs on",
    template: "%s · Nevyera",
  },
  description:
    "Lead management and inventory software for Indian businesses, plus custom software when what you need doesn't exist yet.",
  openGraph: {
    type: "website",
    siteName: "Nevyera",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
