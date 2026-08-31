"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import CelestialParticles from "@/components/astrology/CelestialParticles";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Visible items: 3 on desktop
  const getVisible = () => {
    return [
      testimonials[current % total],
      testimonials[(current + 1) % total],
      testimonials[(current + 2) % total],
    ];
  };

  return (
    <section
      id="testimonials"
      className="section-spacing bg-[#FFFDF8] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <CelestialParticles density="low" />

      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
            HAPPY CLIENTS
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </p>
          <h2 id="testimonials-heading" className="section-title">
            Trusted by thousands of seekers.
          </h2>
        </motion.div>

        {/* Carousel Container with flanking arrows */}
        <div className="relative flex items-center justify-between gap-4">
          {/* Left Arrow button */}
          <button
            onClick={prev}
            className="hidden md:flex items-center justify-center w-10 h-10 border border-[#D9CFBD] text-[#B68A3A] hover:border-[#632D3D] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-all duration-200 shrink-0"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 flex-1">
            {getVisible().map((t, i) => (
              <motion.article
                key={`${t.id}-${current}-${i}`}
                className="bg-[#FFFDF8] border border-[#D9CFBD] p-8 relative flex flex-col justify-between hover:border-[#B68A3A] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <div>
                  {/* Top Quote Icon & 5 Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl text-[#B68A3A] select-none leading-none">&ldquo;</span>
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} size={13} fill="#B68A3A" stroke="none" />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="font-sans text-[0.88rem] text-[#24211F] leading-relaxed mb-6">
                    {t.review}
                  </p>
                </div>

                {/* Client Avatar & Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#D9CFBD]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-[0.72rem] font-semibold text-[#FFFDF8] shrink-0"
                    style={{ backgroundColor: i === 0 ? "#632D3D" : i === 1 ? "#8B5D43" : "#7C8370" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-[0.85rem] font-semibold text-[#24211F]">{t.name}</p>
                    <p className="font-sans text-[0.72rem] text-[#716B63]">{t.city}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Arrow button */}
          <button
            onClick={next}
            className="hidden md:flex items-center justify-center w-10 h-10 border border-[#D9CFBD] text-[#B68A3A] hover:border-[#632D3D] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-all duration-200 shrink-0"
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile: single card with navigation */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={testimonials[current].id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-7 relative flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl text-[#B68A3A] leading-none">&ldquo;</span>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, si) => (
                      <Star key={si} size={12} fill="#B68A3A" stroke="none" />
                    ))}
                  </div>
                </div>
                <p className="font-sans text-[0.88rem] text-[#24211F] leading-relaxed mb-6">
                  {testimonials[current].review}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[#D9CFBD]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-sans text-[0.7rem] font-semibold text-[#FFFDF8]"
                  style={{ backgroundColor: "#632D3D" }}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="font-sans text-[0.82rem] font-semibold text-[#24211F]">{testimonials[current].name}</p>
                  <p className="font-sans text-[0.72rem] text-[#716B63]">{testimonials[current].city}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Mobile controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 border border-[#D9CFBD] flex items-center justify-center text-[#716B63]"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 transition-all duration-200 ${
                    i === current ? "bg-[#632D3D] scale-125" : "bg-[#D9CFBD]"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 border border-[#D9CFBD] flex items-center justify-center text-[#716B63]"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
