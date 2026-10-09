"use client";

import React, { useState } from "react";
import { X, MessageSquare, Phone, ShieldCheck, GraduationCap } from "lucide-react";
import { detailedCourses, Course } from "@/data/courses";

interface CourseEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: Course | null;
}

export default function CourseEnrollModal({
  isOpen,
  onClose,
  selectedCourse,
}: CourseEnrollModalProps) {
  const defaultCourse = selectedCourse || detailedCourses[0];

  const [activeCourseId, setActiveCourseId] = useState(defaultCourse.id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredBatch, setPreferredBatch] = useState("Weekend Evening");
  const [background, setBackground] = useState("Beginner / Exploring");
  const [message, setMessage] = useState("");

  // Sync state if selectedCourse changes
  React.useEffect(() => {
    if (selectedCourse) {
      setActiveCourseId(selectedCourse.id);
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const currentCourse =
    detailedCourses.find((c) => c.id === activeCourseId) || defaultCourse;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `*Course Enrollment & Inquiry Request*`,
      `*Course:* ${currentCourse.title}`,
      `*Duration / Fee:* ${currentCourse.duration} (${currentCourse.price || "Contact for fee"})`,
      `*Name:* ${name || "Not provided"}`,
      `*Phone:* ${phone || "Not provided"}`,
      `*Email:* ${email || "Not provided"}`,
      `*Preferred Batch:* ${preferredBatch}`,
      `*Background:* ${background}`,
      `*Note:* ${message || "Interested in enrolling in next upcoming batch."}`,
    ].join("\n");

    window.open(
      `https://wa.me/919330027339?text=${encodeURIComponent(details)}`,
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
        {/* Decorative Corner Filigrees */}
        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B68A3A] pointer-events-none z-10" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B68A3A] pointer-events-none z-10" />
        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#B68A3A] pointer-events-none z-10" />
        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B68A3A] pointer-events-none z-10" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 pb-3.5 border-b border-[#D9CFBD]/60 bg-[#FFFDF8] shrink-0 relative pr-10">
          <p className="font-sans text-[0.66rem] tracking-[0.2em] uppercase text-[#B68A3A] font-semibold mb-0.5 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#B68A3A]" />
            Direct Enrollment Portal
          </p>
          <h3 className="font-serif text-xl sm:text-2xl text-[#24211F] font-normal leading-tight">
            Enroll in Astrology Course
          </h3>
          <p className="font-sans text-xs text-[#716B63] mt-0.5">
            Reserve your seat with Achariya Debdutta for the upcoming online batch.
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
          
          {/* Course Selector Grid */}
          <div>
            <label className="font-sans text-[0.7rem] tracking-wider uppercase text-[#716B63] font-bold block mb-1.5">
              Select Course:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {detailedCourses.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCourseId(c.id)}
                  className={`p-2.5 border text-left transition-all cursor-pointer ${
                    activeCourseId === c.id
                      ? "border-[#B68A3A] bg-[#F7F3EA] text-[#24211F] font-semibold shadow-xs"
                      : "border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:border-[#B68A3A]"
                  }`}
                >
                  <div className="font-serif text-xs sm:text-sm leading-tight line-clamp-2">
                    {c.title}
                  </div>
                  <div className="font-sans text-[0.7rem] text-[#632D3D] font-bold mt-1">
                    {c.duration} • {c.price}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Enrollment Form */}
          <form onSubmit={handleWhatsAppSubmit} className="space-y-3 text-left">
            <div>
              <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Suprakash Sharma"
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
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                  Preferred Batch
                </label>
                <select
                  value={preferredBatch}
                  onChange={(e) => setPreferredBatch(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                >
                  <option value="Weekend Evening">Weekend Evening</option>
                  <option value="Weekday Evening">Weekday Evening</option>
                  <option value="Recorded + Live Q&A">Self-Paced Recorded + Live Q&A</option>
                </select>
              </div>

              <div>
                <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                  Your Background
                </label>
                <select
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F7F3EA]/50 border border-[#D9CFBD] text-[#24211F] text-sm focus:outline-none focus:border-[#B68A3A]"
                >
                  <option value="Beginner / Exploring">Complete Beginner</option>
                  <option value="Intermediate Learner">Intermediate Enthusiast</option>
                  <option value="Practicing Astrologer">Practicing Astrologer</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-sans text-xs font-semibold text-[#24211F] block mb-1">
                Any Questions or Notes
              </label>
              <textarea
                rows={2}
                placeholder="Ask about syllabus, batch start date, payment options..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
                <span>Submit Enrollment via WhatsApp</span>
              </button>

              <div className="text-center">
                <span className="font-sans text-[0.7rem] text-[#716B63]">or</span>
              </div>

              <a
                href="tel:+9198300786134"
                className="w-full py-2.5 px-4 bg-[#632D3D] hover:bg-[#4A1F2B] text-[#FFFDF8] font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone size={15} />
                <span>Call Admissions (+9198300786134)</span>
              </a>
            </div>

            {/* Security note */}
            <div className="flex items-center justify-center gap-1.5 pt-1.5 text-[0.68rem] text-[#716B63]">
              <ShieldCheck size={12} className="text-[#B68A3A]" />
              <span>Direct admission support. 100% verified Vedic curriculum.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
