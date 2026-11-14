"use client";

import { motion, type Variants } from "framer-motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type EducationEntry = {
  period: string;
  badge?: string;
  title: string;
  institution?: string;
  description: string;
};

const education: EducationEntry[] = [
  {
    period: "2026–2028",
    badge: "In progress",
    title: "Cycle Ingénieur — Génie Informatique",
    institution: "High-Tech Rabat",
    description:
      "Engineering cycle, specializing in Génie Logiciel — software engineering, backend systems, Java/Spring, AI.",
  },
  {
    period: "2025–2026",
    badge: "Obtained",
    title: "Licence en Génie Informatique",
    institution: "High-Tech Rabat",
    description:
      "Bachelor in Computer Engineering — the foundation: software development, systems, networks, databases.",
  },
  {
    period: "—",
    title: "Commerce & Marketing",
    institution: "FSJES Salé, Mohammed V University",
    description:
      "The business side — economics and marketing, the complement to the engineering.",
  },
  {
    period: "—",
    title: "Technicien Spécialisé en Développement Informatique (Bac+2)",
    description:
      "Where I learned to build — full-stack development fundamentals.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const entryVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Education() {
  const shouldReduceMotion = usePrefersReducedMotion();

  return (
    <section
      id="education"
      className="section relative overflow-hidden bg-stone-100/50 dark:bg-stone-900/50"
    >
      <div className="container">
        <div className="mb-14 md:mb-20">
          <h2 className="flex flex-col items-start leading-none">
            <span className="mb-2 font-sans text-xl uppercase tracking-widest text-lavender-500 md:text-2xl">
              Timeline
            </span>
            <span className="font-syne text-5xl font-bold uppercase tracking-tighter text-stone-900 dark:text-cream-100 md:text-8xl">
              Education<span className="text-lavender-500">.</span>
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-4 top-4 w-px -translate-x-1/2 bg-stone-300 dark:bg-stone-700 md:left-1/2"
          />

          <motion.ol
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={shouldReduceMotion ? undefined : containerVariants}
            className="space-y-12 md:space-y-16"
          >
            {education.map((entry, index) => (
              <motion.li
                key={`${entry.title}-${index}`}
                variants={shouldReduceMotion ? undefined : entryVariants}
                className="group relative grid gap-3 md:grid-cols-2 md:gap-16"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full bg-lavender-500 shadow-[0_0_0_4px_rgba(188,150,236,0.12)] transition-shadow duration-300 group-hover:shadow-[0_0_0_7px_rgba(188,150,236,0.18)] md:left-1/2"
                />

                <div className="pl-10 md:pl-0 md:text-right">
                  <div className="flex flex-wrap items-center gap-3 md:justify-end">
                    <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 group-hover:text-stone-900 dark:text-stone-400 dark:group-hover:text-cream-100">
                      {entry.period}
                    </span>
                    {entry.badge ? (
                      <span className="rounded-full border border-lavender-500/30 bg-lavender-500/10 px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-lavender-500">
                        {entry.badge}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="pl-10 md:pl-0">
                  <h3 className="font-syne text-2xl font-semibold leading-tight text-stone-900 transition-colors duration-300 group-hover:text-lavender-500 dark:text-cream-100 md:text-3xl">
                    {entry.title}
                  </h3>
                  {entry.institution ? (
                    <p className="mt-1 font-sans text-sm font-medium text-stone-500 dark:text-stone-400 md:text-base">
                      {entry.institution}
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-stone-600 dark:text-stone-300 md:text-base">
                    {entry.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
