/* Content for the Home V2 page sections, in page order. */
import type { CounterPart } from "@/data/home";

/* ---------------------------------------------------------------- trusted */

export type TrustedQuote = { quote: string; name: string; variant: "_02" | "_03" };

export const trustedQuotes: Record<"top" | "bottomLeft" | "bottomRight", TrustedQuote> = {
  top: {
    quote:
      "\"Their platform has completely transformed how we handle transactions. The process is now incredibly smooth, and we’ve seen significant.\"",
    name: "Smith runner",
    variant: "_02",
  },
  bottomLeft: {
    quote:
      "\"Their service simplified our operations. Everything just works now, and it’s made a measurable difference..\"",
    name: "Amber Arnessia",
    variant: "_03",
  },
  bottomRight: {
    quote:
      "\"Their solution drastically improved our workflow. What used to take hours now takes minutes—total game changer.\"",
    name: "Alex gregor",
    variant: "_02",
  },
};

export const satisfiedClientsCounter: CounterPart[] = [
  { roll: "lower", digits: ["2", "4", "9"] },
  { roll: "upper", digits: ["7", "6", "3"] },
  { roll: "lower", digits: ["0", "4", "9"] },
  { roll: "upper", digits: ["7", "6", "0"] },
  { symbol: "+" },
];

export const dedicatedServiceCounter: CounterPart[] = [
  { roll: "lower", digits: ["2", "4", "9"] },
  { roll: "upper", digits: ["7", "6", "4"] },
  { symbol: "/" },
  { roll: "lower", digits: ["7", "4", "9"] },
];

/* ------------------------------------------------------------ integration */

export const integrationLanguages = [
  { flag: "Sweden.svg", name: "Sweden" },
  { flag: "UK.svg", name: "United Kingodom" },
  { flag: "German.svg", name: "Germany" },
  { flag: "Italian.svg", name: "Italian" },
  { flag: "America.svg", name: "American" },
  { flag: "China.svg", name: "China" },
  { flag: "Japan.svg", name: "Japanesse" },
  { flag: "Czech.svg", name: "Czech" },
  { flag: "Poland.svg", name: "Indonesian" },
  { flag: "Russia.svg", name: "Russian" },
];

/* ---------------------------------------------------------------- pricing */

export type PlanTeaser = {
  name: string;
  icon: string;
  iconAlt: string;
  price: string;
  text: string;
  href: string;
  /** Extra class on the "Choose Plan" button, and its label colour. */
  buttonClass: string;
  buttonText: "text-black" | "text-white";
  /** Only the highlighted plan shows the gradient wash. */
  highlight: boolean;
};

export const planTeasers: PlanTeaser[] = [
  {
    name: "Starter",
    icon: "68557e3bc2445b8fa504b8dd_award-01-24a695.svg",
    iconAlt: "Starter plan icon",
    price: "$480",
    text: "Customize your business experience with Trenox's easy dashboard.",
    href: "/product/starter",
    buttonClass: "plan-button-v2",
    buttonText: "text-black",
    highlight: true,
  },
  {
    name: "Pro",
    icon: "68557e524329f200d8dccfa9_award-02-6dadb9.svg",
    iconAlt: "Pro plan icon",
    price: "$1200",
    text: "Adapt your operations with Trenox's powerful dashboard features.",
    href: "/product/pro",
    buttonClass: "plan-button-v2-2",
    buttonText: "text-white",
    highlight: false,
  },
];
