import { relatedIntegrations } from "@/data/integrations";
import { IntegrationGrid } from "./IntegrationCard";

type RelatedIntegrationsSectionProps = { slug: string };

/** "More apps like this" (`integrations-v2`). */
export default function RelatedIntegrationsSection({ slug }: RelatedIntegrationsSectionProps) {
  return (
    <section className="integrations-v2">
      <div className="container">
        <div className="integrations-v1-wrap">
          <div className="integrations-v1-left reveal-rise-lg">
            <h2 className="h2 text-linear">More apps like this</h2>
          </div>
          <div className="integrations-v1-right">
            <IntegrationGrid items={relatedIntegrations(slug)} />
          </div>
        </div>
      </div>
    </section>
  );
}
