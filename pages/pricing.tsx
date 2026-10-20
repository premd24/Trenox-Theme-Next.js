import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import PageHead from "@/components/ui/PageHead";
import CompareSection from "@/components/sections/CompareSection";
import PricingHeroSection from "@/components/sections/pricing/PricingHeroSection";
import PricingPlansSection from "@/components/sections/pricing/PricingPlansSection";

export default function Pricing() {
  return (
    <>
      <PageHead
        description="Three plans for every trader — compare Starter, Pro and Enterprises monthly or yearly, feature by feature."
        title="Pricing | Trenox"
      />
      <div className="page-wrapper">
        <div className="main-hero priceing-hero">
          <Navbar />
          <PricingHeroSection />
          <PricingPlansSection />
          <div className="bg-linear priceing-linear" />
        </div>
        <CompareSection className="v1" />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
