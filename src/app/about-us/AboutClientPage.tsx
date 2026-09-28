"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutPillars from "@/components/about/AboutPillars";
import AboutMilestones from "@/components/about/AboutMilestones";
import AboutCta from "@/components/about/AboutCta";

export default function AboutClientPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Master Narrative & Portrait Hero */}
      <AboutHero />

      {/* 2. Guiding Philosophy & Editorial Quote */}
      <AboutPhilosophy />

      {/* 3. The 4 Pillars of Our Practice */}
      <AboutPillars />

      {/* 4. Three Decades of Mastery & Domains */}
      <AboutMilestones />

      {/* 5. Consultation & WhatsApp CTA Banner */}
      <AboutCta />
    </div>
  );
}
