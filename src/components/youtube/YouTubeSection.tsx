"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, PlaySquare } from "lucide-react";
import { videos } from "@/data/videos";
import PlanetaryOrbit from "@/components/astrology/PlanetaryOrbit";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function YouTubeSection() {
  return (
    <section
      id="youtube"
      className="section-spacing bg-[#FFFDF8] relative overflow-hidden"
      aria-labelledby="youtube-heading"
    >
      {/* Background celestial orbit linework */}
      <div className="absolute left-[-100px] sm:left-[-40px] lg:left-[-15%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20 lg:opacity-10">
        <PlanetaryOrbit size={520} opacity={0.14} rotate={true} speed={160} className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[550px] lg:h-[550px]" />
      </div>

      <div className="container-site relative z-10">
        {/* Header row matching reference layout */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="eyebrow mb-2">
              YOUTUBE UPDATES
            </p>
            <h2 id="youtube-heading" className="section-title">
              Stay updated with our latest videos.
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#632D3D] text-[#632D3D] hover:bg-[#632D3D] hover:text-[#FFFDF8] font-sans text-[0.75rem] font-semibold tracking-wider uppercase transition-all duration-200 shrink-0 self-start sm:self-auto"
            aria-label="View all videos on YouTube"
          >
            <span>VIEW ALL VIDEOS</span>
            <PlaySquare size={13} />
          </a>
        </motion.div>

        {/* 4 Video Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {videos.map((video) => (
            <motion.article
              key={video.id}
              className="group cursor-pointer flex flex-col"
              variants={cardVariants}
            >
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch: ${video.title}`}
                className="block"
              >
                {/* Video Thumbnail */}
                <div
                  className="relative overflow-hidden mb-3 bg-[#24211F] rounded-xs shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Fallback Graphic Video Canvas */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2D1F17] via-[#1A120D] to-[#0D0906]"
                    aria-hidden="true"
                  >
                    <div className="w-24 h-24 rounded-full border border-[#B68A3A]/20" />
                  </div>

                  {/* Circular Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-[#FFFDF8]/90 group-hover:bg-[#632D3D] group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-300">
                      <Play
                        size={14}
                        className="text-[#24211F] group-hover:text-[#FFFDF8] ml-0.5 transition-colors duration-300"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Timestamp Pill in bottom right */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded-[2px] z-20">
                    <span className="font-sans text-[0.62rem] font-semibold text-[#FFFDF8] tracking-wider">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Video Title */}
                <h3 className="font-sans text-[0.88rem] font-semibold text-[#24211F] leading-snug mb-1 group-hover:text-[#632D3D] transition-colors duration-200 line-clamp-2">
                  {video.title}
                </h3>

                {/* Upload Date */}
                <p className="font-sans text-[0.72rem] text-[#716B63]">
                  {video.uploadDate}
                </p>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
