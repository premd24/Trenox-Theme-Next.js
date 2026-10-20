import { productAbout, type Product } from "@/data/products";
import { img } from "@/lib/utils";

type PlanDetailsSectionProps = { product: Product };

/** "About The Plan" copy and the plan's included features. */
export default function PlanDetailsSection({ product }: PlanDetailsSectionProps) {
  return (
    <section className="priceing-details">
      <div className="container">
        <div className="priceing-details-wrap">
          <div className="priceing-details-top reveal-up-blur">
            <h4 className="h4">About The Plan</h4>
            <p className="p-text-02 text-white-70">{productAbout}</p>
          </div>
          <div className="priceing-details-bottom reveal-up-blur">
            <h4 className="h4">What&apos;s included in the plan?</h4>
            <div className="plan-included-list">
              {product.features.map((feature) => (
                <div className="included-list" key={feature}>
                  <img alt="" loading="lazy" src={img("Check.svg")} />
                  <div className="p-text-03">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
