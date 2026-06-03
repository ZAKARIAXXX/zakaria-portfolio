"use client"; // Required for interactivity with useState
import { FC, useState } from "react";

const faqs = [
  {
    question: "What types of projects do you build?",
    answer:
      "I mainly build modern web applications, AI-powered tools, automation systems, and responsive digital products.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with React, Next.js, TypeScript, Node.js, Supabase, and AI APIs.",
  },
  {
    question: "Are your projects mobile-friendly?",
    answer:
      "Yes — all projects are designed with responsiveness and usability in mind across desktop and mobile devices.",
  },
  {
    question: "Are you available for freelance or internship opportunities?",
    answer:
      "Yes — I'm open to freelance collaborations, internships, and opportunities to work on impactful products.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleFAQ = (faqIndex: number) => {
    setSelectedIndex((prev) => (prev === faqIndex ? null : faqIndex));
  };

  return (
    <section className="section bg-stone-100/50" id="faqs">
      <div className="container">
        <h2 className="flex flex-col items-start leading-none mb-10 md:mb-16 lg:mb-20">
          <span className="text-xl md:text-2xl text-red-orange-500 font-mono mb-2 tracking-widest uppercase">
            Got Questions?
          </span>
          <span className="text-5xl md:text-8xl font-syne font-bold tracking-tighter uppercase text-stone-900">
            FAQs<span className="text-red-orange-500">.</span>
          </span>
        </h2>
        <div className="">
          {faqs.map(({ question, answer }, faqIndex) => {
            const isActive = selectedIndex === faqIndex;
            return (
              <div
                key={question}
                className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative group overflow-hidden"
              >
                {/* Grey Hover Background */}
                <div className="absolute inset-0 bg-stone-300 opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-0"></div>

                <button
                  className="relative flex items-center justify-between gap-4 w-full text-left transition-all duration-300 group-hover:translate-x-2"
                  onClick={() => toggleFAQ(faqIndex)}
                  aria-expanded={isActive}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl transition-colors duration-300 group-hover:text-stone-800">
                    {question}
                  </div>
                  <div
                    className={`inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-all duration-300 ${isActive ? "rotate-45 scale-110" : "rotate-0 scale-100"
                      } group-hover:scale-110`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 transition-transform duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </button>
                {/* Answer with Smooth Reveal Animation */}
                <div
                  className={`text-lg md:text-xl lg:text-2xl text-stone-600 overflow-hidden transition-all duration-300 ease-out ${isActive ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;