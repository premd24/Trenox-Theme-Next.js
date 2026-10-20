export type TypeSpecimen = {
  /** Element and class the sample is rendered with. */
  tag: "h2" | "h3" | "h4" | "h5" | "p";
  className: string;
  label: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
};

export const typeSpecimens: TypeSpecimen[] = [
  { tag: "h2", className: "h1", label: "Heading 01", size: "62px", weight: "Medium", lineHeight: "120%", letterSpacing: "-2%" },
  { tag: "h2", className: "h2", label: "Heading 02", size: "56px", weight: "Medium", lineHeight: "120%", letterSpacing: "-2%" },
  { tag: "h3", className: "h3", label: "Heading 03", size: "48px", weight: "Medium", lineHeight: "140%", letterSpacing: "-2%" },
  { tag: "h4", className: "h4", label: "Heading 04", size: "28px", weight: "Medium", lineHeight: "120%", letterSpacing: "-2%" },
  { tag: "h5", className: "h5", label: "Heading 05", size: "18px", weight: "SemiBold", lineHeight: "140%", letterSpacing: "-1%" },
  { tag: "p", className: "p-text-01", label: "P text 01", size: "20px", weight: "Regular", lineHeight: "30px", letterSpacing: "0" },
  { tag: "p", className: "p-text-02", label: "P text 02", size: "18px", weight: "Medium", lineHeight: "150%", letterSpacing: "-1%" },
  { tag: "p", className: "p-text-03", label: "P text 03", size: "16px", weight: "Medium", lineHeight: "150%", letterSpacing: "-1%" },
  { tag: "p", className: "button-text-01", label: "Button text 01", size: "18px", weight: "Semibold", lineHeight: "32px", letterSpacing: "0" },
  { tag: "p", className: "small-button-text", label: "Small Button text", size: "14px", weight: "Medium", lineHeight: "120%", letterSpacing: "0" },
  { tag: "p", className: "tagline", label: "Tagline", size: "14px", weight: "Regular", lineHeight: "28px", letterSpacing: "-2%" },
];

export type ColorSwatch = {
  /** The stylesheet places each swatch in the grid by this id. */
  id: string;
  className: string;
  /** Hex codes shown on the swatch, with each label's classes. */
  codes: { label: string; className: string }[];
};

export const colorSwatches: ColorSwatch[] = [
  {
    id: "node-b43d7347-22c3-5de8-c06d-1928045d21cf-d10f5175",
    className: "single-color bg-black",
    codes: [{ label: "# 000000", className: "p-text-03" }],
  },
  {
    id: "node-_8f0435de-635b-fd7b-ec43-1f2a3c87f6cb-d10f5175",
    className: "gradient-color bg-light-gradient",
    codes: [
      { label: "# FFFFFF", className: "p-text-03 text-black" },
      { label: "# 535353", className: "p-text-03 text-black align-right" },
    ],
  },
  {
    id: "node-d4727884-0b53-9883-cba4-0cf32b2953ba-d10f5175",
    className: "single-color bg-white",
    codes: [{ label: "# FFFFFF", className: "p-text-03 text-black" }],
  },
  {
    id: "node-a125caf8-8419-2e68-7793-c6a5cefea2b4-d10f5175",
    className: "gradient-color bg-primary-gradient",
    codes: [
      { label: "# FF640D", className: "p-text-03 align-center" },
      { label: "# AB2020", className: "p-text-03 align-center" },
    ],
  },
];
