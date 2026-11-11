"use client";

import {
  FC,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";

interface CommandOutput {
  id: string;
  command: string;
  content: ReactNode;
}

const AVAILABLE_COMMANDS = [
  "help",
  "whoami",
  "ls projects",
  "cat security",
  "cat about",
  "skills",
  "./hire-me",
  "clear",
] as const;

type CommandName = (typeof AVAILABLE_COMMANDS)[number];

export const Terminal: FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: "initial-welcome",
      command: "whoami",
      content: (
        <div className="space-y-1.5 text-stone-300">
          <p className="text-white font-medium">
            Zakaria Chelouati — Backend Software Engineer
          </p>
          <p className="text-stone-400">
            Final-year Computer Engineering (Génie Logiciel) @ High-Tech Rabat •
            Salé/Rabat, Morocco
          </p>
          <p className="text-lavender-500 italic mt-1">
            &ldquo;I build products that work.&rdquo;
          </p>
          <p className="text-xs text-stone-500 mt-2">
            Type <span className="text-lavender-500 font-semibold">help</span>{" "}
            or click any quick command above.
          </p>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>(["whoami"]);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const output = outputRef.current;
    if (!output) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    output.scrollTo({
      top: output.scrollHeight,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [history]);

  const clearTerminal = () => {
    setHistory([]);
    setInputVal("");
    setHistoryIndex(null);
    inputRef.current?.focus({ preventScroll: true });
  };

  const executeCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(null);

    const cmdLower = trimmed.toLowerCase();

    if (cmdLower === "clear") {
      clearTerminal();
      return;
    }

    let content: ReactNode;

    switch (cmdLower) {
      case "help":
        content = (
          <div className="space-y-1.5 text-stone-300">
            <p className="text-stone-400 mb-2">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
              <div>
                <span className="text-lavender-500 font-medium">whoami</span>
                <span className="text-stone-400">
                  {" "}
                  — Role, education &amp; pitch
                </span>
              </div>
              <div>
                <span className="text-lavender-500 font-medium">
                  ls projects
                </span>
                <span className="text-stone-400">
                  {" "}
                  — Real shipped work &amp; links
                </span>
              </div>
              <div>
                <span className="text-lavender-500 font-medium">
                  cat security
                </span>
                <span className="text-stone-400">
                  {" "}
                  — Security research &amp; HTB/YesWeHack
                </span>
              </div>
              <div>
                <span className="text-lavender-500 font-medium">cat about</span>
                <span className="text-stone-400">
                  {" "}
                  — Background, focus &amp; CampusLoop
                </span>
              </div>
              <div>
                <span className="text-lavender-500 font-medium">skills</span>
                <span className="text-stone-400">
                  {" "}
                  — Primary tech stack &amp; tools
                </span>
              </div>
              <div>
                <span className="text-lavender-500 font-medium">./hire-me</span>
                <span className="text-stone-400">
                  {" "}
                  — Contact, GitHub, LinkedIn &amp; CV
                </span>
              </div>
              <div>
                <span className="text-lavender-500 font-medium">clear</span>
                <span className="text-stone-400"> — Clear terminal screen</span>
              </div>
            </div>
          </div>
        );
        break;

      case "whoami":
        content = (
          <div className="space-y-1.5 text-stone-300">
            <p className="text-white font-medium">Zakaria Chelouati</p>
            <p className="text-stone-300">
              <span className="text-stone-400">Role:</span> Backend Software
              Engineer
            </p>
            <p className="text-stone-300">
              <span className="text-stone-400">Education:</span> Final-year
              Computer Engineering — Génie Logiciel, High-Tech Rabat
            </p>
            <p className="text-stone-300">
              <span className="text-stone-400">Location:</span> Salé / Rabat,
              Morocco
            </p>
            <p className="text-lavender-500 italic mt-1 font-medium">
              &ldquo;I build products that work.&rdquo;
            </p>
          </div>
        );
        break;

      case "ls projects":
      case "ls":
        content = (
          <div className="space-y-4 text-stone-300 text-sm">
            <p className="text-stone-400">Shipped software projects:</p>

            <div className="border-l-2 border-lavender-500 pl-3 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold">CampusLoop</span>
                <span className="text-xs px-2 py-0.5 rounded bg-lavender-500/20 text-lavender-500">
                  Live
                </span>
              </div>
              <p className="text-stone-300">
                Student marketplace + skill exchange for UM5 &amp; High-Tech
                Rabat.
              </p>
              <p className="text-xs text-stone-400">
                <span className="text-stone-500">Stack:</span> React 18,
                TypeScript, Vite, Tailwind, Supabase
              </p>
              <p className="text-xs">
                <a
                  href="https://campusloop-virid-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-500 hover:text-white underline underline-offset-4"
                >
                  campusloop-virid-alpha.vercel.app
                </a>{" "}
                <span className="text-stone-500">(repo is private)</span>
              </p>
            </div>

            <div className="border-l-2 border-stone-700 pl-3 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold">Wasla</span>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                  SaaS
                </span>
              </div>
              <p className="text-stone-300">
                AI WhatsApp messaging SaaS with Moroccan Darija and French
                automation.
              </p>
              <p className="text-xs text-stone-400">
                <span className="text-stone-500">Stack:</span> TypeScript,
                React, Node.js, Supabase
              </p>
              <p className="text-xs text-stone-400 italic">
                Link: demo on request (no public link yet)
              </p>
            </div>

            <div className="border-l-2 border-stone-700 pl-3 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold">EventManager</span>
              </div>
              <p className="text-stone-300">
                Full-stack events management application.
              </p>
              <p className="text-xs text-stone-400 italic">
                Link: demo / repo on request
              </p>
            </div>

            <div className="border-l-2 border-stone-700 pl-3 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold">
                  pt57-vpn-portal
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                  PFE
                </span>
              </div>
              <p className="text-stone-300">
                PFE project — secure VPN portal &amp; network authentication.
              </p>
              <p className="text-xs text-stone-400 italic">
                Link: demo / repo on request
              </p>
            </div>

            <div className="border-l-2 border-stone-700 pl-3 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold">AtlasTech</span>
              </div>
              <p className="text-stone-300">
                Full-stack engineering &amp; infrastructure platform.
              </p>
              <p className="text-xs">
                <a
                  href="https://github.com/ZAKARIAXXX/atlastech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-500 hover:text-white underline underline-offset-4"
                >
                  github.com/ZAKARIAXXX/atlastech
                </a>
              </p>
            </div>

            <div className="border-l-2 border-stone-700 pl-3 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold">ShadowOps</span>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                  B2B SaaS
                </span>
              </div>
              <p className="text-stone-300">
                B2B SaaS — team-health signals from collaboration metadata.
              </p>
              <p className="text-xs text-stone-400 italic">
                Link: demo / repo on request
              </p>
            </div>
          </div>
        );
        break;

      case "cat security":
      case "security":
        content = (
          <div className="space-y-3 text-stone-300 text-sm">
            <p className="text-white font-medium">
              Security Research &amp; Penetration Testing:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-lavender-500 font-bold">•</span>
                <span>
                  <strong className="text-white">Hack The Box:</strong> Tier III
                  Senior Web Penetration Tester path.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lavender-500 font-bold">•</span>
                <span>
                  <strong className="text-white">MWET:</strong> Modern Web
                  Exploitation Techniques Skills Assessment —{" "}
                  <span className="text-lavender-500 font-medium">
                    4/4 solved
                  </span>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lavender-500 font-bold">•</span>
                <span>
                  <strong className="text-white">YesWeHack:</strong> Active
                  PULSAR report streak chasing the PULSAR status (October report
                  CVSS 8.6, confirmed resolved).
                </span>
              </li>
            </ul>
          </div>
        );
        break;

      case "cat about":
      case "about":
        content = (
          <div className="space-y-2 text-stone-300 text-sm">
            <p className="text-white font-medium">About Zakaria:</p>
            <p>
              22-year-old engineer based in Salé / Rabat, Morocco. In my final
              year of Computer Engineering (Génie Logiciel) at High-Tech Rabat.
            </p>
            <p>
              Specializing in the backend lane with Java &amp; Spring
              microservices, robust API design, distributed architecture, and
              security-first engineering.
            </p>
            <p>
              Founder of <strong className="text-white">CampusLoop</strong> — a
              student marketplace and peer-to-peer skill exchange platform built
              for university communities.
            </p>
          </div>
        );
        break;

      case "skills":
        content = (
          <div className="space-y-2 text-stone-300 text-sm">
            <p className="text-stone-400">Core Technologies &amp; Stack:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lavender-500"></span>
                <span>Java / Spring Boot</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lavender-500"></span>
                <span>TypeScript / React</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lavender-500"></span>
                <span>Node.js / Express</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lavender-500"></span>
                <span>Supabase / PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lavender-500"></span>
                <span>Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lavender-500"></span>
                <span>Git</span>
              </div>
            </div>
          </div>
        );
        break;

      case "./hire-me":
      case "hire-me":
        content = (
          <div className="space-y-2 text-stone-300 text-sm">
            <p className="text-white font-medium">Let&apos;s build together:</p>
            <div className="space-y-1.5 pl-2">
              <p>
                <span className="text-stone-400">Email:</span>{" "}
                <a
                  href="mailto:wailaminzzaakkaarriiaa@gmail.com"
                  className="text-lavender-500 hover:text-white underline underline-offset-4"
                >
                  wailaminzzaakkaarriiaa@gmail.com
                </a>
              </p>
              <p>
                <span className="text-stone-400">GitHub:</span>{" "}
                <a
                  href="https://github.com/ZAKARIAXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-500 hover:text-white underline underline-offset-4"
                >
                  https://github.com/ZAKARIAXXX
                </a>
              </p>
              <p>
                <span className="text-stone-400">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/zakaria-chelouati-6b78822b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-500 hover:text-white underline underline-offset-4"
                >
                  https://www.linkedin.com/in/zakaria-chelouati-6b78822b4
                </a>
              </p>
              <p>
                <span className="text-stone-400">Resume:</span>{" "}
                <a
                  href="/resume.pdf"
                  download
                  className="text-lavender-500 hover:text-white underline underline-offset-4 font-medium"
                >
                  Download CV (/resume.pdf)
                </a>
              </p>
            </div>
          </div>
        );
        break;

      default:
        content = (
          <p className="text-stone-400 text-sm">
            command not found: <span className="text-red-400">{trimmed}</span>.
            Type <span className="text-lavender-500 font-medium">help</span> to
            view available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        command: trimmed,
        content,
      },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex === null
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(null);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] ?? "");
      }
    }
  };

  const handleTerminalClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    if (target instanceof Element && target.closest("a, button, input")) {
      return;
    }
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <section className="section bg-stone-900 text-white relative" id="terminal">
      <div className="container">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <span className="text-xl md:text-2xl text-lavender-500 font-syne mb-2 tracking-widest uppercase block">
            Interactive Shell
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tighter text-white">
            Developer <span className="text-lavender-500">Terminal</span>
          </h2>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mt-3 font-sans">
            Explore my profile, software projects, and penetration testing path
            directly through the CLI or quick command shortcuts.
          </p>
        </div>

        {/* Command Buttons */}
        <div
          className="flex flex-wrap gap-2 mb-4"
          role="group"
          aria-label="Quick commands"
        >
          {AVAILABLE_COMMANDS.map((cmd: CommandName) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="px-3.5 py-1.5 rounded-full text-xs md:text-sm bg-stone-800/80 hover:bg-lavender-500/20 text-stone-300 hover:text-lavender-500 border border-stone-700/80 hover:border-lavender-500/50 transition-all font-sans cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div
          onClick={handleTerminalClick}
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key.toLowerCase() === "l") {
              e.preventDefault();
              clearTerminal();
            }
          }}
          className="w-full bg-[#111111] border border-stone-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden cursor-text transition-colors duration-300 hover:border-stone-700 focus-within:border-lavender-500/40"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-stone-950/80 border-b border-stone-800/80 select-none">
            <div
              className="flex shrink-0 items-center gap-2"
              aria-hidden="true"
            >
              <span className="size-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="size-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="size-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <div className="min-w-0 truncate px-3 text-xs md:text-sm text-stone-400 font-sans font-medium tracking-wide">
              zakaria@portfolio:~
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-[11px] text-stone-500 font-sans hidden sm:block">
                zsh
              </span>
              <button
                type="button"
                onClick={clearTerminal}
                className="text-[11px] font-sans text-stone-500 hover:text-lavender-500 transition-colors cursor-pointer px-2 py-1 -my-1 focus-visible:outline-none focus-visible:text-lavender-500"
                aria-label="Clear terminal output"
                title="Clear terminal (Ctrl+L)"
              >
                clear
              </button>
            </div>
          </div>

          <div className="flex h-[400px] flex-col sm:h-[460px]">
            {/* Terminal Screen Output */}
            <div
              ref={outputRef}
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="Terminal output"
              tabIndex={0}
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 space-y-4 font-sans text-sm md:text-base leading-relaxed focus-visible:outline-none"
            >
              {history.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-stone-300 font-medium">
                    <span className="text-lavender-500 select-none font-semibold">
                      zakaria@portfolio:~$
                    </span>
                    <span>{item.command}</span>
                  </div>
                  <div className="pl-0 sm:pl-4">{item.content}</div>
                </div>
              ))}
            </div>

            {/* Input Row */}
            <div className="shrink-0 border-t border-stone-800/70 bg-stone-950/40 px-4 py-3 sm:px-6 sm:py-4 md:px-8">
              <div className="flex items-center gap-2">
                <span className="text-lavender-500 select-none font-semibold shrink-0">
                  zakaria@portfolio:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type a command (or click pills above)..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-sans placeholder-stone-600 focus:ring-0 p-0"
                  aria-label="Terminal command prompt"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  enterKeyHint="send"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
