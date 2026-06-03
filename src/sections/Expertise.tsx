'use client';

import { FC, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimate, stagger } from "framer-motion";
import SplitType from "split-type";

const skills = [
    {
        title: "Full-Stack Development",
        description: "Building modern web applications with clean architecture, responsive UI, and scalable frontend systems.",
        tools: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
        stats: "01 — Full-Stack Development"
    },
    {
        title: "AI & Automation",
        description: "Developing AI-powered tools, outreach systems, and workflow automations focused on real-world productivity.",
        tools: ["OpenAI APIs", "Automation Systems", "AI Workflows", "Chat Interfaces", "CRM Systems"],
        stats: "02 — AI & Automation"
    },
    {
        title: "UI/UX & Product Design",
        description: "Designing fast, minimal, and user-focused interfaces that feel modern and intuitive.",
        tools: ["Figma", "Responsive Design", "Wireframing", "Prototyping", "Design Systems"],
        stats: "03 — UI/UX & Product Design"
    },
    {
        title: "Performance & Optimization",
        description: "Improving speed, usability, accessibility, and overall product experience for modern websites and apps.",
        tools: ["Performance Optimization", "SEO Basics", "Accessibility", "Clean UI Architecture", "Mobile Experience"],
        stats: "04 — Performance & Optimization"
    }
];

const Expertise: FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [titleScope, titleAnimate] = useAnimate();

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"] // Track scroll while component is in view
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

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
                duration: 0.6,
                delay: stagger(0.1),
                ease: "circOut"
            }
        );
    }, [titleAnimate]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-stone-900 text-white" id="expertise">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Section Title */}
                <div className="container mb-8 md:mb-12">
                    <h2 ref={titleScope} className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tighter">
                        My <span className="text-red-orange-500">Expertise</span>
                    </h2>
                </div>

                {/* Horizontal Scroll Cards */}
                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.title}
                            className="flex-shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw] min-h-[450px] bg-stone-800/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-700 hover:border-red-orange-500 transition-colors duration-500 group flex flex-col justify-between"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <span className="text-4xl md:text-5xl font-syne font-bold text-stone-700 group-hover:text-stone-600 transition-colors">
                                        0{index + 1}
                                    </span>
                                    <div className="size-10 rounded-full bg-stone-700 group-hover:bg-red-orange-500 transition-colors duration-500 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-4xl font-syne font-medium leading-tight mt-4">
                                    {skill.title}
                                </h3>
                                <p className="text-stone-400 text-base md:text-lg leading-relaxed line-clamp-4">
                                    {skill.description}
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {skill.tools.map(tool => (
                                        <span key={tool} className="px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-xs md:text-sm text-stone-300">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <div className="w-full h-1 bg-stone-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-orange-500 w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
