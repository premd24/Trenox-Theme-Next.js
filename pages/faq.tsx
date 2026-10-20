import PageHead from "@/components/ui/PageHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FaqCategoriesSection from "@/components/sections/faq-page/FaqCategoriesSection";
import FaqHeroSection from "@/components/sections/faq-page/FaqHeroSection";

const TITLE = "FAQ | Trenox";
const DESCRIPTION =
  "Answers to the questions we get most about Trenox — accounts, pricing, security and integrations.";

export default function FaqPage() {
  return (
    <>
      <PageHead title={TITLE} description={DESCRIPTION} />
      <div className="page-wrapper">
        <div className="main-hero">
          <Navbar />
          <FaqHeroSection />
          <div className="bg-linear" />
        </div>
        <FaqCategoriesSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
