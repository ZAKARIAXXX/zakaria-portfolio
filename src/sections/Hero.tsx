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
    <section className="relative">
      {/* Stars overlay visible only in dark mode */}
      <div className="hidden dark:block absolute inset-0 -z-10">
        <Stars />
      </div>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl lg:text-7xl md:text-6xl mt-40 md:mt-0"
              ref={titleScope}
            >
              I Build AI Tools, SaaS Products &amp;{" "}
              <span className="text-red-orange-500">High-Performance</span>{" "}
              <span className="text-red-orange-500">Modern</span> Web
              Experiences
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center items-start mt-10 gap-6">
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
                <Button variant="text">Contact Me</Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-5 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
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
      <div className="md:h-[250vh]" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;