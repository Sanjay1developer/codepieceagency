"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { usePrefersReducedMotion } from "@/src/hooks/use-prefers-reduced-motion";
import SectionBadge from "@/components/section-badge";

const steps = [
  { title: "Discover", description: "Understand your goals and audience." },
  { title: "Strategize", description: "Build a focused plan for growth." },
  { title: "Create", description: "Bring the right ideas to life." },
  { title: "Launch", description: "Put your strategy into action." },
  { title: "Optimize", description: "Learn, refine, and improve results." },
  { title: "Scale", description: "Build on what works for lasting growth." },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [completedSteps, setCompletedSteps] = useState(0);
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCompletedSteps(steps.length);
          return;
        }

        [2, 4, 5, 6].forEach((completedCount, index) => {
          timers.push(
            setTimeout(
              () => setCompletedSteps(completedCount),
              650 * (index + 1),
            ),
          );
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="site-section relative overflow-hidden bg-[linear-gradient(135deg,#f7f9ff_0%,#f3f7ff_48%,#f0faf6_100%)] text-[#101633]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_10%,_rgba(138,162,255,0.15),_transparent_32%),radial-gradient(ellipse_at_88%_82%,_rgba(74,190,143,0.13),_transparent_32%)]" />

      <div className="site-container relative">
        <header className="mx-auto max-w-4xl text-center">
          <SectionBadge icon={Workflow} label="PROCESS / HOW WE WORK" />

          <h2 className="mt-6 text-[clamp(36px,4vw,64px)] font-black leading-[1] tracking-[-0.07em] text-[#171d34]">
            A Clear Process.{" "}
            <span className="bg-[linear-gradient(110deg,#2458e8,#7035ed_55%,#b22ad1)] bg-clip-text text-transparent">
              Better Outcomes.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[780px] text-[clamp(17px,1.2vw,20px)] leading-[1.7] tracking-[0.01em] font-medium text-[rgba(31,38,60,0.7)] [text-wrap:pretty]">
            From the first conversation to ongoing growth, every step is designed to move your business forward.
          </p>
        </header>

        <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-6 lg:gap-0">
          <div className="absolute left-[8%] right-[8%] top-[29px] hidden border-t border-dashed border-[#cbd3e2] lg:block" />
          <motion.div
            aria-hidden="true"
            className="absolute left-[8%] top-[29px] hidden h-[2px] bg-[linear-gradient(90deg,#496de0,#8a72dc,#10b981)] lg:block"
            initial={shouldReduceMotion ? false : { width: 0 }}
            animate={{ width: `${(Math.max(completedSteps - 1, 0) / 5) * 84}%` }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeInOut" }}
          />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.13,
                ease: "easeOut",
              }}
              className="relative flex flex-col items-center text-center"
            >
              {index === steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-0 z-0 h-[58px] w-[58px] animate-pulse rounded-full bg-emerald-400/35 blur-xl sm:h-[62px] sm:w-[62px]"
                />
              )}
              <div
                aria-label={`Step ${index + 1}: ${step.title}${completedSteps > index ? ", completed" : ""}`}
                className={`relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full text-[13px] font-bold tracking-[0.06em] transition-transform duration-300 hover:scale-105 sm:h-[62px] sm:w-[62px] ${
                  index === steps.length - 1 && completedSteps > index
                    ? "border border-white bg-[linear-gradient(135deg,#047857,#34d399)] text-white shadow-[0_10px_28px_rgba(16,185,129,0.32)] ring-4 ring-emerald-500/15"
                    : completedSteps > index
                      ? "border border-white bg-[linear-gradient(135deg,#315bdc,#7189f5)] text-white"
                      : index === steps.length - 1
                        ? "border border-white bg-[linear-gradient(135deg,#047857,#34d399)] text-white ring-4 ring-emerald-500/15"
                    : "border border-[#dfe5f0] bg-[linear-gradient(145deg,#ffffff,#f3f6fc)] text-[#596b9d]"
                }`}
              >
                0{index + 1}
                {completedSteps > index && (
                  <motion.span
                    initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 22 }
                    }
                    className="absolute -right-0.5 -top-0.5 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 border-white bg-[#18365a] text-white"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="h-2.5 w-2.5"
                    >
                      <path
                        d="m2.5 6.2 2.2 2.1 4.8-4.7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                )}
              </div>
              <div className="mt-4 max-w-[172px]">
                <h3 className={`text-lg font-black tracking-[-0.04em] sm:text-xl ${index === steps.length - 1 ? "bg-[linear-gradient(100deg,#047857,#10b981)] bg-clip-text text-transparent" : "text-[#171d34]"}`}>
                  {step.title}
                </h3>
                <p className={`mt-2 min-h-12 text-[13px] leading-[1.65] sm:text-sm ${index === steps.length - 1 ? "font-medium text-[#16805e]" : "text-[#626c80]"}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
