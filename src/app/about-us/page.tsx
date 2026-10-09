import type { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";
import { astrologer } from "@/data/astrologer";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Acharya Debdutta | Vedic Astrologer & Mentor | Kolkata",
  description:
    "Learn about Acharya Debdutta, an accomplished Vedic astrologer with over 28 years of dedicated practice in the Parasara and Jaimini classical traditions. Empowering seekers worldwide through ethical, fear-free Jyotish.",
  keywords: [
    "About Acharya Debdutta",
    "Best Vedic Astrologer in Kolkata",
    "Astrologer Debdutta biography",
    "Vedic astrology mentor Kolkata",
    "Parasara and Jaimini astrology",
    "Famous astrologer West Bengal",
    "Ethical Vedic astrology consultation",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "About Acharya Debdutta | Master Vedic Astrologer",
    description:
      "28+ Years of Vedic practice, 10,000+ consultations, and an unyielding commitment to honest, fear-free astrological guidance.",
    url: `${SITE_URL}/about-us`,
    images: [
      {
        url: "/images/sir1.jpeg",
        width: 1316,
        height: 1195,
        alt: "Acharya Debdutta - Master Vedic Astrologer",
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: astrologer.name,
      jobTitle: "Master Vedic Astrologer & Mentor",
      description: astrologer.fullBio,
      image: `${SITE_URL}/images/sir1.jpeg`,
      telephone: astrologer.contact.phone,
      email: astrologer.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Vedic Astrology",
        "Kundali Milan",
        "Lal Kitab Remedies",
        "Chaldean Numerology",
        "Gemstone Prescription",
        "Vastu Shastra",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClientPage />
    </>
  );
}
