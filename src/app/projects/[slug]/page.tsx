'use client';

import { Project, projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, useAnimate, stagger } from "framer-motion";
import { useRef, useEffect } from "react";
import SplitType from "split-type";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroImageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);


    const [titleScope, titleAnimate] = useAnimate();

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
        <div ref={containerRef} className="bg-stone-100 min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
                <Link
                    href="/"
                    className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
                >
                    ← Back
                </Link>
                <span className="uppercase tracking-widest text-sm text-white/80">{project.name}</span>
            </nav>

            {/* Hero Section */}
            <section className="h-[80vh] md:h-screen sticky top-0 z-0 overflow-hidden">
                <motion.div
                    style={{ scale: heroImageScale }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        className="size-full object-cover filter brightness-[0.7]"
                        priority
                        fill
                    />
                </motion.div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 z-10">
                    <h1
                        ref={titleScope}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter"
                    >
                        {project.name}
                    </h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-white/80 text-xl md:text-2xl mt-4 max-w-2xl"
                    >
                        {project.description}
                    </motion.p>
                </div>
            </section>

            {/* Content Section - Overlays the Hero */}
            <div className="relative z-10 bg-stone-100 rounded-t-[3rem] mt-[-10vh] border-t border-stone-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-6 py-20 md:py-32">

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 border-b border-stone-300 pb-20">
                        <DetailItem label="Client" value={project.client} delay={0.1} />
                        <DetailItem label="Year" value={project.year.toString()} delay={0.2} />
                        <DetailItem label="Role" value={project.role} delay={0.3} />
                        <DetailItem label="Link" value="Visit Site ↗" isLink delay={0.4} />
                    </div>

                    <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24">
                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h3 className="text-3xl font-medium mb-6 text-stone-800">The Challenge</h3>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                {project.challenge}
                            </p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-medium mb-6 text-stone-800">The Solution</h3>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Next Project Footer */}
                <NextProject currentSlug={project.slug} />

            </div>
        </div>
    );
}

const DetailItem = ({ label, value, isLink, delay }: { label: string, value: string, isLink?: boolean, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col group cursor-default"
    >
        <span className="text-xs uppercase tracking-widest text-stone-400 mb-2">{label}</span>
        <span className={`text-xl md:text-2xl font-medium text-stone-800 transition-all duration-300 ${isLink ? 'underline decoration-stone-400 decoration-1 underline-offset-4 group-hover:text-amber-700 group-hover:decoration-amber-700' : 'group-hover:translate-x-2'}`}>
            {value}
        </span>
    </motion.div>
)

const NextProject = ({ currentSlug }: { currentSlug: string }) => {
    const currentIndex = projects.findIndex(p => p.slug === currentSlug);
    const nextIndex = (currentIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];

    return (
        <section className="bg-stone-900 py-24 md:py-32 text-center">
            <div className="container mx-auto px-6">
                <span className="block text-stone-400 text-sm uppercase tracking-widest mb-6">Next Project</span>
                <Link href={`/projects/${nextProject.slug}`} className="group inline-block">
                    <h2 className="text-5xl md:text-8xl text-white font-serif italic tracking-tighter transition-transform duration-500 group-hover:scale-105">
                        {nextProject.name}
                    </h2>
                    <div className="w-0 h-1 bg-white mx-auto mt-4 transition-all duration-500 group-hover:w-full opacity-50"></div>
                </Link>
            </div>
        </section>
    )
}
