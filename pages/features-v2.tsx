import PageHead from "@/components/ui/PageHead";
import Footer from "@/components/layout/Footer";
import BrandLogoSection from "@/components/sections/BrandLogoSection";
import CtaSection from "@/components/sections/CtaSection";
import CompareSection from "@/components/sections/features-v2/CompareSection";
import DeepTradeSection from "@/components/sections/features-v2/DeepTradeSection";
import FeaturesV2Hero from "@/components/sections/features-v2/FeaturesV2Hero";
import SuccessRateSection from "@/components/sections/SuccessRateSection";
import WhyChooseUsSection from "@/components/sections/features-v2/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const TITLE = "Features V2 | Trenox";
const DESCRIPTION =
  "Trenox compared feature by feature — pricing, execution speed and the tools traders actually use.";

export default function FeaturesV2() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <FeaturesV2Hero />
        <BrandLogoSection />
        <WhyChooseUsSection />
        <CompareSection />
        <DeepTradeSection />
        <TestimonialsSection />
        <SuccessRateSection className="variant-margin-bottom-160" />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
