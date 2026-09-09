"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  Video
} from "lucide-react";
import CelestialParticles from "@/components/astrology/CelestialParticles";
import CelestialWheel from "@/components/astrology/CelestialWheel";

interface CourseHeroProps {
  onExploreClick: () => void;
  onRequestSyllabusClick: () => void;
}

export default function CourseHero({
  onExploreClick,
  onRequestSyllabusClick,
}: CourseHeroProps) {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-[#F7F3EA] border-b border-[#D9CFBD]">
      {/* Background Celestial Ambience */}
      <CelestialParticles density="low" />

      {/* Rotating Celestial Wheel for subtle spiritual depth */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 pointer-events-none opacity-15 hidden lg:block overflow-hidden">
        <CelestialWheel size={650} rotate={true} speed={140} />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-3 sm:mb-4"
          >
            <span className="w-5 sm:w-8 h-px bg-[#B68A3A]/70" />
            <span className="font-sans text-[0.68rem] sm:text-[0.74rem] tracking-[0.22em] uppercase font-bold text-[#B68A3A]">
              Certified Vedic Astrology & Numerology
            </span>
            <span className="w-5 sm:w-8 h-px bg-[#B68A3A]/70" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#24211F] font-normal leading-[1.15] mb-3 sm:mb-5 tracking-tight"
          >
            Courses
          </motion.h1>

          {/* Core Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif italic text-base sm:text-xl lg:text-2xl text-[#632D3D] leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto"
          >
            &ldquo;Astrology is not superstition. It is the ancient science of understanding the influence of celestial bodies on human lives.&rdquo;
          </motion.blockquote>

          {/* Crisp 1-line description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[0.88rem] sm:text-base text-[#716B63] leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 font-normal"
          >
            Learn authentic Vedic Jyotish, Kundali Milan, Lal Kitab remedies, and Numerology with step-by-step guidance from Achariya Debdutta.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-10"
          >
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-7 py-3 bg-[#632D3D] hover:bg-[#4E222F] text-[#FFFDF8] font-sans text-xs tracking-[0.18em] uppercase font-bold transition-all duration-200 shadow-xs flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#B68A3A] group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onRequestSyllabusClick}
              className="w-full sm:w-auto px-7 py-3 bg-[#FFFDF8] border border-[#B68A3A] hover:bg-[#B68A3A]/10 hover:border-[#632D3D] text-[#24211F] font-sans text-xs tracking-[0.18em] uppercase font-bold transition-all duration-200 cursor-pointer"
            >
              Inquire & Enroll
            </button>
          </motion.div>

          {/* Minimal 3-Point Trust Pill Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 pt-6 border-t border-[#D9CFBD]/60 text-xs font-sans text-[#716B63]"
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#B68A3A]" />
              <span className="font-medium text-[#4A453F]">Certified Curriculum</span>
            </div>
            <div className="hidden sm:inline text-[#D9CFBD]">•</div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[#B68A3A]" />
              <span className="font-medium text-[#4A453F]">Live & Recorded Lessons</span>
            </div>
            <div className="hidden sm:inline text-[#D9CFBD]">•</div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B68A3A]" />
              <span className="font-medium text-[#4A453F]">Authentic Vedic Lineage</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
