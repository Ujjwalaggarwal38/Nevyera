import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// next/font downloads these at BUILD time and serves them from our own origin.
// No runtime request to Google — that latency is real on 4G in India, and it's
// an avoidable third-party dependency on a page selling trustworthiness.
// `opsz` is not optional here. Fraunces is an optical-size variable font: at
// display sizes the browser should pick the tight, refined cut, and at body
// sizes the wide, legible one. Without requesting the axis the font is frozen
// on the text cut — glyphs come out wider, the `ch` unit grows, and the hero
// headline wraps to five lines instead of three, pushing the demo off-screen.
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
