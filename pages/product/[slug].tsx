import type { GetStaticPaths, GetStaticProps } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import PageHead from "@/components/ui/PageHead";
import PlanDetailsSection from "@/components/sections/product/PlanDetailsSection";
import ProductHeroSection from "@/components/sections/product/ProductHeroSection";
import { products, type Product } from "@/data/products";

type ProductPageProps = { product: Product };

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <PageHead description={product.description} title={`${product.name} plan | Trenox`} />
      <div className="page-wrapper">
        <div className="main-hero priceing-single">
          <Navbar />
          {/* Keyed so the selected plan duration resets between products. */}
          <ProductHeroSection key={product.slug} product={product} />
          <div className="bg-linear" />
        </div>
        <PlanDetailsSection product={product} />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: products.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProductPageProps> = ({ params }) => {
  const product = products.find((p) => p.slug === params?.slug);
  return product ? { props: { product } } : { notFound: true };
};
