import type { Metadata } from "next";
import { Archivo, Syne } from "next/font/google";
import "./globals.css";

import Cursor from "@/components/Cursor";

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
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-stone-200 text-stone-900 dark:bg-night dark:text-cream-100 ${archivo.variable} ${syne.variable} font-sans`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
