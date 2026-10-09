"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface NameCorrectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  "Personal Name & Signature Correction",
  "Newborn Baby Naming (Nama Samskara)",
  "Business, Company & Brand Tuning",
];

export default function NameCorrectionModal({
  isOpen,
  onClose,
  initialService,
}: NameCorrectionModalProps) {
  const [selectedService, setSelectedService] = useState(
    initialService || SERVICE_OPTIONS[0]
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("");
  const [goals, setGoals] = useState("");

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*Pranam Acharya Debdutta, I would like to request Name Correction / Numerology Tuning.*`,
      ``,
      `*Service Required:* ${selectedService}`,
      `*Current / Proposed Name:* ${name || "Not provided"}`,
      `*WhatsApp Phone:* ${phone || "Not provided"}`,
      `*Date of Birth:* ${dob || "Not provided"}`,
      `*Place of Birth:* ${pob || "Not provided"}`,
      goals ? `*Key Goals / Focal Points:* ${goals}` : null,
      ``,
      `Please let me know the procedure to proceed with the analysis.`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const cleanNumber = astrologer.contact.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="name-modal-title"
    >
      <div
        className="bg-[#FFFDF8] border border-[#D9CFBD] w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F7F3EA] border-b border-[#D9CFBD] p-5 flex items-center justify-between sticky top-0 z-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-wider text-[#632D3D] font-bold mb-1">
              <Sparkles size={12} className="text-[#B68A3A]" />
              Name Correction Consultation
            </div>
            <h3 id="name-modal-title" className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal">
              Request Numerology Tuning
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 border border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitWhatsApp} className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1.5">
              Select Service Type
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Current or Proposed Name <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name here"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>

            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                WhatsApp Phone <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 93300 27339"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Date of Birth (or Due Date) <span className="text-[#632D3D]">*</span>
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
                Place of Birth (City, Country)
              </label>
              <input
                type="text"
                value={pob}
                onChange={(e) => setPob(e.target.value)}
                placeholder="e.g. Kolkata, India"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
              Specific Objectives or Concerns
            </label>
            <textarea
              rows={3}
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g. Seeking career breakthrough, newborn boy naming with Sanskrit origin, commercial brand tuning..."
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#716B63]">
            <CheckCircle2 size={14} className="text-[#B68A3A] shrink-0" />
            <span>100% Confidential. Evaluated personally by Acharya Debdutta.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-[#D9CFBD]">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>Submit &amp; Connect on WhatsApp</span>
            </button>

            <a
              href={`tel:${astrologer.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto py-3 px-4 border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] font-sans text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone size={14} />
              <span>Call Direct</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
