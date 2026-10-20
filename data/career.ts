/* Content for the career page sections, in page order. */

export const careerHero = {
  tag: "Career",
  title: "Join the Team Powering the Next Generation of Traders",
  text: "Youflow is transforming the way people trade — from real-time insights to smart trading tools and data-driven decision support. We're not just another trading platform. We're building an ecosystem where strategy, speed, and simplicity empower traders of all levels to grow.",
};

export const positions = [
  { title: "Product Manager", type: "On-site" },
  { title: "Front-end Developer", type: "Hybrid" },
  { title: "Data Analyst", type: "Remote" },
  { title: "Dev Ops Engineer", type: "Hybrid" },
  { title: "Content Strategist", type: "Remote" },
];

export const whyYouflow = {
  title: "Why Work at Youflow?",
  text: "Youflow isn’t just software — it’s a platform that helps traders make real money and reduce risk. Every line of code, design decision, or campaign you create can influence real-world trades.",
};

// `id` is a grid-placement hook the stylesheet targets.
export const youflowReasons: { icon: string; title: string; text: string; id?: string }[] = [
  {
    icon: "global-search.svg",
    title: "Remote-First & Global",
    text: "Trading is 24/7 — and so are we. Work from anywhere, collaborate globally, and build tools that support users in every time zone.",
  },
  {
    icon: "chart-up.svg",
    title: "Join a Growing Fintech Product",
    text: "With trading volumes and user engagement growing every month, Youflow is scaling fast. Join us in building a platform that combines powerful technology with real-time financial insights.",
  },
  {
    icon: "market-analysis.svg",
    title: "Learn with the Markets",
    text: "At Youflow, we grow with the markets. You'll gain hands-on experience with live data, trading patterns, and user behavior in one of the most dynamic industries on earth.",
    id: "node-_59ac17b0-b091-5640-11eb-e31c9595b26d-d10f5183",
  },
];

export const benefits = [
  {
    icon: "work.svg",
    title: "Work from anywhere",
    text: "You can work from anywhere you like with our flexible policy.",
  },
  {
    icon: "ice-cubes.svg",
    title: "Equity in Owner",
    text: "All full-time team members in qualifying countries get pre-IPO equity in Owner.",
  },
  {
    icon: "question.svg",
    title: "Benefits to support your success",
    text: "We set you up for success, no matter where you are or where you’re headed.",
  },
  {
    icon: "health.svg",
    title: "Healthcare Coverage",
    text: "We’ve got you covered with great health, dental, and vision plans.",
  },
  {
    icon: "unavailable.svg",
    title: "Unlimited PTO",
    text: "You pick your schedule! We trust our team to choose their own work hours without micromanaging.",
  },
  {
    icon: "user-multiple.svg",
    title: "Team retreats",
    text: "We love making real connections with our coworkers, so we host a bunch of retreats each year to strengthen our friendships, celebrate our wins, and plan for the future.",
  },
];
