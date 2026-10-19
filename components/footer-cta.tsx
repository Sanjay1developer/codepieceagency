"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionBadge from "@/components/section-badge";

export default function FooterCta() {
  return (
    <section className="site-section site-cta-section bg-white">
      <div
        aria-labelledby="footer-cta-title"
        className="relative isolate min-h-[280px] w-full overflow-hidden bg-[linear-gradient(115deg,#101633_0%,#172653_52%,#315bdc_100%)] px-6 py-9 text-white shadow-[0_24px_70px_rgba(25,47,115,0.2)] sm:min-h-[300px] sm:px-10 sm:py-11 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.62fr)] lg:items-center lg:gap-8 lg:px-14"
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
          <SectionBadge icon={Sparkles} label="Your next chapter starts here" />
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
          className="relative hidden h-[250px] items-center justify-center lg:flex"
        >
          <div className="relative w-[88%] max-w-[390px] -rotate-3 rounded-[18px] border border-white/35 bg-white/95 p-2 shadow-[0_24px_55px_rgba(5,13,42,0.28)]">
            <div className="flex h-6 items-center gap-1.5 px-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff8b86]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc66e]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#6ed6a2]" />
              <span className="ml-2 h-2.5 w-[42%] rounded-full bg-[#e9edf5]" />
            </div>
            <div className="relative aspect-[1.82/1] overflow-hidden rounded-[10px] bg-[#e9edf5]">
              <Image
                src="/images/project.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 34vw, 0px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute bottom-2 right-0 w-[27%] max-w-[105px] rotate-6 rounded-[16px] border border-white/50 bg-white p-1.5 shadow-[0_18px_40px_rgba(5,13,42,0.3)]">
            <div className="relative aspect-[0.62/1] overflow-hidden rounded-[11px] bg-[#e9edf5]">
              <Image
                src="/images/project.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 10vw, 0px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
