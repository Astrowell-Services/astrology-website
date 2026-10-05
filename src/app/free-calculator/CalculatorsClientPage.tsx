"use client";

import CalculatorsHero from "@/components/calculators/CalculatorsHero";
import InteractiveCalculators from "@/components/calculators/InteractiveCalculators";
import CalculatorsCta from "@/components/calculators/CalculatorsCta";

export default function CalculatorsClientPage() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Header Hero */}
      <CalculatorsHero />

      {/* 2. Interactive Calculator Suite (Kundali, Sade Sati, Manglik) */}
      <InteractiveCalculators />

      {/* 3. Call to Action Banner */}
      <CalculatorsCta />
    </div>
  );
}
