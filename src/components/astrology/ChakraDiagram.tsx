"use client";

import React from "react";

interface ChakraDiagramProps {
  size?: number | string;
  opacity?: number;
  rotate?: boolean;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const round = (val: number) => Math.round(val * 100) / 100;

export default function ChakraDiagram({
  size = 500,
  opacity = 0.12,
  rotate = true,
  speed = 180,
  className = "",
  style = {},
}: ChakraDiagramProps) {
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

          {/* Outer Boundary Rings */}
          <circle cx="250" cy="250" r="240" stroke="#B68A3A" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="232" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="250" cy="250" r="215" stroke="#B68A3A" strokeWidth="0.6" />
          <circle cx="250" cy="250" r="195" stroke="#B68A3A" strokeWidth="0.5" />

          {/* 24-point Sacred Radial Geometry */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = i * 15;
            const rad = (angle * Math.PI) / 180;
            const x1 = round(250 + 240 * Math.cos(rad));
            const y1 = round(250 + 240 * Math.sin(rad));
            const x2 = round(250 + 195 * Math.cos(rad));
            const y2 = round(250 + 195 * Math.sin(rad));
            return (
              <line
                key={`radial-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#B68A3A"
                strokeWidth={i % 2 === 0 ? 0.8 : 0.4}
                strokeOpacity={0.7}
              />
            );
          })}

          {/* 16-Petaled Sacred Lotus Tier */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const cx = round(250 + 155 * Math.sin(rad));
            const cy = round(250 - 155 * Math.cos(rad));
            return (
              <ellipse
                key={`petal-16-${i}`}
                cx={cx}
                cy={cy}
                rx="14"
                ry="38"
                stroke="#B68A3A"
                strokeWidth="0.5"
                strokeOpacity="0.6"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            );
          })}

          {/* Middle Concentric Circles */}
          <circle cx="250" cy="250" r="145" stroke="#B68A3A" strokeWidth="0.7" />
          <circle cx="250" cy="250" r="120" stroke="#B68A3A" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="95" stroke="#B68A3A" strokeWidth="0.6" />

          {/* Interlocking 8-Point Star Geometry */}
          <polygon
            points="250,155 272,228 345,250 272,272 250,345 228,272 155,250 228,228"
            stroke="#B68A3A"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />
          <polygon
            points="317,183 282,240 317,317 240,282 183,317 218,240 183,183 240,218"
            stroke="#B68A3A"
            strokeWidth="0.7"
            strokeOpacity="0.7"
          />

          {/* Inner 8-Petaled Lotus */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            const cx = 250 + 65 * Math.sin(rad);
            const cy = 250 - 65 * Math.cos(rad);
            return (
              <ellipse
                key={`petal-8-${i}`}
                cx={cx}
                cy={cy}
                rx="10"
                ry="22"
                stroke="#B68A3A"
                strokeWidth="0.6"
                strokeOpacity="0.8"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            );
          })}

          {/* Central Bindu Core */}
          <circle cx="250" cy="250" r="50" stroke="#B68A3A" strokeWidth="0.7" />
          <circle cx="250" cy="250" r="25" stroke="#B68A3A" strokeWidth="0.6" />
          <circle cx="250" cy="250" r="8" stroke="#B68A3A" strokeWidth="0.8" />
          <circle cx="250" cy="250" r="3" fill="#B68A3A" />
        </g>
      </svg>
    </div>
  );
}
