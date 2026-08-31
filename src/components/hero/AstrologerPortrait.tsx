"use client";

import React from "react";
import Image from "next/image";

interface AstrologerPortraitProps {
  className?: string;
}

export default function AstrologerPortrait({ className = "" }: AstrologerPortraitProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative gold hairline corner brackets */}
      <div className="absolute -inset-3 pointer-events-none z-20 hidden md:block" aria-hidden="true">
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#B68A3A] opacity-60" />
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#B68A3A] opacity-60" />
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#B68A3A] opacity-60" />
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#B68A3A] opacity-60" />
      </div>

      {/* Main portrait container */}
      <div
        className="relative overflow-hidden bg-[#E8DEC8] shadow-[0_12px_40px_rgba(36,33,31,0.08)] border border-[#D9CFBD]"
        style={{
          aspectRatio: "3/4",
          maxHeight: "calc(100vh - 120px)",
        }}
      >
        {/* Real photo */}
        <Image
          src="/images/astrologer-sir.jpg"
          alt="Acharya Debdutta — Vedic Astrologer"
          fill
          priority
          className="object-cover object-top z-10 transition-transform duration-700 hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 45vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Editorial Illustrated Vedic Astrologer vector portrait fallback */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#EEE5D3] via-[#E2D5BE] to-[#CFC0A4] z-0 select-none">
          {/* Subtle top Vedic halo */}
          <div className="w-48 h-48 rounded-full border border-[#B68A3A]/30 mt-4 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-[#B68A3A]/40 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#B68A3A]/10 flex items-center justify-center">
                <span className="font-serif text-3xl text-[#632D3D] font-normal">ॐ</span>
              </div>
            </div>
          </div>

          {/* Astrologer Silhouette & Title */}
          <div className="text-center pb-8 z-10">
            <p className="font-serif text-2xl lg:text-3xl text-[#24211F] tracking-wide mb-1">
              Acharya Debdutta
            </p>
            <p className="font-sans text-[0.62rem] tracking-[0.24em] uppercase text-[#B68A3A] font-semibold mb-2">
              Vedic Astrologer
            </p>
            <p className="font-sans text-[0.72rem] text-[#716B63] italic max-w-xs mx-auto">
              Parasara &amp; Jaimini Tradition
            </p>
          </div>

          {/* Bottom decorative border */}
          <div className="w-full flex items-center justify-center gap-2 pb-2">
            <div className="w-12 h-px bg-[#B68A3A]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#B68A3A]/60" />
            <div className="w-12 h-px bg-[#B68A3A]/40" />
          </div>
        </div>

        {/* Soft bottom vignette for seamless blending */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(247, 243, 234, 0.6) 0%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
