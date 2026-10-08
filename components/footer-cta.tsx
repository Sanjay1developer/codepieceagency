"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Sparkles, TrendingUp } from "lucide-react";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
} from "@/src/components/scroll-reveal";

export default function FooterCta() {
  return (
    <section className="site-section site-cta-section bg-white">
      <div
        aria-labelledby="footer-cta-title"
        className="relative isolate min-h-[280px] w-full overflow-hidden bg-[linear-gradient(115deg,#101633_0%,#172653_52%,#315bdc_100%)] px-6 py-9 text-white shadow-[0_24px_70px_rgba(25,47,115,0.2)] sm:min-h-[300px] sm:px-10 sm:py-11 lg:flex lg:items-center lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_50%,_rgba(137,163,255,0.34),_transparent_32%),radial-gradient(circle_at_8%_100%,_rgba(104,82,219,0.2),_transparent_32%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-36 -z-10 h-[390px] w-[390px] rounded-full border border-white/10 sm:right-8 sm:top-[-220px] sm:h-[520px] sm:w-[520px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-20 -z-10 hidden h-[330px] w-[330px] rounded-full border border-white/10 sm:block"
        />

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#dce5ff] backdrop-blur-sm">
            <Sparkles size={13} aria-hidden="true" />
            Your next chapter starts here
          </div>
          <h2
            id="footer-cta-title"
            className="mt-5 max-w-lg text-[clamp(30px,4vw,48px)] font-bold leading-[1.08] tracking-[-0.055em]"
          >
            Ready to grow your digital presence?
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#d1daf2] sm:text-base">
            Let&apos;s turn your goals into a thoughtful strategy and work that
            moves your business forward.
          </p>
          <Link
            href="/#contact"
            className="group mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-xs font-semibold tracking-[0.03em] text-[#101633] shadow-[0_10px_28px_rgba(5,13,42,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#edf2ff] hover:shadow-[0_14px_34px_rgba(5,13,42,0.28)]"
          >
            Start a Project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315bdc] text-white transition-colors duration-300 group-hover:bg-[#2548bd]">
              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-7 right-[7%] hidden w-[min(34%,440px)] lg:block"
        >
          <div className="absolute -right-5 -top-5 z-10 flex items-center gap-2 rounded-2xl border border-white/20 bg-[#182958]/90 px-4 py-3 shadow-[0_18px_40px_rgba(5,13,42,0.3)] backdrop-blur-xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#83e4c1]/15 text-[#9af0d0]">
              <TrendingUp size={16} />
            </span>
            <span>
              <span className="block text-[9px] font-medium text-white/55">
                Momentum
              </span>
              <span className="block text-sm font-bold text-white">+32.8%</span>
            </span>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.17),rgba(255,255,255,0.07))] p-5 shadow-[0_28px_70px_rgba(5,13,42,0.32)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55">
                  Growth overview
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Built around your goals
                </p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] text-[#c4d3ff]">
                <BarChart3 size={17} />
              </span>
            </div>

            <div className="relative mt-5 h-[100px] overflow-hidden rounded-xl border border-white/10 bg-[#0d1a3a]/35 px-3 pt-3">
              <div className="absolute inset-0 flex flex-col justify-between px-3 py-3">
                <span className="border-t border-dashed border-white/10" />
                <span className="border-t border-dashed border-white/10" />
                <span className="border-t border-dashed border-white/10" />
              </div>
              <svg
                viewBox="0 0 360 82"
                preserveAspectRatio="none"
                className="relative h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient id="cta-chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#9eb7ff" stopOpacity=".42" />
                    <stop offset="100%" stopColor="#9eb7ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 68 C28 62 34 54 58 59 S92 52 112 48 S145 55 169 37 S206 44 228 29 S265 35 285 18 S325 25 360 5 V82 H0 Z"
                  fill="url(#cta-chart-fill)"
                />
                <path
                  d="M0 68 C28 62 34 54 58 59 S92 52 112 48 S145 55 169 37 S206 44 228 29 S265 35 285 18 S325 25 360 5"
                  fill="none"
                  stroke="#b9caff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <circle cx="360" cy="5" r="4" fill="#a8f0d4" />
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 divide-x divide-white/10">
              {[
                ["01", "Strategy"],
                ["02", "Creative"],
                ["03", "Growth"],
              ].map(([number, label]) => (
                <div key={number} className="px-3 first:pl-0 last:pr-0">
                  <span className="block text-[9px] font-semibold tracking-[0.12em] text-white/45">
                    {number}
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold text-white/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
