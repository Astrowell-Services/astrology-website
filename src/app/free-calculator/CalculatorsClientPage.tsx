"use client";

import { Compass, Moon, Sun } from "lucide-react";
import ComingSoonGate, { HighlightItem } from "@/components/common/ComingSoonGate";
import CalculatorsHero from "@/components/calculators/CalculatorsHero";
import InteractiveCalculators from "@/components/calculators/InteractiveCalculators";
import CalculatorsCta from "@/components/calculators/CalculatorsCta";

const calculatorHighlights: HighlightItem[] = [
  {
    icon: <Compass className="w-7 h-7 text-[#B68A3A]" />,
    title: "Vedic Birth Kundali (D1 & D9)",
    description:
      "Exact mathematical planetary positions, ascendant degrees, and divisional chart placements based on authentic Lahiri Ayanamsha.",
    badge: "Testing",
  },
  {
    icon: <Moon className="w-7 h-7 text-[#B68A3A]" />,
    title: "Shani Sade Sati Tracker",
    description:
      "Comprehensive 3-phase Saturn transit analysis detecting peak impact windows and classical Vedic mitigation measures.",
    badge: "Testing",
  },
  {
    icon: <Sun className="w-7 h-7 text-[#B68A3A]" />,
    title: "Manglik Dosha Evaluation",
    description:
      "Accurate Kuja dosha checking with verified classical cancellation clauses (Kendra & Trikona planetary checks).",
    badge: "Testing",
  },
];

export default function CalculatorsClientPage() {
  return (
    <ComingSoonGate
      serviceKey="calculators"
      title="Free Calculators — Coming Soon"
      badgeText="Under Sacred Calibration"
      subtitle="Our automated Vedic birth chart (Kundali), Shani Sade Sati phase tracker, and Manglik Dosha calculators are coming soon. For more information or immediate personalized chart analysis, please call our consultant directly."
      expectedDate="Phase 2 Release • In Final Testing"
      highlights={calculatorHighlights}
    >
      <div className="bg-[#F7F3EA] text-[#24211F]">
        {/* 1. Header Hero */}
        <CalculatorsHero />

        {/* 2. Interactive Calculator Suite (Kundali, Sade Sati, Manglik) */}
        <InteractiveCalculators />

        {/* 3. Call to Action Banner */}
        <CalculatorsCta />
      </div>
    </ComingSoonGate>
  );
}
