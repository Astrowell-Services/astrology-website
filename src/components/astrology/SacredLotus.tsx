"use client";

import React from "react";

interface SacredLotusProps {
  size?: number | string;
  opacity?: number;
  className?: string;
}

export default function SacredLotus({
  size = 320,
  opacity = 0.35,
  className = "",
}: SacredLotusProps) {
  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
        opacity,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Soft Background Aura Ring */}
        <circle cx="150" cy="160" r="120" stroke="#B68A3A" strokeWidth="0.4" strokeDasharray="3 4" strokeOpacity="0.4" />
        <circle cx="150" cy="160" r="135" stroke="#B68A3A" strokeWidth="0.3" strokeOpacity="0.3" />

        {/* Central Core Stamen & Seed Pod */}
        <circle cx="150" cy="160" r="14" stroke="#B68A3A" strokeWidth="0.8" />
        <circle cx="150" cy="160" r="6" fill="#B68A3A" fillOpacity="0.3" stroke="#B68A3A" strokeWidth="0.6" />
        
        {/* Radiating Micro Stamen Rays */}
        {Array.from({ length: 16 }).map((_, i) => {
          const rad = (i * 22.5 * Math.PI) / 180;
          const x1 = 150 + 14 * Math.cos(rad);
          const y1 = 160 + 14 * Math.sin(rad);
          const x2 = 150 + 24 * Math.cos(rad);
          const y2 = 160 + 24 * Math.sin(rad);
          return (
            <g key={`stamen-${i}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.8" />
              <circle cx={x2} cy={y2} r="1" fill="#B68A3A" fillOpacity="0.8" />
            </g>
          );
        })}

        {/* INNER PETALS TIER (Tier 1) */}
        {/* Center Vertical Petal */}
        <path
          d="M150 160 C140 125 142 90 150 70 C158 90 160 125 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.9"
          fill="#FFFDF8"
          fillOpacity="0.25"
        />
        {/* Left & Right Inner Petals */}
        <path
          d="M150 160 C132 135 120 105 130 82 C142 100 148 130 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.8"
          fill="#FFFDF8"
          fillOpacity="0.2"
        />
        <path
          d="M150 160 C168 135 180 105 170 82 C158 100 152 130 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.8"
          fill="#FFFDF8"
          fillOpacity="0.2"
        />

        {/* MIDDLE PETALS TIER (Tier 2 - Flared) */}
        <path
          d="M150 160 C120 145 98 120 105 95 C125 110 140 135 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.75"
          fill="#FFFDF8"
          fillOpacity="0.15"
        />
        <path
          d="M150 160 C180 145 202 120 195 95 C175 110 160 135 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.75"
          fill="#FFFDF8"
          fillOpacity="0.15"
        />

        {/* OUTER SPREAD PETALS (Tier 3) */}
        <path
          d="M150 160 C110 160 75 145 78 120 C105 132 135 150 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.7"
          strokeOpacity="0.9"
        />
        <path
          d="M150 160 C190 160 225 145 222 120 C195 132 165 150 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.7"
          strokeOpacity="0.9"
        />

        {/* BASE CRADLE PETALS (Bottom Support) */}
        <path
          d="M150 160 C115 175 75 185 65 160 C90 160 125 160 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.65"
          strokeOpacity="0.8"
        />
        <path
          d="M150 160 C185 175 225 185 235 160 C210 160 175 160 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.65"
          strokeOpacity="0.8"
        />
        <path
          d="M150 160 C130 195 110 215 150 225 C190 215 170 195 150 160 Z"
          stroke="#B68A3A"
          strokeWidth="0.65"
          strokeOpacity="0.7"
        />

        {/* Delicate Vein Linework on Petals */}
        <path d="M150 70 L150 145" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.6" />
        <path d="M130 82 C135 105 142 130 148 150" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.5" />
        <path d="M170 82 C165 105 158 130 152 150" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.5" />
        <path d="M105 95 C118 115 132 138 145 154" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.5" />
        <path d="M195 95 C182 115 168 138 155 154" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.5" />

        {/* Small Golden Dew Drop / Diamond at Petal Tips */}
        <polygon points="150,64 153,68 150,72 147,68" fill="#B68A3A" />
        <polygon points="130,76 133,80 130,84 127,80" fill="#B68A3A" />
        <polygon points="170,76 173,80 170,84 167,80" fill="#B68A3A" />
        <polygon points="105,89 108,93 105,97 102,93" fill="#B68A3A" />
        <polygon points="195,89 198,93 195,97 192,93" fill="#B68A3A" />
      </svg>
    </div>
  );
}
