"use client";

import React, { useState } from "react";
import { X, Phone, MessageSquare, Shield } from "lucide-react";
import { ConsultationPackage, consultationPackages } from "@/data/consultation";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: ConsultationPackage | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedPackage,
}: BookingModalProps) {
  const defaultPkg = selectedPackage || consultationPackages[1]; // Standard plan default

  const [activePlanId, setActivePlanId] = useState(defaultPkg.id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [question, setQuestion] = useState("");

  // Sync if selectedPackage prop changes
  React.useEffect(() => {
    if (selectedPackage) {
      setActivePlanId(selectedPackage.id);
    }
  }, [selectedPackage]);

  if (!isOpen) return null;

  const currentPlan =
    consultationPackages.find((p) => p.id === activePlanId) || defaultPkg;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `*Call Consultation Booking Request*`,
      `*Plan:* ${currentPlan.name} (₹${currentPlan.price}, ${currentPlan.duration})`,
      `*Name:* ${name || "Not provided"}`,
      `*Phone:* ${phone || "Not provided"}`,
      `*Date of Birth:* ${dob || "Approximate/Not provided"}`,
      `*Time of Birth:* ${birthTime || "Not provided"}`,
      `*Place of Birth:* ${birthPlace || "Not provided"}`,
      `*Primary Query:* ${question || "General Reading"}`,
    ].join("\n");

    window.open(
      `https://wa.me/919831421490?text=${encodeURIComponent(details)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-[#FFFDF8] border-2 border-[#D9CFBD] shadow-2xl flex flex-col max-h-[85vh] sm:max-h-[82vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Gold Corner Accents */}
        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B68A3A] pointer-events-none z-10" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B68A3A] pointer-events-none z-10" />
        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#B68A3A] pointer-events-none z-10" />
        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B68A3A] pointer-events-none z-10" />

        {/* Modal Header (Fixed at top) */}
        <div className="p-4 sm:p-5 pb-3.5 border-b border-[#D9CFBD]/60 bg-[#FFFDF8] shrink-0 relative pr-10">
          <p className="font-sans text-[0.66rem] tracking-[0.2em] uppercase text-[#B68A3A] font-semibold mb-0.5">
            Fast Track Consultation
          </p>
          <h3 className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal leading-tight">
            Book Call Consultation
          </h3>
          <p className="font-sans text-xs text-[#716B63] mt-0.5">
            Share your birth details to schedule your slot with Achariya Debdutta.
          </p>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 text-[#716B63] hover:text-[#24211F] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 overscroll-contain">
          {/* Plan Selector Buttons */}
          <div>
            <label className="font-sans text-[0.7rem] tracking-wider uppercase text-[#716B63] font-bold block mb-1.5">
              Selected Plan:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {consultationPackages.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePlanId(p.id)}
                  className={`p-2 border text-center transition-all cursor-pointer ${
                    activePlanId === p.id
                      ? "border-[#B68A3A] bg-[#F7F3EA] text-[#24211F] font-bold shadow-xs"
                      : "border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:border-[#B68A3A]"
                  }`}
                >
                  <div className="font-serif text-xs sm:text-sm leading-tight">{p.name}</div>
                  <div className="font-sans text-[0.72rem] text-[#632D3D] font-semibold mt-0.5">
                    ₹{p.price}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleWhatsAppSubmit} className="space-y-3 text-left">
            <div>
              <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                />
              </div>
              <div>
                <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                  Time of Birth
                </label>
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                />
              </div>
              <div>
                <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                  Place of Birth
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kolkata, West Bengal"
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                />
              </div>
            </div>

            <div>
              <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                Primary Concern / Question
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Career switch timing, marriage match..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-3 py-1.5 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A] resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageSquare size={15} />
                <span>Confirm & Book via WhatsApp</span>
              </button>

              <div className="text-center">
                <span className="font-sans text-[0.7rem] text-[#716B63]">or</span>
              </div>

              <a
                href="tel:+9198300786134"
                className="w-full py-2.5 px-4 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone size={15} />
                <span>Call Helpline Directly (+9198300786134)</span>
              </a>
            </div>

            {/* Security note */}
            <div className="flex items-center justify-center gap-1.5 pt-1.5 text-[0.68rem] text-[#716B63]">
              <Shield size={12} className="text-[#B68A3A]" />
              <span>100% Confidential. Details used strictly for Kundali calculation.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
