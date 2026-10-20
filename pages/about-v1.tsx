import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHead from "@/components/ui/PageHead";
import AboutUsSection from "@/components/sections/about-v1/AboutUsSection";
import AboutV1Hero from "@/components/sections/about-v1/AboutV1Hero";
import BenefitsSection from "@/components/sections/about-v1/BenefitsSection";
import EventSection from "@/components/sections/about-v1/EventSection";
import FoundersSection from "@/components/sections/about-v1/FoundersSection";
import ProcessSection from "@/components/sections/about-v1/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";
import { aboutV1Meta } from "@/data/about-v1";

export default function AboutV1() {
  return (
    <>
      <PageHead {...aboutV1Meta} />
      <div className="page-wrapper">
        <div className="main-hero">
          <Navbar />
          <AboutV1Hero />
          <div className="bg-linear" />
        </div>
        <AboutUsSection />
        <ProcessSection />
        <BenefitsSection />
        <FoundersSection />
        <EventSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
