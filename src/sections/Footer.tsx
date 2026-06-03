"use client";

import { FC, MouseEvent } from "react";
import Button from "@/components/Button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faqs", label: "Faqs" },
  { href: "#contact", label: "Contact" },
];

const Footer: FC = () => {
  const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1); // Remove '#'

    const targetElement = document.getElementById(targetId ?? "");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
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
              <div className="flex items-center gap-4 mt-8"> {/* Flex container for buttons */}
                <a href="mailto:wailaminzzaakkaarriiaa@gmail.com">
                  <Button variant="secondary">
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
                </a>
                <a href="/resume.pdf" download> {/* Placeholder resume link */}
                  <Button variant="secondary">
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
                </a>
              </div>
            </div>

            <nav className="flex flex-col md:items-end gap-6 md:gap-8">
              {navItems.map(({ href, label }) => (
                <a
                  href={href}
                  key={label}
                  onClick={handleClickNavItem}
                  className="text-lg"
                >
                  <Button variant="text">{label}</Button>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 pb-8">
          {/* Twitter/X Icon */}
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
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
              className="hover:text-stone-400 transition-colors"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
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
              className="hover:text-stone-400 transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
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
              className="hover:text-stone-400 transition-colors"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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