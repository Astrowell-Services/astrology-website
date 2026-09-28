"use client";

import Image from "next/image";
import { BlogPost } from "@/data/blogs";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogGridProps {
  posts: BlogPost[];
  onReadPost: (post: BlogPost) => void;
  onClearFilters: () => void;
}

export default function BlogGrid({ posts, onReadPost, onClearFilters }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
        <div className="container-site max-w-md mx-auto text-center">
          <BookOpen size={36} className="text-[#B68A3A] mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-[#24211F] font-normal mb-2">
            No Articles Found
          </h3>
          <p className="font-sans text-sm text-[#716B63] mb-6">
            We couldn&apos;t find any articles matching your search criteria. Try a different topic
            or reset filters.
          </p>
          <button
            type="button"
            onClick={onClearFilters}
            className="px-5 py-2.5 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#4E2230] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#FFFDF8] py-16 sm:py-24 border-b border-[#D9CFBD]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.25em] text-[#B68A3A] font-600 mb-1">
              Curated Reading
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal">
              Latest Vedic Publications
            </h2>
          </div>
          <span className="font-sans text-xs text-[#716B63]">
            Showing {posts.length} {posts.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#F7F3EA]/50 border border-[#D9CFBD] hover:border-[#632D3D]/50 hover:bg-[#F7F3EA] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  onClick={() => onReadPost(post)}
                  className="relative aspect-16/10 bg-[#24211F] overflow-hidden cursor-pointer"
                >
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-sans text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#FFFDF8] border border-[#D9CFBD] text-[#632D3D]">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-[0.7rem] font-sans text-[#FFFDF8] bg-black/60 px-2 py-0.5">
                    <Clock size={11} className="text-[#B68A3A]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[0.75rem] font-sans text-[#716B63] mb-2.5">
                    {post.publishedAt}
                  </div>

                  <h3
                    onClick={() => onReadPost(post)}
                    className="font-serif text-xl sm:text-[1.35rem] text-[#24211F] font-normal leading-snug mb-3 group-hover:text-[#632D3D] transition-colors cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="font-sans text-[0.85rem] text-[#716B63] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-[#D9CFBD]/60 flex items-center justify-between">
                  <span className="font-sans text-xs text-[#716B63]">
                    By {post.author.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => onReadPost(post)}
                    className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider font-semibold text-[#632D3D] group-hover:text-[#B68A3A] transition-colors"
                  >
                    <span>Read</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
