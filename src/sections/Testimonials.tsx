"use client";

import { FC } from "react";
import whatsappImage from "@/assets/images/WhatsApp Image 2025-08-19 at 20.09.34.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote: "Working with Zakaria was a game-changer. He didn't just build what we asked for; he improved upon our original ideas. The animations are buttery smooth.",
    image: whatsappImage,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote: "I'm blown away by the attention to detail. The site feels alive. Delivery was super fast, and the communication was top-notch throughout the process.",
    image: whatsappImage,
  },
  {
    name: "Edmane Ettahiri",
    company: "Aideme Agency",
    role: "CEO",
    quote: "Professional, skilled, and creative. He transformed our outdated landing page into a modern masterpiece that actually converts. Highly recommended!",
    image: whatsappImage,
  },
  {
    name: "Alex Thompson",
    company: "TechFlow",
    role: "CTO",
    quote: "The code quality is exceptional. Clean, maintainable, and well-structured. It's rare to find a developer who cares this much about the backend and the frontend.",
    image: whatsappImage,
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-white overflow-hidden" id="testimonials">
      <div className="container mb-12 md:mb-20">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tighter text-center">
          What Clients <span className="text-red-orange-500">Say.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 lg:gap-20 mask-gradient-x overflow-hidden">
        {/* Row 1 - Left to Right (Moving Left) */}


        {/* Row 2 - Right to Left (Moving Right) */}
        <div className="flex overflow-hidden mask-gradient-x">
          <motion.div
            className="flex flex-none gap-10 pr-10 md:gap-14 md:pr-14"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row2-${i}`} {...t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, company, role, quote, image }: any) => (
  <div className="flex-shrink-0 w-[400px] bg-stone-800/40 backdrop-blur-md p-8 rounded-3xl border border-stone-700/50 hover:border-red-orange-500 hover:bg-stone-800/80 transition-all duration-300 group/card cursor-pointer">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative size-14 rounded-full overflow-hidden border border-stone-600 group-hover/card:border-red-orange-500 transition-colors">
        <Image src={image} alt={name} className="object-cover" fill />
      </div>
      <div>
        <h4 className="text-xl font-syne font-bold leading-none">{name}</h4>
        <p className="text-stone-400 text-sm mt-1">{role} @ {company}</p>
      </div>
    </div>
    <p className="text-stone-300 leading-relaxed font-light">
      &ldquo;{quote}&rdquo;
    </p>
  </div>
);

export default Testimonials;
