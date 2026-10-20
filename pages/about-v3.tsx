import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHead from "@/components/ui/PageHead";
import AboutV3Hero from "@/components/sections/about-v3/AboutV3Hero";
import OurStorySection from "@/components/sections/about-v3/OurStorySection";
import OurTeamSection from "@/components/sections/about-v3/OurTeamSection";
import TradersSection from "@/components/sections/about-v3/TradersSection";
import CtaSection from "@/components/sections/CtaSection";
import { aboutV3Meta } from "@/data/about-v3";

export default function AboutV3() {
  return (
    <>
      <PageHead {...aboutV3Meta} />
      <div className="page-wrapper">
        <div className="main-hero about-v3-hero-bg">
          <Navbar />
          <AboutV3Hero />
          <div className="bg-linear" />
        </div>
        <OurStorySection />
        <OurTeamSection />
        <TradersSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
