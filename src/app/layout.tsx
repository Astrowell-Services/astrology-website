import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: {
    default: "Acharya Debdutta | Vedic Astrologer",
    template: "%s | Acharya Debdutta",
  },
  description:
    "Personalised Vedic astrology guidance for relationships, career, finance and life's important decisions by Acharya Debdutta.",
  keywords: [
    "Vedic astrologer",
    "Kundali analysis",
    "Vedic astrology",
    "birth chart",
    "astrology consultation",
    "horoscope",
  ],
  openGraph: {
    type: "website",
    siteName: "Acharya Debdutta",
    title: "Acharya Debdutta | Vedic Astrologer",
    description:
      "Personalised Vedic astrology guidance for relationships, career, finance and life's important decisions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-primary text-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
