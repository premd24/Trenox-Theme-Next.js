import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CheckoutSection from "@/components/sections/checkout/CheckoutSection";
import PageHead from "@/components/ui/PageHead";
import { useBodyClass } from "@/components/sections/checkout/useBodyClass";

export default function Checkout() {
  useBodyClass("body-v2");

  return (
    <>
      <PageHead description="Review your order and complete your purchase." title="Checkout | Trenox" />
      <h1 className="sr-only">Checkout</h1>
      <div className="page-wrapper">
        <Navbar />
      </div>
      <CheckoutSection />
      <div className="page-wrapper">
        <Footer />
      </div>
    </>
  );
}
