
import { StaticImageData } from "next/image";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";

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
}

export const projects: Project[] = [
    {
        name: "Artisan Brew Co.",
        slug: "artisan-brew-co",
        image: image1,
        year: 2024,
        client: "Artisan Brew Co.",
        role: "Brand Identity & Website",
        description: "A complete digital rebranding for a craft brewery focused on organic ingredients and traditional brewing methods.",
        challenge: "The brand needed to modernize its image while retaining its artisanal roots. The previous website was outdated and didn't reflect the premium quality of their products.",
        solution: "We developed a warm, earthy color palette and a clean, typography-driven website that puts the product photography front and center. The new site includes an age-gate, a store locator, and an immersive 'Our Process' section."
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
        name: "Nova Fitness",
        slug: "nova-fitness",
        image: image3,
        year: 2023,
        client: "Nova Fitness",
        role: "Mobile App Design",
        description: "A holistic fitness tracking app that combines workout logging with mental wellness content.",
        challenge: "The fitness app market is saturated. Nova needed a unique feature set and a UI that felt calming rather than aggressive.",
        solution: "We focused on 'Mindful Movement', designing an interface with soft gradients, rounded corners, and micro-interactions that reward consistency. The result is an app that feels like a personal wellness companion."
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
