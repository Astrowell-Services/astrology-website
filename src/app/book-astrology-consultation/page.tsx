import type { Metadata } from "next";
import ConsultationClientPage from "./ConsultationClientPage";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Call Consultation With Achariya Debdutta | Vedic Astrology Phone Guidance",
  description:
    "Welcome to the Call Consultation service by Achariya Debdutta — where ancient Vedic wisdom meets modern convenience. Talk directly with expert astrologers for career, marriage, health, and spiritual direction.",
  keywords: [
    "Astrology call consultation",
    "Achariya Debdutta",
    "Vedic astrology phone guidance",
    "Kundali matching call",
    "Career astrology consultation",
    "Marriage astrology phone consultation",
    "Vedic remedies",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Call Consultation With Achariya Debdutta | Vedic Astrologer",
    description:
      "Direct 1-on-1 telephonic Vedic astrology consultation with Achariya Debdutta. 100% Confidential, accurate predictions & personalized remedies.",
    url: `${SITE_URL}/book-astrology-consultation`,
    images: [
      {
        url: "/images/sir1.jpeg",
        width: 1316,
        height: 1195,
        alt: "Call Consultation With Achariya Debdutta",
      },
    ],
  },
};

export default function BookConsultationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Telephonic Astrology Consultation with Achariya Debdutta",
    description:
      "Vedic astrology telephonic consultation covering career, marriage, health, finance, and spiritual growth.",
    provider: {
      "@type": "Person",
      name: "Achariya Debdutta",
      jobTitle: "Vedic Astrologer",
      image: `${SITE_URL}/images/sir1.jpeg`,
      telephone: "+9198300786134",
    },
    serviceType: "Astrology Consultation",
    areaServed: ["India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Call Consultation Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basic Plan Call Consultation",
            description: "1 Personal Question, 25 Minutes Live Consultation",
          },
          price: "499",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Plan Call Consultation",
            description: "2-3 Life Areas, 40 Minutes In-depth Horoscope Reading",
          },
          price: "999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Plan Call Consultation",
            description: "Full Life Analysis, 60 Minutes + 48hr WhatsApp Follow-up",
          },
          price: "1999",
          priceCurrency: "INR",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsultationClientPage />
    </>
  );
}
