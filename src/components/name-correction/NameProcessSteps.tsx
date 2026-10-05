"use client";

import { FileSpreadsheet, Search, Sparkles, BookOpenCheck } from "lucide-react";

export default function NameProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Chart Analysis",
      icon: FileSpreadsheet,
      collections: [
        "Full Name (current spelling)",
        "Date of Birth",
        "Time & Place of Birth",
      ],
      analyses: [
        "Planetary strengths / weaknesses",
        "Birth Number + Destiny Number",
        "Ruling planet alignment",
        "Nakshatra & Rashi compatibility",
      ],
    },
    {
      step: "02",
      title: "Name Dissection & Evaluation",
      icon: Search,
      calculations: [
        "Name total value (numerological sum)",
        "Missing or excess alphabets",
        "Letter vibrations vs ruling numbers",
        "Astrological compatibility of initials",
      ],
    },
    {
      step: "03",
      title: "Correction Suggestions",
      icon: Sparkles,
      deliverables: [
        "2 to 3 alternate spellings or names",
        "A detailed vibration match report",
        "Planetary and chakra impact of each name",
        "Our expert recommendation for best choice",
      ],
    },
    {
      step: "04",
      title: "Post-Correction Guidance",
      icon: BookOpenCheck,
      guidance: [
        "When and how to implement the new name",
        "Optional affirmations and energization rituals",
        "Remedies to remove past name impact",
        "How to introduce changes officially or spiritually",
      ],
    },
  ];

  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Methodical Methodology
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            How Astro Acharya Debdutta&apos;s Name Correction Process Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-3">
            A precise synthesis of natal chart analysis, acoustic sound evaluation, and customized
            guidance.
          </p>
        </div>

        {/* 4 Detailed Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#F7F3EA]/60 border border-[#D9CFBD] hover:border-[#632D3D]/50 hover:bg-[#F7F3EA] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <Icon
                        size={28}
                        className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-serif text-xl font-normal text-[#B68A3A]">
                      Step {s.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-4">
                    {s.title}
                  </h3>

                  {/* Step 1 specifics */}
                  {s.collections && (
                    <div className="space-y-3 mb-3 text-xs sm:text-[0.85rem] text-[#4A453E]">
                      <div>
                        <strong className="text-[#24211F] block mb-1.5 font-semibold">
                          We collect your:
                        </strong>
                        <ul className="list-disc pl-5 space-y-1 text-[#716B63]">
                          {s.collections.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2">
                        <strong className="text-[#24211F] block mb-1.5 font-semibold">
                          Using this, we analyze:
                        </strong>
                        <ul className="list-disc pl-5 space-y-1 text-[#716B63]">
                          {s.analyses!.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Step 2 specifics */}
                  {s.calculations && (
                    <div className="text-xs sm:text-[0.85rem] text-[#4A453E]">
                      <strong className="text-[#24211F] block mb-2 font-semibold">
                        We calculate:
                      </strong>
                      <ul className="list-disc pl-5 space-y-1.5 text-[#716B63]">
                        {s.calculations.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Step 3 specifics */}
                  {s.deliverables && (
                    <div className="text-xs sm:text-[0.85rem] text-[#4A453E]">
                      <strong className="text-[#24211F] block mb-2 font-semibold">
                        You will receive:
                      </strong>
                      <ul className="list-disc pl-5 space-y-1.5 text-[#716B63]">
                        {s.deliverables.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Step 4 specifics */}
                  {s.guidance && (
                    <div className="text-xs sm:text-[0.85rem] text-[#4A453E]">
                      <strong className="text-[#24211F] block mb-2 font-semibold">
                        We guide you on:
                      </strong>
                      <ul className="list-disc pl-5 space-y-1.5 text-[#716B63]">
                        {s.guidance.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9CFBD]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B68A3A]" />
                  <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#632D3D] font-600">
                    Precision Milestone
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
