import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import SubHeading from "@/components/ui/SubHeading";
import { cx, img } from "@/lib/utils";

export default function BenefitsSection() {
  return (
    <section className="features-v4">
      <div className="container">
        <div className="features-v4-wrap">
          <div className="features-v4-top">
            <ShortTag label="Our Features" />
            <SectionHeading>Our Benefit</SectionHeading>
            <SubHeading>Our financial management platform is transforming the way people manage their money.</SubHeading>
          </div>
          <div className="features-v4-bottom">
            <div className="features-v4-left">
              <BenefitCard title="Fast Payouts" text="You can withdraw profits in 7 days.">
                <div className="features-v4-image-01 reveal-up-right">
                  <img alt="" className="fit-cover features-v4-image" loading="lazy" src={img("Fast-Logo.svg")} />
                </div>
              </BenefitCard>
              <BenefitCard
                textWrapClassName="_01"
                title="Best Trading Conditions"
                text="Empowering traders worldwide with top tier resource."
              >
                <div className="features-v4-image-01 _02 reveal-right">
                  <img
                    alt=""
                    className="fit-cover features-v4-image-02"
                    loading="lazy"
                    src={img("Features-V4-Image-1.avif")}
                  />
                </div>
              </BenefitCard>
            </div>
            <div className="features-v4-right reveal-up-blur">
              <div className="features-v4-right-list">
                <div className="features-v4-right-top">
                  <h4 className="h4">Multiple Tradings Platforms</h4>
                  <h5 className="h5 sub-heading">Trade on our main label MT5, cTrader, Match-Trader &amp; Tradelocker</h5>
                  <p className="p-text-03 text-white-70">
                    Our Metaquotes license and mainlabel platforms provide a superior experience with enhanced security
                    and operational efficiency.
                  </p>
                </div>
                <div className="features-v4-right-bottom">
                  <img alt="" className="fit-cover _01 reveal-up" loading="lazy" src={img("Symbol-Icon.svg")} />
                  <img
                    alt=""
                    className="features-absolute-image v4 reveal-grow"
                    loading="lazy"
                    src={img("Features-Image-2.avif")}
                  />
                </div>
                <div className="features-v4-left-bg reveal-unblur">
                  <img alt="" className="fit-cover border-radius-24" loading="lazy" src={img("features-3.avif")} />
                </div>
              </div>
              <div className="features-v4-box-shadow" />
            </div>
          </div>
        </div>
      </div>
      <div className="features-v4-bg" />
    </section>
  );
}

type BenefitCardProps = { title: string; text: string; textWrapClassName?: string; children: ReactNode };

/** A left-column card: text, an illustration, and the shared card background. */
function BenefitCard({ title, text, textWrapClassName, children }: BenefitCardProps) {
  return (
    <div className="features-v4-left-list reveal-up-blur">
      <div className="features-v4-left-main-list">
        <div className={cx("features-v4-text-wrap", textWrapClassName)}>
          <h4 className="h4">{title}</h4>
          <p className="p-text-03 text-white-70">{text}</p>
        </div>
        {children}
        <div className="features-v4-left-bg reveal-unblur">
          <img alt="" className="fit-cover border-radius-24" loading="lazy" src={img("features-2_1.avif")} />
        </div>
      </div>
      <div className="features-v4-box-shadow" />
    </div>
  );
}
