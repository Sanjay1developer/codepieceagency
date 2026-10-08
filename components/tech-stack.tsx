"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
  scrollStaggerVariants,
} from "@/src/components/scroll-reveal";
import "./tech-stack.css";

const technologies = [
  { name: "React.js", icon: "/icons/reactjs.webp", category: "Frontend", tone: "sky" },
  { name: "Next.js", icon: "/icons/nextjs.webp", category: "Frontend", tone: "slate" },
  { name: "Vue.js", icon: "/icons/vuejs.png", category: "Frontend", tone: "mint" },
  { name: "JavaScript", icon: "/icons/javascript.webp", category: "Frontend", tone: "yellow" },
  { name: "HTML5", icon: "/icons/html5.png", category: "Frontend", tone: "peach" },
  { name: "CSS3", icon: "/icons/css3.webp", category: "Frontend", tone: "blue" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.webp", category: "Frontend", tone: "cyan" },
  { name: "Laravel", icon: "/icons/laravel.png", category: "Backend", tone: "rose" },
  { name: "Node.js", icon: "/icons/nodejs.webp", category: "Backend", tone: "green" },
  { name: "PHP", icon: "/icons/php.webp", category: "Backend", tone: "lilac" },
  { name: "MySQL", icon: "/icons/mysql.webp", category: "Database", tone: "ice" },
  { name: "MongoDB", icon: "/icons/mongodb.webp", category: "Database", tone: "mint" },
  { name: "PostgreSQL", icon: "/icons/postgresql.webp", category: "Database", tone: "blue" },
  { name: "Bootstrap", icon: "/icons/bootstrap.png", category: "Tools", tone: "violet" },
  { name: "WordPress", icon: "/icons/wordpress.webp", category: "CMS", tone: "sky" },
  { name: "Webflow", icon: "/icons/webflow.webp", category: "CMS", tone: "cyan" },
  { name: "Wix", icon: "/icons/wix.png", category: "CMS", tone: "lilac" },
  { name: "Framer", icon: "/icons/framer.png", category: "CMS", tone: "slate" },
];

const categories = ["All Technologies", "Frontend", "Backend", "Database", "CMS", "Design", "Tools"];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("All Technologies");
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const visibleTechnologies = technologies.filter(
    (technology) =>
      showAllTechnologies || activeCategory !== "All Technologies"
        ? activeCategory === "All Technologies" || technology.category === activeCategory
        : technology.category !== "CMS",
  );

  return (
    <section className="site-section tech-stack-section" id="technologies">
      <div className="site-container tech-stack-container">
        <div className="tech-stack-header">
          <div className="tech-stack-badge">
            <span />
            TECHNOLOGIES WE USE
          </div>

          <h2>
            Built With Modern <span className="tech-stack-gradient">Technologies</span>
          </h2>

          <p>
            We work with industry-leading tools and technologies to build fast, secure and
            scalable digital solutions for modern businesses.
          </p>
        </div>

        <div className="tech-stack-filters" aria-label="Technology categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "is-active" : ""}
              onClick={() => {
                setActiveCategory(category);
                setShowAllTechnologies(false);
              }}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tech-stack-grid">
          {visibleTechnologies.map((technology) => (
            <article className={`tech-card tech-card-${technology.tone}`} key={technology.name}>
              <Image
                src={technology.icon}
                alt={`${technology.name} logo`}
                width={88}
                height={88}
                className="tech-card-icon"
              />
              <h3>{technology.name}</h3>
            </article>
          ))}
        </div>

        <div className="tech-stack-divider">
          <span className="tech-stack-rule" />
          <div className="tech-stack-divider-actions">
            <button
              type="button"
              className="tech-stack-view-all"
              onClick={() => {
                setActiveCategory("All Technologies");
                setShowAllTechnologies(true);
              }}
            >
              <span>VIEW ALL</span>
              <span className="tech-stack-view-all-icon">
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
