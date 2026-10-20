import SectionHeading from "@/components/ui/SectionHeading";
import SiteLink from "@/components/ui/SiteLink";
import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import { img } from "@/lib/utils";

export default function CtaSection() {
  return (
    <section className="cta-v1">
      <div className="container">
        <div className="cta-v1-wrap">
          <div className="cta-v1-main-wrap">
            <div className="cta-v1-main">
              <ShortTag label="Introducing our Insights" />
              <SectionHeading>Become a landlord in a few clicks</SectionHeading>
              <SubHeading>
                Sign up in minutes and begin building your wealth by investing in property fractions starting at just
                $50.
              </SubHeading>
              <div className="cta-v1-button-wrap reveal-grow">
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
            </div>
          </div>
          <div className="cta-v1-card-shadow" />
          <div className="ta-v1-dot float-zoom">
            <img alt="" className="cta-bg-gif" loading="lazy" src={img("BG-Dot.avif")} />
          </div>
        </div>
      </div>
    </section>
  );
}
