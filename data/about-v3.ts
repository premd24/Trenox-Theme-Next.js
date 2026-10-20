/* Content for the About V3 page sections, in page order. */
import type { CounterPart } from "@/data/home";

export const aboutV3Meta = {
  title: "About V3 | Trenox",
  description:
    "Innovating the way traders build smarter, faster portfolios — the Trenox mission, milestones and team.",
};

/* ------------------------------------------------------------------ hero */

export type Achievement = { label: string; counter: CounterPart[] };

export const achievements: Achievement[] = [
  {
    label: "Total Rewards",
    counter: [
      { symbol: "$" },
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { symbol: "M" },
      { symbol: "+" },
    ],
  },
  {
    label: "Total Traders",
    counter: [
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { symbol: "." },
      { roll: "upper", digits: ["7", "6", "0"] },
      { roll: "lower", digits: ["0", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "+" },
    ],
  },
  {
    label: "Countries",
    counter: [
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["0", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "+" },
    ],
  },
];

/* ------------------------------------------------------------- our story */

export type Milestone = { year: string; text: string };

// The timeline alternates sides: the right column starts higher, so it holds
// the odd years.
export const storyLeft: Milestone[] = [
  {
    year: "2022",
    text: "We launched our MVP and saw the first batch of traders use Blue Guardian to run virtual strategies and track real-time performance. Early feedback was overwhelmingly positive, validating our vision.",
  },
  {
    year: "2024",
    text: "We rolled out advanced features like AI-driven profit analytics, portfolio simulations, and cross-asset insights. Power users—hedge fund analysts, pro traders, and strategy creators—joined the platform in droves.",
  },
];

export const storyRight: Milestone[] = [
  {
    year: "2021",
    text: "Frustrated by the lack of real-time, intelligent trading tools, our founders set out to build a better way to manage multi-asset portfolios. Blue Guardian was born from the idea that data, speed, and strategy should live in one dashboard.",
  },
  {
    year: "2023",
    text: "Our user base grew rapidly across Europe, Asia, and North America. We added blockchain-backed payout tracking, secured new partnerships with major exchanges, and launched our performance-based rewards engine.",
  },
  {
    year: "2025",
    text: "Now used in 100+ countries, Blue Guardian continues to redefine how traders operate. With a focus on speed, automation, and actionable intelligence, we’re building the future of decentralized, data-powered investing.",
  },
];

/* ------------------------------------------------------------------ team */

export type TeamMember = { name: string; role: string; image: string };

export const teamMembers: TeamMember[] = [
  { name: "Sarah Thomson", role: "Marketing Consultant", image: "Team-Mamber-Image-4.avif" },
  { name: "Cristian Maiz", role: "Co-Founder and Creative Director", image: "Team-Mamber-Image-6.avif" },
  { name: "Joe Orozco", role: "Designer", image: "Team-Mamber.avif" },
  { name: "Jeff Lim", role: "Software engineer", image: "Team-Mamber-Image-3.avif" },
  { name: "Jason Jiang", role: "Head of growth", image: "Team-Mamber-Image-1.avif" },
  { name: "Fiona Spears", role: "Executive assistant", image: "Team-Mamber-Image-2.avif" },
  { name: "Albert Tian", role: "Executive assistant", image: "Team-Mamber-Image-8.avif" },
  { name: "Hayden Carter", role: "Product marketing representative", image: "Team-Mamber-Image-7.avif" },
  { name: "Edward Mai", role: "Software engineer", image: "Team-Mamber-Image-5.avif" },
];

/* --------------------------------------------------------------- traders */

// Each row mixes logo tiles and quote cards; the ids carry grid placement
// rules from the stylesheet.
export type TraderItem =
  | { kind: "logo"; logo: string; id?: string }
  | { kind: "quote"; quote: string; name: string; role: string; image: string; id: string };

export const traderRows: TraderItem[][] = [
  [
    { kind: "logo", logo: "Fictional-company-logo.svg" },
    { kind: "logo", logo: "Fictional-company-logo-1.svg" },
    {
      kind: "quote",
      id: "node-_100f23c2-2e8f-66d1-4f2d-a60b44ff5044-d10f517b",
      quote:
        "“In the new era of technology we look in the future with certainty pride for our company and business. consider all the driver financial change gives you the block.”",
      name: "Sarah Thomson",
      role: "Marketing Consultant",
      image: "Trader-Image-2.avif",
    },
  ],
  [
    { kind: "logo", logo: "Fictional-company-logo-3.svg" },
    {
      kind: "quote",
      id: "node-c64b99ce-4b2c-c4b6-0d51-147bea51978b-d10f517b",
      quote:
        "“As technology evolves, so do we — moving forward with certainty and pride. Every financial shift becomes a building block for lasting success.”",
      name: "Thomas Touchel",
      role: "Marketing Consultant",
      image: "Trader-Image-1.avif",
    },
    {
      kind: "logo",
      logo: "Fictional-company-logo-2.svg",
      id: "node-c64b99ce-4b2c-c4b6-0d51-147bea519787-d10f517b",
    },
  ],
];
