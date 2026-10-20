import { useRouter } from "next/router";
import { useRef, type CSSProperties, type MouseEvent } from "react";
import { useCart } from "@/context/CartContext";
import AddressFields from "./AddressFields";
import { OrderItemsBlock, OrderSummaryBlock } from "./OrderBlocks";

/** Customer, shipping and payment forms, the cart lines, and Place Order. */
export default function CheckoutSection() {
  const router = useRouter();
  const { subtotal, placeOrder } = useCart();
  const customerForm = useRef<HTMLFormElement>(null);
  const shippingForm = useRef<HTMLFormElement>(null);

  // Saves the cart as the order, empties the cart and shows the confirmation.
  const onPlaceOrder = (e: MouseEvent) => {
    e.preventDefault();
    for (const form of [customerForm.current, shippingForm.current]) {
      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
    }
    placeOrder();
    router.push("/order-confirmation");
  };

  return (
    <div className="wf-commerce-commercecheckoutformcontainer checkout-form">
      <div className="wf-commerce-commercelayoutcontainer container wf-container">
        <div className="wf-commerce-commercelayoutmain">
          <div />
          <form className="wf-commerce-commercecheckoutcustomerinfowrapper" ref={customerForm}>
            <BlockHeader title="Customer Info" required />
            <fieldset className="wf-commerce-commercecheckoutblockcontent block-content-2">
              <label className="wf-commerce-commercecheckoutlabel" htmlFor="wf-ecom-email">
                Email *
              </label>
              <input className="wf-commerce-commercecheckoutemailinput" id="wf-ecom-email" name="email" required type="text" />
            </fieldset>
          </form>
          <form className="wf-commerce-commercecheckoutshippingaddresswrapper" ref={shippingForm}>
            <BlockHeader title="Shipping Address" required />
            <AddressFields kind="shipping" />
          </form>
          <form className="wf-commerce-commercecheckoutshippingmethodswrapper">
            <BlockHeader title="Shipping Method" />
            <fieldset>
              <div className="wf-commerce-commercecheckoutshippingmethodslist">
                <label className="wf-commerce-commercecheckoutshippingmethoditem">
                  <input name="shipping-method-choice" required type="radio" />
                  <div className="wf-commerce-commercecheckoutshippingmethoddescriptionblock">
                    <div className="wf-commerce-commerceboldtextblock" />
                    <div />
                  </div>
                  <div />
                </label>
              </div>
            </fieldset>
          </form>
          <div className="wf-commerce-commercecheckoutpaymentinfowrapper">
            <BlockHeader title="Payment Info" required />
            <fieldset className="wf-commerce-commercecheckoutblockcontent">
              <label className="wf-commerce-commercecheckoutlabel" htmlFor="">
                Card Number *
              </label>
              <CardField className="wf-commerce-commercecheckoutcardnumber" />
              <div className="wf-commerce-commercecheckoutrow">
                <div className="wf-commerce-commercecheckoutcolumn">
                  <label className="wf-commerce-commercecheckoutlabel" htmlFor="">
                    Expiration Date *
                  </label>
                  <CardField className="wf-commerce-commercecheckoutcardexpirationdate" />
                </div>
                <div className="wf-commerce-commercecheckoutcolumn">
                  <label className="wf-commerce-commercecheckoutlabel" htmlFor="">
                    Security Code *
                  </label>
                  <CardField className="wf-commerce-commercecheckoutcardsecuritycode" />
                </div>
              </div>
              <div className="wf-commerce-commercecheckoutbillingaddresstogglewrapper">
                <input
                  className="wf-commerce-commercecheckoutbillingaddresstogglecheckbox"
                  defaultChecked
                  id="billing-address-toggle"
                  type="checkbox"
                />
                <label className="wf-commerce-commercecheckoutbillingaddresstogglelabel" htmlFor="billing-address-toggle">
                  Billing address same as shipping
                </label>
              </div>
            </fieldset>
          </div>
          <form className="wf-commerce-commercecheckoutbillingaddresswrapper is-hidden">
            <BlockHeader title="Billing Address" required />
            <AddressFields defaultCountry="US" kind="billing" />
          </form>
          <OrderItemsBlock />
        </div>
        <div className="wf-commerce-commercelayoutsidebar">
          <OrderSummaryBlock styled subtotal={subtotal} />
          <a
            className="wf-commerce-commercecheckoutplaceorderbutton form-submit-button v1 reveal-grow"
            href="#"
            onClick={onPlaceOrder}
          >
            Place Order
          </a>
        </div>
      </div>
    </div>
  );
}

function BlockHeader({ title, required }: { title: string; required?: boolean }) {
  return (
    <div className="wf-commerce-commercecheckoutblockheader bg-primary-gradient">
      <h3>{title}</h3>
      {required && <div>* Required</div>}
    </div>
  );
}

const cover: CSSProperties = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" };

/** Placeholder for a (Stripe) card input. */
function CardField({ className }: { className: string }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      <div />
      <div className="reveal-up" style={cover} />
    </div>
  );
}
