"use client";

import { motion } from "framer-motion";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
  scrollStaggerVariants,
} from "@/src/components/scroll-reveal";

const reasons = [
  {
    number: "01",
    title: "Creative Ideas",
    description: "Fresh thinking that builds powerful, memorable brand stories.",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Smart decisions shaped by your audience, goals, and market.",
  },
  {
    number: "03",
    title: "Data-Driven Decisions",
    description: "Every move is guided by insights and focused on real impact.",
  },
  {
    number: "04",
    title: "Measurable Results",
    description: "Clear performance tracking that keeps your business growing.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="site-section relative overflow-hidden bg-[#0d1430] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_16%_15%,_rgba(57,93,210,0.22),_transparent_32%),radial-gradient(ellipse_at_88%_85%,_rgba(133,66,198,0.16),_transparent_32%)]" />

      <div className="site-container relative">
        <motion.header
          className="mx-auto mb-8 max-w-5xl text-center lg:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealTallViewport}
          variants={scrollRevealVariants}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#79a7ff,#bd79ff)] shadow-[0_0_16px_rgba(113,145,255,0.6)]" />
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#e5eaff]">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="mt-6 text-[clamp(36px,4vw,60px)] font-black leading-[1] tracking-[-0.07em] text-white">
            Built to Help Your Brand{" "}
            <span className="bg-[linear-gradient(110deg,#81aaff,#b28aff_55%,#e58bda)] bg-clip-text text-transparent">
              Grow Further
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[780px] text-[clamp(17px,1.2vw,20px)] leading-[1.7] tracking-[0.01em] font-medium text-[#bdc7e3] [text-wrap:pretty]">
            We bring strategy, creativity, and performance together to turn your business goals into lasting growth.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealTallViewport}
          variants={scrollStaggerVariants}
        >
          <motion.div className="grid gap-3 sm:grid-cols-2" variants={scrollStaggerVariants}>
            {reasons.map((reason) => (
              <motion.article
                key={reason.number}
                className="group relative min-h-[150px] overflow-hidden border border-white/[0.1] bg-white/[0.045] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7997ff]/50 hover:bg-white/[0.075] sm:p-6"
                variants={scrollRevealVariants}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(130,161,255,0.8),transparent)] opacity-50 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-black tracking-[0.16em] text-[#8ea3d5]">
                    {reason.number}
                  </span>
                  <span className="text-sm text-[#b7c8ff] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-black tracking-[-0.045em] text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#aeb9d8]">
                  {reason.description}
                </p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="group relative h-[280px] overflow-hidden border border-white/10 bg-[#182958] shadow-[0_32px_70px_rgba(0,0,0,0.3)] sm:h-[340px] lg:h-[390px]"
            variants={scrollRevealVariants}
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="Xntrova team collaborating on a growth strategy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,51,0.08)_15%,rgba(10,20,51,0.9)_100%)]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/15" />
            <div className="absolute left-0 top-0 h-full w-[3px] bg-[linear-gradient(180deg,#80aaff,#685cff,#ca79f3)]" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c5d5ff]">
                Built around your ambition
              </span>
              <p className="mt-3 max-w-sm text-2xl font-black leading-tight tracking-[-0.05em] text-white sm:text-3xl">
                A focused team. One clear direction: your growth.
              </p>
            </div>
            <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg text-white backdrop-blur-md">
              ✦
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
