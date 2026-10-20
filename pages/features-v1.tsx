import PageHead from "@/components/ui/PageHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FeaturesHero from "@/components/sections/features-shared/FeaturesHero";
import PlatformSection from "@/components/sections/features-v1/PlatformSection";
import SolutionsSection from "@/components/sections/features-v1/SolutionsSection";
import TradeSection from "@/components/sections/features-v1/TradeSection";
import SuccessRateSection from "@/components/sections/SuccessRateSection";

const TITLE = "Features V1 | Trenox";
const DESCRIPTION =
  "All your investing in one place: monitoring, analytics, performance and feedback, laid out tab by tab.";

export default function FeaturesV1() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <div className="main-hero">
          <Navbar />
          <FeaturesHero
            headingTag="h1"
            subHeadingClassName="features-v1-sub-heading"
            wrapClassName="features-v1-hero"
          />
          <div className="bg-linear" />
        </div>
        <SuccessRateSection />
        <PlatformSection />
        <TradeSection />
        <SolutionsSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
