import {
  footerLegal,
  footerQuickLinks,
  footerResources,
  footerSocial,
  type LinkGroup,
} from "@/data/navigation";
import SiteLink from "@/components/ui/SiteLink";
import { img } from "@/lib/utils";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-top">
            <div className="footer-top-left reveal-up-blur">
              <div className="footer-logo-details">
                <div className="footer-logo-wrap">
                  <SiteLink className="footer-logo inline-block" href="/">
                    <img alt="" className="fit-cover" loading="lazy" src={img("Footer-Logo.svg")} />
                  </SiteLink>
                  <div className="p-text-01">Conquering &nbsp;Your &nbsp;Trading Goals</div>
                </div>
                <p className="p-text-03">
                  Customize your business journey effortlessly with Trenox dashboard, backed by a suite of powerful
                  tools at your fingertips.
                </p>
              </div>
              <NewsletterForm />
            </div>
            <div className="footer-top-right">
              <div className="footer-right-link-wrap">
                <FooterLinkGroup group={footerQuickLinks} />
                <div className="footer-link-list-02">
                  <FooterLinkGroup group={footerResources} />
                  <FooterLinkGroup group={footerSocial} />
                </div>
                <FooterLinkGroup group={footerLegal} />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="vertical-divider" />
            <div className="footer-bottom-wrap">
              <div className="p-text-03 text-white-60 reveal-grow">
                © 2025 Trenox. Designed &amp;&nbsp;Developed by{" "}
                <a className="footer-link" href="https://wrapmarket.com/" rel="noopener" target="_blank">
                  Waida Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterLinkGroup({ group }: { group: LinkGroup }) {
  return (
    <div className="footer-link-wrap reveal-up-blur">
      <div className="p-text-01">{group.title}</div>
      <div className="footer-link-list">
        {group.links.map((link) => (
          <SiteLink className="footer-link inline-block" external={link.external} href={link.href} key={link.label}>
            <div className="footer-link-text">{link.label}</div>
            <div className="footer-link-text absolute-link">{link.label}</div>
            <div className="link-under-line" />
          </SiteLink>
        ))}
      </div>
    </div>
  );
}
