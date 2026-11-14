"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import heroImage from "@/assets/images/hero-image.jpg.jpeg";

const ABOUT_COPY =
  "I'm Zakaria Chelouati, a Computer Engineering graduate (Licence in Génie Informatique, 2026) now in the engineering cycle — Génie Logiciel — at High-Tech Rabat, based in Salé. I build full-stack web products — and I break them too: I'm on Hack The Box's Senior Web Penetration Tester path. I ship real code and keep growing — that's the standard I work to.";

const HIGHLIGHTS = [
  "Zakaria Chelouati",
  "full-stack web products",
  "Senior Web Penetration Tester",
  "ship real code",
] as const;

const highlightRanges = HIGHLIGHTS.map((phrase) => {
  const start = ABOUT_COPY.indexOf(phrase);
  return { start, end: start + phrase.length };
});

type WordToken = {
  token: string;
  highlighted: boolean;
  whitespace: boolean;
};

const words: WordToken[] = (() => {
  const tokens = ABOUT_COPY.split(/(\s+)/);
  let cursor = 0;

  return tokens.map((token) => {
    const start = cursor;
    cursor += token.length;
    const whitespace = /^\s+$/.test(token);
    const highlighted =
      !whitespace &&
      highlightRanges.some(
        (range) => start >= range.start && start < range.end,
      );

    return { token, highlighted, whitespace };
  });
})();

const totalWords = words.filter((word) => !word.whitespace).length;

const ScrollWord = ({
  children,
  progress,
  range,
  highlighted,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlighted: boolean;
}) => {
  // Same scroll-linked reveal as the Intro statement: each word lights up
  // exactly as the scroll reaches it, so the reader's pace drives the
  // animation and no word is ever rushed past.
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {highlighted ? (
        <span className="text-lavender-500 animate-lavender-shimmer">
          {children}
        </span>
      ) : (
        children
      )}
    </motion.span>
  );
};

export default function About() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.85", "end 0.45"],
  });
  let wordIndex = 0;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-100 py-24 md:py-32 lg:py-40 dark:bg-night"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 size-[34rem] rounded-full bg-lavender-500/10 blur-3xl dark:bg-lavender-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 size-[30rem] rounded-full bg-stone-300/50 blur-3xl dark:bg-lavender-500/5"
      />

      <div className="container relative">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 flex items-center gap-4 md:mb-10"
            >
              <span className="h-px w-10 bg-lavender-500" />
              <h2 className="font-syne text-sm font-semibold uppercase tracking-[0.3em] text-lavender-500 md:text-base">
                About
              </h2>
            </motion.div>

            <motion.p
              ref={paragraphRef}
              className="font-syne text-3xl font-medium leading-[1.15] tracking-tight text-stone-900 md:text-4xl lg:text-5xl dark:text-cream-100"
            >
              {words.map((word, index) => {
                if (word.whitespace) {
                  return word.token;
                }

                if (shouldReduceMotion) {
                  return (
                    <span
                      key={`${index}-${word.token}`}
                      className={
                        word.highlighted
                          ? "text-lavender-500 animate-lavender-shimmer"
                          : undefined
                      }
                    >
                      {word.token}
                    </span>
                  );
                }

                const start = wordIndex / totalWords;
                const end = start + 1 / totalWords;
                wordIndex += 1;

                return (
                  <ScrollWord
                    key={`${index}-${word.token}`}
                    progress={scrollYProgress}
                    range={[start, end]}
                    highlighted={word.highlighted}
                  >
                    {word.token}
                  </ScrollWord>
                );
              })}
            </motion.p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-br from-lavender-500/25 via-lavender-500/5 to-transparent blur-2xl"
              />

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className="relative overflow-hidden rounded-[2rem] border border-stone-300 bg-stone-200 shadow-2xl dark:border-white/10 dark:bg-stone-800"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={heroImage}
                    alt="Zakaria Chelouati"
                    className="size-full object-cover object-[center_18%]"
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="group/callout relative -mt-12 ml-auto mr-3 w-[88%] rounded-2xl border border-lavender-500/30 bg-white/90 p-5 shadow-xl backdrop-blur-md md:-mt-14 md:p-6 dark:border-lavender-500/30 dark:bg-stone-900/90"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-2xl bg-lavender-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover/callout:opacity-100 motion-reduce:hidden"
                />
                <div className="relative">
                  <span className="font-syne text-[11px] font-semibold uppercase tracking-[0.3em] text-lavender-500">
                    Current focus
                  </span>
                  <p className="mt-2 font-syne text-xl font-semibold leading-tight text-stone-900 md:text-2xl dark:text-cream-100">
                    Backend engineering &amp; AppSec
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
