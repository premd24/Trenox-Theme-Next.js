import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { boxImageColumns } from "@/data/features-v2";
import { cx, img } from "@/lib/utils";

const BLUE_GUARDIAN =
  "At Blue Guardian, we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media.";

/** "Why switch" rows; the image and text swap sides on every other row. */
export default function DeepTradeSection() {
  return (
    <section className="deep-trade">
      <div className="container v2">
        <div className="deep-trade-wrap">
          <div className="deep-trade-top">
            <SectionHeading className="deep-trade-heading">Why switch from Deep Trade to Youflow?</SectionHeading>
          </div>
          <div className="deep-trade-bottom">
            <DeepTradeRow title="Real-time Market Insight" text={BLUE_GUARDIAN}>
              <div className="deep-trade-main">
                <div>
                  <img alt="" className="fit-cover" loading="lazy" src={img("Service-V3.avif")} />
                </div>
              </div>
            </DeepTradeRow>
            <DeepTradeRow
              reverse
              title="Advanced Account Analysis"
              text="Customize your business journey effortlessly with Youflow's dashboard"
            >
              <div className="deep-trade-main v2">
                <div>
                  <img alt="" className="fit-cover" loading="lazy" src={img("Service-V3-1.avif")} />
                </div>
                <img
                  alt=""
                  className="deep-trade-absolute-image"
                  loading="lazy"
                  src={img("Features-Image-2.avif")}
                />
              </div>
            </DeepTradeRow>
            <DeepTradeRow title="Portofolio Management" text="Easily tweak your business journey with Youflow's dashboard!">
              <div className="deep-trade-main v3">
                <div className="features-01-outer-wrap">
                  {boxImageColumns.map((column, i) => (
                    <div className={cx("features-card-image-wrap", column.reverse && "right-to-left")} key={i}>
                      {column.rows.map((row, j) => (
                        <div className="features-01-outer" key={j}>
                          {row.map((image, k) => (
                            <div className="features-01-image-box" key={k}>
                              <img alt="" className="features-box-image" loading="lazy" src={img(image)} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="move-animation-shadow-right" />
                  <div className="move-animation-shadow-left" />
                </div>
              </div>
            </DeepTradeRow>
            <DeepTradeRow reverse title="Advanced Charting Tools" text={BLUE_GUARDIAN}>
              <div className="deep-trade-main v4">
                <div>
                  <img alt="" className="fit-cover" loading="lazy" src={img("Deep-Trade-Image-1.avif")} />
                </div>
                <img alt="" className="body-absolute-image" loading="lazy" src={img("Deep-Trade-Image-2.avif")} />
              </div>
            </DeepTradeRow>
          </div>
        </div>
      </div>
    </section>
  );
}

type DeepTradeRowProps = { title: string; text: string; reverse?: boolean; children: ReactNode };

/** One row: the illustration (children) beside a title and text. */
function DeepTradeRow({ title, text, reverse, children }: DeepTradeRowProps) {
  const visual = (
    <div className="deep-trade-left">
      {children}
      <div className="deep-trade-broder" />
    </div>
  );
  return (
    <div className={cx("deep-trade-list-wrap", reverse && "v2", "reveal-up-blur")}>
      {!reverse && visual}
      <div className="deep-trade-right">
        <h3 className="h3">{title}</h3>
        <p className="p-text-02 text-white-70">{text}</p>
      </div>
      {reverse && visual}
    </div>
  );
}
