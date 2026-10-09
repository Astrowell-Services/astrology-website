"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Phone, Flame, CheckCircle2 } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface PujaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPuja?: string;
}

const PUJA_OPTIONS = [
  "Navagraha Shanti Puja & Hawan",
  "Maha Mrityunjaya Jaap & Hawan",
  "Kaal Sarp & Rahu-Ketu Shanti Puja",
  "Mangal Dosha & Vivah Badha Nivaran",
  "Vastu Shanti & Griha Pravesh Hawan",
  "Sacred Rudrabhishek Puja",
];

export default function PujaBookingModal({
  isOpen,
  onClose,
  initialPuja,
}: PujaBookingModalProps) {
  const [selectedPuja, setSelectedPuja] = useState(
    initialPuja || PUJA_OPTIONS[0]
  );
  const [name, setName] = useState("");
  const [gotra, setGotra] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [sankalpa, setSankalpa] = useState("");

  useEffect(() => {
    if (initialPuja) {
      setSelectedPuja(initialPuja);
    }
  }, [initialPuja]);

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
      `*Pranam Acharya Debdutta, I would like to book an Online Vedic Puja.*`,
      ``,
      `*Puja Required:* ${selectedPuja}`,
      `*Devotee Name:* ${name || "Not provided"}`,
      `*Gotra:* ${gotra || "Kashyap / Not Known"}`,
      `*WhatsApp Phone:* ${phone || "Not provided"}`,
      `*Preferred Date:* ${date || "Earliest Auspicious Muhurat"}`,
      `*Delivery Address for Prasad:* ${address || "Not provided"}`,
      sankalpa ? `*Special Sankalpa / Intention:* ${sankalpa}` : null,
      ``,
      `Please let me know the auspicious Muhurat and preparation guidelines.`,
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
      aria-labelledby="puja-modal-title"
    >
      <div
        className="bg-[#FFFDF8] border border-[#D9CFBD] w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F7F3EA] border-b border-[#D9CFBD] p-5 flex items-center justify-between sticky top-0 z-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-wider text-[#632D3D] font-bold mb-1">
              <Flame size={12} className="text-[#B68A3A]" />
              Sacred Vedic Sankalpa
            </div>
            <h3 id="puja-modal-title" className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal">
              Book Online Vedic Puja
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
              Select Desired Puja
            </label>
            <select
              value={selectedPuja}
              onChange={(e) => setSelectedPuja(e.target.value)}
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
            >
              {PUJA_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Devotee / Head of Family <span className="text-[#632D3D]">*</span>
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
                Gotra (if known)
              </label>
              <input
                type="text"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                placeholder="e.g. Kashyap, Shandilya (or leave blank)"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Preferred Date / Muhurat
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
              Postal Address for Prasad &amp; Energized Yantra
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Full postal address with pincode..."
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
            />
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1">
              Specific Prayer or Life Sankalpa
            </label>
            <textarea
              rows={3}
              value={sankalpa}
              onChange={(e) => setSankalpa(e.target.value)}
              placeholder="e.g. Relief from persistent health ailments, removing obstacles in business expansion..."
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-[#716B63]">
            <CheckCircle2 size={14} className="text-[#B68A3A] shrink-0" />
            <span>Interactive video link and preparation guidance sent via WhatsApp.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-[#D9CFBD]">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>Confirm &amp; Connect on WhatsApp</span>
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
