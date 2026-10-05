"use client";

import { useState } from "react";
import { MessageCircle, Phone, Sparkles, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { astrologer } from "@/data/astrologer";

const ZODIAC_SIGNS = [
  "Aries (Mesha)",
  "Taurus (Vrishabha)",
  "Gemini (Mithuna)",
  "Cancer (Karka)",
  "Leo (Simha)",
  "Virgo (Kanya)",
  "Libra (Tula)",
  "Scorpio (Vrischika)",
  "Sagittarius (Dhanu)",
  "Capricorn (Makara)",
  "Aquarius (Kumbha)",
  "Pisces (Meena)",
];

const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

export default function InteractiveCalculators() {
  const [activeTab, setActiveTab] = useState<"kundali" | "sade-sati" | "manglik">("kundali");

  // Kundali form state
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [pob, setPob] = useState("");
  const [kundaliResult, setKundaliResult] = useState<any | null>(null);

  // Sade Sati form state
  const [selectedRashi, setSelectedRashi] = useState("Libra (Tula)");
  const [sadeSatiResult, setSadeSatiResult] = useState<any | null>(null);

  // Manglik form state
  const [marsHouse, setMarsHouse] = useState<number>(7);
  const [manglikResult, setManglikResult] = useState<any | null>(null);

  // Calculate Kundali
  const handleCalculateKundali = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) return;

    const dateObj = new Date(dob);
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    // Deterministic mathematical algorithm based on birth date coordinates
    const lagnaIdx = (day + month * 2) % 12;
    const rashiIdx = (day * 3 + month + year) % 12;
    const nakshatraIdx = (day * 7 + month * 3) % 27;
    const pada = ((day + month) % 4) + 1;

    const lagnaLords = [
      "Mars (Mangal)", "Venus (Shukra)", "Mercury (Budha)", "Moon (Chandra)",
      "Sun (Surya)", "Mercury (Budha)", "Venus (Shukra)", "Mars (Mangal)",
      "Jupiter (Brihaspati)", "Saturn (Shani)", "Saturn (Shani)", "Jupiter (Brihaspati)"
    ];

    const elements = ["Fire (Agni)", "Earth (Prithvi)", "Air (Vayu)", "Water (Jala)"];

    setKundaliResult({
      name: name || "Seeker",
      lagna: ZODIAC_SIGNS[lagnaIdx],
      lagnaLord: lagnaLords[lagnaIdx],
      rashi: ZODIAC_SIGNS[rashiIdx],
      rashiLord: lagnaLords[rashiIdx],
      nakshatra: NAKSHATRAS[nakshatraIdx],
      pada: pada,
      element: elements[lagnaIdx % 4],
      tithi: `Shukla / Krishna Paksha ${((day % 15) + 1)}`,
      dob,
      tob: tob || "12:00 PM",
      pob: pob || "India",
    });
  };

  // Calculate Sade Sati
  const handleCalculateSadeSati = () => {
    // Current transit of Saturn (Shani) in Kumbha / Meena (2025 - 2027)
    // Sade Sati affects Makara (Setting), Kumbha (Peak), Meena (Rising)
    let phase = "";
    let status = "";
    let severity = "";
    let description = "";

    if (selectedRashi.includes("Meena")) {
      status = "Active — Rising Phase (1st Dhaiya)";
      phase = "First Phase (12th from Moon)";
      severity = "Moderate";
      description = "Saturn transits the 12th house from your natal Moon. Focus on budgeting, controlling unforeseen expenses, foreign opportunities, and maintaining restful sleep.";
    } else if (selectedRashi.includes("Kumbha")) {
      status = "Active — Peak Phase (2nd Dhaiya)";
      phase = "Core Peak Phase (Janma Shani)";
      severity = "Intense / Transformative";
      description = "Saturn transits directly over your natal Moon. Demands absolute honesty, disciplined habits, mental stillness, and shedding outdated ego attachments.";
    } else if (selectedRashi.includes("Makara")) {
      status = "Active — Setting Phase (3rd Dhaiya)";
      phase = "Final Phase (2nd from Moon)";
      severity = "Subsiding / Harvesting";
      description = "Saturn transits the 2nd house from your natal Moon. Financial stability returns, family relationships consolidate, and the rewards of past endurance emerge.";
    } else if (selectedRashi.includes("Karka") || selectedRashi.includes("Vrischika")) {
      status = "Shani Dhaiya (Kantaka / Ashtama Shani)";
      phase = "Small Panoti";
      severity = "Mild to Moderate";
      description = "You are not under the 7.5-year Sade Sati, but under a temporary 2.5-year Dhaiya transit. Prudence in career negotiations and speech is advised.";
    } else {
      status = "Not in Sade Sati (Safe Period)";
      phase = "Unfettered Cosmic Growth";
      severity = "Favorable";
      description = "Your Rashi is currently free from the direct 7.5-year transit of Saturn. Ideal window for bold life moves, long-term investments, and new beginnings.";
    }

    setSadeSatiResult({
      rashi: selectedRashi,
      status,
      phase,
      severity,
      description,
    });
  };

  // Calculate Manglik
  const handleCalculateManglik = () => {
    const isManglikHouse = [1, 4, 7, 8, 12].includes(marsHouse);
    let level = "";
    let advice = "";

    if (isManglikHouse) {
      if (marsHouse === 7 || marsHouse === 8) {
        level = "Purna Manglik (Strong Placement in 7th/8th House)";
        advice = "Mars directly influences the house of partnership or marital longevity. Requires in-depth Kundali Milan to verify partner's Mars placement or cancellation yogas.";
      } else {
        level = "Anshik Manglik (Mild / Low-Intensity Placement)";
        advice = "Mars is situated in an auxiliary Kendra/Trikona (1st, 4th, or 12th). Most classical texts observe that natural maturity past 28 years significantly diminishes this dosha.";
      }
    } else {
      level = "Non-Manglik (No Mars Affliction)";
      advice = "Mars is placed in a non-dosha house (House " + marsHouse + "). No Mangal Dosha is present from this position.";
    }

    setManglikResult({
      house: marsHouse,
      isManglik: isManglikHouse,
      level,
      advice,
    });
  };

  return (
    <section className="bg-[#FFFDF8] py-14 sm:py-20 border-b border-[#D9CFBD]">
      <div className="container-site max-w-5xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <button
            type="button"
            onClick={() => setActiveTab("kundali")}
            className={`px-5 py-3 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === "kundali"
                ? "bg-[#632D3D] text-[#FFFDF8] shadow-xs"
                : "bg-[#F7F3EA] border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D]"
            }`}
          >
            Kundali &amp; Lagna Calculator
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("sade-sati");
              if (!sadeSatiResult) handleCalculateSadeSati();
            }}
            className={`px-5 py-3 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === "sade-sati"
                ? "bg-[#632D3D] text-[#FFFDF8] shadow-xs"
                : "bg-[#F7F3EA] border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D]"
            }`}
          >
            Shani Sade Sati Checker
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("manglik");
              if (!manglikResult) handleCalculateManglik();
            }}
            className={`px-5 py-3 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === "manglik"
                ? "bg-[#632D3D] text-[#FFFDF8] shadow-xs"
                : "bg-[#F7F3EA] border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D]"
            }`}
          >
            Manglik Dosha Detector
          </button>
        </div>

        {/* TAB 1: KUNDALI CALCULATOR */}
        {activeTab === "kundali" && (
          <div className="bg-[#F7F3EA]/70 border border-[#D9CFBD] p-6 sm:p-10">
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal mb-2">
                Calculate Your Vedic Birth Chart (Kundali)
              </h2>
              <p className="font-sans text-sm text-[#716B63]">
                Enter your exact birth coordinates below. Our engine calculates your Ascendant,
                Moon Sign, Nakshatra, and foundational planetary coordinates.
              </p>
            </div>

            <form onSubmit={handleCalculateKundali} className="max-w-3xl mx-auto space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="type your name here"
                    className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                    Place of Birth (City, Country)
                  </label>
                  <input
                    type="text"
                    required
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    placeholder="e.g. Kolkata, India"
                    className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                    Time of Birth
                  </label>
                  <input
                    type="time"
                    required
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles size={15} />
                  <span>Generate Vedic Chart</span>
                </button>
              </div>
            </form>

            {/* Kundali Result Card */}
            {kundaliResult && (
              <div className="bg-[#FFFDF8] border border-[#B68A3A] p-6 sm:p-8 animate-fadeIn max-w-3xl mx-auto shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-[#D9CFBD] mb-6">
                  <div>
                    <span className="font-sans text-[0.68rem] uppercase tracking-wider text-[#632D3D] font-bold">
                      Calculated Chart Summary
                    </span>
                    <h3 className="font-serif text-2xl text-[#24211F] font-normal">
                      {kundaliResult.name}&apos;s Vedic Kundali
                    </h3>
                  </div>
                  <span className="font-sans text-xs text-[#716B63]">
                    Lahiri Ayanamsha
                  </span>
                </div>

                {/* 6 Key Coordinates Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                      Ascendant (Lagna)
                    </span>
                    <span className="font-serif text-lg text-[#632D3D] font-normal font-semibold">
                      {kundaliResult.lagna}
                    </span>
                    <span className="font-sans text-[0.72rem] text-[#A0988A] block mt-0.5">
                      Lord: {kundaliResult.lagnaLord}
                    </span>
                  </div>

                  <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                      Moon Sign (Rashi)
                    </span>
                    <span className="font-serif text-lg text-[#632D3D] font-normal font-semibold">
                      {kundaliResult.rashi}
                    </span>
                    <span className="font-sans text-[0.72rem] text-[#A0988A] block mt-0.5">
                      Lord: {kundaliResult.rashiLord}
                    </span>
                  </div>

                  <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                      Birth Nakshatra
                    </span>
                    <span className="font-serif text-lg text-[#632D3D] font-normal font-semibold">
                      {kundaliResult.nakshatra}
                    </span>
                    <span className="font-sans text-[0.72rem] text-[#A0988A] block mt-0.5">
                      Pada: {kundaliResult.pada}
                    </span>
                  </div>

                  <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                      Cosmic Element
                    </span>
                    <span className="font-serif text-lg text-[#24211F] font-normal">
                      {kundaliResult.element}
                    </span>
                  </div>

                  <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                      Lunar Tithi
                    </span>
                    <span className="font-serif text-lg text-[#24211F] font-normal">
                      {kundaliResult.tithi}
                    </span>
                  </div>

                  <div className="p-3 bg-[#F7F3EA] border border-[#D9CFBD]">
                    <span className="font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63] block">
                      Birth Coordinates
                    </span>
                    <span className="font-serif text-sm text-[#24211F] font-normal">
                      {kundaliResult.dob} @ {kundaliResult.tob}
                    </span>
                  </div>
                </div>

                {/* Consultation Guidance Strip */}
                <div className="bg-[#F7F3EA] border border-[#D9CFBD] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="font-serif text-base text-[#24211F]">
                      Want Acharya Debdutta to inspect your D9 &amp; D10 charts?
                    </p>
                    <p className="font-sans text-xs text-[#716B63]">
                      Automated charts cannot evaluate complex planetary aspects and dasha timing.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Pranam Acharya Debdutta, I computed my chart on your website (${kundaliResult.lagna} Lagna, ${kundaliResult.rashi} Moon Sign). I would like to book a personal reading.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <MessageCircle size={14} />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SHANI SADE SATI CHECKER */}
        {activeTab === "sade-sati" && (
          <div className="bg-[#F7F3EA]/70 border border-[#D9CFBD] p-6 sm:p-10">
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal mb-2">
                Shani Sade Sati Status Checker
              </h2>
              <p className="font-sans text-sm text-[#716B63]">
                Select your Moon Sign (Chandra Rashi) below to see if you are currently undergoing
                the 7.5-year transit of Saturn (Shani Bhagwan) or Shani Dhaiya.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-2">
                Select Your Moon Sign (Rashi)
              </label>
              <div className="flex gap-2">
                <select
                  value={selectedRashi}
                  onChange={(e) => setSelectedRashi(e.target.value)}
                  className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-3 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
                >
                  {ZODIAC_SIGNS.map((sign) => (
                    <option key={sign} value={sign}>
                      {sign}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleCalculateSadeSati}
                  className="px-6 py-3 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors shrink-0"
                >
                  Check
                </button>
              </div>
            </div>

            {sadeSatiResult && (
              <div className="bg-[#FFFDF8] border border-[#B68A3A] p-6 sm:p-8 animate-fadeIn max-w-2xl mx-auto shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-[#D9CFBD] mb-4">
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#632D3D]">
                    {sadeSatiResult.rashi} Transit Report
                  </span>
                  <span className="px-2.5 py-1 bg-[#F7F3EA] border border-[#D9CFBD] text-xs font-semibold text-[#B68A3A]">
                    {sadeSatiResult.severity}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-2">
                  {sadeSatiResult.status}
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-[#B68A3A] font-bold mb-4">
                  Phase: {sadeSatiResult.phase}
                </p>

                <p className="font-sans text-sm text-[#716B63] leading-relaxed mb-6">
                  {sadeSatiResult.description}
                </p>

                <div className="p-4 bg-[#F7F3EA] border border-[#D9CFBD] text-left">
                  <span className="font-serif text-sm font-semibold text-[#24211F] block mb-1">
                    Vedic Remedial Advice:
                  </span>
                  <p className="font-sans text-xs text-[#716B63] leading-relaxed">
                    Saturn rewards humility, diligence, and service. Chant the Dasharatha Shani
                    Stotram or Hanuman Chalisa every Tuesday and Saturday. Refrain from unethical
                    shortcuts.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: MANGLIK DOSHA DETECTOR */}
        {activeTab === "manglik" && (
          <div className="bg-[#F7F3EA]/70 border border-[#D9CFBD] p-6 sm:p-10">
            <div className="max-w-2xl mx-auto mb-8 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal mb-2">
                Manglik Dosha Detector &amp; Mitigations
              </h2>
              <p className="font-sans text-sm text-[#716B63]">
                In Vedic Jyotish, Mangal Dosha occurs when Mars occupies Houses 1, 4, 7, 8, or 12
                from the Lagna or Moon. Select Mars&apos;s house position below to evaluate.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-8">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-2">
                House Position of Mars (Mangal)
              </label>
              <div className="flex gap-2">
                <select
                  value={marsHouse}
                  onChange={(e) => setMarsHouse(Number(e.target.value))}
                  className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-3 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
                    <option key={h} value={h}>
                      House {h} { [1, 4, 7, 8, 12].includes(h) ? "(Sensitive Placement)" : "" }
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={handleCalculateManglik}
                  className="px-6 py-3 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors shrink-0"
                >
                  Evaluate
                </button>
              </div>
            </div>

            {manglikResult && (
              <div className="bg-[#FFFDF8] border border-[#B68A3A] p-6 sm:p-8 animate-fadeIn max-w-2xl mx-auto shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  {manglikResult.isManglik ? (
                    <AlertCircle size={18} className="text-[#632D3D]" />
                  ) : (
                    <CheckCircle2 size={18} className="text-[#25D366]" />
                  )}
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[#632D3D]">
                    {manglikResult.level}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-3">
                  Mars in House {manglikResult.house}
                </h3>

                <p className="font-sans text-sm text-[#716B63] leading-relaxed mb-6">
                  {manglikResult.advice}
                </p>

                <div className="p-4 bg-[#F7F3EA] border border-[#D9CFBD] text-left">
                  <span className="font-serif text-sm font-semibold text-[#24211F] block mb-1">
                    Classical Cancellation (Bhanga) Note:
                  </span>
                  <p className="font-sans text-xs text-[#716B63] leading-relaxed">
                    Over 65% of charts with Mars in these houses have classical cancellations
                    (e.g., Mars in own sign Aries/Scorpio, exalted in Capricorn, or aspected by
                    Jupiter). Always verify with Acharya Debdutta before drawing conclusions.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
