import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { FC, HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence, motion } from "framer-motion";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  role: string;
  name: string;
  company: string;
  imagePositionY?: number; // Optional, controls vertical image alignment
  image: string | StaticImport;
  className?: string; // Optional, additional CSS classes
}

const Testimonial: FC<TestimonialProps> = ({
  quote,
  name,
  role,
  company,
  imagePositionY = 0.5,
  image,
  className,
  ...rest
}) => {
  const {
    scope: quoteScope,
    entrenceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  const {
    scope: citeScope,
    entrenceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => citeEntranceAnimation());
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => safeToRemove());
    }
  }, [isPresent, quoteEntranceAnimation, citeEntranceAnimation, quoteExitAnimation, citeExitAnimation, safeToRemove]);

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...rest}
    >
      {/* Image Section */}
      <div className="aspect-square md:col-span-2 md:aspect-[9/16] relative">
      <motion.div className="absolute h-full bg-slate-900"initial={{
        width: '100%'
      }}
      animate={{width:0}}
      exit={{width:'100%'}}
      transition={{duration:0.5}}
      >
      </motion.div>
        <Image
          src={image}
          alt={`${name}'s testimonial`}
          className="w-full h-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>

      {/* Quote Section */}
      <blockquote className="md:col-span-3">
        <p
          className="text-3xl lg:text-6xl md:text-5xl mt-8 md:mt-0"
          ref={quoteScope}
          aria-label="Client's quote"
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </p>
        <cite
          className="mt-4 md:mt-8 not-italic md:text-lg block lg:text-xl"
          ref={citeScope}
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default React.memo(Testimonial);
