import { OutlineButton } from "@/components/ui/Buttons";
import type { Plan } from "@/data/home";
import { cx, img } from "@/lib/utils";

type PlanCardProps = {
  plan: Plan;
  /** Overrides the plan's (monthly) price. */
  price?: string;
  /** Only the cards in the first tab rise into view. */
  reveal?: boolean;
};

/** A pricing card; the featured plan gets the gradient button and the "Most Popular" tag. */
export default function PlanCard({ plan, price = plan.price, reveal }: PlanCardProps) {
  return (
    <div className={cx("priceing-01-card-wrapper", reveal && "reveal-rise-lg")}>
      <div className={cx("priceing-01-card-wrap", !plan.featured && "_01")}>
        <div className="priceing-01-card-top">
          <div className="icon-box-wrap">
            <img alt={plan.iconAlt} loading="lazy" src={img(plan.icon)} />
          </div>
          <h4>{plan.name}</h4>
        </div>
        <div className="priceing-01-price-details">
          <div className="priceing-01-price">
            <h3 className="h3">{price}</h3>
            <div className="priceing-deuration">/per month</div>
          </div>
          <p className="p-text-03 text-white-70">{plan.description}</p>
        </div>
        <div className="vertical-lineer" />
        <div className="priceing-01-features">
          {plan.features.map((feature) => (
            <div className="features-01-list" key={feature}>
              <img alt="" loading="lazy" src={img("Check-01.svg")} />
              <div className="p-text-03">{feature}</div>
            </div>
          ))}
        </div>
        <div className="priceing-01-button-wrap">
          <OutlineButton
            className={plan.featured ? "plan-button" : "plan-button-02"}
            href={plan.href}
            showIcon={false}
          >
            Choose Plan
          </OutlineButton>
        </div>
      </div>
      <div className="priceing-01-card-shadow" />
      {plan.featured && (
        <div className="priceing-tag">
          <div className="tagline">Most Popular</div>
        </div>
      )}
    </div>
  );
}
