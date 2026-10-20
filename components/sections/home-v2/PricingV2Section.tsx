import SiteLink from "@/components/ui/SiteLink";
import { planTeasers, type PlanTeaser } from "@/data/home-v2";
import { cx, img } from "@/lib/utils";

/** Two-plan pricing teaser. */
export default function PricingV2Section() {
  return (
    <section className="priceing-02">
      <div className="container">
        <div className="priceing-02-wrap">
          <div className="priceing-02-top">
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2 text-linear">Pricing Plan</h2>
            </div>
            <div className="sub-heading-wrap reveal-rise">
              <p className="p-text-02">
                Our financial management platform is transforming the way people manage their money. Here’s what some
                of our users have to say about their experience
              </p>
            </div>
          </div>
          <div className="priceing-02-bottom">
            {planTeasers.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: PlanTeaser }) {
  return (
    <div className="priceing-collection-list-wrapper">
      <div role="list">
        <div role="listitem">
          <div className="priceing-01-card-wrapper v2">
            <div className="project-01-main-card">
              <div className="priceing-01-card-wrap v2">
                <div className="priceing-01-card-top v2">
                  <div className="icon-box-wrap">
                    <img alt={plan.iconAlt} loading="lazy" src={img(plan.icon)} />
                  </div>
                  <h4>{plan.name}</h4>
                </div>
                <div className="priceing-01-price-details v2">
                  <div className="priceing-01-price">
                    <h3 className="h3">{plan.price}</h3>
                    <div className="priceing-deuration">/per month</div>
                  </div>
                </div>
                <div className="vertical-lineer" />
                <div className="blog-title-wrap">
                  <p className="p-text-03 text-white-70">{plan.text}</p>
                </div>
                <div className="priceing-02-button-wrap">
                  <SiteLink className={cx("button-02", plan.buttonClass, "inline-block")} href={plan.href}>
                    <div className="button-02-cover">
                      <img alt="" className="button-icon hide" loading="lazy" src={img("Polygon-4.svg")} />
                      <div className="button-02-text">
                        <div className={cx("button-text-01", plan.buttonText)}>Choose Plan</div>
                        <div className={cx("button-text-01", plan.buttonText)}>Choose Plan</div>
                      </div>
                    </div>
                  </SiteLink>
                </div>
                <div className={cx("priceing-bg-linear", plan.highlight ? "reveal-unblur" : "hide")} />
              </div>
            </div>
            <div className="priceing-01-card-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
