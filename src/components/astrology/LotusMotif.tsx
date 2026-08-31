"use client";

// Fine-line Vedic lotus SVG motif for FAQ and inner page decorations
export function LotusMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Center circle */}
      <circle cx="100" cy="100" r="8" stroke="#B68A3A" strokeWidth="1" />

      {/* Inner petals (8 petals) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 28 * Math.sin(rad);
        const cy = 100 - 28 * Math.cos(rad);
        return (
          <ellipse
            key={`inner-${i}`}
            cx={cx}
            cy={cy}
            rx="6"
            ry="14"
            stroke="#B68A3A"
            strokeWidth="0.7"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}

      {/* Outer petals (8 petals, offset) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8 + 22.5;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 55 * Math.sin(rad);
        const cy = 100 - 55 * Math.cos(rad);
        return (
          <ellipse
            key={`outer-${i}`}
            cx={cx}
            cy={cy}
            rx="7"
            ry="22"
            stroke="#B68A3A"
            strokeWidth="0.6"
            strokeOpacity="0.6"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}

      {/* Outer ring */}
      <circle cx="100" cy="100" r="82" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 4" />

      {/* Small dot accents */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 82 * Math.sin(rad);
        const cy = 100 - 82 * Math.cos(rad);
        return <circle key={`dot-${i}`} cx={cx} cy={cy} r="1.5" fill="#B68A3A" fillOpacity="0.4" />;
      })}
    </svg>
  );
}

