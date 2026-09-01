"use client";

import React from "react";

interface CelestialWheelProps {
  size?: number | string;
  opacity?: number;
  rotate?: boolean;
  speed?: number; // seconds for full 360 rotation
  className?: string;
  style?: React.CSSProperties;
}

const round = (val: number) => Math.round(val * 100) / 100;

export default function CelestialWheel({
  size = 750,
  opacity = 0.14,
  rotate = true,
  speed = 140,
  className = "",
  style = {},
}: CelestialWheelProps) {
  const zodiacSymbols = [
    { code: "I", name: "Mesha", angle: 0 },
    { code: "II", name: "Vrishabha", angle: 30 },
    { code: "III", name: "Mithuna", angle: 60 },
    { code: "IV", name: "Karka", angle: 90 },
    { code: "V", name: "Simha", angle: 120 },
    { code: "VI", name: "Kanya", angle: 150 },
    { code: "VII", name: "Tula", angle: 180 },
    { code: "VIII", name: "Vrishchika", angle: 210 },
    { code: "IX", name: "Dhanu", angle: 240 },
    { code: "X", name: "Makara", angle: 270 },
    { code: "XI", name: "Kumbha", angle: 300 },
    { code: "XII", name: "Meena", angle: 330 },
  ];

  const planetaryGlyphs = [
    { label: "Su", angle: 15, r: 180 }, // Surya (Sun)
    { label: "Mo", angle: 75, r: 180 }, // Chandra (Moon)
    { label: "Ma", angle: 135, r: 180 }, // Mangal (Mars)
    { label: "Me", angle: 195, r: 180 }, // Budha (Mercury)
    { label: "Ju", angle: 255, r: 180 }, // Guru (Jupiter)
    { label: "Ve", angle: 315, r: 180 }, // Shukra (Venus)
    { label: "Sa", angle: 45, r: 130 }, // Shani (Saturn)
    { label: "Ra", angle: 165, r: 130 }, // Rahu
    { label: "Ke", angle: 285, r: 130 }, // Ketu
  ];

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* ================= LAYER 1: OUTER DEGREE RING (Slow Clockwise) ================= */}
        <g className="origin-center" style={{ transformOrigin: "300px 300px" }}>
          {rotate && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 300 300"
              to="360 300 300"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          )}

          {/* Outer Boundary Circles */}
          <circle cx="300" cy="300" r="290" stroke="#B68A3A" strokeWidth="0.8" />
          <circle cx="300" cy="300" r="284" stroke="#B68A3A" strokeWidth="0.4" strokeDasharray="1 3" />
          <circle cx="300" cy="300" r="268" stroke="#B68A3A" strokeWidth="0.6" />
          <circle cx="300" cy="300" r="252" stroke="#B68A3A" strokeWidth="0.5" />

          {/* 360 Degree Ticks (Every 5 & 10 degrees) */}
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const isMajor = angle % 30 === 0;
            const isMed = angle % 10 === 0;
            const r1 = 284;
            const r2 = isMajor ? 268 : isMed ? 275 : 280;
            const rad = (angle * Math.PI) / 180;
            const x1 = round(300 + r1 * Math.cos(rad));
            const y1 = round(300 + r1 * Math.sin(rad));
            const x2 = round(300 + r2 * Math.cos(rad));
            const y2 = round(300 + r2 * Math.sin(rad));
            return (
              <line
                key={`tick-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#B68A3A"
                strokeWidth={isMajor ? 0.8 : 0.4}
                strokeOpacity={isMajor ? 0.9 : 0.6}
              />
            );
          })}

          {/* 12 Zodiac Radial Sectors */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const rad = (angle * Math.PI) / 180;
            const x1 = round(300 + 252 * Math.cos(rad));
            const y1 = round(300 + 252 * Math.sin(rad));
            const x2 = round(300 + 130 * Math.cos(rad));
            const y2 = round(300 + 130 * Math.sin(rad));
            return (
              <line
                key={`sector-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#B68A3A"
                strokeWidth="0.4"
                strokeDasharray="2 4"
                strokeOpacity="0.5"
              />
            );
          })}
        </g>

        {/* ================= LAYER 2: ZODIAC & PLANETARY RING (Slow Counter-Clockwise) ================= */}
        <g className="origin-center" style={{ transformOrigin: "300px 300px" }}>
          {rotate && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 300 300"
              to="0 300 300"
              dur={`${speed * 1.3}s`}
              repeatCount="indefinite"
            />
          )}

          {/* Zodiac Glyphs Placed in the Band (r=260) */}
          {zodiacSymbols.map((z) => {
            const rad = ((z.angle + 15) * Math.PI) / 180;
            const x = round(300 + 260 * Math.cos(rad));
            const y = round(300 + 260 * Math.sin(rad));
            return (
              <text
                key={z.name}
                x={x}
                y={y}
                fill="#B68A3A"
                fontSize="10"
                fontFamily="serif"
                textAnchor="middle"
                dominantBaseline="central"
                opacity="0.85"
                transform={`rotate(${z.angle + 105}, ${x}, ${y})`}
              >
                {z.code}
              </text>
            );
          })}

          {/* Middle Concentric Orbit Lines */}
          <circle cx="300" cy="300" r="210" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.4" />
          <circle cx="300" cy="300" r="180" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.6" strokeDasharray="3 5" />
          <circle cx="300" cy="300" r="150" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.4" />

          {/* Planetary Glyphs on Orbit Bands */}
          {planetaryGlyphs.map((p, i) => {
            const rad = (p.angle * Math.PI) / 180;
            const x = round(300 + p.r * Math.cos(rad));
            const y = round(300 + p.r * Math.sin(rad));
            return (
              <g key={`planet-${i}`}>
                <circle cx={x} cy={y} r="8" fill="#FFFDF8" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.6" />
                <text
                  x={x}
                  y={y}
                  fill="#B68A3A"
                  fontSize="8"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontWeight="bold"
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </g>

        {/* ================= LAYER 3: INNER VEDIC KUNDLI GEOMETRY (Static / Anchored) ================= */}
        <g>
          {/* Central 12-House Vedic Chart Diamond Geometry */}
          <circle cx="300" cy="300" r="130" stroke="#B68A3A" strokeWidth="0.7" strokeOpacity="0.8" />
          
          {/* Diamond rotated 45 deg */}
          <rect
            x="208"
            y="208"
            width="184"
            height="184"
            transform="rotate(45 300 300)"
            stroke="#B68A3A"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />

          {/* Inner Square */}
          <rect
            x="222"
            y="222"
            width="156"
            height="156"
            stroke="#B68A3A"
            strokeWidth="0.6"
            strokeOpacity="0.6"
          />

          {/* Cross lines connecting 4 cardinal apexes */}
          <line x1="300" y1="170" x2="300" y2="430" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="170" y1="300" x2="430" y2="300" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.5" />

          {/* Diagonal Corner-to-Corner Cross */}
          <line x1="208" y1="208" x2="392" y2="392" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.5" />
          <line x1="392" y1="208" x2="208" y2="392" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.5" />

          {/* Central Bindu (Cosmic Origin) */}
          <circle cx="300" cy="300" r="54" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="2 3" strokeOpacity="0.6" />
          <circle cx="300" cy="300" r="28" stroke="#B68A3A" strokeWidth="0.6" strokeOpacity="0.7" />
          <circle cx="300" cy="300" r="10" stroke="#B68A3A" strokeWidth="0.8" strokeOpacity="0.9" />
          <circle cx="300" cy="300" r="3" fill="#B68A3A" />

          {/* 4 Cardinal Diamond Stars */}
          {[0, 90, 180, 270].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 300 + 130 * Math.cos(rad);
            const y = 300 + 130 * Math.sin(rad);
            return (
              <polygon
                key={`diamond-star-${i}`}
                points={`${x},${y - 4} ${x + 4},${y} ${x},${y + 4} ${x - 4},${y}`}
                fill="#B68A3A"
                fillOpacity="0.8"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
