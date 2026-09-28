"use client";

import { useEffect } from "react";
import Image from "next/image";
import { BlogPost } from "@/data/blogs";
import { X, Clock, MessageCircle, Phone, Sparkles } from "lucide-react";
import { astrologer } from "@/data/astrologer";

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function ArticleReaderModal({ post, onClose }: ArticleReaderModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && post) {
        onClose();
      }
    };
    if (post) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-modal-title"
    >
      <div
        className="bg-[#FFFDF8] border border-[#D9CFBD] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="bg-[#F7F3EA] border-b border-[#D9CFBD] p-4 sm:p-5 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[0.68rem] uppercase tracking-wider font-semibold px-2.5 py-0.5 bg-[#FFFDF8] border border-[#D9CFBD] text-[#632D3D]">
              {post.category}
            </span>
            <span className="text-[0.75rem] font-sans text-[#716B63] flex items-center gap-1">
              <Clock size={12} className="text-[#B68A3A]" />
              {post.readTime}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close article reader"
            className="w-8 h-8 border border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10">
          {/* Published Date */}
          <div className="text-xs font-sans text-[#716B63] mb-2">
            Published on {post.publishedAt}
          </div>

          {/* Title */}
          <h1
            id="reader-modal-title"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#24211F] font-normal leading-snug mb-6"
          >
            {post.title}
          </h1>

          {/* Author Block */}
          <div className="flex items-center gap-3.5 pb-6 mb-8 border-b border-[#D9CFBD]/80">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#B68A3A]/50 bg-[#24211F] shrink-0">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover object-top"
                sizes="44px"
              />
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-[#24211F]">
                {post.author.name}
              </p>
              <p className="font-sans text-xs text-[#716B63]">
                {post.author.role} • 28+ Years of Practice
              </p>
            </div>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-5 font-sans text-[0.95rem] text-[#3D3833] leading-relaxed">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-[#D9CFBD]/60 flex flex-wrap items-center gap-2">
            <span className="font-sans text-xs text-[#716B63] font-semibold mr-1">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-[0.72rem] px-2.5 py-1 bg-[#F7F3EA] border border-[#D9CFBD] text-[#4A453E]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Remedial Guidance Callout */}
          <div className="mt-10 bg-[#F7F3EA] border border-[#D9CFBD] p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-serif text-lg text-[#24211F] font-normal">
                Need Personal Guidance on This Topic?
              </p>
              <p className="font-sans text-[0.84rem] text-[#716B63] mt-1">
                Consult with Acharya Debdutta to inspect how this transit or planetary placement
                specifically affects your birth chart.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={`https://wa.me/${astrologer.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Pranam Acharya Debdutta, I was reading your article "${post.title}" and would like to inquire about its impact on my chart.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${astrologer.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="px-4 py-2.5 border border-[#D9CFBD] bg-[#FFFDF8] text-[#716B63] hover:text-[#632D3D] hover:border-[#632D3D] font-sans text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
