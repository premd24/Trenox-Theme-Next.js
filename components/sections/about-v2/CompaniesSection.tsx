import SiteLink from "@/components/ui/SiteLink";
import { companyColumnLeft, companyColumnRight, companyMiddleBottom, companyMiddleTop, type CompanyLogo } from "@/data/about-v2";
import { cx, img } from "@/lib/utils";
import { useCursorGlow } from "./useCursorGlow";

export default function CompaniesSection() {
  const glowProps = useCursorGlow();

  return (
    <section className="companies">
      <div className="container">
        <div className="companies-wrap">
          <div className="companies-list-wrap">
            <Logos logos={companyColumnLeft} />
          </div>
          <div className="companies-list-wrap-01">
            <div className="companies-wrap-inner">
              <Logos logos={companyMiddleTop} />
            </div>
            <div className="companies-text-wrap reveal-up-blur" {...glowProps}>
              <div className="companies-wrap-inner-01">
                <h5 className="h5">Join over 15,000 companies with us</h5>
                <div className="glow-main-block hide">
                  <div className="glow-block" />
                </div>
                <SiteLink className="cta-button inline-block" href="/contact">
                  <div className="button-02-cover _02">
                    <div className="button-02-text">
                      <div className="button-text-01 text-white">Get Started</div>
                      <div className="button-text-01 text-white">Get Started</div>
                    </div>
                    <img alt="" className="button-icon" loading="lazy" src={img("Vector-Top-White.svg")} />
                  </div>
                </SiteLink>
              </div>
              <div className="border-square hide" />
            </div>
            <div className="companies-wrap-inner">
              <Logos logos={companyMiddleBottom} />
            </div>
          </div>
          <div className="companies-list-wrap">
            <Logos logos={companyColumnRight} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos({ logos }: { logos: CompanyLogo[] }) {
  return logos.map(({ logo, hideMobile }) => (
    <div className={cx("companies-list", hideMobile && "hide-mobile", "reveal-grow")} key={logo}>
      <img alt="" className="companies-image" loading="lazy" src={img(logo)} />
    </div>
  ));
}
