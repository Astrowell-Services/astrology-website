"use client";

// Reusable inline SVG celestial decorations used throughout the site.
// All use low-opacity gold/brown linework and are designed to disappear
// or simplify gracefully on small screens.

export function KundliGeometry({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="200" cy="200" r="190" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.35" />
      {/* Inner circle */}
      <circle cx="200" cy="200" r="140" stroke="#B68A3A" strokeWidth="0.5" strokeOpacity="0.25" />
      {/* Square rotated 45deg (diamond) */}
      <rect
        x="60"
        y="60"
        width="280"
        height="280"
        stroke="#B68A3A"
        strokeWidth="0.5"
        strokeOpacity="0.2"
        transform="rotate(45 200 200)"
      />
      {/* Cross lines */}
      <line x1="200" y1="10" x2="200" y2="390" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.15" />
      <line x1="10" y1="200" x2="390" y2="200" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.15" />
      {/* Diagonal lines */}
      <line x1="60" y1="60" x2="340" y2="340" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.12" />
      <line x1="340" y1="60" x2="60" y2="340" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.12" />
      {/* Small dot at center */}
      <circle cx="200" cy="200" r="3" fill="#B68A3A" fillOpacity="0.3" />
      {/* Orbital ring 1 */}
      <ellipse cx="200" cy="200" rx="170" ry="60" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.1" transform="rotate(30 200 200)" />
      {/* Orbital ring 2 */}
      <ellipse cx="200" cy="200" rx="170" ry="60" stroke="#B68A3A" strokeWidth="0.4" strokeOpacity="0.1" transform="rotate(-30 200 200)" />
      {/* Small planet dots */}
      <circle cx="200" cy="30" r="2.5" fill="#B68A3A" fillOpacity="0.4" />
      <circle cx="370" cy="200" r="2" fill="#B68A3A" fillOpacity="0.3" />
      <circle cx="90" cy="110" r="1.5" fill="#B68A3A" fillOpacity="0.3" />
    </svg>
  );
}

export function AstrologyDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-[#D9CFBD]" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
          fill="#B68A3A"
          fillOpacity="0.6"
        />
      </svg>
      <div className="flex-1 h-px bg-[#D9CFBD]" />
    </div>
  );
}

export function PlanetSymbolSun({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="6" stroke="#B68A3A" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2" fill="#B68A3A" fillOpacity="0.5" />
      <line x1="16" y1="3" x2="16" y2="7" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="25" x2="16" y2="29" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="16" x2="7" y2="16" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="16" x2="29" y2="16" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7.1" y1="7.1" x2="9.9" y2="9.9" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22.1" y1="22.1" x2="24.9" y2="24.9" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24.9" y1="7.1" x2="22.1" y2="9.9" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9.9" y1="22.1" x2="7.1" y2="24.9" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlanetSymbolMoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M22 16C22 21.5228 17.5228 26 12 26C9.84843 26 7.86026 25.2991 6.26953 24.1152C7.61768 24.6856 9.09912 25 10.6563 25C17.2836 25 22.6563 19.6274 22.6563 13C22.6563 11.4429 22.343 9.9613 21.7724 8.61316C22.5715 10.2039 23.0 11.9882 23.0 13.8C23.0 14.57 22.955 15.295 22.878 15.982C22.6294 16.0 22.3148 16.0 22 16Z"
        fill="#B68A3A"
        fillOpacity="0.2"
      />
      <path
        d="M20 16C20 21.5228 15.5228 26 10 26C6.13401 26 2.77087 23.7615 1 20.5C2.5 21 4.14 21.3 5.9 21.3C12.5273 21.3 17.9 15.9274 17.9 9.3C17.9 7.5 17.4 5.85 16.6 4.4C18.8 6.26 20.3 9 20.3 12C20.3 13.35 20.0 14.65 19.5 15.8"
        stroke="#B68A3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlanetSymbolSaturn({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="12" r="7" stroke="#B68A3A" strokeWidth="1.5" />
      <line x1="16" y1="19" x2="16" y2="29" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="24" x2="21" y2="24" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="16" cy="12" rx="11" ry="4" stroke="#B68A3A" strokeWidth="0.75" strokeOpacity="0.5" transform="rotate(-15 16 12)" />
    </svg>
  );
}

export function PlanetSymbolVenus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="12" r="8" stroke="#B68A3A" strokeWidth="1.5" />
      <line x1="16" y1="20" x2="16" y2="28" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="24" x2="21" y2="24" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlanetSymbolNodes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 10C6 10 8 6 12 6C16 6 16 10 20 10C24 10 26 6 26 6"
        stroke="#B68A3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 22C6 22 8 26 12 26C16 26 16 22 20 22C24 22 26 26 26 26"
        stroke="#B68A3A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="16" y1="10" x2="16" y2="22" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function BookSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="5" width="24" height="22" rx="1" stroke="#B68A3A" strokeWidth="1.5" />
      <line x1="12" y1="5" x2="12" y2="27" stroke="#B68A3A" strokeWidth="1.5" />
      <line x1="16" y1="11" x2="24" y2="11" stroke="#B68A3A" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="16" y1="15" x2="24" y2="15" stroke="#B68A3A" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="16" y1="19" x2="22" y2="19" stroke="#B68A3A" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

export function AlphabetSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M8 24L16 8L24 24" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10.5" y1="19" x2="21.5" y2="19" stroke="#B68A3A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="8" r="2" fill="#B68A3A" fillOpacity="0.3" />
    </svg>
  );
}

export function KundliSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" stroke="#B68A3A" strokeWidth="1.2" />
      <line x1="4" y1="4" x2="28" y2="28" stroke="#B68A3A" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="28" y1="4" x2="4" y2="28" stroke="#B68A3A" strokeWidth="0.8" strokeOpacity="0.5" />
      <circle cx="16" cy="16" r="4" stroke="#B68A3A" strokeWidth="1" />
    </svg>
  );
}

export function StarDiamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 0L11.8 8.2L20 10L11.8 11.8L10 20L8.2 11.8L0 10L8.2 8.2L10 0Z"
        fill="#B68A3A"
        fillOpacity="0.5"
      />
    </svg>
  );
}

