/* Content shared by the Home V2 and Home V3 pages. */
import type { LinkGroup } from "@/data/navigation";

/* ------------------------------------------------- portfolio marquee card */

// Two bands of image tiles drifting in opposite directions (2 rows each).
export const portfolioMarquee: { reverse?: boolean; rows: string[][] }[] = [
  {
    rows: [
      [
        "Features-Box-Image-1.avif",
        "Features-Box-Image-6.avif",
        "Features-Box-Image-6.avif",
        "Features-Box-Image-1.avif",
        "Features-Box-Image-3.avif",
        "Features-Box-Image-1.avif",
      ],
      [
        "Features-Box-Image-1.avif",
        "Features-Box-Image-6.avif",
        "Features-Box-Image-1.avif",
        "Features-Box-Image-3.avif",
        "Features-Box-Image-6.avif",
        "Features-Box-Image-3.avif",
      ],
    ],
  },
  {
    reverse: true,
    rows: [
      ["Features-Box-Image-2.avif", "Features-Box-Image-4.avif", "Features-Box-Image-6.avif"],
      ["Features-Box-Image-2.avif", "Features-Box-Image-4.avif", "Features-Box-Image-6.avif"],
    ],
  },
];

/* ---------------------------------------------------------------- footer v2 */

export const footerV2QuickLinks: LinkGroup = {
  title: "Quick Links",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-v1" },
    { label: "Features", href: "/features-v1" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
  ],
};
