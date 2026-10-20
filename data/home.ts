/* Content for the home page sections, in page order. */

/* ---------------------------------------------------------- success rate */

// A counter is a row of rolling digit columns and static symbols ("+", "K").
// Each column rolls in from above ("upper") or below ("lower").
export type CounterPart =
  | { roll: "upper" | "lower"; digits: [string, string, string] }
  | { symbol: string };

export type Stat = { label: string; counter: CounterPart[] };

export const ratingStars = [
  { src: "Star-1.svg", className: "star-01 _01" },
  { src: "Star-1.svg", className: "star-01 _01" },
  { src: "Star-1.svg", className: "star-01" },
  { src: "Star-1.svg", className: "star-01" },
  { src: "Star-2.svg", className: "star-01" },
];

export const stats: Stat[] = [
  {
    label: "Countries",
    counter: [
      { roll: "upper", digits: ["1", "2", "2"] },
      { roll: "lower", digits: ["3", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "+" },
    ],
  },
  {
    label: "Qualified Analysis",
    counter: [
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { symbol: "K" },
      { symbol: "+" },
    ],
  },
  {
    label: "Traders",
    counter: [
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "+" },
    ],
  },
  {
    label: "Virtual Strategies",
    counter: [
      { roll: "lower", digits: ["2", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "7"] },
      { symbol: "K" },
    ],
  },
  {
    label: "Performance Fee",
    counter: [
      { symbol: "$" },
      { roll: "upper", digits: ["1", "2", "3"] },
      { roll: "lower", digits: ["2", "4", "9"] },
      { roll: "upper", digits: ["7", "6", "0"] },
      { symbol: "M" },
      { symbol: "+" },
    ],
  },
];

/* ------------------------------------------------------------ brand logos */

// Two identical-width rows that scroll as one seamless marquee.
export const brandLogoRows: string[][] = [
  ["Logoipsum-5.svg", "Logoipsum-1.svg", "Logoipsum-2.svg", "Logoipsum-3.svg", "Logoipsum-4.svg", "Logoipsum-5.svg"],
  ["Logoipsum-1.svg", "Logoipsum-2.svg", "Logoipsum-3.svg", "Logoipsum-4.svg", "Logoipsum-1.svg", "Logoipsum-2.svg"],
];

/* --------------------------------------------------------- why choose us */

export const services = [
  {
    number: "01",
    title: "Quick and Reliable Payouts",
    icon: "payment-01.svg",
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
    text: "At Trenox, we provide rapid and trustworthy payouts, reinforced by verified evidence on blockchain and social media.",
  },
];

/* --------------------------------------------------------------- features */

// Portfolio card: three columns of icons drifting up/down (2 rows each).
export const managementIconColumns: { reverse?: boolean; rows: string[][] }[] = [
  {
    rows: [
      ["Management-Icon-9.svg", "Management-Icon-10.svg", "Management-Icon-5.svg"],
      ["Management-Icon-3.svg", "Management-Icon-4.svg", "Management-Icon-7.svg"],
    ],
  },
  {
    reverse: true,
    rows: [
      ["Management-Icon-6.svg", "Management-Icon-2.svg", "Management-Icon-8.svg"],
      ["Management-Icon-7.svg", "Management-Icon-4.svg", "Management-Icon-6.svg"],
    ],
  },
  {
    rows: [
      ["Management-Icon.svg", "Management-Icon-2.svg", "Management-Icon-7.svg"],
      ["Management-Icon-5.svg", "Management-Icon-4.svg", "Management-Icon.svg"],
    ],
  },
];

/* -------------------------------------------------------------- languages */

export const languages = [
  { flag: "Sweden.svg", name: "Sweden" },
  { flag: "UK.svg", name: "United Kingodom" },
  { flag: "German.svg", name: "Germany" },
  { flag: "Italian.svg", name: "Italian" },
  { flag: "America.svg", name: "American" },
  { flag: "China.svg", name: "China" },
  { flag: "Poland.svg", name: "Indonesian" },
  { flag: "Japan.svg", name: "Japanesse" },
  { flag: "Czech.svg", name: "Czech" },
  { flag: "Russia.svg", name: "Russian" },
  { flag: "Europe.svg", name: "Europe" },
  { flag: "Korea.svg", name: "Korean" },
  { flag: "Turkey.svg", name: "Turkey" },
];

/* ----------------------------------------------------------- testimonials */

export type Testimonial = {
  name: string;
  image: string;
  quote: string;
  date: string;
};

