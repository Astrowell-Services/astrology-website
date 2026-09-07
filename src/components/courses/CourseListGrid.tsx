"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  Layers, 
  Globe2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  UserCheck, 
  Award,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { detailedCourses, Course } from "@/data/courses";

interface CourseListGridProps {
  onEnrollClick: (course: Course) => void;
}

export default function CourseListGrid({ onEnrollClick }: CourseListGridProps) {
  // Track expanded state for courses if syllabus is long
  const [expandedSyllabus, setExpandedSyllabus] = useState<Record<string, boolean>>({});

  const toggleSyllabus = (courseId: string) => {
    setExpandedSyllabus((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <section id="courses-grid" className="section-spacing bg-[#FFFDF8] relative overflow-hidden">
      <div className="container-site">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-18">
          <p className="font-sans text-[0.72rem] tracking-[0.25em] uppercase text-[#B68A3A] font-semibold mb-2.5">
            Accredited Online Programs
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211F] font-normal mb-3">
            Courses We Offer
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#716B63] leading-relaxed">
            Expert-led online courses — anytime, anywhere.
          </p>
        </div>

        {/* 2x2 Grid of Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {detailedCourses.map((course, index) => {
            const isExpanded = !!expandedSyllabus[course.id];
            const visibleCurriculum = isExpanded 
              ? course.curriculum 
              : course.curriculum.slice(0, 4);
            const hasMoreCurriculum = course.curriculum.length > 4;

            return (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFDF8] border border-[#D9CFBD] hover:border-[#B68A3A] transition-all duration-300 shadow-xs flex flex-col justify-between group relative p-7 sm:p-9"
              >
                {/* Top SEO Keyword Pill & Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B68A3A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* SEO Tag / Category */}
                  {course.seoTag && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-0.5 bg-[#F7F3EA] border border-[#D9CFBD] text-[#716B63] font-sans text-[0.72rem] tracking-wider uppercase font-medium">
                        {course.seoTag}
                      </span>
                    </div>
                  )}

                  {/* Course Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#24211F] font-normal mb-4 group-hover:text-[#632D3D] transition-colors leading-tight">
                    {course.title}
                  </h3>

                  {/* Badges: Duration, Level, Language */}
                  <div className="flex flex-wrap items-center gap-2 mb-6 text-[#716B63]">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F3EA] border border-[#D9CFBD]/60 font-sans text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#B68A3A]" />
                      <span>{course.duration}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F3EA] border border-[#D9CFBD]/60 font-sans text-xs font-medium">
                      <Layers className="w-3.5 h-3.5 text-[#B68A3A]" />
                      <span>{course.level}</span>
                    </div>

                    {course.language && (
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F7F3EA] border border-[#D9CFBD]/60 font-sans text-xs font-medium">
                        <Globe2 className="w-3.5 h-3.5 text-[#B68A3A]" />
                        <span>{course.language}</span>
                      </div>
                    )}
                  </div>

                  {/* Overview Description */}
                  <p className="font-sans text-[0.92rem] text-[#716B63] leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* What You'll Learn Module List */}
                  <div className="mb-6 p-5 bg-[#F7F3EA]/70 border border-[#D9CFBD]/80 rounded-xs">
                    <div className="flex items-center justify-between mb-3.5">
                      <h4 className="font-sans text-xs tracking-[0.18em] uppercase font-bold text-[#B68A3A] flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#B68A3A]" />
                        What You’ll Learn:
                      </h4>
                      <span className="font-sans text-[0.7rem] text-[#716B63]">
                        {course.curriculum.length} Core Topics
                      </span>
                    </div>

                    <ul className="space-y-2.5 font-sans text-[0.86rem] text-[#24211F]">
                      {visibleCurriculum.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#B68A3A] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#3A3632]">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    {hasMoreCurriculum && (
                      <button
                        onClick={() => toggleSyllabus(course.id)}
                        className="mt-3.5 pt-2 border-t border-[#D9CFBD]/60 flex items-center gap-1.5 font-sans text-xs text-[#632D3D] font-semibold hover:text-[#B68A3A] transition-colors cursor-pointer w-full justify-center"
                      >
                        <span>{isExpanded ? "Show Less" : `View Full Syllabus (+${course.curriculum.length - 4} more)`}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>

                  {/* Who Should Join / Outcome / Bonus Box */}
                  {course.targetAudience && (
                    <div className="mb-6 flex items-start gap-2.5 text-[#4A453F] font-sans text-xs sm:text-[0.84rem] bg-[#FFFDF8] border-l-2 border-[#B68A3A] pl-3 py-1">
                      <UserCheck className="w-4 h-4 text-[#B68A3A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#24211F] font-semibold">Who Should Join: </strong>
                        <span>{course.targetAudience}</span>
                      </div>
                    </div>
                  )}

                  {course.outcome && (
                    <div className="mb-6 flex items-start gap-2.5 text-[#4A453F] font-sans text-xs sm:text-[0.84rem] bg-[#FFFDF8] border-l-2 border-[#632D3D] pl-3 py-1">
                      <Award className="w-4 h-4 text-[#632D3D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#24211F] font-semibold">Outcome: </strong>
                        <span>{course.outcome}</span>
                      </div>
                    </div>
                  )}

                  {course.bonus && (
                    <div className="mb-6 flex items-start gap-2.5 text-[#4A453F] font-sans text-xs sm:text-[0.84rem] bg-[#FFFDF8] border-l-2 border-[#B68A3A] pl-3 py-1">
                      <Sparkles className="w-4 h-4 text-[#B68A3A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#24211F] font-semibold">Bonus: </strong>
                        <span>{course.bonus}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer with Price and Enroll CTA */}
                <div className="mt-4 pt-5 border-t border-[#D9CFBD] flex items-center justify-between gap-4">
                  <div>
                    <span className="block font-sans text-[0.7rem] uppercase tracking-wider text-[#716B63]">
                      Tuition Fee
                    </span>
                    <span className="font-serif text-2xl text-[#24211F] font-normal">
                      {course.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onEnrollClick(course)}
                    className="px-6 py-3 bg-[#632D3D] text-[#FFFDF8] font-sans text-xs tracking-[0.18em] uppercase font-bold hover:bg-[#4E222F] transition-all duration-200 shadow-xs flex items-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 text-[#B68A3A] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
