/* Content for the Features V3 page sections, in page order. */

/* ------------------------------------------------------- features (v6) */

/**
 * The illustration shown while a row is open. Pane 1 is a screenshot with a
 * floating card; the others are a single framed image.
 */
export type ExplorePane =
  | { image: string; overlay: string }
  | { tabClassName: string; frameClassName?: string; image: string };

/** An accordion row of the "Explore our features" list, paired with a pane. */
export type ExploreFeature = {
  key: string;
  title: string;
  titleClassName?: string;
  text: string;
  /** Bold tail of the text. */
  strong?: string;
  /** Rows 3 and 4 end with an (empty) underline. */
  line?: boolean;
  pane: ExplorePane;
};

export const exploreFeatures: ExploreFeature[] = [
  {
    key: "Tab 1",
    title: "Real-time market insights",
    text: "Eliminate manual invoice entry and create bills in seconds with Routable’s AI-powered OCR.",
    pane: { image: "maskgroup.avif", overlay: "body_2.avif" },
  },
  {
    key: "Tab 2",
    title: "Tons of Languages",
    titleClassName: "p-text-03",
    text: "Supporting a World of Languages for a Truly Global Experience",
    pane: { tabClassName: "v1", image: "Features-V6-1.avif" },
  },
  {
    key: "Tab 3",
    title: "Risk assessment engine",
    text: "Accurate, Real-Time Risk Evaluation for Smarter Decisions",
    line: true,
    pane: { tabClassName: "v2", frameClassName: "v3", image: "Features-V6-3.avif" },
  },
  {
    key: "Tab 4",
    title: "Profit analytics",
    text: "Data-Driven Decisions for Maximized Profitability.",
    strong: "Turn Numbers into Growth",
    line: true,
    pane: { tabClassName: "v3", frameClassName: "v4", image: "Features-V6-2.avif" },
  },
];

/* ------------------------------------------------------- features (v5) */

export type ToolCard = {
  title: string;
  text: string;
  image: string;
  /** Floating image layered over the third card. */
  overlay?: string;
  id?: string;
};

export const toolCards: ToolCard[] = [
  {
    title: "Real-time Market Insight",
    text: "Customize your business journey effortlessly with Youflow's dashboard",
    image: "Our-Features-2.avif",
  },
  {
    title: "Advanced Account Analysis",
    text: "Eliminate manual invoice entry and create bills in seconds with Routable’s AI-powered OCR.",
    image: "Our-Features-3.avif",
  },
  {
    // the stylesheet places this card on the grid by id
    id: "node-_67975e3f-1dbc-9839-6c4f-873f019ff9c6-d10f517e",
    title: "Advanced Charting Tools",
    text: "Empowering traders worldwide with top tier resource.",
    image: "Our-Features-4.avif",
    overlay: "Our-Features-1.avif",
  },
];
