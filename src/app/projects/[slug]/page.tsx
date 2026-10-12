'use client';

import { Project, projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useAnimate, stagger } from "framer-motion";
import { useRef, useEffect, use } from "react";
import SplitType from "split-type";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const containerRef = useRef<HTMLDivElement>(null);
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
        <div ref={containerRef} className="bg-stone-100 min-h-screen text-stone-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-stone-100/85 backdrop-blur-md border-b border-stone-200/70">
                <Link
                    href="/#projects"
                    className="group inline-flex items-center gap-2 text-stone-900 hover:text-red-orange-500 font-medium transition-colors"
                >
                    <span className="text-xl transition-transform group-hover:-translate-x-1">←</span>
                    <span className="text-sm md:text-base">Back to Projects</span>
                </Link>
                <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-stone-500 bg-stone-200/80 px-3 py-1 rounded-full font-mono">
                        {project.client}
                    </span>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-red-orange-500 hover:bg-red-orange-600 text-white px-3.5 py-1.5 rounded-full transition-colors shadow-sm"
                        >
                            <span>Live Site</span>
                            <span>↗</span>
                        </a>
                    )}
                </div>
            </nav>

            <main className="container mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-36">
                {/* Hero Showcase Image */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full aspect-video md:aspect-[21/10] rounded-2xl md:rounded-3xl overflow-hidden border border-stone-300 shadow-2xl bg-stone-200"
                >
                    <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="size-full object-cover object-top"
                        priority
                    />
                </motion.div>

                {/* Project Title and Description UNDER the Image */}
                <div className="mt-10 md:mt-16 max-w-4xl">
                    <h1
                        ref={titleScope}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 tracking-tight font-syne"
                    >
                        {project.name}
                    </h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-stone-600 text-xl md:text-2xl mt-6 leading-relaxed font-sans"
                    >
                        {project.description}
                    </motion.p>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 mb-20 border-y border-stone-300 py-10">
                    <DetailItem label="Client" value={project.client} delay={0.1} />
                    <DetailItem label="Year" value={project.year.toString()} delay={0.2} />
                    <DetailItem label="Role" value={project.role} delay={0.3} />
                    <DetailItem
                        label="Link"
                        value={project.link ? "Visit Live Site ↗" : "Internal"}
                        isLink={!!project.link}
                        href={project.link}
                        delay={0.4}
                    />
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
                        {project.link && (
                            <div className="mt-8">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-red-orange-500 hover:bg-red-orange-600 text-white font-medium shadow-lg transition-transform hover:-translate-y-0.5 duration-200"
                                >
                                    <span>Open Live Website</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Features List (if available) */}
                {project.features && project.features.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="mt-20 pt-16 border-t border-stone-300"
                    >
                        <h3 className="text-3xl font-medium mb-8 text-stone-800">Key Features & Architecture</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-stone-200/80 shadow-sm"
                                >
                                    <span className="flex items-center justify-center size-6 rounded-full bg-red-orange-500/10 text-red-orange-500 font-bold text-sm shrink-0">
                                        ✓
                                    </span>
                                    <span className="text-stone-700 text-base leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </main>

            {/* Next Project Footer */}
            <NextProject currentSlug={project.slug} />
        </div>
    );
}

const DetailItem = ({
    label,
    value,
    isLink,
    href,
    delay
}: {
    label: string;
    value: string;
    isLink?: boolean;
    href?: string;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col group cursor-default"
    >
        <span className="text-xs uppercase tracking-widest text-stone-400 mb-2">{label}</span>
        {isLink && href ? (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-medium text-red-orange-500 hover:text-red-orange-600 transition-colors underline decoration-red-orange-300 underline-offset-4"
            >
                {value}
            </a>
        ) : (
            <span className={`text-xl md:text-2xl font-medium text-stone-800 transition-all duration-300 ${isLink ? 'underline decoration-stone-400 decoration-1 underline-offset-4 group-hover:text-amber-700 group-hover:decoration-amber-700' : 'group-hover:translate-x-2'}`}>
                {value}
            </span>
        )}
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
