import { monthlyPlans, pricingTabs, yearlyFeatured, yearlyPrices, yearlyRest } from "@/data/pricing";
import { useTabs } from "@/hooks/useTabs";
import { cx } from "@/lib/utils";
import PlanCard from "./PlanCard";

/** Monthly / Yearly tabs, each with the three plan cards. */
export default function PricingPlansSection() {
  const { active, tabProps } = useTabs(pricingTabs);

  return (
    <section className="priceing">
      <div className="container">
        <div className="priceing-wrap">
          <div className="tabs">
            <div className="priceing-tab-menu tab-menu reveal-grow" role="tablist">
              {pricingTabs.map((tab) => (
                <a
                  className={cx("priceing-tab-link inline-block tab-link", active === tab && "is-active")}
                  key={tab}
                  {...tabProps(tab)}
                >
                  <div>{tab}</div>
                </a>
              ))}
            </div>
            <div className="tab-content">
              <div className={cx("tab-pane", active === "Monthly" && "is-active")}>
                <div className="priceing-monthly-view priceing-v2">
                  {monthlyPlans.map(({ plan, gridId }) => (
                    <div id={gridId} key={plan.name}>
                      <div role="list">
                        <div role="listitem">
                          <PlanCard plan={plan} reveal />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx("tab-pane", active === "Yearly" && "is-active")}>
                <div className="priceing-monthly-view priceing-v2">
                  <div>
                    <div role="list">
                      <div role="listitem">
                        <PlanCard plan={yearlyFeatured} price={yearlyPrices[yearlyFeatured.name]} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="collection-list" role="list">
                      {yearlyRest.map((plan) => (
                        <div role="listitem" key={plan.name}>
                          <PlanCard plan={plan} price={yearlyPrices[plan.name]} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
