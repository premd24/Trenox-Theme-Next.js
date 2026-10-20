/* Content for the Features V1 page sections, in page order. */

/* ------------------------------------------------------------- platform */

export type PlatformItem = { icon: string; title: string; text: string; id?: string };

export const platformItems: PlatformItem[] = [
  {
    icon: "payment-01.svg",
    title: "Premier Pricing Solutions",
    text: "Benefit from SCRYPT's competitive pricing, backed by our extensive network of exchanges and market makers.",
  },
  {
    icon: "piggy-bank.svg",
    title: "Trusted Scalable Solutions",
    text: "As a leading name in the sector, SCRYPT offers tailored execution solutions designed for the modern digital finance ecosystem.",
  },
  {
    // the stylesheet places this card on the grid by id
    id: "node-_6836b0d3-5f5e-a529-0f10-6dedf49543a6-d10f517c",
    icon: "payment-success-01.svg",
    title: "Optimised Market Efficiency",
    text: "Streamline your trading by consolidating accounts across numerous liquidity providers, thereby reducing the risks associated with trade exposure.",
  },
];

/* ------------------------------------------------------------ solutions */

export type SolutionTab = {
  key: string;
  label: string;
  /** Icon shown on the active (white) tab, then the default one. */
  icons: [string, string];
  image: string;
};

export const solutionTabs: SolutionTab[] = [
  {
    key: "Tab 1",
    label: "Monitoring",
    icons: ["New-Black-Icon.svg", "StyleStroke-TypeRounded.svg"],
    image: "Home-Hero-Image-1.avif",
  },
  {
    key: "Tab 2",
    label: "Analytics",
    icons: ["New-Black-Icon-2.svg", "dashboard-browsing.svg"],
    image: "Home-Hero-Image-4.avif",
  },
  {
    key: "Tab 3",
    label: "Performance",
    icons: ["New-Black-Icon-3.svg", "StyleStroke-TypeRounded_1.svg"],
    image: "Home-Hero-Image-3.avif",
  },
  {
    key: "Tab 4",
    label: "Feedback",
    icons: ["New-Black-Icon-4.svg", "StyleStroke-TypeRounded-1.svg"],
    image: "Home-Hero-Image-2.avif",
  },
];
