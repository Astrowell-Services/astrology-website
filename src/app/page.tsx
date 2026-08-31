import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import CalculatorsSection from "@/components/calculators/CalculatorsSection";
import CoursesSection from "@/components/courses/CoursesSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import YouTubeSection from "@/components/youtube/YouTubeSection";

export const metadata: Metadata = {
  title: "Acharya Debdutta | Vedic Astrologer — Personalised Guidance",
  description:
    "Personalised Vedic astrology guidance for relationships, career, finance and life\u2019s important decisions. Book a consultation with Acharya Debdutta.",
  openGraph: {
    title: "Acharya Debdutta | Vedic Astrologer",
    description:
      "Personalised Vedic astrology guidance for relationships, career, finance and life\u2019s important decisions.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CalculatorsSection />
      <CoursesSection />
      <TestimonialsSection />
      <FAQSection />
      <YouTubeSection />
    </>
  );
}

