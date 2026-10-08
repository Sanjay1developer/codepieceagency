"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/src/hooks/use-prefers-reduced-motion";

const rotatingPhrases = ["Business Growth.", "More Leads.", "Higher Revenue."];

const clientBenefits = [
  {
    title: "More qualified leads",
    description: "Reach the right audience with focused digital campaigns.",
    icon: Target,
  },
  {
    title: "A stronger online presence",
    description: "Build trust with a polished brand and better website.",
    icon: Sparkles,
  },
  {
    title: "A clear growth direction",
    description: "Bring strategy, creative, and execution together.",
    icon: Compass,
  },
  {
    title: "Progress you can measure",
    description: "Track meaningful results and improve with confidence.",
    icon: TrendingUp,
  },
];

export default function Hero() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (
      shouldReduceMotion ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const currentPhrase = rotatingPhrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayedText.length + 1);

        if (nextText !== displayedText) {
          setDisplayedText(nextText);
          return;
        }

        setIsDeleting(true);
        return;
      }

      const nextText = currentPhrase.slice(0, Math.max(0, displayedText.length - 1));

      if (nextText !== displayedText) {
        setDisplayedText(nextText);
        return;
      }

      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, isDeleting ? 55 : 110);

    return () => clearTimeout(timeout);
  }, [displayedText, phraseIndex, isDeleting, shouldReduceMotion]);
  return (
    <section className="site-section site-hero-section relative isolate overflow-hidden bg-[linear-gradient(118deg,#070c1a_0%,#0a1428_46%,#10172d_100%)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/images/galaxy.webp')] bg-cover bg-center opacity-65"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(4,9,23,0.78)_0%,rgba(5,12,29,0.56)_48%,rgba(8,12,30,0.38)_100%)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(52,112,231,0.22),transparent_42%),radial-gradient(ellipse_at_86%_24%,rgba(132,86,220,0.2),transparent_36%),radial-gradient(ellipse_at_52%_110%,rgba(36,110,169,0.15),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.025),transparent_42%,rgba(153,172,255,0.035))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,16,0.34)_100%)]" />

      <div className="site-container relative">
        <div className="grid items-center gap-8 lg:min-h-[560px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="relative z-10 max-w-[640px]">
            <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#457fe4]/10 blur-[90px]" />
            <div className="relative">
              <div className="relative mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.19em] text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#91b6ff]/25 bg-[#6795ff]/15">
                  <Sparkles size={13} className="text-[#a7d6ff]" />
                </span>
                Digital Growth Partner
              </div>

              <h1 className="mt-4 text-[clamp(1.95rem,4.1vw,3.55rem)] font-bold leading-[1.05] tracking-[-0.06em] text-white [text-wrap:balance]">
                We Build Digital Experiences That
                <span className="block min-h-[1.08em]">
                  <span className="hero-animated-phrase block bg-gradient-to-r from-[#82c4ff] via-[#9aabff] to-[#c39cff] bg-clip-text text-transparent">
                    {displayedText}
                    <span className="ml-1 inline-block h-[0.78em] w-[2px] animate-pulse rounded-full bg-[#b8d9ff] align-[-0.04em]">
                      &nbsp;
                    </span>
                  </span>
                  <span className="hero-reduced-motion-phrase hidden bg-gradient-to-r from-[#82c4ff] via-[#9aabff] to-[#c39cff] bg-clip-text text-transparent">
                    Business Growth.
                  </span>
                </span>
              </h1>

              <p className="mt-4 max-w-[550px] text-[13px] leading-6 text-slate-300 sm:text-[15px] sm:leading-7 [text-wrap:pretty]">
                From high-converting websites to SEO, performance marketing, social media and
                creative solutions — xntrova brings everything your business needs to grow
                digitally, under one roof.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#7ab5ff]/50 bg-[linear-gradient(110deg,#1679f8,#4265ec)] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_14px_34px_rgba(28,101,236,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(52,119,255,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CC2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b17]"
                >
                  <span>Start Your Project</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/15">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>

                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.055] px-5 py-3 text-[13px] font-semibold text-[#eef4ff] backdrop-blur-sm transition-all duration-300 hover:border-[#8CC2FF]/50 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8CC2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b17]"
                >
                  <span>Explore Services</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </div>

            </div>
          </div>

          <div className="relative z-10">
            <div className="pointer-events-none absolute -inset-8 rounded-[36px] bg-[radial-gradient(ellipse_at_center,rgba(79,124,237,0.2),transparent_68%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.035))] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 -top-9 h-36 w-36 rounded-full border border-white/[0.06]"
              />

              <div className="relative flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.19em] text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white">
                  <Sparkles size={13} />
                </span>
                Client benefits
              </div>
              <h2 className="relative mt-2 whitespace-nowrap text-[clamp(17px,2.25vw,30px)] font-bold leading-[1.12] tracking-[-0.055em] text-white">
                What does your business gain?
              </h2>

              <div className="relative mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {clientBenefits.map(({ title, description, icon: Icon }, index) => (
                  <article
                    key={title}
                    className="flex items-start gap-3 rounded-2xl border border-white/45 bg-[#071126]/35 p-3.5 transition-colors duration-200 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white bg-[linear-gradient(145deg,rgba(207,229,255,0.24),rgba(220,211,255,0.18))] text-[#eef5ff] shadow-[0_0_18px_rgba(164,197,255,0.32),inset_0_1px_0_rgba(255,255,255,0.3)]">
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[13px] font-semibold tracking-[-0.02em] text-white">
                          {title}
                        </h3>
                        <span className="text-[9px] font-semibold tracking-[0.12em] text-white">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] leading-[1.55] text-[#aebbd3]">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
