import Link from "next/link";
import { useRouter } from "next/router";
import type { ComponentProps } from "react";

type SiteLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  /** Opens in a new tab. */
  external?: boolean;
};

/**
 * Link that marks itself `aria-current="page"` on its own page (the stylesheet
 * highlights current nav and footer links), and opens external URLs in a new tab.
 */
export default function SiteLink({ href, external, ...props }: SiteLinkProps) {
  const { asPath } = useRouter();
  if (external) {
    return <a href={href} rel="noopener noreferrer" target="_blank" {...(props as ComponentProps<"a">)} />;
  }
  const current = !href.includes("#") && asPath.split(/[?#]/)[0] === href;
  return <Link aria-current={current ? "page" : undefined} href={href} {...props} />;
}
