"use client";

import React, { useState } from "react";
import CourseHero from "@/components/courses/CourseHero";
import WhyLearnAstrology from "@/components/courses/WhyLearnAstrology";
import CourseListGrid from "@/components/courses/CourseListGrid";
import CourseInclusions from "@/components/courses/CourseInclusions";
import CourseTestimonials from "@/components/courses/CourseTestimonials";
import CourseEnrollModal from "@/components/courses/CourseEnrollModal";
import { Course } from "@/data/courses";

export default function CoursesClientPage() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleOpenEnroll = (course?: Course) => {
    if (course) {
      setSelectedCourse(course);
    }
    setEnrollModalOpen(true);
  };

  const handleCloseEnroll = () => {
    setEnrollModalOpen(false);
  };

  const scrollToCourses = () => {
    const el = document.getElementById("courses-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Concise, High-Impact Hero Section */}
      <CourseHero
        onExploreClick={scrollToCourses}
        onRequestSyllabusClick={() => handleOpenEnroll()}
      />

      {/* 2. Standalone Editorial Why Learn Astrology Benefits */}
      <WhyLearnAstrology />

      {/* 3. Courses We Offer (4 Detailed Curriculum Cards) */}
      <CourseListGrid onEnrollClick={handleOpenEnroll} />

      {/* 4. What’s Included in Every Course? (Feature Inclusions) */}
      <CourseInclusions />

      {/* 5. Hear from Our Students (Student Reviews Carousel) */}
      <CourseTestimonials />

      {/* Interactive Course Enrollment Modal */}
      <CourseEnrollModal
        isOpen={enrollModalOpen}
        onClose={handleCloseEnroll}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}
