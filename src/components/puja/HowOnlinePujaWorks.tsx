"use client";

import { UserCheck, Clock, Video, Package } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserCheck,
    title: "Sankalpa & Chart Details",
    description:
      "Submit your Full Name, Gotra, Date/Place of Birth, and specific intention (Sankalpa) or life concern to be resolved.",
  },
  {
    step: "02",
    icon: Clock,
    title: "Muhurat Determination",
    description:
      "Acharya Debdutta personally calculates the most auspicious planetary Tithi, Nakshatra, and Muhurat hour for maximum spiritual efficacy.",
  },
  {
    step: "03",
    icon: Video,
    title: "Live Video Participation",
    description:
      "Join the live interactive video stream from anywhere in the world. You and your family actively participate while Sanskrit pandits chant your Sankalpa.",
  },
  {
    step: "04",
    icon: Package,
    title: "Doorstep Consecrated Prasad",
    description:
      "Sacred Prasad, energized Raksha Sutra, consecrated Vibhuti, and copper Yantras are packed safely and couriered to your residential address.",
  },
];

export default function HowOnlinePujaWorks() {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Transparent Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#24211F] font-normal leading-snug">
            How Online Puja Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#716B63] mt-3">
            Bridging timeless Vedic tradition with modern interactive technology. Distance is no barrier
            to receiving divine grace.
          </p>
        </div>

        {/* 4 Cards with Free-Standing Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#FFFDF8] border border-[#D9CFBD] p-6 sm:p-7 flex flex-col justify-between hover:border-[#632D3D]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <Icon
                        size={28}
                        className="text-[#B68A3A] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-serif text-lg text-[#B68A3A]/70 font-normal">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#24211F] font-normal mb-2 leading-snug">
                    {s.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-[0.85rem] text-[#716B63] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9CFBD]/60 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B68A3A]" />
                  <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#632D3D] font-600">
                    Step {s.step}
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
