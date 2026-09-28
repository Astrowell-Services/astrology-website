"use client";

import { useState, useMemo } from "react";
import BlogHero from "@/components/blogs/BlogHero";
import FeaturedArticle from "@/components/blogs/FeaturedArticle";
import BlogGrid from "@/components/blogs/BlogGrid";
import BlogNewsletter from "@/components/blogs/BlogNewsletter";
import ArticleReaderModal from "@/components/blogs/ArticleReaderModal";
import { blogPosts, BlogPost } from "@/data/blogs";

export default function BlogsClientPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Category check
      const matchesCategory =
        selectedCategory === "All Articles" || post.category === selectedCategory;

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const showFeatured =
    selectedCategory === "All Articles" && searchQuery.trim() === "";

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Articles");
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Header with Search and Category Filter Pills */}
      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. Featured Lead Article (Only shown on initial unfiltered view) */}
      {showFeatured && (
        <FeaturedArticle
          post={featuredPost}
          onReadPost={(post) => setReadingPost(post)}
        />
      )}

      {/* 3. Filtered Articles Grid */}
      <BlogGrid
        posts={filteredPosts}
        onReadPost={(post) => setReadingPost(post)}
        onClearFilters={handleClearFilters}
      />

      {/* 4. WhatsApp Transit Broadcast & Community Callout */}
      <BlogNewsletter />

      {/* 5. Interactive Article Reader Modal */}
      <ArticleReaderModal
        post={readingPost}
        onClose={() => setReadingPost(null)}
      />
    </div>
  );
}
