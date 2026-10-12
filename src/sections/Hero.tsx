"use client";
import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import Stars from "@/components/Stars";
import heroImage from "@/assets/images/hero-image.jpg.jpeg";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, stagger, useScroll, useTransform } from "framer-motion";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    if (!titleScope.current) return;

    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, [titleAnimate]);

  return (
    <section className="relative overflow-x-clip">
      {/* Stars overlay visible only in dark mode */}
      <div className="hidden dark:block absolute inset-0 -z-10">
        <Stars />
      </div>

      <div className="grid md:grid-cols-12 md:h-screen items-stretch md:sticky md:top-0">
        <div className="md:col-span-7 flex flex-col justify-center pt-28 sm:pt-32 pb-4 md:py-0 md:pt-24 lg:pt-28">
          <div className="container !max-w-full px-5 sm:px-8 md:px-12 lg:px-16">
            {/* Status / Role pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-stone-300/40 dark:bg-stone-800/60 border border-stone-300 dark:border-stone-700/60 mb-6 lg:mb-8 text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300 backdrop-blur-md shadow-sm w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              ref={titleScope}
            >
              I Build AI Tools, SaaS Products &amp;{" "}
              <span className="text-red-orange-500">High-Performance</span>{" "}
              <span className="text-red-orange-500">Modern</span> Web
              Experiences
            </motion.h1>

            <div className="flex flex-row items-center gap-4 sm:gap-6 mt-8 md:mt-10 flex-wrap">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.75,
                }}
              >
                <a href="#projects" className="inline-block">
                  <Button
                    variant="secondary"
                    iconAfter={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 5.25l7.5 7.5 7.5-7.5m-15 6l7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    }
                  >
                    <span>View My Work</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
              >
                <a href="#contact" className="inline-block">
                  <Button variant="text">Contact Me</Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:col-span-5 relative">
          {/* Mobile Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="block md:hidden px-5 sm:px-8 mt-10 mb-8 sm:mt-12 sm:mb-12"
          >
            <div className="relative mx-auto max-w-[340px] group">
              {/* Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-red-orange-500/40 via-purple-600/30 to-amber-500/20 rounded-[2rem] blur-xl opacity-75 dark:opacity-60 transition duration-700 group-hover:opacity-100 -z-10" />

              {/* Framed Portrait Card */}
              <div className="relative aspect-[4/5] w-full rounded-[1.75rem] overflow-hidden border border-stone-200/80 dark:border-white/10 bg-stone-900 shadow-2xl">
                <Image
                  src={heroImage}
                  alt="Zakaria Chelouati"
                  className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Soft Vignette Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/15 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-stone-900/60 dark:bg-stone-900/80 backdrop-blur-md border border-white/15 text-white flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-medium tracking-wide">Available</span>
                </div>

                {/* Bottom Floating Info Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-stone-900/75 dark:bg-stone-900/85 backdrop-blur-md border border-white/15 text-white shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-white">
                      Zakaria Chelouati
                    </h3>
                    <p className="text-[11px] text-stone-300 font-normal">
                      AI Tools &amp; SaaS Engineer
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="size-8 rounded-full bg-red-orange-500/20 border border-red-orange-500/40 flex items-center justify-center text-red-orange-500 hover:bg-red-orange-500 hover:text-white transition-colors"
                    aria-label="Contact Zakaria"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Portrait View */}
          <motion.div
            className="hidden md:block md:size-full md:absolute md:right-0"
            style={{
              width: portraitWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="My portrait"
              className="size-full h-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="hidden md:block md:h-[250vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;