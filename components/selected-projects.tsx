"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type WheelEvent } from "react";

import {
  scrollRevealTallViewport,
  scrollRevealVariants,
  scrollStaggerVariants,
} from "@/src/components/scroll-reveal";

import "./selected-projects.css";

const filters = ["All Projects", "Websites", "E-Commerce", "Web Applications", "Branding", "Digital Marketing"];

type Project = {
	category: string;
	featured?: boolean;
	tone: string;
	type: string;
	title: string;
	description: string;
};

const projects: Project[] = [];

export default function SelectedProjectsSection() {
	const [activeFilter, setActiveFilter] = useState("All Projects");
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const visibleProjects = projects.filter((project) => activeFilter === "All Projects" || project.category === activeFilter);
	const featuredProject = visibleProjects.find((project) => project.featured) ?? visibleProjects[0];
	const supportingProjects = visibleProjects.filter((project) => project !== featuredProject);
	const enableManualImageScroll = (event: WheelEvent<HTMLDivElement>) => {
		event.currentTarget.classList.add("is-manual-scroll");
	};

	useEffect(() => {
		if (!previewUrl) return;

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setPreviewUrl(null);
		};

		document.addEventListener("keydown", closeOnEscape);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", closeOnEscape);
			document.body.style.overflow = "";
		};
	}, [previewUrl]);

	return (
		<section className={`site-section selected-projects-section${previewUrl ? " is-preview-open" : ""}`} id="projects">
			<div className="site-container selected-projects-container">
				<header className="selected-projects-header">
					<div className="selected-projects-heading">
						<div className="selected-projects-badge"><span /> OUR DIGITAL WORK</div>
						<h2>Our Selected <span>Digital Projects</span></h2>
						<p>We create fast, secure and scalable digital experiences that help modern businesses grow, connect with customers and achieve measurable results.</p>
					</div>
				</header>

				<div className="selected-projects-filters" aria-label="Project categories">
					{filters.map((filter) => (
						<button key={filter} type="button" className={activeFilter === filter ? "is-active" : ""} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>
							{filter}
						</button>
					))}
				</div>

				{featuredProject && (
					<article className={`selected-project-featured project-tone-${featuredProject.tone}`}>
						<div className="project-featured-copy">
							<div className="project-type"><span /> {featuredProject.type}</div>
							<h3>{featuredProject.title}</h3>
							<p>{featuredProject.description} Built for performance, scalability, and measurable growth.</p>
							<div className="project-tech-list">
								<span><Image src="/icons/nextjs.webp" alt="Next.js" width={32} height={32} /> Next.js</span>
								<span><Image src="/icons/postgresql.webp" alt="PostgreSQL" width={32} height={32} /> PostgreSQL</span>
								<span><Image src="/icons/reactjs.webp" alt="React" width={32} height={32} /> React</span>
							</div>
							<Link href="/#projects" className="project-case-study">View Case Study <span><ArrowUpRight size={15} /></span></Link>
							<div className="project-results"><span><strong>3X</strong> More Inquiries</span><span><strong>60%</strong> Faster Load Time</span><span><strong>100+</strong> Dealer Accounts</span></div>
						</div>
						<div className="project-featured-visual" aria-label="AgroPower Parts website preview" />
					</article>
				)}

				<div className="selected-projects-grid">
					{supportingProjects.map((project) => (
						<article className={`selected-project-card project-tone-${project.tone}`} key={project.title}>
							<div className="project-card-copy"><div className="project-type"><span /> {project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-card-footer"><span className="project-arrow"><ArrowUpRight size={14} /></span><span className="project-tech-chip">React</span><span className="project-tech-chip">Tailwind CSS</span></div></div>
							<div className="project-card-visual"><div className="project-browser"><div className="browser-bar"><span /><span /><span /></div><div className="browser-content"><div className="browser-lines" /></div></div></div>
						</article>
					))}
				</div>

				<div className="project-visual-pair" aria-label="Additional project visuals">
					<div className="project-visual-panel panel-left">
						<div className="project-inner-card">
						<div className="browser-mockup">
							<div className="browser-header">
								<div className="browser-dots">
									<span className="dot-red" />
									<span className="dot-yellow" />
									<span className="dot-green" />
								</div>
								<div className="browser-address">
									<span className="browser-lock" aria-hidden="true">
										<svg viewBox="0 0 24 24">
											<path d="M7.5 10.5V8.5C7.5 6.3 9.3 4.5 11.5 4.5C13.7 4.5 15.5 6.3 15.5 8.5V10.5M6.5 10.5H16.5C17.6 10.5 18.5 11.4 18.5 12.5V17.5C18.5 18.6 17.6 19.5 16.5 19.5H6.5C5.4 19.5 4.5 18.6 4.5 17.5V12.5C4.5 11.4 5.4 10.5 6.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
									https://singhsonsco.com
								</div>
								<button type="button" className="browser-live" onClick={() => setPreviewUrl("https://singhsonsco.com")} aria-label="Open live site preview">
									<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
										<path d="M14.694 9.263 8.236 2.805a1.043 1.043 0 0 0-1.663 1.214L9.66 10l-3.087 5.98a1.041 1.041 0 0 0 1.663 1.215l6.458-6.458a1.04 1.04 0 0 0 0-1.474" fill="#000" />
									</svg>
									<span>LIVE PREVIEW</span>
								</button>
							</div>
							<div className="browser-viewport" onWheel={enableManualImageScroll} onTouchStart={(event) => event.currentTarget.classList.add("is-manual-scroll")}>
								<img src="/images/project.webp" alt="Project showcase" className="project-visual-image" />
							</div>
						</div>
						<div className="project-visual-info">
							<div>
								<div className="project-visual-kicker">E-Commerce Website</div>
								<h3>Singh &amp; Sons</h3>
							</div>
							<div className="project-visual-tech" aria-label="Built with Next.js, React, and PostgreSQL">
								<span><Image src="/icons/nextjs.webp" alt="" width={16} height={16} /> Next.js</span>
								<span><Image src="/icons/reactjs.webp" alt="" width={16} height={16} /> React</span>
								<span><Image src="/icons/postgresql.webp" alt="" width={16} height={16} /> PostgreSQL</span>
							</div>
						</div>
						</div>
					</div>
					<div className="project-visual-panel panel-right">
						<div className="project-inner-card">
						<div className="browser-mockup">
							<div className="browser-header">
								<div className="browser-dots">
									<span className="dot-red" />
									<span className="dot-yellow" />
									<span className="dot-green" />
								</div>
								<div className="browser-address">
									<span className="browser-lock" aria-hidden="true">
										<svg viewBox="0 0 24 24">
											<path d="M7.5 10.5V8.5C7.5 6.3 9.3 4.5 11.5 4.5C13.7 4.5 15.5 6.3 15.5 8.5V10.5M6.5 10.5H16.5C17.6 10.5 18.5 11.4 18.5 12.5V17.5C18.5 18.6 17.6 19.5 16.5 19.5H6.5C5.4 19.5 4.5 18.6 4.5 17.5V12.5C4.5 11.4 5.4 10.5 6.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
									https://chaturbhujhomoeostore.com
								</div>
								<button type="button" className="browser-live" onClick={() => setPreviewUrl("https://chaturbhujhomoeostore.com")} aria-label="Open live site preview">
									<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true">
										<path d="M14.694 9.263 8.236 2.805a1.043 1.043 0 0 0-1.663 1.214L9.66 10l-3.087 5.98a1.041 1.041 0 0 0 1.663 1.215l6.458-6.458a1.04 1.04 0 0 0 0-1.474" fill="#000" />
									</svg>
									<span>LIVE PREVIEW</span>
								</button>
							</div>
							<div className="browser-viewport" onWheel={enableManualImageScroll} onTouchStart={(event) => event.currentTarget.classList.add("is-manual-scroll")}>
								<img src="/images/project2.webp" alt="Project showcase" className="project-visual-image" />
							</div>
						</div>
						<div className="project-visual-info">
							<div>
								<div className="project-visual-kicker">Healthcare E-Commerce Website</div>
								<h3>Chaturbhuj Homoeo Store</h3>
							</div>
							<div className="project-visual-tech" aria-label="Built with Next.js, React, and Tailwind CSS">
								<span><Image src="/icons/nextjs.webp" alt="" width={16} height={16} /> Next.js</span>
								<span><Image src="/icons/reactjs.webp" alt="" width={16} height={16} /> React</span>
								<span><Image src="/icons/tailwindcss.webp" alt="" width={16} height={16} /> Tailwind CSS</span>
							</div>
						</div>
						</div>
					</div>
				</div>

				<div className="project-section-footer">
					<hr />
					<Link href="/#projects" className="project-view-all">
						<span>VIEW ALL PROJECTS</span>
						<span className="project-view-all-icon">
							<ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
						</span>
					</Link>
				</div>

				{previewUrl && (
					<div className="project-preview-modal" role="dialog" aria-modal="true" aria-label="Live website preview" onMouseDown={(event) => event.target === event.currentTarget && setPreviewUrl(null)}>
						<div className="project-preview-dialog">
							<div className="project-preview-toolbar">
								<div>
									<span className="project-preview-status" />
									<strong>LIVE PREVIEW</strong>
								</div>
								<button type="button" className="project-preview-close" onClick={() => setPreviewUrl(null)} aria-label="Close live preview">
									<X size={19} />
								</button>
							</div>
							<iframe src={previewUrl} title="Live website preview" className="project-preview-frame" />
						</div>
					</div>
				)}

			</div>
		</section>
	);
}
