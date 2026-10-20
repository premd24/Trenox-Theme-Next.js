import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StyleGuideHero from "@/components/sections/style-guide/StyleGuideHero";
import StyleGuideSection from "@/components/sections/style-guide/StyleGuideSection";
import PageHead from "@/components/ui/PageHead";

export default function StyleGuide() {
  return (
    <>
      <PageHead
        description="Typography, colour, buttons and form elements — the full Trenox design system on one page."
        title="Style Guide | Trenox"
      />
      <div className="page-wrapper">
        <div className="main-hero">
          <Navbar />
          <StyleGuideHero />
          <div className="bg-linear" />
        </div>
        <StyleGuideSection />
        <Footer />
      </div>
    </>
  );
}
