import type { Metadata } from "next";
import BlogsClientPage from "./BlogsClientPage";
import { blogPosts } from "@/data/blogs";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Vedic Astrology Journal & Articles | Acharya Debdutta",
  description:
    "Explore authoritative articles on planetary transits, Shani Sade Sati, Navamsha Kundali analysis, gemstone science, and Lal Kitab remedies written by Acharya Debdutta.",
  keywords: [
    "Vedic astrology blogs",
    "Shani Sade Sati remedies",
    "Navamsha D9 chart analysis",
    "Astrological gemstone guide",
    "Jupiter transit 2026",
    "Lal Kitab remedies Kolkata",
    "Name numerology correction",
    "Acharya Debdutta articles",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Vedic Astrology Journal | Acharya Debdutta",
    description:
      "Timeless classical wisdom, planetary transit analyses, and practical remedial guidance written for conscious modern living.",
    url: `${SITE_URL}/blogs`,
    images: [
      {
        url: "/images/astrologer-sir.jpg",
        width: 1200,
        height: 630,
        alt: "Vedic Astrology Journal with Acharya Debdutta",
      },
    ],
  },
};

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Vedic Astrology Journal by Acharya Debdutta",
    description:
      "Authoritative articles on Vedic astrology, planetary transits, remedies, and numerology.",
    publisher: {
      "@type": "Person",
      name: "Acharya Debdutta",
      jobTitle: "Master Vedic Astrologer",
      image: `${SITE_URL}/images/astrologer-sir.jpg`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogsClientPage />
    </>
  );
}
