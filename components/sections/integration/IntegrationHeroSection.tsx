import SiteLink from "@/components/ui/SiteLink";
import { integrationTagline, type Integration } from "@/data/integrations";
import { img } from "@/lib/utils";

type IntegrationHeroSectionProps = { integration: Integration };

/** Logo, name and tagline of one integration, with a Support button. */
export default function IntegrationHeroSection({ integration }: IntegrationHeroSectionProps) {
  return (
    <section className="hero integrations-single-hero">
      <div className="container">
        <div className="integrations-single-wrap">
          <div className="integrations-single-left">
            <div className="integrations-single-logo reveal-grow">
              <img alt={`${integration.name} logo`} className="fit-cover" loading="lazy" src={img(integration.logo)} />
            </div>
            <h1 className="h2 reveal-rise-lg">{integration.name}</h1>
            <p className="p-text-01 text-white-60 reveal-rise">{integrationTagline}</p>
          </div>
          <div className="integrations-single-right">
            <SiteLink className="form-submit-button v2 wf-button reveal-grow" href="/contact">
              Support
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
