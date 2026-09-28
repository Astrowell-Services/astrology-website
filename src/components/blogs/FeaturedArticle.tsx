"use client";

import Image from "next/image";
import { BlogPost } from "@/data/blogs";
import { Clock, ArrowRight, Sparkles } from "lucide-react";

interface FeaturedArticleProps {
  post: BlogPost;
  onReadPost: (post: BlogPost) => void;
}

export default function FeaturedArticle({ post, onReadPost }: FeaturedArticleProps) {
  return (
    <section className="bg-[#FFFDF8] py-12 sm:py-16 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={14} className="text-[#B68A3A]" />
          <span className="font-sans text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#632D3D]">
            Lead Editorial Essay
          </span>
        </div>

        {/* Featured Card */}
        <div className="bg-[#F7F3EA]/70 border border-[#D9CFBD] hover:border-[#632D3D]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 overflow-hidden group">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto min-h-[260px] sm:min-h-[320px] bg-[#24211F] overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="font-sans text-[0.68rem] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#632D3D] text-[#FFFDF8]">
                {post.category}
              </span>
            </div>
          </div>

          {/* Editorial Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#716B63] mb-3">
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#B68A3A] font-medium">
                  <Clock size={13} />
                  {post.readTime}
                </span>
              </div>

              <h2
                onClick={() => onReadPost(post)}
                className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#24211F] font-normal leading-snug mb-4 group-hover:text-[#632D3D] transition-colors cursor-pointer"
              >
                {post.title}
              </h2>

              <p className="font-sans text-[0.92rem] text-[#716B63] leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#D9CFBD]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#B68A3A]/50 bg-[#24211F] shrink-0">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover object-top"
                    sizes="36px"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-bold text-[#24211F]">
                    {post.author.name}
                  </span>
                  <span className="font-sans text-[0.7rem] text-[#716B63]">
                    {post.author.role}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onReadPost(post)}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-semibold text-[#632D3D] group-hover:text-[#B68A3A] transition-colors self-start sm:self-auto"
              >
                <span>Read Full Essay</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
