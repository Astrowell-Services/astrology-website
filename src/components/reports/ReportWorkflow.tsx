"use client";

import { reportWorkflowSteps } from "@/data/reports";
import { Calendar, FileSpreadsheet, PenTool, Send, ArrowRight } from "lucide-react";

export default function ReportWorkflow() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "PenTool":
        return <PenTool size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
      case "Send":
      default:
        return <Send size={28} className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Seamless &amp; Transparent
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            How Your Report is Crafted &amp; Delivered
          </h2>
          <p className="font-sans text-[0.9rem] sm:text-[0.95rem] text-[#716B63] mt-3 leading-relaxed">
            From the moment you provide your birth coordinates to receiving your tailored PDF,
            every step is handled with dedication and Vedic precision.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reportWorkflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 flex flex-col justify-between relative group hover:border-[#632D3D]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="font-serif text-xl font-normal text-[#B68A3A]">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#24211F] font-normal mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D9CFBD]/50 flex items-center justify-between">
                <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#632D3D] font-600">
                  Step {step.step}
                </span>
                {idx < 3 && (
                  <ArrowRight size={14} className="text-[#B68A3A] hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
