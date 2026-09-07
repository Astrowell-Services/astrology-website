"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, GraduationCap, Quote } from "lucide-react";
import { courseTestimonials } from "@/data/courses";
import CelestialParticles from "@/components/astrology/CelestialParticles";

export default function CourseTestimonials() {
  const [current, setCurrent] = useState(0);
  const total = courseTestimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Visible items: 2 or 3 on larger screens
  const getVisible = () => {
    return [
      courseTestimonials[current % total],
      courseTestimonials[(current + 1) % total],
    ];
  };

  return (
    <section id="student-reviews" className="section-spacing bg-[#FFFDF8] relative overflow-hidden">
      <CelestialParticles density="low" />

      <div className="container-site relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F7F3EA] border border-[#D9CFBD] mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#B68A3A]" />
            <span className="font-sans text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-[#B68A3A]">
              Student Experiences & Transformations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211F] font-normal mb-3">
            Hear from Our Students
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#716B63] leading-relaxed max-w-xl mx-auto">
            Discover how our comprehensive courses have helped aspiring astrologers and seekers master Vedic astrology.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Flanking Arrow Navigation for Desktop */}
          <div className="flex items-center justify-between gap-6">
            
            <button
              onClick={prev}
              className="hidden sm:flex items-center justify-center w-11 h-11 border border-[#D9CFBD] bg-[#FFFDF8] text-[#B68A3A] hover:border-[#632D3D] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-all duration-200 shrink-0 cursor-pointer shadow-xs"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Desktop: 2 large featured cards */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-6 flex-1">
              {getVisible().map((t, i) => (
                <motion.article
                  key={`${t.id}-${current}-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="bg-[#FFFDF8] border border-[#D9CFBD] p-8 relative flex flex-col justify-between hover:border-[#B68A3A] transition-all duration-300 shadow-xs group"
                >
                  <div>
                    {/* Top Meta: Course Badge & Star Rating */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-block px-2.5 py-0.5 bg-[#F7F3EA] border border-[#D9CFBD] font-sans text-[0.72rem] tracking-wider uppercase font-semibold text-[#B68A3A]">
                        {t.courseTitle}
                      </span>
                      <div className="flex gap-1 shrink-0">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={si} size={13} fill="#B68A3A" stroke="none" />
                        ))}
                      </div>
                    </div>

                    {/* Review Quote */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-[#B68A3A]/20 absolute -top-2 -left-2 -z-0" />
                      <p className="font-sans text-[0.92rem] text-[#24211F] leading-relaxed relative z-10 italic">
                        &ldquo;{t.review}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Student Info Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#D9CFBD]">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-[0.75rem] font-semibold text-[#FFFDF8] shrink-0"
                        style={{ backgroundColor: i === 0 ? "#632D3D" : "#8B5D43" }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-sans text-[0.88rem] font-semibold text-[#24211F]">
                          {t.name}
                        </p>
                        <p className="font-sans text-[0.72rem] text-[#716B63]">
                          {t.city}
                        </p>
                      </div>
                    </div>

                    {t.badge && (
                      <span className="font-sans text-[0.68rem] tracking-wider uppercase font-medium text-[#716B63] bg-[#F7F3EA] px-2 py-0.5 border border-[#D9CFBD]/60">
                        {t.badge}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            <button
              onClick={next}
              className="hidden sm:flex items-center justify-center w-11 h-11 border border-[#D9CFBD] bg-[#FFFDF8] text-[#B68A3A] hover:border-[#632D3D] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-all duration-200 shrink-0 cursor-pointer shadow-xs"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile View: Single Animated Card */}
          <div className="sm:hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={courseTestimonials[current].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 bg-[#F7F3EA] border border-[#D9CFBD] font-sans text-[0.68rem] tracking-wider uppercase font-semibold text-[#B68A3A]">
                      {courseTestimonials[current].courseTitle}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: courseTestimonials[current].rating }).map((_, si) => (
                        <Star key={si} size={12} fill="#B68A3A" stroke="none" />
                      ))}
                    </div>
                  </div>

                  <p className="font-sans text-[0.88rem] text-[#24211F] leading-relaxed mb-6 italic">
                    &ldquo;{courseTestimonials[current].review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#D9CFBD]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-sans text-[0.72rem] font-semibold text-[#FFFDF8]"
                      style={{ backgroundColor: "#632D3D" }}
                    >
                      {courseTestimonials[current].initials}
                    </div>
                    <div>
                      <p className="font-sans text-[0.84rem] font-semibold text-[#24211F]">
                        {courseTestimonials[current].name}
                      </p>
                      <p className="font-sans text-[0.72rem] text-[#716B63]">
                        {courseTestimonials[current].city}
                      </p>
                    </div>
                  </div>

                  {courseTestimonials[current].badge && (
                    <span className="font-sans text-[0.65rem] uppercase text-[#716B63] bg-[#F7F3EA] px-2 py-0.5 border border-[#D9CFBD]">
                      {courseTestimonials[current].badge}
                    </span>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Mobile Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 border border-[#D9CFBD] flex items-center justify-center text-[#716B63] bg-[#FFFDF8]"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {courseTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 transition-all duration-200 ${
                      i === current ? "bg-[#632D3D] scale-125" : "bg-[#D9CFBD]"
                    }`}
                    aria-label={`Student testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 border border-[#D9CFBD] flex items-center justify-center text-[#716B63] bg-[#FFFDF8]"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
