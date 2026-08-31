"use client";

import React from "react";

interface CelestialParticlesProps {
  density?: "low" | "medium";
  className?: string;
}

export default function CelestialParticles({
  density = "low",
  className = "",
}: CelestialParticlesProps) {
  const points =
    density === "low"
      ? [
          { top: "12%", left: "8%", size: 3, delay: 0 },
          { top: "28%", left: "92%", size: 2.5, delay: 1.5 },
          { top: "68%", left: "4%", size: 2, delay: 0.8 },
          { top: "82%", left: "88%", size: 3, delay: 2.2 },
          { top: "45%", left: "96%", size: 2, delay: 1.2 },
        ]
      : [
          { top: "10%", left: "6%", size: 3, delay: 0 },
          { top: "18%", left: "85%", size: 2.5, delay: 1.2 },
          { top: "35%", left: "12%", size: 2, delay: 0.5 },
          { top: "52%", left: "94%", size: 3, delay: 2.0 },
          { top: "68%", left: "3%", size: 2.5, delay: 1.6 },
          { top: "78%", left: "89%", size: 3, delay: 0.9 },
          { top: "90%", left: "15%", size: 2, delay: 2.4 },
        ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {points.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: p.top,
            left: p.left,
          }}
        >
          {/* 4-point Diamond Star */}
          <svg
            width={p.size * 5}
            height={p.size * 5}
            viewBox="0 0 20 20"
            fill="none"
            className="animate-pulse"
            style={{
              animationDuration: `${3.5 + p.delay}s`,
              animationDelay: `${p.delay}s`,
              opacity: 0.35,
            }}
          >
            <path
              d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2L10 0Z"
              fill="#B68A3A"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
