import { plans } from "@/data/home";

/* ------------------------------------------------------- product (plan) pages */

export type Variant = "Monthly" | "Yearly";

export type Product = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  iconAlt: string;
  features: string[];
  /** Price per plan duration, as the pills carry it. */
  variantPrices: Record<Variant, string>;
  /** The pill selected on load. */
  initialVariant: Variant;
  /** The card's price before a pill is clicked. */
  price: string;
};

type ProductInfo = Pick<Product, "slug" | "variantPrices" | "initialVariant" | "price"> & { plan: string };

const info: ProductInfo[] = [
  {
    slug: "starter",
    plan: "Starter",
    variantPrices: { Monthly: "$ 480.00 USD", Yearly: "$ 350.00 USD" },
    initialVariant: "Monthly",
    price: "$ 480.00 USD",
  },
  {
    slug: "pro",
    plan: "Pro",
    variantPrices: { Monthly: "$ 1,200.00 USD", Yearly: "$ 1,000.00 USD" },
    initialVariant: "Yearly",
    price: "$ 1,000.00 USD",
  },
  {
    slug: "enterprises",
    plan: "Enterprises",
    variantPrices: { Monthly: "$ 3,000.00 USD", Yearly: "$ 2,500.00 USD" },
    initialVariant: "Monthly",
    price: "$ 3,000.00 USD",
  },
];

// Name, icon, copy and features are the same as on the pricing cards.
export const products: Product[] = info.map(({ plan: name, ...rest }) => {
  const plan = plans.find((p) => p.name === name)!;
  return {
    ...rest,
    name: plan.name,
    description: plan.description,
    icon: plan.icon,
    iconAlt: plan.iconAlt,
    features: plan.features,
  };
});

export const productAbout =
  "We’ve got you covered with everything from smart consulting to cutting-edge digital solutions, all about quality. Dive into digital transformation and get ready for the future! Trenox makes life easier. The dashboard shows me my financial health in a snap, and the automation features take the hassle out of budgeting.";
