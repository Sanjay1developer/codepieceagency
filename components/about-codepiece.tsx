"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Building2, ChevronUp } from "lucide-react";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
  scrollStaggerVariants,
} from "@/src/components/scroll-reveal";
import SectionBadge from "@/components/section-badge";

const aboutPoints = [
  {
    title: "Creative Ideas",
    description: "Fresh thinking that builds powerful brand stories.",
    icon: "▣",
    accent: "bg-[#7898f5]/35",
  },
  {
    title: "Strategic Planning",
    description: "Smart strategies backed by deep market insights.",
    icon: "</>",
    accent: "bg-[#b27be5]/35",
  },
  {
    title: "Data-Driven Decisions",
    description: "Decisions tied to real impact and ROI.",
    icon: "◌",
    accent: "bg-[#4bbd98]/35",
  },
  {
    title: "Measurable Results",
    description: "Real results that drive growth and long-term success.",
    icon: "✦",
    accent: "bg-[#ed9a69]/35",
  },
];

const youtubeVideoId = "ScMzIvxBSi4";

export default function AboutCodepieceSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <section id="about" className="site-section relative overflow-hidden bg-[linear-gradient(135deg,#f8faff_0%,#f3f6ff_48%,#f5f1ff_100%)] text-[#101633]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_18%,_rgba(138,162,255,0.17),_transparent_32%),radial-gradient(ellipse_at_92%_84%,_rgba(190,153,255,0.13),_transparent_30%)]" />

      <div className="site-container relative">
        <motion.div
          className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealTallViewport}
          variants={scrollStaggerVariants}
        >
          <motion.div
            className="relative h-[370px] overflow-hidden rounded-[26px] border border-[#dfe7ff] bg-[linear-gradient(135deg,#0d1b46,#1d2d68_32%,#2d56d6_100%)] ring-1 ring-white/50 sm:h-[440px] lg:h-[540px]"
            variants={scrollRevealVariants}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,17,34,0.25),rgba(9,17,34,0.6))]" />
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
              alt="Codepiece team member"
              className="h-full w-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(135,170,255,0.34),_transparent_34%),linear-gradient(180deg,transparent,rgba(14,26,56,0.68))]" />
            <div className="absolute bottom-5 left-5 z-10 max-w-[220px] rounded-2xl border border-white/20 bg-[#101a3a]/55 px-4 py-3 text-left text-white backdrop-blur-md sm:bottom-6 sm:left-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#cfe0ff]">
                Creative Growth
              </p>
              <h3 className="mt-1.5 text-base font-bold leading-tight tracking-[-0.035em] text-white sm:text-lg">
                Ideas that move brands forward.
              </h3>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#3a7dff,#90b9ff,#5f5cfb)]" />
            <button
              type="button"
              aria-label="Play about video"
              onClick={() => setIsVideoOpen(true)}
              className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-white/90 bg-white/60 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <span className="ml-1 text-2xl text-[#1a2140]">▶</span>
            </button>
          </motion.div>

          <motion.div
            className="relative flex flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white/75 p-6 backdrop-blur-sm sm:p-7 lg:h-[540px] lg:p-8"
            variants={scrollRevealVariants}
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(115,143,239,0.14),transparent_70%)]" />
            <div className="relative flex flex-1 flex-col justify-center">
              <SectionBadge icon={Building2} label="ABOUT THE CODEPIECE TEAM" />
              <h3 className="mt-3 max-w-lg text-[clamp(27px,2.8vw,40px)] font-black leading-[1.08] tracking-[-0.06em] text-[#171d34]">
                Driven By Ideas.{" "}
                <span className="bg-[linear-gradient(100deg,#2458e8,#7035ed_60%,#b22ad1)] bg-clip-text text-transparent">
                  Focused on Results.
                </span>
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#4f5d75] sm:text-[14px]">
                {isAboutExpanded
                  ? "At Codepiece, we bring clear strategy, bold creativity, and digital expertise together to build meaningful brands and measurable growth."
                  : "At Codepiece, we believe the strongest brands are built on clear strategy, bold creativity, and measurable results."}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {aboutPoints.map((point, index) => (
                  <article
                    key={point.title}
                    className="relative flex min-h-[96px] flex-col justify-between overflow-hidden rounded-2xl border border-[#e8ecf6] bg-white/75 p-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -bottom-5 -right-5 h-14 w-14 rounded-full ${point.accent}`}
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8792aa]">
                        0{index + 1}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1f4ff] text-xs text-[#315bdc]">
                        {point.icon}
                      </span>
                    </div>
                    <div className="relative mt-2">
                      <h4 className="text-[11px] font-bold leading-4 tracking-[-0.02em] text-[#171d34] sm:text-xs">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-[10px] leading-4 text-[#59657b]">
                        {point.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                aria-expanded={isAboutExpanded}
                onClick={() => setIsAboutExpanded((expanded) => !expanded)}
                className="group relative mt-4 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[linear-gradient(110deg,#101633,#263b76)] py-1.5 pl-5 pr-1.5 text-xs font-semibold tracking-[0.03em] text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {isAboutExpanded ? "Read Less" : "Read More"}
                <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 transition-colors group-hover:bg-white/20">
                  {isAboutExpanded ? (
                    <ChevronUp size={17} />
                  ) : (
                    <ArrowUpRight size={17} />
                  )}
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050b1a]/80 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a122a] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setIsVideoOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20"
              >
                ×
              </button>
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="Codepiece video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
