/* Content for the Home V3 page sections, in page order. */

/* ------------------------------------------------------------------- hero */

export const heroTabKeys = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"] as const;
export type HeroTabKey = (typeof heroTabKeys)[number];

// Each tab shows a dark icon, swapped for its outline twin, beside the label.
export const heroTabs: { key: HeroTabKey; label: string; icons: [string, string]; image: string }[] = [
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

/* ---------------------------------------------------------------- process */

export const processSteps = [
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

/* ----------------------------------------------------------- testimonials */

export const clientPortraits = [
  "Client-Image-1.avif",
  "Client-Image-7.avif",
  "Client-Image-4.avif",
  "Client-Image-6.avif",
  "Client-Image-2.avif",
  "Client-Image-5.avif",
];

export const testimonialsV3 = [
  {
    name: "Amber Arnessia",
    quote:
      "\"Adopting their platform has streamlined our transaction process—everything is smoother, and the results have been outstanding. Their platform made transaction management effortless. It's smooth, efficient, and has delivered impressive improvements.\"",
  },
  {
    name: "Carmen Waters",
    quote:
      "\"Their platform has completely transformed how we handle transactions. The process is now incredibly smooth, and we’ve seen significant. The process is now incredibly smooth, and we’ve seen significant.\"",
  },
  {
    name: "Liam Everhart",
    quote:
      "\"Since adopting their platform, handling transactions has never been easier. The experience is smooth, and the improvements are remarkable.\"",
  },
  {
    name: "Carole Kiehn",
    quote:
      "\"The Youflow platform has completely transformed our transaction workflows. The integration is seamless, leading to significant improvements in our operational productivity and customer satisfaction.\"",
  },
  {
    name: "Amber Arnessia",
    quote:
      "\"The Youflow platform has revolutionized our transaction processes. Everything flows seamlessly now, and we've experienced remarkable gains in operational efficiency.\"",
  },
  {
    name: "Amber Arnessia",
    quote:
      "\"Youflow has totally changed the way we handle transactions. Everything just clicks now, and we've seen some awesome improvements in how efficiently we operate.\"",
  },
];
