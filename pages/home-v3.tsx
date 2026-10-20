import Navbar from "@/components/layout/Navbar";
import BrandLogoSection from "@/components/sections/BrandLogoSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterV2 from "@/components/sections/home-shared/FooterV2";
import PageHead from "@/components/ui/PageHead";
import FeaturesV3Section from "@/components/sections/home-v3/FeaturesV3Section";
import HeroV3Section from "@/components/sections/home-v3/HeroV3Section";
import IntegrationV3Section from "@/components/sections/home-v3/IntegrationV3Section";
import ProcessSection from "@/components/sections/home-v3/ProcessSection";
import TestimonialsV3Section from "@/components/sections/home-v3/TestimonialsV3Section";

const TITLE = "Home V3 | Trenox";
const DESCRIPTION =
  "Strategic tools to reach your trading goals — the third Trenox homepage layout, with a tabbed hero and a scrolling testimonial rail.";

export default function HomeV3() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <div className="main-hero-03">
          <Navbar />
          <HeroV3Section />
        </div>
        <BrandLogoSection />
        <FeaturesV3Section />
        <IntegrationV3Section />
        <ProcessSection />
        <TestimonialsV3Section />
        <FaqSection />
        <FooterV2 formId="email-form" inputId="email" />
      </div>
    </>
  );
}
