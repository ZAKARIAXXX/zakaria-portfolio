"use client";
import { FC, useEffect } from "react";
import Stars from "@/components/Stars";
import { useAnimate, useInView, stagger } from "framer-motion";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (!inView) return;

    const section = scope.current;
    const heading = section?.querySelector("h2");
    if (!section || !heading) return;

    const frame = requestAnimationFrame(() => {
      new SplitType(heading, {
        types: "lines,words",
        tagName: "span",
      });

      animate(
        section.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        },
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [inView, animate, scope]);

  return (
    <section
      className="section md:mt-16 lg:mt-20 mt-12 relative"
      id="intro"
      ref={scope}
    >
      <div className="hidden dark:block absolute inset-0 -z-10">
        <Stars />
      </div>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          I build <span className="text-lavender-500">backend systems</span> and{" "}
          <span className="text-lavender-500">full-stack products</span> that{" "}
          <span className="text-lavender-500">actually work</span>
          {" — "}
          <span className="text-lavender-500">fast, secure, and shipped</span>.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
