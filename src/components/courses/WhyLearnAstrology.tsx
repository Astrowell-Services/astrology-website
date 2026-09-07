"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  HeartHandshake, 
  TrendingUp, 
  Award, 
  Sparkles,
  BookOpen
} from "lucide-react";

const whyLearnPoints = [
  {
    icon: Compass,
    title: "Self & Karmic Clarity",
    text: "Understand your unique personality, planetary karma, and evolutionary life path.",
  },
  {
    icon: TrendingUp,
    title: "Informed Life Choices",
    text: "Make empowered, astrologically grounded decisions about career, marriage, finance, and health.",
  },
  {
    icon: HeartHandshake,
    title: "Guide & Help Others",
    text: "Help friends, family, and seekers find actionable clarity and Vedic remedial solutions.",
  },
  {
    icon: Sparkles,
    title: "Cosmic Spiritual Growth",
    text: "Deepen your consciousness and inner peace by aligning directly with the cosmic planetary rhythm.",
  },
  {
    icon: Award,
    title: "Professional Mastery",
    text: "Become a certified astrologer and build a rewarding career in the spiritual sciences.",
  },
];

export default function WhyLearnAstrology() {
  return (
    <section className="py-14 sm:py-18 bg-[#FFFDF8] border-b border-[#D9CFBD]/60 relative overflow-hidden">
      <div className="container-site">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-[#B68A3A] font-semibold mb-2">
            Spiritual & Practical Mastery
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#24211F] font-normal mb-3">
            Why Learn Astrology?
          </h2>
          <p className="font-sans text-[0.92rem] text-[#716B63] leading-relaxed">
            Gain timeless wisdom to navigate personal destiny and guide others with clarity.
          </p>
        </div>

        {/* 5 Open Floating Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {whyLearnPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex items-start gap-3.5 p-4 rounded-xs hover:bg-[#F7F3EA]/50 transition-colors ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-[#F7F3EA] border border-[#D9CFBD] flex items-center justify-center shrink-0 text-[#B68A3A]">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#24211F] font-normal mb-1">
                    {point.title}
                  </h3>
                  <p className="font-sans text-[0.84rem] text-[#716B63] leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
