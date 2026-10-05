"use client";

import { useState } from "react";
import { Sparkles, Calculator, HelpCircle } from "lucide-react";

const CHALDEAN_MAP: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7,
};

const PLANET_DATA: Record<number, { planet: string; traits: string; element: string }> = {
  1: { planet: "Sun (Surya)", traits: "Leadership, vitality, ambition, and institutional authority.", element: "Fire" },
  2: { planet: "Moon (Chandra)", traits: "Intuition, emotional resonance, diplomacy, and creativity.", element: "Water" },
  3: { planet: "Jupiter (Brihaspati)", traits: "Wisdom, expansion, wealth, advisory mastery, and honor.", element: "Ether" },
  4: { planet: "Rahu (North Node)", traits: "Unconventional brilliance, sudden shifts, technology, and disruption.", element: "Air" },
  5: { planet: "Mercury (Budha)", traits: "Commerce, sharp intellect, communication, adaptability, and speed.", element: "Earth" },
  6: { planet: "Venus (Shukra)", traits: "Artistic elegance, luxury, relationships, charisma, and attraction.", element: "Water" },
  7: { planet: "Ketu (South Node)", traits: "Deep research, spiritual insight, mysticism, and detachment.", element: "Fire" },
  8: { planet: "Saturn (Shani)", traits: "Perseverance, karmic discipline, enduring structures, and justice.", element: "Air" },
  9: { planet: "Mars (Mangal)", traits: "Courage, dynamic drive, pioneering energy, and executive power.", element: "Fire" },
};

export default function NameVibrationChecker() {
  const [inputName, setInputName] = useState("");
  const [result, setResult] = useState<any | null>(null);

  const calculateVibration = (nameToAnalyze: string) => {
    const clean = nameToAnalyze.toUpperCase().replace(/[^A-Z]/g, "");
    if (!clean) {
      setResult(null);
      return;
    }

    let compound = 0;
    for (let char of clean) {
      compound += CHALDEAN_MAP[char] || 0;
    }

    let root = compound;
    while (root > 9) {
      root = String(root)
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);
    }

    const info = PLANET_DATA[root] || PLANET_DATA[1];

    setResult({
      name: nameToAnalyze.trim(),
      cleanLength: clean.length,
      compound,
      root,
      planet: info.planet,
      traits: info.traits,
      element: info.element,
    });
  };

  return (
    <section className="bg-[#FFFDF8] py-14 sm:py-20 border-b border-[#D9CFBD]">
      <div className="container-site max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-2">
            Instant Numerology Tool
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#24211F] font-normal leading-snug">
            Check Your Name Vibration (Chaldean)
          </h2>
          <p className="font-sans text-sm text-[#716B63] mt-2">
            Enter your current first or full name below to discover its compound number and ruling
            planetary energy.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-[#F7F3EA]/70 border border-[#D9CFBD] p-6 sm:p-8 max-w-xl mx-auto mb-8 shadow-xs">
          <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-2">
            Enter Name or Brand
          </label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateVibration(inputName);
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="type your name here"
              className="flex-1 bg-[#FFFDF8] border border-[#D9CFBD] p-3 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator size={15} />
              <span>Analyze</span>
            </button>
          </form>
        </div>

        {/* Result Card */}
        {result && (
          <div className="bg-[#FFFDF8] border border-[#B68A3A] p-6 sm:p-8 max-w-xl mx-auto animate-fadeIn shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-[#D9CFBD] mb-5">
              <div>
                <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#632D3D] font-bold">
                  Phonetic Analysis Result
                </span>
                <h3 className="font-serif text-2xl text-[#24211F] font-normal">
                  &ldquo;{result.name}&rdquo;
                </h3>
              </div>
              <div className="text-right">
                <span className="font-sans text-xs text-[#716B63] block">Compound Number</span>
                <span className="font-serif text-2xl text-[#B68A3A] font-bold">
                  {result.compound} / {result.root}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                  Governing Planet
                </span>
                <span className="font-serif text-lg text-[#632D3D] font-semibold">
                  {result.planet}
                </span>
              </div>

              <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                  Elemental Vibration
                </span>
                <span className="font-serif text-lg text-[#24211F] font-normal">
                  {result.element}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#4A453E] leading-relaxed mb-6">
              <strong>Core Energetic Signature:</strong> {result.traits}
            </p>

            <div className="pt-4 border-t border-[#D9CFBD] text-xs text-[#716B63] flex items-start gap-2">
              <HelpCircle size={15} className="text-[#B68A3A] shrink-0 mt-0.5" />
              <span>
                To know if this number is in harmony or friction with your birth date (Mulank) and
                Lagna lord, a certified review by Acharya Debdutta is recommended.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
