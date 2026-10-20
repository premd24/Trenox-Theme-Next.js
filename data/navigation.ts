export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type LinkGroup = {
  title: string;
  links: NavLink[];
};

// Only the home page exists in this project; the template's other pages are
// kept as placeholders so the menus match the original design.
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#why-choose-us" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export const pagesDropdown: LinkGroup[] = [
  {
    title: "Main pages",
    links: [
      { label: "Home V1", href: "/" },
      { label: "Home V2", href: "#" },
      { label: "Home V3", href: "#" },
      { label: "About V1", href: "#" },
      { label: "About V2", href: "#" },
      { label: "About V3", href: "#" },
      { label: "Features V1", href: "#" },
      { label: "Features V2", href: "#" },
      { label: "Features V3", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Inner pages",
    links: [
      { label: "Blog", href: "#" },
      { label: "Blog single", href: "#" },
      { label: "Pricing single", href: "#" },
      { label: "Integration", href: "#" },
      { label: "Integration single", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Career", href: "#" },
      { label: "Login", href: "#" },
      { label: "Register", href: "#" },
      { label: "Coming soon", href: "#" },
    ],
  },
  {
    title: "Utility pages",
    links: [
      { label: "Style guide", href: "#" },
      { label: "License", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "404", href: "#" },
    ],
  },
];

export const loginLink: NavLink = { label: "Login", href: "#" };

export const footerQuickLinks: LinkGroup = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "#why-choose-us" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Career", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export const footerResources: LinkGroup = {
  title: "Resources",
  links: [{ label: "Blog and News", href: "#" }],
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
    { label: "Style Guide", href: "#" },
    { label: "License", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Pass Protected", href: "#" },
    { label: "404", href: "#" },
  ],
};
