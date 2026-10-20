/* Content for the About V2 page sections, in page order. */

export const aboutV2Meta = {
  title: "About V2 | Trenox",
  description:
    "A founder-led take on the Trenox story, with the company timeline and the partners who back it.",
};

/* -------------------------------------------------------- founder memo */

export const founderMemo: string[] = [
  "The greatest work is the kind that ignites our passion and sharpens our edge. The greatest breakthroughs are built by people who are deeply aligned with their vision and driven to take control of their future.",
  "Trading offers exactly that — the ability to craft your own path, take risks on your terms, and grow both financially and professionally. It gives you the freedom to decide how and when you work, with the flexibility to match your lifestyle and the opportunity to build a career based on knowledge, discipline, and intuition.",
  "There’s never been a better time to explore the markets, deepen your skills, and embrace the creative freedom that comes with being an independent trader.",
  "This is just the beginning for Portal, and your voice matters. I’d love to know how Portal can make trading an even more rewarding experience for you. Join me on this journey — and let’s build something powerful together.",
];

/* ----------------------------------------------------------------- teams */

export type CrewMember = { name: string; role: string };

export const crew: CrewMember[] = [
  { name: "Andros Billin", role: "Co-founder of Youflow" },
  { name: "Jack Mahir", role: "Marketing Director" },
  { name: "Sarah Kur", role: "UI/UX Designer" },
  { name: "Sheila Durgan", role: "Human Accounts Officer" },
  { name: "Norman Feeney", role: "Mobility Coordinator" },
  { name: "Naomi Dickens", role: "Investor Operations Planner" },
  { name: "Christian Jast", role: "Legacy Optimizer" },
  { name: "Gertrude Olson", role: "Senior Usability Supervisor" },
  { name: "Rick Funk", role: "Internal Directives Manager" },
  { name: "Brooke Powlowski", role: "Forward Division Consultant" },
];

/** Each social link stacks two icons that swap on hover. */
export const crewSocials = [
  { href: "https://x.com/", icons: ["new-twitter-1.svg", "new-twitter.svg"] },
  { href: "https://www.facebook.com/", icons: ["facebook-01-1.svg", "facebook-01.svg"] },
];

/* ------------------------------------------------------------- companies */

export type CompanyLogo = { logo: string; hideMobile?: boolean };

export const companyColumnLeft: CompanyLogo[] = [
  { logo: "Logo1.svg" },
  { logo: "Logo_1.svg" },
  { logo: "Logo-09.svg", hideMobile: true },
  { logo: "Logo-08.svg", hideMobile: true },
];

export const companyMiddleTop: CompanyLogo[] = [{ logo: "Logo-06.svg" }, { logo: "Logo-05.svg" }];
export const companyMiddleBottom: CompanyLogo[] = [{ logo: "Logo-07.svg" }, { logo: "Logo-04.svg" }];

export const companyColumnRight: CompanyLogo[] = [
  { logo: "Logo-11.svg", hideMobile: true },
  { logo: "Logo-12.svg", hideMobile: true },
  { logo: "Logo-10.svg" },
  { logo: "Logo-03.svg" },
];
