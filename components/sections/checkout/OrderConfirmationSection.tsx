import { useCart } from "@/context/CartContext";
import { OrderItemsBlock, OrderSummaryBlock } from "./OrderBlocks";

/** The order summary page; the subtotal shows the last placed order's total. */
export default function OrderConfirmationSection() {
  const { order, subtotal } = useCart();

  return (
    <div className="wf-commerce-commerceorderconfirmationcontainer order-confirmation">
      <div className="wf-commerce-commercelayoutcontainer container wf-container">
        <div className="wf-commerce-commercelayoutmain">
          <div className="wf-commerce-commercecheckoutcustomerinfosummarywrapper">
            <SummaryHeader title="Customer Information" />
            <fieldset className="wf-commerce-commercecheckoutblockcontent">
              <div className="wf-commerce-commercecheckoutrow">
                <div className="wf-commerce-commercecheckoutcolumn">
                  <div className="wf-commerce-commercecheckoutsummaryitem">
                    <label className="wf-commerce-commercecheckoutsummarylabel">Email</label>
                    <div />
                  </div>
                </div>
                <div className="wf-commerce-commercecheckoutcolumn">
                  <AddressSummary label="Shipping Address" />
                </div>
              </div>
            </fieldset>
          </div>
          <div className="wf-commerce-commercecheckoutshippingsummarywrapper">
            <SummaryHeader title="Shipping Method" />
            <fieldset className="wf-commerce-commercecheckoutblockcontent">
              <div className="wf-commerce-commercecheckoutrow">
                <div className="wf-commerce-commercecheckoutcolumn">
                  <div className="wf-commerce-commercecheckoutsummaryitem">
                    <div />
                    <div />
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="wf-commerce-commercecheckoutpaymentsummarywrapper">
            <SummaryHeader title="Payment Info" />
            <fieldset className="wf-commerce-commercecheckoutblockcontent">
              <div className="wf-commerce-commercecheckoutrow">
                <div className="wf-commerce-commercecheckoutcolumn">
                  <div className="wf-commerce-commercecheckoutsummaryitem">
                    <label className="wf-commerce-commercecheckoutsummarylabel">Payment Info</label>
                    <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                      <div className="wf-commerce-commercecheckoutsummarytextspacingondiv" />
                      <div className="wf-commerce-commercecheckoutsummarytextspacingondiv" />
                    </div>
                    <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
                      <div />
                      <div>/</div>
                      <div />
                    </div>
                  </div>
                </div>
                <div className="wf-commerce-commercecheckoutcolumn">
                  <AddressSummary label="Billing Address" />
                </div>
              </div>
            </fieldset>
          </div>
          <OrderItemsBlock />
        </div>
        <div className="wf-commerce-commercelayoutsidebar">
          <OrderSummaryBlock subtotal={order ? order.total : subtotal} />
        </div>
      </div>
    </div>
  );
}

function SummaryHeader({ title }: { title: string }) {
  return (
    <div className="wf-commerce-commercecheckoutsummaryblockheader bg-primary-gradient">
      <h3>{title}</h3>
    </div>
  );
}

/** Empty address lines (Webflow fills these from a real order). */
function AddressSummary({ label }: { label: string }) {
  return (
    <div className="wf-commerce-commercecheckoutsummaryitem">
      <label className="wf-commerce-commercecheckoutsummarylabel">{label}</label>
      <div />
      <div />
      <div />
      <div className="wf-commerce-commercecheckoutsummaryflexboxdiv">
        <div className="wf-commerce-commercecheckoutsummarytextspacingondiv" />
        <div className="wf-commerce-commercecheckoutsummarytextspacingondiv" />
        <div className="wf-commerce-commercecheckoutsummarytextspacingondiv" />
      </div>
      <div />
    </div>
  );
}
