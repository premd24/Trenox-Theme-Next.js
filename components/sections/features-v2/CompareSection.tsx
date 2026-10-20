import SectionHeading from "@/components/ui/SectionHeading";
import { compareRows } from "@/data/features-v2";
import { img } from "@/lib/utils";

/** Youflow vs. Deep Trade, one row per topic. */
export default function CompareSection() {
  return (
    <section className="compare-v2">
      <div className="container">
        <div className="compare-v2-wrap">
          <div className="compare-v2-top">
            <SectionHeading className="compare-v2-heading">Youflow vs. DeepTrade: compare flexibility</SectionHeading>
          </div>
          <div className="compare-v2-bottom">
            <div className="compare-v2-title reveal-up-blur">
              <div className="blank-div" />
              <div className="compare-v2-logo-wrap">
                <img alt="" loading="lazy" src={img("Logo.svg")} />
              </div>
              <div className="compare-v2-title-text">
                <h4 className="h4">Deep Trade</h4>
              </div>
            </div>
            {compareRows.map(([topic, youflow, deepTrade]) => (
              <div className="compare-v2-list-wrap reveal-up-blur" key={topic}>
                <div className="compare-v2-list-row">
                  <div className="p-text-02 text-white-70">{topic}</div>
                </div>
                <div className="compare-v2-list-row">
                  <div className="p-text-02">{youflow}</div>
                </div>
                <div className="compare-v2-list-row">
                  <div className="p-text-02">{deepTrade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
