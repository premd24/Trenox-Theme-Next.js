import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ChangeLogSection from "@/components/sections/changelog/ChangeLogSection";
import PageHead from "@/components/ui/PageHead";
import PageHero from "@/components/sections/content/PageHero";
import { changelogHero } from "@/data/changelog";

export default function Changelog() {
  return (
    <>
      <PageHead
        title="Changelog | Trenox"
        description="Every release of the Trenox template, with what changed in each one."
      />
      <div className="page-wrapper">
        <div className="main-hero changelog">
          <Navbar />
          <PageHero {...changelogHero} sectionClass="changelog-hero" subHeadingClass="change-log-sub-heading" />
          <div className="bg-linear" />
        </div>
        <ChangeLogSection />
        <Footer />
      </div>
    </>
  );
}
