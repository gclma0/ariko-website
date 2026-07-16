import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scrapbangla.com"),
  title: {
    default: "ARIKO International | Leading Mill Scale Exporter from Bangladesh",
    template: "%s | ARIKO International",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  description:
    "ARIKO International — Bangladesh's premier exporter of mill scale, zinc oxide, PET flakes, and jute products. 4th largest ship scraper. Part of East Queen Group since 1968.",
  keywords: [
    "mill scale export Bangladesh",
    "ship breaking Bangladesh",
    "ARIKO International",
    "East Queen Group",
    "Bangladesh steel scrap",
    "PET flakes export",
    "zinc oxide Bangladesh",
    "jute products export",
    "auto spare parts Bangladesh",
    "HKS Japan Bangladesh",
  ],
  authors: [{ name: "ARIKO International" }],
  creator: "ARIKO International",
  publisher: "ARIKO International",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scrapbangla.com",
    siteName: "ARIKO International",
    title: "ARIKO International | Leading Mill Scale Exporter from Bangladesh",
    description:
      "Bangladesh's premier exporter of mill scale, zinc oxide, PET flakes, and jute products. 4th largest ship scraper. Est. 1968.",
    images: [
      {
        url: "/hero-port.jpg",
        width: 1200,
        height: 630,
        alt: "ARIKO International — Bangladesh Trading Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARIKO International | Leading Mill Scale Exporter from Bangladesh",
    description:
      "Bangladesh's premier exporter of mill scale, zinc oxide, PET flakes, and jute products.",
    images: ["/hero-port.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} id="top">
      <body>
        <Header />
        <main>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
