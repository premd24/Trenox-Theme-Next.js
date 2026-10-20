import PageHead from "@/components/ui/PageHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import IntegrationsHeroSection from "@/components/sections/integration/IntegrationsHeroSection";
import IntegrationsListSection from "@/components/sections/integration/IntegrationsListSection";
import IntegrationTestimonialsSection from "@/components/sections/integration/IntegrationTestimonialsSection";

const TITLE = "Integrations | Trenox";
const DESCRIPTION =
  "Connect Trenox to the tools you already use — nine integrations, from Instagram DMs to your CMS.";

export default function IntegrationsPage() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <div className="main-hero integrations">
          <Navbar />
          <IntegrationsHeroSection />
          <div className="bg-linear hide-tab" />
          <IntegrationsListSection />
        </div>
        <IntegrationTestimonialsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
