'use client';

import { FC, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimate, stagger, MotionValue } from "framer-motion";
import SplitType from "split-type";

const tools = [
    {
        category: "Frontend Development",
        description: "Building fast, responsive, and modern interfaces focused on usability and performance.",
        tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
        color: "from-violet-500/20 to-blue-500/20",
        border: "group-hover:border-violet-500/50"
    },
    {
        category: "Backend & APIs",
        description: "Developing scalable backend systems, APIs, and database-driven applications.",
        tags: ["Node.js", "PostgreSQL", "Supabase", "Prisma", "REST APIs"],
        color: "from-violet-500/20 to-blue-500/20",
        border: "group-hover:border-violet-500/50"
    },
    {
        category: "AI & Automation",
        description: "Creating AI-powered workflows, automation systems, and productivity-focused tools.",
        tags: ["OpenAI APIs", "Workflow Automation", "Chat Systems", "CRM Logic", "AI Integrations"],
        color: "from-violet-500/20 to-blue-500/20",
        border: "group-hover:border-violet-500/50"
    },
    {
        category: "Workflow & Deployment",
        description: "Managing development workflows, deployments, and production-ready applications.",
        tags: ["Git & GitHub", "Vercel", "CI/CD Basics", "Performance Optimization", "Responsive Testing"],
        color: "from-violet-500/20 to-blue-500/20",
        border: "group-hover:border-violet-500/50"
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
        titleAnimate(titleScope.current.querySelectorAll(".word"), { transform: "translateY(0)", opacity: 1 }, { duration: 0.6, delay: stagger(0.1), ease: "circOut" });
    }, [titleAnimate]);

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-stone-100/50" id="tech-stack">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <div className="container relative z-10 h-full flex flex-col justify-center">
                    {/* Header */}
                    <div className="mb-8 md:mb-12 text-center md:text-left">
                        <h2 ref={titleScope} className="flex flex-col items-center md:items-start leading-none">
                            <span className="text-xl md:text-2xl text-violet-500 font-mono mb-2 tracking-widest uppercase">
                                My Arsenal
                            </span>
                            <span className="text-5xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-stone-900">
                                Tech Stack<span className="text-violet-500">.</span>
                            </span>
                        </h2>
                    </div>

                    {/* Stacked Cards */}
                    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px]">
                        {tools.map((tool, index) => {
                            const targetScale = 1 - (tools.length - index) * 0.05;
                            return <Card key={index} i={index} tool={tool} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
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
    range,
    targetScale
}: {
    i: number;
    tool: any;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) => {

    // Adjusted Scroll Logic so last card finishes
    // Total range 0 to 1
    // Interval reduced: 0.18 per card
    const cardStart = i * 0.18;
    const cardEnd = cardStart + 0.35;

    // Alternating Side Entrance
    const initialX = i % 2 === 0 ? -1000 : 1000;

    const x = useTransform(progress, [cardStart, cardEnd], [`${i % 2 === 0 ? "-100%" : "100%"}`, "0%"]);
    const y = useTransform(progress, [cardStart, cardEnd], ["100vh", "0vh"]);

    // Scale for previous cards
    const nextCardStart = (i + 1) * 0.18;
    const scale = useTransform(progress, [nextCardStart, nextCardStart + 0.3], [1, targetScale]);
    const opacity = useTransform(progress, [cardStart, cardStart + 0.1], [0, 1]);

    return (
        <motion.div
            style={{
                x: x,
                y: y,
                scale: scale,
                zIndex: i,
                opacity: opacity,
                top: `0px`
            }}
            className={`absolute inset-0 w-full h-full flex flex-col justify-center`}
        >
            <div
                className={`
            relative w-full h-full rounded-3xl overflow-hidden border border-stone-800
            bg-stone-950 shadow-2xl p-8 md:p-12 flex flex-col justify-between
            transition-all duration-500
            ${tool.border}
        `}
            >
                {/* Internal Gradient Mesh - Reduced Opacity for Black Theme */}
                <div className={`absolute top-[-50%] right-[-50%] w-[150%] h-[150%] bg-gradient-to-b ${tool.color} blur-[100px] opacity-20`} />
                <div className={`absolute bottom-[-50%] left-[-50%] w-[150%] h-[150%] bg-gradient-to-t ${tool.color} blur-[100px] opacity-20`} />

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center justify-center size-12 rounded-full bg-stone-800 text-white font-syne font-bold text-xl border border-stone-700">
                                0{i + 1}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-syne font-bold text-white">
                                {tool.category}
                            </h3>
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-stone-300 font-light mb-12 max-w-2xl">
                        {tool.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {tool.tags.map((tag: any) => (
                            <span key={tag} className="px-5 py-2 md:px-6 md:py-3 rounded-full bg-stone-900 border border-stone-800 text-stone-400 text-sm md:text-base font-medium shadow-sm hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TechStack;
