"use client";

import React from "react";

interface ZodiacIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export function ZodiacAries({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M12 21V9M12 9C10.5 5.5 6.5 4.5 4 7C2 9 3 12 5.5 12C7.5 12 8.5 10 8.5 9M12 9C13.5 5.5 17.5 4.5 20 7C22 9 21 12 18.5 12C16.5 12 15.5 10 15.5 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ZodiacTaurus({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="12" cy="14" r="6" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M6 5C7.5 7.5 9.5 8.5 12 8.5C14.5 8.5 16.5 7.5 18 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacGemini({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 4C8 6.5 16 6.5 20 4M4 20C8 17.5 16 17.5 20 20M8 5.5V18.5M16 5.5V18.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacCancer({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="8" cy="15" r="3.5" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M11.5 15C11.5 10 16 8 20 8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <circle cx="16" cy="9" r="3.5" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M12.5 9C12.5 14 8 16 4 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacLeo({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="7" cy="15" r="3" stroke={color} strokeWidth={strokeWidth}/>
      <path d="M9.5 13.5C11 11 11.5 5 15.5 5C18.5 5 19 8 17 11.5C15 15 15.5 18 19 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacVirgo({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 5V15C4 17 5.5 18.5 7.5 18.5C9.5 18.5 11 17 11 15V5M11 15C11 17 12.5 18.5 14.5 18.5C16.5 18.5 18 17 18 15V5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M18 13C19.5 11.5 21 12.5 21 14.5C21 17.5 17 20 14 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M15 17L18.5 20.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacLibra({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 19H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M4 14H8C8.5 10.5 11 8.5 12 8.5C13 8.5 15.5 10.5 16 14H20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 11.5C9.2 9.5 10.5 8 12 8C13.5 8 14.8 9.5 15.5 11.5" stroke={color} strokeWidth={strokeWidth}/>
    </svg>
  );
}

export function ZodiacScorpio({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M3 5V15C3 17 4.5 18.5 6.5 18.5C8.5 18.5 10 17 10 15V5M10 15C10 17 11.5 18.5 13.5 18.5C15.5 18.5 17 17 17 15V5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M17 14C18 16 19.5 17.5 21.5 17.5H22M22 17.5L19.5 15M22 17.5L19.5 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ZodiacSagittarius({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M5 19L19 5M19 5H12M19 5V12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12L12 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacCapricorn({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 6L8 15L12 7" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7C14 7 15.5 8.5 15.5 10.5C15.5 14 13.5 16 16.5 18C18.5 19.5 20.5 17.5 19.5 15.5C18.5 13.5 16.5 14 15.5 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export function ZodiacAquarius({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M3 8L6.5 5L10 8L13.5 5L17 8L20.5 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 16L6.5 13L10 16L13.5 13L17 16L20.5 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ZodiacPisces({ className = "", size = 24, strokeWidth = 1.6, color = "currentColor" }: ZodiacIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M5 4C8 8.5 8 15.5 5 20M19 4C16 8.5 16 15.5 19 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
      <path d="M3 12H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    </svg>
  );
}

export const zodiacIconMap: Record<string, (props: ZodiacIconProps) => React.JSX.Element> = {
  aries: ZodiacAries,
  taurus: ZodiacTaurus,
  gemini: ZodiacGemini,
  cancer: ZodiacCancer,
  leo: ZodiacLeo,
  virgo: ZodiacVirgo,
  libra: ZodiacLibra,
  scorpio: ZodiacScorpio,
  sagittarius: ZodiacSagittarius,
  capricorn: ZodiacCapricorn,
  aquarius: ZodiacAquarius,
  pisces: ZodiacPisces,
};
