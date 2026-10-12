
import { StaticImageData } from "next/image";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import waslaImage from "@/assets/images/wasla.png";
import botanicaImage from "@/assets/images/image.png";
import aubeImage from "@/assets/images/aube-cafe.png";

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
}

export const projects: Project[] = [
    {
        name: "Wasla CRM",
        slug: "wasla-crm",
        image: waslaImage,
        year: 2026,
        client: "Wasla (SaaS)",
        role: "Full-Stack & AI Engineer",
        description: "An AI-powered WhatsApp CRM and marketing automation platform built specifically for businesses operating in Moroccan Darija and French.",
        challenge: "Small and medium businesses in Morocco rely heavily on WhatsApp to close sales, but managing hundreds of chats manually leads to missed leads, slow replies, and lost revenue. Existing global CRMs lack localization and fail to understand Moroccan Darija (the spoken Arabic dialect) and French hybrid text, making automated customer service ineffective.",
        solution: "Designed and built Wasla, featuring Karima AI — a custom conversational agent trained to understand, qualify, and reply to customers in natural Moroccan Darija and French. Implemented a drag-and-drop Kanban pipeline for tracking deals, automated cron-scheduled follow-up sequences to re-engage dormant leads, real-time message sync using WebSockets, and rich analytics dashboards to monitor conversion rates and agent response performance."
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
        description: "An immersive, responsive website for Aube Café, a specialty coffee house in Rabat. Showcases premium coffee brews, artisanal pastries, brand heritage, and seamless WhatsApp ordering.",
        challenge: "Specialty coffee shops require a distinct digital identity that captures their physical ambiance, artisanal roasting process, and premium quality while remaining accessible and convenient for local customers in Rabat.",
        solution: "Crafted a visual-first digital storefront with a warm dark aesthetic, interactive menu categories, brand origin story, photo gallery, location details, and instant WhatsApp ordering pre-configured with French and Moroccan Darija language options.",
        features: [
            "Immersive specialty coffee digital experience with modern typography",
            "Interactive menu showcasing specialty espresso, filter coffee, and pastries",
            "Bilingual French and Moroccan Darija content toggle",
            "One-click WhatsApp ordering and customer contact shortcuts",
            "Location details, opening hours, and Rabat cafe directions",
            "Mobile-first responsive design tailored for smooth performance"
        ]
    },
    {
        name: "Wavelength Studios",
        slug: "wavelength-studios",
        image: image2,
        year: 2023,
        client: "Wavelength Studios",
        role: "Web Design & Development",
        description: "A high-performance portfolio site for an award-winning audio production studio.",
        challenge: "Showcasing audio work visually is inherently difficult. The studio required a way to let users experience their soundscapes without overwhelming them with text.",
        solution: "We integrated a custom audio visualizer into the hero section and created an interactive project gallery where sound samples play on hover. The dark mode aesthetic reflects the studio environment."
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
        description: "A modern, responsive e-commerce storefront for a Moroccan natural cosmetics brand. The website showcases eight botanical products, communicates product benefits and pricing, and lets customers place pre-filled orders directly through WhatsApp.",
        challenge: "In the Moroccan cosmetics market, traditional online checkouts and upfront credit card payments often create friction and high cart abandonment due to consumer trust barriers. Customers prefer direct communication, instant reassurance, cash-on-delivery (COD), and familiar channels like WhatsApp. The challenge was to design a visually captivating, luxury skincare storefront that builds instant trust while offering a frictionless ordering flow without requiring traditional payment gateways.",
        solution: "Designed and developed a polished, mobile-first e-commerce landing page featuring a complete product catalogue with eight botanical skincare treatments, transparent promotional pricing, and dynamic WhatsApp order links that pre-fill the cart details and pricing into messages. Integrated trust-building sections highlighting nationwide 24–48h Moroccan delivery, cash-on-delivery reassurance, customer reviews, a brand storytelling section highlighting Moroccan botanical ingredients, an interactive FAQ, and Darija-oriented local commerce elements.",
        features: [
            "Responsive premium skincare interface optimized for desktop and mobile",
            "Eight product cards with detailed descriptions, sizing, and promotional prices",
            "One-click WhatsApp ordering with dynamic pre-filled purchase messages",
            "Cash-on-delivery (COD) and nationwide Moroccan delivery (24–48h) details",
            "Brand story section focused on pure Moroccan botanical ingredients",
            "Customer reviews and trust-building social proof",
            "Interactive FAQ section addressing ordering, delivery, and payment questions",
            "French-language storefront tailored with Moroccan Darija local-market positioning"
        ]
    },
    {
        name: "Urban Plates",
        slug: "urban-plates",
        image: image4,
        year: 2022,
        client: "Urban Plates",
        role: "eCommerce Platform",
        description: "A direct-to-consumer meal kit service delivering chef-prepared ingredients.",
        challenge: "The user journey for selecting meals and managing subscriptions was too complex, leading to high cart abandonment.",
        solution: "We streamlined the subscription flow, implemented a 'Build Your Box' interface, and optimized the checkout process. This led to a 25% increase in conversion rates."
    },
    {
        name: "Bloom Botanicals",
        slug: "bloom-botanicals",
        image: image5,
        year: 2022,
        client: "Bloom Botanicals",
        role: "Marketing Website",
        description: "An informational and e-commerce site for a luxury skincare brand using rare botanical ingredients.",
        challenge: "Communicating the science behind the ingredients in an accessible, luxurious way.",
        solution: "We used high-quality macro photography combined with clean serif typography to create an editorial look. Interactive 'Ingredient Spotlight' sections educate users while they shop."
    },
];