// Liam and Carmen appear with two wordings ("Trenox" / "Youflow"), as in the template.
const people = {
  liamTrenox: {
    name: "Liam Everhart",
    image: "Client-2.avif",
    date: "April 10, 2024",
    quote: `"Trenox has totally changed the way we handle transactions. Everything just clicks , and we've seen some awesome improvements in how efficiently we operate."`,
  },
  liam: {
    name: "Liam Everhart",
    image: "Client-2.avif",
    date: "April 10, 2024",
    quote: `"Youflow has totally changed the way we handle transactions. Everything just clicks, and we've seen some awesome improvements in how efficiently we operate."`,
  },
  carmenTrenox: {
    name: "Carmen Waters",
    image: "Client-01.avif",
    date: "June 12, 2024",
    quote: `"The Trenox platform has revolutionized our transaction processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency."`,
  },
  carmen: {
    name: "Carmen Waters",
    image: "Client-01.avif",
    date: "June 12, 2024",
    quote: `"The Youflow platform has revolutionized our transaction processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency."`,
  },
  carole: {
    name: "Carole Kiehn",
    image: "Client-1.avif",
    date: "July 10, 2024",
    quote: `"Customer support is top-notch, and the platform itself fits seamlessly into our workflow. Highly recommend it for growing teams."`,
  },
  sophie: {
    name: "Sophie Ahmed",
    image: "Client-3.avif",
    date: "June 10, 2024",
    quote: `"The automation tools they provide have made our daily tasks so much easier. It feels like we added another team member—without the overhead."`,
  },
  figo: {
    name: "Figo Nath",
    image: "Client-4.avif",
    date: "May 10, 2024",
    quote: `"We’ve reduced project delivery times by nearly 40% since integrating their solution. It’s intuitive, efficient, and reliable."`,
  },
} satisfies Record<string, Testimonial>;

// Each marquee row renders its card list twice back to back so the loop is
// seamless; the second copy is listed separately to match the original copy.
export const testimonialRows: { className?: string; loops: Testimonial[][] }[] = [
  {
    loops: [
      [people.liamTrenox, people.carmenTrenox, people.carole, people.sophie, people.figo],
      [people.liam, people.carmen, people.carole, people.sophie, people.figo],
    ],
  },
  {
    className: "_01",
    loops: [
      [people.liam, people.carmen, people.sophie, people.carole, people.figo, people.carmen, people.figo],
      [people.liam, people.carmen, people.sophie, people.carole, people.figo, people.carmenTrenox, people.figo],
    ],
  },
];

/* ---------------------------------------------------------------- pricing */

export type Plan = {
  name: string;
  icon: string;
  iconAlt: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
  // Webflow grid-placement id the stylesheet targets on smaller screens.
  gridId?: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    icon: "68557e3bc2445b8fa504b8dd_award-01-24a695.svg",
    iconAlt: "Starter plan icon",
    price: "$480",
    description: "Customize your business experience with Trenox's easy dashboard.",
    features: [
      "Streamlined project management",
      "Advanced analytics capabilities",
      "Real-time collaboration features",
      "Robust security protocols",
      "User-friendly onboarding process",
    ],
    href: "/product/starter",
    featured: true,
  },
  {
    name: "Pro",
    icon: "68557e524329f200d8dccfa9_award-02-6dadb9.svg",
    iconAlt: "Pro plan icon",
    price: "$1200",
    description: "Adapt your operations with Trenox's powerful dashboard features.",
    features: [
      "Optimized communication tools",
      "Customizable dashboards",
      "Intuitive task tracking",
      "Data visualization enhancements",
      "Mobile application integration",
    ],
    href: "/product/pro",
  },
  {
    name: "Enterprises",
    icon: "68557e644e1e23d873fde865_award-04-011a78.svg",
    iconAlt: "Enterprises plan icon",
    price: "$3000",
    description: "Streamline your management with Trenox's efficient dashboard.",
    features: [
      "Improved user interface design",
      "Integrative third-party support",
      "Cross-platform accessibility",
      "Comprehensive reporting tools",
      "Feedback and review systems",
    ],
    href: "/product/enterprises",
    gridId: "node-f08814ee-be9b-cf35-a8b9-54d814a550a0-d10f5174",
  },
];

/* ---------------------------------------------------------------- compare */

export const comparePlans = ["Starter", "Pro", "Enterprises"];

export const compareRows: { feature: string; values: [string, string, string] }[] = [
  { feature: "Broker Backed", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Rapid Evaluation", values: ["3", "Unlimited", "Unlimited"] },
  { feature: "Max Allocation", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Minimum Trading Days", values: ["1K", "10K", "Custom"] },
];

/* -------------------------------------------------------------------- faq */

export const faqs = [
  {
    question: "Who is Trenox for?",
    answer:
      "Trenox is a modern messaging and automation platform designed for traders and financial businesses. It helps you centralize customer conversations, automate workflows, and stay responsive across channels — including Instagram, WhatsApp, SMS, and more.",
  },
  {
    question: "What is Trenox?",
    answer:
      "Trenox is a modern messaging and automation platform designed for traders and financial businesses. It helps you centralize customer conversations, automate workflows, and stay responsive across channels — including Instagram, WhatsApp, SMS, and more.",
  },
  {
    question: "Does Trenox support multiple team members?",
    answer:
      "Yes! Trenox allows you to create departments and assign conversations to different team members, making collaboration easy and efficient.",
  },
  {
    question: "What channels can I connect with Trenox?",
    answer:
      "Currently, Trenox supports Instagram Business, SMS, email, and web chat integrations — with more platforms coming soon.",
  },
  {
    question: "Can I use Trenox on mobile?",
    answer:
      "Yes, Trenox is fully responsive and also offers mobile alerts, so your team can manage conversations on the go.",
  },
];
