"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, HelpCircle } from "lucide-react";
import { reportFaqs } from "@/data/reports";
import { astrologer } from "@/data/astrologer";

export default function ReportFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Questions &amp; Answers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Astrological Reports FAQ
          </h2>
          <p className="font-sans text-[0.9rem] sm:text-[0.95rem] text-[#716B63] mt-3 leading-relaxed">
            Everything you need to know about our analysis method, delivery times, and post-report clarification.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-[#D9CFBD]">
          {reportFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#D9CFBD]">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 text-left flex items-start justify-between gap-4 group transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#24211F] group-hover:text-[#632D3D] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-[#D9CFBD] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#632D3D] text-[#632D3D] transition-colors">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-6 animate-fadeIn">
                    <p className="font-sans text-[0.9rem] text-[#716B63] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-12 bg-[#F7F3EA] border border-[#D9CFBD] p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-[#B68A3A] shrink-0">
              <HelpCircle size={32} />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#24211F] font-normal">
                Have a specific question before ordering?
              </h4>
              <p className="font-sans text-[0.85rem] text-[#716B63] mt-1">
                Reach out on WhatsApp directly for guidance on which report fits your situation.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              "Pranam Acharya Debdutta, I have a quick question regarding which astrological report is best suited for my current situation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors shrink-0"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
