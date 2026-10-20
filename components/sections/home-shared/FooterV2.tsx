import SiteLink from "@/components/ui/SiteLink";
import { footerV2QuickLinks } from "@/data/home-shared";
import { footerLegal, footerResources, footerSocial, type LinkGroup } from "@/data/navigation";
import { useDemoForm } from "@/hooks/useDemoForm";
import { img } from "@/lib/utils";

type FooterV2Props = {
  /** The two pages give the newsletter form different ids ("email-form-2" / "email-form"). */
  formId: string;
  inputId: string;
};

/** Footer with a "Get Started" call to action and newsletter row above the link columns. */
export default function FooterV2({ formId, inputId }: FooterV2Props) {
  const { done, onSubmit } = useDemoForm();

  return (
    <section className="footer-v2">
      <div className="container">
        <div className="footer-v2-wrap">
          <div className="footer-v2-top">
            <div className="cta-v2-button-wrap reveal-up-blur">
              <SiteLink className="button-01 cta-v2-button inline-block" href="/contact">
                <div className="button-text-icon-wrap">
                  <div className="button-text-wrapper">
                    <div className="button-text-01 text-white">Get Started</div>
                    <div className="button-text-01 text-black">Get Started</div>
                  </div>
                  <div className="button-icon-wrap">
                    <img alt="" className="button-icon _01" loading="lazy" src={img("Vector-Top-White.svg")} />
                    <img alt="" className="button-icon _02" loading="lazy" src={img("Vector-Top.svg")} />
                  </div>
                </div>
                <div className="hover-color" />
              </SiteLink>
            </div>
            <div className="newsletter-form-wrap v2 reveal-up-blur">
              <div className="newsletter-form-text-wrap">
                <h4 className="h4">Subscribe to our newsletter</h4>
                <p className="p-text-03 text-white-60">Customize your business powerful tools at your fingertips.</p>
              </div>
              <div className="form-block wf-form">
                <form
                  className="newsletter-form"
                  id={formId}
                  name="email-form"
                  onSubmit={onSubmit}
                  style={done ? { display: "none" } : undefined}
                >
                  <input
                    className="text-field wf-input"
                    id={inputId}
                    maxLength={256}
                    name="email"
                    placeholder="Enter email address"
                    required
                    type="email"
                  />
                  <input className="submit-button wf-button" type="submit" value="" aria-label="Subscribe" />
                </form>
                <div className="success-message-box wf-form-done" data-form-done="1" hidden={!done}>
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="wf-form-fail" data-form-fail="1" hidden>
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-v2-bottom">
            <div className="vertical-divider" />
            <div className="footer-top v2">
              <div className="footer-top-left">
                <div className="footer-logo-details reveal-up-blur">
                  <div className="footer-logo-wrap">
                    <SiteLink className="footer-logo inline-block" href="/">
                      <img alt="" className="fit-cover" loading="lazy" src={img("Footer-Logo.svg")} />
                    </SiteLink>
                    <div className="p-text-01">Conquering &nbsp;Your &nbsp;Trading Goals</div>
                  </div>
                  <p className="p-text-03">
                    Customize your business journey effortlessly with Youflow&apos;s dashboard, backed by a suite of
                    powerful tools at your fingertips.
                  </p>
                </div>
              </div>
              <div className="footer-top-right">
                <div className="footer-right-link-wrap">
                  <FooterLinkGroup group={footerV2QuickLinks} />
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
              <div className="footer-bottom-wrap reveal-up-blur">
                <div className="p-text-03 text-white-60">© 2025 Trading. All rights reserved.</div>
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
