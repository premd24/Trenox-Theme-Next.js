/* Content for the integrations list (/integration) and the integration pages (/integration/[slug]). */

import { testimonialRows } from "@/data/home";

export type Integration = {
  slug: string;
  name: string;
  logo: string;
  /** Lead paragraph (also the page's meta description); its wording differs slightly per page. */
  intro: string;
};

const intro =
  "Add your Instagram Business Account to Trenox as a Department and easily view and respond to all Instagram direct messages, story mentions, and story replies from your Trenox conversation list.";

/** In the order the list shows them. */
export const integrations: Integration[] = [
  {
    slug: "artsync",
    name: "ArtSync",
    logo: "685d719e6ddca0063ee4791f_Integrations-1--5ef45d.svg",
    intro:
      "Add your Instagram Business Account to Trenox's as a Department and easily view and respond to all Instagram direct messages, story mentions, and story replies from your Trenox's conversation list.",
  },
  {
    slug: "gramlink",
    name: "GramLink",
    logo: "685d7478a67a4c233321bebd_Integrations-2--8d94bb.svg",
    intro,
  },
  {
    slug: "wpconnect",
    name: "WPConnect",
    logo: "685d743d01cdc020063fe5e3_Integrations-3--f759e1.svg",
    intro,
  },
  {
    slug: "storyflow",
    name: "StoryFlow",
    logo: "685d73ff2b7e482253cdd05b_Integrations-4--d9b78e.svg",
    intro,
  },
  {
    slug: "bloggerhub",
    name: "BloggerHub",
    logo: "685d73c820d736f76c8708a3_Integrations-5--bae4b3.svg",
    intro,
  },
  {
    slug: "ghostbridge",
    name: "GhostBridge",
    logo: "685d73946fc11a1a16c06e46_Integrations-6--1ab7b8.svg",
    intro,
  },
  {
    slug: "wixmate",
    name: "WixMate",
    logo: "685d71963994ba703577a0be_Integrations-7--5ff817.svg",
    intro,
  },
  {
    slug: "squarespace",
    name: "SquareSnap",
    logo: "685d734347596ed78c43f25e_Integrations-8--96f273.svg",
    intro,
  },
  {
    slug: "weeblink",
    name: "WeebLink",
    logo: "685d719e6ddca0063ee4791f_Integrations-1--5ef45d.svg",
    intro:
      "Add your Instagram Business Account to Trenoxas a Department and easily view and respond to all Instagram direct messages, story mentions, and story replies from your Trenox conversation list.",
  },
];

export const findIntegration = (slug: string) => integrations.find((i) => i.slug === slug);

/** "More apps like this": the first five of the first six integrations, skipping the current one. */
export const relatedIntegrations = (slug: string) =>
  integrations
    .slice(0, 6)
    .filter((i) => i.slug !== slug)
    .slice(0, 5);

/** The hero tagline and article body are the same on every integration page. */
export const integrationTagline = "Check your DMs on Instagram right from your Inbox!";

export type ArticleBlock = { heading: string; text: string; points: string[]; className: string };

export const integrationArticle: { features: ArticleBlock; quote: string; setup: ArticleBlock } = {
  features: {
    className: "reveal-up-blur",
    heading: "What You Can Do with the Trenox–Instagram Integration",
    text: "Connect your Instagram Business Account directly with your Trenox inbox to simplify communication and manage all customer interactions in one place.",
    points: [
      "View and reply to all your Instagram DMs, story mentions, and story replies within Trenox.",
      "Centralize your communication for faster response times.",
      "Improve engagement and reduce missed messages.",
    ],
  },
  quote:
    "“All I can say is that we have more people responding to messages who would have taken longer to make contact with. We’ve definitely noticed the difference.”",
  setup: {
    className: "reveal-rise-slow",
    heading: "How to Set It Up",
    text: "Follow these simple steps to integrate your Instagram Business account with Trenox:",
    points: [
      "Log in to your Trenox account and navigate to Settings (gear icon) > Departments.",
      "Click New Department at the top right of the page.",
      "Choose Instagram and follow the prompts to log in via Facebook.",
      "Select the Instagram Business account you manage.",
      "Confirm the required permissions for Trenox (preselected for your convenience).",
      "Name your new department and click Save.",
    ],
  },
};

/** The list page's testimonials: the home rows, with every "Trenox" quote reading "Youflow". */
export const integrationTestimonialRows = testimonialRows.map((row) => ({
  ...row,
  loops: row.loops.map((loop) => loop.map((t) => ({ ...t, quote: t.quote.replace("Trenox", "Youflow") }))),
}));
