import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShortTag from "@/components/ui/ShortTag";
import { managementIconColumns } from "@/data/home";
import { cx, img } from "@/lib/utils";

export default function FeaturesSection() {
  return (
    <section className="features-01" id="features">
      <div className="container">
        <div className="features-01-wrap">
          <div className="features-01-top">
            <ShortTag label="Our Features" />
            <SectionHeading>Our Powerfull Dashboard Enable over 234.000 Analytics Everyday</SectionHeading>
          </div>
          <div className="features-01-bottom">
            <div className="features-01-card-wrapper">
              <FeatureCard
                listClassName="card-001"
                title="Real-time Market Insight"
                text="At Trenox, we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media."
              >
                <div className="features-01-image">
                  <img
                    alt=""
                    className="fit-cover"
                    loading="lazy"
                    sizes="100vw"
                    src={img("Read-time-image.png")}
                    srcSet={`${img("Read-time-image-p-500.png")} 500w, ${img("Read-time-image.png")} 705w`}
                  />
                </div>
              </FeatureCard>
              <FeatureCard
                listClassName="card-002"
                wrapClassName="card-02"
                title="Advanced Account Analysis"
                text="Customize your business journey effortlessly with Trenox dashboard"
              >
                <div className="features-01-image _02">
                  <img alt="" className="fit-cover features-01-image" loading="lazy" src={img("Symbol-Icon.svg")} />
                  <img
                    alt=""
                    className="features-absolute-image reveal-grow-big"
                    loading="lazy"
                    src={img("Features-Absolute-Image.avif")}
                  />
                </div>
              </FeatureCard>
            </div>
            <div className="features-01-card-wrapper">
              <FeatureCard
                listClassName="card003"
                wrapClassName="card-03"
                textWrapClassName="_003"
                title="Portofolio Management"
                text="Easily tweak your business journey with your Trenox dashboard!"
              >
                <div className="features-01-outer-wrap">
                  {managementIconColumns.map((column, i) => (
                    <div className={cx("features-card-image-wrap", column.reverse && "right-to-left")} key={i}>
                      {column.rows.map((row, j) => (
                        <div className="features-01-outer" key={j}>
                          {row.map((icon, k) => (
                            <div className="features-01-image-box" key={k}>
                              <img alt="" className="features-box-image" loading="lazy" src={img(icon)} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="move-animation-shadow-right" />
                  <div className="move-animation-shadow-left" />
                </div>
              </FeatureCard>
              <FeatureCard
                wrapClassName="card-04"
                title="Advanced Charting Tools"
                text="At Trenox, we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media."
              >
                <div className="features-01-image _04">
                  <img alt="" className="fit-cover" loading="lazy" src={img("Features-04-Image.avif")} />
                  <img alt="" className="features-absolute-image-02 reveal-grow-big" loading="lazy" src={img("body.avif")} />
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
  children: ReactNode;
  listClassName?: string;
  wrapClassName?: string;
  textWrapClassName?: string;
};

function FeatureCard({ title, text, children, listClassName, wrapClassName, textWrapClassName }: FeatureCardProps) {
  return (
    <div className={cx("features-01-card-list", listClassName, "reveal-up-blur")}>
      <div className={cx("features-01-card-wrap", wrapClassName)}>
        <div className={cx("features-01-text-wrap", textWrapClassName)}>
          <h4 className="h4">{title}</h4>
          <p className="p-text-03 text-white-60">{text}</p>
        </div>
        {children}
      </div>
      <div className="features-01-card-border" />
    </div>
  );
}
