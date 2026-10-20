import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BlogListSection from "@/components/sections/blog/BlogListSection";
import PageHead from "@/components/ui/PageHead";
import PageHero from "@/components/sections/content/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import { blogHero } from "@/data/blog";

export default function Blog() {
  return (
    <>
      <PageHead
        title="Blog | Trenox"
        description="Market insights, trading strategies and industry trends from the Trenox desk."
      />
      <div className="page-wrapper">
        <div className="main-hero">
          <Navbar />
          <PageHero {...blogHero} wrapClass="blog-hero-wrap" />
          <div className="bg-linear" />
        </div>
        <BlogListSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
