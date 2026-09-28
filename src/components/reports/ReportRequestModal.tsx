"use client";

import { useState, useEffect } from "react";
import { AstrologicalReport, reportsList } from "@/data/reports";
import { astrologer } from "@/data/astrologer";
import { X, MessageCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";

interface ReportRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReport?: AstrologicalReport | null;
}

export default function ReportRequestModal({
  isOpen,
  onClose,
  initialReport,
}: ReportRequestModalProps) {
  const [selectedReportId, setSelectedReportId] = useState<string>(
    initialReport?.id || reportsList[0].id
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [isTimeApprox, setIsTimeApprox] = useState(false);
  const [pob, setPob] = useState("");
  const [questions, setQuestions] = useState("");

  useEffect(() => {
    if (initialReport) {
      setSelectedReportId(initialReport.id);
    }
  }, [initialReport]);

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

  const currentReport =
    reportsList.find((r) => r.id === selectedReportId) || reportsList[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*Pranam Acharya Debdutta, I would like to request an Astrological Report.*`,
      ``,
      `*Report Type:* ${currentReport.title}`,
      `*Full Name:* ${fullName || "Not provided"}`,
      `*Phone / WhatsApp:* ${phone || "Not provided"}`,
      `*Email:* ${email || "Not provided"}`,
      `*Date of Birth:* ${dob || "Not provided"}`,
      `*Time of Birth:* ${tob || "Not provided"}${isTimeApprox ? " (Approximate)" : ""}`,
      `*Place of Birth:* ${pob || "Not provided"}`,
      questions ? `*Key Questions / Focus:* ${questions}` : null,
      ``,
      `Please let me know the procedure to confirm my report.`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const cleanNumber = astrologer.contact.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-modal-title"
    >
      {/* Modal Card */}
      <div
        className="bg-[#FFFDF8] border border-[#D9CFBD] w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F7F3EA] border-b border-[#D9CFBD] p-5 sm:p-6 flex items-center justify-between sticky top-0 z-20">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-wider text-[#632D3D] font-bold mb-1">
              <Sparkles size={12} className="text-[#B68A3A]" />
              Direct Vedic Dossier Request
            </div>
            <h3 id="report-modal-title" className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal">
              Order Your Astrological Report
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-none border border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-7 space-y-5">
          {/* Report Selection */}
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-2">
              Select Desired Report
            </label>
            <select
              value={selectedReportId}
              onChange={(e) => setSelectedReportId(e.target.value)}
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-3 text-sm text-[#24211F] focus:outline-hidden focus:border-[#632D3D] transition-colors"
            >
              {reportsList.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.title} ({r.turnaround})
                </option>
              ))}
            </select>
            <p className="font-sans text-[0.78rem] text-[#716B63] mt-1.5">
              Turnaround: <span className="font-semibold text-[#632D3D]">{currentReport.turnaround}</span> | Delivered as a {currentReport.pageCount}
            </p>
          </div>

          {/* Personal Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1.5">
                Full Name <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Suprakash Biswas"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>

            <div>
              <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1.5">
                WhatsApp Phone <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98314 21490"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1.5">
              Email Address (For PDF Delivery)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. yourname@gmail.com"
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
            />
          </div>

          {/* Birth Coordinates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#F7F3EA]/60 p-4 border border-[#D9CFBD]">
            <div>
              <label className="block font-sans text-[0.72rem] uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Date of Birth <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2 text-xs text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>

            <div>
              <label className="block font-sans text-[0.72rem] uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Time of Birth <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="time"
                required
                value={tob}
                onChange={(e) => setTob(e.target.value)}
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2 text-xs text-[#24211F] focus:outline-hidden focus:border-[#632D3D]"
              />
              <label className="inline-flex items-center gap-1.5 mt-1.5 text-[0.7rem] text-[#716B63] cursor-pointer">
                <input
                  type="checkbox"
                  checked={isTimeApprox}
                  onChange={(e) => setIsTimeApprox(e.target.checked)}
                  className="rounded-none border-[#D9CFBD] text-[#632D3D] focus:ring-0"
                />
                <span>Approximate Time</span>
              </label>
            </div>

            <div>
              <label className="block font-sans text-[0.72rem] uppercase tracking-wider text-[#24211F] font-semibold mb-1">
                Place of Birth <span className="text-[#632D3D]">*</span>
              </label>
              <input
                type="text"
                required
                value={pob}
                onChange={(e) => setPob(e.target.value)}
                placeholder="City, State, Country"
                className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2 text-xs text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
              />
            </div>
          </div>

          {/* Specific Queries */}
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-[#24211F] font-semibold mb-1.5">
              Specific Questions or Life Focus (Optional)
            </label>
            <textarea
              rows={3}
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              placeholder="e.g. Concerns about job change in 2026, foreign travel prospects, marital compatibility..."
              className="w-full bg-[#FFFDF8] border border-[#D9CFBD] p-2.5 text-sm text-[#24211F] placeholder-[#A0988A] focus:outline-hidden focus:border-[#632D3D]"
            />
          </div>

          {/* Confidentiality Note */}
          <div className="flex items-center gap-2 text-[0.75rem] text-[#716B63]">
            <CheckCircle2 size={14} className="text-[#B68A3A] shrink-0" />
            <span>All birth details and astrological findings are kept 100% confidential.</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-[#D9CFBD]">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3.5 px-6 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#4E2230] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Submit &amp; Connect on WhatsApp</span>
            </button>

            <a
              href={`tel:${astrologer.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full sm:w-auto py-3.5 px-5 border border-[#D9CFBD] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] font-sans text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={15} />
              <span>Call Direct</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
