"use client";

import { useState } from "react";
import { reportsList, AstrologicalReport } from "@/data/reports";
import { astrologer } from "@/data/astrologer";
import {
  FileText,
  Clock,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ReportCatalogProps {
  onRequestReport: (report: AstrologicalReport) => void;
}

export default function ReportCatalog({ onRequestReport }: ReportCatalogProps) {
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);

  const toggleQuestions = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="reports-catalog" className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Personalized Research Dossiers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            Choose Your Astrological Report
          </h2>
          <p className="font-sans text-[0.9rem] sm:text-[0.95rem] text-[#716B63] mt-3 leading-relaxed">
            Each dossier is prepared specifically for your birth coordinates by Acharya Debdutta.
            Select a specialized report below to order or inquire.
          </p>
        </div>

        {/* 6 Report Cards Grid (2 columns on tablet/desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reportsList.map((report) => {
            const isQuestionsOpen = expandedFaqId === report.id;

            return (
              <div
                key={report.id}
                className={`bg-[#FFFDF8] border transition-all duration-300 flex flex-col justify-between ${
                  report.isPopular
                    ? "border-[#B68A3A] shadow-md ring-1 ring-[#B68A3A]/20"
                    : "border-[#D9CFBD] hover:border-[#632D3D]/50 hover:shadow-sm"
                }`}
              >
                {/* Card Header & Content */}
                <div className="p-6 sm:p-8">
                  {/* Badges Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                    {report.badge ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#632D3D] text-[#FFFDF8] font-sans text-[0.68rem] uppercase tracking-wider font-semibold">
                        <Sparkles size={12} className="text-[#B68A3A]" />
                        {report.badge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F7F3EA] text-[#632D3D] border border-[#D9CFBD] font-sans text-[0.68rem] uppercase tracking-wider font-semibold">
                        Vedic Dossier
                      </span>
                    )}

                    <div className="flex items-center gap-2.5 text-[0.75rem] font-sans text-[#716B63]">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={13} className="text-[#B68A3A]" />
                        {report.turnaround}
                      </span>
                      <span className="text-[#D9CFBD]">|</span>
                      <span className="inline-flex items-center gap-1">
                        <FileText size={13} className="text-[#B68A3A]" />
                        {report.pageCount}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl sm:text-[1.7rem] text-[#24211F] font-normal leading-snug mb-2">
                    {report.title}
                  </h3>
                  <p className="font-sans text-[0.86rem] text-[#B68A3A] font-500 mb-4">
                    {report.subtitle}
                  </p>

                  <p className="font-sans text-[0.88rem] text-[#716B63] leading-relaxed mb-6">
                    {report.description}
                  </p>

                  {/* Core Highlights */}
                  <div className="mb-6">
                    <p className="font-sans text-[0.72rem] uppercase tracking-wider text-[#24211F] font-bold mb-3">
                      Key Inclusions &amp; Chart Scrutiny
                    </p>
                    <ul className="space-y-2">
                      {report.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[0.84rem] text-[#4A453E]">
                          <CheckCircle2 size={15} className="text-[#B68A3A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Sample Questions */}
                  <div className="border border-[#D9CFBD]/80 bg-[#F7F3EA]/50 p-3.5 mb-6">
                    <button
                      type="button"
                      onClick={() => toggleQuestions(report.id)}
                      className="w-full flex items-center justify-between text-left font-sans text-[0.82rem] font-semibold text-[#632D3D] hover:text-[#4E2230] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle size={15} className="text-[#B68A3A]" />
                        Sample Questions Addressed in this Report
                      </span>
                      {isQuestionsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isQuestionsOpen && (
                      <ul className="mt-3 pt-3 border-t border-[#D9CFBD]/60 space-y-2 animate-fadeIn">
                        {report.sampleQuestions.map((q, idx) => (
                          <li
                            key={idx}
                            className="font-sans text-[0.82rem] text-[#716B63] italic flex items-start gap-2"
                          >
                            <span className="text-[#B68A3A] not-italic font-bold">Q:</span>
                            <span>&ldquo;{q}&rdquo;</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-8 pt-0 border-t border-[#D9CFBD]/40 mt-auto">
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-5">
                    <button
                      type="button"
                      onClick={() => onRequestReport(report)}
                      className="w-full sm:flex-1 py-3 px-4 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Request This Report</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `Pranam Acharya Debdutta, I am interested in ordering the "${report.title}". Please guide me with the details required.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-3 border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] bg-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle size={15} className="text-[#25D366]" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
