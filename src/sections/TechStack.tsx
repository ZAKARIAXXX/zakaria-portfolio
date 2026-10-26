'use client';

import { FC, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimate, stagger, MotionValue } from "framer-motion";
import SplitType from "split-type";

const tools = [
    {
        category: "Frontend Development",
        description: "Building fast, responsive, and modern interfaces focused on usability and performance.",
        tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
        color: "from-violet-500/40 via-purple-500/30 to-indigo-500/35",
        border: "border-violet-500/30 group-hover:border-violet-500/70",
        tagBg: "hover:bg-violet-500 hover:text-white hover:border-violet-500"
    },
    {
        category: "Backend & APIs",
        description: "Developing scalable backend systems, APIs, and database-driven applications.",
        tags: ["Node.js", "PostgreSQL", "Supabase", "Prisma", "REST APIs"],
        color: "from-emerald-500/40 via-teal-500/30 to-cyan-500/35",
        border: "border-emerald-500/30 group-hover:border-emerald-500/70",
        tagBg: "hover:bg-emerald-500 hover:text-white hover:border-emerald-500"
    },
    {
        category: "AI & Automation",
        description: "Creating AI-powered workflows, automation systems, and productivity-focused tools.",
        tags: ["OpenAI APIs", "Workflow Automation", "Chat Systems", "CRM Logic", "AI Integrations"],
        color: "from-fuchsia-500/40 via-pink-500/30 to-purple-500/35",
        border: "border-fuchsia-500/30 group-hover:border-fuchsia-500/70",
        tagBg: "hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500"
    },
    {
        category: "Workflow & Deployment",
        description: "Managing development workflows, deployments, and production-ready applications.",
        tags: ["Git & GitHub", "Vercel", "CI/CD Basics", "Performance Optimization", "Responsive Testing"],
        color: "from-amber-500/40 via-orange-500/30 to-red-500/35",
        border: "border-amber-500/30 group-hover:border-amber-500/70",
        tagBg: "hover:bg-amber-500 hover:text-white hover:border-amber-500"
    }
];

const TechStack: FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [titleScope, titleAnimate] = useAnimate();

    useEffect(() => {
        if (!titleScope.current) return;
        new SplitType(titleScope.current, { types: "lines,words", tagName: "span" });
        titleAnimate(
            titleScope.current.querySelectorAll(".word"),
            { transform: "translateY(0)", opacity: 1 },
            { duration: 0.6, delay: stagger(0.1), ease: "circOut" }
        );
    }, [titleAnimate]);

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-stone-100/50 dark:bg-stone-900/50" id="tech-stack">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <div className="container relative z-10 h-full flex flex-col justify-center">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
                        <h2 ref={titleScope} className="flex flex-col items-center md:items-start leading-none">
                            <span className="text-sm sm:text-base md:text-xl text-violet-500 font-mono mb-2 tracking-widest uppercase font-semibold">
                                My Arsenal
                            </span>
                            <span className="text-4xl sm:text-6xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-stone-900 dark:text-white">
                                Tech Stack<span className="text-violet-500">.</span>
                            </span>
                        </h2>
                    </div>

                    {/* Stacked Cards Container */}
                    <div className="relative w-full max-w-5xl mx-auto h-[460px] sm:h-[440px] md:h-[500px]">
                        {tools.map((tool, index) => {
                            return (
                                <Card
                                    key={tool.category}
                                    i={index}
                                    tool={tool}
                                    progress={scrollYProgress}
                                    totalCards={tools.length}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Card = ({
    i,
    tool,
    progress,
    totalCards,
}: {
    i: number;
    tool: (typeof tools)[0];
    progress: MotionValue<number>;
    totalCards: number;
}) => {
    // Card 0 starts in place. Cards 1, 2, 3 enter at smooth, well-spaced intervals
    const isFirst = i === 0;
    const entryStart = isFirst ? 0 : (i - 1) * 0.26 + 0.16;
    const entryEnd = isFirst ? 0 : entryStart + 0.20;

    // Smooth vertical slide up
    const y = useTransform(
        progress,
        isFirst ? [0, 1] : [entryStart, entryEnd],
        isFirst ? ["0%", "0%"] : ["100%", "0%"]
    );

    // Dynamic scale down as subsequent cards stack on top
    const scale = useTransform(progress, (p) => {
        let currentScale = 1;
        for (let j = i + 1; j < totalCards; j++) {
            const nextStart = (j - 1) * 0.26 + 0.16;
            const nextEnd = nextStart + 0.20;
            if (p > nextStart) {
                const stepProgress = Math.min(1, Math.max(0, (p - nextStart) / (nextEnd - nextStart)));
                currentScale -= stepProgress * 0.045;
            }
        }
        return currentScale;
    });

    // Subtly dim previous cards for realistic depth
    const opacity = useTransform(progress, (p) => {
        if (!isFirst && p < entryStart) return 0;
        const enterAlpha = isFirst ? 1 : Math.min(1, Math.max(0, (p - entryStart) / 0.08));

        let currentDim = 1;
        for (let j = i + 1; j < totalCards; j++) {
            const nextStart = (j - 1) * 0.26 + 0.16;
            const nextEnd = nextStart + 0.20;
            if (p > nextStart) {
                const stepProgress = Math.min(1, Math.max(0, (p - nextStart) / (nextEnd - nextStart)));
                currentDim -= stepProgress * 0.18;
            }
        }
        return enterAlpha * Math.max(0.35, currentDim);
    });

    return (
        <motion.div
            style={{
                y,
                scale,
                zIndex: i,
                opacity,
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-center will-change-transform"
        >
            <div
                className={`
                    relative w-full h-full rounded-3xl overflow-hidden border border-stone-800/90
                    bg-stone-950 shadow-2xl p-5 sm:p-8 md:p-12 flex flex-col justify-between
                    transition-all duration-500 group ${tool.border}
                `}
            >
                {/* Glowing Radiant Gradient Orbs - Rich visible colors */}
                <div
                    className={`absolute -top-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br ${tool.color} blur-[80px] sm:blur-[100px] opacity-75 pointer-events-none transition-opacity duration-700`}
                />
                <div
                    className={`absolute -bottom-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr ${tool.color} blur-[80px] sm:blur-[100px] opacity-55 pointer-events-none transition-opacity duration-700`}
                />

                {/* Subtle top edge glass shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-start mb-3 sm:mb-6 md:mb-8">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <span className="flex items-center justify-center size-9 sm:size-12 rounded-full bg-stone-800/90 text-white font-syne font-bold text-sm sm:text-xl border border-stone-700/80 shadow-md">
                                    0{i + 1}
                                </span>
                                <h3 className="text-xl sm:text-3xl md:text-5xl font-syne font-bold text-white tracking-tight">
                                    {tool.category}
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs sm:text-base md:text-xl text-stone-300 font-light mb-4 sm:mb-6 md:mb-10 max-w-2xl leading-relaxed">
                            {tool.description}
                        </p>
                    </div>

                    {/* Stacks tags with dedicated bottom spacing so they never clip on mobile */}
                    <div className="pt-2 pb-2 sm:pb-3">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2.5 md:gap-3">
                            {tool.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className={`px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-stone-900/90 border border-stone-800 text-stone-300 text-[11px] sm:text-sm md:text-base font-medium shadow-sm transition-all duration-300 ${tool.tagBg}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TechStack;

