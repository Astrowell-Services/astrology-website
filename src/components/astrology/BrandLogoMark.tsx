"use client";

import React from "react";

interface BrandLogoMarkProps {
  size?: number;
  className?: string;
}

export default function BrandLogoMark({ size = 42, className = "" }: BrandLogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Outer octagon & circular borders */}
      <circle cx="50" cy="50" r="46" stroke="#B68A3A" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="50" cy="50" r="42" stroke="#B68A3A" strokeWidth="0.6" strokeDasharray="2 3" strokeOpacity="0.6" />
      
      {/* Interlocking 8-point geometric star / Yantra */}
      <polygon
        points="50,6 62,38 94,50 62,62 50,94 38,62 6,50 38,38"
        stroke="#B68A3A"
        strokeWidth="0.9"
        fill="#B68A3A"
        fillOpacity="0.06"
      />
      <polygon
        points="50,14 75,25 86,50 75,75 50,86 25,75 14,50 25,25"
        stroke="#B68A3A"
        strokeWidth="0.7"
        strokeOpacity="0.5"
      />
      
      {/* 45-deg rotated inner square */}
      <rect
        x="26"
        y="26"
        width="48"
        height="48"
        transform="rotate(45 50 50)"
        stroke="#B68A3A"
        strokeWidth="0.75"
        strokeOpacity="0.7"
      />
      <rect
        x="31"
        y="31"
        width="38"
        height="38"
        stroke="#B68A3A"
        strokeWidth="0.6"
        strokeOpacity="0.5"
      />

      {/* Cardinal cross lines */}
      <line x1="50" y1="8" x2="50" y2="92" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="8" y1="50" x2="92" y2="50" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.4" />
      
      {/* Concentric inner circles and bindu central point */}
      <circle cx="50" cy="50" r="16" stroke="#B68A3A" strokeWidth="0.7" strokeOpacity="0.8" />
      <circle cx="50" cy="50" r="8" stroke="#B68A3A" strokeWidth="0.6" strokeOpacity="0.9" />
      <circle cx="50" cy="50" r="2.5" fill="#B68A3A" />
      
      {/* 8 Cardinal accent dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 36 * Math.cos(rad);
        const y = 50 + 36 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="1" fill="#B68A3A" fillOpacity="0.8" />;
      })}
    </svg>
  );
}
