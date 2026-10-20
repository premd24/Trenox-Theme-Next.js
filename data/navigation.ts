export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type LinkGroup = {
  title: string;
  links: NavLink[];
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-v1" },
  { label: "Features", href: "/features-v1" },
  { label: "Pricing", href: "/pricing" },
];

export const pagesDropdown: LinkGroup[] = [
  {
    title: "Main pages",
    links: [
      { label: "Home V1", href: "/" },
      { label: "Home V2", href: "/home-v2" },
      { label: "Home V3", href: "/home-v3" },
      { label: "About V1", href: "/about-v1" },
      { label: "About V2", href: "/about-v2" },
      { label: "About V3", href: "/about-v3" },
      { label: "Features V1", href: "/features-v1" },
      { label: "Features V2", href: "/features-v2" },
      { label: "Features V3", href: "/features-v3" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Inner pages",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Blog single", href: "/blog/market-insights-daily-trends" },
      { label: "Pricing single", href: "/product/enterprises" },
      { label: "Integration", href: "/integration" },
      { label: "Integration single", href: "/integration/squarespace" },
      { label: "FAQ", href: "/faq" },
      { label: "Career", href: "/career" },
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Coming soon", href: "/coming-soon" },
    ],
  },
  {
    title: "Utility pages",
    links: [
      { label: "Style guide", href: "/style-guide" },
      { label: "License", href: "/license" },
      { label: "Changelog", href: "/changelog" },
      { label: "404", href: "/404" },
    ],
  },
];

export const loginLink: NavLink = { label: "Login", href: "/login" };

// The collapsed (mobile) menu's Login button goes to the password page.
export const mobileLoginLink: NavLink = { label: "Login", href: "/401" };

export const footerQuickLinks: LinkGroup = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-v1" },
    { label: "Features", href: "/features-v1" },
    { label: "Pricing", href: "/pricing" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const footerResources: LinkGroup = {
  title: "Resources",
  links: [{ label: "Blog and News", href: "/blog" }],
};

export const footerSocial: LinkGroup = {
  title: "Social",
  links: [
    { label: "Facebook", href: "https://web.facebook.com/", external: true },
    { label: "Instagram", href: "https://www.instagram.com/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  ],
};

export const footerLegal: LinkGroup = {
  title: "Legal Information",
  links: [
    { label: "Style Guide", href: "/style-guide" },
    { label: "License", href: "/license" },
    { label: "Changelog", href: "/changelog" },
    { label: "Pass Protected", href: "/401" },
    { label: "404", href: "/404" },
  ],
};
