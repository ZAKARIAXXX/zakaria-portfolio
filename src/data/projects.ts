import { StaticImageData } from "next/image";
import campusloopMainImage from "@/assets/images/campusloopmain.webp";
import homepageImage from "@/assets/images/homepage.webp";
import skillswapImage from "@/assets/images/skillswap.webp";
import messagesImage from "@/assets/images/messages.webp";
import adminImage from "@/assets/images/admin.webp";
import studygroupsImage from "@/assets/images/studygroups.webp";
import createlistingsImage from "@/assets/images/createlistings.webp";
import profileImage from "@/assets/images/profile.webp";
import saveditemsImage from "@/assets/images/saveditems.webp";
import rentingsImage from "@/assets/images/rentings.webp";
import waslaImage from "@/assets/images/wasla.webp";
import botanicaImage from "@/assets/images/image.webp";
import aubeImage from "@/assets/images/aube-cafe.webp";

export interface GalleryItem {
  image: StaticImageData;
  label: string;
}

export interface Project {
  name: string;
  slug: string;
  image: StaticImageData;
  year: number;
  client: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  link?: string;
  features?: string[];
  category?: string;
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  {
    name: "CampusLoop",
    slug: "campusloop",
    image: campusloopMainImage,
    year: 2026,
    client: "CampusLoop (SaaS)",
    role: "Founder & Full-Stack Developer",
    link: "https://campusloop-virid-alpha.vercel.app/",
    category: "Marketplace / SaaS",
    description:
      "A student marketplace and skill-exchange platform for Moroccan universities — buy and sell on campus, swap skills, message in real time, all with verified student accounts.",
    challenge:
      "Students had no trusted place to buy, sell, or swap skills on campus. Facebook groups are messy, unverified, and full of scams — no structure, no trust, no way to know who you're dealing with.",
    solution:
      "Designed and built CampusLoop — a full-stack platform with a Marketplace for buying and selling, SkillSwap for exchanging skills, real-time messaging, and student verification via academic email. Built with React, TypeScript, Vite, Tailwind, and Supabase (PostgreSQL + Auth + Storage). An admin dashboard keeps the platform clean, and study groups turn it into a real campus community.",
    features: [
      "Marketplace for buying and selling on campus",
      "SkillSwap — exchange skills with other students",
      "Real-time messaging between buyers and sellers",
      "Student verification via academic email domain",
      "Admin dashboard for moderation and platform management",
      "Study groups and community spaces",
      "Mobile-first responsive design",
    ],
    gallery: [
      { image: homepageImage, label: "Marketplace" },
      { image: skillswapImage, label: "SkillSwap" },
      { image: messagesImage, label: "Real-time messaging" },
      { image: adminImage, label: "Admin dashboard" },
      { image: studygroupsImage, label: "Study groups" },
      { image: createlistingsImage, label: "Create a listing" },
      { image: profileImage, label: "Profile" },
      { image: saveditemsImage, label: "Saved items" },
      { image: rentingsImage, label: "Rentals" },
    ],
  },
  {
    name: "Wasla CRM",
    slug: "wasla-crm",
    image: waslaImage,
    year: 2026,
    client: "Wasla (SaaS)",
    role: "Full-Stack & AI Engineer",
    description:
      "An AI-powered WhatsApp CRM and marketing automation platform built specifically for businesses operating in Moroccan Darija and French.",
    challenge:
      "Small and medium businesses in Morocco rely heavily on WhatsApp to close sales, but managing hundreds of chats manually leads to missed leads, slow replies, and lost revenue. Existing global CRMs lack localization and fail to understand Moroccan Darija (the spoken Arabic dialect) and French hybrid text, making automated customer service ineffective.",
    solution:
      "Designed and built Wasla, featuring Karima AI — a custom conversational agent trained to understand, qualify, and reply to customers in natural Moroccan Darija and French. Implemented a drag-and-drop Kanban pipeline for tracking deals, automated cron-scheduled follow-up sequences to re-engage dormant leads, real-time message sync using WebSockets, and rich analytics dashboards to monitor conversion rates and agent response performance.",
  },
  {
    name: "Aube Café",
    slug: "aube-cafe",
    image: aubeImage,
    year: 2026,
    client: "Aube Café (Rabat)",
    role: "Web Design & Frontend Development",
    link: "https://aube-cafe.vercel.app/",
    category: "Hospitality / UI & UX",
    description:
      "An immersive, responsive website for Aube Café, a specialty coffee house in Rabat. Showcases premium coffee brews, artisanal pastries, brand heritage, and seamless WhatsApp ordering.",
    challenge:
      "Specialty coffee shops require a distinct digital identity that captures their physical ambiance, artisanal roasting process, and premium quality while remaining accessible and convenient for local customers in Rabat.",
    solution:
      "Crafted a visual-first digital storefront with a warm dark aesthetic, interactive menu categories, brand origin story, photo gallery, location details, and instant WhatsApp ordering pre-configured with French and Moroccan Darija language options.",
    features: [
      "Immersive specialty coffee digital experience with modern typography",
      "Interactive menu showcasing specialty espresso, filter coffee, and pastries",
      "Bilingual French and Moroccan Darija content toggle",
      "One-click WhatsApp ordering and customer contact shortcuts",
      "Location details, opening hours, and Rabat cafe directions",
      "Mobile-first responsive design tailored for smooth performance",
    ],
  },
  {
    name: "Botanica Skincare",
    slug: "botanica-skincare",
    image: botanicaImage,
    year: 2025,
    client: "Botanica Skincare",
    role: "E-commerce & Frontend Development",
    link: "https://cosm-nine.vercel.app/",
    category: "E-commerce / UI & UX",
    description:
      "A modern, responsive e-commerce storefront for a Moroccan natural cosmetics brand. The website showcases eight botanical products, communicates product benefits and pricing, and lets customers place pre-filled orders directly through WhatsApp.",
    challenge:
      "In the Moroccan cosmetics market, traditional online checkouts and upfront credit card payments often create friction and high cart abandonment due to consumer trust barriers. Customers prefer direct communication, instant reassurance, cash-on-delivery (COD), and familiar channels like WhatsApp. The challenge was to design a visually captivating, luxury skincare storefront that builds instant trust while offering a frictionless ordering flow without requiring traditional payment gateways.",
    solution:
      "Designed and developed a polished, mobile-first e-commerce landing page featuring a complete product catalogue with eight botanical skincare treatments, transparent promotional pricing, and dynamic WhatsApp order links that pre-fill the cart details and pricing into messages. Integrated trust-building sections highlighting nationwide 24–48h Moroccan delivery, cash-on-delivery reassurance, customer reviews, a brand storytelling section highlighting Moroccan botanical ingredients, an interactive FAQ, and Darija-oriented local commerce elements.",
    features: [
      "Responsive premium skincare interface optimized for desktop and mobile",
      "Eight product cards with detailed descriptions, sizing, and promotional prices",
      "One-click WhatsApp ordering with dynamic pre-filled purchase messages",
      "Cash-on-delivery (COD) and nationwide Moroccan delivery (24–48h) details",
      "Brand story section focused on pure Moroccan botanical ingredients",
      "Customer reviews and trust-building social proof",
      "Interactive FAQ section addressing ordering, delivery, and payment questions",
      "French-language storefront tailored with Moroccan Darija local-market positioning",
    ],
  },
];
