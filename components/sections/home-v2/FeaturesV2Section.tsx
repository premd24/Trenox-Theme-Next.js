import { PrimaryButton } from "@/components/ui/Buttons";
import type { ReactNode } from "react";
import PortfolioMarquee from "@/components/sections/home-shared/PortfolioMarquee";
import { cx, img } from "@/lib/utils";

const CARD_TEXT =
  "At Trenox, we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media.";

/** Three feature cards that stack up as the section scrolls past (`data-scrub="cards"`). */
export default function FeaturesV2Section() {
  return (
    <section className="features-02">
      <div className="container">
        <div className="features-02-wrap" data-scrub="cards">
          <div className="features-02-main-wrap">
            <div className="features-02-top">
              <div className="heading-wrap features-02-heading reveal-rise-lg">
                <h2 className="h2">Explore our features, without losing compliance</h2>
              </div>
              <div className="features-02-button-wrap reveal-up-blur">
                <PrimaryButton className="features-02-button" href="/contact">
                  Explore Now
                </PrimaryButton>
              </div>
            </div>
            <div className="features-02-bottom reveal-up-blur">
              <div className="features-02-bottom-card">
                <FeatureCard title="Advanced Account Analysis">
                  <div className="features-02-card-image">
                    <img
                      alt=""
                      className="fit-cover"
                      loading="lazy"
                      sizes="(max-width: 705px) 100vw, 705px"
                      src={img("Read-time-image.png")}
                      srcSet={`${img("Read-time-image-p-500.png")} 500w, ${img("Read-time-image.png")} 705w`}
                    />
                    <img alt="" className="features-absolute-image" loading="lazy" src={img("Features-Image-2.avif")} />
                  </div>
                </FeatureCard>
                <FeatureCard title="Real-time Market Insight">
                  <div className="features-02-card-image _02">
                    <img alt="" className="fit-cover" loading="lazy" src={img("Features-02.avif")} />
                  </div>
                </FeatureCard>
                <FeatureCard last title="Portofolio Management">
                  <PortfolioMarquee variant="_01" />
                </FeatureCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = { title: string; children: ReactNode; last?: boolean };

function FeatureCard({ title, children, last }: FeatureCardProps) {
  return (
    <div
      className={cx("features-02-card-list", last && "_01")}
      id={last ? "node-ed1a74fd-b0f1-8943-10d3-72129be0db55-d10f5177" : undefined}
    >
      <div className="features-02-card _02">
        <div className="features-02-card-content">
          <div className="features-02-card-text">
            <h4 className="h4">{title}</h4>
            <p className="p-text-03">{CARD_TEXT}</p>
          </div>
          {children}
        </div>
      </div>
      <div className={cx("features-02-card-shadow", last && "_01")} />
    </div>
  );
}
