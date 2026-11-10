"use client";

import { FC, MouseEvent } from "react";
import Button from "@/components/Button";

const navItems = [
  { href: "#intro", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#faqs", label: "Faqs" },
  { href: "#contact", label: "Contact" },
];

const Footer: FC = () => {
  const handleClickNavItem = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1); // Remove '#'

    const targetElement = document.getElementById(targetId ?? "");
    if (targetElement) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-stone-900 dark:bg-night text-white" id="contact">
      <div className="container mx-auto">
        <div className="section py-12 md:py-16 lg:py-20">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase text-sm md:text-base">
              One spot available for next month
            </span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center gap-8 mt-8">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-extralight">
                Enough talk. Let’s make something great together.
              </h2>
              <div className="flex items-center gap-4 mt-8">
                {" "}
                {/* Flex container for buttons */}
                <Button
                  href="mailto:wailaminzzaakkaarriiaa@gmail.com"
                  variant="secondary"
                >
                  <span className="inline-flex items-center gap-2">
                    Contact Me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Button>
                <Button href="/resume.pdf" download variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    Download Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>

            <nav className="flex flex-col md:items-end gap-6 md:gap-8">
              {navItems.map(({ href, label }) => (
                <Button
                  href={href}
                  key={label}
                  onClick={handleClickNavItem}
                  variant="text"
                  className="text-lg"
                >
                  {label}
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 pb-8">
          {/* GitHub Icon */}
          <a
            href="https://github.com/ZAKARIAXXX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:text-lavender-500 transition-colors"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/zakaria-chelouati-6b78822b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:text-lavender-500 transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        <p className="py-16 text-white/30 text-sm text-center">
          Copyright © Zakaria Chelouati • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
