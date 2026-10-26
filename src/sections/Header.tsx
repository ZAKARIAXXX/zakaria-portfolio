"use client";

import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, useAnimate } from "framer-motion";

/* Navigation items array */
const navItems = [
  { label: "About", href: "#intro" },
  { label: "Selected Works", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  // Animate menu items when toggling
  useEffect(() => {
    if (isOpen) {
      topLineAnimate(topLineScope.current, { translateY: 4, rotate: 45 });
      bottomLineAnimate(bottomLineScope.current, { translateY: -4, rotate: -45 });
      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      topLineAnimate(topLineScope.current, { translateY: 0, rotate: 0 });
      bottomLineAnimate(bottomLineScope.current, { translateY: 0, rotate: 0 });
      navAnimate(navScope.current, { height: "0%" }, { duration: 0.5 });
    }
  }, [isOpen, topLineAnimate, bottomLineAnimate, navAnimate, topLineScope, bottomLineScope, navScope]);

  // Handle mobile nav item click
  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 bg-stone-950/95 dark:bg-night/95 backdrop-blur-2xl z-10 overflow-hidden transition-colors duration-300"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative group text-stone-200 border-t last:border-b border-stone-800 py-8 isolate"
              onClick={handleClickMobileNavItem}
            >
              <div className="container flex items-center !max-w-full justify-between">
                <div className="text-3xl transition-all duration-500 group-hover:pl-4">
                  {label}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 h-0 bg-stone-800 -z-10 group-hover:h-full transition-all duration-500"></div>
            </a>
          ))}
        </nav>
      </div>

      {/* Unified Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-20 bg-stone-200/80 dark:bg-night/85 backdrop-blur-md border-b border-stone-300/40 dark:border-white/5 transition-colors duration-300">
        <div className="container max-w-full">
          <div className="flex justify-between h-20 items-center">
            {/* Brand Logo */}
            <div>
              <a href="/" aria-label="Home" className="group inline-block">
                <span className="text-xl font-bold uppercase tracking-tight text-stone-900 dark:text-white transition-opacity group-hover:opacity-75">
                  zakaria chelouati
                </span>
              </a>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />

              {/* Hamburger Menu */}
              <div
                className="size-11 border border-stone-400 dark:border-stone-700 rounded-full inline-flex items-center justify-center bg-stone-200 text-stone-900 dark:bg-stone-800 dark:text-cream-100 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{ transformOrigin: "12px 8px" }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{ transformOrigin: "12px 16px" }}
                  />
                </svg>
              </div>

              {/* Contact Button */}
              <a href="mailto:wailaminzzaakkaarriiaa@gmail.com">
                <Button variant="primary" className="hidden md:inline-flex">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;