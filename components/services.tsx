"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
  scrollStaggerVariants,
} from "@/src/components/scroll-reveal";
import "./services.css";

const services = [
  {
    number: "01",
    title: "Website Development",
    description: "Fast, responsive websites crafted to engage visitors and convert them into customers.",
    icon: "/icons/website-development.webp",
    className: "card-yellow",
  },
  {
    number: "02",
    title: "Social Media Optimization (SEO)",
    description: "Data-driven SEO strategies that improve visibility, rankings, and organic reach.",
    icon: "/icons/seo-optimization.png",
    className: "card-pink",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description: "Targeted campaigns built to generate quality leads and measurable business growth.",
    icon: "/icons/digital-marketing.webp",
    className: "card-purple",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description: "Creative social strategies that grow your audience and strengthen your online presence.",
    icon: "/icons/social-media-marketing.webp",
    className: "card-sky",
  },
  {
    number: "05",
    title: "Branding",
    description: "Distinctive brand identities that build recognition, credibility, and lasting trust.",
    icon: "/icons/brand-identity-design.webp",
    className: "card-mint",
  },
  {
    number: "06",
    title: "Graphic Design",
    description: "Visual designs that communicate your story and make your brand memorable.",
    icon: "/icons/graphic-design.png",
    className: "card-peach",
  },
  {
    number: "07",
    title: "Video Production",
    description: "Story-led videos that engage your audience, build emotion, and drive results.",
    icon: "/icons/video-production.webp",
    className: "card-lilac",
  },
  {
    number: "08",
    title: "Website Maintenance",
    description: "Reliable ongoing support to keep your website secure, updated, and running smoothly.",
    icon: "/icons/website-maintenance-security.webp",
    className: "card-blue",
  },
  {
    number: "09",
    title: "AI Automation & Development",
    description: "Smart AI systems and automations that streamline work and accelerate growth.",
    icon: "/images/aibot.webp",
    className: "card-purple",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="site-section services-section scroll-mt-28">
      <div className="site-container services-container">
        <motion.div
          className="services-header"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealTallViewport}
          variants={scrollRevealVariants}
          data-scroll-reveal
        >
          <div className="services-badge">
            <span />
            OUR SERVICES
          </div>

          <h2>
            Everything You Need to
            <span className="services-gradient">Grow Online</span>
          </h2>

          <p>
            From strategy to execution, we provide end-to-end digital solutions to help your business grow faster and stronger.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealTallViewport}
          variants={scrollStaggerVariants}
          data-scroll-reveal
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              id={`service-${service.number}`}
              className={`service-card scroll-mt-24 ${service.className}`}
              variants={scrollRevealVariants}
              data-scroll-reveal
            >
              <div className="service-number">{service.number}</div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <div className="service-visual">
                <div className="service-visual-inner">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={90}
                    height={90}
                    className="service-icon"
                  />
                </div>
              </div>

              <button className="service-cta" aria-label={`Learn more about ${service.title}`}>
                <span>Learn More</span>
                <span className="service-cta-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="services-divider"
          initial="hidden"
          whileInView="visible"
          viewport={scrollRevealTallViewport}
          variants={scrollRevealVariants}
          data-scroll-reveal
        >
          <span className="services-rule" />
          <div className="services-divider-actions">
            <Link href="/#services" className="services-view-all">
              <span>VIEW ALL SERVICES</span>
              <span className="services-view-all-icon">
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
