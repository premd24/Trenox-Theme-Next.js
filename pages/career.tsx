import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BenefitsSection from "@/components/sections/career/BenefitsSection";
import PositionsSection from "@/components/sections/career/PositionsSection";
import YouflowSection from "@/components/sections/career/YouflowSection";
import PageHead from "@/components/ui/PageHead";
import PageHero from "@/components/sections/content/PageHero";
import { careerHero } from "@/data/career";

export default function Career() {
  return (
    <>
      <PageHead
        title="Careers | Trenox"
        description="Join the team powering the next generation of traders — open roles, benefits and how we hire."
      />
      <div className="page-wrapper">
        <div className="main-hero career-hero">
          <Navbar />
          <PageHero {...careerHero} sectionClass="career-home-hero" wrapClass="career-hero-wrap" />
          <div className="bg-linear" />
        </div>
        <PositionsSection />
        <YouflowSection />
        <BenefitsSection />
        <Footer />
      </div>
    </>
  );
}
