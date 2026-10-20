/* Content for the license page. */

export const licenseHero = {
  tag: "License",
  title: "License",
  text: "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
};

type LicenseLink = { href: string; label: string; icon: string; id?: string };

// `itemsClass` and the link `id`s are layout hooks the stylesheet targets.
export const licenseGroups: { title: string; itemsClass?: string; links: LicenseLink[] }[] = [
  {
    title: "Images",
    links: [
      { href: "https://unsplash.com/license", label: "https://unsplash.com/", icon: "License-Box-Icon-5.svg" },
      { href: "https://www.pexels.com/license/", label: "https://www.pexels.com/", icon: "License-Box-Icon-6.svg" },
      {
        href: "https://www.lummi.ai/license",
        label: "https://www.lummi.ai/",
        icon: "License-Box-Icon-4.svg",
        id: "node-c98dfe81-93d8-a6b7-1dac-e0476c534f86-d10f5186",
      },
    ],
  },
  {
    title: "Icons",
    itemsClass: "_02",
    links: [
      { href: "https://hugeicons.com/license-agreement", label: "https://hugeicons.com/", icon: "License-Box-Icon-3.svg" },
      {
        href: "https://raw.githubusercontent.com/phosphor-icons/homepage/master/LICENSE",
        label: "https://phosphoricons.com/",
        icon: "License-Box-Icon-2.svg",
      },
    ],
  },
  {
    title: "Fonts",
    itemsClass: "_03",
    links: [
      {
        href: "https://fonts.google.com/specimen/Inter+Tight/license",
        label: "https://fonts.google.com/",
        icon: "License-Box-Icon-1.svg",
        id: "node-_2e1790d2-af41-1dee-8ae3-1f16e18d0437-d10f5186",
      },
    ],
  },
];
