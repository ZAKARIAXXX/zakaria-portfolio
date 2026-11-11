"use client";

import { Project, projects, GalleryItem } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimate, stagger, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import SplitType from "split-type";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function ProjectDetail({ project }: { project: Project }) {
  const [titleScope, titleAnimate] = useAnimate();
  const shouldReduceMotion = usePrefersReducedMotion();
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const closeModal = useCallback(() => {
    setActiveModalItem(null);
  }, []);

  useEffect(() => {
    if (!activeModalItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModalItem, closeModal]);

  useEffect(() => {
    const element = titleScope.current;
    if (!element) return;

    const frame = requestAnimationFrame(() => {
      new SplitType(element, {
        types: "lines,words",
        tagName: "span",
      });

      titleAnimate(
        element.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        },
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [titleAnimate, titleScope]);

  return (
    <div className="bg-stone-100 dark:bg-night min-h-screen text-stone-900 dark:text-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-stone-100/85 dark:bg-night/85 backdrop-blur-md border-b border-stone-200/70 dark:border-white/10">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-stone-900 dark:text-cream-100 hover:text-lavender-500 font-medium transition-colors"
        >
          <span className="text-xl transition-transform group-hover:-translate-x-1">
            ←
          </span>
          <span className="text-sm md:text-base">Back to Projects</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 bg-stone-200/80 dark:bg-stone-800/80 px-3 py-1 rounded-full font-mono">
            {project.client}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-lavender-500 hover:bg-lavender-600 text-white px-3.5 py-1.5 rounded-full transition-colors shadow-sm"
            >
              <span>Live Site</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-36">
        {/* Hero Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full aspect-video md:aspect-[21/10] rounded-2xl md:rounded-3xl overflow-hidden border border-stone-300 dark:border-stone-700 shadow-2xl bg-stone-200 dark:bg-stone-800"
        >
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            className="size-full object-cover object-top"
            priority
          />
        </motion.div>

        {/* Project Title and Description UNDER the Image */}
        <div className="mt-10 md:mt-16 max-w-4xl">
          <h1
            ref={titleScope}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 dark:text-cream-100 tracking-tight font-syne"
          >
            {project.name}
          </h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-stone-600 dark:text-stone-300 text-xl md:text-2xl mt-6 leading-relaxed font-sans"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 mb-20 border-y border-stone-300 dark:border-stone-700 py-10">
          <DetailItem label="Client" value={project.client} delay={0.1} />
          <DetailItem
            label="Year"
            value={project.year.toString()}
            delay={0.2}
          />
          <DetailItem label="Role" value={project.role} delay={0.3} />
          <DetailItem
            label="Link"
            value={project.link ? "Visit Live Site ↗" : "No live demo"}
            isLink={!!project.link}
            href={project.link}
            delay={0.4}
          />
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-medium mb-6 text-stone-800 dark:text-cream-100">
              The Challenge
            </h3>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-3xl font-medium mb-6 text-stone-800 dark:text-cream-100">
              The Solution
            </h3>
            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              {project.solution}
            </p>
            {project.link && (
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-lavender-500 hover:bg-lavender-600 text-white font-medium shadow-lg transition-transform hover:-translate-y-0.5 duration-200"
                >
                  <span>Open Live Website</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features List (if available) */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-20 pt-16 border-t border-stone-300 dark:border-stone-700"
          >
            <h3 className="text-3xl font-medium mb-8 text-stone-800 dark:text-cream-100">
              Key Features & Architecture
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 shadow-sm"
                >
                  <span className="flex items-center justify-center size-6 rounded-full bg-lavender-500/10 text-lavender-500 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-3.5"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-stone-700 dark:text-stone-300 text-base leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Screenshot Gallery (if available) */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 pt-16 border-t border-stone-300 dark:border-stone-700"
          >
            <h3 className="text-3xl font-medium mb-8 text-stone-800 dark:text-cream-100">
              Platform Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {project.gallery.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.4),
                    ease: "easeOut",
                  }}
                  onClick={() => setActiveModalItem(item)}
                  className="group flex flex-col rounded-2xl border border-stone-200/80 bg-white/70 p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl cursor-zoom-in dark:border-stone-800 dark:bg-stone-900/70"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-stone-200/80 bg-stone-100 dark:border-stone-800 dark:bg-stone-800">
                    <Image
                      src={item.image}
                      alt={`${project.name} — ${item.label}`}
                      className="size-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-3.5 flex items-center justify-between px-1">
                    <span className="font-medium text-base text-stone-800 dark:text-cream-100 group-hover:text-lavender-500 transition-colors">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-stone-400 dark:text-stone-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 md:p-10 backdrop-blur-md cursor-zoom-out"
              role="dialog"
              aria-modal="true"
              aria-label={activeModalItem.label}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-5 right-5 z-20 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white/20 hover:scale-105 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Modal Content */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col max-h-[92vh] max-w-6xl w-full cursor-default rounded-2xl overflow-hidden border border-white/15 bg-stone-900 shadow-2xl"
              >
                <div className="relative w-full max-h-[82vh] overflow-auto flex items-center justify-center bg-stone-950">
                  <Image
                    src={activeModalItem.image}
                    alt={`${project.name} — ${activeModalItem.label}`}
                    className="w-full h-auto max-h-[82vh] object-contain"
                    priority
                  />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 bg-stone-900/90 px-6 py-4 backdrop-blur-sm">
                  <span className="font-syne text-lg font-medium text-cream-100">
                    {activeModalItem.label}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    Click anywhere outside or press ESC to close
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Next Project Footer */}
      <NextProject currentSlug={project.slug} />
    </div>
  );
}

const DetailItem = ({
  label,
  value,
  isLink,
  href,
  delay,
}: {
  label: string;
  value: string;
  isLink?: boolean;
  href?: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col group cursor-default"
  >
    <span className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">
      {label}
    </span>
    {isLink && href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl md:text-2xl font-medium text-lavender-500 hover:text-lavender-600 transition-colors underline decoration-lavender-300 underline-offset-4"
      >
        {value}
      </a>
    ) : (
      <span
        className={`text-xl md:text-2xl font-medium text-stone-800 dark:text-cream-100 transition-all duration-300 ${isLink ? "underline decoration-stone-400 dark:decoration-stone-600 decoration-1 underline-offset-4 group-hover:text-amber-700 dark:group-hover:text-amber-400 group-hover:decoration-amber-700 dark:group-hover:decoration-amber-400" : "group-hover:translate-x-2"}`}
      >
        {value}
      </span>
    )}
  </motion.div>
);

const NextProject = ({ currentSlug }: { currentSlug: string }) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <section className="bg-stone-900 dark:bg-night py-24 md:py-32 text-center">
      <div className="container mx-auto px-6">
        <span className="block text-stone-400 text-sm uppercase tracking-widest mb-6">
          Next Project
        </span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group inline-block"
        >
          <h2 className="text-5xl md:text-8xl text-white tracking-tighter transition-transform duration-500 group-hover:scale-105">
            {nextProject.name}
          </h2>
          <div className="w-0 h-1 bg-white mx-auto mt-4 transition-all duration-500 group-hover:w-full opacity-50"></div>
        </Link>
      </div>
    </section>
  );
};
