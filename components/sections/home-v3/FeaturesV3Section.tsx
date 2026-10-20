import type { ReactNode } from "react";
import PortfolioMarquee from "@/components/sections/home-shared/PortfolioMarquee";
import { PrimaryButton } from "@/components/ui/Buttons";
import { cx, img } from "@/lib/utils";

/** Alternating rows: copy + button on one side, an illustrated card on the other. */
export default function FeaturesV3Section() {
  return (
    <section className="features-v3">
      <div className="container">
        <div className="features-v3-wrap">
          <div className="features-v3-top">
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h1">Explore our features, without losing compliance</h2>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-02 text-white-70">
                Our financial management platform is transforming the way people manage their money.
              </p>
            </div>
          </div>
          <div className="features-v3-bottom reveal-up-blur">
            <FeatureRow
              cardListClass="v4"
              contentClass="v3"
              text="we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media."
              title="Real-time Market Insight"
            >
              <div className="features-02-card-image v3">
                <img alt="" className="fit-cover _01" loading="lazy" src={img("Symbol-Icon.svg")} />
                <img alt="" className="features-absolute-image v3" loading="lazy" src={img("Features-Image-2.avif")} />
              </div>
            </FeatureRow>
            <FeatureRow
              buttonFirst
              cardListClass="v4"
              contentClass="v3"
              text="Benefit from SCRYPT's competitive pricing, backed by our extensive network of exchanges and market makers."
              title="Advanced Account Analysis"
            >
              <div className="features-02-card-image _03">
                <img alt="" className="fit-cover _01" loading="lazy" src={img("features-Image.avif")} />
              </div>
            </FeatureRow>
            <FeatureRow
              cardListClass="v3"
              contentClass="_04"
              text="Empowering traders worldwide with top tier resource.we ensure fast payouts with robust model and verified proof on blockchain and social media."
              title="Portofolio Management"
            >
              <PortfolioMarquee variant="_02" />
            </FeatureRow>
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureRowProps = {
  title: string;
  text: string;
  /** The second row puts its button above the paragraph. */
  buttonFirst?: boolean;
  cardListClass: string;
  contentClass: string;
  children: ReactNode;
};

function FeatureRow({ title, text, buttonFirst, cardListClass, contentClass, children }: FeatureRowProps) {
  const paragraph = <p className="p-text-01 text-white-70">{text}</p>;
  const button = (
    <div className="features-v3-button-wrap">
      <PrimaryButton href="/contact">Get Started</PrimaryButton>
    </div>
  );

  return (
    <div className="features-v3-list">
      <div className="features-v3-left">
        <h2 className="h1">{title}</h2>
        {buttonFirst ? button : paragraph}
        {buttonFirst ? paragraph : button}
      </div>
      <div className={cx("features-02-card-list", cardListClass)}>
        <div className="features-02-card _02">
          <div className={cx("features-02-card-content", contentClass)}>{children}</div>
        </div>
        <div className="features-02-card-shadow" />
      </div>
    </div>
  );
}
