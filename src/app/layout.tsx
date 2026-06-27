import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Auto Repair in Henderson, NV | Newby's Automotive Center",
    template: "%s | Newby's Automotive Center",
  },
  description:
    "Newby's Automotive Center is Henderson's most-reviewed auto repair shop — 4.9★ from 1,400+ verified reviews. ASE-certified, family-owned since 2000. All makes & models. Call (702) 897-9667.",
  keywords: [
    "auto repair Henderson NV",
    "mechanic Henderson 89074",
    "brake repair Henderson",
    "check engine light Henderson",
    "AC repair Henderson NV",
    "American Pacific Dr auto repair",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Auto Repair in Henderson, NV | Newby's Automotive Center",
    description:
      "Henderson's most-reviewed auto repair shop. 4.9★, ASE-certified, family-owned since 2000. All makes & models.",
    images: [{ url: "/photos/mechanic-clipboard.webp", width: 1200, height: 630, alt: site.name }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
