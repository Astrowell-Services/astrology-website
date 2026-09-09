import type { Metadata } from "next";
import CoursesClientPage from "./CoursesClientPage";
import { detailedCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Certified Online Courses in Vedic Astrology & Numerology | Achariya Debdutta",
  description:
    "Learn Vedic Astrology, Kundali Matching (Vivah Milan), Lal Kitab Remedies, and Numerology & Name Correction with Achariya Debdutta. Certified live & recorded online courses for beginners and professionals.",
  keywords: [
    "Learn Astrology Kolkata",
    "Vedic Astrology Foundation Course",
    "Kundli and Horoscope Matching in Kolkata",
    "Kundali Milan Course",
    "Lal Kitab remedies course",
    "Numerology course Kolkata",
    "Name correction course",
    "Best astrologer for online consultation",
    "Achariya Debdutta courses",
  ],
  openGraph: {
    title: "Certified Online Courses in Vedic Astrology & Numerology | Achariya Debdutta",
    description:
      "Master Vedic Astrology, Vivah Milan, Lal Kitab, and Numerology with expert mentorship from Achariya Debdutta. Live classes, verified certifications, and complete reference study materials.",
    url: "https://acharyadebdutta.com/courses",
    images: [
      {
        url: "/images/astrologer-sir.jpg",
        width: 1200,
        height: 630,
        alt: "Vedic Astrology Courses with Achariya Debdutta",
      },
    ],
  },
};

export default function CoursesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "Vedic Astrology & Numerology Professional Certification",
    description:
      "Expert-led certification programs in Vedic Astrology Foundations, Kundali Matching, Lal Kitab Remedies, and Name Numerology.",
    provider: {
      "@type": "Person",
      name: "Achariya Debdutta",
      jobTitle: "Master Vedic Astrologer & Mentor",
      image: "https://acharyadebdutta.com/images/astrologer-sir.jpg",
      telephone: "+9198300786134",
    },
    educationalCredentialAwarded: "Certificate of Completion",
    hasCourse: detailedCourses.map((c) => ({
      "@type": "Course",
      name: c.title,
      description: c.description,
      courseCode: c.id,
      timeRequired: c.duration,
      provider: {
        "@type": "Person",
        name: "Achariya Debdutta",
      },
      offers: {
        "@type": "Offer",
        price: c.price?.replace(/[^\d]/g, "") || "4999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesClientPage />
    </>
  );
}
