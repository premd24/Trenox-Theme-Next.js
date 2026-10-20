import type { GetStaticPaths, GetStaticProps } from "next";
import PageHead from "@/components/ui/PageHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import IntegrationDetailSection from "@/components/sections/integration/IntegrationDetailSection";
import IntegrationHeroSection from "@/components/sections/integration/IntegrationHeroSection";
import RelatedIntegrationsSection from "@/components/sections/integration/RelatedIntegrationsSection";
import { findIntegration, integrations, type Integration } from "@/data/integrations";

type IntegrationPageProps = { integration: Integration };

export default function IntegrationPage({ integration }: IntegrationPageProps) {
  const title = `${integration.name} integration | Trenox`;
  return (
    <>
      <PageHead title={title} description={integration.intro} />
      <div className="page-wrapper">
        <div className="main-hero">
          <Navbar />
          <IntegrationHeroSection integration={integration} />
          <div className="bg-linear" />
        </div>
        <IntegrationDetailSection intro={integration.intro} />
        <RelatedIntegrationsSection slug={integration.slug} />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: integrations.map(({ slug }) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<IntegrationPageProps, { slug: string }> = ({ params }) => {
  const integration = params && findIntegration(params.slug);
  return integration ? { props: { integration } } : { notFound: true };
};
