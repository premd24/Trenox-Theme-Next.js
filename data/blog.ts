/* Content for the blog index and the blog post pages. */

export type BlogCategory = "Market Insights" | "Consumer Behavior" | "Investment Strategies" | "Industry Trends";

export type BlogPost = {
  /** Route segment: /blog/<slug>. */
  slug: string;
  title: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  /** Card image on the blog index and in "You might also like". */
  thumbnail: string;
  /** Wide image at the top of the post. */
  mainImage: string;
  /** Slugs of the three posts under "You might also like". */
  recent: string[];
};

/* ------------------------------------------------------------- blog index */

export const blogHero = {
  tag: "Our Blog",
  title: "Check out what we've got in our resource Vault!",
  text: "Check out our latest posts to get the scoop on tech trends, cool insights, and handy tutorials!",
};

/** Filter tabs; "All" shows every post, the rest filter by category. */
export const blogTabs: ("All" | BlogCategory)[] = [
  "All",
  "Market Insights",
  "Consumer Behavior",
  "Investment Strategies",
  "Industry Trends",
];

// In the order they're listed on the blog index.
export const blogPosts: BlogPost[] = [
  {
    slug: "market-insights-daily-trends",
    title: "Market Insights & Daily Trends",
    category: "Market Insights",
    author: "Tanbir",
    date: "June 25, 2025",
    readTime: "20 min read",
    thumbnail: "685b9c86ff24a59d4d46997c_Blog-Thumbnail-1--0dc769.avif",
    mainImage: "685b9d474372d3411c6d9cf3_Blog-Main-Image-5--bde279.avif",
    recent: ["proven-trading-strategies-that-work", "chart-analysis-technical-patterns", "emerging-market-opportunities"],
  },
  {
    slug: "proven-trading-strategies-that-work",
    title: "Proven Trading Strategies That Work",
    category: "Consumer Behavior",
    author: "Jk Aliea",
    date: "June 25, 2025",
    readTime: "8 min read",
    thumbnail: "685b9d4bf5b30f66e194f37f_Blog-Thumbnail-6--bf90cc.avif",
    mainImage: "685b9d474372d3411c6d9cf3_Blog-Main-Image-5--bde279.avif",
    recent: ["market-insights-daily-trends", "chart-analysis-technical-patterns", "emerging-market-opportunities"],
  },
  {
    slug: "chart-analysis-technical-patterns",
    title: "Chart Analysis & Technical Patterns",
    category: "Investment Strategies",
    author: "Jk Aliea",
    date: "June 25, 2025",
    readTime: "8 min read",
    thumbnail: "685b9cec30e1dc7bd068d292_Blog-Thumbnail-4--117375.avif",
    mainImage: "685b9ce948ae50e90f066aa2_Blog-Main-Image-3--9d96f4.avif",
    recent: ["market-insights-daily-trends", "proven-trading-strategies-that-work", "emerging-market-opportunities"],
  },
  {
    slug: "emerging-market-opportunities",
    title: "Emerging Market Opportunities",
    category: "Industry Trends",
    author: "Jk Aliea",
    date: "June 25, 2025",
    readTime: "8 min read",
    thumbnail: "685b9cc01dde1a7cfd892d4f_Blog-Thumbnail-5--b1be71.avif",
    mainImage: "685b9cbd4ee6080fea25a671_Blog-Main-Image-4--86af21.avif",
    recent: ["market-insights-daily-trends", "proven-trading-strategies-that-work", "chart-analysis-technical-patterns"],
  },
  {
    slug: "long-term-vs-short-term-gains",
    title: "Long-Term vs Short-Term Gains",
    category: "Industry Trends",
    author: "Rohim Ali",
    date: "June 25, 2025",
    readTime: "6 min read",
    thumbnail: "685b9c86ff24a59d4d46997c_Blog-Thumbnail-1--0dc769.avif",
    mainImage: "685b9c83e6c4bf10de9206a8_Blog-Main-Image-1--3af2cd.avif",
    recent: ["market-insights-daily-trends", "proven-trading-strategies-that-work", "chart-analysis-technical-patterns"],
  },
  {
    slug: "shifting-preferences-in-2025",
    title: "Shifting Preferences in 2025",
    category: "Market Insights",
    author: "Figo Nath",
    date: "June 25, 2025",
    readTime: "6 min read",
    thumbnail: "68530fb65c9e63e54260d644_Blog-Thumbnail-2--60e891.avif",
    mainImage: "68530fb227f4564d2bc411a2_Blog-Main-Image-6--97125a.avif",
    recent: ["market-insights-daily-trends", "proven-trading-strategies-that-work", "chart-analysis-technical-patterns"],
  },
];

