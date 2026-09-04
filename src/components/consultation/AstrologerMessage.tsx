"use client";

import React from "react";
import { motion } from "framer-motion";
import { astrologerQuote } from "@/data/consultation";
import { Quote } from "lucide-react";
import BrandLogoMark from "@/components/astrology/BrandLogoMark";

export default function AstrologerMessage() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F3EA] relative overflow-hidden">
      <div className="container-site max-w-4xl mx-auto">
        <motion.div
          className="relative bg-[#FFFDF8] border-2 border-[#D9CFBD] p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.04)] text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle gold hairline corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B68A3A]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B68A3A]" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#B68A3A]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#B68A3A]" />

          {/* Top Logo / Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[#F7F3EA] border border-[#D9CFBD] flex items-center justify-center">
              <Quote className="w-6 h-6 text-[#B68A3A] rotate-180" />
            </div>
          </div>

          {/* Section Heading */}
          <p className="font-sans text-[0.72rem] tracking-[0.24em] uppercase text-[#B68A3A] font-semibold mb-6">
            A Message from Achariya Debdutta
          </p>

          {/* The Exact Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[2.15rem] text-[#24211F] font-normal leading-[1.35] italic max-w-2xl mx-auto mb-8">
            &ldquo;{astrologerQuote.quote}&rdquo;
          </blockquote>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#D9CFBD]" />
            <BrandLogoMark size={20} />
            <div className="w-12 h-px bg-[#D9CFBD]" />
          </div>

          {/* Author */}
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal">
              {astrologerQuote.author}
            </h4>
            <p className="font-sans text-[0.78rem] tracking-wider uppercase text-[#716B63] mt-1">
              {astrologerQuote.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
