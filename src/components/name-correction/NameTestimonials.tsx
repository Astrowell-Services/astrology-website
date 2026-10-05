"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  initials: string;
  location: string;
  category: string;
}

const NAME_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "nt-1",
    quote:
      "After correcting my name spelling with Astro Acharya Debdutta's guidance, my confidence skyrocketed and I got my dream corporate leadership position within 6 months. The phonetic shift felt remarkably natural and empowering.",
    author: "Pooja Thakur",
    initials: "PT",
    location: "Noida",
    category: "Personal Name Correction",
  },
  {
    id: "nt-2",
    quote:
      "We tuned our D2C wellness brand name with Acharya ji's Chaldean numerology calculation. From stagnant quarterly revenues to a 300% surge within the first year — the auspicious vibrational resonance was truly palpable.",
    author: "Ravi & Meenal Agarwal",
    initials: "RA",
    location: "Mumbai",
    category: "Startup & Brand Renaming",
  },
  {
    id: "nt-3",
    quote:
      "As an independent filmmaker and author, I struggled with creative blocks and recognition. The slight single-letter adjustment crafted by Acharya ji unlocked unprecedented clarity and festival selections.",
    author: "Neeraj Sinha",
    initials: "NS",
    location: "Kolkata",
    category: "Creative Identity Alignment",
  },
  {
    id: "nt-4",
    quote:
      "We sought Acharya ji's guidance for our baby daughter's naming samskara. He cross-verified her birth Nakshatra, Lagna lord, and Chaldean root 5. Our family was gifted three melodious, spiritually potent names.",
    author: "Ananya & Sourav Banerjee",
    initials: "SB",
    location: "Bengaluru",
    category: "Newborn Baby Naming",
  },
  {
    id: "nt-5",
    quote:
      "Relocating my clinical practice overseas was stalling due to bureaucratic delays. Acharya Debdutta provided an exact signature angle and letter vibration to harmonise Saturn and Mercury. Smooth approvals followed.",
    author: "Dr. Vikramaditya Sen",
    initials: "VS",
    location: "London, UK",
    category: "Career & Signature Redesign",
  },
  {
    id: "nt-6",
    quote:
      "Post-marriage, I was apprehensive about how combining surnames would impact my professional identity. Acharya ji calculated the phonetic frequencies and advised the exact sequence that brought balance and prosperity.",
    author: "Ritwika Mukherjee",
    initials: "RM",
    location: "Kolkata",
    category: "Marriage & Surname Tuning",
  },
];

const AVATAR_COLORS = ["#632D3D", "#8B5D43", "#7C8370", "#4A5260", "#96653E", "#5B3A48"];

export default function NameTestimonials() {
  const [current, setCurrent] = useState(0);
  const total = NAME_TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Visible items: 3 on desktop
  const getVisible = () => {
    return [
      NAME_TESTIMONIALS[current % total],
      NAME_TESTIMONIALS[(current + 1) % total],
      NAME_TESTIMONIALS[(current + 2) % total],
    ];
  };

  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD] relative overflow-hidden">
      <div className="container-site max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
            HAPPY CLIENT TESTIMONIALS
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Real Transformations Through Name Alignment
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-2 italic">
            Hear from seekers who tuned their names and unlocked cosmic harmony
          </p>
        </div>

        {/* Carousel Container with flanking arrows */}
        <div className="relative flex items-center justify-between gap-4">
          {/* Left Arrow button */}
          <button
            onClick={prev}
            className="hidden md:flex items-center justify-center w-10 h-10 border border-[#D9CFBD] bg-[#FFFDF8] text-[#B68A3A] hover:border-[#632D3D] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-all duration-200 shrink-0 cursor-pointer shadow-xs"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 flex-1">
            {getVisible().map((t, i) => (
              <motion.article
                key={`${t.id}-${current}-${i}`}
                className="bg-[#FFFDF8] border border-[#D9CFBD] p-7 sm:p-8 relative flex flex-col justify-between hover:border-[#B68A3A] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] group"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <div>
                  {/* Category tag & 5 Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#F7F3EA] border border-[#D9CFBD] text-[#632D3D]">
                      {t.category}
                    </span>
                    <div className="flex gap-1 text-[#B68A3A]">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} size={12} fill="#B68A3A" stroke="none" />
                      ))}
                    </div>
                  </div>

                  {/* Top Quote Mark */}
                  <span className="font-serif text-3xl text-[#B68A3A] select-none leading-none block mb-2">
                    &ldquo;
                  </span>

                  {/* Review Quote */}
                  <p className="font-sans text-[0.88rem] text-[#24211F] leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>

                {/* Author Avatar & Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#D9CFBD]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-[0.72rem] font-semibold text-[#FFFDF8] shrink-0"
                    style={{
                      backgroundColor:
                        AVATAR_COLORS[(current + i) % AVATAR_COLORS.length],
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-[0.85rem] font-semibold text-[#24211F]">
                      {t.author}
                    </p>
                    <p className="font-sans text-[0.72rem] text-[#716B63]">{t.location}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Arrow button */}
          <button
            onClick={next}
            className="hidden md:flex items-center justify-center w-10 h-10 border border-[#D9CFBD] bg-[#FFFDF8] text-[#B68A3A] hover:border-[#632D3D] hover:text-[#632D3D] hover:bg-[#F7F3EA] transition-all duration-200 shrink-0 cursor-pointer shadow-xs"
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile: single card with navigation */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={NAME_TESTIMONIALS[current].id}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-7 relative flex flex-col justify-between shadow-xs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#F7F3EA] border border-[#D9CFBD] text-[#632D3D]">
                    {NAME_TESTIMONIALS[current].category}
                  </span>
                  <div className="flex gap-1 text-[#B68A3A]">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={12} fill="#B68A3A" stroke="none" />
                    ))}
                  </div>
                </div>

                <span className="font-serif text-3xl text-[#B68A3A] leading-none block mb-2">
                  &ldquo;
                </span>

                <p className="font-sans text-[0.88rem] text-[#24211F] leading-relaxed mb-6 italic">
                  {NAME_TESTIMONIALS[current].quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#D9CFBD]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-[0.72rem] font-semibold text-[#FFFDF8] shrink-0"
                  style={{
                    backgroundColor: AVATAR_COLORS[current % AVATAR_COLORS.length],
                  }}
                >
                  {NAME_TESTIMONIALS[current].initials}
                </div>
                <div>
                  <p className="font-sans text-[0.85rem] font-semibold text-[#24211F]">
                    {NAME_TESTIMONIALS[current].author}
                  </p>
                  <p className="font-sans text-[0.72rem] text-[#716B63]">
                    {NAME_TESTIMONIALS[current].location}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Mobile controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 border border-[#D9CFBD] bg-[#FFFDF8] flex items-center justify-center text-[#716B63] hover:text-[#632D3D] cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {NAME_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 transition-all duration-200 cursor-pointer ${
                    i === current ? "bg-[#632D3D] scale-125" : "bg-[#D9CFBD]"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 border border-[#D9CFBD] bg-[#FFFDF8] flex items-center justify-center text-[#716B63] hover:text-[#632D3D] cursor-pointer"
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