export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

/* ------------------------------------------------------------ post pages */

export const blogWriterImage = "68530fa158410ec08a9b4e28_Blog-Writer-a9781b.avif";

export const shareLinks = [
  { href: "https://facebook.com/", icon: "Social-Icon-1.svg" },
  { href: "https://www.linkedin.com/", icon: "Social-Icon-2.svg" },
  { href: "https://x.com/", icon: "Social-Icon-3.svg" },
];

// A paragraph is a run of plain text and bold spans (the template keeps the
// space after a bold label inside the <strong>).
export type Inline = string | { strong: string };
export type RichNode = { h4: string } | { p: Inline[] };

/**
 * The article body, as the alternating text and image blocks it renders as.
 * A text block may open with a lead paragraph, then holds rich-text groups.
 */
export type ArticleBlock =
  | { type: "text"; lead?: string; richtexts: RichNode[][] }
  | { type: "images"; images: string[] };

/** Opening paragraph of every post; also the posts' meta description. */
export const postLead =
  "This section focuses on helping traders stay ahead of market movements with timely, relevant, and data-driven analysis. The content builds awareness of what’s happening right now in global markets and how it could affect trading decisions.";

// Every post currently shares the same article body.
export const articleBody: ArticleBlock[] = [
  {
    type: "text",
    lead: postLead,
    richtexts: [
      [
        { h4: "Daily Market Recaps" },
        {
          p: [
            { strong: "What it is: " },
            "A quick summary of what happened in the market today — major indices, sectors, and notable price action.",
          ],
        },
        {
          p: [
            { strong: "Why it matters: " },
            "Traders benefit from digesting the day’s key events in one place without having to scan multiple sources. This keeps them alert to changing trends or unexpected moves.",
          ],
        },
      ],
      [
        { h4: "Pre-Market Outlooks" },
        {
          p: [
            "To help traders prepare in advance, Pre-Market Outlooks provide early-morning insights into futures activity, economic data releases, and key earnings reports. These updates also cover any breaking news from overseas markets that could influence the day’s opening. By knowing what to expect, traders can enter the day with a plan rather than reacting blindly.",
          ],
        },
      ],
      [
        { h4: "Weekly Market Trends" },
        {
          p: [
            "At the end of each week, Weekly Market Trends posts offer a broader perspective. These include summaries of the week’s major developments, technical breakdowns, macroeconomic shifts, and sentiment analysis. It’s a great way for swing traders and long-term investors to evaluate the big picture and adjust their strategies accordingly.",
          ],
        },
      ],
      [
        { h4: "Sector Spotlight" },
        {
          p: [
            "Another important angle is the Sector Spotlight, where individual sectors like tech, energy, or financials are analyzed in detail. Traders can track which sectors are gaining momentum or facing headwinds, and this sector rotation information can reveal early signs of where capital is flowing.",
          ],
        },
      ],
    ],
  },
  {
    type: "images",
    images: ["685b9b28302d31b80985dbec_Blog-Image-2--121330.avif", "685b9b2ba99d169bbcfb240d_Blog-Image-3--7ed532.avif"],
  },
  {
    type: "text",
    richtexts: [
      [
        { h4: "Economic Calendar Highlights" },
        {
          p: [
            "Economic Calendar Highlights are also covered regularly. These articles provide overviews of upcoming economic events such as CPI releases, central bank announcements, and employment reports. They also offer context on why the data matters and how markets are likely to respond, helping traders manage risk during volatile events.",
          ],
        },
        // the template's empty spacer paragraphs hold a zero-width joiner
        { p: ["‍"] },
        { h4: "Global Market Insights" },
        {
          p: [
            "To stay globally aware, Global Market Insights dive into movements in international markets — including Asia, Europe, and emerging economies. Often, global sentiment sets the tone for U.S. markets. Traders benefit by understanding how overseas news could trigger ripple effects.",
          ],
        },
        { p: ["‍"] },
        { h4: "Sentiment & Fear/Greed Analysis" },
        {
          p: [
            "Finally, Sentiment & Fear/Greed Analysis explores the psychological side of the market. Using indicators like the VIX, Fear & Greed Index, or even social media trends, these posts gauge how optimistic or fearful the market is. Since emotions often drive short-term moves, sentiment analysis becomes a powerful layer in any trading decision.",
          ],
        },
      ],
    ],
  },
];
