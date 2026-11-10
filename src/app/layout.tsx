import type { Metadata, Viewport } from "next";
import { Archivo, Syne } from "next/font/google";
import "./globals.css";

import Cursor from "@/components/Cursor";
import MotionProvider from "@/components/MotionProvider";
import { siteUrl } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e5e4" },
    { media: "(prefers-color-scheme: dark)", color: "#210b2c" },
  ],
  width: "device-width",
  initialScale: 1,
};

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

const syne = Syne({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-syne",
});

const themeScript = `(function(){try{var stored=localStorage.getItem("theme");var isDark=stored==="dark"||(stored!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",isDark);}catch(error){console.error(error);}})();`;

const siteName = "Zakaria Chelouati";
const siteDescription =
  "AI Tools, SaaS Products & High-Performance Modern Web Experiences";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: "Zakaria Chelouati • Portfolio",
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  keywords: [
    "Zakaria Chelouati",
    "Full-Stack Developer",
    "AI Engineer",
    "SaaS",
    "Next.js",
    "React",
    "Morocco",
    "Rabat",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: "Zakaria Chelouati • Portfolio",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zakaria Chelouati — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakaria Chelouati • Portfolio",
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-stone-200 text-stone-900 dark:bg-night dark:text-cream-100 ${archivo.variable} ${syne.variable} font-sans`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <MotionProvider>
          <Cursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
