import Link from "next/link";
import { useLenis } from "lenis/react";
import { useEffect, type MouseEvent } from "react";
import { formatMoney, useCart } from "@/context/CartContext";
import { img } from "@/lib/utils";

/** Cart icon with item count, and the cart dialog it opens. */
export default function CartModal() {
  const { items, count, subtotal, remove, cartOpen: open, setCartOpen: setOpen } = useCart();
  const lenis = useLenis();

  // The page shouldn't scroll behind the open dialog.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  const show = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(true);
  };
  const hide = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="wf-commerce-commercecartwrapper" data-cart="1">
      <a
        aria-haspopup="dialog"
        aria-label="Open cart"
        className="wf-commerce-commercecartopenlink cart-button inline-block"
        data-cart-open="1"
        href="#"
        onClick={show}
        role="button"
      >
        <img alt="" className="cart-icon" loading="lazy" src={img("shopping-cart-02.svg")} />
        <div
          className="wf-commerce-commercecartopenlinkcount cart-quantity"
          style={count ? undefined : { display: "none" }}
        >
          {count}
        </div>
      </a>
      <div
        aria-hidden={!open}
        className={`wf-commerce-commercecartcontainerwrapper wf-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper${open ? " is-open" : ""}`}
        data-cart-modal="1"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="wf-commerce-commercecartcontainer cart-container" data-lenis-prevent role="dialog">
          <div className="wf-commerce-commercecartheader cart-header">
            <h4 className="wf-commerce-commercecartheading h3">Your Cart</h4>
            <a
              aria-label="Close cart"
              className="wf-commerce-commercecartcloselink close-button inline-block"
              href="#"
              onClick={hide}
              role="button"
            >
              <svg className="icon" height="16px" viewBox="0 0 16 16" width="16px">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g fill="#333333" fillRule="nonzero">
                    <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="wf-commerce-commercecartformwrapper">
            <form
              className="wf-commerce-commercecartform"
              style={items.length ? undefined : { display: "none" }}
            >
              <div className="wf-commerce-commercecartlist cart-list">
                {items.map((it, i) => (
                  <div className="cart-line" key={`${it.id}-${i}`}>
                    <div className="p-text-02">
                      {it.name}
                      {it.qty > 1 ? ` x${it.qty}` : ""}
                    </div>
                    <div className="p-text-02">{formatMoney(it.price * it.qty)}</div>
                    <button
                      aria-label={`Remove ${it.name}`}
                      className="cart-line-remove"
                      onClick={() => remove(i)}
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="wf-commerce-commercecartfooter cart-footer">
                <div aria-atomic="true" aria-live="polite" className="wf-commerce-commercecartlineitem">
                  <div>Subtotal</div>
                  <div className="wf-commerce-commercecartordervalue">{formatMoney(subtotal)}</div>
                </div>
                <div>
                  <div />
                  <Link className="wf-commerce-commercecartcheckoutbutton checkout-button" href="/checkout" onClick={() => setOpen(false)}>
                    Continue to Checkout
                  </Link>
                </div>
              </div>
            </form>
            <div
              className="wf-commerce-commercecartemptystate"
              style={items.length ? { display: "none" } : undefined}
            >
              <div aria-label="This cart is empty" aria-live="polite" className="p-text-01">
                No items found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
