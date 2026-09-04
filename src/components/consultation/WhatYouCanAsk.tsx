"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Heart, Coins, Users, Sun, HeartPulse, HelpCircle } from "lucide-react";
import { whatYouCanAskCategories } from "@/data/consultation";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6 text-[#B68A3A]" />,
  Heart: <Heart className="w-6 h-6 text-[#B68A3A]" />,
  Coins: <Coins className="w-6 h-6 text-[#B68A3A]" />,
  Users: <Users className="w-6 h-6 text-[#B68A3A]" />,
  Sun: <Sun className="w-6 h-6 text-[#B68A3A]" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-[#B68A3A]" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatYouCanAsk() {
  return (
    <section className="section-spacing bg-[#F7F3EA] relative">
      <div className="container-site">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
          <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-[#B68A3A] font-semibold mb-2.5">
            Life Dimensions & Guidance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal mb-3">
            What You Can Ask During the Call
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#632D3D]">
            You can ask questions related to
          </p>
        </div>

        {/* 6 Category Query Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whatYouCanAskCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="p-7 bg-[#FFFDF8] border border-[#D9CFBD] hover:border-[#B68A3A] transition-all duration-300 shadow-xs flex flex-col justify-between group"
            >
              <div>
                {/* Header with Lucide SVG icon */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D9CFBD]/50">
                  <div className="shrink-0">
                    {iconMap[category.iconName] || <HelpCircle className="w-6 h-6 text-[#B68A3A]" />}
                  </div>
                  <h3 className="font-serif text-xl sm:text-[1.35rem] font-normal text-[#24211F] group-hover:text-[#632D3D] transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Sample questions list */}
                <ul className="space-y-2.5 mb-2">
                  {category.questions.map((q, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B68A3A] mt-2 shrink-0 opacity-70" />
                      <span className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                        {q}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subdued footer tag */}
              <div className="mt-5 pt-3 border-t border-[#D9CFBD]/40 flex items-center justify-between">
                <span className="font-sans text-[0.68rem] tracking-wider uppercase text-[#B68A3A] font-semibold">
                  Personalized Astrological Insight
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
