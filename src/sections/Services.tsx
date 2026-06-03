'use client';

import { FC, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimate, stagger, useInView } from "framer-motion";
import SplitType from "split-type";

const services = [
    {
        number: "01",
        title: "Full-Stack Web Development",
        description: "Modern, scalable web applications built with performance and clean UX in mind.",
        icon: "⚡"
    },
    {
        number: "02",
        title: "AI Integration & Automation",
        description: "AI-powered systems, automations, and tools designed to save time and increase efficiency.",
        icon: "🤖"
    },
    {
        number: "03",
        title: "UI/UX & Product Design",
        description: "Clean, intuitive interfaces focused on usability, responsiveness, and user experience.",
        icon: "✨"
    },
    {
        number: "04",
        title: "Product Strategy & Optimization",
        description: "Improving product structure, performance, and digital presence for long-term growth.",
        icon: "💡"
    }
];

const Services: FC = () => {
    const [titleScope, titleAnimate] = useAnimate();
    const containerRef = useRef<HTMLDivElement>(null);

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
        <section className="py-24 md:py-32 relative bg-stone-100/50" id="services">
            <div className="container" ref={containerRef}>

                {/* Header */}
                <div className="mb-16 md:mb-24 px-4">
                    <h2 ref={titleScope} className="flex flex-col items-start leading-none">
                        <span className="text-xl md:text-2xl text-red-orange-500 font-mono mb-2 tracking-widest uppercase">
                            What I Offer
                        </span>
                        <span className="text-5xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-stone-900">
                            Services<span className="text-red-orange-500">.</span>
                        </span>
                    </h2>
                </div>

                {/* Services List */}
                <div className="border-t border-stone-300">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const ServiceItem = ({ service, index }: { service: any, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-b border-stone-300 transition-colors duration-500 hover:bg-white/60 cursor-pointer"
        >
            <div className="py-12 md:py-16 px-4 flex flex-col md:flex-row items-baseline md:items-center gap-6 md:gap-12">

                {/* Number */}
                <span className="font-mono text-red-orange-500 text-lg md:text-xl shrink-0">
                    {service.number}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-syne font-bold text-stone-800 group-hover:text-red-orange-500 transition-colors duration-300 shrink-0 md:w-[40%]">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 text-lg md:text-xl font-light grow group-hover:text-stone-900 transition-colors duration-300">
                    {service.description}
                </p>

                {/* Arrow Icon */}
                <div className="shrink-0 size-12 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-red-orange-500 group-hover:border-red-orange-500 transition-all duration-300 group-hover:scale-110">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-5 text-stone-400 group-hover:text-white transition-colors duration-300"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}

export default Services;
