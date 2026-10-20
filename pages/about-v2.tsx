import FooterV3 from "@/components/layout/FooterV3";
import Navbar from "@/components/layout/Navbar";
import PageHead from "@/components/ui/PageHead";
import AboutV2Hero from "@/components/sections/about-v2/AboutV2Hero";
import CompaniesSection from "@/components/sections/about-v2/CompaniesSection";
import FounderMessageSection from "@/components/sections/about-v2/FounderMessageSection";
import MissionSection from "@/components/sections/about-v2/MissionSection";
import OurTeamsSection from "@/components/sections/about-v2/OurTeamsSection";
import PurposeSection from "@/components/sections/about-v2/PurposeSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import { aboutV2Meta } from "@/data/about-v2";

export default function AboutV2() {
  return (
    <>
      <PageHead {...aboutV2Meta} />
      <div className="page-wrapper">
        <div className="main-hero about-v2">
          <Navbar />
          <AboutV2Hero />
          <PurposeSection />
          <div className="bg-linear _002" />
        </div>
        <MissionSection />
        <FounderMessageSection />
        <div className="teams-compainies">
          <OurTeamsSection />
          <CompaniesSection />
          <div className="bg-linear-v3" />
        </div>
        <FaqSection />
        <CtaSection />
        <FooterV3 />
      </div>
    </>
  );
}
