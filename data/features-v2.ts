/* Content for the Features V2 page sections, in page order. */

/* --------------------------------------------------------- why choose us */

// Same three services as the home page, but this copy differs in places: the
// first row nests its mobile icon in the left column and row 3 names "Trade Guardian".
export const services = [
  {
    number: "01",
    title: "Quick and Reliable Payouts",
    icon: "payment-01.svg",
    mobileIconInLeft: true,
    text: "No waiting games. Our system is optimized for speed — ensuring your payouts land fast, without unnecessary delays or manual processing.",
  },
  {
    number: "02",
    title: "Up to 90% Profit Split",
    icon: "piggy-bank.svg",
    text: "You trade, you earn. We believe in rewarding skill, not taking advantage of it. Get one of the highest profit splits in the industry — up to 90%, directly to you.",
  },
  {
    number: "03",
    title: "Weekly Payout Options",
    icon: "payment-success-01.svg",
    text: "At Trade Guardian, we provide rapid and trustworthy payouts, reinforced by verified evidence on blockchain and social media.",
  },
];

/* --------------------------------------------------------------- compare */

/** One comparison row: the topic, then Youflow's and Deep Trade's answer. */
export const compareRows: [string, string, string][] = [
  [
    "Purpose",
    "All-in-one messaging & automation for trading businesses",
    "Trading platform with signal delivery and charting tools",
  ],
  [
    "Core Focus",
    "Client communication, automation, and CRM",
    "Market analysis, trading signals, and technical tools",
  ],
  [
    "Messaging Capabilities",
    "Multi-channel (Instagram, SMS, Email, Web chat)",
    "Mostly internal or 1-way communication for signal delivery",
  ],
  [
    "Team Collaboration",
    "Supports multi-agent inboxes, internal notes (whispers), and transfers",
    "Limited team collaboration features",
  ],
  [
    "Automation Tools",
    "Auto-replies, API access, triggers, shortcuts, and workflows",
    "Signal scheduling, some automation for alerts",
  ],
  [
    "Use Case",
    "Best for managing trading clients, community communication, and support",
    "Best for signal broadcasting and technical charting",
  ],
  [
    "Third-Party Integrations",
    "Instagram, Facebook, SMS, Email, and upcoming CRM tools",
    "Brokers (MT4/MT5), charting APIs (TradingView)",
  ],
];

/* ------------------------------------------------------------ deep trade */

// Portfolio card: three columns of image boxes drifting up/down (2 rows each).
const boxRow = ["Features-Box-Image-6.avif", "Features-Box-Image-1.avif", "Features-Box-Image-3.avif"];
const reverseBoxRow = ["Features-Box-Image-2.avif", "Features-Box-Image-4.avif", "Features-Box-Image-6.avif"];

export const boxImageColumns: { reverse?: boolean; rows: string[][] }[] = [
  { rows: [boxRow, boxRow] },
  { reverse: true, rows: [reverseBoxRow, reverseBoxRow] },
  { rows: [boxRow, boxRow] },
];
