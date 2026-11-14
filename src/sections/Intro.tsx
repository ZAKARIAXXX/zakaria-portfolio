"use client";
import { FC, useRef } from "react";
import Stars from "@/components/Stars";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

// The statement, word by word. Accent words keep the lavender highlight.
const SEGMENTS: { text: string; accent?: boolean }[] = [
  { text: "I build" },
  { text: "backend systems", accent: true },
  { text: "and" },
  { text: "full-stack products", accent: true },
  { text: "that" },
  { text: "actually work", accent: true },
  { text: "—" },
  { text: "fast, secure, and shipped", accent: true },
];

const WORDS = SEGMENTS.flatMap((segment) =>
  segment.text
    .split(" ")
    .map((word) => ({ word, accent: Boolean(segment.accent) })),
);

const Word = ({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent?: boolean;
}) => {
  // Each word lights up exactly as the scroll reaches it — the reader's
  // pace drives the reveal, so no word is ever missed or rushed.
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block ${accent ? "text-lavender-500" : ""}`}
    >
      {children}
    </motion.span>
  );
};

const Intro: FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section className="section md:mt-16 lg:mt-20 mt-12 relative" id="intro">
      <div className="hidden dark:block absolute inset-0 -z-10">
        <Stars />
      </div>
      <div className="container">
        <h2
          ref={headingRef}
          className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]"
        >
          {shouldReduceMotion ? (
            <>
              I build <span className="text-lavender-500">backend systems</span>{" "}
              and{" "}
              <span className="text-lavender-500">full-stack products</span>{" "}
              that <span className="text-lavender-500">actually work</span>
              {" — "}
              <span className="text-lavender-500">
                fast, secure, and shipped
              </span>
              .
            </>
          ) : (
            <>
              {WORDS.map((item, i) => {
                const start = i / WORDS.length;
                const end = start + 1 / WORDS.length;
                return (
                  <span key={i}>
                    <Word
                      progress={scrollYProgress}
                      range={[start, end]}
                      accent={item.accent}
                    >
                      {item.word}
                    </Word>
                    {i < WORDS.length - 1 ? " " : ""}
                  </span>
                );
              })}
              .
            </>
          )}
        </h2>
      </div>
    </section>
  );
};

export default Intro;
