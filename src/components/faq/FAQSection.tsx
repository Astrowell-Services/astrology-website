"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";
import SacredLotus from "@/components/astrology/SacredLotus";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="section-spacing bg-[#F7F3EA] relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 flex items-center justify-center gap-2 translate-x-0 lg:translate-x-[200px]">
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
            FREQUENTLY ASKED QUESTIONS
            <span className="inline-block w-4 h-px bg-[#B68A3A]" />
          </p>
          <h2 id="faq-heading" className="section-title translate-x-0 lg:translate-x-[200px]">
            Answers about our services.
          </h2>
        </motion.div>

        {/* 2-Column Split Layout: Sacred Lotus on Left + Accordion on Right (as in reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column — Sacred Lotus Motif Artwork */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center justify-center select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SacredLotus size={320} opacity={0.65} />
          </motion.div>

          {/* Right Column — FAQ Accordion */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border-t border-[#D9CFBD]">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border-b border-[#D9CFBD]"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-trigger-${faq.id}`}
                    >
                      <span className="font-sans text-[0.95rem] font-medium text-[#24211F] group-hover:text-[#632D3D] transition-colors duration-200">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-[#B68A3A] group-hover:text-[#632D3D] transition-colors">
                        {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-trigger-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-[0.88rem] text-[#716B63] leading-relaxed pb-6 pr-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
