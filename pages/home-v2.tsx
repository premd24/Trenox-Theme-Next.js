import Navbar from "@/components/layout/Navbar";
import BrandLogoSection from "@/components/sections/BrandLogoSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterV2 from "@/components/sections/home-shared/FooterV2";
import PageHead from "@/components/ui/PageHead";
import FeaturesV2Section from "@/components/sections/home-v2/FeaturesV2Section";
import HeroV2Section from "@/components/sections/home-v2/HeroV2Section";
import IntegrationSection from "@/components/sections/home-v2/IntegrationSection";
import PricingV2Section from "@/components/sections/home-v2/PricingV2Section";
import TrustedSection from "@/components/sections/home-v2/TrustedSection";
import { img } from "@/lib/utils";

const TITLE = "Home V2 | Trenox";
const DESCRIPTION =
  "Crush your trading goals — the second Trenox homepage layout, with a scroll-driven feature rail and a two-plan pricing teaser.";

export default function HomeV2() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <div className="main-hero-02">
          <Navbar />
          <HeroV2Section />
          <div className="home-hero-v2-bg reveal-hero-bg">
            <img alt="" className="fit-cover _001" loading="lazy" src={img("home.avif")} />
          </div>
        </div>
        <BrandLogoSection />
        <FeaturesV2Section />
        <TrustedSection />
        <IntegrationSection />
        <PricingV2Section />
        <FaqSection />
        <FooterV2 formId="email-form-2" inputId="email-2" />
      </div>
    </>
  );
}
