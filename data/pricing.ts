import { plans, type Plan } from "@/data/home";

/* ---------------------------------------------------------------- pricing */

export const pricingTabs = ["Monthly", "Yearly"] as const;
export type PricingTab = (typeof pricingTabs)[number];

const plan = (name: string) => plans.find((p) => p.name === name) as Plan;

/** Monthly cards; the ids are the Webflow grid placements the stylesheet targets. */
export const monthlyPlans: { plan: Plan; gridId: string }[] = [
  { plan: plan("Starter"), gridId: "node-_50027e65-037b-c2fe-649a-2a13378d1248-d10f517f" },
  { plan: plan("Pro"), gridId: "node-_50027e65-037b-c2fe-649a-2a13378d1278-d10f517f" },
  { plan: plan("Enterprises"), gridId: "node-_50027e65-037b-c2fe-649a-2a13378d12a5-d10f517f" },
];

/** Yearly prices (the cards still read "/per month", as in the original). */
export const yearlyPrices: Record<string, string> = {
  Starter: "$350",
  Pro: "$1000",
  Enterprises: "$2500",
};

/** Yearly tab: the featured card on its own, then the other two in a collection list. */
export const yearlyFeatured = plan("Starter");
export const yearlyRest = [plan("Enterprises"), plan("Pro")];
