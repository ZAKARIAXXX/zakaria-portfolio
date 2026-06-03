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
    if (!scope.current) return;

    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current?.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
          opacity: 1, // Added for better animation visibility
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section className="section md:mt-16 lg:mt-20 mt-12 relative" id="intro" ref={scope}>
      <div className="hidden dark:block absolute inset-0 -z-10">
        <Stars />
      </div>
      <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
  I design and build modern <span className="text-red-orange-500">AI-powered</span> web applications focused on <span className="text-red-orange-500">performance</span>,{" "}
  <span className="text-red-orange-500">usability</span>, and real <span className="text-red-orange-500">business impact</span>.
</h2>
      </div>
    </section>
  );
};

export default Intro;