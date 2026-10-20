import PageHead from "@/components/ui/PageHead";
import FooterV3 from "@/components/layout/FooterV3";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturesHero from "@/components/sections/features-shared/FeaturesHero";
import ExploreFeaturesSection from "@/components/sections/features-v3/ExploreFeaturesSection";
import IntegrationSection from "@/components/sections/features-v3/IntegrationSection";
import ToolsSection from "@/components/sections/features-v3/ToolsSection";
import { img } from "@/lib/utils";

const TITLE = "Features V3 | Trenox";
const DESCRIPTION =
  "Streamline everything with one integration — real-time market insight, risk assessment and profit analytics.";

export default function FeaturesV3() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <div className="main-hero features-v3-hero">
          <Navbar />
          <FeaturesHero
            className="features-v3-hero-wrap"
            headingClassName="features-heading"
            headingTag="h2"
            subHeadingClassName="style-guide-sub-heading"
            wrapClassName="features-hero"
          />
          <div className="bg-linear _001" />
          <img alt="" className="features-v3-bg reveal-hero-bg-lg" loading="lazy" src={img("Features-Bg.avif")} />
        </div>
        <ExploreFeaturesSection />
        <IntegrationSection />
        <ToolsSection />
        <FaqSection />
        <CtaSection />
        <FooterV3 />
      </div>
    </>
  );
}
