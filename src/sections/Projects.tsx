'use client';

import { FC, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/projects";

const Projects: FC = () => {
  return (
    <section className="section bg-stone-100/50" id="projects">
      <div className="container">
        <h2 className="flex flex-col items-start leading-none mb-10 md:mb-16 lg:mb-20">
          <span className="text-xl md:text-2xl text-red-orange-500 font-mono mb-2 tracking-widest uppercase">
            Real World Results
          </span>
          <span className="text-5xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-stone-900">
            Selected Works<span className="text-red-orange-500">.</span>
          </span>
        </h2>
        <div className="">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project }: { project: (typeof projects)[0] }) => {
  const { name, image, slug } = project;

  // Motion values for mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the floating image
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseMove={handleMouseMove}
      className="group/project relative flex flex-col border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b cursor-none"
    >
      {/* Hover Background - Subtle gradient shift */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-200/20 to-stone-100/20 translate-y-full transition-transform duration-500 ease-out group-hover/project:translate-y-0" />
      </div>

      <div className="relative z-10 pointer-events-none">
        {/* Mobile Image (Visible only on small screens) */}
        <div className="aspect-video md:hidden relative overflow-hidden rounded-lg mb-6">
          <Image
            src={image}
            alt={`${name} project image`}
            className="size-full object-cover"
            width={800}
            height={450}
          />
        </div>

        {/* Content Row */}
        <div className="flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content]">

          {/* Project Name */}
          <div className="relative overflow-hidden">
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-stone-700 group-hover/project:text-black dark:group-hover/project:text-white transition-colors duration-300"
              initial={{ x: 0 }}
              whileHover={{ x: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {name}
            </motion.h3>
          </div>

          {/* Spacer / Description Area (Optional) */}
          <div className="hidden md:block">
            <span className="text-stone-400 group-hover/project:text-stone-600 transition-colors duration-300 text-sm opacity-0 group-hover/project:opacity-100 transform translate-y-2 group-hover/project:translate-y-0 transition-all">
              View Case Study
            </span>
          </div>

          {/* Arrow Icon */}
          <div className="size-6 overflow-hidden">
            <div className="h-6 w-12 flex group-hover/project:-translate-x-6 transition-transform duration-300 ease-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-stone-500 group-hover/project:text-black dark:group-hover/project:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-stone-500 group-hover/project:text-black dark:group-hover/project:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cursor Image (Desktop Only) */}
      <motion.div
        className="hidden md:block pointer-events-none absolute z-20 top-0 left-0 opacity-0 scale-50 group-hover/project:opacity-100 group-hover/project:scale-100 transition-all duration-300 ease-out"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        {/* Image Container */}
        <div
          className="relative w-80 aspect-video rounded-xl overflow-hidden shadow-2xl origin-center"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={image}
            alt={`${name} preview`}
            className="size-full object-cover"
            width={400}
            height={225}
          />
        </div>

        {/* "View Project" Button - Floating on top of image */}
        <div
          className="absolute bg-red-orange-500 text-white rounded-full size-20 flex items-center justify-center font-bold text-sm uppercase tracking-wide shadow-lg border-2 border-white backdrop-blur-md"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          View
        </div>
      </motion.div>
    </Link>
  );
};

export default Projects;