"use client";

import React from "react";

interface PlanetaryOrbitProps {
  size?: number | string;
  opacity?: number;
  rotate?: boolean;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function PlanetaryOrbit({
  size = 550,
  opacity = 0.12,
  rotate = true,
  speed = 160,
  className = "",
  style = {},
}: PlanetaryOrbitProps) {
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
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g className="origin-center" style={{ transformOrigin: "250px 250px" }}>
          {rotate && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          )}

          {/* Elliptical planetary orbits (intersecting inclined planes) */}
          <ellipse cx="250" cy="250" rx="230" ry="110" stroke="#B68A3A" strokeWidth="0.7" transform="rotate(25 250 250)" />
          <ellipse cx="250" cy="250" rx="230" ry="110" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="3 5" transform="rotate(-35 250 250)" />
          <ellipse cx="250" cy="250" rx="170" ry="85" stroke="#B68A3A" strokeWidth="0.6" transform="rotate(65 250 250)" />
          <ellipse cx="250" cy="250" rx="120" ry="60" stroke="#B68A3A" strokeWidth="0.5" transform="rotate(-15 250 250)" />

          {/* Concentric baseline circles */}
          <circle cx="250" cy="250" r="230" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.4" />
          <circle cx="250" cy="250" r="140" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.5" />
          <circle cx="250" cy="250" r="70" stroke="#B68A3A" strokeWidth="0.6" strokeOpacity="0.6" />
          <circle cx="250" cy="250" r="18" stroke="#B68A3A" strokeWidth="0.8" strokeOpacity="0.8" />
          <circle cx="250" cy="250" r="4" fill="#B68A3A" />

          {/* Planetary nodes and markers along the trajectories */}
          <circle cx="430" cy="330" r="4" fill="#FFFDF8" stroke="#B68A3A" strokeWidth="0.8" />
          <circle cx="70" cy="180" r="3.5" fill="#FFFDF8" stroke="#B68A3A" strokeWidth="0.8" />
          <circle cx="340" cy="120" r="3" fill="#B68A3A" />
          <circle cx="160" cy="380" r="2.5" fill="#B68A3A" />
          <circle cx="250" cy="110" r="3" fill="#FFFDF8" stroke="#B68A3A" strokeWidth="0.8" />

          {/* Fine coordinate axis lines */}
          <line x1="20" y1="250" x2="480" y2="250" stroke="#B68A3A" strokeWidth="0.3" strokeOpacity="0.4" />
          <line x1="250" y1="20" x2="250" y2="480" stroke="#B68A3A" strokeWidth="0.3" strokeOpacity="0.4" />
        </g>
      </svg>
    </div>
  );
}
