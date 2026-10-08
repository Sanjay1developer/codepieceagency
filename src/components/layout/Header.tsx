"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#projects" },
  { label: "Contact Us", href: "/#contact" },
];

const servicesSubmenu = [
  {
    label: "Website Development",
    href: "/#service-01",
    description: "Modern, conversion-focused websites built for business growth.",
    icon: "/icons/website-development.webp",
  },
  {
    label: "Social Media Optimization (SEO)",
    href: "/#service-02",
    description: "Search visibility strategies that improve rankings and organic reach.",
    icon: "/icons/seo-optimization.png",
  },
  {
    label: "Performance Marketing",
    href: "/#service-03",
    description: "Targeted campaigns designed to drive measurable leads and sales.",
    icon: "/icons/digital-marketing.webp",
  },
  {
    label: "Social Media Marketing",
    href: "/#service-04",
    description: "Content and promotion systems that strengthen your brand presence.",
    icon: "/icons/social-media-marketing.webp",
  },
  {
    label: "Branding",
    href: "/#service-05",
    description: "Identity, positioning, and messaging that make your brand memorable.",
    icon: "/icons/brand-identity-design.webp",
  },
  {
    label: "Graphic Design",
    href: "/#service-06",
    description: "Visual design assets that elevate engagement and trust.",
    icon: "/icons/graphic-design.png",
  },
  {
    label: "Video Production",
    href: "/#service-07",
    description: "High-impact video content for campaigns, launches, and storytelling.",
    icon: "/icons/video-production.webp",
  },
  {
    label: "Website Maintenance",
    href: "/#service-08",
    description: "Ongoing support to keep your website fast, secure, and current.",
    icon: "/icons/website-maintenance-security.webp",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = "mobile-navigation";
  const mobileServicesMenuId = "mobile-services-submenu";
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const servicesWrapperRef = useRef<HTMLDivElement | null>(null);
  const servicesCloseTimerRef = useRef<number | null>(null);

  const isActive = (href: string) => {
    const normalizedHref = href.split("#")[0] || "/";
    if (normalizedHref === "/") return pathname === "/";
    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  const clearServicesCloseTimer = () => {
    if (servicesCloseTimerRef.current) {
      window.clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
  };

  const openServicesDropdown = () => {
    clearServicesCloseTimer();
    setServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    clearServicesCloseTimer();
    servicesCloseTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 120);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileMenu = () => {
    const nextMobileOpen = !mobileOpen;

    setMobileOpen(nextMobileOpen);

    if (!nextMobileOpen) {
      setMobileServicesOpen(false);
    }
  };

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        servicesWrapperRef.current &&
        !servicesWrapperRef.current.contains(event.target as Node)
      ) {
        clearServicesCloseTimer();
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearServicesCloseTimer();
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setMobileOpen(false);
      setMobileServicesOpen(false);
      mobileMenuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearServicesCloseTimer();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#E7EDF7] backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-[0_10px_30px_rgba(16,22,51,0.08)]" : "bg-white/80"
      }`}
    >
      <nav
        className="
          mx-auto flex h-[84px] w-full max-w-[1380px]
          items-center
          overflow-visible
          px-3
          transition-all duration-300
          lg:px-2
        "
      >
        {/* ==================== LOGO ==================== */}
        <Link
          href="/"
          aria-label="xntrova Home"
          className="
            flex shrink-0 items-center
            rounded-full
            transition-transform duration-300
            hover:scale-[1.02]
          "
        >
          <Image
            src="/images/Xntrova-logo.png"
            alt="xntrova - Digital Growth Partner"
            width={190}
            height={55}
            priority
            className="h-auto w-[160px] sm:w-[180px] lg:w-[200px]"
          />
        </Link>

        {/* ==================== DESKTOP NAV ==================== */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div
            className="
              relative flex items-center
              overflow-visible
              rounded-full
              border border-[#E6ECF5]
              bg-[linear-gradient(180deg,rgba(248,250,255,0.96),rgba(241,246,255,0.92))]
              gap-1 p-1
              shadow-[0_10px_30px_rgba(16,22,51,0.04)]
            "
          >
            {navItems.map((item) => {
              if (item.label === "Services") {
                return (
                  <div
                    key={item.href}
                    ref={servicesWrapperRef}
                    className="relative z-20"
                    onMouseEnter={openServicesDropdown}
                    onMouseLeave={scheduleServicesClose}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="menu"
                      aria-label="Open services menu"
                      onClick={() => {
                        clearServicesCloseTimer();
                        setServicesOpen((prev) => !prev);
                      }}
                      className={`
                        group relative
                        flex items-center gap-1.5
                        rounded-full
                        px-4 py-2.5
                        text-[14px]
                        font-semibold
                        tracking-[0.03em]
                        transition-all duration-300
                        xl:px-5
                        text-[#101633] hover:bg-[#EAF3FF] hover:text-[#087FF5]
                      `}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />

                    </button>

                    <div
                      className={`absolute left-1/2 top-[calc(100%+12px)] z-50 w-[900px] -translate-x-1/2 rounded-[26px] border border-[#DDEAFB] bg-white p-2.5 shadow-[0_24px_70px_rgba(16,22,51,0.14)] transition-all duration-200 ${
                        servicesOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      } ${servicesOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                    >
                      <div className="overflow-hidden rounded-[22px] border border-[#EDF2F8] bg-[radial-gradient(circle_at_top_left,_rgba(8,127,245,0.12),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f4f8ff_52%,#f9fbff_100%)] p-2.5">
                        <div className="mb-2.5 flex items-center justify-between rounded-[16px] border border-[#EAF1F8] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F9FF_100%)] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(16,22,51,0.05)]">
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697688]">
                              Premium solutions
                            </p>
                            <h3 className="mt-1 text-[15px] font-semibold text-[#101633]">
                              Digital growth services
                            </h3>
                          </div>
                          <Link
                            href="/#services"
                            onClick={() => setServicesOpen(false)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[#B6D4FF]/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] px-2.5 py-1.5 text-[11px] font-semibold text-[#0A67D0] shadow-[0_0_0_1px_rgba(182,212,255,0.20),0_0_18px_rgba(103,163,255,0.22),0_8px_18px_rgba(8,127,245,0.08)] transition-all duration-300 hover:border-[#B6D4FF] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(240,246,255,0.08))] hover:shadow-[0_0_0_1px_rgba(182,212,255,0.24),0_0_20px_rgba(103,163,255,0.26),0_10px_22px_rgba(8,127,245,0.10)]"
                          >
                            <span>View all services</span>
                            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#B4D5FF] bg-white text-[#0A67D0]">
                              <ArrowUpRight size={10} />
                            </span>
                          </Link>
                        </div>

                        <div className="grid grid-cols-[1.7fr_0.65fr] gap-2.5">
                          <div className="grid grid-cols-4 gap-2">
                            {servicesSubmenu.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setServicesOpen(false)}
                                className="group rounded-[18px] border border-[#E5EDF8] bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-2.5 text-left shadow-[0_8px_18px_rgba(16,22,51,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#CFE7FF] hover:shadow-[0_14px_30px_rgba(8,127,245,0.12)]"
                              >
                                <div className="mb-2 flex items-center justify-between">
                                  <Image
                                    src={subItem.icon}
                                    alt={subItem.label}
                                    width={60}
                                    height={60}
                                    className="opacity-90 transition-transform duration-300 ease-out group-hover:scale-110"
                                  />

                                  <ArrowUpRight
                                    size={13}
                                    className="text-[#7A8196] transition-transform duration-200 group-hover:text-[#087FF5]"
                                  />
                                </div>

                                <span className="text-[12.5px] font-semibold text-[#101633]">
                                  {subItem.label}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="relative overflow-hidden rounded-[20px] border border-[#1C2A47] bg-[linear-gradient(180deg,#1a2240_0%,#101633_100%)] p-3.5 text-white shadow-[0_18px_40px_rgba(16,22,51,0.28)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(77,154,255,0.28),transparent_38%)]" />

                            <div className="relative z-10">
                              <div className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EAF3FF]">
                                FREE DIGITAL AUDIT
                              </div>

                              <h4 className="mt-4 text-[16px] font-semibold leading-[1.3] text-white">
                                Find your biggest growth opportunities.
                              </h4>

                              <p className="mt-1.5 text-[10.5px] leading-[1.6] text-[#D2DBEE]">
                                We&apos;ll review your website, SEO, social presence and digital visibility to identify where you&apos;re losing potential customers—and what you can improve.
                              </p>

                              <Link
                                href="/#contact"
                                onClick={() => setServicesOpen(false)}
                                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#B6D4FF]/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_0_0_1px_rgba(182,212,255,0.20),0_0_18px_rgba(103,163,255,0.32),0_8px_18px_rgba(8,127,245,0.12)] transition-all duration-300 hover:bg-white hover:text-[#101633] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.28),0_0_22px_rgba(149,196,255,0.40),0_10px_22px_rgba(255,255,255,0.16)]"
                              >
                                <span>GET YOUR FREE AUDIT</span>
                                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[10px]">
                                  <ArrowUpRight size={9} />
                                </span>
                              </Link>

                              <p className="mt-2 text-[9px] leading-4 text-[#C4CFE4]">
                                No commitment · Actionable insights
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative
                    flex items-center
                    rounded-full
                    px-4 py-2.5
                    text-[14px]
                    font-semibold
                    tracking-[0.03em]
                    transition-all duration-300
                    xl:px-5
                    text-[#101633] hover:bg-[#EAF3FF] hover:text-[#087FF5]
                  `}
                >
                  {item.label}

                </Link>
              );
            })}
          </div>
        </div>

        {/* ==================== RIGHT ACTIONS ==================== */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* CTA */}
          <Link
            href="/#contact"
            className="
              group flex items-center gap-3
              rounded-full
              bg-[linear-gradient(135deg,#101633_0%,#1a2447_100%)]
              px-5 py-2.5
              text-[12px]
              font-semibold
              tracking-[0.04em]
              text-white
              shadow-[0_12px_30px_rgba(16,22,51,0.16)]
              transition-all duration-300
              hover:bg-[linear-gradient(135deg,#0f7ef5_0%,#0d63d8_100%)]
              hover:shadow-[0_14px_34px_rgba(8,127,245,0.26)]
            "
          >
            <span>Start a Project</span>

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                rounded-full
                border border-white/30
                bg-white/10
                transition-all duration-300
                group-hover:border-white/50
                group-hover:bg-white/15
              "
            >
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </span>
          </Link>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          ref={mobileMenuButtonRef}
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls={mobileOpen ? mobileMenuId : undefined}
          className="
            ml-auto flex h-11 w-11
            items-center justify-center
            rounded-full
            border border-[#E5EAF2]
            bg-white
            text-[#101633]
            transition-all duration-300
            hover:border-[#CFE3FF]
            hover:bg-[#F4F9FF]
            hover:text-[#087FF5]
            lg:hidden
          "
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ==================== MOBILE NAV ==================== */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="
            relative z-50
            mx-3 mt-3
            w-auto max-w-[1380px]
            overflow-hidden
            rounded-[28px]
            border border-[#E6EAF2]
            bg-white
            p-3
            shadow-[0_15px_40px_rgba(16,22,51,0.10)]
            lg:hidden
          "
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              if (item.label === "Services") {
                return (
                  <div
                    key={item.href}
                    className={`rounded-2xl transition-colors duration-200 ${
                      active || mobileServicesOpen
                        ? "border border-[#CFE7FF] bg-[#EFF6FF]"
                        : "border border-[#EEF2F7] bg-[#F9FBFE]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls={mobileServicesMenuId}
                      onClick={(event) => {
                        event.stopPropagation();
                        setMobileServicesOpen((prev) => !prev);
                      }}
                      className={`flex w-full touch-manipulation items-center justify-between rounded-2xl px-5 py-3.5 text-left text-sm font-semibold transition-all duration-200 ${
                        active || mobileServicesOpen
                          ? "text-[#087FF5]"
                          : "text-[#101633] hover:bg-[#F7F9FC] hover:text-[#087FF5]"
                      }`}
                    >
                      <span>Services</span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      id={mobileServicesMenuId}
                      className={`grid overflow-hidden bg-white transition-[grid-template-rows,opacity,border-color] duration-200 ${
                        mobileServicesOpen
                          ? "grid-rows-[1fr] border-t border-[#EEF2F7] opacity-100"
                          : "grid-rows-[0fr] border-t border-transparent opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden px-2 py-0">
                        <Link
                          href="/#services"
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-[#087FF5] transition-colors hover:bg-[#F4F8FC]"
                        >
                          <span>All Services</span>
                          <ArrowUpRight size={14} />
                        </Link>

                        {servicesSubmenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[#1C2437] transition-colors hover:bg-[#F4F8FC] hover:text-[#087FF5]"
                          >
                            <span>{subItem.label}</span>
                            <ArrowUpRight size={14} className="text-[#7A8196]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center justify-between
                    rounded-2xl
                    px-5 py-3.5
                    text-sm font-semibold
                    transition-all duration-200
                    ${
                      active
                        ? "bg-[#EFF6FF] text-[#087FF5]"
                        : "text-[#101633] hover:bg-[#F7F9FC] hover:text-[#087FF5]"
                    }
                  `}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-[#087FF5]" />
                  )}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              className="
                mt-2 flex items-center
                justify-center gap-3
                rounded-2xl
                bg-[#101633]
                px-5 py-3.5
                text-sm font-semibold
                text-white
                transition-all duration-300
                hover:bg-[#087FF5]
              "
            >
              LET&apos;S TALK

              <span
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  border border-white/30
                  bg-white/10
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
