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
import waslaDashboardImage from "@/assets/images/wasladashboard.webp";
import waslaChatsImage from "@/assets/images/waslachats.webp";
import waslaAgentImage from "@/assets/images/alldayagentwasla.webp";
import waslaKnowledgeImage from "@/assets/images/waslaknowledgebase.webp";
import waslaAutomationsImage from "@/assets/images/waslaautomations.webp";
import waslaContactsImage from "@/assets/images/waslacontacts.webp";
import waslaSettingsImage from "@/assets/images/waslasettings.webp";
import botanicaImage from "@/assets/images/image.webp";
import aubeImage from "@/assets/images/aube-cafe.webp";
import vpnRequestsImage from "@/assets/images/vpn-requests.webp";
import vpnUsersImage from "@/assets/images/vpn-users.webp";
import vpnUsersGroupImage from "@/assets/images/vpn_users-group.webp";
import appUsersImage from "@/assets/images/app-users.webp";
import connectionVpnImage from "@/assets/images/connection-vpn.webp";
import auditLogsImage from "@/assets/images/audit-logs.webp";
import securityAlertsImage from "@/assets/images/alerts-2.webp";
import blockedDevicesImage from "@/assets/images/blocked-devices.webp";
import monitoringImage from "@/assets/images/monitoring.webp";

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
  architecture?: {
    layers: { name: string; items: string[] }[];
    flow: string;
  };
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
    name: "Sentinel VAC",
    slug: "sentinel-vac",
    image: monitoringImage,
    year: 2026,
    client: "PFE — High-Tech Rabat",
    role: "Cybersecurity & Infrastructure Engineer",
    link: "https://github.com/ZAKARIAXXX/pt57-vpn-portal",
    category: "Cybersecurity / Infrastructure",
    description:
      "Enterprise VPN server with an administration portal — Active Directory authentication, OpenVPN remote access, and an RBAC approval workflow for a realistic enterprise network.",
    challenge:
      "Remote access in a small enterprise is usually managed by hand — requests over email or chat, no central approval, no audit trail, and no single place to see who can connect. The VPN, the directory, and the web app live in separate worlds, so granting or revoking access is slow and error-prone.",
    solution:
      "Built a complete enterprise remote-access platform: OpenVPN on Ubuntu 24.04, Active Directory Domain Services on Windows Server 2022, a FastAPI backend with PostgreSQL, and a React admin portal. Users request access with their Active Directory credentials (LDAP bind — passwords are never stored); a security analyst approves or rejects the request; on approval the service account adds the user to the VPN_Users AD group and access is immediate. Every security-sensitive action is written to an audit log. Auth chain: OpenVPN → PAM → SSSD → Active Directory. Planned next steps: TOTP MFA, automatic access expiration, session monitoring, and SIEM integration.",
    architecture: {
      layers: [
        {
          name: "Client",
          items: ["OpenVPN Client", "Web browser (request portal)"],
        },
        {
          name: "VPN + Application Server — Ubuntu 24.04",
          items: [
            "OpenVPN Server (AES-256-GCM, TLS 1.3)",
            "PAM authentication",
            "SSSD",
            "FastAPI backend",
            "PostgreSQL",
          ],
        },
        {
          name: "Directory — Windows Server 2022",
          items: [
            "Active Directory Domain Services",
            "DNS Server",
            "Domain Controller",
            "VPN_Users group",
          ],
        },
        {
          name: "Web Portal — React",
          items: [
            "VPN request portal",
            "Administration portal",
            "Security dashboard",
          ],
        },
      ],
      flow: "User requests access in the portal → FastAPI verifies the AD credentials (LDAP bind) → analyst approves → FastAPI adds the user to the VPN_Users group → access is immediate. Every connection is authenticated through OpenVPN → PAM → SSSD → Active Directory.",
    },
    features: [
      "Active Directory authentication via LDAP bind (passwords never stored)",
      "Approval workflow: request → analyst review → group add → immediate access",
      "Role-based access control — ADMIN, SECURITY_ANALYST, AUDITOR",
      "Full audit logging of logins, requests, approvals, and AD group changes",
      "Least-privilege service account — no Domain Admin",
      "bcrypt password hashing for application accounts",
      "Immediate access after approval — the AD group update takes effect at once",
    ],
    gallery: [
      { image: vpnRequestsImage, label: "VPN requests" },
      { image: vpnUsersImage, label: "VPN users" },
      { image: vpnUsersGroupImage, label: "VPN users group" },
      { image: appUsersImage, label: "Application users" },
      { image: connectionVpnImage, label: "VPN connection" },
      { image: auditLogsImage, label: "Audit logs" },
      { image: securityAlertsImage, label: "Security alerts" },
      { image: blockedDevicesImage, label: "Blocked devices" },
      { image: monitoringImage, label: "Monitoring" },
    ],
  },
  {
    name: "Wasla CRM",
    slug: "wasla-crm",
    image: waslaImage,
    year: 2026,
    client: "Wasla (SaaS)",
    role: "Full-Stack & AI Engineer",
    link: "https://github.com/ZAKARIAXXX/wasla",
    category: "AI SaaS / WhatsApp CRM",
    description:
      "An AI-powered WhatsApp CRM and marketing automation platform built for businesses that sell in Moroccan Darija and French.",
    challenge:
      "Moroccan SMBs close most of their sales on WhatsApp, but managing hundreds of chats by hand means missed leads, slow replies, and lost revenue. Global CRMs don't solve it — they aren't localized, and they can't parse the Darija/French mix customers actually write in, so automation breaks down exactly where it's needed most.",
    solution:
      "Designed and built Wasla end to end — a React + TypeScript frontend over a Node.js / Express API (Prisma + PostgreSQL). Karima AI understands, qualifies, and replies to customers in natural Darija and French, working from a knowledge base the business controls. Lead intelligence prioritizes who to answer first; cron-scheduled follow-up sequences re-engage dormant leads automatically; and Socket.io keeps the shared team inbox in sync in real time.",
    features: [
      "Karima AI — qualifies leads and replies in Moroccan Darija and French",
      "Centralized WhatsApp inbox with real-time sync (Socket.io)",
      "Knowledge base — the business's own answers that Karima replies from",
      "Automated follow-up sequences and broadcast campaigns (cron-scheduled)",
      "Contact management with full conversation history",
      "Team collaboration with role-based access (Owner / Admin / Agent)",
      "Trilingual interface — English, French, Darija/Arabic",
    ],
    gallery: [
      { image: waslaDashboardImage, label: "Dashboard" },
      { image: waslaChatsImage, label: "Chat inbox" },
      { image: waslaAgentImage, label: "AI agent" },
      { image: waslaKnowledgeImage, label: "Knowledge base" },
      { image: waslaAutomationsImage, label: "Automations" },
      { image: waslaContactsImage, label: "Contacts" },
      { image: waslaSettingsImage, label: "Settings" },
    ],
    architecture: {
      layers: [
        {
          name: "Client — React + TypeScript",
          items: ["React + Vite", "Tailwind CSS + shadcn/ui", "React Query", "Socket.io-client (real-time inbox)", "i18next — English / French / Darija"],
        },
        {
          name: "API Layer",
          items: ["REST API (Express)", "WebSockets (Socket.io)", "JWT authentication", "Bcrypt password hashing"],
        },
        {
          name: "Backend Services — Node.js + Express",
          items: ["Chat inbox service", "Lead intelligence", "Campaign scheduler (Node-cron)", "Contact management"],
        },
        {
          name: "Data + AI",
          items: ["PostgreSQL via Prisma ORM", "Karima AI — lead qualification (Darija / French)", "Automated replies + human handoff"],
        },
      ],
      flow: "Customer chats arrive in the centralized inbox and sync to every agent in real time → Karima AI qualifies the lead and replies in Darija or French, or hands off to a human agent → lead intelligence prioritizes who to answer first → cron-scheduled sequences follow up with dormant leads automatically → the whole team works from one shared dashboard.",
    },
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
