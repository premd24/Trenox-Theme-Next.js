import Head from "next/head";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BrandLogoSection from "@/components/sections/BrandLogoSection";
import CompareSection from "@/components/sections/CompareSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import PricingSection from "@/components/sections/PricingSection";
import SuccessRateSection from "@/components/sections/SuccessRateSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

const TITLE = "Trenox — Trading, Crypto & Finance";
const DESCRIPTION =
  "Trenox is a modern platform for trading, cryptocurrency and finance — real-time market insight, advanced account analysis and portfolio management.";

export default function Home() {

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>
      <div className="page-wrapper">
        <div className="main-hero home-v1-hero">
          <Navbar />
          <HeroSection />
        </div>
        <SuccessRateSection />
        <div className="margin-top-120" />
        <BrandLogoSection />
        <WhyChooseUsSection />
        <FeaturesSection />
        <LanguagesSection />
        <TestimonialsSection />
        <PricingSection />
        <CompareSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
