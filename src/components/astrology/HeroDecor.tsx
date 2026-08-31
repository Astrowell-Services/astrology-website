"use client";

import React from "react";
import CelestialWheel from "./CelestialWheel";
import CelestialParticles from "./CelestialParticles";

interface HeroDecorProps {
  className?: string;
}

export default function HeroDecor({ className = "" }: HeroDecorProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Primary Hero Celestial Wheel — Oversized, positioned behind the portrait on the right */}
      <div className="absolute right-[-15%] sm:right-[-10%] lg:right-[-8%] xl:right-[-2%] top-[4%] sm:top-[2%] lg:top-[6%] translate-y-[-5%] hidden sm:block">
        <CelestialWheel
          size={780}
          opacity={0.16}
          rotate={true}
          speed={150}
          className="max-w-none"
        />
      </div>

      {/* Mobile-optimized single smaller celestial wheel */}
      <div className="absolute right-[-30%] top-[35%] sm:hidden">
        <CelestialWheel
          size={380}
          opacity={0.12}
          rotate={true}
          speed={180}
          className="max-w-none"
        />
      </div>

      {/* Fine constellation connection linework across the background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 hidden md:block"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Subtle Nakshatra coordinate grid lines */}
        <line x1="120" y1="180" x2="340" y2="120" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="3 6" />
        <line x1="340" y1="120" x2="480" y2="260" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="3 6" />
        <line x1="480" y1="260" x2="620" y2="180" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="3 6" />
        
        {/* Star Points */}
        <circle cx="120" cy="180" r="2" fill="#B68A3A" />
        <circle cx="340" cy="120" r="2.5" fill="#B68A3A" />
        <circle cx="480" cy="260" r="2" fill="#B68A3A" />
        <circle cx="620" cy="180" r="3" fill="#B68A3A" />

        {/* Diagonal harmonic lines */}
        <line x1="0" y1="600" x2="400" y2="400" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.4" />
        <line x1="750" y1="750" x2="1100" y2="500" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.4" />
      </svg>

      {/* Scattered diamond stars */}
      <CelestialParticles density="low" />
    </div>
  );
}
