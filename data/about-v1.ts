/* Content for the About V1 page sections, in page order. */
import type { CounterPart } from "@/data/home";

export const aboutV1Meta = {
  title: "About V1 | Trenox",
  description:
    "The team building Trenox, how the platform came together and the process behind every release.",
};

/* -------------------------------------------------------------- about us */

export type AboutStat = { label: string; image: string; counter: CounterPart[] };

export const aboutStats: AboutStat[] = [
  {
    label: "Total Rewards",
    image: "About-V3-2.avif",
    counter: [
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "+" },
    ],
  },
  {
    label: "Total Traders",
    image: "About-2.avif",
    counter: [
      { roll: "upper", digits: ["1", "2", "8"] },
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
    image: "About-V3-4.avif",
    counter: [
      { roll: "upper", digits: ["1", "2", "2"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "+" },
    ],
  },
];

/* --------------------------------------------------------------- process */

export type ProcessStep = { icon: string; title: string; text: string };

export const processSteps: ProcessStep[] = [
  {
    icon: "add-01.svg",
    title: "Sign Up",
    text: "Seize every investment opportunity by acting swiftly, without waiting for your funds to clear.",
  },
  {
    icon: "checkmark-square-02.svg",
    title: "Receive your Login",
    text: "Capitalize on every investment chance by making timely moves, bypassing the waiting period for funds to settle.",
  },
  {
    icon: "smile.svg",
    title: "Starrt your Evaluation",
    text: "Maximize your investment potential by taking action immediately, without the delay of fund settlement.",
  },
  {
    icon: "money-receive-circle.svg",
    title: "Start Earning",
    text: "Unlock every investment opportunity by making prompt decisions, without the hassle of waiting for funds to become available.",
  },
];

/* ----------------------------------------------------------------- teams */

export type Founder = {
  name: string;
  role: string;
  /** Image base name; the -p-500/800/1080 sizes sit next to it. */
  image: string;
  bio: string;
};

export const founders: Founder[] = [
  {
    name: "Alex Timothy",
    role: "Co - Founder",
    image: "trenox-team-image",
    bio: "Alex Timothy first foray into investing was at age 18, when he discovered he had a knack for the financial markets. His early experiences trading sparked a passion that he pursued at University, studying banking, finance, and investments while honing his skills in various investment.",
  },
  {
    name: "Jeremy Budiman",
    role: "Chief Executive Officer",
    image: "trenox-team-image-2",
    bio: "While at university, Jeremy discovered proprietary trading through an ad. The idea of leveraging a firm's capital to amplify his potential profits was appealing. However, in the different firms he trialled, he noticed that some excelled in evaluations, and others boasted superior technology.",
  },
];
