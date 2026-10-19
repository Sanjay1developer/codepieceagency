"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import { MessageSquareQuote } from "lucide-react";
import SectionBadge from "@/components/section-badge";

const testimonials = [
  {
    quote:
      "Codepiece combines expertise with a human touch. They celebrate our wins, tackle challenges with us, and focus on long-term value.",
    name: "Ankit Gupta",
    role: "Founder",
    initials: "AG",
  },
  {
    quote:
      "A simple project became a lasting partnership. Codepiece’s proactive team, fresh ideas, and attention to detail put our brand in the right hands.",
    name: "Priya",
    role: "CEO",
    initials: "P",
  },
  {
    quote:
      "Codepiece pairs creativity with practical thinking. Every recommendation has purpose, and every conversation brings clarity and real value.",
    name: "Neha Kapoor",
    role: "Director",
    initials: "NK",
  },
  {
    quote:
      "Codepiece listened to our needs, brought fresh ideas, and built a clear strategy for our business. The results exceeded our expectations.",
    name: "Rahul Sharma",
    role: "CEO",
    initials: "RS",
  },
  {
    quote:
      "The team made a complex digital project feel simple. Communication was clear, ideas were thoughtful, and every milestone stayed on track.",
    name: "Sample Client 1",
    role: "Sample review",
    initials: "S1",
    isSample: true,
  },
  {
    quote:
      "Codepiece helped us bring more consistency to our brand and a sharper direction to our marketing. The collaboration felt focused from day one.",
    name: "Sample Client 2",
    role: "Sample review",
    initials: "S2",
    isSample: true,
  },
  {
    quote:
      "From planning through launch, the process was collaborative and well organized. We always knew what was happening and what came next.",
    name: "Sample Client 3",
    role: "Sample review",
    initials: "S3",
    isSample: true,
  },
];

