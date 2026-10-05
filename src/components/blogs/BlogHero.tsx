"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, BookOpen } from "lucide-react";
import { blogCategories } from "@/data/blogs";

interface BlogHeroProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function BlogHero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
}: BlogHeroProps) {
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
          <BookOpen size={14} className="text-[#B68A3A]" />
          <span className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-600 text-[#632D3D]">
            Vedic Essays &amp; Astronomical Insights
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24211F] leading-tight mb-4"
        >
          The Vedic Astrology Journal
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="font-sans text-[0.95rem] sm:text-base text-[#716B63] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Timeless classical wisdom, planetary transit analyses, and practical remedial guidance
          written to demystify cosmic cycles for conscious everyday living.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="max-w-xl mx-auto mb-8 relative"
        >
          <div className="relative flex items-center">
            <Search
              size={18}
              className="absolute left-4 text-[#A0988A] pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles by topic, planet, or remedy..."
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] pl-11 pr-4 py-3 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D] shadow-xs transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {blogCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#632D3D] text-[#FFFDF8] shadow-xs"
                    : "bg-[#FFFDF8] border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
