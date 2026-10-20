import { formatMoney, useCart } from "@/context/CartContext";
import { cx } from "@/lib/utils";

/** "Items in Order": one line per cart item. */
export function OrderItemsBlock() {
  const { items } = useCart();

  return (
    <div className="wf-commerce-commercecheckoutorderitemswrapper">
      <div className="wf-commerce-commercecheckoutsummaryblockheader bg-primary-gradient">
        <h3>Items in Order</h3>
      </div>
      <fieldset className="wf-commerce-commercecheckoutblockcontent">
        <div className="wf-commerce-commercecheckoutorderitemslist" role="list">
          {items.map((it, i) => (
            <div className="checkout-line" key={`${it.id}-${i}`}>
              <div className="p-text-02">
                {it.name}
                {it.qty > 1 ? ` x${it.qty}` : ""}
              </div>
              <div className="p-text-02">{formatMoney(it.price * it.qty)}</div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

type OrderSummaryBlockProps = {
  subtotal: number;
  /** The checkout version has a styled heading and padded content. */
  styled?: boolean;
};

/** "Order Summary" with the subtotal (the total cell stays empty, as in the original). */
export function OrderSummaryBlock({ subtotal, styled }: OrderSummaryBlockProps) {
  return (
    <div className="wf-commerce-commercecheckoutordersummarywrapper">
      <div className="wf-commerce-commercecheckoutsummaryblockheader bg-primary-gradient">
        <h4 className={styled ? "h4" : undefined}>Order Summary</h4>
      </div>
      <fieldset className={cx("wf-commerce-commercecheckoutblockcontent", styled && "block-content")}>
        <div className="wf-commerce-commercecheckoutsummarylineitem">
          <div>Subtotal</div>
          <div>{formatMoney(subtotal)}</div>
        </div>
        <div className="wf-commerce-commercecheckoutsummarylineitem">
          <div>Total</div>
          <div className="wf-commerce-commercecheckoutsummarytotal" />
        </div>
      </fieldset>
    </div>
  );
}
