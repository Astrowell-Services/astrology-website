"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  FileText, 
  MessageSquare, 
  PenTool, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Users 
} from "lucide-react";
import CelestialParticles from "@/components/astrology/CelestialParticles";

const inclusions = [
  {
    icon: Video,
    title: "Video Lessons",
    subtitle: "(Live + Recorded)",
    description:
      "Attend interactive live classes with Achariya Debdutta, with lifetime access to high-definition recordings for revision anytime.",
  },
  {
    icon: FileText,
    title: "PDF Notes & Reference Charts",
    subtitle: "Comprehensive Handouts",
    description:
      "Receive structured reference charts, foundational glossaries, and printable calculation worksheets for every module.",
  },
  {
    icon: MessageSquare,
    title: "Live Q&A Sessions",
    subtitle: "Direct Doubt Clearing",
    description:
      "Dedicated interactive Q&A segments after each session to review real horoscopes and ensure complete conceptual clarity.",
  },
  {
    icon: PenTool,
    title: "Homework & Chart Practice",
    subtitle: "Practical Hands-on Training",
    description:
      "Practical case study assignments where you decode actual birth charts, analyze combinations, and receive personalized feedback.",
  },
];

const highlights = [
  { icon: Award, text: "Course Completion Certificate" },
  { icon: Users, text: "Private Student Community" },
  { icon: ShieldCheck, text: "Vedic Tradition Authenticity" },
];

export default function CourseInclusions() {
  return (
    <section className="section-spacing bg-[#F7F3EA] relative overflow-hidden border-t border-b border-[#D9CFBD]">
      <CelestialParticles density="low" />

      <div className="container-site relative z-10">
        
        {/* Main Card Container with Double Border Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFDF8] border-2 border-[#D9CFBD] p-8 sm:p-12 lg:p-16 max-w-6xl mx-auto relative shadow-sm"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#B68A3A]" />
          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#B68A3A]" />
          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#B68A3A]" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#B68A3A]" />

          {/* Card Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F3EA] border border-[#D9CFBD] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B68A3A]" />
              <span className="font-sans text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B68A3A]">
                Comprehensive Learning Ecosystem
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211F] font-normal mb-3">
              What’s Included in Every Course?
            </h2>

            <p className="font-sans text-[0.92rem] sm:text-base text-[#716B63] leading-relaxed">
              Every curriculum is structured for deep comprehension, offering a complete set of study materials and ongoing mentorship.
            </p>
          </div>

          {/* 4 Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F7F3EA]/70 border border-[#D9CFBD] p-6 flex flex-col justify-between hover:border-[#B68A3A] transition-all duration-300 group"
                >
                  <div>
                    {/* Icon container */}
                    <div className="mb-5 text-[#B68A3A] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal mb-1 group-hover:text-[#632D3D] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-[0.75rem] uppercase tracking-wider text-[#B68A3A] font-semibold mb-3">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-[0.86rem] text-[#716B63] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="mt-6 pt-3 border-t border-[#D9CFBD]/60 flex items-center justify-between text-[#716B63]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider">
                      Module Feature 0{index + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B68A3A]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner with Verification Highlights */}
          <div className="mt-10 pt-8 border-t border-[#D9CFBD] flex flex-wrap items-center justify-around gap-4 text-center">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-[#24211F] font-sans text-xs sm:text-sm font-medium">
                  <Icon className="w-4 h-4 text-[#B68A3A]" />
                  <span>{h.text}</span>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
