import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import OrderConfirmationSection from "@/components/sections/checkout/OrderConfirmationSection";
import PageHead from "@/components/ui/PageHead";
import { useBodyClass } from "@/components/sections/checkout/useBodyClass";

export default function OrderConfirmation() {
  useBodyClass("body-v2");

  return (
    <>
      <PageHead description="Thank you — your order has been placed." title="Order Confirmation | Trenox" />
      <h1 className="sr-only">Order confirmation</h1>
      <div className="page-wrapper">
        <Navbar />
      </div>
      <OrderConfirmationSection />
      <div className="page-wrapper">
        <Footer />
      </div>
    </>
  );
}
