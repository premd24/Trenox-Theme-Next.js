import SectionHeading from "@/components/ui/SectionHeading";
import SubHeading from "@/components/ui/SubHeading";
import { comparePlans, compareRows } from "@/data/home";
import { cx } from "@/lib/utils";

export default function CompareSection({ className }: { className?: string }) {
  return (
    <section className={cx("compare", className)}>
      <div className="container">
        <div className="compare-wrap">
          <div className="compare-top">
            <SectionHeading>How we Compare?</SectionHeading>
            <SubHeading>
              Our financial management platform is transforming the way people manage their money. Here’s what some
              of our users have to say about their experience
            </SubHeading>
          </div>
          <div className="compare-bottom reveal-up-blur">
            <div className="compare-top-title-wrap">
              <div className="blank-div" />
              {comparePlans.map((plan, i) => (
                <div key={plan}>
                  <div role="list">
                    <div role="listitem">
                      {/* The first plan's column is highlighted. */}
                      <div className={cx("compare-title-wrap", i === 0 && "bg-primary-gradient")}>
                        <h5 className="h5">{plan}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {compareRows.map((row) => (
              <div className="compare-row-wrap" key={row.feature}>
                <div className="compare-list">
                  <div>{row.feature}</div>
                </div>
                {row.values.map((value, i) => (
                  <div key={i}>
                    <div role="list">
                      <div role="listitem">
                        <div className="compare-item">
                          <div>{value}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
