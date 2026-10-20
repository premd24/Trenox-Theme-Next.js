import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHead from "@/components/ui/PageHead";
import PageHero from "@/components/sections/content/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import LicenseSection from "@/components/sections/license/LicenseSection";
import { licenseHero } from "@/data/license";

export default function License() {
  return (
    <>
      <PageHead title="License | Trenox" description="License terms and image credits for the Trenox HTML template." />
      <div className="page-wrapper">
        <div className="main-hero license">
          <Navbar />
          <PageHero {...licenseHero} wrapClass="license-hero-wrap" subHeadingClass="license-sub-heading" />
          <div className="bg-linear" />
        </div>
        <LicenseSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
