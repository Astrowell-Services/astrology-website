"use client";

import React from "react";
import { motion } from "framer-motion";
import { consultationSteps } from "@/data/consultation";
import { Calendar, FileSignature, CreditCard, PhoneForwarded, Sparkles } from "lucide-react";

const stepIcons: Record<string, React.ReactNode> = {
  "01": <Calendar className="w-6 h-6 text-[#B68A3A]" />,
  "02": <FileSignature className="w-6 h-6 text-[#B68A3A]" />,
  "03": <CreditCard className="w-6 h-6 text-[#B68A3A]" />,
  "04": <PhoneForwarded className="w-6 h-6 text-[#B68A3A]" />,
  "05": <Sparkles className="w-6 h-6 text-[#B68A3A]" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  return (
    <section className="section-spacing bg-[#F7F3EA] relative overflow-hidden">
      <div className="container-site">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <p className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-[#B68A3A] font-semibold mb-2.5">
            Transparent 5-Step Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal mb-3">
            How the Call Consultation Works
          </h2>
          <p className="font-sans text-[0.92rem] sm:text-base text-[#716B63] leading-relaxed">
            From initial booking to actionable Vedic remedies, our process is designed to be effortless and completely stress-free.
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {consultationSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className={`p-7 bg-[#FFFDF8] border border-[#D9CFBD] hover:border-[#B68A3A] transition-all duration-300 shadow-xs flex flex-col justify-between group ${
                idx === 3 ? "lg:col-span-1" : idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs tracking-[0.25em] font-bold text-[#B68A3A] uppercase">
                    Step {step.step}
                  </span>
                  <div className="shrink-0">
                    {stepIcons[step.step]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal mb-3 group-hover:text-[#632D3D] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[0.88rem] text-[#716B63] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress indicator bar at bottom */}
              <div className="mt-6 pt-3 border-t border-[#D9CFBD]/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B68A3A]/40 group-hover:bg-[#B68A3A] transition-colors" />
                <span className="font-sans text-[0.68rem] tracking-wider uppercase text-[#716B63]">
                  Phase {idx + 1} of 5
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
