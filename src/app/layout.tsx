import type { Metadata, Viewport } from "next";
import { Archivo, Syne } from "next/font/google";
import "./globals.css";

import Cursor from "@/components/Cursor";

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
  subsets: ['latin'],
  variable: "--font-archivo",
});

const syne = Syne({
  display: "swap",
  weight: "variable",
  subsets: ['latin'],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Zakaria Chelouati • Portfolio",
  description: "AI Tools, SaaS Products & High-Performance Modern Web Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`antialiased bg-stone-200 text-stone-900 dark:bg-night dark:text-cream-100 ${archivo.variable} ${syne.variable} font-sans`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
