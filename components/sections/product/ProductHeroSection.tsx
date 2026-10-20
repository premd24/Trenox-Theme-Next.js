import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import ShortTag from "@/components/ui/ShortTag";
import { parsePrice, useCart } from "@/context/CartContext";
import type { Product, Variant } from "@/data/products";
import { cx, img } from "@/lib/utils";

const variants: Variant[] = ["Monthly", "Yearly"];

type ProductHeroSectionProps = { product: Product };

/** Plan title, the plan-duration pills and the plan card with "Choose Plan" (add to cart). */
export default function ProductHeroSection({ product }: ProductHeroSectionProps) {
  const { add } = useCart();
  const [selected, setSelected] = useState(product.initialVariant);
  // The card keeps its initial price and label until a pill is picked.
  const [picked, setPicked] = useState(false);
  const pills = useRef<(HTMLDivElement | null)[]>([]);

  const price = picked ? product.variantPrices[selected] : product.price;
  const duration = picked && selected === "Yearly" ? "/per year" : "/per month";

  const pick = (variant: Variant) => {
    setSelected(variant);
    setPicked(true);
  };

  const onPillKey = (e: KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pick(variants[index]);
      return;
    }
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + variants.length) % variants.length;
    pills.current[next]?.focus();
    pick(variants[next]);
  };

  // Both forms add the plan at the shown price, with their quantity input.
  const addToCart = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const qty = e.currentTarget.querySelector<HTMLInputElement>(".wf-commerce-commerceaddtocartquantityinput");
    add({ id: product.slug, name: product.name, price: parsePrice(price), qty: parseInt(qty?.value ?? "", 10) || 1 });
  };

  return (
    <section className="hero priceing-single">
      <div className="container">
        <div className="hero-01-wrap single-priceing-hero">
          <ShortTag label="Pricing" />
          <div className="heading-wrap style-guide-heading reveal-rise-lg">
            <h1 className="h2">{product.name}</h1>
          </div>
          <div className="sub-heading-wrap reveal-rise">
            <p className="p-text-01 text-white-60">{product.description}</p>
          </div>
        </div>
        <div className="plan-view-wrap">
          <div className="plan-duration-wrap">
            <div>
              <form className="wf-commerce-commerceaddtocartform default-state-2" onSubmit={addToCart}>
                <div className="option-list" role="group">
                  <label className="hide" htmlFor="plan-duration">
                    Plan Duration
                  </label>
                  <div
                    aria-label="Plan Duration"
                    className="wf-commerce-commerceaddtocartoptionpillgroup button-group"
                    id="plan-duration"
                    role="radiogroup"
                  >
                    {variants.map((variant, i) => (
                      <div
                        aria-checked={selected === variant}
                        className={cx(
                          "wf-commerce-commerceaddtocartoptionpill button-4",
                          selected === variant && "is-selected",
                        )}
                        key={variant}
                        onClick={() => pick(variant)}
                        onKeyDown={(e) => onPillKey(e, i)}
                        ref={(el) => {
                          pills.current[i] = el;
                        }}
                        role="radio"
                        tabIndex={selected === variant ? 0 : -1}
                      >
                        {variant}
                      </div>
                    ))}
                  </div>
                </div>
                <QuantityInput id="quantity-4ed348d12b6d676af55c59e48aeb40d3" />
                <input
                  aria-busy={false}
                  aria-haspopup="dialog"
                  className="wf-commerce-commerceaddtocartbutton hide"
                  type="submit"
                  value="Add to Cart"
                />
              </form>
            </div>
          </div>
          <div className="priceing-01-card-wrapper v3">
            <div className="priceing-01-card-wrap">
              <div className="priceing-01-card-top">
                <div className="icon-box-wrap">
                  <img alt={product.iconAlt} loading="lazy" src={img(product.icon)} />
                </div>
                <h4>{product.name}</h4>
              </div>
              <div className="priceing-01-price-details">
                <div className="priceing-01-price">
                  <h3 className="h3">{price}</h3>
                  <div className="priceing-deuration">{duration}</div>
                </div>
                <p className="p-text-03 text-white-70">{product.description}</p>
              </div>
              <div className="vertical-lineer cta-v2-button-wrap" />
              <div className="priceing-01-button-wrap">
                <div>
                  <form className="wf-commerce-commerceaddtocartform default-state" onSubmit={addToCart}>
                    <QuantityInput id="quantity-4ed348d12b6d676af55c59e48aeb40d3-2" />
                    <input
                      aria-busy={false}
                      aria-haspopup="dialog"
                      className="wf-commerce-commerceaddtocartbutton button-02 plan-button v2"
                      type="submit"
                      value="Choose Plan"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="priceing-01-card-shadow" />
            <div className="priceing-tag">
              <div className="tagline">Most Popular</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** The (hidden) Webflow quantity field. */
function QuantityInput({ id }: { id: string }) {
  return (
    <>
      <label className="hide" htmlFor={id}>
        Quantity
      </label>
      <input
        className="wf-commerce-commerceaddtocartquantityinput hide"
        defaultValue={1}
        id={id}
        inputMode="numeric"
        min={1}
        name="commerce-add-to-cart-quantity-input"
        pattern="^[0-9]+$"
        type="number"
      />
    </>
  );
}
