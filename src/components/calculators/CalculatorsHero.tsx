"use client";

import { motion } from "framer-motion";
import { Award, Compass, Sparkles } from "lucide-react";

export default function CalculatorsHero() {
  return (
    <section className="bg-[#F7F3EA] border-b border-[#D9CFBD] pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Background ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#B68A3A]/6 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B68A3A]/40 bg-[#FFFDF8] shadow-xs mb-5"
        >
          <Compass size={14} className="text-[#B68A3A]" />
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
            Vedic Mathematical Precision
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] leading-tight mb-4"
        >
          Free Vedic Astrology Calculators
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="font-sans text-[0.95rem] sm:text-base text-[#716B63] max-w-2xl mx-auto leading-relaxed mb-6"
        >
          Compute your Vedic Ascendant (Lagna), Moon Sign (Chandra Rashi), Nakshatra, Shani Sade Sati
          status, and Manglik Dosha using ancient mathematical algorithms.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#716B63]"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF8] border border-[#D9CFBD]">
            <Sparkles size={13} className="text-[#B68A3A]" />
            100% Free &amp; Instant
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF8] border border-[#D9CFBD]">
            <Compass size={13} className="text-[#B68A3A]" />
            Lahiri Ayanamsha (Chitra Paksha)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF8] border border-[#D9CFBD]">
            <Award size={13} className="text-[#B68A3A]" />
            Verified Against Classical Parasara Sutras
          </span>
        </motion.div>
      </div>
    </section>
  );
}
