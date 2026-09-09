"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Compass, FileText, Languages, Clock, CheckCircle2 } from "lucide-react";
import { whyChooseBenefits } from "@/data/consultation";

const iconMap: Record<string, React.ReactNode> = {
  Lock: <Lock className="w-6 h-6 text-[#B68A3A]" />,
  Compass: <Compass className="w-6 h-6 text-[#B68A3A]" />,
  FileText: <FileText className="w-6 h-6 text-[#B68A3A]" />,
  Languages: <Languages className="w-6 h-6 text-[#B68A3A]" />,
  Clock: <Clock className="w-6 h-6 text-[#B68A3A]" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseTelephonic() {
  return (
    <section className="section-spacing bg-[#FFFDF8] border-y border-[#D9CFBD]/50 relative">
      <div className="container-site">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-[#B68A3A] font-semibold mb-3">
            Vedic Guidance From Anywhere
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal mb-5 leading-tight">
            Why Choose a Telephonic Astrology Consultation?
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#716B63] leading-relaxed">
            In today’s fast-paced world, not everyone has the time or access to visit a physical astrologer. Achariya Debdutta bridges this gap with a professional, ethical, and authentic consultation service — available to you from the comfort of your home.
          </p>
        </div>

        {/* Lead subheader */}
        <div className="text-center mb-8">
          <span className="font-serif italic text-lg sm:text-xl text-[#632D3D]">
            Here’s what makes our Call Consultation unique:
          </span>
        </div>

        {/* 5 Unique Hallmark Cards: 3 in Row 1, 2 centered in Row 2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyChooseBenefits.map((benefit, idx) => {
            const spanClass =
              idx < 3
                ? "md:col-span-1 lg:col-span-2"
                : idx === 3
                ? "md:col-span-1 lg:col-span-2 lg:col-start-2"
                : "md:col-span-2 md:max-w-md md:mx-auto w-full lg:col-span-2 lg:max-w-none";

            return (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                className={`p-6 bg-[#F7F3EA]/70 border border-[#D9CFBD] transition-all duration-300 hover:border-[#B68A3A] hover:bg-[#FFFDF8] shadow-xs group ${spanClass}`}
              >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  {iconMap[benefit.iconName] || <CheckCircle2 className="w-6 h-6 text-[#B68A3A]" />}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#24211F] font-normal mb-2 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-[0.84rem] text-[#716B63] leading-relaxed">
                    {benefit.description}
                  </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