const cardStyles = [
  {
    background: "bg-[linear-gradient(145deg,#f1f6ff_0%,#dfeaff_100%)]",
    accent: "from-transparent via-[#5684e8] to-transparent",
    quote: "text-[#5684e8]",
    avatar: "from-[#dce8ff] to-[#c4d8ff] text-[#3154a5]",
  },
  {
    background: "bg-[linear-gradient(145deg,#f8f2ff_0%,#ebddff_100%)]",
    accent: "from-transparent via-[#9a65d8] to-transparent",
    quote: "text-[#925bcf]",
    avatar: "from-[#eee0ff] to-[#ddc6fb] text-[#7344ad]",
  },
  {
    background: "bg-[linear-gradient(145deg,#effbf7_0%,#d8f2e9_100%)]",
    accent: "from-transparent via-[#43a987] to-transparent",
    quote: "text-[#379b78]",
    avatar: "from-[#d8f4e9] to-[#bce8d8] text-[#28785c]",
  },
  {
    background: "bg-[linear-gradient(145deg,#fff7ef_0%,#ffe7d2_100%)]",
    accent: "from-transparent via-[#e99352] to-transparent",
    quote: "text-[#dc8547]",
    avatar: "from-[#ffead7] to-[#ffd7b8] text-[#aa5e2d]",
  },
  {
    background: "bg-[linear-gradient(145deg,#fff2f5_0%,#fbdde6_100%)]",
    accent: "from-transparent via-[#d96d91] to-transparent",
    quote: "text-[#cb6085]",
    avatar: "from-[#fbe0e9] to-[#f4c7d5] text-[#a84c6b]",
  },
  {
    background: "bg-[linear-gradient(145deg,#eefaff_0%,#d5f0fa_100%)]",
    accent: "from-transparent via-[#42a3c6] to-transparent",
    quote: "text-[#318eaf]",
    avatar: "from-[#d7f1fa] to-[#b9e3f0] text-[#28738e]",
  },
  {
    background: "bg-[linear-gradient(145deg,#f4f3ff_0%,#e1defb_100%)]",
    accent: "from-transparent via-[#7770d3] to-transparent",
    quote: "text-[#6c65c3]",
    avatar: "from-[#e3e1ff] to-[#cecbf6] text-[#514a9d]",
  },
];

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pauseAutoScrollRef = useRef(false);
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (
      !carousel ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let animationFrame = 0;
    let previousTime = 0;

    const animate = (time: number) => {
      if (!previousTime) previousTime = time;
      const elapsed = time - previousTime;

      if (
        !pauseAutoScrollRef.current &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        const repeatedFirstCard = carousel.children[testimonials.length] as
          | HTMLElement
          | undefined;
        const loopDistance = repeatedFirstCard?.offsetLeft ?? 0;

        if (loopDistance > 0) {
          carousel.scrollLeft += elapsed * 0.025;
          if (carousel.scrollLeft >= loopDistance) {
            carousel.scrollLeft -= loopDistance;
          }
        }
      }

      previousTime = time;
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pauseAutoScrollRef.current = true;
    if (event.pointerType !== "mouse") return;
    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) {
      return;
    }
    event.currentTarget.scrollLeft =
      dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") {
      pauseAutoScrollRef.current = false;
      return;
    }
    if (!dragRef.current.active || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current.active = false;
    dragRef.current.pointerId = -1;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    pauseAutoScrollRef.current = false;
  }

  return (
    <section className="site-section relative overflow-hidden bg-white text-[#101633]">

      <div className="site-container relative">
        <header className="mx-auto max-w-4xl text-center">
          <SectionBadge icon={MessageSquareQuote} label="CLIENT STORIES AND REVIEWS" />

          <h2 className="mt-6 text-[clamp(36px,4vw,64px)] font-black leading-[1] tracking-[-0.07em] text-[#171d34]">
            Words From Our{" "}
            <span className="bg-[linear-gradient(110deg,#2458e8,#7035ed_55%,#b22ad1)] bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[780px] text-[clamp(17px,1.2vw,20px)] leading-[1.7] tracking-[0.01em] font-medium text-[rgba(31,38,60,0.7)] [text-wrap:pretty]">
            Long-term relationships and thoughtful collaboration are at the
            heart of the work we do. Hear from the partners who trust us to turn
            ambitious ideas into meaningful progress.
          </p>
        </header>

        <div className="relative mt-8 lg:mt-9">
          <div className="pointer-events-none absolute inset-x-4 inset-y-2 rounded-[30px] bg-white sm:inset-x-8" />
          <div
            ref={carouselRef}
            aria-label="Client testimonials"
            className="relative flex cursor-grab select-none gap-4 overflow-x-auto px-1 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing lg:gap-5"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                pauseAutoScrollRef.current = true;
              }
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse" && !dragRef.current.active) {
                pauseAutoScrollRef.current = false;
              }
            }}
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const testimonialIndex = index % testimonials.length;
              const style = cardStyles[testimonialIndex % cardStyles.length];

              return (
                <figure
                  key={`${testimonial.name}-${index}`}
                  aria-hidden={index >= testimonials.length}
                  className={`relative flex min-h-[310px] w-[min(78vw,290px)] shrink-0 flex-col overflow-hidden rounded-[22px] border border-white/80 ${style.background} p-5 shadow-none sm:min-h-[330px] sm:w-[300px] sm:p-5`}
                >
                  <div
                    className={`absolute inset-x-7 top-0 h-[2px] bg-gradient-to-r ${style.accent} opacity-80`}
                  />
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-gradient-to-br text-[11px] font-black tracking-[-0.02em] ${style.avatar}`}
                    >
                      {testimonial.initials}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dce3] bg-white/60 px-3 py-1.5 text-[9px] font-black tracking-[0.04em] text-[#46516a]">
                      <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#2458e8,#b22ad1)]" />
                      {"isSample" in testimonial && testimonial.isSample
                        ? "Sample"
                        : "Codepiece"}
                    </div>
                  </div>

                  <div
                    className={`mt-5 text-2xl font-black leading-none ${style.quote}`}
                  >
                    “
                  </div>
                  <blockquote className="mt-2 flex-1 text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-[#20232b] sm:text-base">
                    {testimonial.quote}
                  </blockquote>

                  <figcaption className="mt-4 flex items-center gap-3 border-t border-[#dfe4ed] pt-4">
                    <div>
                      <div className="text-[13px] font-bold tracking-[-0.02em] text-[#20232b]">
                        {testimonial.name}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[#6a707d]">
                        {testimonial.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
