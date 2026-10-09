import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/siteConfig";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Acharya Debdutta | Vedic Astrologer — Personalised Guidance",
    template: "%s | Acharya Debdutta",
  },
  description:
    "Personalised Vedic astrology guidance for relationships, career, finance and life's important decisions by Acharya Debdutta with 28+ years of classical expertise.",
  keywords: [
    "Best Vedic Astrologer in Kolkata",
    "Kundali analysis",
    "Vedic astrology consultation",
    "Horoscope predictions Kolkata",
    "Lal Kitab remedies",
    "Name correction numerology",
    "Online Vedic puja services",
    "Astrology courses Kolkata",
    "Acharya Debdutta",
  ],
  alternates: {
    canonical: "./",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Acharya Debdutta | Vedic Astrology",
    title: "Acharya Debdutta | Vedic Astrologer — Personalised Guidance",
    description:
      "Classical Vedic Jyotish guidance for career, marriage, finance, and life decisions with 28+ years of dedicated practice.",
    images: [
      {
        url: "/images/benevolent-guru.png",
        width: 1086,
        height: 1448,
        alt: "Acharya Debdutta - Master Vedic Astrologer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acharya Debdutta | Vedic Astrologer",
    description:
      "Classical Vedic Jyotish guidance for relationships, career, and life decisions.",
    images: ["/images/benevolent-guru.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-primary text-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
