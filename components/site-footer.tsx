import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
  scrollStaggerVariants,
} from "@/src/components/scroll-reveal";

const serviceLinks = [
  "Website Development",
  "SEO & Marketing",
  "Branding & Design",
  "Video Production",
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Xntrova", href: "/#about" },
  { label: "Our Work", href: "/#projects" },
  { label: "Technologies", href: "/#technologies" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "/",
  },
  {
    label: "LinkedIn",
    href: "/",
  },
  {
    label: "Facebook",
    href: "/",
  },
  {
    label: "YouTube",
    href: "/",
  },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[19px] w-[19px]">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px]">
        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM7.2 20.45H3.65V9H7.2v11.45ZM5.43 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm15.02 13.02H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29Z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[19px] w-[19px]">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.32 0 2.7.24 2.7.24v2.99h-1.52c-1.5 0-1.97.94-1.97 1.9v2.23h3.35l-.54 3.49h-2.81V24C19.61 23.07 24 18.09 24 12.07Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[19px] w-[19px]">
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.51 3.56 12 3.56 12 3.56s-7.51 0-9.38.51A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.13c1.87.51 9.38.51 9.38.51s7.51 0 9.38-.51a3 3 0 0 0 2.12-2.13C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#050a18_0%,#0b142d_48%,#1d2854_100%)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[3px] bg-[linear-gradient(90deg,#78a8ff_0%,#a47bff_48%,#84e4d0_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_50%,rgba(117,143,235,0.24),transparent_32%),radial-gradient(circle_at_8%_100%,rgba(83,65,175,0.16),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/[0.08] sm:-right-12 sm:h-[480px] sm:w-[480px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-5 top-1/2 -z-10 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[18%] -z-10 h-56 w-56 rounded-full bg-[#9bb2ff]/10 blur-3xl"
      />
      <div className="site-container py-0">
        <div className="relative overflow-hidden border-y border-white/10 py-8 sm:py-10 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-36 h-72 w-72 rounded-full border border-white/[0.06]"
          />
          <div className="grid gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-12">
            <div className="relative">
              <Link
                href="/"
                aria-label="Xntrova home"
                className="group inline-flex rounded-2xl bg-white px-4 py-2.5 transition-transform duration-300 hover:scale-[1.02]"
              >
                <Image
                  src="/images/Xntrova-logo.png"
                  alt="Xntrova - Digital Growth Partner"
                  width={190}
                  height={55}
                  className="h-auto w-[158px] transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
              <div className="mt-6 max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8bcff]">
                  Digital growth, thoughtfully done
                </p>
                <h3 className="mt-3 text-[21px] font-bold leading-[1.2] tracking-[-0.045em] text-white">
                  Make your next move{" "}
                  <span>matter.</span>
                </h3>
              </div>
              <div className="mt-6 w-fit rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c5cde0]">
                  Connect with us
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  {socialLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/[0.14] text-white"
                    >
                      <SocialIcon label={label} />
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/15 bg-[#080f22] px-2.5 py-1.5 text-[10px] font-semibold text-white opacity-0 shadow-lg group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <nav aria-label="Footer services">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <h3 className="text-base font-bold tracking-[-0.02em] text-white">
                  Services
                </h3>
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-[#c5cde0]">
                  01
                </span>
              </div>
              <ul className="mt-3 space-y-1">
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <Link
                      href="/#services"
                      className="group flex w-full items-center justify-between rounded-xl px-2.5 py-2.5 text-[14px] font-medium text-[#c5cde0] transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#71809e] transition-colors group-hover:bg-[#91adff]" />
                        {label}
                      </span>
                      <ArrowUpRight size={13} aria-hidden="true" className="text-[#8290aa] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a8bcff]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Explore Xntrova">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <h3 className="text-base font-bold tracking-[-0.02em] text-white">
                  Explore
                </h3>
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-[#c5cde0]">
                  02
                </span>
              </div>
              <ul className="mt-3 space-y-1">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex w-full items-center justify-between rounded-xl px-2.5 py-2.5 text-[14px] font-medium text-[#c5cde0] transition-all duration-200 hover:bg-white/[0.08] hover:text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#71809e] transition-colors group-hover:bg-[#91adff]" />
                        {link.label}
                      </span>
                      <ArrowUpRight size={13} aria-hidden="true" className="text-[#8290aa] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a8bcff]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="relative overflow-hidden rounded-[22px] border border-white/15 border-t-[3px] border-t-[#91adff] bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))] p-5 text-white backdrop-blur-sm sm:p-6">
              <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[#758dff]/25 blur-2xl" />
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.09] text-[#a8bcff]">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
              <h3 className="relative mt-4 text-base font-bold tracking-[-0.03em] text-white">
                Contact Us
              </h3>
              <p className="relative mt-2 text-[12px] leading-5 text-[#c0c9dc]">
                Let&apos;s talk about your goals and find the right way to move
                your business forward.
              </p>
              <Link
                href="/#contact"
                className="group relative mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-[11px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.16]"
              >
                Talk to our team
                <ArrowUpRight
                  size={13}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="overflow-hidden pt-8 text-center sm:pt-10"
        >
          <span className="block select-none whitespace-nowrap text-[clamp(4.4rem,19vw,17rem)] font-black leading-[0.72] tracking-[-0.06em] text-white/[0.08]">
            XNTROVA
          </span>
        </div>

      </div>
    </footer>
  );
}
